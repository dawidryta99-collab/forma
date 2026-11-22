// FORMA — secure Vercel function for trainer-authorized invitations.
// SUPABASE_SERVICE_ROLE_KEY must exist ONLY as a Vercel server-side environment variable.
const SITE_URL = 'https://forma-red-kappa.vercel.app';
const json = (res, status, body) => res.status(status).json(body);
const readBody = async (r) => {
  const t = await r.text();
  if (!t) return {};
  try { return JSON.parse(t); } catch { return { message: t.slice(0, 500) }; }
};

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return json(res, 405, { error: 'Użyj metody POST.' });
  const url = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const anon = process.env.SUPABASE_PUBLISHABLE_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !anon || !service)
    return json(res, 503, { error: 'Brak konfiguracji serwera. Dodaj SUPABASE_SERVICE_ROLE_KEY w ustawieniach Vercel i ponów wdrożenie.' });
  let authOrigin;
  try { authOrigin = new URL(url); } catch { return json(res, 503, { error: 'Nieprawidłowy SUPABASE_URL.' }); }
  if (authOrigin.protocol !== 'https:') return json(res, 503, { error: 'Supabase wymaga adresu HTTPS.' });
  const token = /^Bearer (.+)$/i.exec(req.headers.authorization || '')?.[1];
  if (!token) return json(res, 401, { error: 'Zaloguj się jako trenerka.' });

  const body = typeof req.body === 'string' ? (() => {try {return JSON.parse(req.body);}catch{return {};}})() : (req.body || {});
  const full_name = String(body.full_name || '').trim().replace(/\s+/g, ' ');
  const email = String(body.email || '').trim().toLowerCase();
  const phone = String(body.phone || '').trim();
  const training_location = String(body.training_location || '').trim();
  if (full_name.length < 2 || full_name.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return json(res, 400, { error: 'Podaj imię i nazwisko oraz poprawny adres e-mail.' });
  if (phone.length > 60 || !['', 'Xtreme Lesznowola', 'Xtreme Gołków'].includes(training_location))
    return json(res, 400, { error: 'Nieprawidłowy telefon lub lokalizacja.' });

  try {
    // 1) Verify JWT against Supabase Auth (do not trust a role/client_id supplied by browser).
    const identity = await fetch(url + '/auth/v1/user', {
      headers: { apikey: anon, Authorization: 'Bearer ' + token },
      signal: AbortSignal.timeout(10000)
    });
    if (!identity.ok) return json(res, 401, { error: 'Sesja wygasła. Zaloguj się ponownie.' });
    const user = await readBody(identity);
    if (!/^[0-9a-f-]{36}$/i.test(user.id || '')) return json(res, 401, { error: 'Nie można potwierdzić tożsamości.' });

    // 2) Verify current role server-side, using service role to read profiles.
    const adminHeaders = { apikey: service };
    // Legacy service_role keys are JWTs. Opaque secret keys use apikey.
    if (!service.startsWith('sb_secret_')) adminHeaders.Authorization = 'Bearer ' + service;
    const roles = await fetch(url + '/rest/v1/profiles?select=id,role&id=eq.' + encodeURIComponent(user.id), {
      headers: adminHeaders, signal: AbortSignal.timeout(10000)
    });
    if (!roles.ok) {
      console.error('Supabase trainer profile lookup failed', { status: roles.status });
      if (roles.status === 401 || roles.status === 403) {
        return json(res, 502, { error: 'Supabase odrzucił dostęp serwera do profili. Sprawdź, czy SUPABASE_SERVICE_ROLE_KEY w Vercel jest kluczem secret lub service_role z projektu wskazanego przez SUPABASE_URL.' });
      }
      return json(res, 502, { error: 'Nie można odczytać profilu trenerki w Supabase (HTTP ' + roles.status + ').' });
    }
    const roleRows = await readBody(roles);
    if (!Array.isArray(roleRows) || roleRows[0]?.role !== 'trainer')
      return json(res, 403, { error: 'Tylko trenerka może zapraszać podopieczne.' });

    // 3) Create Auth user and email invitation. Never return or expose admin key.
    const invite = await fetch(url + '/auth/v1/invite?redirect_to=' + encodeURIComponent(process.env.FORMA_SITE_URL || SITE_URL), {
      method: 'POST',
      headers: { ...adminHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, data: { full_name } }),
      signal: AbortSignal.timeout(15000)
    });
    const invited = await readBody(invite);
    if (!invite.ok) {
      const reason = String(invited.msg || invited.message || invited.error_description || '').slice(0, 300);
      return json(res, invite.status === 429 ? 429 : 400,
        { error: invite.status === 429 ? 'Limit wiadomości Supabase. Spróbuj ponownie później.' : ('Zaproszenie nie zostało wysłane. ' + (reason || 'Sprawdź, czy e-mail nie jest już zajęty.')) });
    }
    const newId = invited.id || invited.user?.id;
    if (!/^[0-9a-f-]{36}$/i.test(newId || ''))
      return json(res, 502, { error: 'Zaproszenie mogło zostać wysłane, ale serwer nie otrzymał identyfikatora użytkownika. Sprawdź Supabase Auth przed ponowną próbą.' });

    // 4) Check that invite cannot overwrite an existing trainer profile.
    const existing = await fetch(url + '/rest/v1/profiles?select=id,role&id=eq.' + encodeURIComponent(newId), {
      headers: adminHeaders, signal: AbortSignal.timeout(10000)
    });
    if (!existing.ok) return json(res, 502, { error: 'Zaproszenie wysłane, ale nie udało się sprawdzić profilu. Sprawdź Supabase przed ponowną próbą.' });
    const rows = await readBody(existing);
    if (Array.isArray(rows) && rows[0]?.role === 'trainer')
      return json(res, 409, { error: 'Nie można nadpisać profilu trenerki.' });

    const data = {
      id: newId, role: 'client', full_name, email, contact_email: email,
      phone: phone || null, training_location: training_location || null
    };
    const saved = await fetch(url + '/rest/v1/profiles?on_conflict=id', {
      method: 'POST',
      headers: { ...adminHeaders, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(data), signal: AbortSignal.timeout(10000)
    });
    if (!saved.ok) {
      const e = await readBody(saved);
      return json(res, 502, { error: 'Zaproszenie wysłano, ale nie udało się zapisać profilu. Sprawdź Auth → Users oraz tabelę profiles w Supabase. ' + String(e.message || e.code || '').slice(0, 200) });
    }
    return json(res, 200, { id: newId, email, invited: true });
  } catch (err) {
    return json(res, 502, { error: 'Błąd połączenia z Supabase. Sprawdź połączenie i konfigurację Vercel.' });
  }
};
