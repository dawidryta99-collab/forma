/* FORMA: service worker sieciowy; bez offline cache, danych klientek nie przechowujemy w Cache Storage. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* domyślna obsługa sieci, bez cache */ });
