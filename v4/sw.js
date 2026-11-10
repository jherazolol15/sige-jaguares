// SIGE Jaguares v4: siempre pide la versión nueva; la copia guardada solo se usa sin señal.
// El mismo archivo sirve en la dirección principal (/sige-jaguares/) y en la de prueba (/sige-jaguares/v4/).
// Cada una usa su propio prefijo de caché para no borrar la de la otra ni la de las demás apps.
const ALCANCE = self.registration.scope;
const PRUEBA = /\/v4\/$/.test(ALCANCE);
const PRE = PRUEBA ? "sige4p-" : "sige4r-";
const C = PRE + "41-34";
// Todo lo necesario para abrir sin señal (el día de partido puede no haber señal en la cancha)
const BASE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "mod-progreso.js", "mod-datos.js", "mod-datos-adapter.js", "mod-partido.js", "mod-partido-adapter.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x =>
    (x.startsWith(PRE) && x !== C) ||
    (PRUEBA && x.startsWith("sige4-")) ||          // caché de la primera prueba v4
    (!PRUEBA && x.startsWith("sige-v"))             // caché de la puerta v3.0
  ).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || !u.href.startsWith(ALCANCE)) return;
  if (!PRUEBA && u.pathname.startsWith("/sige-jaguares/v4/")) return; // la prueba tiene su propio service worker
  e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => { if (r.ok) { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match(new URL("index.html", ALCANCE).href))));
});
// v4.13 · Notificaciones push (Firebase Cloud Messaging sin su SDK en el service worker: llegan como datos y las mostramos aquí)
self.addEventListener("push", e => {
  let j = {}; try { j = e.data ? e.data.json() : {}; } catch (x) { j = { data: { titulo: "SIGE Jaguares", texto: e.data ? e.data.text() : "" } }; }
  const d = j.data || j.notification || j, titulo = d.titulo || d.title || "SIGE Jaguares", texto = d.texto || d.body || "";
  e.waitUntil(self.registration.showNotification(titulo, { body: texto, icon: "icon-192.png", badge: "icon-192.png", tag: (d.tag || "sige") + "-" + Date.now(), data: { url: d.url || "" } })
    .then(() => self.clients.matchAll({ type: "window", includeUncontrolled: true })).then(cs => cs.forEach(c => c.postMessage({ sige: "noti" }))));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const destino = new URL("./" + (e.notification.data && e.notification.data.url || ""), ALCANCE).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    const c = cs.find(x => x.url.startsWith(ALCANCE));
    if (c) { c.postMessage({ sige: "ir", url: e.notification.data && e.notification.data.url }); return c.focus(); }
    return self.clients.openWindow(destino);
  }));
});
