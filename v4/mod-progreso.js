/* SIGE Jaguares v4 · módulo Progreso (Mi progreso, En vivo, Muro, Equipo).
   GENERADO por sige-jaguares/build_modulos.py desde centro-de-datos/src/jugador.html. No editar a mano. */
(function(){
"use strict";
const HTML="<style>:host{display:block;--grid:rgba(14,42,64,.10); --brand:#0B4F7C; --pitch:#0d6b43;--bg:#F7FBFE;--surface:#FDFEFF;--surface-2:#EAF4FB;--ink:#0E2A40;--muted:#46607A;--accent:#1874B0;--accent-ink:#ffffff;--sky:#1874B0;--sky-soft:#D9EEFA;--border:#C9E4F4;\n  --warn:#c98a00;--warn-soft:#fff3d1;--danger:#c3352b;--danger-soft:#fde3e0;--ok:#1f8a4c;--ok-soft:#dcf2e5;\n  --display:\"Archivo\",\"Arial Narrow\",Arial,sans-serif;--body:\"Archivo\",\"Segoe UI\",Roboto,Arial,sans-serif;color-scheme:light}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--brand:#0e5c3b; --pitch:#0e5c3b;--bg:#0B0F0D;--surface:#141A17;--surface-2:#1B2420;--ink:#ECF3EF;--muted:#9DB2A7;--accent:#34D399;--accent-ink:#04140d;--sky:#5bc2e7;--sky-soft:#12313d;--border:#26332D;\n  --warn:#f0b429;--warn-soft:#3a2e0a;--danger:#ff6b5e;--danger-soft:#3d1714;--ok:#43c47a;--ok-soft:#143323;color-scheme:dark}}\n:host([data-theme=\"dark\"]){--brand:#0e5c3b; --pitch:#0e5c3b;--bg:#0B0F0D;--surface:#141A17;--surface-2:#1B2420;--ink:#ECF3EF;--muted:#9DB2A7;--accent:#34D399;--accent-ink:#04140d;--sky:#5bc2e7;--sky-soft:#12313d;--border:#26332D;\n  --warn:#f0b429;--warn-soft:#3a2e0a;--danger:#ff6b5e;--danger-soft:#3d1714;--ok:#43c47a;--ok-soft:#143323;color-scheme:dark}\n*{box-sizing:border-box}\n.mp-body{min-height:100vh;min-height:100dvh;margin:0;background:var(--bg);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.4;-webkit-tap-highlight-color:transparent}\nbutton,input{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--sky);outline-offset:2px}\n[hidden]{display:none!important}\n.top{position:sticky;top:0;z-index:20;background:var(--brand);color:#fff;padding:calc(10px + env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) 10px max(16px,env(safe-area-inset-left,0px))}\n.top-in{max-width:720px;margin:0 auto;display:flex;align-items:center;gap:10px}\n.top img{width:38px;height:38px;object-fit:contain}\n.top .t{display:flex;flex-direction:column;min-width:0}\n.top b{font-family:var(--display);font-weight:800;font-size:1.25rem;text-transform:uppercase;letter-spacing:.04em;line-height:1}\n.top span{font-size:.78rem;opacity:.85}\nmain{max-width:720px;margin:0 auto;padding:14px max(16px,env(safe-area-inset-right,0px)) 40px max(16px,env(safe-area-inset-left,0px));display:flex;flex-direction:column;gap:14px}\nh2{font-family:var(--display);font-weight:800;font-size:1.6rem;text-transform:uppercase;letter-spacing:.03em;margin:0;line-height:1.05}\nh3{font-family:var(--display);font-weight:700;font-size:1.1rem;text-transform:uppercase;letter-spacing:.05em;margin:0}\n.sec{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:12px;min-width:0}\n.sec-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}\n.hint{color:var(--muted);font-size:.88rem;margin:0}\n.hero{display:flex;gap:14px;align-items:center}\n.av{width:92px;height:92px;border-radius:50%;flex:none;display:grid;place-items:center;background:var(--sky-soft);font-family:var(--display);font-weight:800;font-size:1.8rem;overflow:hidden;border:4px solid var(--accent)}\n.av img{width:100%;height:100%;object-fit:cover}\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(70px,1fr));gap:10px 8px}\n.kpi b{display:block;font-family:var(--display);font-weight:800;font-size:1.9rem;line-height:1;font-variant-numeric:tabular-nums}\n.kpi span{font-size:.68rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}\n.list{display:flex;flex-direction:column;gap:6px}\n.li{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:var(--surface-2)}\n.li .meta{flex:1;min-width:0;display:flex;flex-direction:column}\n.li .nm{font-weight:700;overflow-wrap:anywhere}\n.li .sub{font-size:.84rem;color:var(--muted)}\n.res{display:inline-grid;place-items:center;min-width:30px;height:30px;padding:0 6px;border-radius:8px;font-family:var(--display);font-weight:800;color:#fff;flex:none}\n.res.G{background:var(--ok)}.res.E{background:var(--muted)}.res.P{background:var(--danger)}\n.chip{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em}\n.chip.ok{background:var(--ok-soft);color:var(--ok)}.chip.b{background:var(--sky-soft);color:var(--sky)}.chip.n{background:var(--surface-2);color:var(--muted);border:1px solid var(--border)}\n.dots{display:flex;flex-wrap:wrap;gap:4px}\n.dots i{width:14px;height:14px;border-radius:4px}\n.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:.8rem;color:var(--muted)}\n.legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}\n.c-Presente{background:var(--ok)}.c-Ausente{background:var(--danger)}.c-Justificado{background:var(--warn)}.c-Lesionado{background:var(--sky)}.c-Otro{background:var(--muted)}\n.tb{display:flex;align-items:flex-end;gap:8px;height:110px}\n.tb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;font-size:.78rem;color:var(--muted);min-width:0}\n.tb i{display:block;width:100%;max-width:44px;background:var(--accent);border-radius:6px 6px 0 0}\n.tb b{color:var(--ink);font-variant-numeric:tabular-nums}\n.area{display:grid;grid-template-columns:96px 1fr 26px;align-items:center;gap:8px}\n.sc{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.sc i{height:12px;border-radius:4px;background:var(--surface-2)}.sc i.on{background:var(--accent)}\n.txt span{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700}\n.nm-card{display:flex;align-items:center;gap:12px}\n.nm-card .big{font-family:var(--display);font-weight:800;font-size:1.7rem;line-height:1}\nlabel.f{display:flex;flex-direction:column;gap:4px;font-size:.76rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}\nlabel.f input{font-size:1.1rem;text-transform:none;letter-spacing:0;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:50px;width:100%}\n.btn{border-radius:12px;min-height:50px;padding:10px 18px;font-weight:700;font-size:1rem;background:var(--surface-2);color:var(--ink);border:1px solid var(--border);cursor:pointer}\n.btn.pri{background:var(--accent);color:var(--accent-ink);border-color:transparent}\n.btn.sm{min-height:40px;font-size:.9rem;padding:6px 14px}\n.btn:disabled{opacity:.5}\n.banner{border-radius:12px;padding:10px 12px;font-size:.92rem}\n/* v4.2 · Bienestar semanal */\n.bn-card{border:2px solid var(--accent)}\n.bn-card.ok{border:1px solid var(--border)}\n.bn-prog{height:6px;border-radius:99px;background:var(--surface-2);overflow:hidden;margin:6px 0 14px}.bn-prog i{display:block;height:100%;background:var(--accent);border-radius:99px}\n.bn-q{font-family:var(--display);font-weight:800;font-size:1.55rem;line-height:1.15;margin:4px 0 6px;text-transform:none;letter-spacing:.01em}\n.bn-ops{display:grid;gap:8px;margin-top:12px}.bn-ops.n5{grid-template-columns:repeat(5,1fr)}\n.bn-op{min-height:58px;border-radius:14px;border:2px solid var(--border);background:var(--surface-2);color:var(--ink);font:700 1.05rem var(--body);cursor:pointer;padding:8px 10px;text-align:left}\n.bn-ops.n5 .bn-op{text-align:center;font:800 1.5rem var(--display);padding:6px 0}\n.bn-op[aria-pressed=\"true\"]{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 18%,var(--surface-2))}\n.bn-ext{display:flex;justify-content:space-between;gap:10px;font-size:.82rem;color:var(--muted);margin-top:6px}\n.bn-res{display:grid;gap:6px;margin:10px 0;min-width:0}\n/* Revisa y envía: pregunta y respuesta en una línea, con puntos suspensivos si no caben (nunca se salen de la pantalla) */\n.bn-res button{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:10px;width:100%;max-width:100%;box-sizing:border-box;text-align:left;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);border-radius:10px;padding:8px 10px;font:500 .92rem var(--body);cursor:pointer}\n.bn-res button span,.bn-res b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.bn-res b{max-width:42vw;text-align:right}\n#bn-l{width:100%;min-height:110px;border-radius:12px;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);padding:10px 12px;font:inherit;resize:vertical}\n.tabs button .pt{position:absolute;top:6px;margin-left:18px;width:9px;height:9px;border-radius:50%;background:var(--danger)}\n.banner.err{background:var(--danger-soft);border:1px solid var(--danger)}\n.banner.warn{background:var(--warn-soft);border:1px solid var(--warn)}\n.empty{color:var(--muted);font-size:.92rem;margin:0}\n.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}\n.more{background:none;border:0;color:var(--sky);font-weight:700;padding:4px 0;cursor:pointer;align-self:flex-start}\n.tabs{position:fixed;left:0;right:0;bottom:0;z-index:25;background:var(--surface);border-top:1px solid var(--border);padding-bottom:env(safe-area-inset-bottom,0px)}\n.tabs-in{max-width:720px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr)}\n.tabs button{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 2px 10px;font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);cursor:pointer}\n.tabs button span{font-size:1.25rem;line-height:1}\n.tabs button[aria-current=\"page\"]{color:var(--accent)}\n.tabs{display:none!important}.mp-body main{padding-bottom:calc(var(--nav,62px) + 30px + env(safe-area-inset-bottom,0px))}\n.grid2{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}\n.pc{background:var(--surface-2);border:1px solid var(--border);border-radius:14px;padding:12px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;cursor:pointer;color:inherit;font:inherit}\n.pc .av{width:72px;height:72px;font-size:1.4rem;border-width:3px}\n.pc b{font-size:.98rem;line-height:1.15}\n.pc small{color:var(--muted);font-size:.78rem}\n.apodo{display:inline-block;background:var(--accent);color:var(--accent-ink);border-radius:999px;padding:2px 10px;font-size:.75rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase}\n.fchip{border:1px solid var(--border);background:var(--surface);color:inherit;border-radius:999px;padding:6px 12px;font:inherit;font-size:.86rem;cursor:pointer}.fchip[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:700}\n.post{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:14px;background:var(--surface-2);border:1px solid var(--border)}\n.post .top2{display:flex;gap:10px;align-items:center}\n.post .ic{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:1.4rem;background:var(--surface);flex:none;overflow:hidden}\n.post .ic img{width:100%;height:100%;object-fit:cover}\n.post.anuncio{background:var(--sky-soft);border-color:var(--accent)}\n.rx{display:flex;gap:6px;flex-wrap:wrap}\n.rx button{border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:4px 10px;min-height:36px;font-size:1rem;cursor:pointer;color:inherit}\n.rx button.on{border-color:var(--accent);background:var(--sky-soft);font-weight:700}\n.rx button b{font-size:.85rem;margin-left:4px}\ntextarea.ta{width:100%;font:inherit;font-size:1rem;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:90px;resize:vertical}\nselect.sel{width:100%;font:inherit;font-size:1rem;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:48px}\n.ovl{position:fixed;inset:0;z-index:60;background:rgba(4,20,30,.55);display:grid;place-items:end center}\n@media(min-width:640px){.ovl{place-items:center;padding:24px}}\n.ovl .box{background:var(--surface);color:var(--ink);width:100%;max-width:520px;max-height:90vh;overflow:auto;border-radius:18px 18px 0 0;padding:18px 16px calc(18px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:12px}\n@media(min-width:640px){.ovl .box{border-radius:18px}}\n.chip.w{background:var(--warn-soft);color:var(--warn)}\n.post .badge{align-self:flex-start;border-radius:999px;padding:2px 10px;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n.post.mvp{background:linear-gradient(135deg,#FFF7DA,#FFE38A);border:2px solid #E0B000;color:#3a2c00}.post.mvp .badge{background:#E0B000;color:#2b1d00}\n.post.hattrick{background:linear-gradient(135deg,#0B4F7C,#1874B0);border:0;color:#fff}.post.hattrick .badge{background:#7DD3F7;color:#06263c}\n.post.debut{background:linear-gradient(135deg,#EAF8EF,#C9EED7);border:2px solid #1f8a4c;color:#0e3a22}.post.debut .badge{background:#1f8a4c;color:#fff}\n.post.cumple{background:linear-gradient(135deg,#FFE4F1,#D9EEFA);border:2px solid #E26BA8;color:#4a1030}.post.cumple .badge{background:#E26BA8;color:#fff}\n.post.promocion{background:linear-gradient(135deg,#1f8a4c,#2fbf7a);border:0;color:#fff}.post.promocion .badge{background:#fff;color:#0e3a22}\n.post.mvp .hint,.post.debut .hint,.post.cumple .hint{color:inherit;opacity:.75}.post.hattrick .hint,.post.promocion .hint{color:#fff;opacity:.85}\n.post .big{font-size:1.15rem;line-height:1.3}\n.post.mvp .rx button,.post.debut .rx button,.post.cumple .rx button{background:rgba(255,255,255,.75);color:#1a1a1a;border-color:rgba(0,0,0,.14)}\n.post.hattrick .rx button,.post.promocion .rx button{background:rgba(255,255,255,.18);color:#fff;border-color:rgba(255,255,255,.4)}\n.post.mvp .rx button.on,.post.debut .rx button.on,.post.cumple .rx button.on{background:#fff;border-color:#1874B0}\n.post.hattrick .rx button.on,.post.promocion .rx button.on{background:rgba(255,255,255,.4);border-color:#fff}\n.post.mvp .ic,.post.debut .ic,.post.cumple .ic,.post.hattrick .ic,.post.promocion .ic{background:rgba(255,255,255,.8)}\n.post img.pf{width:100%;max-height:420px;object-fit:cover;border-radius:12px}\n.post .txtp{margin:0;white-space:pre-line;font-size:1rem}\n.avw{position:relative;display:inline-block;flex:none}\n.avw .emo{position:absolute;right:-6px;bottom:-4px;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:1.05rem;background:var(--surface);border:2px solid var(--border);box-shadow:0 2px 6px rgba(0,0,0,.18);line-height:1}\n.ic .emo,.avw.sm .emo{width:22px;height:22px;font-size:.75rem;right:-6px;bottom:-6px}\n.post .top2 .avw{width:44px;height:44px}\n.tg{display:flex;flex-wrap:wrap;gap:6px}\n.tg span,.tg button{border-radius:999px;padding:4px 10px;font-size:.82rem;font-weight:600;border:1px solid var(--border);background:var(--surface);color:var(--ink)}\n.txt .tg span{display:inline-block;text-transform:none;letter-spacing:0;color:var(--ink);font-weight:600;font-size:.82rem}\n.tg button{cursor:pointer;min-height:34px}.tg button.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n.tg button:disabled{opacity:.4}\n.emogrid{display:grid;grid-template-columns:repeat(8,1fr);gap:6px}\n.emogrid button{font-size:1.35rem;min-height:42px;border-radius:10px;border:1px solid var(--border);background:var(--surface);cursor:pointer;padding:0}\n.emogrid button.on{border:2px solid var(--accent);background:var(--sky-soft)}\n.board{background:var(--brand);color:#fff;border-radius:14px;padding:14px 12px;display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;text-align:center}\n.board .tm{display:flex;flex-direction:column;align-items:center;gap:6px;font-weight:700;font-size:.9rem;min-width:0;overflow-wrap:anywhere}\n.board .tm img{width:52px;height:52px;object-fit:contain}\n.board .sc{display:block;font-family:var(--display);font-weight:800;font-size:2.8rem;line-height:1;white-space:nowrap}\n.board .sc small{display:block;font-size:.8rem;letter-spacing:.06em;font-weight:700;opacity:.85;margin-top:4px}\n.livedot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4d;margin-left:4px;vertical-align:middle;animation:lp 1.2s infinite}\n@keyframes lp{50%{opacity:.25}}\n.board .sc i.livedot{width:8px;height:8px;border-radius:50%;background:#ff4d4d}\n.tl{display:flex;flex-direction:column;gap:8px}\n.tl .ev{display:grid;grid-template-columns:42px 1fr;gap:8px;align-items:start}\n.tl .ev b.m{font-family:var(--display);font-size:1.05rem;text-align:right}\n.prevw{max-width:100%;max-height:240px;border-radius:12px;object-fit:cover}\n.mt{padding:10px 0;border-top:1px solid var(--border)}.mt:first-of-type{border-top:0}\n.mt-big{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:6px 0}.mt-big b{font-family:var(--display);font-size:2rem;line-height:1}\n.niv{color:#fff;border-radius:999px;padding:3px 10px;font-size:.78rem;font-weight:700}.niv-Excelente{background:#1f8a4c}.niv-Bueno{background:#2E9BD6}.niv-Regular{background:#C98A00}.niv-A{background:#C3352B}\n.mt-msg{background:var(--surface-2);border-radius:10px;padding:10px 12px;font-size:.92rem;margin:8px 0}\n.mt-med{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.mt-med span{border:1px solid var(--border);border-radius:999px;padding:3px 10px;font-size:.8rem;font-weight:600}\n.mt-top{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;margin-top:8px}\n.mt-top ol{margin:4px 0 0;padding-left:18px;font-size:.86rem}.mt-top li{margin:2px 0}.mt-top li.yo{font-weight:800;color:var(--accent)}\n.mt-top li span{color:var(--muted);margin-left:4px}\n.mp-hist{margin-top:12px;border-top:1px solid var(--border);padding-top:10px}.mp-rs{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.mp-rs span{border-radius:8px;padding:4px 8px;font-size:.8rem;font-weight:700;background:var(--surface-2)}.mp-rs i{font-style:normal;display:inline-block;min-width:18px;text-align:center;border-radius:5px;color:#fff;margin-right:5px}.mp-rs .rG{background:#1f8a4c}.mp-rs .rE{background:#C98A00}.mp-rs .rP{background:#C3352B}\n.mm{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-top:1px solid var(--border)}.mm:first-of-type{border-top:0}.mm .ic{font-size:1.4rem;line-height:1}.mm.ok b{color:#1f8a4c}.mm.pa{opacity:.6}\n.top .cfg{margin-left:auto;background:rgba(255,255,255,.14);border:0;color:#fff;border-radius:12px;width:42px;height:42px;display:grid;place-items:center;cursor:pointer}\n.bnr{display:block;width:100%;aspect-ratio:3/1;object-fit:cover;border-radius:12px;margin:0 0 10px}\n.bnr-cv{width:100%;aspect-ratio:3/1;border-radius:12px;touch-action:none;cursor:grab;background:#000}\n.pc.prof{border:2px solid var(--accent)}\n\n/* ===== v4.17 · contraste (mínimo 4.5:1) ===== */\n:host{--ok-ink:color-mix(in srgb,var(--ok) 85%,#000);--warn-ink:color-mix(in srgb,var(--warn) 70%,#000);--danger-ink:color-mix(in srgb,var(--danger) 90%,#000);--sky-ink:color-mix(in srgb,var(--sky) 85%,#000);--ok-solid:color-mix(in srgb,var(--ok) 85%,#000);--on-ok:#fff;--on-danger:#fff}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--ok-ink:var(--ok);--warn-ink:var(--warn);--danger-ink:var(--danger);--sky-ink:var(--sky);--ok-solid:var(--ok);--on-ok:#04140d;--on-danger:#04140d}}\n:host([data-theme=\"dark\"]){--ok-ink:var(--ok);--warn-ink:var(--warn);--danger-ink:var(--danger);--sky-ink:var(--sky);--ok-solid:var(--ok);--on-ok:#04140d;--on-danger:#04140d}\n.chip.ok{color:var(--ok-ink)}\n.chip.b{color:var(--sky-ink)}\n.chip.w{color:var(--warn-ink)}\n.fchip[aria-pressed=\"true\"]{color:var(--accent-ink)}\n.post.debut .badge{background:#187A43}\n.post.cumple .badge{background:#B8447F}\n/* v4.17 · zonas táctiles de 44 px */\n.btn.sm{display:inline-flex;align-items:center;justify-content:center;min-height:44px}\n.fchip{display:inline-flex;align-items:center;min-height:44px}\n.rx button{min-height:44px;min-width:44px}\n.tg button{min-height:44px}\n.emogrid{grid-template-columns:repeat(auto-fill,minmax(44px,1fr))}\n.emogrid button{min-height:44px}\n.more{display:inline-flex;align-items:center;min-height:44px}\n\n/* ===== v4.17 · pulido de app instalada ===== */\nbutton,a,[role=\"button\"],label,select,summary{touch-action:manipulation}\n.btn,.fchip,.rx button,.tg button,.emogrid button,.more,.bn-op,.bn-res button,.tabs button{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\ninput,select,textarea{font-size:max(16px,1em)}\n.btn:not(:disabled):active,.fchip:active,.rx button:active,.tg button:not(:disabled):active,.emogrid button:active,.more:active,.bn-op:active,.bn-res button:active{opacity:.78}\n.ovl .box{overscroll-behavior:contain}\n\n/* ===== v4.19 · paleta única (valores del núcleo) ===== */\n:host{--ok:#15803D;--warn:#B45309;--err:#B42318;--danger:var(--err);--on-warn:#fff;--ok-soft:color-mix(in srgb,var(--ok) 13%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 12%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 13%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 13%,var(--surface))}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--ok:#4ADE80;--warn:#FBBF24;--err:#F87171;--danger:var(--err);--accent-ink:#06261A;--on-warn:#2b1d00;--ok-soft:color-mix(in srgb,var(--ok) 12%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 16%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 17%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 14%,var(--surface))}}\n:host([data-theme=\"dark\"]){--ok:#4ADE80;--warn:#FBBF24;--err:#F87171;--danger:var(--err);--accent-ink:#06261A;--on-warn:#2b1d00;--ok-soft:color-mix(in srgb,var(--ok) 12%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 16%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 17%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 14%,var(--surface))}\n\n/* ===== v4.19 · Progreso ===== */\n/* Campana y tuerca de la cabecera: 44x44 como mínimo (flex:none evita que se estrechen) */\n#bellBtn.cfg,#cfgBtn.cfg{width:44px;min-width:44px;height:44px;flex:none}\n/* Rellenos con texto blanco: los mismos tonos oscuros que usa el núcleo en los dos temas */\n.niv-Excelente,.mp-rs .rG{background:#15803D}\n.niv-Regular,.mp-rs .rE{background:#B45309}\n.niv-A,.mp-rs .rP{background:#B42318}\n.mm.ok b{color:var(--ok-ink)}\n.res{color:var(--on-ok)}\n/* Publicación de promoción: degradado verde más oscuro (el más claro, #15803D, da 5.0:1 con texto blanco).\n   Botones de reacción: fondo oscuro translúcido; el seleccionado, blanco con tinta verde oscura (como en las demás publicaciones). */\n.post.promocion{--promo-a:#166534;--promo-b:#15803D;background:linear-gradient(135deg,var(--promo-a),var(--promo-b))}\n.post.promocion .hint{opacity:1}\n.post.promocion .rx button{background:rgba(0,0,0,.2)}\n.post.promocion .rx button.on{background:#fff;color:#0e3a22;border-color:#fff}\n\n/* ===== v4.19 · un solo diseño: componentes comunes (mismo texto en el núcleo y en los tres módulos) ===== */\nh1{font-size:1.7rem}h2{font-size:1.55rem}h3{font-size:1.1rem}\n.btn{min-height:48px;border-radius:12px}\n.btn.sm{min-height:44px}\n.btn.pri{background:var(--accent);color:var(--accent-ink)}\n.chip{padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase}\n.sec{padding:14px;border-radius:14px}\n.banner{border-radius:12px;font-size:.92rem}\n.empty,.empty-state{color:var(--muted);font-size:.92rem;margin:0}\n.empty{padding:6px 0}\n.lst li,.li,.tl li,.chk li{border-radius:12px}\n.lst li,.li{min-height:52px}\n/* v4.20 · estados de carga: esqueleto común (brillo suave; sin animación con prefers-reduced-motion) y texto solo para lectores de pantalla */\n.solo-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.esq{position:relative;display:grid;gap:10px}\n.esq-b{display:block;height:14px;border-radius:8px;background:linear-gradient(90deg,var(--surface-2) 25%,color-mix(in srgb,var(--border) 65%,var(--surface-2)) 50%,var(--surface-2) 75%);background-size:200% 100%;animation:esq-brillo 1.5s ease-in-out infinite}\n.esq-b:nth-of-type(1){height:22px;width:55%}\n.esq-b:nth-of-type(2){width:100%}\n.esq-b:nth-of-type(3){width:82%}\n@keyframes esq-brillo{from{background-position:200% 0}to{background-position:-200% 0}}\n@media (prefers-reduced-motion:reduce){.esq-b{animation:none}}\n/* ===== v4.22 · gol en vivo: salto del marcador e interruptor de sonido (mismo texto en el núcleo y en Progreso) ===== */\n.gol-snd{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:48px;margin:0 0 12px;padding:8px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);font:inherit;font-weight:700;text-align:center;cursor:pointer}\n.gol-snd[aria-checked=\"true\"]{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}\n.gol-salto{transform-origin:center;animation:gol-salto .8s ease-out var(--gd,0ms) 1}\n@keyframes gol-salto{0%{transform:scale(1)}35%{transform:scale(1.2)}70%{transform:scale(.96)}100%{transform:scale(1)}}\n@media (prefers-reduced-motion:reduce){.gol-salto{animation:none}}\n\n/* ===== v4.22 · Primeros pasos (tarjeta arriba de Progreso, solo familias) ===== */\n.pp-l{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:6px}\n.pp-b{display:flex;align-items:center;gap:12px;width:100%;min-height:52px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);font:inherit;text-align:left;cursor:pointer}\n.pp-b b{display:block}\n.pp-b small{display:block;color:var(--muted);font-size:.84rem;line-height:1.3}\n.pp-i{flex:none;width:28px;height:28px;border-radius:50%;border:2px solid var(--muted);display:grid;place-items:center;font-weight:800}\n.pp-b.ok .pp-i{background:var(--ok-solid);border-color:var(--ok-solid);color:var(--on-ok)}\n\n/* ===== v4.24 · Comunidad viva (Muro · Votaciones y retos · Equipo) ===== */\n.cv-t{margin:0}\n.cv-tabs{display:flex;margin:0 -16px 4px;padding:0 8px;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid var(--linea);background:var(--fondo)}\n.cv-tabs::-webkit-scrollbar{display:none}\n.cv-tabs button{flex:1 0 auto;min-height:44px;padding:0 14px;background:none;border:0;border-bottom:3px solid transparent;color:var(--tinta-suave);font:600 .9375rem/1.2 var(--body);cursor:pointer;white-space:nowrap}\n.cv-tabs button[aria-current=\"page\"]{color:var(--accion-texto);border-bottom-color:var(--accion);font-weight:800}\n.cv-ico{flex:none;display:grid;place-items:center;width:44px;height:44px;color:var(--accion-texto)}\n.cv-ico svg,.cm-tg svg{width:24px;height:24px;margin:0;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n/* Hoy en Jaguares */\n.cv-sec{--alto:36px;margin:0 -16px;padding:0 20px 0 48px;min-height:36px;display:flex;align-items:center;background:var(--banda-fondo);color:var(--banda-texto);clip-path:polygon(calc(var(--alto) * .2126) 0,100% 0,100% 100%,0 100%)}\n.cv-sec h3{margin:0;font-size:1rem;line-height:1.25;color:inherit}\n.cv-hoy{list-style:none;margin:0;padding:0;display:grid;gap:var(--mb-panel)}\n.cv-hoy-f{display:flex;align-items:center;gap:12px;min-height:56px;padding:var(--li-pad);background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:var(--li-r);box-shadow:var(--filo-luz-ligero)}\n.cv-hoy-t{flex:1;min-width:0;display:grid;gap:2px}\n.cv-hoy-t b{font-size:.9375rem;line-height:1.25;font-weight:600;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;overflow-wrap:anywhere}\n.cv-hoy-t small{font-size:.8125rem;line-height:1.3;color:var(--tinta-suave)}\n.cv-hoy-f .btn{flex:none;margin:0}\n.banda.cv-bs{--alto:44px;min-height:44px;padding-block:8px;justify-content:center}\n.cv .banda-fil.cv-fil{margin:0}\n/* Publicaciones: cada tipo con su forma */\n.post.cv{display:flex;flex-direction:column;gap:0;margin:0 0 var(--mb-panel);padding:0;background:none;border:0;border-radius:0;box-shadow:none;scroll-margin-top:72px}\n.post.cv.capa{gap:8px;padding:var(--li-pad);background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:var(--li-r);box-shadow:var(--filo-luz-ligero)}\n.post.cv .cv-pie{display:flex;flex-direction:column;gap:4px}\n.post.cv:not(.capa) .cv-pie{padding:var(--li-pad);background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:0 0 var(--li-r) var(--li-r);box-shadow:var(--filo-luz-ligero)}\n.cv-et{margin:0;font-size:.8125rem;line-height:1.3;font-weight:600;color:var(--tinta-suave)}\n.cv-tit{margin:0;font:800 1.0625rem/1.25 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112;text-wrap:balance;overflow-wrap:anywhere}\n.cv-fila-in,.cv-quien,.cv-res{display:flex;align-items:center;gap:12px}\n.cv-fb{flex:1;min-width:0;display:grid;gap:2px}\n.cv-av{flex:none;width:32px;height:32px;border-radius:8px;overflow:hidden;display:grid;place-items:center;background:var(--superficie-alta);color:var(--tinta);font:800 .75rem/1 var(--display)}\n.cv-av img{width:100%;height:100%;object-fit:cover}\n.cv-av.lg{width:48px;height:48px;font-size:1rem}\n.cv-num{flex:none;min-width:84px;font:900 2rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums;letter-spacing:-.02em;color:var(--tinta)}\n.cv-chip{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;min-height:28px;padding:0 10px;border-radius:4px;font-size:.8125rem;font-weight:700}\n.cv-chip svg{width:18px;height:18px;margin:0;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.cv-fb>.cv-chip,.cv-logro>.cv-lgc{justify-self:start;width:fit-content;max-width:100%}\n.cv-chip.amb{background:var(--ambar);color:var(--sobre-ambar)}\n.cv-logro{margin:0 0 var(--mb-panel);padding:16px;border-radius:16px;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 64' preserveAspectRatio='xMidYMid slice'%3E%3Cg fill='none' stroke='rgba(12,31,23,0.17)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(-8 -6) rotate(20 20 20) scale(1.1)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(56 29) rotate(-30 20 20) scale(.9)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(150 -10) rotate(60 20 20) scale(1.15)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3Cg transform='translate(214 32) rotate(-15 20 20) scale(.85)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(280 -14) rotate(10 20 20) scale(1.25)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(330 32) rotate(100 20 20) scale(.9)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") center/cover no-repeat,var(--ambar);color:var(--sobre-ambar);display:grid;gap:6px}\n.cv-logro .lg-et{margin:0;font-size:.875rem;font-weight:700}\n.cv-logro .lg-n{margin:0;font:900 3.25rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.02em}\n.cv-logro .lg-n small{margin-left:6px;font:800 1.25rem var(--display);letter-spacing:0}\n.cv-lg-q{display:flex;align-items:center;gap:12px}\n.cv-lg-nom{margin:0;font:800 1.375rem/1.2 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112;overflow-wrap:anywhere}\n.cv-lgc{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;min-height:28px;padding:0 10px;border-radius:4px;background:var(--sobre-ambar);color:var(--ambar);font-size:.8125rem;font-weight:700}\n.cv-lgc svg{width:18px;height:18px;margin:0;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.cv-logro + .cv-pie,.post.cv .cv-logro{margin-bottom:0}\n.cv-logro.cv-cumple{background:radial-gradient(circle at 8% 18%,#fff 0 3px,transparent 4px),radial-gradient(circle at 92% 14%,#FF6FB5 0 4px,transparent 5px),radial-gradient(circle at 80% 78%,#FFD23F 0 4px,transparent 5px),radial-gradient(circle at 18% 86%,#4CC9F0 0 3px,transparent 4px),radial-gradient(circle at 62% 10%,#fff 0 2px,transparent 3px),radial-gradient(circle at 96% 52%,#4CC9F0 0 3px,transparent 4px),linear-gradient(135deg,#D4F36B,#9BDB4A);color:#132A0B}\n.cv-logro.cv-cumple .cv-lgc{background:#132A0B;color:#D4F36B}\n.cv-logro.cv-cumple .cv-lg-nom{font-size:1.5rem}\n.cv-an{padding:12px 0 8px;display:grid;gap:10px}\n.cv-fij{margin:0;display:flex;align-items:center;gap:6px;font-size:.8125rem;font-weight:700;color:var(--tinta-suave)}\n.cv-fij svg{width:18px;height:18px;margin:0;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.cv-txt{margin:0;font-size:1.0625rem;line-height:1.4;overflow-wrap:anywhere}\n.cv-acc{display:grid;gap:8px;width:100%}\n.cv-acc .btn{min-height:44px}\n.cv-vacio{display:grid;justify-items:start;gap:8px;padding:var(--pad-panel)}\n.cv-vacio p{margin:0;color:var(--tinta-suave)}\n/* Comentarios y porras */\n.cm-tg{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 4px;background:none;border:0;color:var(--accion-texto);font:700 .9375rem/1.2 var(--body);cursor:pointer;align-self:flex-start}\n.cm-tg .chev{transition:transform var(--dur-estado) var(--ease-firme)}\n.cm-tg[aria-expanded=\"true\"] .chev{transform:rotate(180deg)}\n.cm-panel{display:flex;flex-direction:column;gap:12px;padding:4px 0 8px}\n.cm-l{list-style:none;margin:0;padding:0}\n.cm-i{display:flex;gap:10px;padding:10px 0;border-top:1px solid var(--linea)}\n.cm-i:first-child{border-top:0}\n.cm-c{flex:1;min-width:0}\n.cm-h{margin:0;display:flex;gap:8px;align-items:baseline;flex-wrap:wrap;font-size:.9375rem}\n.cm-ts{font-size:.8125rem;color:var(--tinta-suave)}\n.cm-x{margin:2px 0 0;font-size:.9375rem;line-height:1.35;overflow-wrap:anywhere}\n.cm-ac{display:flex;gap:4px}\n.cm-lk{min-height:44px;min-width:44px;padding:0 8px;margin-left:-8px;background:none;border:0;color:var(--tinta-suave);font:600 .8125rem var(--body);text-decoration:underline;cursor:pointer}\n.cm-mas{align-self:flex-start;min-height:44px;padding:0 4px;background:none;border:0;color:var(--accion-texto);font:700 .875rem var(--body);cursor:pointer}\n.cm-por{display:flex;flex-wrap:nowrap;gap:8px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;padding-right:28px;-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 32px),transparent);mask-image:linear-gradient(to right,#000 calc(100% - 32px),transparent)}\n.cm-por::-webkit-scrollbar{display:none}\n.cm-chip{flex:none;height:44px;min-height:44px;white-space:nowrap;padding:0 14px;border-radius:999px;border:1.5px solid var(--borde-control);background:var(--superficie);color:var(--tinta);font:700 .9375rem/1.2 var(--body);cursor:pointer;transition:transform var(--dur-toque) var(--ease-firme)}\n.cm-chip:active{transform:scale(.96)}\n.cm-chip:disabled{opacity:.5}\n.cm-f{display:grid;gap:8px}\n.cm-t{display:block;width:100%;min-height:76px;resize:none;padding:10px 12px;border:1.5px solid var(--borde-control);border-radius:8px;background:var(--superficie);color:var(--tinta);font:inherit;font-size:1rem}\n.cm-fp{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.cm-n{font-size:.8125rem;color:var(--tinta-suave);font-variant-numeric:tabular-nums}\n.cm-env{min-width:104px;margin:0}\n.cm-err{margin:0;color:var(--rojo);font-size:.875rem;font-weight:600;line-height:1.35}\n.cm-err:empty{display:none}\n.cm-aviso{margin:0;padding:10px 12px;border:1px solid var(--borde-control);border-radius:8px;background:var(--superficie);color:var(--tinta);font-size:.9375rem}\n@media (prefers-reduced-motion:reduce){.cm-tg .chev,.cm-chip{transition:none}}\n\n/* ===== v4.25 · Votaciones y retos, pronóstico, hilo en vivo e insignias ===== */\n.vt-vacio{margin:0;padding:var(--pad-panel);color:var(--tinta-suave)}\n.vt-s{display:grid;gap:0;margin:0 0 var(--mb-panel)}\n.vt-h{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:12px 0 8px}\n.vt-h h3{margin:0;font:800 1.0625rem/1.25 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112;text-wrap:balance}\n.vt-c{margin:0;font-size:.875rem;font-weight:600;color:var(--tinta-suave);font-variant-numeric:tabular-nums}\n.vt-l{list-style:none;margin:0;padding:0;display:grid;gap:var(--mb-panel)}\n.vt-f{display:flex;align-items:center;gap:12px;min-height:64px;padding:var(--li-pad);background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:var(--li-r);box-shadow:var(--filo-luz-ligero)}\n.vt-f .btn{flex:none;margin:0;min-width:96px}\n.vt-f .btn.vt-on{display:inline-flex;align-items:center;justify-content:center;gap:6px}\n.vt-f .btn.vt-on svg{width:18px;height:18px;margin:0;fill:none;stroke:currentColor;stroke-width:2.25;stroke-linecap:round;stroke-linejoin:round}\n.vt-ok{margin:8px 0 0;font-size:.875rem;font-weight:600;color:var(--accion-texto)}\n.vt-ok:empty{display:none}\n.vt-gan{background:none}\n.ins-l{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:4px 0}\n.sec .ins-l{justify-content:flex-start}\n/* Pronóstico */\n.pr{display:grid;gap:0;margin:0 0 var(--mb-panel)}\n.pr-f{display:grid;gap:10px;padding:var(--li-pad);background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:var(--li-r);box-shadow:var(--filo-luz-ligero)}\n.pr-f + .pr-f{margin-top:var(--mb-panel)}\n.pr-t{margin:0;font:800 1.0625rem/1.25 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112}\n.pr-m{margin:0;font-size:.875rem;line-height:1.35;color:var(--tinta-suave)}\n.pr-sel{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:end;gap:8px}\n.pr-eq{display:grid;justify-items:center;gap:6px;min-width:0;text-align:center}\n.pr-eq>span{max-width:100%;font-size:.9375rem;font-weight:700;line-height:1.2;overflow-wrap:anywhere}\n.pr-st{display:flex;align-items:center;gap:2px}\n.pr-b{flex:none;width:44px;height:44px;display:grid;place-items:center;padding:0;border:1.5px solid var(--borde-control);border-radius:8px;background:var(--superficie);color:var(--tinta);font:700 1.5rem/1 var(--body);cursor:pointer;transition:transform var(--dur-toque) var(--ease-firme)}\n.pr-b:active{transform:scale(.96)}\n.pr-b:disabled{opacity:.45;cursor:default}\n.pr-v{min-width:32px;text-align:center;font:900 2rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums}\n.pr-sep{align-self:center;font:900 1.5rem/1 var(--display);color:var(--tinta-suave);padding-bottom:0}\n.pr-pie{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}\n.pr-pie .btn{flex:none;margin:0;min-width:104px}\n.pr-pie p{margin:0;flex:1;min-width:140px}\n.pr-res{margin:0;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}\n.pr-res b{font:900 1.75rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums}\n.pr-tot{margin:0;font-size:.9375rem;font-weight:600}\n.pr-tot b{font:900 1.25rem/1 var(--display);font-variant-numeric:tabular-nums}\n@media (prefers-reduced-motion:reduce){.pr-b{transition:none}}\n/* Hilo del partido en vivo: banda tipo Marcador */\n.mv{--alto:204px;justify-content:flex-start;gap:8px;padding-top:16px;padding-bottom:12px}\n.mv-top{display:flex;align-items:center;gap:12px;min-height:28px;flex-wrap:wrap}\n.mv-min{font:900 1.375rem/1.2 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums}\n.mv-t{font-size:.9375rem;font-weight:600}\n.mv-g{display:grid;grid-template-columns:minmax(0,1fr) 36px minmax(0,1fr);align-items:center;text-align:center}\n.mv-g span{font:900 clamp(72px,26vw,132px)/.88 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.03em;font-variant-numeric:tabular-nums;white-space:nowrap}\n.mv-g i{display:block;width:24px;height:8px;background:var(--banda-texto);margin:0 auto}\n.mv-n{display:grid;grid-template-columns:minmax(0,1fr) 36px minmax(0,1fr);text-align:center;font-size:.9375rem;line-height:1.25;font-weight:700}\n.mv-n span{overflow-wrap:anywhere}\n.mv-ev{list-style:none;margin:0;padding:0}\n.mv-e{display:grid;grid-template-columns:60px minmax(0,1fr);gap:8px;align-items:baseline;padding:12px 0;border-bottom:1px solid var(--linea)}\n.mv-e:last-child{border-bottom:0}\n.mv-m{font:900 1.25rem/1.1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums;color:var(--tinta)}\n.mv-h{font:600 .8125rem/1.2 var(--body);color:var(--tinta-suave);font-variant-numeric:tabular-nums}\n.mv-x{font-size:.9375rem;line-height:1.35;overflow-wrap:anywhere}\n.mv-e.gol .mv-x{font-weight:700}\n.mv-x svg{width:18px;height:18px;margin:0 6px -3px 0;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.mv-nota{margin:0;font-size:.8125rem;color:var(--tinta-suave)}\n\n/* ===== v4.26 · Comunidad ordenada ===== */\n.c6-fil{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:12px 0 4px;padding-bottom:2px}\n.c6-fil::-webkit-scrollbar{display:none}\n.c6-fil button{flex:none;min-height:40px;padding:0 14px;border-radius:999px;border:1.5px solid var(--borde-control);background:var(--superficie);color:var(--tinta);font:600 .875rem/1 var(--body);cursor:pointer}\n.c6-fil button[aria-pressed=\"true\"]{background:var(--accion);border-color:var(--accion);color:var(--sobre-accion);font-weight:800}\n.pt-s{margin:0 0 8px}\n.cv-hoy-f .pt-x{flex:none;width:36px;height:36px;margin-left:-6px;display:grid;place-items:center;border:0;background:none;color:var(--tinta-suave);font-size:1.1rem;cursor:pointer}\n.cv-hoy-f.bloq .cv-ico{color:var(--tinta-suave)}\n/* comentarios */\n.cm-prev{list-style:none;margin:0;padding:0;display:grid;gap:4px}\n.cm-prev li{font-size:.875rem;line-height:1.35;color:var(--tinta);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;overflow-wrap:anywhere}\n.cm-prev b{font-weight:700}\n.cm-prev button{all:unset;cursor:pointer;display:block}\n.cm-i.cm-hijo{margin-left:42px;padding-top:8px}\n.cm-i.cm-hijo .cv-av{width:26px;height:26px;font-size:.6875rem}\n.cm-i.cm-foco{background:color-mix(in srgb,var(--celeste) 18%,transparent);border-radius:8px;transition:background 1.2s ease}\n.cm-ac{display:flex;align-items:center;gap:2px;flex-wrap:wrap;margin-top:2px}\n.cm-ac .cm-b{min-height:36px;padding:0 8px;margin-left:-4px;background:none;border:0;color:var(--tinta-suave);font:700 .8125rem var(--body);cursor:pointer;border-radius:6px}\n.cm-ac .cm-b.on{color:var(--accion-texto);font-size:1rem}\n.cm-rxt{display:inline-flex;gap:6px;margin-left:4px;font-size:.8125rem;color:var(--tinta-suave);font-variant-numeric:tabular-nums}\n.cm-mn{margin-left:auto;width:36px;height:36px;display:grid;place-items:center;background:none;border:0;color:var(--tinta-suave);cursor:pointer;border-radius:6px}\n.cm-mn svg{width:20px;height:20px;fill:currentColor}\n.cm-rxp{display:flex;gap:4px;padding:6px;margin:4px 0 2px;border:1px solid var(--linea);border-radius:999px;background:var(--superficie);width:fit-content;box-shadow:0 4px 14px rgba(0,0,0,.12)}\n.cm-rxp button{width:40px;height:40px;border:0;border-radius:50%;background:none;font-size:1.35rem;line-height:1;cursor:pointer}\n.cm-rxp button[aria-pressed=\"true\"]{background:var(--superficie-alta)}\n.cm-menu{display:flex;justify-content:flex-end;gap:8px;margin:2px 0}\n.cm-menu button{min-height:36px;padding:0 12px;border:1px solid var(--linea);border-radius:8px;background:var(--superficie);color:var(--tinta-suave);font:600 .8125rem var(--body);cursor:pointer}\n.cm-resp{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 10px;border-radius:8px;background:var(--superficie-alta);font-size:.8125rem}\n.cm-resp button{min-height:32px;background:none;border:0;color:var(--accion-texto);font:700 .8125rem var(--body);cursor:pointer}\n/* partido: jugada a jugada plegable y marcador de 2 o 3 cifras */\n.mv-mas{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0;background:none;border:0;color:var(--accion-texto);font:700 .9375rem var(--body);cursor:pointer}\n.mv-mas svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;transition:transform .2s}\n.mv-mas[aria-expanded=\"true\"] svg{transform:rotate(180deg)}\n.mv-g.d2 span{font-size:clamp(56px,19vw,104px)}\n.mv-g.d3 span{font-size:clamp(44px,14vw,80px)}\n/* trivia */\n.tv-c{display:grid;gap:10px;padding:14px 0}\n.tv-c p{margin:0}\n.tv-big{font:900 2.25rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-variant-numeric:tabular-nums}\n.tv-big small{font:700 1rem var(--body);margin-left:6px;color:var(--tinta-suave)}\n.tv-reglas{margin:0;padding-left:18px;font-size:.875rem;line-height:1.45;color:var(--tinta-suave)}\n.tv-rep{list-style:none;margin:0;padding:0;display:grid;gap:8px}\n.tv-rep li{display:grid;grid-template-columns:24px minmax(0,1fr);gap:8px;font-size:.875rem;line-height:1.35}\n.tv-rep .i{font-weight:900}.tv-rep .i.b{color:var(--verde-texto)}.tv-rep .i.m{color:var(--rojo)}\n.tv-rep small{display:block;color:var(--tinta-suave);margin-top:2px}\n.tv-rkt{display:flex;gap:8px;margin:4px 0 8px}\n.tv-rk{list-style:none;margin:0;padding:0}\n.tv-rk li{display:grid;grid-template-columns:32px minmax(0,1fr) auto;gap:8px;align-items:center;min-height:44px;border-bottom:1px solid var(--linea);font-size:.9375rem}\n.tv-rk li.yo{font-weight:800;color:var(--accion-texto)}\n.tv-rk .p{font:900 1.125rem var(--display);text-align:center;font-variant-numeric:tabular-nums}\n.tv-rk .s{font-variant-numeric:tabular-nums;font-weight:700}\n.tv-rk small{color:var(--tinta-suave);font-weight:500}\n.tv-ovl{position:fixed;inset:0;z-index:80;background:var(--fondo);overflow:auto;padding:calc(16px + env(safe-area-inset-top,0px)) 16px calc(24px + env(safe-area-inset-bottom,0px))}\n.tv-box{max-width:560px;margin:0 auto;display:grid;gap:14px}\n.tv-top{display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:.875rem;color:var(--tinta-suave)}\n.tv-bar{height:10px;border-radius:99px;background:var(--pista);overflow:hidden}\n.tv-bar i{display:block;height:100%;background:var(--accion);border-radius:99px;transition:width .25s linear}\n.tv-bar i.poco{background:var(--rojo)}\n.tv-seg{margin:-6px 0 0;text-align:right;font:900 1.5rem var(--display);font-variant-numeric:tabular-nums}\n.tv-q{margin:0;font:800 1.5rem/1.2 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112;text-transform:none;letter-spacing:0}\n.tv-ops{display:grid;gap:10px}\n.tv-op{min-height:58px;padding:10px 14px;border-radius:12px;border:2px solid var(--borde-control);background:var(--superficie);color:var(--tinta);font:700 1.0625rem/1.25 var(--body);text-align:left;cursor:pointer}\n.tv-op:disabled{opacity:1;cursor:default}\n.tv-op.sel{border-color:var(--accion);background:color-mix(in srgb,var(--accion) 14%,var(--superficie))}\n.tv-op.bien{border-color:var(--verde);background:color-mix(in srgb,var(--verde) 18%,var(--superficie))}\n.tv-op.mal{border-color:var(--rojo);background:color-mix(in srgb,var(--rojo) 14%,var(--superficie))}\n.tv-fb{margin:0;font:800 1.25rem var(--display)}\n.tv-niv{font-weight:800}.tv-niv.n2{color:var(--accion-texto)}.tv-niv.n3{color:var(--rojo)}\n.tv-fb.bien{color:var(--verde-texto)}.tv-fb.mal{color:var(--rojo)}\n\n/* v4.26.2 · Mi perfil tipo red social al principio de Progreso */\n.pfc{margin:0 0 var(--mb-panel);padding-bottom:16px;border-bottom:1px solid var(--linea);display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px}\n.pfc-bn{position:relative;width:calc(100% + 32px);margin:0 -16px;aspect-ratio:3/1;background:linear-gradient(135deg,var(--accion),color-mix(in srgb,var(--accion) 55%,#0b2a1a));overflow:hidden;display:grid;place-items:center}\n.pfc-bn img{width:100%;height:100%;object-fit:cover;display:block}\n.pfc-bn .chip{position:absolute;top:10px;right:10px}\n.pfc-sub{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border-radius:999px;border:1.5px solid rgba(255,255,255,.75);background:rgba(0,0,0,.18);color:#fff;font:700 .9375rem var(--body);cursor:pointer}\n.pfc-sub svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8}\n.pfc .avw{margin-top:-52px}\n.pfc .avw .av{width:104px;height:104px;font-size:2rem;border:4px solid var(--superficie);box-shadow:0 0 0 3px var(--accion)}\n.pfc .avw .emo{width:38px;height:38px;font-size:1.25rem;right:-4px;bottom:0;cursor:pointer}\n.pfc .avw .emo.vacio{color:var(--tinta-suave);font-size:1.3rem}\n.pfc h2{margin:6px 0 0;font:800 1.5rem/1.15 var(--display);text-transform:none;letter-spacing:0}\n.pfc .apodo{font-weight:700;color:var(--accion-texto)}\n.pfc .pfc-d{margin:4px 0 0;font-size:1rem;line-height:1.4;max-width:34em}\n.pfc .pend{font-size:.75rem;font-weight:800;padding:2px 8px;border-radius:999px;background:color-mix(in srgb,var(--ambar,#e0a100) 22%,transparent);color:var(--tinta);margin-left:6px;vertical-align:middle}\n.pfc .tgs{align-self:stretch;text-align:left}\n.pfc-pr{align-self:stretch;display:grid;gap:6px;margin-top:6px;text-align:left}\n.pfc-pr .tv-bar{height:8px}\n.pfc-pr small{color:var(--tinta-suave)}\n.pfc-ed{margin-top:8px;min-width:180px}\n.pfe .box{gap:0}\n.pfe .box>.sec-h{position:sticky;top:-18px;z-index:2;background:var(--superficie);padding:6px 0 10px;margin:0}\n.pfe .box .sec{margin:0;padding:14px 0;border-bottom:1px solid var(--linea)}\n@media (prefers-reduced-motion:reduce){.tv-bar i,.mv-mas svg,.cm-i.cm-foco{transition:none}}\n\n/* ===== v4.27 · Colección de mascotas ===== */\n/* v4.27.3 · la mascota, grande, a la izquierda de la foto; asoma sobre la portada (sin nombre) */\n.pfc .avw .mcb{position:absolute;right:calc(100% - 30px);bottom:0;width:140px;height:140px;padding:0;border:0;background:none;cursor:pointer;z-index:2;filter:drop-shadow(0 4px 6px rgba(0,0,0,.25))}\n.mc-pfw{position:relative;display:inline-flex}\n.mc-pfw .mc-gr{position:absolute;right:calc(100% - 30px);bottom:0;width:136px;height:136px;object-fit:contain;pointer-events:none;z-index:2;filter:drop-shadow(0 4px 6px rgba(0,0,0,.25))}\n.mcb img,.mc-av img{width:100%;height:100%;object-fit:contain;display:block}\n.mcb .mc-pr{display:none}\n.pfc-mc{display:inline-flex;align-items:center;gap:10px;min-height:48px;margin-top:8px;padding:0 16px 0 6px;border-radius:999px;border:1.5px solid var(--borde-control);background:var(--superficie);color:var(--tinta);font:700 .9375rem var(--body);cursor:pointer}\n.pfc-mc .mc-av{width:36px;height:36px;border-radius:50%;background:#fff;overflow:hidden;flex:none}\n.pfc-mc .mc-nv{font-size:.75rem;font-weight:800;padding:2px 8px;border-radius:999px;background:var(--accion);color:var(--sobre-accion)}\n.mc .box{max-width:560px}\n.mc-int{margin:0 0 12px;color:var(--tinta-suave);font-size:.9375rem;line-height:1.4}\n.mc-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;list-style:none;margin:0;padding:0}\n.mc-c{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;width:100%;padding:8px 6px 10px;border-radius:14px;border:1.5px solid var(--linea);background:var(--superficie);color:var(--tinta);font:inherit;text-align:center;cursor:pointer}\n.mc-c.el{border-color:var(--accion);box-shadow:0 0 0 2px var(--accion)}\n.mc-c .mc-im{width:100%;aspect-ratio:1;border-radius:10px;background:#fff;display:grid;place-items:center;overflow:hidden}\n.mc-c .mc-im img{width:100%;height:100%;object-fit:contain}\n.mc-c.blq .mc-im{background:var(--superficie-2,#eef2f5)}\n.mc-c.blq .mc-im img{filter:brightness(0);opacity:.22}\n.mc-q{font:800 2.2rem/1 var(--display);color:var(--tinta-suave)}\n.mc-pr{font-size:.75rem;font-weight:700;color:var(--tinta-suave);padding:0 4px}\n.mc-n{font-size:.8125rem;font-weight:800;line-height:1.15}\n.mc-c .tv-bar{width:100%;height:6px}\n.mc-c small{font-size:.6875rem;color:var(--tinta-suave);font-variant-numeric:tabular-nums}\n.mc-t{position:absolute;top:6px;left:6px;font-size:.625rem;font-weight:800;padding:2px 6px;border-radius:999px;background:var(--accion);color:var(--sobre-accion)}\n.mc-d{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:4px 0 8px}\n.mc-d .mc-im{width:min(64vw,240px);aspect-ratio:1;border-radius:18px;background:#fff;display:grid;place-items:center;overflow:hidden}\n.mc-d .mc-im img{width:100%;height:100%;object-fit:contain}\n.mc-d.blq .mc-im{background:var(--superficie-2,#eef2f5)}\n.mc-d.blq .mc-im img{filter:brightness(0);opacity:.22}\n.mc-d h4{margin:4px 0 0;font:800 1.375rem/1.15 var(--display)}\n.mc-d p{margin:0;font-size:1rem;line-height:1.4;max-width:30em}\n.mc-d .tv-bar{width:min(100%,280px);height:8px}\n.mc-err{color:var(--peligro-texto,#B42318);font-weight:700}\n/* celebración */\n.mcx .box{text-align:center;background:radial-gradient(circle at 10% 12%,#FFD23F 0 5px,transparent 6px),radial-gradient(circle at 88% 10%,#FF6FB5 0 5px,transparent 6px),radial-gradient(circle at 92% 70%,#4CC9F0 0 5px,transparent 6px),radial-gradient(circle at 6% 78%,#7BD389 0 5px,transparent 6px),radial-gradient(circle at 50% 4%,#FF8A3D 0 4px,transparent 5px),radial-gradient(circle at 70% 92%,#FFD23F 0 4px,transparent 5px),radial-gradient(circle at 28% 94%,#FF6FB5 0 4px,transparent 5px),var(--superficie)}\n.mcx-et{margin:6px 0 0;font:800 .8125rem/1 var(--body);letter-spacing:.06em;text-transform:uppercase;color:var(--accion-texto)}\n.mcx h3{margin:6px 0 2px;font:800 1.625rem/1.15 var(--display);text-transform:none;letter-spacing:0}\n.mcx .mc-im{width:min(62vw,230px);aspect-ratio:1;margin:8px auto;border-radius:18px;background:#fff;display:grid;place-items:center;overflow:hidden;animation:mcSalto .7s cubic-bezier(.2,1.4,.4,1) both}\n.mcx .mc-im img{width:100%;height:100%;object-fit:contain}\n.mcx-v{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:10px 0}\n.mcx-v .mc-av{width:64px;height:64px;border-radius:14px;background:#fff;overflow:hidden;display:grid;place-items:center}\n.mcx-b{display:flex;flex-direction:column;gap:8px;margin-top:12px}\n@keyframes mcSalto{0%{transform:scale(.4) rotate(-8deg);opacity:0}100%{transform:none;opacity:1}}\n@media (prefers-reduced-motion:reduce){.mcx .mc-im{animation:none}}\n/* Equipo y anuncios */\n.mc-pf{display:inline-flex;align-items:center;gap:8px;padding:4px 12px 4px 4px;border-radius:999px;background:var(--superficie-2,#eef2f5);font-weight:700;font-size:.875rem}\n.mc-pf .mc-av{width:32px;height:32px;border-radius:50%;background:#fff;overflow:hidden}\n.cv-an .mc-buho{float:right;width:76px;height:76px;margin:-4px -4px 6px 10px;object-fit:contain}\n\n/* ===== v4.23 · piel nueva: tokens ===== */\n:host{display:block;--fondo:#FFFFFF;--superficie:#FFFFFF;--superficie-alta:#EAF4EE;--tinta:#0C1F17;--tinta-suave:#485A50;--linea:#E2E8E4;--borde-control:#6B7D73;--pista:#CBD5CE;--verde:#00843D;--sobre-verde:#FFFFFF;--verde-texto:#00703A;--accion:var(--verde);--sobre-accion:#FFFFFF;--accion-texto:var(--verde-texto);--celeste:#5BC2E7;--sobre-celeste:#0C1F17;--celeste-texto:#0A6C93;--ambar:#F2B544;--sobre-ambar:#0C1F17;--ambar-texto:#8A5300;--rosetas:rgba(12,31,23,.17);--rojo:#C8211B;--sobre-rojo:#FFFFFF;--amarillo:#F2C230;--foco:#0C1F17;--reflector:rgba(91,194,231,0);--filo-luz:none;--filo-luz-ligero:none;--filo-barra:none;--banda-fondo:#00843D;--banda-texto:#FFFFFF;--banda-filete:#5BC2E7;--r-panel:0px;--bw-panel:0 0 1px;--pad-panel:16px 0;--mb-panel:0px;--escudo-dia:block;--escudo-noche:none;--nav-barra:block;--nav-pildora:none;color-scheme:light;--li-bg:transparent;--li-r:0px;--li-bw:0 0 1px;--li-pad:10px 0;--banda-btn:#FFFFFF;--banda-btn-t:var(--verde-texto);--banda-foco:#FFFFFF;--serie-1:var(--accion);--serie-2:#B26B00;--serie-3:#C8211B;--serie-4:#0A6C93;--serie-1-t:var(--accion-texto);--serie-2-t:var(--ambar-texto);--serie-3-t:#C8211B;--serie-4-t:#0A6C93;--bg:var(--fondo);--surface:var(--superficie);--surface-2:var(--superficie-alta);--ink:var(--tinta);--muted:var(--tinta-suave);--accent:var(--accion);--accent-ink:var(--sobre-accion);--border:var(--linea);--brand:var(--banda-fondo);--err:var(--rojo);--danger:var(--err);--ok:var(--verde-texto);--warn:var(--ambar);--sky:var(--celeste);--ok-ink:var(--verde-texto);--warn-ink:var(--ambar-texto);--danger-ink:var(--rojo);--sky-ink:var(--celeste-texto);--ok-solid:var(--verde-texto);--on-ok:var(--sobre-verde);--on-danger:var(--sobre-rojo);--on-warn:var(--sobre-ambar);--ok-soft:color-mix(in srgb,var(--ok) 13%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 22%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 13%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 20%,var(--surface));--pitch:#0d6b43;--grid:var(--linea);--display:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--body:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--nav:68px;--rl-celeste:#0A6C93;--rl-verde:#00703A;--rl-ambar:#8A5300;--rl-rojo:#C8211B;}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--fondo:#0B1B2E;--superficie:#0B1B2E;--superficie-alta:#1B3552;--tinta:#F2F6FA;--tinta-suave:#A9B8C8;--linea:rgba(169,184,200,.16);--borde-control:#7F92A8;--pista:var(--superficie-alta);--verde:#34C27A;--sobre-verde:#0B1B2E;--verde-texto:#34C27A;--accion:var(--celeste);--sobre-accion:#0B1B2E;--accion-texto:var(--celeste);--celeste:#7FD0F0;--sobre-celeste:#0B1B2E;--celeste-texto:#7FD0F0;--ambar:#F2B544;--sobre-ambar:#0C1F17;--ambar-texto:#F2B544;--rosetas:rgba(12,31,23,.17);--rojo:#FF7468;--sobre-rojo:#0B1B2E;--amarillo:#F2C230;--foco:#7FD0F0;--reflector:rgba(127,208,240,.14);--filo-luz:none;--filo-luz-ligero:none;--filo-barra:inset 0 1px 0 rgba(242,246,250,.14);--banda-fondo:#1B3552;--banda-texto:#F2F6FA;--banda-filete:#7FD0F0;--r-panel:0px;--bw-panel:0 0 1px;--pad-panel:16px 0;--mb-panel:0px;--escudo-dia:none;--escudo-noche:block;--nav-barra:none;--nav-pildora:block;color-scheme:dark;--li-bg:transparent;--li-r:0px;--li-bw:0 0 1px;--li-pad:10px 0;--banda-btn:var(--accion);--banda-btn-t:var(--sobre-accion);--banda-foco:var(--foco);--serie-1:var(--accion);--serie-2:#F2B544;--serie-3:#34C27A;--serie-4:#FF7468;--serie-1-t:var(--serie-1);--serie-2-t:var(--serie-2);--serie-3-t:var(--serie-3);--serie-4-t:var(--serie-4);--bg:var(--fondo);--surface:var(--superficie);--surface-2:var(--superficie-alta);--ink:var(--tinta);--muted:var(--tinta-suave);--accent:var(--accion);--accent-ink:var(--sobre-accion);--border:var(--linea);--brand:var(--banda-fondo);--err:var(--rojo);--danger:var(--err);--ok:var(--verde-texto);--warn:var(--ambar);--sky:var(--celeste);--ok-ink:var(--verde-texto);--warn-ink:var(--ambar-texto);--danger-ink:var(--rojo);--sky-ink:var(--celeste-texto);--ok-solid:var(--verde-texto);--on-ok:var(--sobre-verde);--on-danger:var(--sobre-rojo);--on-warn:var(--sobre-ambar);--ok-soft:color-mix(in srgb,var(--ok) 13%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 22%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 13%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 20%,var(--surface));--pitch:#0d6b43;--grid:var(--linea);--display:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--body:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--nav:68px;}}\n:host([data-theme=\"dark\"]){--fondo:#0B1B2E;--superficie:#0B1B2E;--superficie-alta:#1B3552;--tinta:#F2F6FA;--tinta-suave:#A9B8C8;--linea:rgba(169,184,200,.16);--borde-control:#7F92A8;--pista:var(--superficie-alta);--verde:#34C27A;--sobre-verde:#0B1B2E;--verde-texto:#34C27A;--accion:var(--celeste);--sobre-accion:#0B1B2E;--accion-texto:var(--celeste);--celeste:#7FD0F0;--sobre-celeste:#0B1B2E;--celeste-texto:#7FD0F0;--ambar:#F2B544;--sobre-ambar:#0C1F17;--ambar-texto:#F2B544;--rosetas:rgba(12,31,23,.17);--rojo:#FF7468;--sobre-rojo:#0B1B2E;--amarillo:#F2C230;--foco:#7FD0F0;--reflector:rgba(127,208,240,.14);--filo-luz:none;--filo-luz-ligero:none;--filo-barra:inset 0 1px 0 rgba(242,246,250,.14);--banda-fondo:#1B3552;--banda-texto:#F2F6FA;--banda-filete:#7FD0F0;--r-panel:0px;--bw-panel:0 0 1px;--pad-panel:16px 0;--mb-panel:0px;--escudo-dia:none;--escudo-noche:block;--nav-barra:none;--nav-pildora:block;color-scheme:dark;--li-bg:transparent;--li-r:0px;--li-bw:0 0 1px;--li-pad:10px 0;--banda-btn:var(--accion);--banda-btn-t:var(--sobre-accion);--banda-foco:var(--foco);--serie-1:var(--accion);--serie-2:#F2B544;--serie-3:#34C27A;--serie-4:#FF7468;--serie-1-t:var(--serie-1);--serie-2-t:var(--serie-2);--serie-3-t:var(--serie-3);--serie-4-t:var(--serie-4);--bg:var(--fondo);--surface:var(--superficie);--surface-2:var(--superficie-alta);--ink:var(--tinta);--muted:var(--tinta-suave);--accent:var(--accion);--accent-ink:var(--sobre-accion);--border:var(--linea);--brand:var(--banda-fondo);--err:var(--rojo);--danger:var(--err);--ok:var(--verde-texto);--warn:var(--ambar);--sky:var(--celeste);--ok-ink:var(--verde-texto);--warn-ink:var(--ambar-texto);--danger-ink:var(--rojo);--sky-ink:var(--celeste-texto);--ok-solid:var(--verde-texto);--on-ok:var(--sobre-verde);--on-danger:var(--sobre-rojo);--on-warn:var(--sobre-ambar);--ok-soft:color-mix(in srgb,var(--ok) 13%,var(--surface));--warn-soft:color-mix(in srgb,var(--warn) 22%,var(--surface));--danger-soft:color-mix(in srgb,var(--err) 13%,var(--surface));--sky-soft:color-mix(in srgb,var(--sky) 20%,var(--surface));--pitch:#0d6b43;--grid:var(--linea);--display:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--body:'Archivo',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--nav:68px;}\n\n/* ===== v4.23 · piel nueva: reglas comunes (mismo texto en el núcleo y en los tres módulos) ===== */\n:root,:host{--dur-toque:80ms;--dur-estado:180ms;--dur-entrada:350ms;--dur-gol:600ms;--ease-suave:cubic-bezier(.22,1,.36,1);--ease-firme:cubic-bezier(.4,0,.2,1);--ease-rebote:cubic-bezier(.34,1.56,.64,1)}\nh1,h2,h3,h4{font-family:var(--display);font-weight:800;font-stretch:112%;font-variation-settings:'wdth' 112;text-transform:none;letter-spacing:0;text-wrap:balance;line-height:1.2}\nh1{font-size:1.375rem}h2{font-size:1.125rem}h3{font-size:1rem}\n:focus-visible{outline:3px solid var(--foco);outline-offset:2px}\n.sec{background:var(--superficie);border:solid var(--linea);border-width:var(--bw-panel);border-radius:var(--r-panel);padding:var(--pad-panel);margin-bottom:var(--mb-panel);box-shadow:var(--filo-luz)}\n.btn{min-height:44px;border-radius:8px;border:1.5px solid var(--tinta);background:transparent;color:var(--tinta);font-weight:700;transition:transform var(--dur-toque) var(--ease-firme)}\n.btn.pri{background:var(--accion);color:var(--sobre-accion);border-color:var(--accion);font-weight:800}\n.btn:not(:disabled):active{transform:scale(.96);opacity:1}\n.btn.sm{min-height:44px;border-radius:8px}\n.btn.dan{background:var(--rojo);color:var(--sobre-rojo);border-color:var(--rojo)}\n.fchip,.seg button,.rx button,.tb-as label{touch-action:manipulation}\n.chip{border-radius:999px;text-transform:none;letter-spacing:0;font-size:.78rem;font-weight:700}\n.chip.les{background:color-mix(in srgb,var(--rojo) 14%,var(--superficie));color:var(--rojo)}\n.chip.sus{background:color-mix(in srgb,var(--ambar) 22%,var(--superficie));color:var(--ambar-texto)}\n.chip.ok{background:color-mix(in srgb,var(--verde-texto) 13%,var(--superficie));color:var(--verde-texto)}\n.chip.vis,.chip.b{background:color-mix(in srgb,var(--celeste) 22%,var(--superficie));color:var(--celeste-texto)}\n.banner{border-radius:8px}\n.banner.warn{background:color-mix(in srgb,var(--ambar) 22%,var(--fondo));border:1px solid var(--ambar-texto);color:var(--tinta)}\n.rol,.apodo{text-transform:none;letter-spacing:0}\n.livedot{background:var(--sobre-celeste)}\nlabel.f input,label.f textarea,label.f select,.dlg-in,textarea.ta,select.sel,.tb-ed input,.tb-ed select,.tb-ed textarea{border:1.5px solid var(--borde-control);border-radius:8px;background:var(--superficie)}\n.seg{border:1.5px solid var(--borde-control);border-radius:8px;background:var(--superficie-alta)}\n.seg button{border-radius:6px}\n.seg button[aria-pressed=\"true\"]{background:var(--superficie);color:var(--tinta);box-shadow:var(--filo-luz-ligero);outline:2px solid var(--tinta);outline-offset:-2px}\n.fchip{border:1.5px solid var(--borde-control)}\n.rx button{border:1.5px solid var(--borde-control);border-radius:8px;background:var(--superficie-alta);box-shadow:var(--filo-luz-ligero)}\n.lst li,.li{background:var(--li-bg);border:solid var(--linea);border-width:var(--li-bw);border-radius:var(--li-r);padding:var(--li-pad)}\n.lst{gap:0}\n*{text-transform:none!important}\n/* En vivo: marcador (banda con corte de 12°), chip «En vivo» y franja de gol */\n.board{--alto:204px;position:relative;margin:0 -16px 16px;padding:16px 20px 14px 52px;background:var(--banda-fondo);color:var(--banda-texto);border:0;border-bottom:6px solid var(--banda-filete);border-radius:0;\n  display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"sc sc\" \"a b\";gap:6px 12px;text-align:center;box-shadow:none;clip-path:polygon(calc(var(--alto) * .2126) 0,100% 0,100% 100%,0 100%)}\n.board .sc{grid-area:sc;display:flex;flex-direction:column-reverse;align-items:center;gap:6px;font:900 clamp(76px,26vw,120px)/.92 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.03em;word-spacing:-.2em;white-space:nowrap;font-variant-numeric:tabular-nums}\n.board .sc small{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px 10px;font:600 .9375rem/1.25 var(--body);letter-spacing:0;word-spacing:0;opacity:1;margin:0;white-space:normal}\n.board .tm:first-child{grid-area:a}.board .tm:last-child{grid-area:b}\n.board .tm{align-self:start;display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;font-weight:700;font-size:.9375rem;line-height:1.2}\n.board .tm img,.board .tm .esc{width:44px;height:48px;object-fit:contain;flex:none}\n.board .tm .esc{display:grid;place-items:center}\n.board .tm .esc:not(:has(img)){border-radius:8px 8px 22px 22px;background:var(--banda-texto);color:var(--banda-fondo);font:900 1.375rem/1 var(--display)}\n.board .tm>span:last-child{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;max-width:100%;overflow-wrap:anywhere}\n.esc-d{display:var(--escudo-dia)}.esc-n{display:var(--escudo-noche)}\n.enlive{display:inline-flex;align-items:center;gap:6px;min-height:24px;padding:0 10px 0 12px;background:var(--celeste);color:var(--sobre-celeste);font:800 .8125rem/1 var(--body);clip-path:polygon(4px 0,100% 0,100% 100%,0 100%)}\n.enlive .livedot{margin:0;width:8px;height:8px;background:var(--sobre-celeste)}\n@media (prefers-reduced-motion:reduce){.livedot{animation:none}}\n.gol-salto{animation:gol-flash .5s ease-out var(--gd,0ms) 1}\n@keyframes gol-flash{0%{opacity:.5}100%{opacity:1}}\n@media (prefers-reduced-motion:reduce){.gol-salto{animation:none}}\n.gol-snd{display:flex;align-items:center;justify-content:flex-start;gap:12px;width:100%;min-height:52px;margin:0;padding:4px 0;border:0;border-bottom:1px solid var(--linea);border-radius:0;background:var(--fondo);color:var(--tinta);font-weight:600;text-align:left;cursor:pointer}\n.gol-snd>span:first-child{display:none}\n.gol-snd>span:nth-child(2){flex:1}\n.gol-snd b{font-weight:500;font-size:.8125rem;color:var(--tinta-suave)}\n.gol-snd::after{content:\"\";flex:none;width:52px;height:32px;box-sizing:border-box;border:2px solid var(--borde-control);border-radius:16px;background:radial-gradient(circle 10px at 14px 50%,var(--tinta-suave) 0 99%,transparent 100%),var(--superficie-alta);transition:background var(--dur-estado) var(--ease-firme)}\n.gol-snd[aria-checked=\"true\"]{background:var(--fondo);color:var(--tinta);border-color:var(--linea)}\n.gol-snd[aria-checked=\"true\"]::after{border-color:var(--accion);background:radial-gradient(circle 10px at 34px 50%,var(--sobre-accion) 0 99%,transparent 100%),var(--accion)}\n@media (prefers-reduced-motion:reduce){.gol-snd::after{transition:none}}\n.gol-zona{left:0;right:0;top:calc(env(safe-area-inset-top,0px) + 64px);justify-content:stretch;background:var(--fondo)}\n.gol-franja{--alto:64px;position:relative;width:100%;max-width:none;box-sizing:border-box;min-height:64px;padding:8px 20px 8px 44px;display:flex;align-items:center;gap:12px;text-align:left;border-radius:0;box-shadow:none;\n  background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 64' preserveAspectRatio='xMidYMid slice'%3E%3Cg fill='none' stroke='rgba(12,31,23,0.17)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(-8 -6) rotate(20 20 20) scale(1.1)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(56 29) rotate(-30 20 20) scale(.9)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(150 -10) rotate(60 20 20) scale(1.15)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3Cg transform='translate(214 32) rotate(-15 20 20) scale(.85)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(280 -14) rotate(10 20 20) scale(1.25)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(330 32) rotate(100 20 20) scale(.9)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") center/cover no-repeat,var(--ambar);color:var(--sobre-ambar);clip-path:polygon(calc(var(--alto) * .2126) 0,100% 0,100% 100%,0 100%);animation:gol-entra var(--dur-gol) var(--ease-rebote) both}\n.gol-franja svg{flex:none;width:28px;height:28px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gol-franja b{display:block;font:900 1.625rem/1.2 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:0;text-transform:none}\n.gol-franja span{display:block;margin:0;font-weight:700;font-size:1.0625rem;line-height:1.3;overflow-wrap:anywhere}\n.gol-franja.lite{animation:gol-fundido 200ms linear both}\n@keyframes gol-entra{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:none}}\n@keyframes gol-fundido{from{opacity:0}to{opacity:1}}\n@media (prefers-reduced-motion:reduce){.gol-franja,.gol-franja.lite{animation:none}}\n/* línea de tiempo: filas separadas por línea, minuto en cifra ancha */\n.tl{gap:0}\n.tl .ev{grid-template-columns:60px 1fr;gap:8px;padding:12px 0;border-bottom:1px solid var(--linea)}\n.tl .ev .m,.tl .ev b.m{font:900 1.5rem/1.1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;color:var(--tinta);text-align:left}\n.tl .ev p{color:var(--tinta-suave);font-size:.8125rem}\n/* banda Matchday */\n.banda{--alto:180px;position:relative;margin:0 -16px;min-height:var(--alto);padding:16px 20px 16px 48px;background:var(--banda-fondo);color:var(--banda-texto);display:flex;flex-direction:column;justify-content:space-between;gap:10px;\n  clip-path:polygon(calc(var(--alto) * .2126) 0,100% 0,100% 100%,0 100%);border:0;border-radius:0;box-shadow:none}\n.banda-fil{height:6px;background:var(--banda-filete);margin:0 -16px 16px}\n.banda-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px}\n.banda-top h2,.banda-top h3{margin:0;font-size:1.125rem;line-height:1.2;color:inherit}\n.banda-top>span{font-size:.875rem;font-weight:500;text-align:right}\n.banda-cifra{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}\n.cifra{font-weight:900;font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.02em;font-variant-numeric:tabular-nums}\n.banda-cifra .cifra{font-size:clamp(56px,21vw,84px);line-height:.92}\n.banda-cifra .tit{font:800 1.375rem/1.2 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112}\n.banda-pie{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}\n.banda-pie p{margin:0}\n.banda-l1{font-size:1.0625rem;line-height:1.3;font-weight:700;overflow-wrap:anywhere}\n.banda-l2{font-size:.875rem;line-height:1.3;font-weight:500}\n.banda .btn.pri{margin:0;flex:none;width:auto;background:var(--banda-btn);color:var(--banda-btn-t);border-color:transparent}\n.banda :focus-visible{outline-color:var(--banda-foco)}\n\n.top{background:var(--fondo);color:var(--tinta);border-bottom:1px solid var(--linea)}\n.top b{font:800 1.25rem/1.2 var(--display);font-stretch:112%;font-variation-settings:'wdth' 112;letter-spacing:0;text-transform:none}\n.top span,.top .t span{color:var(--tinta-suave);opacity:1;text-transform:none;letter-spacing:0}\n.top .cfg,#bellBtn.cfg,#cfgBtn.cfg,.top .ibtn{background:var(--superficie-alta);color:var(--tinta);border:0;border-radius:8px}\n.top img{height:38px;width:auto}\n\nmain{gap:var(--mb-panel)}\n.hero .av{border-radius:8px;border:0;background:var(--superficie-alta);color:var(--tinta);font-stretch:125%;font-variation-settings:'wdth' 125}\n.hero h2{font-size:1.5rem}\n.kpi b{font:900 2.5rem/1.1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.02em}\n.kpi span{font-size:.8125rem;font-weight:400;color:var(--tinta-suave);letter-spacing:0}\n.kpis{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:12px 8px}.kpi{padding-right:0;min-width:0}.kpi b{display:block;white-space:nowrap;font-size:clamp(1.875rem,8vw,2.5rem)}\n.res{border-radius:4px;font-stretch:125%}\n.niv-Excelente,.mp-rs .rG{background:var(--rl-verde)}.niv-Bueno{background:var(--rl-celeste)}.niv-Regular,.mp-rs .rE{background:var(--rl-ambar)}.niv-A,.mp-rs .rP{background:var(--rl-rojo)}\n.niv{border-radius:4px}\n.mp-rs span{border-radius:4px}\n.sc i{border-radius:0;background:var(--pista);transform:skewX(-12deg)}.sc i.on{background:var(--accion)}\n.bn-prog,.pista{height:12px;border-radius:0;background:var(--pista);overflow:hidden}\n.bn-prog i,.pista i{display:block;height:100%;border-radius:0;background:var(--accion);clip-path:polygon(0 0,100% 0,calc(100% - 3px) 100%,0 100%)}\n.tb i{border-radius:0;background:var(--accion)}\n.dots i{border-radius:2px}\n.mt-msg,.post,.pc{border-radius:8px}\n.post,.mt-msg{border:solid var(--linea);border-width:var(--li-bw)}\n.mm{border-top:1px solid var(--linea)}\n.mm.ok b{color:var(--verde-texto)}\n.more,.back{color:var(--celeste-texto)}\n.mt-top li.yo{color:var(--accion-texto)}\n.tabs{display:none!important}\n/* último test: logro con rosetas cuando mejoró; si no, una fila con la cifra */\n.ult-test{padding:var(--pad-panel);border:solid var(--linea);border-width:var(--bw-panel);border-radius:var(--r-panel);background:var(--superficie);box-shadow:var(--filo-luz)}\n.ult-test .lg-et{margin:0;font-size:.875rem;font-weight:500;color:var(--tinta-suave)}\n.ult-test .lg-n{margin:4px 0 8px;font:900 3rem/1 var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;letter-spacing:-.02em}\n.ult-test .lg-n small{margin-left:6px;font:800 1.25rem var(--display);letter-spacing:0}\n.ult-test .lg-pie{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.ult-test .lg-chip{display:inline-flex;align-items:center;gap:6px;min-height:28px;padding:0 10px;border-radius:4px;background:var(--superficie-alta);color:var(--verde-texto);font-size:.8125rem;font-weight:700}\n.ult-test .lg-chip svg,.ev-i{flex:none;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;vertical-align:-4px;margin-right:6px}\n.ult-test.logro{border:0;border-radius:16px;margin-bottom:var(--mb-panel);padding:16px;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 64' preserveAspectRatio='xMidYMid slice'%3E%3Cg fill='none' stroke='rgba(12,31,23,0.17)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(-8 -6) rotate(20 20 20) scale(1.1)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(56 29) rotate(-30 20 20) scale(.9)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(150 -10) rotate(60 20 20) scale(1.15)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3Cg transform='translate(214 32) rotate(-15 20 20) scale(.85)'%3E%3Cpath d='M20 3.5c5.8-1.4 12.6 2.2 14.2 8.3 1.6 6-1 10.8-5.4 14.2-4.2 3.3-10.8 3.6-15.4.4-4.7-3.3-6.2-9.7-3.6-14.6'/%3E%3Cpath d='M18 14c2.6-1.2 6 .4 5.8 3.6-.2 2.8-3.2 4.2-5.6 3.2'/%3E%3C/g%3E%3Cg transform='translate(280 -14) rotate(10 20 20) scale(1.25)'%3E%3Cpath d='M12 5c4.4-3 11-1.6 14.4 2.6 3.2 4 3 10.2-.6 14-3.6 3.8-9.6 4.8-14 2.2-3.2-1.9-5-5-5.2-8.4'/%3E%3Cpath d='M16 13c2-1.2 4.8-.2 5.2 2.2.3 2-1.4 3.6-3.4 3.4'/%3E%3C/g%3E%3Cg transform='translate(330 32) rotate(100 20 20) scale(.9)'%3E%3Cpath d='M8 10c3-5.5 10.5-8 16-5.2 6 3 8.6 9.8 6.6 15.6-2 5.8-7.6 9.4-13.4 8.4-4.6-.8-8-4-9.2-8.2'/%3E%3Cpath d='M15 15.5c2.2-1.6 5.4-.6 6 2 .5 2.4-1.5 4.4-3.8 4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") center/cover no-repeat,var(--ambar);color:var(--sobre-ambar);box-shadow:none}\n.ult-test.logro .lg-et{color:var(--sobre-ambar)}\n.ult-test.logro .lg-chip{background:var(--sobre-ambar);color:var(--ambar)}\n.rx button{display:inline-flex;align-items:center;justify-content:center;gap:6px;color:var(--tinta)}\n.rx button svg{width:22px;height:22px;margin:0}\n.rx button b{font-family:var(--display);font-stretch:125%;font-variation-settings:'wdth' 125;font-weight:900;margin:0}\n.tl .ev b:not(.m){display:flex;align-items:center}\n</style><div class=\"mp-body\"><header class=\"top\"><div class=\"top-in\"><span id=\"crest\"></span><div class=\"t\"><b>Mi progreso</b><span id=\"club\"></span></div><button id=\"bellBtn\" class=\"cfg\" aria-label=\"Notificaciones\" style=\"position:relative\" onclick=\"window.dispatchEvent(new CustomEvent('sige:ir',{detail:'avisos'}))\"><svg viewBox=\"0 0 24 24\" width=\"21\" height=\"21\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/></svg><i id=\"bellNm\" hidden style=\"position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;border-radius:10px;background:#C4321F;color:#fff;font:700 11px/19px sans-serif;font-style:normal;padding:0 5px\"></i></button><button id=\"cfgBtn\" class=\"cfg\" style=\"margin-left:8px\" hidden aria-label=\"Cuenta\" onclick=\"window.dispatchEvent(new CustomEvent('sige:ir',{detail:'cuenta'}))\"><svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z\"/></svg></button></div></header><main id=\"app\"></main></div>";
function crearDoc(sr,body){
  return {
    getElementById:id=>sr.getElementById(id),
    querySelector:s=>sr.querySelector(s),
    querySelectorAll:s=>sr.querySelectorAll(s),
    addEventListener:(t,f,o)=>sr.addEventListener(t,f,o),
    createElement:t=>window.document.createElement(t),
    get activeElement(){return sr.activeElement},
    get visibilityState(){return window.document.visibilityState},
    body
  };
}
window.SIGE_MOD=window.SIGE_MOD||{};
/** Monta el módulo en `host` (un elemento vacío). api: {llamar(ses,body), salir()}. */
window.SIGE_MOD.progreso=function(host,api){
  const sr=host.attachShadow({mode:"open"});sr.innerHTML=HTML;
  return (function(document){
/* v4.22 · Primeros pasos y gol en vivo: el núcleo (window.SIGE) decide; este módulo dibuja */
let __ppSig="";
function vPrimeros(){
  const N=window.SIGE,p=N&&N.primeros&&N.primeros();__ppSig=p?p.sig:"";if(!p)return "";
  return `<section class="sec" aria-labelledby="ppT"><div class="sec-h"><h3 id="ppT">Primeros pasos</h3><span class="chip ok" aria-label="${p.n} de ${p.total} pasos listos">${p.n} de ${p.total}</span></div>
  <p class="hint" style="margin:0">Cuatro pasos para sacarle provecho a la app. Toca uno para abrirlo.</p>
  <ul class="pp-l">${p.pasos.map(x=>`<li><button class="pp-b${x.hecho?" ok":""}" data-a="pp-ir" data-k="${esc(x.k)}"><span class="pp-i" aria-hidden="true">${x.hecho?"✓":""}</span><span><b>${esc(x.t)}</b><small>${esc(x.d)}</small></span></button></li>`).join("")}</ul>
  <button class="btn sm" data-a="pp-no">Ahora no</button></section>`;
}
const __golSc=()=>{const N=window.SIGE;return N&&N.gol?N.gol.scAttr():'class="sc"'};
const __golBtn=()=>{const N=window.SIGE;return N&&N.gol?N.gol.boton():""};
function __v422Clic(t){const N=window.SIGE,a=t.dataset.a;
  if(a==="pp-ir"){if(N&&N.primerosIr)N.primerosIr(t.dataset.k);return true}
  if(a==="pp-no"){if(N&&N.primerosCerrar)N.primerosCerrar();render();return true}
  if(a==="gol-snd"){if(N&&N.gol)N.gol.alternar();render();return true}
  return false}
// El núcleo avisa cuando cambia algo que afecta a la tarjeta (llegó el tablero, se activaron las notificaciones, se volvió de otra pantalla)
addEventListener("sige:estado",()=>{try{if(S.tab!=="prog"||!S.d||S.bf)return;const N=window.SIGE,p=N&&N.primeros&&N.primeros(),sig=p?p.sig:"";if(sig!==__ppSig)render()}catch(e){}});
/* v4.23 · íconos SVG de trazo (nunca emoji) */
const __IC={
  balon:'<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5l3 2.2-1.1 3.5h-3.8L9 10.7zM12 8.5V3.6M15 10.7l4.4-1.6M13.9 14.2l2.8 3.8M10.1 14.2 7.3 18M9 10.7 4.6 9.1"/>',
  amarilla:'<rect x="7" y="4" width="10" height="16" rx="1.5" fill="var(--amarillo)" stroke="var(--tinta)"/>',
  roja:'<rect x="7" y="4" width="10" height="16" rx="1.5" fill="var(--rojo)" stroke="var(--tinta)"/>',
  cambio:'<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  penal:'<path d="M4 20V8l8-4 8 4v12M8 20v-6h8v6"/>',
  medica:'<path d="M12 5v14M5 12h14"/>',
  forma:'<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
  aplauso:'<path d="M8 12.5 6 8.5M11 11 9 6M14 11l-1.5-5M16.5 12 15 8M7 13c0 4 2 7 6 7s6-3 6-6v-3"/>',
  fuego:'<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z"/>',
  corazon:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10z"/>',
  tendencia:'<path d="M3 7l6 6 4-4 8 8M21 11v6h-6"/>'
};
const __ic=(k,c)=>'<svg class="'+(c||"ev-i")+'" viewBox="0 0 24 24" aria-hidden="true">'+__IC[k]+'</svg>';
/* v4.20 · diálogo propio (SIGE.dialogo) con respaldo nativo */
const __dlg=o=>{const N=window.SIGE;if(N&&N.dialogo)return N.dialogo(o);const m=o.modo||"confirmar",x=(o.titulo?o.titulo+"\n\n":"")+(o.texto||"");
  return Promise.resolve(m==="pedir"?window.prompt(x,o.valor||""):m==="avisar"?void window.alert(x):window.confirm(x))};
const __toast=t=>{const N=window.SIGE;if(N&&N.toast)N.toast(t);else __dlg({modo:"avisar",texto:t})};
const __ESQ='<div class="esq" aria-busy="true"><span class="solo-sr">Cargando…</span><i class="esq-b"></i><i class="esq-b"></i><i class="esq-b"></i></div>';
const __ESQS='<section class="sec esq" aria-busy="true"><span class="solo-sr">Cargando…</span><i class="esq-b"></i><i class="esq-b"></i><i class="esq-b"></i></section>';
"use strict";
const K="mp1:";
const LS={get(k,d){try{const v=localStorage.getItem(K+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(K+k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(K+k)}catch(e){}}};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const MES=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],DIA=["dom","lun","mar","mié","jue","vie","sáb"];

/* ---------- v4.3 · Mis tests: nivel, puesto, medallas y mensaje de motivación ---------- */
const NIVS=["Excelente","Bueno","Regular","A mejorar"];
const TMSG={
  primera:t=>`¡Primer registro en ${t}! Este es tu punto de partida: desde aquí vamos a medir tu progreso.`,
  oro:t=>`¡Mejor marca del equipo en ${t}! Felicitaciones. Sigue trabajando para sostenerla.`,
  podio:t=>`¡Estás en el podio de ${t}! Tu esfuerzo se nota. Sigue así.`,
  record:t=>`¡Nuevo récord personal en ${t}! Superaste tu mejor marca. Ese es el camino.`,
  topMejora:t=>`¡Estás entre los que más mejoraron del equipo en ${t}! Ese progreso es fruto de tu constancia.`,
  subio:(t,nv)=>`¡Subiste a nivel ${nv} en ${t}! El trabajo de cada entrenamiento está dando resultado.`,
  mejoro:(t,p)=>`Mejoraste ${p} en ${t} frente a la toma anterior. Vas por buen camino.`,
  igual:t=>`Mantuviste tu marca en ${t}. El próximo paso es superarla: confía en el trabajo de cada entrenamiento.`,
  bajo:t=>`Este test no salió como el anterior. Pasa: cuenta cómo dormiste, la carga de la semana y cómo llegaste. Sigue entrenando, la próxima toma es otra oportunidad.`
};
window.__tmsg=TMSG;
function mtAnalisis(x){
  const T=x.tomas,i=T.map(k=>!!k.yo).lastIndexOf(true),k=T[i],yo=k.yo,menor=/menor/i.test(x.mejor);
  const mias=T.slice(0,i).filter(o=>o.yo).map(o=>o.yo.v),antNiv=(T.slice(0,i).filter(o=>o.yo).pop()||{}).yo;
  const record=mias.length>0&&mias.every(v=>menor?yo.v<v:yo.v>v),podio=yo.puesto<=3,top=(k.mejoraron||[]).some(m=>m.yo);
  const subio=antNiv&&antNiv.nivel&&yo.nivel&&NIVS.indexOf(yo.nivel)<NIVS.indexOf(antNiv.nivel);
  const med=[];if(podio)med.push(yo.puesto===1?"🥇 Mejor marca":yo.puesto===2?"🥈 Podio":"🥉 Podio");if(top)med.push("🚀 Top mejora");if(record)med.push("⭐ Récord personal");if(subio)med.push("📈 Subió de nivel");
  const pc=yo.mejora==null?"":Math.abs(Math.round(yo.mejora*100))+"%",t=x.test;
  const msg=!mias.length?(yo.puesto===1?TMSG.oro(t):podio?TMSG.podio(t):TMSG.primera(t)):yo.puesto===1?TMSG.oro(t):podio?TMSG.podio(t):record?TMSG.record(t):top?TMSG.topMejora(t):subio?TMSG.subio(t,yo.nivel):yo.mejora==null?TMSG.primera(t):yo.mejora>0.0005?TMSG.mejoro(t,pc):yo.mejora<-0.0005?TMSG.bajo(t):TMSG.igual(t);
  return {i,k,yo,med,msg,menor};
}
function mtLinea(x,menor){
  const P=x.tomas.filter(k=>k.yo||k.media!=null),u=x.unidad;if(P.length<2)return "";
  const W=300,H=110,L=10,R=10,T=16,B=24,vs=P.flatMap(k=>[k.media,k.yo&&k.yo.v]).filter(v=>v!=null),mn=Math.min(...vs),mx=Math.max(...vs);
  const X=i=>L+16+i*(W-L-R-32)/(P.length-1),Y=v=>mx===mn?(H-B+T)/2:T+(H-T-B)*(menor?(v-mn)/(mx-mn):(mx-v)/(mx-mn));
  const ln=(a,st)=>{const pts=P.map((k,i)=>a(k)!=null?X(i)+","+Y(a(k)):null).filter(Boolean);return pts.length>1?`<polyline points="${pts.join(" ")}" fill="none" ${st}/>`:""};
  let g=ln(k=>k.media,'stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"')+ln(k=>k.yo&&k.yo.v,'stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"');
  P.forEach((k,i)=>{if(k.yo)g+=`<circle cx="${X(i)}" cy="${Y(k.yo.v)}" r="5" fill="var(--accent)"/><text x="${X(i)}" y="${Y(k.yo.v)-9}" text-anchor="middle" style="font-size:11px;font-weight:700;fill:var(--ink)">${esc(tV(k.yo.v,u))}</text>`;g+=`<text x="${X(i)}" y="${H-6}" text-anchor="middle" style="font-size:11px;fill:var(--muted)">${esc(k.toma)}</text>`});
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Tu evolución y la media del equipo">${g}</svg><div class="legend"><span><i style="background:var(--accent)"></i>Tú</span><span><i style="background:var(--muted)"></i>Media del equipo</span><span class="hint">Arriba es mejor</span></div>`;
}
function vMisTests(d){
  const L=(d.testsEquipo||[]).filter(x=>x.tomas.some(k=>k.yo));
  if(!L.length)return '<section class="sec"><h3>Mis tests físicos</h3><p class="empty">Aún no hay tests registrados.</p></section>';
  return `<section class="sec"><h3>Mis tests físicos</h3>${L.map(x=>{const a=mtAnalisis(x),k=a.k,yo=a.yo,u=x.unidad;
    return `<div class="mt"><div class="sec-h"><b>${esc(x.test)}</b><span class="hint">${esc(k.toma)}${pD(k.fecha)?" · "+esc(dL(pD(k.fecha))):""}</span></div>
     <div class="mt-big"><b>${esc(tV(yo.v,u))}</b><span class="hint">${esc(u==="s"&&yo.v>=60?"min":u)}</span>${yo.nivel?`<span class="niv niv-${yo.nivel.split(" ")[0]}">${esc(yo.nivel)}</span>`:""}</div>
     <div class="hint">Puesto <b style="color:var(--ink)">${yo.puesto} de ${k.n}</b> · media del equipo ${esc(tV(k.media,u))}${yo.mejora!=null?` · <b style="color:var(--${yo.mejora>=0?"ok":"danger"})">${yo.mejora>=0?"+":"−"}${Math.abs(Math.round(yo.mejora*100))}%</b> vs toma anterior`:""}</div>
     <div class="mt-msg">${esc(a.msg)}</div>
     ${a.med.length?`<div class="mt-med">${a.med.map(m=>`<span>${esc(m)}</span>`).join("")}</div>`:""}
     ${mtLinea(x,a.menor)}
     <div class="mt-top"><div><b style="font-size:.86rem">Podio</b><ol>${(k.podio||[]).map(p=>`<li class="${p.yo?"yo":""}">${esc(p.yo?"Tú":p.nombre)}<span>${esc(tV(p.v,u))}</span></li>`).join("")}</ol></div>
     <div><b style="font-size:.86rem">Más mejoraron</b>${(k.mejoraron||[]).length?`<ol>${k.mejoraron.map(p=>`<li class="${p.yo?"yo":""}">${esc(p.yo?"Tú":p.nombre)}<span>+${Math.round(p.p*100)}%</span></li>`).join("")}</ol>`:'<p class="hint" style="margin:4px 0 0;font-size:.82rem">Aparece desde la segunda toma.</p>'}</div></div></div>`}).join("")}</section>`;
}
function vUltimoTest(d){
  const L=(d.testsEquipo||[]).filter(x=>x.tomas&&x.tomas.some(k=>k.yo));if(!L.length)return "";
  const A=L.map(x=>{const a=mtAnalisis(x);return {x,a,f:pD(a.k.fecha)||new Date(0)}}).sort((p,q)=>q.f-p.f)[0],x=A.x,a=A.a,yo=a.yo,u=x.unidad;
  const prev=x.tomas.slice(0,a.i).filter(o=>o.yo).pop(),dif=prev?yo.v-prev.yo.v:null,mej=dif!=null&&dif!==0&&(a.menor?dif<0:dif>0);
  const un=u==="s"&&yo.v>=60?"min":u,mag=dif==null?"":(u==="s"&&Math.abs(dif)>=60?tV(Math.abs(dif),u)+" min":f1(Math.abs(dif))+" "+u);
  const ch=dif==null?"Primera toma registrada":dif===0?"Igual que la toma anterior":(mej?"Mejoró ":"Bajó ")+mag,nv=yo.nivel?`<span class="niv niv-${yo.nivel.split(" ")[0]}">${esc(yo.nivel)}</span>`:"";
  return `<section class="ult-test${mej?" logro":""}" aria-label="Último test"><h3 class="lg-et">Último test · ${esc(x.test)}</h3><p class="lg-n">${esc(tV(yo.v,u))}<small>${esc(un)}</small></p><div class="lg-pie"><span class="lg-chip">${mej?__ic("tendencia",""):""}${esc(ch)}</span>${nv}</div></section>`;
}
function vMisTestsV17(d){
  const T={};(d.tests||[]).forEach(t=>(T[t.test]=T[t.test]||[]).push(t));
  return `<section class="sec"><h3>Mis tests físicos</h3>${Object.keys(T).length?Object.keys(T).map(k=>{const a=T[k].slice().sort((x,y)=>(pD(x.fecha)||0)-(pD(y.fecha)||0)),u=a[0].unidad||"",max=Math.max(...a.map(x=>n(x.resultado)||0))||1;
     const dif=a.length>1?(n(a[a.length-1].resultado)||0)-(n(a[0].resultado)||0):null,mej=dif==null?null:(/menor/i.test(a[0].mejor)?dif<0:dif>0);
     return `<div><div class="sec-h"><b>${esc(k)}</b><span class="hint">${esc(u==="s"&&a.some(x=>(n(x.resultado)||0)>=60)?"min:s":u)}</span></div><div class="tb">${a.slice(-6).map(x=>`<div><b>${tV(n(x.resultado),u)}</b><i style="height:${Math.max(6,(n(x.resultado)||0)/max*80)}px"></i>${esc(x.toma||dS(pD(x.fecha)))}</div>`).join("")}</div>
       <p class="hint" style="margin-top:6px">${dif==null?"Primera toma registrada.":dif===0?"Igual que en tu primera toma.":`<b style="color:var(--${mej?"ok":"danger"})">${mej?"Mejoraste":"Bajaste"} ${u==="s"&&Math.abs(dif)>=60?tV(Math.abs(dif),u)+" min":f1(Math.abs(dif))+" "+esc(u)}</b> desde tu primera toma.`}</p></div>`}).join(""):'<p class="empty">Aún no hay tests registrados.</p>'}</section>`;
}

/* ---------- v4.4 · Historial contra el rival (con los partidos que el puente ya envía) ---------- */
const RSTOP=new Set(["FC","CF","SC","CD","C","D","F","CLUB","DEPORTIVO","ESCUELA","DE","LA","EL","LOS","LAS","FUTBOL"]);
function rivKey(x){return String(x||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim().split(" ").filter(w=>w&&!RSTOP.has(w)).join(" ")}
function mpHist(d,p){const k=rivKey(p.rival);if(!k)return "";
  const L=(d.partidos||[]).filter(x=>rivKey(x.rival)===k&&n(x.gf)!=null&&n(x.gc)!=null).sort((a,b)=>(pD(a.fecha)||0)-(pD(b.fecha)||0));
  if(!L.length)return `<p class="hint" style="margin:10px 0 0">Primer partido contra ${esc(p.rival)}.</p>`;
  const r=x=>n(x.gf)>n(x.gc)?"G":n(x.gf)<n(x.gc)?"P":"E",c=t=>L.filter(x=>r(x)===t).length,gf=L.reduce((a,x)=>a+n(x.gf),0),gc=L.reduce((a,x)=>a+n(x.gc),0);
  return `<div class="mp-hist"><div class="sec-h"><b>Historial vs ${esc(p.rival)}</b><span class="hint">${L.length} PJ · ${c("G")}G ${c("E")}E ${c("P")}P · goles ${gf}-${gc}</span></div><div class="mp-rs">${L.slice(-3).reverse().map(x=>`<span><i class="r${r(x)}">${r(x)}</i>${esc(x.gf)}-${esc(x.gc)} · ${esc(dS(pD(x.fecha)))}</span>`).join("")}</div></div>`}

/* ---------- v4.5 · Mis metas (privadas) y Mi bienestar en el tiempo (solo el propio) ---------- */
function vMisMetas(d){const L=d.metas;if(!L)return "";
  const ic={"Técnica":"⚽","Táctica":"🧠","Física":"💪","Actitud":"🔥"},ord=x=>/proceso/i.test(x.estado)?0:/lograda/i.test(x.estado)?1:2;
  return `<section class="sec"><div class="sec-h"><h3>Mis metas</h3>${L.filter(x=>/lograda/i.test(x.estado)).length?`<span class="chip ok">🎯 ${L.filter(x=>/lograda/i.test(x.estado)).length} lograda${L.filter(x=>/lograda/i.test(x.estado)).length>1?"s":""}</span>`:""}</div>${L.length?L.slice().sort((a,b)=>ord(a)-ord(b)).map(m=>`<div class="mm ${/lograda/i.test(m.estado)?"ok":/pausa/i.test(m.estado)?"pa":""}"><span class="ic" aria-hidden="true">${/lograda/i.test(m.estado)?"🎯":ic[m.area]||"⭐"}</span><span style="flex:1"><b>${esc(m.meta)}</b><br><span class="hint">${esc([m.area,/lograda/i.test(m.estado)?"¡Lograda"+(pD(m.logro)?" el "+dS(pD(m.logro)):"")+"!":m.estado,!/lograda/i.test(m.estado)&&pD(m.para)?"para el "+dS(pD(m.para)):""].filter(Boolean).join(" · "))}</span></span></div>`).join(""):'<p class="empty">Tu entrenador aún no te ha asignado metas.</p>'}<p class="hint" style="margin-top:8px">Las acuerdas con tu entrenador. Solo las ves tú.</p></section>`}
function vMiBien(d){const L=(d.bienHist||[]).filter(x=>x.idx!=null||x.horas!=null);if(!d.bienHist||L.length<2)return "";
  const W=300,H=110,P=14,n=L.length,X=i=>P+10+i*(W-2*P-20)/(n-1),Y=v=>12+(H-40)*(1-Math.max(0,Math.min(100,v))/100);
  const pts=L.map((x,i)=>x.idx!=null?X(i)+","+Y(x.idx):null).filter(Boolean);
  let g=`<line x1="${P}" x2="${W-P}" y1="${Y(60)}" y2="${Y(60)}" stroke="var(--muted)" stroke-dasharray="4 4" stroke-width="1"/>`+(pts.length>1?`<polyline points="${pts.join(" ")}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`:"");
  L.forEach((x,i)=>{if(x.idx!=null)g+=`<circle cx="${X(i)}" cy="${Y(x.idx)}" r="4.5" fill="${x.idx<60?"var(--danger)":"var(--accent)"}"/>`;g+=`<text x="${X(i)}" y="${H-6}" text-anchor="middle" style="font-size:10px;fill:var(--muted)">${esc(dS(pD(x.fecha)).replace(/ .*/,"")+"/"+((pD(x.fecha)||new Date()).getMonth()+1))}</text>`});
  const hs=L.map(x=>x.horas).filter(v=>v!=null),ph=hs.length?hs.reduce((a,b)=>a+b,0)/hs.length:null,u=L[L.length-1];
  const tip=ph!=null&&ph<8?"Estás durmiendo en promedio "+f1(ph)+" horas. A tu edad se recomiendan entre 8 y 10 horas: el descanso también es entrenamiento.":u.mol&&!/^ninguna/i.test(u.mol)?"Reportaste molestias la última semana. Cuéntale a tu entrenador cómo sigues.":u.idx!=null&&u.idx<60?"Tu última semana fue exigente. Descansa, hidrátate y come bien.":"¡Vas bien! Mantén tus rutinas de sueño, alimentación e hidratación.";
  return `<section class="sec"><div class="sec-h"><h3>Mi bienestar</h3><span class="hint">últimas ${L.length} semanas · solo tú lo ves</span></div>
   ${pts.length?`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Tu índice de bienestar por semana">${g}</svg><div class="legend"><span><i style="background:var(--accent)"></i>Índice de bienestar</span><span class="hint">línea punteada: 60</span></div>`:""}
   ${hs.length?`<div class="kpis" style="margin-top:8px"><div class="kpi"><b>${f1(ph)} h</b><span>Sueño promedio</span></div><div class="kpi"><b>${u.idx!=null?Math.round(u.idx):"–"}</b><span>Último índice</span></div><div class="kpi"><b>${u.animo!=null?f1(u.animo):"–"}</b><span>Último ánimo</span></div></div>`:""}
   <div class="mt-msg">${esc(tip)}</div></section>`}

/* ---------- v4.7 · Banner del perfil (3:1). Se recorta en el teléfono y se ve cuando el entrenador lo aprueba ---------- */
function vMiBanner(){const e=S.eq;if(!e||!e.yo)return "";const y=e.yo,ap=fotoDe(y.banner),pr=y.bannerProp&&fotoDe(y.bannerProp.foto);
  return `<section class="sec" id="mi-banner" style="scroll-margin-top:72px"><div class="sec-h"><h3>Portada</h3>${y.bannerProp?'<span class="chip w">Esperando aprobación</span>':y.banner?'<span class="chip ok">Aprobado</span>':""}</div>
   <p class="hint">Una foto horizontal que aparece detrás de tu foto en tu perfil. El entrenador la aprueba antes de que se vea.</p>
   ${y.bannerRech?`<div class="banner err">El entrenador no aprobó tu portada${y.bannerRech.motivo?": "+esc(y.bannerRech.motivo):"."}</div>`:""}
   ${pr?`<img class="bnr" src="${pr}" alt="Banner enviado">`:y.bannerProp?'<p class="hint">Cargando tu banner…</p>':""}${!y.bannerProp&&ap?`<img class="bnr" src="${ap}" alt="Tu banner">`:""}
   <input type="file" id="bnr-file" accept="image/*" hidden>
   <div class="fgrid"><button class="btn ${y.banner||y.bannerProp?"":"pri"}" data-a="bnr-subir" ${S.bnBusy?"disabled":""}>${S.bnBusy?"Enviando…":y.banner||y.bannerProp?"Cambiar portada":"Subir portada"}</button>${y.banner||y.bannerProp?`<button class="btn" data-a="bnr-quitar" ${S.bnBusy?"disabled":""}>Quitar</button>`:""}</div></section>`}
// Recortador 3:1: arrastrar para encuadrar y deslizar para acercar. Sale una imagen de 1200 × 400 (liviana).
function recortarBanner(file){return new Promise((res,rej)=>{
  if(!/^image\//.test(file.type||"image/"))return rej(new Error("tipo"));if(file.size>15e6)return rej(new Error("grande"));
  const url=URL.createObjectURL(file),img=new Image();img.onerror=()=>{URL.revokeObjectURL(url);rej(new Error("tipo"))};
  img.onload=()=>{const W=1200,H=400,base=Math.max(W/img.width,H/img.height);let z=1,ox=0,oy=0;
    const ov=document.createElement("div");ov.className="ovl";ov.innerHTML=`<div class="box" role="dialog" aria-label="Recortar banner"><h3>Encuadra tu banner</h3><p class="hint">Arrastra la foto para moverla y usa la barra para acercar.</p><canvas class="bnr-cv" width="${W}" height="${H}"></canvas><label class="f">Acercar<input type="range" min="1" max="3" step="0.01" value="1" class="bnr-z"></label><div class="fgrid"><button class="btn" data-x="no">Cancelar</button><button class="btn pri" data-x="si">Usar esta foto</button></div></div>`;
    document.body.appendChild(ov);const cv=ov.querySelector("canvas"),g=cv.getContext("2d");
    const lim=()=>{const s=base*z,w=img.width*s,h=img.height*s;ox=Math.min(0,Math.max(W-w,ox));oy=Math.min(0,Math.max(H-h,oy))};
    const pinta=()=>{lim();const s=base*z;g.fillStyle="#000";g.fillRect(0,0,W,H);g.drawImage(img,ox,oy,img.width*s,img.height*s)};
    {const s=base;ox=(W-img.width*s)/2;oy=(H-img.height*s)/2}pinta();
    let p0=null;cv.addEventListener("pointerdown",e=>{p0={x:e.clientX,y:e.clientY,ox,oy};cv.setPointerCapture(e.pointerId)});
    cv.addEventListener("pointermove",e=>{if(!p0)return;const k=W/cv.getBoundingClientRect().width;ox=p0.ox+(e.clientX-p0.x)*k;oy=p0.oy+(e.clientY-p0.y)*k;pinta()});
    cv.addEventListener("pointerup",()=>p0=null);cv.addEventListener("pointercancel",()=>p0=null);
    ov.querySelector(".bnr-z").addEventListener("input",e=>{const cx=W/2,cy=H/2,s0=base*z;z=+e.target.value;const s1=base*z;ox=cx-(cx-ox)*s1/s0;oy=cy-(cy-oy)*s1/s0;pinta()});
    ov.addEventListener("click",e=>{const b=e.target.closest("[data-x]");if(!b)return;const ok=b.dataset.x==="si";let d=null;
      if(ok){d=cv.toDataURL("image/jpeg",0.72);if(d.length>180000)d=cv.toDataURL("image/jpeg",0.6)}
      ov.remove();URL.revokeObjectURL(url);ok?res(d):rej(new Error("cancelado"))});
  };img.src=url})}
async function subirBanner(file){const ses=ses0();if(!ses)return;let d;
  try{d=await recortarBanner(file)}catch(x){if(x.message==="grande")__dlg({modo:"avisar",texto:"La foto es muy pesada (máximo 15 MB)."});else if(x.message==="tipo")__dlg({modo:"avisar",texto:"Ese archivo no es una foto."});return}
  S.bnBusy=true;render();
  try{const r=await llamar(ses,{op:"jugBanner",foto:d});S.fx[r.bannerProp.foto]=d;S.eq.yo.bannerProp=r.bannerProp;S.eq.yo.bannerRech=null;if(S.ses)LS.set("equipo",S.eq);__toast("¡Listo! El entrenador revisará tu banner.")}
  catch(x){__dlg({modo:"avisar",texto:x.code==="operacion_desconocida"?"El entrenador debe actualizar el servicio (puente v21).":x.code==="limite"?"Ya enviaste varios banners hoy. Intenta mañana.":"No se pudo enviar el banner."})}
  S.bnBusy=false;render()}
async function quitarBanner(){const ses=ses0();if(!ses||!await __dlg({texto:"¿Quitar tu banner?",ok:"Quitar",peligro:true}))return;S.bnBusy=true;render();
  try{await llamar(ses,{op:"jugBanner",quitar:true});S.eq.yo.banner=null;S.eq.yo.bannerProp=null;if(S.ses)LS.set("equipo",S.eq)}catch(x){__dlg({modo:"avisar",texto:"No se pudo quitar."})}S.bnBusy=false;render()}
document.addEventListener("change",ev=>{if(ev.target&&ev.target.id==="bnr-file"&&ev.target.files&&ev.target.files[0]){const f=ev.target.files[0];ev.target.value="";subirBanner(f)}});
function pD(s){const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(String(s||""));return m?new Date(+m[3],+m[2]-1,+m[1]):null}
function dL(d){return d?d.getDate()+" "+MES[d.getMonth()]+" "+d.getFullYear():""}
function dS(d){return d?d.getDate()+" "+MES[d.getMonth()]:""}
function n(v){if(v==null||v==="")return null;const x=Number(String(v).replace(",","."));return isFinite(x)?x:null}
function f1(x){return x==null?"–":(Math.round(x*10)/10).toLocaleString("es-CO",{maximumFractionDigits:2})}
function tV(v,u){if(v==null)return "–";if(u==="s"&&v>=60){const t=Math.round(v*10)/10,mi=Math.floor(t/60),se=Math.round((t-mi*60)*10)/10;return mi+":"+(se<10?"0":"")+se.toLocaleString("es-CO",{maximumFractionDigits:1})}return f1(v)}
function ini(s){const p=String(s||"").split(/\s+/).filter(Boolean);return ((p[0]||"?")[0]+((p[p.length>2?p.length-2:1]||"")[0]||"")).toUpperCase()}

/* Enlace del entrenador: trae la dirección del puente (no está en el código público) */
(function(){const m=/#p=([^&]+)/.exec(location.hash||"");if(!m)return;try{const o=JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(m[1])))));if(o&&o.url&&/^https:\/\/script\.google(usercontent)?\.com\/|^http:\/\/(localhost|127\.0\.0\.1)/.test(o.url))LS.set("url",o.url)}catch(e){}if(/[#&]ir=bienestar/.test(location.hash)){LS.set("abrirBien",1);LS.set("tab","prog")}history.replaceState(null,"",location.pathname)})();

const S={url:LS.get("url",""),ses:LS.get("ses",null),d:LS.get("datos",null),fotos:LS.get("fotos",null),err:null,busy:false,offline:false,stamp:LS.get("stamp",0),todos:false};

/* ===== v4.24 · Comunidad viva: «Hoy en Jaguares», pestañas, publicaciones con forma propia, porras y comentarios ===== */
S.cm={open:{},draft:{},busy:null,err:{},mas:{}};S.cvt="muro";S.cvPrimero=null;
var COM_CONTACTO = ['whatsapp', 'whatsap', 'wasap', 'watsap', 'wsp', 'wpp', 'insta', 'instagram', 'tiktok', 'tik tok', 'facebook', 'telegram', 'snapchat', 'discord', 'escribeme', 'escribeme al', 'mi numero', 'mi cel', 'mi celular', 'mi correo', 'mi email', 'arroba', 'punto com'];
function comNorm_(s) {
  s = String(s == null ? '' : s).toLowerCase();
  try { s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
  return s.replace(/[\u200b-\u200f\u00ad\u2060\ufeff]/g, '').replace(/[4@]/g, 'a').replace(/3/g, 'e').replace(/1/g, 'i').replace(/0/g, 'o').replace(/5|\$/g, 's').replace(/7/g, 't');
}
function comUnir_(arr) { // «p u t a» → «puta»: tres o más letras sueltas seguidas se unen
  var out = [], run = [];
  var vaciar = function () { if (run.length >= 3) out.push(run.join('')); else for (var k = 0; k < run.length; k++) out.push(run[k]); run = []; };
  for (var i = 0; i < arr.length; i++) { if (arr[i].length === 1) run.push(arr[i]); else { vaciar(); out.push(arr[i]); } }
  vaciar();
  return out;
}
function comPalabras_(texto) { // dos lecturas: separando por cualquier símbolo, y quitando los símbolos que quedan entre letras («p.u.t.a», «p-u-t-a»)
  var t = comNorm_(texto);
  return [comUnir_(t.replace(/[^a-z]+/g, ' ').trim().split(' ').filter(Boolean)),
          comUnir_(t.replace(/([a-z])[^a-z\s]+(?=[a-z])/g, '$1').replace(/[^a-z]+/g, ' ').trim().split(' ').filter(Boolean))];
}
function comColapsa_(w) { return w.replace(/([a-z])\1+/g, '$1'); }
function comIgual_(w, e) { // palabra completa (nunca subcadena); letras repetidas solo si la palabra escrita las repite («puuuuta»); plural simple
  if (w === e || (e.length >= 4 && (w === e + 's' || w === e + 'es'))) return true;
  var cw = comColapsa_(w);
  if (cw === w) return false;
  var ce = comColapsa_(e);
  return cw === ce || (ce.length >= 4 && (cw === ce + 's' || cw === ce + 'es'));
}
function comEntradas_(lista) {
  return lista.map(function (x) { return comNorm_(x).replace(/[^a-z]+/g, ' ').trim().split(' ').filter(Boolean); }).filter(function (e) { return e.length && e.join('').length >= 2; });
}
function comContiene_(tokens, entradas) { // frases de varias palabras: secuencia
  for (var i = 0; i < entradas.length; i++) {
    var e = entradas[i];
    for (var s = 0; s + e.length <= tokens.length; s++) {
      var ok = true;
      for (var k = 0; k < e.length; k++) if (!comIgual_(tokens[s + k], e[k])) { ok = false; break; }
      if (ok) return true;
    }
  }
  return false;
}
function comBloquea_(texto, entradas) { // true si el texto no se puede publicar (palabras, enlaces, correos, teléfonos, otras redes)
  var o = String(texto == null ? '' : texto), l = o.toLowerCase();
  try { l = l.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
  if (/https?:|www\.|:\/\/|[a-z0-9-]\.(?:com|co|net|org|edu|gov|info|biz|me|io|app|tv|ly|gl|gg|xyz|site|online|link)(?![a-z0-9])/.test(l)) return true;
  if (/[^\s@]+@[^\s@]+\.[a-z]{2,}/.test(l) || /(^|[^a-z0-9])@[a-z0-9_.]{2,}/.test(l)) return true;
  if (/(?:\d[\s.\-()+_]*){7,}/.test(o)) return true;
  var T = comPalabras_(o), C = comEntradas_(COM_CONTACTO);
  return comContiene_(T[0], entradas) || comContiene_(T[1], entradas) || comContiene_(T[0], C) || comContiene_(T[1], C);
}

const __CM_MAX=140,__CM_VER=6;
const __IC4={
  chat:'<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  cake:'<path d="M4 20h16M5 20v-6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6M12 13V9M12 9c-1-1-1-2 0-3 1 1 1 2 0 3zM5 16c2 1.5 4 1.5 7 0s5-1.5 7 0"/>',
  star:'<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8L3.6 9.6l5.8-.8z"/>',
  trofeo:'<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  pin:'<path d="M12 17v5M8 3h8l-1 6 3 4H6l3-4z"/>',
  escudo:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',
  arriba:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  votar:'<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
  cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
  mega:'<path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1zM16.5 9a4 4 0 0 1 0 6"/>'
};
const __i4=(k,c)=>'<svg class="'+(c||"ev-i")+'" viewBox="0 0 24 24" aria-hidden="true">'+__IC4[k]+'</svg>';
const MSG_CM={texto_no_permitido:"Tu comentario tiene palabras o datos que no se permiten. Reescríbelo.",espera:"Espera unos segundos antes de comentar otra vez.",limite_dia:"Llegaste al límite de hoy.",
  cerrados:"Los comentarios están cerrados por ahora.",texto_largo:"El comentario pasa de 140 caracteres.",publicacion_invalida:"Esa publicación ya no está disponible.",sin_permiso:"Tu cuenta no puede comentar por ahora.",
  inactivo:"Tu cuenta no puede comentar por ahora.",red:"Sin señal. Intenta de nuevo cuando tengas conexión.",operacion_desconocida:"El entrenador debe actualizar el servicio (puente v33).",vacio:"Escribe algo para comentar."};
const __fechaCM=ts=>{const d=new Date(ts);return d.getDate()+" "+MES[d.getMonth()]+" "+d.getFullYear()};
function __cmMsg(x){const c=x&&x.code;if(c==="silenciada")return "Tu cuenta no puede comentar hasta el "+__fechaCM(x.hasta||(S.eq&&S.eq.yo&&S.eq.yo.silencioHasta)||Date.now())+".";return MSG_CM[c]||"No se pudo enviar el comentario. Intenta de nuevo."}
const __tiempo=ts=>{const m=Math.floor((Date.now()-ts)/60000);return m<1?"ahora":m<60?"hace "+m+" min":m<1440?"hace "+Math.floor(m/60)+" h":"hace "+Math.floor(m/1440)+" d"};
function __pubDe(ev){const e=S.eq;let p=e&&e.muro.find(x=>x.id===ev);if(!p&&S.hist&&S.hist.d)p=(S.hist.d.items||[]).find(x=>x.id===ev);return p||null}
function __av(j,cls){const f=j&&fotoDe(j.foto);return `<span class="cv-av ${cls||""}">${f?`<img src="${f}" alt="">`:esc(ini(j?j.nombre:"?"))}</span>`}
function __cvTabs(act){
  return `<nav class="cv-tabs" aria-label="Comunidad">${[["muro","Muro"],["votos","Juegos"],["equipo","Equipo"]].map(([k,l])=>`<button data-a="cv-tab" data-v="${k}"${k===act?' aria-current="page"':""}>${l}</button>`).join("")}</nav>`}
function __cvVotosViejo(){
  return `<section class="cv-vacio" aria-labelledby="cvVT"><span class="cv-ico" aria-hidden="true">${__i4("trofeo")}</span><h3 id="cvVT">Votaciones y retos</h3><p>Muy pronto: jugador del mes, gol del mes y retos del equipo.</p></section>`}
/* Franja «Hoy en Jaguares»: solo lo que haya (partido de hoy o próximo, cumpleaños de hoy, anuncio fijado, encuesta o actividad abierta) */
function __hoyEn(e){
  const hoy=new Date();hoy.setHours(0,0,0,0);const d=S.d;
  const prox=((d&&(d.proximos||(d.proximo?[d.proximo]:[])))||[]).filter(x=>{const f=pD(x.fecha);return !f||f>=hoy}).sort((a,b)=>(pD(a.fecha)||0)-(pD(b.fecha)||0))[0];
  const filas=[];
  e.muro.filter(p=>p.tipo==="cumple"&&!p.pronto&&+(pD(p.fecha)||0)===+hoy).slice(0,2).forEach(p=>filas.push({ico:"cake",t:p.texto,b:"Felicítalo en su día",bt:"Felicitar",ev:p.id,abrir:1}));
  const fij=e.muro.find(p=>p.tipo==="anuncio"&&p.fijado&&!p.forma);if(fij)filas.push({ico:"pin",t:fij.texto,b:"Fijado por el entrenador",bt:"Leer",ev:fij.id});
  const ab=e.muro.find(p=>(p.enc&&!p.enc.cerrada&&p.enc.mio==null)||(p.act&&!p.act.cerrada&&p.act.mio==null));
  if(ab)filas.push({ico:ab.enc?"votar":"cal",t:ab.texto,b:ab.enc?"Encuesta abierta":"Actividad abierta",bt:ab.enc?"Votar":"Responder",ev:ab.id});
  __hoyFilas425(e,filas);const __pr=__pronHTML(e);if(!prox&&!filas.length&&!__pr)return "";
  let h="";
  if(prox){
    const f=pD(prox.fecha),dd=f?Math.round((f-hoy)/864e5):null,hm=/^(\d{1,2}):(\d{2})/.exec(String(prox.hora||""));let cifra,uni="";
    if(hm){let H=+hm[1];uni=H>=12?"p. m.":"a. m.";H=H%12||12;cifra=H+":"+hm[2]}else if(f){cifra=String(f.getDate());uni=MES[f.getMonth()]}else cifra="–";
    const cuando=dd===0?"Hoy":dd===1?"Mañana":dd!=null&&dd>1&&dd<7?"En "+dd+" días":f?DIA[f.getDay()]+" "+f.getDate()+" "+MES[f.getMonth()]:"";
    h+=`<section class="banda" style="--alto:150px" aria-labelledby="cvHT"><div class="banda-top"><h3 id="cvHT">Hoy en Jaguares</h3><span>${esc(cuando)}</span></div><div class="banda-cifra"><span class="cifra">${esc(cifra)}</span><span class="tit">${esc(uni)}</span></div><div class="banda-pie"><div><p class="banda-l1">vs ${esc(prox.rival)}</p><p class="banda-l2">${esc([prox.localia,prox.cancha,prox.comp].filter(Boolean).join(" · "))}</p></div></div></section><div class="banda-fil"></div>`;
  }else h+=`<div class="cv-sec"><h3>Hoy en Jaguares</h3></div>`;
  if(filas.length)h+=`<ul class="cv-hoy">${filas.map(f=>`<li class="cv-hoy-f"><span class="cv-ico" aria-hidden="true">${__i4(f.ico)}</span><span class="cv-hoy-t"><b>${esc(f.t)}</b><small>${esc(f.b)}</small></span><button class="btn sm" data-a="${f.a||"cv-ir"}" data-ev="${esc(f.ev||"")}"${f.abrir?' data-abrir="1"':""}>${f.bt}</button></li>`).join("")}</ul>`;
  return `<section aria-label="Hoy en Jaguares" class="cv-hoy-s">${h}${__pr}</section>`;
}
function __cmItem424(c,e,porId){
  const j=porId[c.a],dt=c.a==="DT",f=dt?fotoDe(e.dt&&e.dt.foto):j&&fotoDe(j.foto),av=`<span class="cv-av">${f?`<img src="${f}" alt="">`:esc(ini(c.n.replace(/^Profe\s*/,"")||"P"))}</span>`;
  const ac=c.mio?`<button class="cm-lk" data-a="cm-bor" data-com="${esc(c.id)}">Borrar</button>`:c.rp?`<span class="cm-ts" style="align-self:center">Reportado</span>`:`<button class="cm-lk" data-a="cm-rep" data-com="${esc(c.id)}" aria-label="Reportar el comentario de ${esc(c.n)}">Reportar</button>`;
  return `<li class="cm-i" data-com="${esc(c.id)}">${av}<div class="cm-c"><p class="cm-h"><b>${esc(c.n)}</b><span class="cm-ts">${__tiempo(c.ts)}</span></p><p class="cm-x">${esc(c.t)}</p><div class="cm-ac">${ac}</div></div></li>`}
function cmBloque424(p,e,porId){
  const id=p.id,n=p.ncom||0,abierto=!!S.cm.open[id],cerr=!e.comAbiertos,sil=e.yo&&e.yo.silencioHasta>Date.now()?e.yo.silencioHasta:0;
  if(!n&&cerr)return "";
  const tg=`<button class="cm-tg" data-a="cm-ver" data-ev="${esc(id)}" aria-expanded="${abierto}" aria-controls="cm-${esc(id)}">${__i4("chat","")}<span>${n?n+(n===1?" comentario":" comentarios"):"Comentar"}</span><span class="chev" aria-hidden="true">${__i4("chev","")}</span></button>`;
  if(!abierto)return tg;
  const L=p.coms||[],mas=S.cm.mas[id],vis=mas?L:L.slice(-__CM_VER),dr=S.cm.draft[id]||"",busy=S.cm.busy===id,err=S.cm.err[id]||"";
  let h=`<div class="cm-panel" id="cm-${esc(id)}">`;
  if(L.length>vis.length)h+=`<button class="cm-mas" data-a="cm-mas" data-ev="${esc(id)}">Ver los ${L.length-vis.length} anteriores</button>`;
  h+=vis.length?`<ul class="cm-l">${vis.map(c=>__cmItem(c,e,porId)).join("")}</ul>`:`<p class="hint" style="margin:0">Aún no hay comentarios. ¡Anímate con una porra!</p>`;
  if(cerr)h+=`<p class="cm-aviso" role="status">Los comentarios están cerrados por ahora.</p>`;
  else if(sil)h+=`<p class="cm-aviso" role="status">Tu cuenta no puede comentar hasta el ${__fechaCM(sil)}.</p>`;
  else h+=`<div class="cm-por" role="group" aria-label="Porras rápidas">${(e.porras||[]).map((t,i)=>`<button class="cm-chip" data-a="cm-porra" data-ev="${esc(id)}" data-i="${i}" ${busy?"disabled":""}>${esc(t)}</button>`).join("")}</div>
    <div class="cm-f"><label class="solo-sr" for="cmt-${esc(id)}">Escribe un comentario</label><textarea id="cmt-${esc(id)}" class="cm-t" data-ev="${esc(id)}" rows="2" maxlength="${__CM_MAX}" placeholder="Escribe un comentario…" aria-describedby="cmn-${esc(id)} cme-${esc(id)}">${esc(dr)}</textarea>
    <div class="cm-fp"><span class="cm-n" id="cmn-${esc(id)}">${dr.length}/${__CM_MAX}</span><button class="btn pri cm-env" id="cmb-${esc(id)}" data-a="cm-enviar" data-ev="${esc(id)}" ${busy||!dr.trim()?"disabled":""}>${busy?"Enviando…":"Enviar"}</button></div>
    <p class="cm-err" id="cme-${esc(id)}" role="alert">${esc(err)}</p></div>`;
  if(cerr||sil)h+=`<p class="cm-err" role="alert">${esc(err)}</p>`;
  return tg+h+`</div>`;
}
const __RXH=(p,e)=>{const c=e.reac[p.id]||{},mia=e.mias[p.id];return `<div class="rx">${RX.map(([k,i])=>`<button data-a="rx" data-ev="${esc(p.id)}" data-t="${k}" class="${mia===k?"on":""}" aria-label="${k}">${i}${c[k]?`<b>${c[k]}</b>`:""}</button>`).join("")}</div>`};
function postHTML(p,porId,e){
  const j=porId[p.jug&&p.jug[0]],T=p.tipo,ft=esc(dL(pD(p.fecha)));let m,top="",cuerpo="",capa=true;
  if(T==="vivo"&&p.vivo)return __vivoHTML(p,porId,e);
  if(T==="votacion"||T==="pronostico"){const vi=T==="votacion"&&p.vot?(p.vot.tipo==="gol"?"Gol del mes":"Jugador del mes"):"Pronóstico";
    cuerpo=`<div class="cv-fila-in">${j?__av(j,"lg"):""}<div class="cv-fb"><span class="cv-chip amb">${__i4("trofeo","")}${vi}</span><p class="cv-tit">${esc(p.texto)}</p><p class="cv-et">${ft}</p></div></div>`}
  else if(p.forma||T==="anuncio"){capa=false;
    top=`<div class="banda cv-bs"><div class="banda-top"><h3>${p.forma==="encuesta"?"Encuesta del entrenador":p.forma==="actividad"?"Actividad del entrenador":"Anuncio del entrenador"}</h3><span>${ft}</span></div></div>`;
    cuerpo=`<div class="cv-an">${p.forma?"":__buho()}${p.fijado?`<p class="cv-fij">${__i4("pin","")}Fijado por el entrenador</p>`:""}<p class="cv-txt">${esc(p.texto)}</p>${p.foto?(fotoDe(p.foto)?`<img class="pf" src="${fotoDe(p.foto)}" alt="Foto del anuncio">`:'<p class="hint">Cargando foto…</p>'):""}${p.forma?`<div class="cv-acc">${formaHTML(p)}</div>`:""}</div>`}
  else if(T==="victoria"&&(m=/(\d+)-(\d+) a (.+?)!(.*)$/.exec(p.texto))){capa=false;
    top=`<section class="banda cv-bg" style="--alto:140px" aria-label="Victoria: Jaguares ${m[1]}, ${esc(m[3])} ${m[2]}"><div class="banda-top"><h3>Victoria</h3><span>${ft}</span></div><div class="banda-cifra"><span class="cifra" aria-hidden="true">${m[1]} - ${m[2]}</span></div><div class="banda-pie"><div><p class="banda-l1">vs ${esc(m[3])}</p><p class="banda-l2">¡Ganamos!${esc(m[4])}</p></div></div></section><div class="banda-fil cv-fil"></div>`}
  else if((T==="resultado"||T==="victoria")&&(m=/(\d+)-(\d+)/.exec(p.texto)))
    cuerpo=`<div class="cv-res"><span class="cv-num" role="img" aria-label="Jaguares ${m[1]}, rival ${m[2]}">${m[1]} - ${m[2]}</span><div class="cv-fb"><p class="cv-et">Resultado final · ${ft}</p><p class="cv-tit">${esc(p.texto)}</p></div></div>`;
  else if(T==="mvp"||T==="hattrick"||T==="gol"){
    const nom=j?j.nombre:p.autor||"",et=T==="mvp"?"MVP del partido":T==="hattrick"?"Hat-trick":"Gol",rv=(/ vs (.+)$/.exec(p.texto)||[])[1]||"",goles=T==="hattrick"?(/marcó (\d+) goles/.exec(p.texto)||[])[1]||"3":"";
    if(S.cvPrimero===p.id){capa=false;
      top=`<section class="cv-logro" aria-label="${et}: ${esc(nom)}"><p class="lg-et">${et}</p>${goles?`<p class="lg-n">${goles}<small>goles</small></p>`:""}<div class="cv-lg-q">${j?__av(j,"lg"):""}<p class="cv-lg-nom">${esc(nom)}</p></div>${rv?`<span class="cv-lgc">${__ic("balon","")}vs ${esc(rv)}</span>`:""}</section>`}
    else cuerpo=`<div class="cv-fila-in">${j?__av(j,"lg"):""}<div class="cv-fb"><span class="cv-chip amb">${__i4("star","")}${et}</span><p class="cv-tit">${esc(p.texto)}</p><p class="cv-et">${ft}</p></div></div>`}
  else if(T==="cumple"&&!p.pronto){capa=false; // v4.26.5 · tarjeta de cumpleaños como la del MVP, en verde lima con confeti
    const nom=j?j.nombre:(/cumpleaños, (.+?)!/.exec(p.texto)||[])[1]||"";
    top=`<section class="cv-logro cv-cumple" aria-label="Cumpleaños de ${esc(nom)}"><p class="lg-et">🎂 Cumpleaños · ${ft}</p><div class="cv-lg-q">${j?__av(j,"lg"):""}<p class="cv-lg-nom">¡Feliz cumpleaños, ${esc(nom)}!</p></div><span class="cv-lgc">🎉 Felicítalo en su día</span></section>`}
  else if(T==="cumple")
    cuerpo=`<div class="cv-fila-in">${j?__av(j,"lg"):""}<div class="cv-fb"><p class="cv-et">${p.pronto?"Próximo cumpleaños":"Cumpleaños"}</p><p class="cv-tit">${esc(p.texto)}</p>${p.pronto?"":`<p class="cv-et">${ft}</p>`}</div><span class="cv-ico" aria-hidden="true">${__i4("cake")}</span></div>`;
  else if(T==="debut"||T==="valla"||T==="promocion"||T==="asis"||T==="test"){
    const cls=T==="valla"||T==="promocion"?"ok":"b",ic=T==="valla"?"escudo":T==="promocion"?"arriba":"star",et=T==="valla"?"Valla invicta":T==="promocion"?"Ascenso":T==="debut"?"Debut":T==="asis"?"Asistencia":"Mejora";
    cuerpo=`<div class="cv-fila-in">${j?__av(j,"lg"):""}<div class="cv-fb"><span class="chip ${cls} cv-chip">${__i4(ic,"")}${et}</span><p class="cv-tit">${esc(p.texto)}</p><p class="cv-et">${ft}</p></div></div>`}
  else if(T==="post")
    cuerpo=`<div class="cv-quien">${__av(j,"lg")}<div class="cv-fb"><p class="cv-tit">${esc(p.autor||"")}</p><p class="cv-et">${ft}</p></div></div>${p.texto?`<p class="txtp">${esc(p.texto)}</p>`:""}${p.foto?(fotoDe(p.foto)?`<img class="pf" src="${fotoDe(p.foto)}" alt="Foto de la publicación">`:'<p class="hint">Cargando foto…</p>'):""}`;
  else cuerpo=`<div class="cv-fila-in"><div class="cv-fb"><p class="cv-tit">${esc(p.texto)}</p><p class="cv-et">${ft}</p></div></div>`;
  return `<article class="post cv cv-${esc(T)}${capa?" capa":""}" id="pub-${esc(p.id)}">${top}${cuerpo}<div class="cv-pie">${__RXH(p,e)}${cmBloque(p,e,porId)}</div></article>`;
}
const __LOGROS={mvp:1,hattrick:1,gol:1};
function vMuro(){return __vMuroBase()+__tvOvl()} // v4.26: la trivia se juega en una capa encima
function __vMuroBase(){
  const e=S.eq;if(e)__c6Foco();
  if(!e)return `<h2 class="cv-t">Comunidad</h2>`+__cvTabs("muro")+vMuroViejo();
  const porId={};e.jugadores.forEach(j=>porId[j.id]=j);
  if(S.hist)return vMuroHist(porId);
  if(S.cvt==="votos")return `<h2 class="cv-t">Comunidad</h2>`+__cvTabs("votos")+__cvVotos();
  const l1=e.muro.find(p=>__LOGROS[p.tipo]);S.cvPrimero=l1?l1.id:null;
  const pie=e.histN?`<button class="btn" data-a="hist" style="width:100%;margin-top:4px">Ver publicaciones anteriores (${e.histN})</button>`:"";
  let h=`<h2 class="cv-t">Comunidad</h2>`+__cvTabs("muro")+__paraTi(e)+__hoyEn(e)+vCompositor();
  if(!e.muro.length)return h+`<section class="sec"><p class="empty">No hay publicaciones recientes. Aquí aparecerán los logros del equipo.</p></section>`+pie;
  const L=__c6Filtro(e.muro); // v4.26: filtros Todo · Partidos · Cumpleaños · Publicaciones
  return h+__c6FilHTML()+(L.length?L.map(p=>postHTML(p,porId,e)).join(""):`<p class="vt-vacio">No hay publicaciones de este tipo en el muro.</p>`)+pie;
}
function vMuroHist(porId){const l1=((S.hist&&S.hist.d&&S.hist.d.items)||[]).find(p=>__LOGROS[p.tipo]);S.cvPrimero=l1?l1.id:null;return vMuroHistViejo(porId)}
function vEquipo(){return `<h2 class="cv-t">Comunidad</h2>`+__cvTabs("equipo")+vEquipoViejo()}
/* --- comentarios: norma, filtro previo, envío, reporte y borrado --- */
async function __cmNorma(){
  const e=S.eq;if(LS.get("normaCom",0)||(e.yo&&e.yo.normaCom))return true;
  const si=await __dlg({titulo:"Los comentarios son solo del jugador",texto:"Esta cuenta la comparten el jugador y su familia, así que los comentarios los escribe solo el jugador y salen firmados con su nombre.\n\nEscribe con respeto: sin groserías, sin enlaces ni datos de contacto. Si algo no te parece bien, puedes reportarlo y el profe lo revisa.",ok:"Entendido",cancelar:"Ahora no"});
  if(!si)return false;
  const ts=Date.now();LS.set("normaCom",ts);if(e.yo)e.yo.normaCom=ts;
  llamar(ses0(),{op:"jugNorma"}).catch(()=>{});return true}
async function __cmEnviar424(ev,texto,porra){
  const e=S.eq,ses=ses0();if(!e||!ses||S.cm.busy)return;
  texto=String(texto||"").replace(/\s+/g," ").trim();if(!texto)return;
  const err=m=>{S.cm.err[ev]=m;render();const t=document.getElementById("cmt-"+ev);if(t&&!porra)t.focus()};
  if(!navigator.onLine)return err(MSG_CM.red);
  if(!await __cmNorma())return;
  if(texto.length>__CM_MAX)return err(MSG_CM.texto_largo);
  if(!porra&&comBloquea_(texto,comEntradas_(e.palabras||[])))return err(MSG_CM.texto_no_permitido);
  S.cm.busy=ev;S.cm.err[ev]="";render();
  try{const r=await llamar(ses,{op:"jugComentar",ev,texto});const p=__pubDe(ev);
    if(p){p.coms=(p.coms||[]).concat(r.com).slice(-50);p.ncom=r.ncom}
    if(!porra)S.cm.draft[ev]="";if(S.ses)LS.set("equipo",e)}
  catch(x){if(x.code==="cerrados")e.comAbiertos=false;if(x.code==="silenciada"&&e.yo)e.yo.silencioHasta=x.hasta||e.yo.silencioHasta;S.cm.err[ev]=__cmMsg(x)}
  S.cm.busy=null;render();
}
async function __cmReportar(id){
  const ses=ses0();if(!ses)return;
  const si=await __dlg({texto:"¿Reportar este comentario? El profe lo revisará. Seguirá visible hasta entonces.",ok:"Reportar",cancelar:"Cancelar"});if(!si)return;
  try{await llamar(ses,{op:"jugReportar",com:id});(S.eq.muro.concat((S.hist&&S.hist.d&&S.hist.d.items)||[])).forEach(p=>(p.coms||[]).forEach(c=>{if(c.id===id)c.rp=true}));if(S.ses)LS.set("equipo",S.eq);render();__toast("Gracias. El profe lo revisará.")}
  catch(x){__dlg({modo:"avisar",texto:x.code==="ya_reportado"?"Ya reportaste este comentario.":x.code==="no_existe"?"Ese comentario ya no está.":x.code==="red"?MSG_CM.red:"No se pudo reportar. Intenta de nuevo."})}
}
async function __cmBorrar(id){
  const ses=ses0();if(!ses)return;
  const si=await __dlg({texto:"¿Borrar tu comentario?",ok:"Borrar",peligro:true});if(!si)return;
  try{await llamar(ses,{op:"jugComBorrar",com:id});(S.eq.muro.concat((S.hist&&S.hist.d&&S.hist.d.items)||[])).forEach(p=>{if((p.coms||[]).some(c=>c.id===id)){p.coms=p.coms.filter(c=>c.id!==id);p.ncom=Math.max(0,(p.ncom||1)-1)}});if(S.ses)LS.set("equipo",S.eq);render()}
  catch(x){__dlg({modo:"avisar",texto:x.code==="red"?MSG_CM.red:"No se pudo borrar. Intenta de nuevo."})}
}

/* ===== v4.25 · Votaciones y retos, pronóstico del marcador, hilo del partido en vivo e insignias (puente v34) ===== */
S.vt={busy:null,err:{},ok:{}};S.pr={draft:{},busy:false,err:"",ok:""};
const __MESL=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],__MESC=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const __mesL=m=>__MESL[+String(m).slice(5,7)-1]||String(m);
const __mesC=m=>(__MESC[+String(m).slice(5,7)-1]||"")+" "+String(m).slice(0,4);
const __insTxt=i=>(i.tipo==="gol"?"Gol del mes":"Jugador del mes")+" · "+__mesC(i.mes);
const __hora=ms=>new Date(ms).toLocaleTimeString("es-CO",{hour:"numeric",minute:"2-digit"});
const MSG_VT={autovoto:"No puedes votar por ti mismo.",cerrada:"La votación ya cerró.",votacion_invalida:"Esa votación ya no está disponible.",opcion_invalida:"Esa opción ya no está disponible.",sin_permiso:"Tu cuenta no puede votar por ahora.",inactivo:"Tu cuenta no puede votar por ahora.",limite:"Hiciste muchos cambios seguidos. Espera un momento.",red:"Sin señal. Intenta de nuevo cuando tengas conexión.",operacion_desconocida:"El entrenador debe actualizar el servicio (puente v34).",otro:"No se pudo guardar tu voto. Intenta de nuevo."};
const MSG_PR={pronostico_cerrado:"El partido ya empezó: tu pronóstico quedó como estaba.",pronostico_no_abierto:"Todavía no se abre este pronóstico.",partido_invalido:"Ese partido ya no está disponible.",marcador_invalido:"Revisa el marcador.",sin_permiso:"Tu cuenta no puede pronosticar por ahora.",inactivo:"Tu cuenta no puede pronosticar por ahora.",limite:"Hiciste muchos cambios seguidos. Espera un momento.",red:"Sin señal. Intenta de nuevo cuando tengas conexión.",operacion_desconocida:"El entrenador debe actualizar el servicio (puente v34).",otro:"No se pudo guardar tu pronóstico. Intenta de nuevo."};
function __insHTML(L){return L&&L.length?`<div class="ins-l" role="list" aria-label="Insignias">${L.map(i=>`<span class="cv-chip amb" role="listitem">${__i4("trofeo","")}${esc(__insTxt(i))}</span>`).join("")}</div>`:""}
/* Mi progreso › Logros: insignias propias (vienen con el equipo; si aún no está cargado se pide una vez) */
function __logros425(){
  const e=S.eq;if(!e&&!S.eqBusy&&!S.__eqPedido&&ses0()){S.__eqPedido=1;setTimeout(cargarEquipo,0)}
  const L=e&&e.yo&&e.yo.insignias;if(!L||!L.length)return "";
  return `<section class="sec" aria-labelledby="lgT"><div class="sec-h"><h3 id="lgT">Logros</h3></div>${__insHTML(L)}<p class="hint" style="margin:8px 0 0">Las ganaste con el voto de tus compañeros.</p></section>`}
function __fotosVot(e){const v=e.votos;if(!v)return [];return [].concat(...v.abiertas.map(x=>x.nominados.map(n=>n.foto)),v.cerradas.map(c=>c.ganador&&c.ganador.foto))}
const __fcorta=f=>{const d=pD(f);return d?d.getDate()+" "+MES[d.getMonth()]:""};
function __cuenta(ms){const d=ms-Date.now();if(d<=0)return "Cerrando…";const m=Math.floor(d/60000),dd=Math.floor(m/1440),h=Math.floor(m%1440/60),mi=m%60;return "Cierra en "+(dd>0?dd+" d "+h+" h":h>0?h+" h "+mi+" min":mi>0?mi+" min":"menos de 1 min")}
/* --- Votaciones y retos --- */
function __nominado(v,n){
  const sel=v.mio===n.id,tit=v.tipo==="gol"?"Gol de "+n.nombre:n.nombre,id=esc(v.id+"-"+n.id);
  const sub=v.tipo==="gol"?`vs ${n.rival} · min ${n.minuto} · ${__fcorta(n.fecha)}`:"";
  const btn=n.propio?`<button class="btn sm" disabled aria-describedby="vn-${id}">Votar</button>`
    :sel?`<button class="btn sm pri vt-on" data-a="vt-votar" data-vot="${esc(v.id)}" data-op="${esc(n.id)}" aria-pressed="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Tu voto</button>`
    :`<button class="btn sm" data-a="vt-votar" data-vot="${esc(v.id)}" data-op="${esc(n.id)}" aria-pressed="false" aria-label="Votar por ${esc(tit)}" ${S.vt.busy===v.id?"disabled":""}>Votar</button>`;
  return `<li class="vt-f">${__av({foto:n.foto,nombre:n.nombre},"lg")}<div class="cv-fb"><p class="cv-tit">${esc(tit)}</p>${sub?`<p class="cv-et">${esc(sub)}</p>`:""}${n.propio?`<p class="cv-et" id="vn-${id}">${v.tipo==="gol"?"No puedes votar por tu propio gol":"No puedes votar por ti"}</p>`:""}</div>${btn}</li>`}
function __votoAbierta(v){
  const tit=(v.tipo==="gol"?"Gol del mes":"Jugador del mes")+" · "+__mesL(v.mes),err=S.vt.err[v.id]||"",ok=S.vt.ok[v.id]||"";
  return `<section class="vt-s" aria-labelledby="vt-${esc(v.id)}"><div class="vt-h"><h3 id="vt-${esc(v.id)}">${esc(tit)}</h3><p class="vt-c">${esc(__cuenta(v.cierre))}</p></div><ul class="vt-l">${v.nominados.map(n=>__nominado(v,n)).join("")}</ul><p class="cm-err" role="alert">${esc(err)}</p><p class="vt-ok" role="status">${esc(ok)}</p></section>`}
function __votoCerrada(c){
  const g=c.ganador;if(!g)return "";
  const tit=c.tipo==="gol"?"Gol del mes":"Jugador del mes",cuerpo=c.tipo==="gol"?`${g.nombre} vs ${g.rival}, min ${g.minuto}`:g.nombre;
  return `<li class="vt-f">${__av({foto:g.foto,nombre:g.nombre},"lg")}<div class="cv-fb"><p class="cv-et">${esc(tit)} · ${esc(__mesL(c.mes))}</p><p class="cv-tit">${esc(cuerpo)}</p></div><span class="cv-ico" aria-hidden="true">${__i4("trofeo")}</span></li>`}
function __cvVotos(){
  const e=S.eq,V=e.votos||{abiertas:[],cerradas:[]},cer=V.cerradas.filter(c=>c.ganador);
  let h=__tvHTML()+`<div class="cv-sec" style="margin-top:var(--mb-panel)"><h3>Votaciones abiertas</h3></div>`; // v4.26: la trivia va primero en «Juegos»
  h+=V.abiertas.length?V.abiertas.map(__votoAbierta).join(""):`<p class="vt-vacio">No hay votaciones abiertas. Cuando el profe abra una, te avisamos.</p>`;
  if(cer.length)h+=`<div class="cv-sec"><h3>Votaciones cerradas</h3></div><ul class="vt-l" style="margin-top:var(--mb-panel)">${cer.map(__votoCerrada).join("")}</ul>`;
  h+=`<div class="cv-sec" style="margin-top:var(--mb-panel)"><h3>Retos</h3></div><section class="cv-vacio" aria-labelledby="cvRT"><span class="cv-ico" aria-hidden="true">${__i4("escudo")}</span><h3 id="cvRT" class="cv-tit">Muy pronto: retos del equipo</h3><p>El profe publicará retos para cumplir entre todos.</p></section>`;
  return h}
async function __votar(vid,op){
  const e=S.eq,ses=ses0();if(!e||!ses||S.vt.busy)return;
  const v=((e.votos||{}).abiertas||[]).find(x=>x.id===vid);if(!v||v.mio===op)return;
  if(!navigator.onLine){S.vt.err[vid]=MSG_VT.red;S.vt.ok[vid]="";render();return}
  const prev=v.mio;v.mio=op;S.vt.busy=vid;S.vt.err[vid]="";S.vt.ok[vid]="";render();
  try{await llamar(ses,{op:"jugVotar",vot:vid,opcion:op});S.vt.ok[vid]="Voto guardado. Puedes cambiarlo hasta que cierre.";if(S.ses)LS.set("equipo",e)}
  catch(x){v.mio=prev;S.vt.err[vid]=MSG_VT[x.code]||MSG_VT.otro;if(x.code==="cerrada"||x.code==="votacion_invalida"){S.eqBusy=false;setTimeout(cargarEquipo,0)}}
  S.vt.busy=null;render()}
/* --- Pronóstico del marcador --- */
function __pronCierre(a){if(!a.cierra||!a.hora)return "cuando empiece el partido";const d=new Date(a.cierra),h0=new Date();h0.setHours(0,0,0,0);const dd=Math.round((new Date(a.cierra).setHours(0,0,0,0)-h0)/864e5);return (dd<=0?"hoy":dd===1?"mañana":DIA[d.getDay()]+" "+d.getDate())+" a las "+__hora(a.cierra)}
function __pronPaso(k,lado,v,nom){return `<span class="pr-st"><button class="pr-b" data-a="pr-paso" data-k="${esc(k)}" data-l="${lado}" data-d="-1" aria-label="Menos goles de ${esc(nom)}" ${v<=0?"disabled":""}>–</button><output class="pr-v" aria-live="polite" aria-label="Goles de ${esc(nom)}">${v}</output><button class="pr-b" data-a="pr-paso" data-k="${esc(k)}" data-l="${lado}" data-d="1" aria-label="Más goles de ${esc(nom)}" ${v>=30?"disabled":""}>+</button></span>`}
function __pronHTML(e){
  const P=e.pron;if(!P||(!P.actual&&!P.ultimo&&!P.jugados))return "";
  const a=P.actual,u=P.ultimo,pts=n=>n+(n===1?" punto":" puntos");let h="";
  if(a){
    const riv=a.rival||"Rival",dr=S.pr.draft[a.k]||(a.mio?{n:a.mio.nos,e:a.mio.ellos}:{n:0,e:0}),cambio=!a.mio||dr.n!==a.mio.nos||dr.e!==a.mio.ellos;
    if(a.estado==="abierto"){
      h+=`<div class="pr-f" role="group" aria-label="Pronostica el partido contra ${esc(riv)}"><p class="pr-t">Pronostica el partido</p><p class="pr-m">Jaguares vs ${esc(riv)} · cierra ${esc(__pronCierre(a))}</p>
        <div class="pr-sel"><div class="pr-eq"><span>Jaguares</span>${__pronPaso(a.k,"n",dr.n,"Jaguares")}</div><span class="pr-sep" aria-hidden="true">·</span><div class="pr-eq"><span>${esc(riv)}</span>${__pronPaso(a.k,"e",dr.e,riv)}</div></div>
        <div class="pr-pie"><p class="pr-m" role="status">${S.pr.err?`<span class="cm-err">${esc(S.pr.err)}</span>`:S.pr.ok?esc(S.pr.ok):a.mio?`Guardado: Jaguares ${a.mio.nos} - ${a.mio.ellos} ${esc(riv)}. Puedes cambiarlo hasta que empiece.`:"Elige el marcador y guárdalo."}</p><button class="btn pri" data-a="pr-guardar" ${S.pr.busy||!cambio?"disabled":""}>${S.pr.busy?"Guardando…":a.mio&&!cambio?"Guardado":"Guardar"}</button></div></div>`}
    else h+=`<div class="pr-f"><p class="pr-t">${a.estado==="curso"?"Partido en juego":"Pronóstico cerrado"}</p><p class="pr-m">Jaguares vs ${esc(riv)}</p><p class="pr-res">${a.mio?`<span>Tu pronóstico</span><b>${a.mio.nos} - ${a.mio.ellos}</b>`:`<span>No pronosticaste este partido.</span>`}</p></div>`}
  if(u)h+=`<div class="pr-f"><p class="pr-t">Terminó: Jaguares ${u.gf} - ${u.gc} ${esc(u.rival||"")}</p>${u.mio?`<p class="pr-res"><span>Tu pronóstico</span><b>${u.mio.nos} - ${u.mio.ellos}</b></p><p class="pr-m">${u.puntos===3?"¡Marcador exacto! ":u.puntos===1?"Acertaste el resultado. ":"No acertaste esta vez. "}Ganaste <b>${pts(u.puntos)}</b> en este partido.</p>`:`<p class="pr-m">No pronosticaste este partido.</p>`}</div>`;
  if(P.jugados||u)h+=`<div class="pr-f"><p class="pr-tot">Tus puntos de la temporada: <b>${P.puntos}</b></p></div>`;
  return `<section class="pr" aria-label="Pronóstico del partido">${h}</section>`}
async function __pronGuardar(){
  const e=S.eq,ses=ses0(),a=e&&e.pron&&e.pron.actual;if(!a||!ses||S.pr.busy)return;
  const dr=S.pr.draft[a.k]||(a.mio?{n:a.mio.nos,e:a.mio.ellos}:{n:0,e:0});
  if(!navigator.onLine){S.pr.err=MSG_PR.red;S.pr.ok="";render();return}
  S.pr.busy=true;S.pr.err="";S.pr.ok="";render();
  try{const r=await llamar(ses,{op:"jugPronosticar",partido:a.k,nos:dr.n,ellos:dr.e});a.mio=r.mio;delete S.pr.draft[a.k];S.pr.ok="Pronóstico guardado. Puedes cambiarlo hasta que empiece el partido.";if(S.ses)LS.set("equipo",e)}
  catch(x){S.pr.err=MSG_PR[x.code]||MSG_PR.otro;if(x.code==="pronostico_cerrado"||x.code==="partido_invalido"){S.eqBusy=false;setTimeout(cargarEquipo,0)}}
  S.pr.busy=false;render()}
/* --- Hilo del partido en vivo --- */
function __vivoEst(v){
  const r=v.reloj||{},h=(Number(v.dur)||80)/2,now=Date.now();
  if(r.fin2)return {chip:v.estado||"Final",dot:false,min:"",t:""};
  if(!v.enVivo)return {chip:"Terminado",dot:false,min:"",t:""};
  if(r.inicio2){const m=Math.floor((now-r.inicio2)/60000);return {chip:"En vivo",dot:true,min:(h+Math.min(m,h)+1)+"'",t:"2.º tiempo"}}
  if(r.fin1)return {chip:"Entretiempo",dot:false,min:"",t:""};
  const m=Math.floor((now-r.inicio1)/60000);return {chip:"En vivo",dot:true,min:(Math.min(m,h)+1)+"'",t:"1.er tiempo"}}
function __vivoHTML(p,porId,e){
  const v=p.vivo,st=__vivoEst(v),rv=esc(v.rival||"Rival");
  const aria=`Jaguares ${v.gf}, ${v.rival} ${v.gc}${st.min?", minuto "+parseInt(st.min):""}, ${st.t||st.chip}`;
  const EVL=v.eventos||[],abreEv=S.c6.mv[p.id]||EVL.length<=3,dig=Math.max(String(v.gf).length,String(v.gc).length); // v4.26: jugada a jugada plegable (3 últimas a la vista)
  const ev=(abreEv?EVL:EVL.slice(0,3)).map(x=>`<li class="mv-e ${esc(x.k)}"><span>${x.minuto?`<b class="mv-m">${esc(x.minuto)}'</b>`:`<span class="mv-h">${esc(__hora(x.ts))}</span>`}</span><span class="mv-x">${x.k==="gol"||x.k==="gol_rival"?__ic("balon",""):""}${esc(x.txt)}</span></li>`).join("");
  let cm=cmBloque(p,Object.assign({},e,{comAbiertos:e.comAbiertos&&!v.comCerrados}),porId);
  if(v.comCerrados)cm=cm.split("Los comentarios están cerrados por ahora.").join("Este hilo ya se cerró a comentarios.");
  return `<article class="post cv cv-vivo" id="pub-${esc(p.id)}"><section class="banda mv" role="group" aria-label="${esc(aria)}"><div class="mv-top"><span class="enlive">${st.dot?'<i class="livedot" aria-hidden="true"></i>':""}${esc(st.chip)}</span>${st.min?`<span class="mv-min" aria-hidden="true">${esc(st.min)}</span>`:""}${st.t?`<span class="mv-t">${esc(st.t)}</span>`:""}</div><div class="mv-g${dig>1?" d"+Math.min(dig,3):""}" aria-hidden="true"><span>${v.gf}</span><i></i><span>${v.gc}</span></div><div class="mv-n" aria-hidden="true"><span>Jaguares</span><span></span><span>${rv}</span></div></section><div class="banda-fil cv-fil"></div>
    <div class="cv-pie">${ev?`<ul class="mv-ev" aria-label="Minuto a minuto">${ev}</ul>`:""}${EVL.length>3?`<button class="mv-mas" data-a="c6-mv" data-ev="${esc(p.id)}" aria-expanded="${!!S.c6.mv[p.id]}">${S.c6.mv[p.id]?"Ver menos":"Ver jugada a jugada ("+EVL.length+")"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>`:""}${v.enVivo&&!v.comCerrados?`<p class="mv-nota">Se actualiza solo cada 20 segundos.</p>`:""}${__RXH(p,e)}${cm}</div></article>`}
async function __vivoRefrescar(ev){
  const ses=ses0();if(!ses||!navigator.onLine||S.__vvBusy)return;S.__vvBusy=1;
  try{const r=await llamar(ses,{op:"jugVivo",ev}),e=S.eq;if(e){
    [].concat(e.muro,(S.hist&&S.hist.d&&S.hist.d.items)||[]).forEach(p=>{if(p.id===ev){p.vivo=r.item.vivo;p.texto=r.item.texto;p.ncom=r.item.ncom;p.coms=r.item.coms}});
    Object.assign(e.reac,r.reac);if(r.mias&&r.mias[ev])e.mias[ev]=r.mias[ev];else delete e.mias[ev];e.comAbiertos=r.comAbiertos;
    if(S.ses)LS.set("equipo",e);render()}}
  catch(x){}
  S.__vvBusy=0}
/* se refresca cada ~20 s solo con el hilo a la vista (pestaña Muro, app visible y con red) y sin interrumpir a quien está escribiendo */
setInterval(()=>{
  if(document.visibilityState!=="visible"||!navigator.onLine||!ses0())return;
  if(S.tab!=="muro"||S.cvt!=="muro"||S.hist||S.cm.busy)return;
  const ae=document.activeElement;if(ae&&ae.classList&&ae.classList.contains("cm-t"))return;
  const p=S.eq&&S.eq.muro.find(x=>x.tipo==="vivo"&&x.vivo&&!x.vivo.comCerrados);if(p)__vivoRefrescar(p.id)},20000);
/* cuenta regresiva de las votaciones abiertas; al vencer se pide el resultado una vez */
setInterval(()=>{
  if(document.visibilityState!=="visible"||S.tab!=="muro"||!S.eq||!S.eq.votos)return;
  const ab=S.eq.votos.abiertas;if(!ab.length)return;
  if(S.cvt==="votos"&&!S.vt.busy)render();
  if(ab.some(v=>v.cierre<=Date.now())&&!S.__vtVenc){S.__vtVenc=1;S.eqBusy=false;cargarEquipo().then(()=>{S.__vtVenc=0})}},30000);
function __hoyFilas425(e,filas){
  ((e.votos||{}).abiertas||[]).forEach(v=>filas.push({ico:"trofeo",t:(v.tipo==="gol"?"Gol del mes":"Jugador del mes")+" · "+__mesL(v.mes),b:(v.mio?"Ya votaste · ":"Vota ahora · ")+__cuenta(v.cierre).replace("Cierra","cierra"),bt:v.mio?"Ver":"Votar",a:"vt-ir"}))}
function __v425Clic(t){
  const a=t.dataset.a;
  if(a==="vt-ir")return __v424Clic({dataset:{a:"cv-tab",v:"votos"}});
  if(a==="vt-votar"){__votar(t.dataset.vot,t.dataset.op);return true}
  if(a==="pr-paso"){const e=S.eq,pa=e&&e.pron&&e.pron.actual;if(!pa)return true;const k=t.dataset.k,dr=S.pr.draft[k]||(pa.mio?{n:pa.mio.nos,e:pa.mio.ellos}:{n:0,e:0}),l=t.dataset.l;dr[l]=Math.max(0,Math.min(30,dr[l]+(+t.dataset.d)));S.pr.draft[k]=dr;S.pr.ok="";S.pr.err="";render();return true}
  if(a==="pr-guardar"){__pronGuardar();return true}
  return false}

/* ===== v4.26 · Comunidad ordenada (puente v36) ===== */
S.c6={rx:null,menu:null,re:{},mv:{},fil:"todo",foco:null};
S.tv={d:LS.get("trivia",null),t:0,busy:false,q:null,fb:null,err:"",rk:"sem",fuera:0,no:false,fin:0,sel:null};
const RX6=[["like","👍","Me gusta"],["amor","❤️","Me encanta"],["risa","😁","Me divierte"],["gracias","🙏🏻","Gracias"],["wow","😲","Me asombra"],["triste","🙁","Me entristece"]];
const RX6M={};RX6.forEach(x=>RX6M[x[0]]=x);
Object.assign(__IC4,{
  candado:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  foto:'<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><circle cx="9" cy="10.5" r="1.8"/><path d="M20.5 16l-5-5-8 7.5"/>',
  persona:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  pregunta:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5M12 17h.01"/>',
  pulso:'<path d="M3 12h4l2-5 4 10 2-5h6"/>'
});
const __MAS3='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';
const MSG_C6={operacion_desconocida:"El profe debe actualizar el servicio (puente v36).",red:"Sin señal. Intenta de nuevo cuando tengas conexión.",no_existe:"Ese comentario ya no está.",respuesta_invalida:"Ese comentario ya no está; tu respuesta no se envió.",limite:"Muchas reacciones seguidas. Espera un momento."};
const __c6Oculto=k=>Number(LS.get("c6x:"+k,0))>Date.now();
function __diaHora(ms){const d=new Date(ms);return "el "+DIA_PL[(d.getDay()+6)%7]+" a las "+__hora(ms)}

/* ---------- «Para ti» ---------- */
function __perfilFalta(e){
  const y=e&&e.yo;if(!y)return null;const G=e.gustos||[],t=y.tags||{};
  const L=[["apodo",!!(y.apodo||(y.prop&&y.prop.apodo))],["algo sobre ti",!!(y.desc||(y.prop&&y.prop.desc))]].concat(G.map(g=>[String(g.t||"").toLowerCase(),(t[g.k]||[]).length>0]));
  return {n:L.length,ok:L.filter(x=>x[1]).length,falta:L.filter(x=>!x[1]).map(x=>x[0])}}
function __paraTi(e){
  const f=[],b=S.bn,T=S.tv.d;
  if(b&&!b.no&&b.semana&&!b.respuesta&&!bienCerrado()){
    if(b.semana.abre&&Date.now()<b.semana.abre)f.push({ico:"pulso",t:"Mi bienestar abre "+__diaHora(b.semana.abre),b:"Respóndelo después del último entrenamiento. Desbloquea la trivia.",bloq:1});
    else f.push({ico:"pulso",t:"Responde Mi bienestar",b:"10 preguntas, 2 minutos. Desbloquea la trivia de la semana.",bt:"Responder",a:"c6-bien"})}
  if(T&&T.hay&&!S.tv.no&&!T.cerrada){
    if(T.bloqueada)f.push({ico:"candado",t:"Trivia de la semana",b:"Se desbloquea cuando envíes Mi bienestar.",bloq:1});
    else if(!T.fin)f.push({ico:"pregunta",t:"Trivia de la semana",b:T.hechas?"Vas en la pregunta "+(T.hechas+1)+" de "+T.n+".":T.n+" preguntas, "+T.seg+" segundos cada una.",bt:T.hechas?"Seguir":"Jugar",a:"tv-jugar"});
    else{const yo=(T.rkSem||[]).find(x=>x.yo);f.push({ico:"trofeo",t:"Trivia: "+T.ac+" de "+T.n+" · "+T.pts+" puntos",b:yo?"Vas en el puesto "+yo.pos+" de la semana.":"Mira el ranking de la semana.",bt:"Ver",a:"tv-ir"})}}
  const P=__perfilFalta(e);
  if(P&&P.ok<P.n&&!__c6Oculto("perfil"))f.push({ico:"persona",t:"Completa tu perfil: "+P.ok+" de "+P.n,b:"Te falta: "+P.falta.join(", ")+".",bt:"Completar",a:"c6-perfil",x:"perfil"});
  const y=e.yo;if(y&&!y.banner&&!y.bannerProp&&!__c6Oculto("portada"))f.push({ico:"foto",t:"Ponle una foto a tu portada",b:"Es la imagen grande de tu perfil. El profe la aprueba antes de que se vea.",bt:"Subir",a:"c6-portada",x:"portada"});
  if(!f.length)return "";
  return `<section class="pt-s" aria-labelledby="ptT"><div class="cv-sec"><h3 id="ptT">Para ti</h3></div><ul class="cv-hoy">${f.map(x=>`<li class="cv-hoy-f${x.bloq?" bloq":""}"><span class="cv-ico" aria-hidden="true">${__i4(x.ico)}</span><span class="cv-hoy-t"><b>${esc(x.t)}</b><small>${esc(x.b)}</small></span>${x.bt?`<button class="btn sm" data-a="${x.a}">${x.bt}</button>`:""}${x.x?`<button class="pt-x" data-a="c6-ocultar" data-k="${x.x}" aria-label="Ocultar este aviso por 7 días">✕</button>`:""}</li>`).join("")}</ul></section>`}

/* ---------- filtros del muro ---------- */
const __C6F={partidos:{vivo:1,victoria:1,resultado:1,mvp:1,hattrick:1,gol:1,valla:1,debut:1},cumple:{cumple:1},publicaciones:{post:1,anuncio:1}};
function __c6Filtro(L){const f=S.c6.fil;if(f==="todo")return L;const m=__C6F[f]||{};return L.filter(p=>m[p.tipo]||(f==="publicaciones"&&p.forma))}
function __c6FilHTML(){return `<div class="c6-fil" role="group" aria-label="Filtrar el muro">${[["todo","Todo"],["partidos","Partidos"],["cumple","Cumpleaños"],["publicaciones","Publicaciones"]].map(([k,l])=>`<button data-a="c6-fil" data-v="${k}" aria-pressed="${S.c6.fil===k}">${l}</button>`).join("")}</div>`}

/* ---------- comentarios: hilos, reacciones y menú ---------- */
function __cmItem(c,e,porId,hijo,resp){
  const j=porId[c.a],dt=c.a==="DT"||c.a==="ASIS",f=dt?fotoDe(e.dt&&e.dt.foto):j&&fotoDe(j.foto),av=`<span class="cv-av">${f?`<img src="${f}" alt="">`:esc(ini(String(c.n||"").replace(/^Profe\s*/,"")||"P"))}</span>`;
  const id=esc(c.id),rx=c.rx||{},tot=RX6.filter(x=>rx[x[0]]).map(x=>`<span>${x[1]}${rx[x[0]]>1?" "+rx[x[0]]:""}</span>`).join(""),mi=c.mi&&RX6M[c.mi];
  let h=`<li class="cm-i${hijo?" cm-hijo":""}${S.c6.foco===c.id?" cm-foco":""}" id="com-${id}" data-com="${id}">${av}<div class="cm-c"><p class="cm-h"><b>${esc(c.n)}</b><span class="cm-ts">${__tiempo(c.ts)}</span></p><p class="cm-x">${esc(c.t)}</p>
    <div class="cm-ac"><button class="cm-b${mi?" on":""}" data-a="c6-rx" data-com="${id}" aria-expanded="${S.c6.rx===c.id}" aria-label="${mi?"Tu reacción: "+mi[2]+". Cambiar":"Reaccionar"}">${mi?mi[1]:"Reaccionar"}</button>${resp?`<button class="cm-b" data-a="c6-re" data-ev="${esc(resp)}" data-com="${id}" data-n="${esc(c.n)}">Responder</button>`:""}${tot?`<span class="cm-rxt" aria-label="Reacciones">${tot}</span>`:""}<button class="cm-mn" data-a="c6-menu" data-com="${id}" aria-expanded="${S.c6.menu===c.id}" aria-label="Más opciones del comentario">${__MAS3}</button></div>`;
  if(S.c6.rx===c.id)h+=`<div class="cm-rxp" role="group" aria-label="Elige una reacción">${RX6.map(x=>`<button data-a="c6-rxp" data-com="${id}" data-t="${x[0]}" aria-pressed="${c.mi===x[0]}" aria-label="${x[2]}">${x[1]}</button>`).join("")}</div>`;
  if(S.c6.menu===c.id)h+=`<div class="cm-menu">${c.mio?`<button data-a="cm-bor" data-com="${id}">Borrar mi comentario</button>`:c.rp?`<span class="cm-ts">Ya lo reportaste; el profe lo revisará.</span>`:`<button data-a="cm-rep" data-com="${id}">Reportar al profe</button>`}</div>`;
  return h+`</div></li>`}
function __hilos(L){const por={},top=[],hijos={};L.forEach(c=>por[c.id]=c);L.forEach(c=>{if(c.re&&por[c.re])(hijos[c.re]=hijos[c.re]||[]).push(c);else top.push(c)});return {top,hijos}}
function cmBloque(p,e,porId){
  const id=p.id,n=p.ncom||0,abierto=!!S.cm.open[id],cerr=!e.comAbiertos,sil=e.yo&&e.yo.silencioHasta>Date.now()?e.yo.silencioHasta:0;
  if(!n&&cerr)return "";
  const L=p.coms||[],H=__hilos(L);
  const tg=`<button class="cm-tg" data-a="cm-ver" data-ev="${esc(id)}" aria-expanded="${abierto}" aria-controls="cm-${esc(id)}">${__i4("chat","")}<span>${abierto?"Ocultar comentarios":n?(n>2?"Ver los "+n+" comentarios":n===1?"1 comentario":n+" comentarios"):"Comentar"}</span><span class="chev" aria-hidden="true">${__i4("chev","")}</span></button>`;
  if(!abierto){
    const pv=H.top.slice(-2);
    return (pv.length?`<ul class="cm-prev" aria-label="Últimos comentarios">${pv.map(c=>`<li><button data-a="cm-ver" data-ev="${esc(id)}"><b>${esc(c.n)}</b> ${esc(c.t)}</button></li>`).join("")}</ul>`:"")+tg}
  const resp=!cerr&&!sil?id:"",mas=S.cm.mas[id],tops=mas?H.top:H.top.slice(-__CM_VER),dr=S.cm.draft[id]||"",busy=S.cm.busy===id,err=S.cm.err[id]||"",re=S.c6.re[id];
  let h=`<div class="cm-panel" id="cm-${esc(id)}">`;
  if(H.top.length>tops.length)h+=`<button class="cm-mas" data-a="cm-mas" data-ev="${esc(id)}">Ver los ${H.top.length-tops.length} anteriores</button>`;
  h+=tops.length?`<ul class="cm-l">${tops.map(c=>__cmItem(c,e,porId,false,resp)+(H.hijos[c.id]||[]).map(k=>__cmItem(k,e,porId,true,resp)).join("")).join("")}</ul>`:`<p class="hint" style="margin:0">Aún no hay comentarios. ¡Sé el primero!</p>`;
  if(cerr)h+=`<p class="cm-aviso" role="status">Los comentarios están cerrados por ahora.</p>`;
  else if(sil)h+=`<p class="cm-aviso" role="status">Tu cuenta no puede comentar hasta el ${__fechaCM(sil)}.</p>`;
  else h+=`${re?"":`<div class="cm-por" role="group" aria-label="Porras rápidas">${(e.porras||[]).map((t,i)=>`<button class="cm-chip" data-a="cm-porra" data-ev="${esc(id)}" data-i="${i}" ${busy?"disabled":""}>${esc(t)}</button>`).join("")}</div>`}
    <div class="cm-f">${re?`<div class="cm-resp"><span>Respondiendo a <b>${esc(re.n)}</b></span><button data-a="c6-recancel" data-ev="${esc(id)}">Cancelar</button></div>`:""}<label class="solo-sr" for="cmt-${esc(id)}">${re?"Escribe tu respuesta":"Escribe un comentario"}</label><textarea id="cmt-${esc(id)}" class="cm-t" data-ev="${esc(id)}" rows="2" maxlength="${__CM_MAX}" placeholder="${re?"Escribe tu respuesta…":"Escribe un comentario…"}" aria-describedby="cmn-${esc(id)} cme-${esc(id)}">${esc(dr)}</textarea>
    <div class="cm-fp"><span class="cm-n" id="cmn-${esc(id)}">${dr.length}/${__CM_MAX}</span><button class="btn pri cm-env" id="cmb-${esc(id)}" data-a="cm-enviar" data-ev="${esc(id)}" ${busy||!dr.trim()?"disabled":""}>${busy?"Enviando…":re?"Responder":"Enviar"}</button></div>
    <p class="cm-err" id="cme-${esc(id)}" role="alert">${esc(err)}</p></div>`;
  if(cerr||sil)h+=`<p class="cm-err" role="alert">${esc(err)}</p>`;
  return tg+h+`</div>`}
function __c6Coms(){return [].concat(S.eq?S.eq.muro:[],(S.hist&&S.hist.d&&S.hist.d.items)||[])}
async function __c6Reac(com,t){
  const ses=ses0();if(!ses)return;if(!navigator.onLine){__toast(MSG_C6.red);return}
  const cs=[];__c6Coms().forEach(p=>(p.coms||[]).forEach(c=>{if(c.id===com)cs.push(c)}));if(!cs.length)return;
  const ant=cs.map(c=>({rx:Object.assign({},c.rx||{}),mi:c.mi||""})),nuevo=cs[0].mi===t?"":t;
  cs.forEach(c=>{const rx=c.rx=Object.assign({},c.rx||{});if(c.mi){rx[c.mi]=(rx[c.mi]||1)-1;if(!rx[c.mi])delete rx[c.mi]}if(nuevo)rx[nuevo]=(rx[nuevo]||0)+1;c.mi=nuevo});
  S.c6.rx=null;render();
  try{const r=await llamar(ses,{op:"jugComReac",com,t:nuevo});cs.forEach(c=>{c.rx=r.rx;c.mi=r.mi});if(S.ses)LS.set("equipo",S.eq)}
  catch(x){cs.forEach((c,i)=>{c.rx=ant[i].rx;c.mi=ant[i].mi});__toast(MSG_C6[x.code]||"No se pudo guardar la reacción.")}
  render()}
async function __cmEnviar(ev,texto,porra){
  const e=S.eq,ses=ses0();if(!e||!ses||S.cm.busy)return;
  texto=String(texto||"").replace(/\s+/g," ").trim();if(!texto)return;
  const err=m=>{S.cm.err[ev]=m;render();const t=document.getElementById("cmt-"+ev);if(t&&!porra)t.focus()};
  if(!navigator.onLine)return err(MSG_CM.red);
  if(!await __cmNorma())return;
  if(texto.length>__CM_MAX)return err(MSG_CM.texto_largo);
  if(!porra&&comBloquea_(texto,comEntradas_(e.palabras||[])))return err(MSG_CM.texto_no_permitido);
  const re=!porra&&S.c6.re[ev]?S.c6.re[ev].id:"";
  S.cm.busy=ev;S.cm.err[ev]="";render();
  try{const b={op:"jugComentar",ev,texto};if(re)b.re=re;const r=await llamar(ses,b);const p=__pubDe(ev);
    if(p){p.coms=(p.coms||[]).concat(r.com).slice(-50);p.ncom=r.ncom}
    if(!porra){S.cm.draft[ev]="";delete S.c6.re[ev]}if(S.ses)LS.set("equipo",e)}
  catch(x){if(x.code==="cerrados")e.comAbiertos=false;if(x.code==="silenciada"&&e.yo)e.yo.silencioHasta=x.hasta||e.yo.silencioHasta;S.cm.err[ev]=MSG_C6[x.code]&&x.code!=="red"?MSG_C6[x.code]:__cmMsg(x)}
  S.cm.busy=null;render()}

/* ---------- «Ver» desde una notificación: #/muro/<publicación>/<comentario> ---------- */
function __c6Foco(){
  const m=/^#\/muro\/([\w-]+)(?:\/([\w-]+))?/.exec(location.hash||"");if(!m||!S.eq)return;
  try{history.replaceState(null,"","#/muro")}catch(x){}
  const ev=m[1],com=m[2]||null,p=S.eq.muro.find(x=>x.id===ev);
  if(!p){setTimeout(()=>__toast("Esa publicación ya no está en el muro."),50);return}
  S.cvt="muro";S.hist=null;S.c6.fil="todo";S.cm.open[ev]=true;if(com){S.cm.mas[ev]=true;S.c6.foco=com}
  setTimeout(()=>{const el=document.getElementById(com&&document.getElementById("com-"+com)?"com-"+com:"pub-"+ev);if(el)el.scrollIntoView({block:com?"center":"start",behavior:"auto"})},80);
  if(com)setTimeout(()=>{S.c6.foco=null;const el=document.getElementById("com-"+com);if(el)el.classList.remove("cm-foco")},4000)}
addEventListener("hashchange",()=>{if(/^#\/muro\/[\w-]+/.test(location.hash)&&S.tab==="muro")render()});

/* ---------- Trivia ---------- */
const MSG_TV={bloqueada:"Primero envía Mi bienestar de esta semana.",cerrada:"La trivia de esta semana ya cerró.",sin_preguntas:"El profe aún no ha cargado las preguntas.",red:"Sin señal. El reloj sigue corriendo: intenta de nuevo ya.",operacion_desconocida:"El profe debe actualizar el servicio (puente v36).",limite:"Espera un momento e intenta de nuevo.",pregunta_invalida:"Esa pregunta ya pasó."};
async function __tvCargar(force){
  if(S.tv.no||S.tv.busy||S.tv.q)return;const ses=ses0();if(!ses||!navigator.onLine)return;
  if(!force&&Date.now()-S.tv.t<60000)return;S.tv.t=Date.now();
  try{const r=await llamar(ses,{op:"jugTrivia",modo:"ver"});const ant=JSON.stringify(S.tv.d);S.tv.d=r.trivia;if(S.ses)LS.set("trivia",r.trivia);if(ant!==JSON.stringify(r.trivia)&&S.tab==="muro")render()}
  catch(x){if(x.code==="operacion_desconocida"||x.code==="no_aplica"){S.tv.no=true;if(S.tab==="muro")render()}}}
function __tvRkHTML(L,yo){return L&&L.length?`<ol class="tv-rk">${L.map(x=>`<li class="${x.yo?"yo":""}"><span class="p">${x.pos}</span><span>${esc(x.n)}${x.yo?" (tú)":""} <small>· ${x.ac} ${x.ac===1?"acierto":"aciertos"}</small></span><span class="s">${x.pts} pts</span></li>`).join("")}</ol>`:`<p class="vt-vacio">${yo?"Aún nadie ha jugado esta semana.":"Aún no hay puntos."}</p>`}
function __tvRepaso(R,cerr){return `<ul class="tv-rep">${R.map(x=>`<li><span class="i ${x.bien?"b":"m"}" aria-label="${x.bien?"Correcta":"Incorrecta"}">${x.bien?"✓":"✗"}</span><span>${esc(x.texto)}${cerr?`<small>Respuesta: <b>${esc(x.ok)}</b>${x.mia&&!x.bien?` · tú: ${esc(x.mia)}`:""}${x.exp?" · "+esc(x.exp):""}</small>`:x.resp===false?"<small>Sin responder a tiempo</small>":""}</span></li>`).join("")}</ul>`}
function __tvHTML(){
  if(S.tv.no)return "";__tvCargar(false);const T=S.tv.d;
  let h=`<div class="cv-sec"><h3>Trivia de la semana</h3></div>`;
  if(!T)return h+`<p class="vt-vacio">Cargando…</p>`;
  if(!T.hay)h+=`<div class="tv-c"><p class="cv-tit">Muy pronto</p><p class="hint">El profe está preparando las preguntas.</p></div>`;
  else if(T.cerrada&&!T.hechas)h+=`<div class="tv-c"><p class="hint">La trivia de esta semana ya cerró. El lunes empieza una nueva.</p></div>`;
  else if(T.bloqueada)h+=`<div class="tv-c"><p class="cv-tit">${__i4("candado","ev-i")} Bloqueada</p><p class="hint">Se desbloquea cuando envíes Mi bienestar de esta semana.</p>${S.bn&&S.bn.semana&&!S.bn.respuesta&&!bienCerrado()&&!(S.bn.semana.abre&&Date.now()<S.bn.semana.abre)?`<button class="btn pri" data-a="c6-bien">Responder Mi bienestar</button>`:S.bn&&S.bn.semana&&S.bn.semana.abre&&Date.now()<S.bn.semana.abre?`<p class="hint">Mi bienestar abre ${esc(__diaHora(S.bn.semana.abre))}.</p>`:""}</div>`;
  else if(!T.fin&&!T.cerrada)h+=`<div class="tv-c"><p class="cv-tit">${T.n} preguntas de fútbol: del mundo, de Colombia y de aquí.</p><ul class="tv-reglas"><li>${T.seg} segundos por pregunta.</li><li>El reloj sigue aunque salgas de la app: no hay pausa.</li><li>2 fáciles (10 puntos), 2 medias (15) y 1 difícil (20), más hasta 5 por rapidez.</li></ul>${S.tv.err?`<p class="cm-err" role="alert">${esc(S.tv.err)}</p>`:""}<button class="btn pri" data-a="tv-jugar" ${S.tv.busy?"disabled":""}>${S.tv.busy?"Cargando…":T.hechas?"Seguir (pregunta "+(T.hechas+1)+" de "+T.n+")":"Jugar"}</button></div>`;
  else h+=`<div class="tv-c"><p class="tv-big">${T.pts}<small>puntos · ${T.ac} de ${T.n}</small></p>${T.repaso?__tvRepaso(T.repaso,T.cerrada):""}${T.cerrada?"":`<p class="hint">Las respuestas correctas se publican cuando cierre la trivia (${esc(__diaHora(T.cierre-1).replace(/ a las .*/,""))}).</p>`}</div>`;
  if(T.hay||(T.rkGlob&&T.rkGlob.length)){const sem=S.tv.rk!=="glob";
    h+=`<div class="tv-rkt" role="group" aria-label="Ranking"><button class="fchip" data-a="tv-rk" data-v="sem" aria-pressed="${sem}">Esta semana</button><button class="fchip" data-a="tv-rk" data-v="glob" aria-pressed="${!sem}">General</button></div>${__tvRkHTML(sem?T.rkSem:T.rkGlob,sem)}`}
  if(T.anterior)h+=`<details style="margin:8px 0 0"><summary class="cm-tg" style="list-style:none">Respuestas de la semana pasada · tú: ${T.anterior.pts} pts</summary>${__tvRepaso(T.anterior.repaso,true)}${T.anterior.rk&&T.anterior.rk.length?`<p class="hint" style="margin:10px 0 0">Los mejores de esa semana:</p>${__tvRkHTML(T.anterior.rk)}`:""}</details>`;
  return h}
function __tvOvl(){
  const q=S.tv.q,fb=S.tv.fb;if(!q)return "";
  const rem=Math.max(0,S.tv.fin-Date.now()),pct=fb?0:Math.round(rem/(q.seg*1000)*100),ult=q.i+1>=q.n;
  return `<div class="tv-ovl" role="dialog" aria-modal="true" aria-labelledby="tvQ"><div class="tv-box">
    <div class="tv-top"><span>Pregunta ${q.i+1} de ${q.n}</span><span>${esc(q.amb||"")}${q.nivel?` · <b class="tv-niv n${q.nivel}">${["","Fácil","Media","Difícil"][q.nivel]} · ${q.vale} pts</b>`:""}</span></div>
    <div class="tv-bar" aria-hidden="true"><i id="tv-bar" class="${rem<6000?"poco":""}" style="width:${pct}%"></i></div><p class="tv-seg" id="tv-seg" aria-hidden="true">${fb?"":Math.ceil(rem/1000)+" s"}</p>
    <h2 id="tvQ" class="tv-q">${esc(q.texto)}</h2>
    <div class="tv-ops">${q.ops.map((o,k)=>`<button class="tv-op${fb&&fb.k===k?(fb.ok?" bien":" mal"):S.tv.sel===k?" sel":""}" data-a="tv-op" data-k="${k}" ${fb||S.tv.busy?"disabled":""}>${"ABCD"[k]}. ${esc(o)}</button>`).join("")}</div>
    ${S.tv.err?`<p class="cm-err" role="alert">${esc(S.tv.err)}</p>${S.tv.sel!=null&&!fb?`<button class="btn pri" data-a="tv-op" data-k="${S.tv.sel}">Reintentar</button>`:""}`:""}
    ${fb?`<p class="tv-fb ${fb.ok?"bien":"mal"}" role="status">${fb.tarde?"Se acabó el tiempo.":fb.ok?"¡Correcto! +"+fb.pts+" puntos":"Incorrecta."}</p><button class="btn pri" data-a="tv-sig">${ult?"Ver mi resultado":"Siguiente pregunta"}</button>`:""}
  </div></div>`}
function __tvTick(){
  const q=S.tv.q;if(!q||S.tv.fb)return;const rem=Math.max(0,S.tv.fin-Date.now());
  const b=document.getElementById("tv-bar"),s=document.getElementById("tv-seg");
  if(b){b.style.width=Math.round(rem/(q.seg*1000)*100)+"%";b.classList.toggle("poco",rem<6000)}if(s)s.textContent=Math.ceil(rem/1000)+" s";
  if(rem<=0&&!S.tv.busy)__tvResp(-1)}
setInterval(__tvTick,250);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&S.tv.q&&!S.tv.fb)S.tv.fuera++});
async function __tvPedir(){
  const ses=ses0();if(!ses)return;S.tv.busy=true;S.tv.err="";render();
  try{const r=await llamar(ses,{op:"jugTrivia",modo:"pregunta"});S.tv.d=r.trivia;if(S.ses)LS.set("trivia",r.trivia);
    if(r.pregunta){S.tv.q=r.pregunta;S.tv.fin=Date.now()+r.pregunta.restante;S.tv.fb=null;S.tv.sel=null;S.tv.fuera=0}else S.tv.q=null}
  catch(x){S.tv.q=null;S.tv.err=MSG_TV[x.code]||"No se pudo cargar la pregunta.";if(x.code==="bloqueada"||x.code==="cerrada")S.tv.t=0}
  S.tv.busy=false;render();window.scrollTo(0,0)}
async function __tvResp(k){
  const ses=ses0(),q=S.tv.q;if(!ses||!q||S.tv.busy||S.tv.fb)return;
  S.tv.busy=true;S.tv.sel=k;S.tv.err="";render();
  try{const r=await llamar(ses,{op:"jugTrivia",modo:"responder",i:q.i,opcion:k,fuera:S.tv.fuera});S.tv.d=r.trivia;if(S.ses)LS.set("trivia",r.trivia);S.tv.fb={k,ok:!!r.ok,pts:r.pts||0,tarde:k===-1||!!r.tarde};if(q.i+1>=q.n)LS.set("mcF",1)}
  catch(x){if(x.code==="pregunta_invalida"||x.code==="cerrada"){S.tv.q=null;S.tv.t=0;__tvCargar(true)}else S.tv.err=MSG_TV[x.code]||"No se pudo enviar. Intenta de nuevo."}
  S.tv.busy=false;render()}
async function __tvJugar(){
  const T=S.tv.d;if(!T||S.tv.busy)return;
  if(!T.hechas&&!await __dlg({titulo:"Trivia de la semana",texto:T.n+" preguntas, "+T.seg+" segundos cada una.\n\nCuando empieza una pregunta el reloj sigue aunque salgas de la app: no hay pausa. ¡Suerte!",ok:"Empezar",cancelar:"Ahora no"}))return;
  S.cvt="votos";__tvPedir()}


/* ---------- v4.26.2 · Mi perfil tipo red social (al principio de Progreso) y hoja «Editar perfil» ---------- */
S.pfe=null;
const __CAM='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
function __perfilCab(){
  const d=S.d,j=d&&d.jugador,e=S.eq,y=e&&e.yo;if(!j)return "";
  const me=y&&e.jugadores.find(x=>x.id===y.id),fu=(S.fotos&&S.fotos.jugador)||(me&&fotoDe(me.foto)),bn=y&&(fotoDe(y.banner)||(y.bannerProp&&fotoDe(y.bannerProp.foto)));
  const ap=y&&(y.apodo||(y.prop&&y.prop.apodo)),apP=y&&y.prop&&y.prop.apodo&&y.prop.apodo!==y.apodo,de=y&&((y.prop&&y.prop.desc)||y.desc),deP=y&&y.prop&&y.prop.desc&&y.prop.desc!==y.desc;
  const P=y?__perfilFalta(e):null,tot=P?P.n+1:0,ok=P?P.ok+(y.banner||y.bannerProp?1:0):0;
  let h=`<section class="pfc" aria-label="Mi perfil">
    <div class="pfc-bn">${bn?`<img src="${bn}" alt="Tu portada">${y.bannerProp?'<span class="chip w">Por aprobar</span>':""}`:y?`<button class="pfc-sub" data-a="pfe-abrir" data-s="mi-banner">${__CAM}Subir portada</button>`:""}</div>
    <span class="avw"><span class="av">${fu?`<img src="${fu}" alt="">`:esc(ini(j.nombre))}</span>${__mcBadge()}${y?`<button class="emo${y.emo?"":" vacio"}" data-a="pfe-abrir" data-s="mi-emoji" aria-label="${y.emo?"Tu emoji: "+y.emo+". Cambiar":"Elegir emoji"}">${y.emo||"+"}</button>`:""}</span>
    <h2>${esc(j.nombre)}</h2>${ap?`<span class="apodo">«${esc(ap)}»${apP?'<span class="pend">Por aprobar</span>':""}</span>`:""}
    <p class="hint" style="margin:0;font-size:1rem">${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(j.pos1||"")}${j.pos2?" · "+esc(j.pos2):""}</p>
    ${de?`<p class="pfc-d">“${esc(de)}”${deP?'<span class="pend">Por aprobar</span>':""}</p>`:""}`;
  if(y){const g=gustosHtml(y.tags);if(g)h+=`<div class="tgs">${g}</div>`;
    if(!y.visible)h+=`<p class="hint" style="margin:4px 0 0">Por ahora tu perfil no se muestra al equipo.</p>`;
    if(ok<tot)h+=`<div class="pfc-pr"><b>Perfil: ${ok} de ${tot}</b><div class="tv-bar" aria-hidden="true"><i style="width:${Math.round(ok/tot*100)}%"></i></div><small>Te falta: ${esc(P.falta.concat(y.banner||y.bannerProp?[]:["portada"]).join(", "))}.</small></div>`;
    h+=`<button class="btn pfc-ed" data-a="pfe-abrir">Editar perfil</button>`}
  return h+__mcBoton()+`</section>`}
function __perfilHoja(){
  if(!S.pfe||!S.eq||!S.eq.yo)return "";
  const y0=S.pfe.y||0;if(y0&&!S.pfe.s)queueMicrotask(()=>{const b=document.querySelector(".pfe .box");if(b)b.scrollTop=y0}); // al tocar un gusto o un emoji la hoja no vuelve arriba
  return `<div class="ovl pfe"><div class="box" role="dialog" aria-modal="true" aria-labelledby="pfeT"><div class="sec-h"><h3 id="pfeT">Editar perfil</h3><button class="btn sm" data-a="pfe-cerrar">Listo</button></div>${vMiPerfil()}</div></div>`}
document.addEventListener("scroll",ev=>{const t=ev.target;if(S.pfe&&t&&t.classList&&t.classList.contains("box")&&t.parentNode&&t.parentNode.classList.contains("pfe")){S.pfe.y=t.scrollTop;S.pfe.s=null}},true);
function __pfeAbrir(sec){S.pfe={s:sec||null};render();if(sec)setTimeout(()=>{const el=document.getElementById(sec);if(el)el.scrollIntoView({block:"start"})},60)}
function __v426Clic(t){
  const a=t.dataset.a,com=t.dataset.com;
  if(a==="c6-fil"){S.c6.fil=t.dataset.v;render();return true}
  if(a==="c6-rx"){S.c6.rx=S.c6.rx===com?null:com;S.c6.menu=null;render();return true}
  if(a==="c6-rxp"){__c6Reac(com,t.dataset.t);return true}
  if(a==="c6-menu"){S.c6.menu=S.c6.menu===com?null:com;S.c6.rx=null;render();return true}
  if(a==="c6-re"){const ev=t.dataset.ev;S.c6.re[ev]={id:com,n:t.dataset.n};S.c6.menu=S.c6.rx=null;render();const ta=document.getElementById("cmt-"+ev);if(ta){ta.focus();ta.scrollIntoView({block:"center"})}return true}
  if(a==="c6-recancel"){delete S.c6.re[t.dataset.ev];render();return true}
  if(a==="c6-mv"){const ev=t.dataset.ev;S.c6.mv[ev]=!S.c6.mv[ev];render();return true}
  if(a==="c6-ocultar"){LS.set("c6x:"+t.dataset.k,Date.now()+7*864e5);render();return true}
  if(a==="c6-bien"){abrirBien();location.hash="/progreso";return true}
  if(a==="c6-perfil"||a==="c6-portada"){location.hash="/progreso";setTimeout(()=>__pfeAbrir(a==="c6-portada"?"mi-banner":null),200);return true}
  if(a==="pfe-abrir"){__pfeAbrir(t.dataset.s);return true}
  if(a==="pfe-cerrar"){S.pfe=null;render();return true}
  if(a==="tv-jugar"){__tvJugar();return true}
  if(a==="tv-ir"){S.cvt="votos";render();window.scrollTo(0,0);return true}
  if(a==="tv-rk"){S.tv.rk=t.dataset.v;render();return true}
  if(a==="tv-op"){__tvResp(+t.dataset.k);return true}
  if(a==="tv-sig"){const q=S.tv.q;if(q&&q.i+1>=q.n){S.tv.q=null;S.tv.fb=null;S.cvt="votos";render();window.scrollTo(0,0)}else __tvPedir();return true}
  return false}

/* ---------- v4.27 · Colección de mascotas (puente v38) ---------- */
const MASC_URL="masc/"; // imágenes dentro de la app (512 px, webp); el service worker las guarda al verlas
// [id, nombre, hito (solo lo ve el dueño), imagen]. Sin imagen: «Muy pronto».
const MASC_CAT=[
  ["jaguar","Jaguar","Tu primer personaje: todos empiezan con él.","jaguar"],
  ["guartinaja","Guartinaja","Completa todo tu perfil: apodo, algo sobre ti, tus gustos y la portada, aprobados por el profe.","guartinaja"],
  ["hicotea","Hicotea","Responde Mi bienestar 4 semanas seguidas.","hicotea"],
  ["chiguiro","Chigüiro","Asiste a 10 entrenamientos.","chiguiro"],
  ["mono","Mono aullador","Pronostica 5 partidos.","mono"],
  ["guacamaya","Guacamaya","Suma 25 aciertos en la trivia.","guacamaya"],
  ["perezoso","Perezoso","Juega la trivia 8 semanas (aunque falles).","perezoso"],
  ["babilla","Babilla","Haz 5 de 5 en la trivia 3 semanas.","babilla"],
  ["armadillo","Armadillo","Mejora tu propia marca en un test físico.","armadillo"],
  ["venado","Venado","Llega al nivel Excelente en un test físico.",null],
  ["iguana","Iguana","En un partido: 3 goles, 3 asistencias o atajar un penal.","iguana"],
  ["aguila","Águila pescadora","En la temporada: 20 goles, 15 asistencias, 3 penales atajados o 10 partidos completos sin recibir gol.",null],
  ["oso","Oso hormiguero","Asiste a 100 entrenamientos.",null],
  ["titi","Tití cabeciblanco","30 días seguidos sin faltar a un entrenamiento. Si faltas con excusa o por lesión, tu racha se pausa: no se pierde, pero esos días no suman.","titi"],
  ["puercoespin","Puercoespín","Juega 15 partidos sin recibir gol.",null],
  ["ocelote","Ocelote","Sé el MVP 4 veces.",null],
  ["garza","Garza blanca","Juega 10 partidos sin tarjetas.",null],
  ["manati","Manatí","El legendario: desbloquea 12 de los 16 animales.","manati"]
];
const MASC_LA={guartinaja:1,hicotea:1,guacamaya:1,babilla:1,iguana:1,garza:1};
const MASC_BUHO="buho";
const MASC_M={};MASC_CAT.forEach(x=>MASC_M[x[0]]={id:x[0],n:x[1],h:x[2],img:x[3]?MASC_URL+x[3]+".webp":null});
// Unidad del avance (con camino, para los animales de varios caminos)
const MASC_U={guartinaja:"pasos",hicotea:"semanas seguidas",chiguiro:"entrenamientos",oso:"entrenamientos",titi:"días seguidos",mono:"partidos",guacamaya:"aciertos",perezoso:"semanas",babilla:"semanas con 5 de 5",puercoespin:"partidos sin recibir gol",ocelote:"veces MVP",garza:"partidos sin tarjetas",manati:"animales",
  "iguana.goles":"goles en un partido","iguana.asist":"asistencias en un partido","iguana.penal":"penal atajado","aguila.goles":"goles este año","aguila.asist":"asistencias este año","aguila.penales":"penales atajados este año","aguila.vallas":"partidos completos sin recibir gol"};
const MSG_MC={operacion_desconocida:"El profe debe actualizar el servicio (puente v38).",red:"Sin señal. Intenta de nuevo cuando tengas conexión.",bloqueado_animal:"Ese personaje aún no está desbloqueado.",limite:"Espera un momento e intenta de nuevo."};
S.mc={d:LS.get("masc",null),t:0,busy:false,open:false,sel:null,err:"",no:false,cel:null};
const __mcImg=(a,alt)=>{const m=MASC_M[a];return m&&m.img?`<img src="${m.img}" alt="${esc(alt==null?m.n:alt)}" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'mc-pr',textContent:'Muy pronto'}))">`:`<span class="mc-pr">Muy pronto</span>`};
const __mcGan=a=>!!(S.mc.d&&S.mc.d.desbloq&&S.mc.d.desbloq[a])||a==="jaguar";
const __mcEleg=()=>(S.mc.d&&S.mc.d.elegido)||"jaguar";
const __mcN=()=>MASC_CAT.filter(x=>__mcGan(x[0])).length;
function __mcAvance(a){
  const p=S.mc.d&&S.mc.d.prog&&S.mc.d.prog[a];if(!p||p.m<=1)return null;
  const u=MASC_U[a+"."+p.c]||MASC_U[a]||"";return {v:p.v,m:p.m,pct:Math.round(Math.min(1,p.v/p.m)*100),t:p.v+" de "+p.m+(u?" "+u:"")}}
async function __mcCargar(force){
  if(S.mc.no||S.mc.busy)return;const ses=ses0();if(!ses||!navigator.onLine)return;
  const forzar=!!LS.get("mcF",0);if(!force&&!forzar&&Date.now()-S.mc.t<10*60000)return;S.mc.t=Date.now();S.mc.busy=true;
  try{const r=await llamar(ses,{op:"jugMascotas",modo:"ver",forzar:forzar?1:0});LS.set("mcF",0);const ant=JSON.stringify(S.mc.d);S.mc.d=r.mascotas;if(S.ses)LS.set("masc",r.mascotas);
    if(!S.mc.cel&&(r.mascotas.nuevos||[]).length)S.mc.cel=r.mascotas.nuevos.slice();
    S.mc.busy=false;if(ant!==JSON.stringify(r.mascotas)||S.mc.cel)render()}
  catch(x){S.mc.busy=false;if(x.code==="operacion_desconocida"||x.code==="no_aplica"){S.mc.no=true;render()}}}
// Tras enviar el bienestar o terminar la trivia, la próxima carga recalcula
window.addEventListener("sige:mcForzar",()=>{LS.set("mcF",1);S.mc.t=0});
async function __mcOp(b){
  const ses=ses0();if(!ses)return false;S.mc.err="";
  try{const r=await llamar(ses,Object.assign({op:"jugMascotas"},b));S.mc.d=r.mascotas;if(S.ses)LS.set("masc",r.mascotas);return true}
  catch(x){S.mc.err=MSG_MC[x.code]||(x.code==="red"?MSG_MC.red:"No se pudo guardar. Intenta de nuevo.");return false}}
/* Perfil: insignia junto a la foto y botón de la colección */
function __mcBadge(){if(S.mc.no)return "";const a=__mcEleg(),m=MASC_M[a];return `<button class="mcb" data-a="mc-abrir" aria-label="Tu personaje: ${esc(m.n)}. Abrir mi colección">${__mcImg(a,"")}</button>`}
function __mcBoton(){
  if(S.mc.no)return "";__mcCargar(false);const a=__mcEleg(),nv=S.mc.d?(S.mc.d.nuevos||[]).length:0;
  return `<button class="pfc-mc" data-a="mc-abrir"><span class="mc-av">${__mcImg(a,"")}</span>Mi colección · ${__mcN()} de ${MASC_CAT.length}${nv?`<span class="mc-nv">${nv} ${nv===1?"nuevo":"nuevos"}</span>`:""}</button>`}
/* Hoja de la colección */
function __mcCarta(x){
  const a=x[0],m=MASC_M[a],g=__mcGan(a),el=__mcEleg()===a,nuevo=g&&S.mc.d&&(S.mc.d.nuevos||[]).includes(a),av=g?null:__mcAvance(a),secreto=a==="manati"&&!g;
  return `<li><button class="mc-c${g?"":" blq"}${el?" el":""}" data-a="mc-ver" data-k="${a}" aria-label="${secreto?"Personaje secreto":esc(m.n)}${g?(el?", tu personaje":", desbloqueado"):", bloqueado"}">${nuevo?'<span class="mc-t">Nuevo</span>':""}
    <span class="mc-im">${secreto?'<span class="mc-q" aria-hidden="true">?</span>':__mcImg(a,"")}</span><span class="mc-n">${secreto?"???":esc(m.n)}</span>
    ${el?"<small>Tu personaje</small>":g?"":av?`<span class="tv-bar" aria-hidden="true"><i style="width:${av.pct}%"></i></span><small>${av.v} de ${av.m}</small>`:"<small>Bloqueado</small>"}</button></li>`}
function __mcDetalle(a){
  const m=MASC_M[a],g=__mcGan(a),el=__mcEleg()===a,av=g?null:__mcAvance(a),secreto=a==="manati"&&!g;
  return `<div class="mc-d${g?"":" blq"}"><span class="mc-im">${secreto?'<span class="mc-q" aria-hidden="true">?</span>':__mcImg(a,g?m.n:"Silueta: "+m.n)}</span>
    <h4>${secreto?"Personaje secreto":esc(m.n)}</h4><p>${esc(m.h)}</p>
    ${g?"":av?`<span class="tv-bar" aria-hidden="true"><i style="width:${av.pct}%"></i></span><p class="hint">Vas en ${esc(av.t)}.</p>`:'<p class="hint">Aún no lo tienes.</p>'}
    ${S.mc.err?`<p class="mc-err" role="alert">${esc(S.mc.err)}</p>`:""}
    ${g&&!el?`<button class="btn pri" data-a="mc-usar" data-k="${a}" ${S.mc.busy?"disabled":""}>Usar este personaje</button>`:el?'<p class="hint">Es tu personaje: lo ven tus compañeros en tu perfil.</p>':""}
    <button class="btn" data-a="mc-volver">Ver toda la colección</button></div>`}
function __mcHoja(){
  if(S.mc.no)return "";let h="";
  if(S.mc.open){const sel=S.mc.sel;
    h+=`<div class="ovl mc"><div class="box" role="dialog" aria-modal="true" aria-labelledby="mcT"><div class="sec-h"><h3 id="mcT">${sel?"Mi colección":"Mi colección · "+__mcN()+" de "+MASC_CAT.length}</h3><button class="btn sm" data-a="mc-cerrar">Cerrar</button></div>`;
    h+=sel?__mcDetalle(sel):`<p class="mc-int">Desbloquea animales de nuestra región cumpliendo retos. Elige el que quieras mostrar: tus compañeros lo ven en tu perfil.</p>${S.mc.d?"":'<p class="hint">Cargando tu avance…</p>'}<ul class="mc-g">${MASC_CAT.map(__mcCarta).join("")}</ul>`;
    h+=`</div></div>`}
  const C=S.mc.cel;
  if(C&&C.length&&!S.mc.open&&!S.bf&&!S.pfe){const uno=C.length===1,a=C[0],m=MASC_M[a];
    h+=`<div class="ovl mcx"><div class="box" role="dialog" aria-modal="true" aria-labelledby="mcxT"><p class="mcx-et">¡Nuevo personaje!</p>
      <h3 id="mcxT">${uno?"Desbloqueaste "+(a==="manati"?"al legendario Manatí":(MASC_LA[a]?"la ":"el ")+esc(m.n)):"Desbloqueaste "+C.length+" personajes"}</h3>
      ${uno?`<span class="mc-im">${__mcImg(a)}</span><p class="hint">${esc(m.h)}</p>`:`<div class="mcx-v">${C.map(k=>`<span class="mc-av">${__mcImg(k)}</span>`).join("")}</div><p class="hint">${C.map(k=>esc(MASC_M[k].n)).join(" · ")}</p>`}
      <div class="mcx-b">${uno?`<button class="btn pri" data-a="mc-celusar" data-k="${a}">Usar este personaje</button>`:""}<button class="btn${uno?"":" pri"}" data-a="mc-celver">Ver mi colección</button><button class="btn" data-a="mc-celok">Seguir</button></div></div></div>`}
  return h}
async function __mcVistos(){const C=S.mc.cel||[];S.mc.cel=null;if(!C.length)return;const d=S.mc.d;if(d&&d.nuevos)d.nuevos=d.nuevos.filter(k=>!C.includes(k));await __mcOp({modo:"visto",animales:C})}
/* Equipo (perfil de un compañero) y anuncios del entrenador */
function __mcEnPerfil(j){const a=j&&j.masc,m=MASC_M[a];if(!m||!m.img)return "";return `<img class="mc-gr" src="${m.img}" alt="Su personaje: ${esc(m.n)}" loading="lazy" onerror="this.remove()">`}
function __buho(){return `<img class="mc-buho" src="${MASC_URL+MASC_BUHO}.webp" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">`}
function __v427Clic(t){
  const a=t.dataset.a;
  if(a==="mc-abrir"){S.mc.open=true;S.mc.sel=null;S.mc.err="";__mcCargar(false);render();return true}
  if(a==="mc-cerrar"){S.mc.open=false;S.mc.sel=null;render();return true}
  if(a==="mc-ver"){S.mc.sel=t.dataset.k;S.mc.err="";render();const b=document.querySelector(".mc .box");if(b)b.scrollTop=0;
    const d=S.mc.d;if(d&&(d.nuevos||[]).includes(t.dataset.k)){d.nuevos=d.nuevos.filter(k=>k!==t.dataset.k);__mcOp({modo:"visto",animales:[t.dataset.k]})}return true}
  if(a==="mc-volver"){S.mc.sel=null;S.mc.err="";render();return true}
  if(a==="mc-usar"||a==="mc-celusar"){const k=t.dataset.k;S.mc.busy=true;render();
    (async()=>{if(a==="mc-celusar")await __mcVistos();const ok=await __mcOp({modo:"elegir",animal:k});S.mc.busy=false;if(ok&&a==="mc-usar"){S.mc.sel=k}if(S.eq&&ok){const me=S.eq.jugadores.find(x=>x.id===(S.eq.yo&&S.eq.yo.id));if(me)me.masc=k}render()})();return true}
  if(a==="mc-celver"){__mcVistos().then(render);S.mc.open=true;S.mc.sel=null;render();return true}
  if(a==="mc-celok"){__mcVistos().then(render);render();return true}
  return false}
function __v424Clic(t){
  const a=t.dataset.a,ev=t.dataset.ev;
  if(a==="cv-tab"){const v=t.dataset.v;S.hist=null;
    if(v==="equipo"){location.hash="/equipo";return true}
    S.cvt=v==="votos"?"votos":"muro";if(S.tab!=="muro"){location.hash="/muro";return true}render();window.scrollTo(0,0);return true}
  if(a==="cv-ir"){if(t.dataset.abrir)S.cm.open[ev]=true;render();const el=document.getElementById("pub-"+ev);if(el)el.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});return true}
  if(a==="cm-ver"){S.cm.open[ev]=!S.cm.open[ev];render();return true}
  if(a==="cm-mas"){S.cm.mas[ev]=true;render();return true}
  if(a==="cm-porra"){const e=S.eq;__cmEnviar(ev,(e.porras||[])[+t.dataset.i],true);return true}
  if(a==="cm-enviar"){__cmEnviar(ev,S.cm.draft[ev],false);return true}
  if(a==="cm-rep"){__cmReportar(t.dataset.com);return true}
  if(a==="cm-bor"){__cmBorrar(t.dataset.com);return true}
  return false}
document.addEventListener("input",ev=>{const t=ev.target;if(!t.classList||!t.classList.contains("cm-t"))return;const id=t.dataset.ev;S.cm.draft[id]=t.value;S.cm.err[id]="";
  const n=document.getElementById("cmn-"+id),b=document.getElementById("cmb-"+id),er=document.getElementById("cme-"+id);
  if(n)n.textContent=t.value.length+"/"+__CM_MAX;if(b)b.disabled=!t.value.trim()||S.cm.busy===id;if(er)er.textContent=""});
let memSes=null;
const ERR={acceso_invalido:"El documento o el código no son correctos.",bloqueado:"Demasiados intentos fallidos. Espera 15 minutos e intenta de nuevo.",inactivo:"Este acceso no está activo. Habla con el entrenador.",red:"Sin señal o el servidor no respondió. Intenta de nuevo.",operacion_desconocida:"El servicio aún no está listo. Avísale al entrenador."};
/* SIGE v4: una sola capa de acceso al puente */
function llamar(ses,body){return api.llamar(ses,body)}
function pedir(ses,sinFotos){return llamar(ses,{op:"jugDatos",sinFotos:!!sinFotos})}
function guardar(r,recordar){
  S.d={duracion:r.duracion,jugador:r.jugador,club:r.club,proximo:r.proximo,proximos:r.proximos||null,partidos:r.partidos,sesiones:r.sesiones,tests:r.tests,testsEquipo:r.testsEquipo||null,metas:r.metas||null,bienHist:r.bienHist||null,evaluaciones:r.evaluaciones};S.stamp=Date.now();
  if(r.fotos){S.fotos=r.fotos}
  if(recordar){LS.set("datos",S.d);LS.set("stamp",S.stamp);if(r.fotos)LS.set("fotos",r.fotos)}
}
async function entrar(ev){
  ev.preventDefault();
  const doc=document.getElementById("doc").value.trim(),codigo=document.getElementById("cod").value.replace(/\D/g,""),rec=document.getElementById("rec").checked;
  if(!doc||codigo.length!==6){S.err="Escribe el número de documento y el código de 6 dígitos.";render();return}
  S.busy=true;S.err=null;render();
  try{const ses={doc,codigo};const r=await pedir(ses,false);if(rec){S.ses=ses;LS.set("ses",ses)}else{memSes=ses;S.ses=null}guardar(r,rec);S.offline=false;setTimeout(cargarEquipo,0);setTimeout(cargarBien,0)}
  catch(e){S.err=ERR[e.code]||ERR.red}
  S.busy=false;render();
}
async function actualizar(){
  const ses=S.ses||memSes;if(!ses||S.busy)return;
  S.busy=true;render();
  try{const r=await pedir(ses,!!(S.fotos&&S.fotos.jugador!==undefined));guardar(r,!!S.ses);S.offline=false;S.err=null;setTimeout(cargarEquipo,0);setTimeout(cargarBien,0);setTimeout(()=>cargarVivo(true),500)}
  catch(e){if(e.code==="acceso_invalido"||e.code==="inactivo"){salir(true);S.err="El código cambió o el acceso ya no está activo. Pide el código nuevo al entrenador.";}else S.offline=true}
  S.busy=false;render();
}
function salir(sil){LS.del("bien");LS.del("bienPend");S.bn=null;S.bf=null;LS.del("ses");LS.del("datos");LS.del("fotos");LS.del("stamp");LS.del("equipo");LS.del("fx");S.eq=null;S.fx={};FXDB.ver={};FXDB.ok={};fxAbrir().then(db=>{try{db&&db.transaction("f","readwrite").objectStore("f").clear()}catch(x){}});S.tab="prog";S.ses=null;memSes=null;S.d=null;S.fotos=null;if(!sil)render()}

function vLogin(){
  if(!S.url)return `<section class="sec"><h2>Mi progreso</h2><p>Para entrar, abre el enlace que te envió el entrenador por WhatsApp.</p></section>`;
  return `<section class="sec"><h2>Mi progreso</h2><p class="hint">Escribe el número de documento del jugador y el código personal que te envió el entrenador.</p>
   ${S.err?`<div class="banner err">${esc(S.err)}</div>`:""}
   <form id="login" class="sec" style="border:0;padding:0">
   <label class="f">Número de documento<input id="doc" inputmode="numeric" autocomplete="username" required></label>
   <label class="f">Código personal<input id="cod" inputmode="numeric" maxlength="6" autocomplete="current-password" type="password" required></label>
   <label class="row" style="font-size:.92rem"><input type="checkbox" id="rec" checked style="width:22px;height:22px"> Recordar en este teléfono</label>
   <button class="btn pri" type="submit" ${S.busy?"disabled":""}>${S.busy?"Entrando…":"Entrar"}</button></form>
   <p class="hint">Si usas un teléfono prestado, desmarca «Recordar».</p></section>`;
}
function vDatos(){
  const d=S.d,j=d.jugador,foto=S.fotos&&S.fotos.jugador;
  let h="";
  if(S.offline)h+=`<div class="banner warn">Sin señal: ves la información guardada el ${esc(dL(new Date(S.stamp)))}.</div>`;
  h+=vPrimeros();
  h+=__perfilCab();h+=vBienCard();
  if(S.err)h+=`<div class="banner err">${esc(S.err)}</div>`;
  // Próximo partido (puente v16: lista «proximos» del calendario del DT; antes, solo «proximo»)
  const hoy0=new Date();hoy0.setHours(0,0,0,0);
  const prox=(d.proximos||(d.proximo?[d.proximo]:[])).filter(x=>{const f=pD(x.fecha);return !f||f>=hoy0});
  const hora=x=>{const m=/^(\d{1,2}):(\d{2})/.exec(String(x||""));if(!m)return String(x||"");let H=+m[1];const ap=H>=12?"p. m.":"a. m.";H=H%12||12;return H+":"+m[2]+" "+ap};
  const p=prox[0],pf=p&&pD(p.fecha);
  if(p){const dd=pf?Math.round((pf-hoy0)/864e5):null;
    const det=[p.hora?hora(p.hora):"",p.cancha||""].filter(Boolean).join(" · ");
    h+=`<section class="sec"><h3>Próximo partido</h3><div class="nm-card"><div style="flex:1"><div class="big">vs ${esc(p.rival)}</div><p class="hint" style="margin-top:4px">${pf?esc(DIA[pf.getDay()]+", "+dL(pf)):""}${p.localia?" · "+esc(p.localia):""}${p.comp?" · "+esc(p.comp):""}</p>${det?`<p class="hint" style="margin-top:2px"><b>${esc(det)}</b></p>`:""}${p.citacion?`<p class="hint" style="margin-top:2px">Citación: <b>${esc(hora(p.citacion))}</b></p>`:""}${p.aviso?`<p class="hint" style="margin-top:2px">${esc(p.aviso)}</p>`:""}</div>${/aplaz/i.test(p.estado||"")?'<span class="chip">Aplazado</span>':dd!=null?`<span class="chip b">${dd===0?"Hoy":dd===1?"Mañana":"En "+dd+" días"}</span>`:""}</div>`+mpHist(d,p);
    if(prox.length>1)h+=`<h3 style="margin-top:14px">Próximos partidos</h3><div class="list">${prox.slice(1).map(x=>{const f=pD(x.fecha);return `<div class="li" style="cursor:default"><span style="flex:1"><b>vs ${esc(x.rival)}</b><br><span class="hint">${esc([f?DIA[f.getDay()]+", "+dL(f):"",x.hora?hora(x.hora):"",x.localia,x.comp].filter(Boolean).join(" · "))}</span></span>${/aplaz/i.test(x.estado||"")?'<span class="chip">Aplazado</span>':""}</div>`}).join("")}</div>`;
    h+=`</section>`}
  // Partidos
  const ps=(d.partidos||[]).slice().sort((a,b)=>(pD(b.fecha)||0)-(pD(a.fecha)||0)),conv=ps.filter(x=>x.convocado),jug=conv.filter(x=>n(x.min)>0);
  const sum=k=>conv.reduce((a,x)=>a+(n(x[k])||0),0),gk=/portero/i.test(j.pos1||""),dur=d.duracion||80;
  /* Portero: goles recibidos con él en cancha; si no se anotaron y jugó completo, los del marcador */
  const grOf=x=>{const m=n(x.min)||0;if(!x.convocado||!(m>0))return null;const g=n(x.gr);return g!=null?g:(m>=dur?n(x.gc):null)};
  const inv=jug.filter(x=>grOf(x)===0).length,grT=jug.reduce((a,x)=>a+(grOf(x)||0),0);
  if(jug.length)h+=`<section class="banda" style="--alto:150px" aria-label="Temporada"><div class="banda-top"><h2>Temporada</h2></div><div class="banda-cifra"><span class="cifra">${sum("min")}</span><span class="tit">minutos jugados</span></div><div class="banda-pie"><p class="banda-l1">${jug.length} ${jug.length===1?"partido jugado":"partidos jugados"}</p></div></section><div class="banda-fil"></div>`;
  h+=`<section class="sec"><h3>Mis partidos</h3>${ps.length?`<div class="kpis"><div class="kpi"><b>${conv.length}</b><span>Convocado</span></div><div class="kpi"><b>${jug.length}</b><span>Jugados</span></div><div class="kpi"><b>${conv.filter(x=>x.cond==="Titular"&&n(x.min)>0).length}</b><span>Titular</span></div><div class="kpi"><b>${sum("min")}'</b><span>Minutos</span></div>${gk?`<div class="kpi"><b>${inv}</b><span>Vallas invictas</span></div><div class="kpi"><b>${grT}</b><span>Goles recibidos</span></div><div class="kpi"><b>${sum("pa")}</b><span>Penales atajados</span></div>`:`<div class="kpi"><b>${sum("goles")}</b><span>Goles</span></div><div class="kpi"><b>${sum("asist")}</b><span>Asistencias</span></div>`}</div>
   <div class="list">${ps.slice(0,S.todos?999:6).map(x=>{const gf=n(x.gf),gc=n(x.gc),r=gf>gc?"G":gf<gc?"P":"E",m=n(x.min)||0,g=gk?grOf(x):null,extra=[gk&&g!=null?(g===0?"valla invicta":g+(g===1?" gol recibido":" goles recibidos")):"",gk&&n(x.pa)?x.pa+(n(x.pa)===1?" penal atajado":" penales atajados"):"",n(x.goles)?x.goles+(n(x.goles)===1?" gol":" goles"):"",n(x.asist)&&!gk||gk&&n(x.asist)?x.asist+(n(x.asist)===1?" asistencia":" asistencias"):"",n(x.am)?"amarilla":"",n(x.ro)?"roja":""].filter(Boolean).join(" · ");
     return `<div class="li"><span class="res ${r}">${esc(x.gf)}-${esc(x.gc)}</span><div class="meta"><span class="nm">vs ${esc(x.rival)}</span><span class="sub">${esc(dS(pD(x.fecha)))}${x.comp?" · "+esc(x.comp):""}</span><span class="sub">${!x.convocado?"No convocado":m>0?(x.cond==="Titular"?"Titular":"Ingresó")+" · "+m+"'":"Convocado, no jugó"}${extra?" · "+esc(extra):""}</span></div></div>`}).join("")}</div>
   ${ps.length>6?`<button class="more" data-a="todos">${S.todos?"Ver menos":"Ver todos ("+ps.length+")"}</button>`:""}`:'<p class="empty">Aún no hay partidos registrados.</p>'}</section>`;
  // Asistencia
  const ss=(d.sesiones||[]).slice().sort((a,b)=>(pD(a.fecha)||0)-(pD(b.fecha)||0)),c=a=>ss.filter(x=>x.asistencia===a).length,base=c("Presente")+c("Ausente");
  h+=`<section class="sec"><h3>Mi asistencia</h3>${ss.length?`<div class="kpis"><div class="kpi"><b>${base?Math.round(c("Presente")/base*100)+"%":"–"}</b><span>Asistencia</span></div><div class="kpi"><b>${c("Presente")}</b><span>Presente</span></div><div class="kpi"><b>${c("Ausente")}</b><span>Ausente</span></div><div class="kpi"><b>${c("Justificado")+c("Lesionado")}</b><span>Justificado</span></div></div>
   <div class="pista" role="progressbar" aria-label="Asistencia" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${base?Math.round(c("Presente")/base*100):0}"><i style="width:${base?Math.round(c("Presente")/base*100):0}%"></i></div>
   <div class="dots" aria-label="Últimos entrenamientos">${ss.slice(-60).map(x=>`<i class="c-${["Presente","Ausente","Justificado","Lesionado"].includes(x.asistencia)?x.asistencia:"Otro"}" title="${esc(x.fecha+" · "+x.asistencia)}"></i>`).join("")}</div>
   <div class="legend">${["Presente","Ausente","Justificado","Lesionado"].map(a=>`<span><i class="c-${a}"></i>${a}</span>`).join("")}</div>`:'<p class="empty">Aún no hay entrenamientos registrados.</p>'}</section>`;
  // Tests (v4.3): nivel, puesto, medallas y mensaje. El puente solo envía la media, el podio y los que más mejoraron.
  h+=vUltimoTest(d);
  h+=d.testsEquipo?vMisTests(d):vMisTestsV17(d);
  h+=__logros425();
  h+=vMisMetas(d);
  h+=vMiBien(d);
  // v4.14 · Maniquí: el jugador marca dónde le duele (lo ve él, su familia y el entrenador)
  if(window.SIGE_SHELL!==false)h+=`<section class="sec"><div class="sec-h"><h3>¿Te duele algo?</h3></div><p class="hint" style="margin:0 0 8px">Marca en el cuerpo dónde sientes la molestia. Tu entrenador lo verá enseguida.</p><button class="btn" onclick="window.dispatchEvent(new CustomEvent('sige:ir',{detail:'cuerpo'}))">🧍 Marcar dónde me duele</button></section>`;
  // Evaluación
  const ev=(d.evaluaciones||[]).slice().sort((a,b)=>(pD(a.fecha)||0)-(pD(b.fecha)||0)),e=ev[ev.length-1];
  const AR=[["tecnico","Técnico"],["tactico","Táctico"],["fisico","Físico"],["psicosocial","Actitud"]];
  h+=`<section class="sec"><div class="sec-h"><h3>Mi evaluación</h3>${e?`<span class="hint">${esc(e.periodo||"")} · ${esc(dL(pD(e.fecha)))}</span>`:""}</div>${e?`${AR.map(([k,t])=>{const v=n(e[k]);return `<div class="area"><span>${t}</span><span class="sc">${[1,2,3,4,5].map(i=>`<i class="${v!=null&&i<=v?"on":""}"></i>`).join("")}</span><b>${v!=null?f1(v):"–"}</b></div>`}).join("")}
   <p class="hint">De 1 a 5: 3 es lo esperado para tu edad.</p>
   ${[["Fortalezas",e.fortalezas],["Para mejorar",e.mejorar],["Objetivo a corto plazo",e.objCorto],["Objetivo a mediano plazo",e.objMediano],["Objetivo a largo plazo",e.objLargo]].filter(x=>x[1]).map(x=>`<div class="txt"><span>${x[0]}</span>${esc(x[1])}</div>`).join("")}
   ${ev.length>1?`<div class="txt"><span>Evaluaciones anteriores</span>${ev.slice(0,-1).reverse().map(p=>`${esc(p.periodo||p.fecha)}: ${AR.map(([k,t])=>t+" "+(n(p[k])!=null?f1(n(p[k])):"–")).join(" · ")}`).join("<br>")}</div>`:""}`:'<p class="empty">Aún no tienes evaluaciones.</p>'}</section>`;
  h+=__perfilHoja()+__mcHoja();
  h+=`<div class="row" style="justify-content:space-between"><span class="hint">Actualizado ${esc(dL(new Date(S.stamp)))} ${new Date(S.stamp).toLocaleTimeString("es-CO",{hour:"numeric",minute:"2-digit"})}</span><button class="btn sm" data-a="upd" ${S.busy?"disabled":""}>${S.busy?"Actualizando…":"Actualizar"}</button></div>
   <button class="btn sm" data-a="salir" style="align-self:center">Salir de este teléfono</button>`;
  return h;
}
function render(){
  const d=S.d,club=d&&d.club,esc0=S.fotos&&S.fotos.escudo;
  document.getElementById("club").textContent=club?[String(club.nombre||"").replace(/^Jaguares de Córdoba$/i,"Jaguares"),club.categoria].filter(Boolean).join(" · "):"";
  document.getElementById("crest").innerHTML=esc0?`<img src="${esc0}" alt="">`:"";
  const dentro=!!(d&&(S.ses||memSes));
  document.body.classList.toggle("con-tabs",dentro);
  const ae=document.activeElement,aid=ae&&ae.id;
  document.getElementById("app").innerHTML=!dentro?vLogin():S.tab==="equipo"?vEquipo():S.tab==="muro"?vMuro():S.tab==="vivo"?vVivo():S.bf?vBienForm():vDatos();
  if(aid){const el=document.getElementById(aid);if(el&&el.tagName==="TEXTAREA"){el.focus();el.selectionStart=el.selectionEnd=el.value.length}}
  let nav=document.getElementById("tabs");
  if(dentro){if(!nav){nav=document.createElement("nav");nav.id="tabs";nav.className="tabs";document.body.appendChild(nav)}
    nav.innerHTML=`<div class="tabs-in">${[["prog","📈","Mi progreso"],["equipo","👥","Equipo"],["muro","🏆","Muro"],["vivo","⚽","En vivo"]].map(([k,i,l])=>`<button data-a="tab" data-v="${k}" ${S.tab===k?'aria-current="page"':""}><span>${i}</span>${l}${k==="prog"&&bienAviso()?'<i class="pt"></i>':""}${k==="vivo"&&S.vv&&S.vv.actual&&vivoEstado(S.vv).enJuego?'<i class="livedot"></i>':""}</button>`).join("")}</div>`}
  else if(nav)nav.remove();
  const f=document.getElementById("login");if(f)f.onsubmit=entrar;
  ventanaPerfil();
}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-a]");if(!t)return;
  if(__v422Clic(t))return;
  if(__v424Clic(t))return;
  if(__v425Clic(t))return;
  if(__v426Clic(t))return;
  if(__v427Clic(t))return;
  if(clicComunidad(t))return;
  if(t.dataset.a==="upd")actualizar();
  else if(t.dataset.a==="todos"){S.todos=!S.todos;render()}
  else if(t.dataset.a==="salir")api.salir()});

/* ============ Comunidad: Equipo, Muro y Mi perfil ============ */
if(location.hash==="#bienestar"){LS.set("abrirBien",1);LS.set("tab","prog");history.replaceState(null,"",location.pathname)}
S.tab=LS.get("tab","prog");if(/^#(vivo|muro|equipo|prog)$/.test(location.hash)){S.tab=location.hash.slice(1);LS.set("tab",S.tab);history.replaceState(null,"",location.pathname)}S.eq=LS.get("equipo",null);S.fx={};setTimeout(fxLocal,0);S.ver=null;S.eqBusy=false;S.pf=null;
const RX=[["aplauso","👏"],["fuego","🔥"],["fuerza","💪"],["corazon","❤️"],["balon","⚽"]];
const ICO={victoria:"🏆",resultado:"🏁",mvp:"⭐",gol:"⚽",hattrick:"⚽",asis:"🎯",valla:"🧤",debut:"🌟",test:"📈",cumple:"🎂",anuncio:"📣",promocion:"🚀",post:"💬"};
const BADGE={mvp:"⭐ MVP del partido",hattrick:"⚽⚽⚽ Hat-trick",debut:"🌟 Debut",cumple:"🎂 Cumpleaños",promocion:"🚀 Ascenso"};
const ERRP={texto_largo:"El texto pasa de 500 caracteres.",foto_invalida:"La foto no se pudo usar. Prueba con otra.",vacio:"Escribe algo o agrega una foto.",limite:"Ya hiciste 5 publicaciones hoy. Intenta mañana.",red:"Sin señal. Intenta de nuevo cuando tengas conexión."};
const ERRC={apodo_invalido:"Ese apodo no está en la lista.",desc_larga:"La descripción pasa de 280 caracteres.",vacio:"Elige un apodo o escribe una descripción.",limite:"Hiciste muchos cambios seguidos. Intenta más tarde.",red:"Sin señal. Intenta de nuevo cuando tengas conexión."};
function ses0(){return S.ses||memSes}
async function cargarEquipo(){
  const ses=ses0();if(!ses||S.eqBusy||!navigator.onLine)return;
  S.eqBusy=true;
  try{const r=await llamar(ses,{op:"jugEquipo"});S.eq=r;if(S.ses)LS.set("equipo",r);render();await cargarFotos()}
  catch(e){if(e.code==="operacion_desconocida")S.eqErr="El equipo y el muro estarán disponibles cuando el entrenador actualice el servicio.";}
  S.eqBusy=false;
}
async function cargarFotos(){
  const e=S.eq;if(!e)return;const H=(S.hist&&S.hist.d&&S.hist.d.items)||[];
  // v4.27.3 · prioridad: lo que se ve primero (mi portada, profe, muro) y después el resto del equipo
  await fxPedir([e.yo&&e.yo.banner,e.yo&&e.yo.bannerProp&&e.yo.bannerProp.foto,e.dt&&e.dt.foto,e.dt&&e.dt.banner,...e.muro.map(p=>p.foto),...(e.misPosts||[]).map(p=>p.foto),...__fotosVot(e),...H.map(p=>p.foto),...e.jugadores.map(j=>j.foto),...e.jugadores.map(j=>j.banner)]);
}
/* v4.27.3 · Fotos guardadas en el teléfono (IndexedDB, sin el límite de 5 MB del almacenamiento pequeño).
   Cada foto trae su versión (puente v40): al abrir la app se muestran al instante y solo se baja la que cambió. */
const FXDB={p:null,ver:{},ok:{}};
function fxAbrir(){if(FXDB.p)return FXDB.p;FXDB.p=new Promise(res=>{try{const q=indexedDB.open("sige-fotos",1);q.onupgradeneeded=()=>q.result.createObjectStore("f");q.onsuccess=()=>res(q.result);q.onerror=()=>res(null)}catch(x){res(null)}});return FXDB.p}
function fxGuardar(fotos,ver){
  Object.assign(S.fx,fotos);if(!S.ses)return;const ks=Object.keys(fotos);if(!ks.length)return;
  fxAbrir().then(db=>{if(!db)return;try{const st=db.transaction("f","readwrite").objectStore("f");ks.forEach(k=>{const v=(ver&&ver[k])||"";FXDB.ver[k]=v;st.put({d:fotos[k],v},k)})}catch(x){}})}
async function fxLocal(){
  const viejo=LS.get("fx",null);if(viejo){LS.del("fx");fxGuardar(viejo,{})} // las que estaban en el almacenamiento pequeño pasan al grande
  const db=await fxAbrir();if(!db)return;
  await new Promise(res=>{try{const q=db.transaction("f").objectStore("f").openCursor();let n=0;q.onsuccess=()=>{const c=q.result;if(!c){res();if(n)render();return}if(!S.fx[c.key]){S.fx[c.key]=c.value.d;n++}FXDB.ver[c.key]=c.value.v;c.continue()};q.onerror=()=>res()}catch(x){res()}})}
async function fxPedir(lista){
  const ses=ses0();if(!ses)return;const ids=[...new Set(lista.filter(x=>x&&!FXDB.ok[x]))];if(!ids.length)return;
  ids.forEach(k=>FXDB.ok[k]=1);const lotes=[];for(let i=0;i<ids.length;i+=6)lotes.push(ids.slice(i,i+6));let i=0;
  const trab=async()=>{while(i<lotes.length){const L=lotes[i++],have={};L.forEach(k=>{if(S.fx[k]&&FXDB.ver[k])have[k]=FXDB.ver[k]});
    try{const r=await llamar(ses,{op:"jugFotos",ids:L,have});const f=r.fotos||{};fxGuardar(f,r.ver||{});if(Object.keys(f).length)render()}
    catch(x){L.forEach(k=>delete FXDB.ok[k]);if(x.code==="red")return}}};
  await Promise.all([trab(),trab(),trab()])}
function fotoDe(id){return id&&S.fx[id]||null}
function avP(j,cls){const f=fotoDe(j.foto);return `<span class="avw ${cls||""}"><span class="av">${f?`<img src="${f}" alt="">`:esc(ini(j.nombre))}</span>${j.emo?`<span class="emo" aria-label="Emoji de hoy">${j.emo}</span>`:""}</span>`}
const GICO={musica:"🎵",hobbies:"🎮",equipo:"⚽",materia:"📚"};
function gustosHtml(tags){const G=(S.eq&&S.eq.gustos)||[];const b=G.filter(g=>(tags&&tags[g.k]||[]).length);if(!b.length)return "";
  return b.map(g=>`<div class="txt"><span>${GICO[g.k]||""} ${esc(g.t)}</span><div class="tg" style="margin-top:4px">${tags[g.k].map(x=>`<span>${esc(x)}</span>`).join("")}</div></div>`).join("")}
function statsTxt(j){const s=j.stats||{};return j.gk?[[s.pj,"Partidos"],[s.vallas,"Vallas invictas"],[s.pa,"Penales atajados"],[s.mvp,"MVP"]]:[[s.pj,"Partidos"],[s.goles,"Goles"],[s.asist,"Asistencias"],[s.mvp,"MVP"]]}
function vEquipoViejo(){
  const e=S.eq;
  if(!e)return `<section class="sec"><h2>Equipo</h2>${S.eqErr||!navigator.onLine?`<p class="empty">${esc(S.eqErr||"Sin señal: el equipo aparece cuando tengas conexión.")}</p>`:__ESQ}</section>`;
  // 07/11: el entrenador aparece en «Profesores» con una tarjeta como la de los compañeros; al tocarla se abre su perfil completo
  const dt=e.dt||{},w=String(dt.nombre||"").trim().split(/\s+/),corto=w.length>=4?w.slice(0,3).join(" "):dt.nombre||"";
  let h=`<section class="sec"><div class="sec-h"><h3>Profesores</h3><span class="hint">1</span></div><div class="grid2"><button class="pc prof" data-a="ver" data-id="DT">${avP({foto:dt.foto,nombre:dt.nombre,emo:dt.emo})}<b>${presDot(e.pres,"DT")}${esc(corto)}</b><small>Director técnico</small></button></div></section>`;
  const js=e.jugadores.slice().sort((a,b)=>(Number(a.dorsal)||999)-(Number(b.dorsal)||999));
  h+=`<section class="sec"><div class="sec-h"><h3>Compañeros</h3><span class="hint">${js.length}</span></div><div class="grid2">${js.map(j=>`<button class="pc" data-a="ver" data-id="${j.id}">${avP(j)}<b>${presDot(e.pres,j.id)}${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(j.nombre)}</b>${j.apodo?`<span class="apodo">${esc(j.apodo)}</span>`:""}<small>${esc(j.pos1||"")}</small></button>`).join("")}</div></section>`;
  return h;
}
function ventanaPerfil(){
  let el=document.getElementById("pf-ovl");
  if(S.ver==="DT"&&S.eq){if(!el){el=document.createElement("div");el.id="pf-ovl";el.className="ovl";document.body.appendChild(el)}
    const dt=S.eq.dt||{},bd=fotoDe(dt.banner);
    el.innerHTML=`<div class="box" role="dialog" aria-label="Perfil del entrenador"><div class="sec-h"><span></span><button class="btn sm" data-a="cerrar">Cerrar</button></div>
     ${bd?`<img class="bnr" src="${bd}" alt="">`:""}<div style="display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center${bd?";margin-top:-46px":""}">${avP({foto:dt.foto,nombre:dt.nombre,emo:dt.emo})}<h2>${esc(dt.nombre||"")}</h2><p class="hint" style="margin:0">${esc(dt.cargo||"Director técnico")}</p>${presLinea(S.eq.pres,"DT")}
     ${dt.nacimiento?`<p class="hint" style="margin:0">Nació el ${esc(dt.nacimiento)}</p>`:""}${dt.desde?`<p class="hint" style="margin:0">Entrenador desde ${esc(String(dt.desde).toLowerCase())}</p>`:""}</div>
     ${(dt.formacion||[]).length?`<div class="txt"><span>Formación</span>${dt.formacion.map(esc).join("<br>")}</div>`:""}${gustosHtml(dt.tags)}</div>`;
    return}
  const j=S.ver&&S.eq&&S.eq.jugadores.find(x=>x.id===S.ver);
  if(!j){if(el)el.remove();return}
  if(!el){el=document.createElement("div");el.id="pf-ovl";el.className="ovl";document.body.appendChild(el)}
  el.innerHTML=`<div class="box" role="dialog" aria-label="Perfil"><div class="sec-h"><span></span><button class="btn sm" data-a="cerrar">Cerrar</button></div>
   ${fotoDe(j.banner)?`<img class="bnr" src="${fotoDe(j.banner)}" alt="">`:""}<div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center${fotoDe(j.banner)?";margin-top:-46px":""}"><span class="mc-pfw">${avP(j)}${__mcEnPerfil(j)}</span><h2>${esc(j.nombre)}</h2>${j.apodo?`<span class="apodo" style="font-size:.9rem">${esc(j.apodo)}</span>`:""}<p class="hint">${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(j.pos1||"")}${j.pos2?" · "+esc(j.pos2):""}</p>${presLinea(S.eq.pres,j.id)}${__insHTML(j.insignias)}</div>
   ${j.desc?`<p style="margin:0;text-align:center;font-size:1.02rem">“${esc(j.desc)}”</p>`:""}${gustosHtml(j.tags)}
   <div class="kpis">${statsTxt(j).map(([v,l])=>`<div class="kpi"><b>${v||0}</b><span>${l}</span></div>`).join("")}</div><p class="hint" style="text-align:center">Temporada</p></div>`;
}
function vMuroViejo(){
  const e=S.eq;
  if(!e)return `<section class="sec"><h2>Muro</h2>${S.eqErr||!navigator.onLine?`<p class="empty">${esc(S.eqErr||"Sin señal: el muro aparece cuando tengas conexión.")}</p>`:__ESQ}</section>`;
  const porId={};e.jugadores.forEach(j=>porId[j.id]=j);
  let h=`<h2>Muro del equipo</h2>`+vCompositor();
  if(S.hist)return vMuroHist(porId);
  const pie=e.histN?`<button class="btn" data-a="hist" style="width:100%;margin-top:4px">🗂️ Ver publicaciones anteriores (${e.histN})</button>`:"";
  if(!e.muro.length)return h+`<section class="sec"><p class="empty">No hay publicaciones recientes. Aquí aparecerán los logros del equipo.</p></section>`+pie;
  return h+e.muro.map(p=>postHTML(p,porId,e)).join("")+pie;
}
/* v4.16 · Muro con caducidad: historial por mes (no se borra nada) */
function postHTMLViejo(p,porId,e){const j=porId[p.jug[0]],c=e.reac[p.id]||{},mia=e.mias[p.id];const f=j&&fotoDe(j.foto),esp=p.pronto?"🎂 Próximo cumpleaños":BADGE[p.tipo],eb=j&&j.emo?`<span class="emo">${j.emo}</span>`:"";
    const cab=p.tipo==="post"?`<div class="top2"><span class="avw sm"><span class="ic">${f?`<img src="${f}" alt="">`:"💬"}</span>${eb}</span><div style="flex:1;min-width:0"><b>${esc(p.autor||"")}</b><p class="hint">${esc(dL(pD(p.fecha)))}</p></div></div>${p.texto?`<p class="txtp">${esc(p.texto)}</p>`:""}${p.foto?(fotoDe(p.foto)?`<img class="pf" src="${fotoDe(p.foto)}" alt="Foto de la publicación">`:'<p class="hint">Cargando foto…</p>'):""}`
      :`${esp?`<span class="badge">${esp}</span>`:""}<div class="top2"><span class="avw sm"><span class="ic">${f?`<img src="${f}" alt="">`:ICO[p.tipo]||"⭐"}</span>${f?eb:""}</span><div style="flex:1;min-width:0"><b class="${esp?"big":""}">${!esp&&f?ICO[p.tipo]+" ":""}${esc(p.texto)}</b><p class="hint">${p.forma==="encuesta"?"Encuesta del entrenador · ":p.forma==="actividad"?"Actividad · ":p.tipo==="anuncio"?"Anuncio del entrenador · ":""}${esc(dL(pD(p.fecha)))}</p></div></div>`;
    const fm=p.forma?formaHTML(p):"";
    return `<article class="post ${esc(p.tipo)}">${p.fijado?'<span class="hint" style="font-weight:700">📌 Fijado por el entrenador</span>':""}${cab}${fm}<div class="rx">${RX.map(([k,i])=>`<button data-a="rx" data-ev="${esc(p.id)}" data-t="${k}" class="${mia===k?"on":""}" aria-label="${k}">${i}${c[k]?`<b>${c[k]}</b>`:""}</button>`).join("")}</div></article>`}
const MESES_H=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
function mesTxt(m){const [y,mm]=m.split("-");return MESES_H[+mm-1]+" "+y}
function vMuroHistViejo(porId){
  const e=S.eq,H=S.hist,d=H.d;
  let h=`<div class="row" style="gap:8px;align-items:center"><button class="btn sm" data-a="histx">← Volver al muro</button></div><h2>Publicaciones anteriores</h2>`;
  if(!d)return h+(H.err?`<p class="empty">${esc(H.err)}</p>`:__ESQ);
  if(!d.meses.length)return h+`<p class="empty">Aún no hay publicaciones anteriores.</p>`;
  h+=`<div class="row" style="gap:6px;flex-wrap:wrap">${d.meses.map(x=>`<button class="fchip" aria-pressed="${x.m===d.mes}" data-a="hist" data-v="${x.m}" ${H.busy?"disabled":""}>${esc(mesTxt(x.m))} · ${x.n}</button>`).join("")}</div>`;
  return h+(H.busy?`<p class="hint">Cargando…</p>`:"")+d.items.map(p=>postHTML(p,porId,e)).join("");
}
async function abrirHist(mes){
  const ses=ses0();if(!ses)return;
  if(!navigator.onLine){__dlg({modo:"avisar",texto:"Sin señal: el historial necesita conexión."});return}
  S.hist=S.hist||{};S.hist.busy=true;S.hist.err=null;render();if(!mes)window.scrollTo(0,0);
  try{const r=await llamar(ses,{op:"jugMuroHist",mes:mes||""});S.hist.d=r;const e=S.eq;Object.assign(e.reac,r.reac||{});Object.assign(e.mias,r.mias||{});await cargarFotos()}
  catch(x){S.hist.err=x.code==="operacion_desconocida"?"El historial estará disponible cuando el entrenador actualice el servicio.":"No se pudo cargar el historial."}
  S.hist.busy=false;render();
}
/* v4.14 · Encuestas, actividades y «conectado ahora» */
function presDot(P,id){const t=P&&P[id];return t&&Date.now()-t<180000?'<i title="Conectado ahora" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#2fb344;margin-right:5px;vertical-align:1px"></i>':""}
function presLinea(P,id){const t=P&&P[id];if(!t)return "";const m=Math.floor((Date.now()-t)/60000);return `<p class="hint" style="margin:0">${m<3?"🟢 Conectado ahora":"Última conexión: hace "+(m<60?m+" min":m<1440?Math.floor(m/60)+" h":Math.floor(m/1440)+" d")}</p>`}
function formaHTML(p){
  const B=S.resBusy===p.id?"disabled":"";
  if(p.enc){const E=p.enc,tot=E.total||0;
    return `<div class="enc" style="display:grid;gap:8px;margin:10px 0 4px">${E.opciones.map((o,i)=>{const n=E.n[i]||0,pc=tot?Math.round(n*100/tot):0,mia=E.mio===i;
      return `<button data-a="res" data-ev="${esc(p.id)}" data-v="${i}" ${E.cerrada?"disabled":B} style="position:relative;text-align:left;border:${mia?"2px solid var(--accent)":"1px solid var(--line)"};border-radius:12px;padding:10px 12px;background:var(--surface);color:inherit;font:inherit;overflow:hidden;cursor:pointer"><span style="position:absolute;inset:0;width:${pc}%;background:var(--sky-soft);z-index:0"></span><span style="position:relative;display:flex;justify-content:space-between;gap:8px"><span>${mia?"✓ ":""}${esc(o)}</span><b>${n}</b></span></button>`}).join("")}
      <p class="hint" style="margin:0">${tot} ${tot===1?"voto":"votos"}${E.cerrada?" · encuesta cerrada":E.mio!=null?" · puedes cambiar tu voto":" · toca una opción para votar"}${E.cierre&&!E.cerrada?" · cierra el "+esc(dL(new Date(E.cierre+"T12:00"))):""}</p></div>`}
  if(p.act){const A=p.act,mio=A.mio;
    return `<div style="margin:10px 0 4px;display:grid;gap:6px">${A.detalle?`<p style="margin:0">${esc(A.detalle)}</p>`:""}<p class="hint" style="margin:0">${esc([A.fecha&&dL(new Date(A.fecha+"T12:00")),A.hora,A.lugar].filter(Boolean).join(" · "))}${A.limite?" · responde hasta el "+esc(dL(new Date(A.limite+"T12:00"))):""}</p>
      ${A.cerrada?'<p class="hint" style="margin:0"><b>Inscripciones cerradas</b></p>':`<div style="display:flex;gap:8px"><button class="btn ${mio==="si"?"pri":""}" data-a="res" data-ev="${esc(p.id)}" data-v="si" ${A.lleno&&mio!=="si"?"disabled":B}>✓ Voy</button><button class="btn ${mio==="no"?"pri":""}" data-a="res" data-ev="${esc(p.id)}" data-v="no" ${B}>No voy</button></div>`}
      <p style="margin:0;font-size:.92rem"><b>Van${A.cupo?` (${A.van.length}/${A.cupo})`:` (${A.van.length})`}:</b> ${esc(A.van.join(", ")||"nadie aún")}${A.lleno?" · cupos llenos":""}</p>${A.noVan?`<p class="hint" style="margin:0">${A.noVan} no ${A.noVan===1?"va":"van"}</p>`:""}</div>`}
  return "";
}
async function responder(ev,v){
  const e=S.eq,ses=ses0();if(!e||!ses)return;
  if(!navigator.onLine){__dlg({modo:"avisar",texto:"Sin señal: intenta cuando tengas conexión."});return}
  const p=e.muro.find(x=>x.id===ev);if(!p)return;
  let val=p.enc?Number(v):v;if(p.enc&&p.enc.mio===val)return;if(p.act&&p.act.mio===val)val=null;
  S.resBusy=ev;render();
  try{const r=await llamar(ses,{op:"jugResponder",id:ev,v:val});if(r.item){Object.assign(p,r.item);if(S.ses)LS.set("equipo",e)}}
  catch(x){__dlg({modo:"avisar",texto:x.code==="sin_cupo"?"Ya no hay cupos.":x.code==="cerrada"?"Ya no se reciben respuestas.":ERRC[x.code]||"No se pudo guardar tu respuesta."})}
  S.resBusy=null;render();
}
async function reaccionar(ev,t){
  const e=S.eq,ses=ses0();if(!e||!ses)return;
  if(!navigator.onLine){__dlg({modo:"avisar",texto:"Sin señal: intenta cuando tengas conexión."});return}
  const prev=e.mias[ev]||null,nuevo=prev===t?null:t,c=e.reac[ev]=e.reac[ev]||{};
  if(prev)c[prev]=Math.max(0,(c[prev]||1)-1);if(nuevo)c[nuevo]=(c[nuevo]||0)+1;if(nuevo)e.mias[ev]=nuevo;else delete e.mias[ev];render();
  try{await llamar(ses,{op:"jugReaccion",ev,tipo:nuevo});if(S.ses)LS.set("equipo",e)}
  catch(x){if(nuevo)c[nuevo]--;if(prev){c[prev]=(c[prev]||0)+1;e.mias[ev]=prev}else delete e.mias[ev];render();__dlg({modo:"avisar",texto:ERRC[x.code]||"No se pudo guardar la reacción."})}
}
S.pub=null;
function vCompositor(){
  const e=S.eq,mis=(e&&e.misPosts)||[];
  let h="";
  if(!S.pub)h+=`<button class="btn pri" data-a="pub-abrir">✍️ Publicar algo</button>`;
  else h+=`<section class="sec"><h3>Nueva publicación</h3><p class="hint">El entrenador la revisa antes de que la vea el equipo.</p>
    <textarea id="pub-txt" class="ta" maxlength="500" placeholder="Cuéntale algo al equipo…">${esc(S.pub.texto)}</textarea><span class="hint" id="pub-cnt">${S.pub.texto.length}/500</span>
    ${S.pub.foto?`<img class="prevw" src="${S.pub.foto}" alt="Vista previa"><button class="btn sm" data-a="pub-sinfoto">Quitar foto</button>`:`<label class="btn sm" style="display:inline-flex;align-items:center;justify-content:center;align-self:flex-start">📷 Agregar foto<input type="file" id="pub-foto" accept="image/*" hidden></label>`}
    <div class="row"><button class="btn" data-a="pub-cancelar">Cancelar</button><button class="btn pri" data-a="pub-enviar" ${S.pubBusy?"disabled":""}>${S.pubBusy?"Enviando…":"Enviar al entrenador"}</button></div></section>`;
  if(mis.length)h+=`<section class="sec"><h3>Tus publicaciones</h3>${mis.map(m=>`<div class="post"><span class="chip ${m.estado==="rechazado"?"w":"b"}" style="align-self:flex-start">${m.estado==="rechazado"?"No aprobada":"Esperando aprobación"}</span>${m.texto?`<p class="txtp">${esc(m.texto)}</p>`:""}${m.foto&&fotoDe(m.foto)?`<img class="pf" src="${fotoDe(m.foto)}" alt="">`:""}${m.estado==="rechazado"&&m.motivo?`<p class="hint">Motivo: ${esc(m.motivo)}</p>`:""}</div>`).join("")}</section>`;
  return h;
}
function comprimir(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file),im=new Image();im.onload=()=>{let max=1280,q=.74,out="";for(let i=0;i<4;i++){const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",q);if(out.length<300000)break;max*=.8;q-=.08}URL.revokeObjectURL(u);res(out)};im.onerror=()=>{URL.revokeObjectURL(u);rej()};im.src=u})}
async function enviarPub(){
  const ses=ses0(),P=S.pub;if(!ses||!P)return;
  if(!P.texto.trim()&&!P.foto){__dlg({modo:"avisar",texto:ERRP.vacio});return}
  S.pubBusy=true;render();
  try{await llamar(ses,{op:"jugPublicar",texto:P.texto,foto:P.foto||""});S.pub=null;__toast("¡Enviada! El entrenador la revisará.");S.pubBusy=false;await cargarEquipo()}
  catch(x){__dlg({modo:"avisar",texto:ERRP[x.code]||"No se pudo enviar."})}
  S.pubBusy=false;render();
}
document.addEventListener("input",ev=>{if(ev.target.id==="pub-txt"&&S.pub){S.pub.texto=ev.target.value;const c=document.getElementById("pub-cnt");if(c)c.textContent=ev.target.value.length+"/500"}});
document.addEventListener("change",async ev=>{if(ev.target.id!=="pub-foto"||!S.pub)return;const f=ev.target.files&&ev.target.files[0];if(!f)return;try{S.pub.foto=await comprimir(f);render()}catch(x){__dlg({modo:"avisar",texto:ERRP.foto_invalida})}});
function vGustos(){
  const e=S.eq,y=e&&e.yo;if(!y||!e.emojis)return "";
  const gu=S.gu||(S.gu=JSON.parse(JSON.stringify(y.tags||{})));
  return `<section class="sec" id="mi-emoji" style="scroll-margin-top:72px"><div class="sec-h"><h3>Mi emoji</h3>${y.emo?`<span style="font-size:1.6rem">${y.emo}</span>`:""}</div><p class="hint">Se ve junto a tu foto hasta que lo cambies o lo quites.</p>
    <div class="emogrid">${e.emojis.map(x=>`<button data-a="emo" data-v="${x}" class="${y.emo===x?"on":""}" ${S.guBusy?"disabled":""}>${x}</button>`).join("")}</div>${y.emo?`<button class="btn sm" data-a="emo" data-v="" style="align-self:flex-start">Quitar emoji</button>`:""}</section>
   <section class="sec"><h3>Mis gustos</h3><p class="hint">Elige lo que más te gusta. Tus compañeros lo ven en tu perfil.</p>
    ${(e.gustos||[]).map(g=>{const sel=gu[g.k]||[];return `<div class="txt"><span>${GICO[g.k]||""} ${esc(g.t)} · ${sel.length}/${g.max}</span><div class="tg" style="margin-top:6px">${g.l.map(x=>{const on=sel.includes(x);return `<button data-a="tag" data-k="${g.k}" data-v="${esc(x)}" class="${on?"on":""}" ${!on&&sel.length>=g.max&&g.max>1?"disabled":""}>${esc(x)}</button>`}).join("")}</div></div>`}).join("")}
    <button class="btn pri" data-a="gustos-guardar" ${S.guBusy?"disabled":""}>${S.guBusy?"Guardando…":"Guardar mis gustos"}</button></section>`;
}
async function guardarGustos(body,ok){
  const ses=ses0();if(!ses)return;if(!navigator.onLine){__dlg({modo:"avisar",texto:ERRC.red});return}
  S.guBusy=true;render();
  try{const r=await llamar(ses,Object.assign({op:"jugGustos"},body));const y=S.eq.yo;y.emo=r.emo;y.tags=r.tags;S.gu=JSON.parse(JSON.stringify(r.tags||{}));const me=S.eq.jugadores.find(j=>j.id===y.id);if(me){me.emo=r.emo;me.tags=r.tags}if(S.ses)LS.set("equipo",S.eq);if(ok)__toast(ok)}
  catch(x){__dlg({modo:"avisar",texto:x.code==="limite"?ERRC.limite:x.code==="emoji_invalido"?"Ese emoji no está disponible.":ERRC.red})}
  S.guBusy=false;render();
}
function vMiPerfil(){
  const e=S.eq;if(!e||!e.yo)return "";
  const y=e.yo,pf=S.pf||(S.pf={apodo:(y.prop&&y.prop.apodo)||y.apodo||"",desc:(y.prop&&y.prop.desc)||y.desc||""});
  return `<section class="sec" id="mi-perfil" style="scroll-margin-top:72px"><div class="sec-h"><h3>Apodo y algo sobre mí</h3>${y.prop?'<span class="chip w">Esperando aprobación</span>':y.apodo||y.desc?'<span class="chip ok">Aprobado</span>':""}</div>
   <p class="hint">Así te ven tus compañeros en Equipo. El entrenador aprueba el apodo y la descripción antes de que se vean.</p>
   ${y.rech?`<div class="banner err">El entrenador no aprobó tu última propuesta${y.rech.motivo?": "+esc(y.rech.motivo):"."}</div>`:""}
   ${!y.visible?'<div class="banner warn">Por ahora tu perfil no se muestra al equipo.</div>':""}
   <label class="f">Apodo<select id="pf-apodo" class="sel"><option value="">Sin apodo</option>${(e.apodos||[]).map(a=>`<option ${a===pf.apodo?"selected":""}>${esc(a)}</option>`).join("")}</select></label>
   <label class="f">Algo sobre mí <span id="pf-cnt" style="text-transform:none;letter-spacing:0;font-weight:500">(${pf.desc.length}/280)</span><textarea id="pf-desc" class="ta" maxlength="280" placeholder="Ej.: Me gusta jugar por la banda y mi ídolo es…">${esc(pf.desc)}</textarea></label>
   <button class="btn pri" data-a="pf-enviar" ${S.pfBusy?"disabled":""}>${S.pfBusy?"Enviando…":"Enviar para aprobación"}</button></section>${vMiBanner()}${vGustos()}`;
}
async function enviarPerfil(){
  const ses=ses0(),pf=S.pf;if(!ses||!pf)return;
  if(!pf.apodo&&!pf.desc.trim()){__dlg({modo:"avisar",texto:ERRC.vacio});return}
  S.pfBusy=true;render();
  try{const r=await llamar(ses,{op:"jugPerfil",apodo:pf.apodo,desc:pf.desc});S.eq.yo.prop=r.prop;S.eq.yo.rech=null;if(S.ses)LS.set("equipo",S.eq);__toast("¡Listo! El entrenador revisará tu perfil.")}
  catch(x){__dlg({modo:"avisar",texto:ERRC[x.code]||"No se pudo enviar."})}
  S.pfBusy=false;render();
}
document.addEventListener("input",ev=>{const t=ev.target;if(!S.pf)return;if(t.id==="pf-desc"){S.pf.desc=t.value;const c=document.getElementById("pf-cnt");if(c)c.textContent="("+t.value.length+"/280)"}if(t.id==="pf-apodo")S.pf.apodo=t.value});
function clicComunidad(t){
  const a=t.dataset.a;
  if(a&&a.indexOf("bn-")===0){clicBien(t);return true}
  if(a==="tab"){S.hist=null;S.tab=t.dataset.v;LS.set("tab",S.tab);render();window.scrollTo(0,0);if(S.tab==="vivo")cargarVivo(true);else if(S.tab!=="prog")cargarEquipo();return true}
  if(a==="animo"){animo();return true}
  if(a==="aplauso"){aplaudir(t.dataset.ev,t.dataset.t);return true}
  if(a==="ver"){S.ver=t.dataset.id;ventanaPerfil();return true}
  if(a==="cerrar"){S.ver=null;ventanaPerfil();return true}
  if(a==="rx"){reaccionar(t.dataset.ev,t.dataset.t);return true}
  if(a==="hist"){abrirHist(t.dataset.v||"");return true}
  if(a==="histx"){S.hist=null;render();window.scrollTo(0,0);return true}
  if(a==="res"){responder(t.dataset.ev,t.dataset.v);return true}
  if(a==="pf-enviar"){enviarPerfil();return true}
  if(a==="bnr-subir"){const i=document.getElementById("bnr-file");if(i)i.click();return true}
  if(a==="bnr-quitar"){quitarBanner();return true}
  if(a==="emo"){guardarGustos({emo:t.dataset.v||null});return true}
  if(a==="tag"){const g=(S.eq.gustos||[]).find(x=>x.k===t.dataset.k),v=t.dataset.v,arr=S.gu[g.k]=S.gu[g.k]||[];const i=arr.indexOf(v);if(i>=0)arr.splice(i,1);else if(g.max===1)arr.splice(0,1,v);else if(arr.length<g.max)arr.push(v);render();return true}
  if(a==="gustos-guardar"){guardarGustos({tags:S.gu},"¡Listo! Tus gustos ya se ven en tu perfil.");return true}
  if(a==="pub-abrir"){S.pub={texto:"",foto:null};render();return true}
  if(a==="pub-cancelar"){S.pub=null;render();return true}
  if(a==="pub-sinfoto"){S.pub.foto=null;render();return true}
  if(a==="pub-enviar"){enviarPub();return true}
  return false;
}
document.addEventListener("click",ev=>{if(ev.target.id==="pf-ovl"){S.ver=null;ventanaPerfil()}});
setInterval(()=>{if(document.visibilityState==="visible"&&S.tab!=="prog")cargarEquipo()},60000);

/* ============ En vivo (SIGE Jaguares): el partido activo minuto a minuto ============ */
S.vv=LS.get("vivo",null);S.vvT=0;S.reacPend=[];
/* v4.16 · Día de partido: cada teléfono consulta en su propio momento (12–18 s) y, si el puente se satura, espera más (hasta 1 min) sin mostrar errores */
const VV_JIT=Math.floor(Math.random()*6000);S.vvFail=0;S.vvNext=0;
async function cargarVivo(force){
  const ses=ses0();if(!ses||!navigator.onLine||(S.vvBusy))return;if(!force&&(Date.now()-S.vvT<12000+VV_JIT||Date.now()<S.vvNext))return;
  S.vvBusy=true;
  try{const body={op:"jugVista"};if(S.reacPend.length){body.reac=S.reacPend.slice(0,40)}const r=await llamar(ses,body);if(body.reac)S.reacPend=S.reacPend.slice(body.reac.length);S.vv=r;S.vvT=Date.now();S.vvFail=0;S.vvNext=0;if(S.ses)LS.set("vivo",r);try{if(window.SIGE&&window.SIGE.gol)window.SIGE.gol.procesar(r)}catch(e){}if(S.tab==="vivo"||r.actual)render();cargarFotosVivo()}
  catch(e){if(e.code==="operacion_desconocida")S.vvErr="El partido en vivo estará disponible cuando el entrenador actualice el servicio.";else{S.vvFail++;S.vvNext=Date.now()+Math.min(60000,4000*2**S.vvFail)+Math.random()*4000}}
  S.vvBusy=false;
}
async function cargarFotosVivo(){const v=S.vv;if(!v)return;const ses=ses0();const ids=[...new Set([v.marca&&v.marca.logo,...Object.values(v.fotos||{}),escRival(v)].filter(x=>x&&!S.fx[x]))];if(!ids.length)return;await fxPedir(ids)}
function escKey(s){return String(s||"").split(" · ")[0].normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim()}
function escRival(v){const E=v.escudos||{},L=E.lista||[],k=escKey(v.partido&&v.partido.rival);if(!k)return null;const al=(E.alias||{})[k];if(al==="none")return null;if(al&&L.some(e=>e.id===al))return al;const f=L.filter(e=>escKey(e.nombre)===k);return f.length===1?f[0].id:null}
function vivoEstado(v){const p=v.partido||{},r=p.reloj||{},dur=Number(p.duracion)||80,h=dur/2,now=Date.now(),ep=p.estadoPartido;
  if(r.fin2)return {txt:ep&&ep.estado&&ep.estado!=="Finalizado"?(ep.oficial&&ep.quien==="rival"?"Final · abandono del rival":ep.oficial&&ep.quien==="nuestro"?"Final · abandono":ep.estado):"Final",fin:true};
  if(r.inicio2){const m=Math.floor((now-r.inicio2)/60000);return {txt:(h+Math.min(m,h)+1)+"'"+(m>=h?" +"+(m-h+1):"")+" · 2.º tiempo",enJuego:true}}
  if(r.fin1)return {txt:"Entretiempo",enJuego:true};
  if(r.inicio1){const m=Math.floor((now-r.inicio1)/60000);return {txt:(Math.min(m,h)+1)+"'"+(m>=h?" +"+(m-h+1):"")+" · 1.er tiempo",enJuego:true}}
  return {txt:"Por empezar"}}
function vVivo(){
  const v=S.vv;
  if(!v)return `<section class="sec"><h2>En vivo</h2>${S.vvErr||!navigator.onLine?`<p class="empty">${esc(S.vvErr||"Sin señal: el partido aparece cuando tengas conexión.")}</p>`:__ESQ}</section>`;
  if(!v.actual)return `<section class="sec"><h2>En vivo</h2><p class="empty">No hay un partido en juego. Cuando el entrenador active el partido, aquí lo verás minuto a minuto.</p></section>${__golBtn()}`;
  const p=v.partido||{},jug={};(v.jugadores||[]).forEach(j=>jug[j.id]=j);const nm=id=>{const j=jug[id];return j?(j.dorsal?j.dorsal+" · ":"")+j.nombre:""};
  const evs=(v.eventos||[]).slice().sort((a,b)=>(b.periodo-a.periodo)||(b.minuto-a.minuto)||(b.ts-a.ts));
  /* v4.22.3 · Abandono: se muestra el resultado oficial */const epO=(v.partido||{}).estadoPartido,ofO=epO&&epO.estado==="Abandonado"&&epO.oficial;
  const gf=ofO?Number(ofO.gf):evs.filter(e=>e.tipo==="gol").length,gc=ofO?Number(ofO.gc):evs.filter(e=>e.tipo==="gol_rival").length,est=vivoEstado(v);
  const loc=p.localia!=="Visitante",logo=v.marca&&v.marca.logo&&fotoDe(v.marca.logo),er=escRival(v),erf=er&&fotoDe(er);
  const nos=`<div class="tm">${logo?`<img src="${logo}" alt="">`:`<span class="esc"><img class="esc-d" src="${api.base}escudo-dia.png" alt=""><img class="esc-n" src="${api.base}escudo-noche.png" alt=""></span>`}<span>Jaguares</span></div>`,riv=`<div class="tm">${erf?`<img src="${erf}" alt="">`:`<span class="esc" aria-hidden="true">${esc((p.rival||"R").trim().charAt(0).toUpperCase())}</span>`}<span>${esc(p.rival||"Rival")}</span></div>`;
  const TX={gol:__ic("balon")+"Gol",gol_rival:__ic("balon")+"Gol del rival",amarilla:__ic("amarilla")+"Amarilla",roja:__ic("roja")+"Roja",cambio:__ic("cambio")+"Cambio",penal_atajado:__ic("penal")+"Penal atajado",atencion:__ic("medica")+"Atención médica",formacion:__ic("forma")+"Cambio de formación",intercambio:__ic("cambio")+"Cambio de posición"};
  const ap=(v.aplausos&&v.aplausos.ev)||{};
  let h=`<div class="board">${loc?nos:riv}<div ${__golSc()}>${loc?gf:gc} - ${loc?gc:gf}<small>${est.enJuego?'<span class="enlive"><i class="livedot" aria-hidden="true"></i>En vivo</span>':""}<span>${esc(est.txt)}</span></small></div>${loc?riv:nos}</div>`;
  if(p.competicion||p.lugar)h+=`<p class="hint" style="text-align:center">${esc([p.competicion,p.lugar,p.formacion?"Formación "+p.formacion:""].filter(Boolean).join(" · "))}</p>`;
  h+=__golBtn();
  if(v.fans)h+=`<button class="btn pri" data-a="animo">¡Vamos Jaguares!${v.aplausos&&v.aplausos.animo?` <b>${v.aplausos.animo}</b>`:""}</button>`;
  h+=`<section class="sec"><h3>Minuto a minuto</h3>${evs.length?`<div class="tl">${evs.map(e=>{let d="";
      if(e.tipo==="gol")d=e.jugador?nm(e.jugador)+(e.penal?" · de penal":"")+(e.rel?` · asistencia de ${nm(e.rel)}`:""):"Autogol del rival";else if(e.tipo==="gol_rival"&&(e.penal||e.ag))d=[e.penal?"De penal":"",e.ag?"Autogol":""].filter(Boolean).join(" · ");else if(e.tipo==="intercambio")d=`${nm(e.jugador)} ⇄ ${nm(e.rel)}`;else if(e.tipo==="cambio")d=`Entra ${nm(e.rel)} · sale ${nm(e.jugador)}`;else if(e.tipo==="formacion")d=e.formacion||"";else if(e.jugador)d=nm(e.jugador);
      const c=ap[e.id]||{};
      return `<div class="ev"><b class="m">${e.minuto?e.minuto+"'":""}</b><div><b>${TX[e.tipo]||esc(e.tipo)}</b>${d?`<p class="hint" style="color:var(--ink)">${esc(d)}</p>`:""}${v.fans&&e.tipo==="gol"?`<div class="rx" style="margin-top:6px">${[["aplauso",__ic("aplauso","")],["fuego",__ic("fuego","")],["corazon",__ic("corazon","")]].map(([k,i])=>`<button data-a="aplauso" data-ev="${esc(e.id)}" data-t="${k}" aria-label="Reacción: ${k}">${i}${c[k]?`<b>${c[k]}</b>`:""}</button>`).join("")}</div>`:""}</div></div>`}).join("")}</div>`:'<p class="empty">Aún no hay eventos.</p>'}</section>`;
  const tit=(p.titulares||[]).filter(Boolean),sup=(p.convocados||[]).filter(id=>!tit.includes(id));
  if(tit.length)h+=`<section class="sec"><h3>Titulares</h3><p style="margin:0">${tit.map(nm).filter(Boolean).map(esc).join("<br>")}</p>${sup.length?`<h3 style="margin-top:8px">Suplentes</h3><p style="margin:0">${sup.map(nm).filter(Boolean).map(esc).join("<br>")}</p>`:""}</section>`;
  h+=`<p class="hint" style="text-align:center">Se actualiza solo cada 15 segundos.</p>`;
  return h;
}
function animo(){S.reacPend.push({e:"_animo"});if(S.vv&&S.vv.aplausos)S.vv.aplausos.animo=(S.vv.aplausos.animo||0)+1;render();cargarVivo(true)}
function aplaudir(ev,t){S.reacPend.push({e:ev,t});const ap=S.vv&&S.vv.aplausos;if(ap){const c=(ap.ev[ev]=ap.ev[ev]||{});c[t]=(c[t]||0)+1}render();cargarVivo(true)}
setInterval(()=>{if(document.visibilityState!=="visible"||!ses0())return;if(S.tab==="vivo")cargarVivo(false);else if(Date.now()-S.vvT>60000)cargarVivo(true)},15000);
setInterval(()=>{if(S.tab==="vivo"&&S.vv&&S.vv.actual)render()},30000);
addEventListener("online",()=>{if(S.offline)actualizar()});
/* ============ v4.2 · Bienestar semanal (reemplaza el Google Forms) ============
   Solo el propio jugador ve su respuesta de la semana. Nunca se muestra en Equipo, Muro ni En vivo. */
const BQ=[
 {k:"c",t:"¿Cómo dormiste esta semana?",a:"Muy mal",b:"Muy bien"},
 {k:"d",t:"¿Cuántas horas dormiste por noche, en promedio?",o:[[5,"Menos de 6"],[6,"6 horas"],[7,"7 horas"],[8,"8 horas"],[9,"9 o más"]]},
 {k:"e",t:"¿Cómo te alimentaste?",a:"Comí mal o salté comidas",b:"Comí bien todos los días"},
 {k:"f",t:"¿Cuánta agua tomaste?",a:"Casi nada",b:"Bastante, todos los días"},
 {k:"g",t:"¿Cómo sientes tu cuerpo?",a:"Muy cansado o pesado",b:"Fresco y con energía"},
 {k:"h",t:"¿Tienes alguna molestia o dolor?",o:[["Ninguna","Ninguna"],["Leve, entreno normal","Leve, entreno normal"],["Moderada, me molesta al entrenar","Moderada, me molesta al entrenar"],["Fuerte, no puedo entrenar bien","Fuerte, no puedo entrenar bien"]]},
 {k:"i",t:"¿Cómo estuvo tu ánimo?",a:"Triste o desmotivado",b:"Muy animado"},
 {k:"j",t:"¿Qué tan tranquilo te sentiste con el colegio, la casa y el equipo?",a:"Muy estresado",b:"Muy tranquilo"},
 {k:"k",t:"¿Qué tan dura fue la semana de entrenamiento?",a:"Muy suave",b:"Muy dura"},
 {k:"l",t:"¿Algo más que quieras contarle al profe?",libre:1}
];
const ERRB={aun_no_abre:"El formulario de esta semana todavía no abre.",cerrado:"El formulario de esta semana ya cerró. El lunes abre el nuevo.",respuesta_invalida:"Revisa las respuestas e intenta de nuevo.",texto_largo:"El comentario pasa de 500 caracteres.",no_aplica:"Este formulario es solo para jugadores activos.",red:"Sin señal. Tus respuestas siguen aquí; intenta de nuevo cuando tengas conexión."};
S.bn=LS.get("bien",null);S.bf=null;
function bienTxt(q,v){if(v==null||v==="")return "—";if(q.o){const o=q.o.find(x=>String(x[0])===String(v));return o?o[1]:String(v)}if(q.libre)return String(v);return v+" de 5"}
// Plazo (DT, 06/11): responder el viernes después del último entrenamiento; se recibe hasta el sábado. El domingo está cerrado.
// Aviso: viernes desde las 5:00 p. m. y todo el sábado, si falta responder (hora del teléfono)
function bienPlazo(){const p=S.bn&&S.bn.semana&&S.bn.semana.plazo;return p>=4&&p<=6?p:5}
const DIA_PL=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
function bienCerrado(){return !!(S.bn&&S.bn.semana&&(S.bn.semana.cerrado||(new Date().getDay()+6)%7>bienPlazo()))}
// v36: el DT elige día y hora de apertura (por defecto viernes 5:00 p. m.); antes no se puede responder
function bienAntes(){const s=S.bn&&S.bn.semana;return !!(s&&s.abre&&Date.now()<s.abre)}
function bienAbreTxt(){const d=new Date(S.bn.semana.abre);return DIA_PL[(d.getDay()+6)%7]+" a las "+d.toLocaleTimeString("es-CO",{hour:"numeric",minute:"2-digit"})}
function bienAviso(){if(!S.bn||S.bn.no||S.bn.respuesta||bienCerrado()||bienAntes())return false;if(S.bn.semana&&S.bn.semana.abre)return true;const d=new Date(),w=d.getDay();const ix=(w+6)%7;return (ix===4&&d.getHours()>=17)||(ix>4&&ix<=bienPlazo())}
function marcarPend(){try{localStorage.setItem("mp1:bienPend",bienAviso()?"1":"0");window.dispatchEvent(new Event("sige:pend"))}catch(e){}}
async function cargarBien(){
  const ses=ses0();if(!ses)return;
  try{const r=await llamar(ses,{op:"jugBienestar",modo:"ver"});S.bn={semana:r.semana,respuesta:r.respuesta,t:Date.now()};if(S.ses)LS.set("bien",S.bn)}
  catch(e){if(e.code==="operacion_desconocida"||e.code==="no_aplica"||e.code==="sin_hoja_bienestar")S.bn={no:true};}
  marcarPend();
  if(LS.get("abrirBien",0)&&S.bn&&!S.bn.no){LS.del("abrirBien");S.tab="prog";LS.set("tab","prog");if(!bienCerrado()&&!bienAntes())abrirBien()}
  else if(LS.get("abrirBien",0)&&S.bn&&S.bn.no)LS.del("abrirBien");
  render();
}
function abrirBien(){const prev=S.bn&&S.bn.respuesta;S.bf={paso:0,r:prev?Object.assign({},prev):{},err:null,busy:false};if(prev)S.bf.paso=BQ.length;window.scrollTo(0,0)}
function fechaCierre(){const c=S.bn&&S.bn.semana&&S.bn.semana.cierre;if(!c)return "";const d=new Date(c+"T12:00:00");return DIA[d.getDay()]+" "+d.getDate()+" "+MES[d.getMonth()]}
function vBienCard(){
  const b=S.bn;if(!b||b.no||!b.semana)return "";
  const w=new Date().getDay(),cerr=bienCerrado();
  if(b.respuesta){const d=b.respuesta.en?new Date(b.respuesta.en):null;
    return `<section class="sec bn-card ok"><div class="sec-h" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><h3 style="margin:0">Bienestar de la semana</h3><p class="hint" style="margin:4px 0 0">✅ Ya respondiste${d?" el "+esc(DIA[d.getDay()]+" "+d.getDate()+" "+MES[d.getMonth()]):""}.${cerr?"":" Puedes corregir hasta el "+esc(fechaCierre())+"."}</p></div>${cerr?"":'<button class="btn sm" data-a="bn-abrir">Corregir</button>'}</div>${S.bnMsg?`<div class="banner" style="margin-top:8px;background:var(--surface-2)">${esc(S.bnMsg)}</div>`:""}</section>`}
  if(cerr)return `<section class="sec bn-card ok"><h3>Bienestar de la semana</h3><p class="hint">El formulario de esta semana cerró el ${DIA_PL[bienPlazo()]}. El lunes abre el de la nueva semana.</p></section>`;
  if(bienAntes())return `<section class="sec bn-card ok"><h3>Bienestar de la semana</h3><p class="hint">Abre el <b>${esc(bienAbreTxt())}</b> y se recibe hasta el ${DIA_PL[bienPlazo()]}. Respóndelo después del último entrenamiento.</p></section>`;
  const msg=w===6?'<div class="banner warn" style="margin-bottom:10px"><b>Último día:</b> hoy es el último día para responder.</div>'
    :w===5?`<div class="banner warn" style="margin-bottom:10px"><b>Hoy es el día:</b> respóndelo después del entrenamiento.</div>`:"";
  const sub=w===5||w===6||(w===0&&bienPlazo()===6)?"10 preguntas, 2 minutos. Solo lo ve el profe; tus compañeros no.":"Respóndelo el <b>viernes, después del último entrenamiento</b> (se recibe hasta el "+DIA_PL[bienPlazo()]+"). 10 preguntas, 2 minutos. Solo lo ve el profe; tus compañeros no.";
  return `<section class="sec bn-card">${msg}<h3>Bienestar de la semana</h3><p class="hint">${sub}</p><button class="btn pri" data-a="bn-abrir" style="width:100%;margin-top:6px">Responder</button></section>`;
}
function vBienForm(){
  const f=S.bf,tot=BQ.length,fin=f.paso>=tot,q=BQ[Math.min(f.paso,tot-1)];
  let h=`<section class="sec"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><h3 style="margin:0">Bienestar de la semana</h3><button class="btn sm" data-a="bn-cancelar">Cancelar</button></div>
   <div class="bn-prog" aria-hidden="true"><i style="width:${Math.round(Math.min(f.paso,tot)/tot*100)}%"></i></div>`;
  if(!fin){
    h+=`<p class="hint" style="margin:0">Pregunta ${f.paso+1} de ${tot}${q.libre?" · opcional":""}</p><h2 class="bn-q">${esc(q.t)}</h2>`;
    if(q.libre)h+=`<p class="hint">Si tienes una molestia, dinos dónde (rodilla, tobillo…).</p><textarea id="bn-l" maxlength="500" placeholder="Escribe aquí (opcional)">${esc(f.r.l||"")}</textarea><p class="hint" style="text-align:right"><span id="bn-cnt">${(f.r.l||"").length}</span>/500</p><button class="btn pri" data-a="bn-sig" style="width:100%;margin-top:8px">Siguiente</button>`;
    else if(q.o)h+=`<div class="bn-ops">${q.o.map(([v,l])=>`<button class="bn-op" data-a="bn-op" data-v="${esc(v)}" aria-pressed="${String(f.r[q.k])===String(v)}">${esc(l)}</button>`).join("")}</div>`;
    else h+=`<div class="bn-ops n5" role="group" aria-label="${esc(q.t)}">${[1,2,3,4,5].map(v=>`<button class="bn-op" data-a="bn-op" data-v="${v}" aria-pressed="${Number(f.r[q.k])===v}" aria-label="${v} de 5">${v}</button>`).join("")}</div><div class="bn-ext"><span>1 = ${esc(q.a)}</span><span style="text-align:right">5 = ${esc(q.b)}</span></div>`;
    h+=`<div style="display:flex;justify-content:space-between;margin-top:14px">${f.paso>0?'<button class="btn sm" data-a="bn-atras">← Atrás</button>':"<span></span>"}</div>`;
  }else{
    h+=`<h2 class="bn-q">Revisa y envía</h2><p class="hint">Toca una respuesta para cambiarla.</p><div class="bn-res">${BQ.map((x,i)=>`<button data-a="bn-ir" data-v="${i}" title="${esc(x.t)}"><span>${esc(x.t)}</span><b>${esc(bienTxt(x,f.r[x.k]))}</b></button>`).join("")}</div>
     ${f.err?`<div class="banner err">${esc(f.err)}</div>`:""}
     <button class="btn pri" data-a="bn-enviar" style="width:100%" ${f.busy?"disabled":""}>${f.busy?"Enviando…":S.bn&&S.bn.respuesta?"Guardar corrección":"Enviar"}</button>`;
  }
  return h+`</section>`;
}
async function enviarBien(){
  const f=S.bf;if(!f||f.busy)return;const ses=ses0();if(!ses)return;
  const falta=BQ.find(q=>!q.libre&&(f.r[q.k]==null||f.r[q.k]===""));if(falta){f.paso=BQ.indexOf(falta);render();return}
  f.busy=true;f.err=null;render();
  try{const r=await llamar(ses,{op:"jugBienestar",modo:"enviar",r:{c:+f.r.c,d:+f.r.d,e:+f.r.e,f:+f.r.f,g:+f.r.g,h:f.r.h,i:+f.r.i,j:+f.r.j,k:+f.r.k,l:f.r.l||""}});
    S.bn={semana:r.semana,respuesta:r.respuesta,t:Date.now()};if(S.ses)LS.set("bien",S.bn);S.bf=null;S.bnMsg=r.corregida?"Listo, guardamos tu corrección.":"¡Gracias! El profe ya tiene tu respuesta. Ya puedes jugar la trivia de la semana en Comunidad → Juegos.";S.tv.t=0;LS.set("mcF",1);marcarPend();setTimeout(()=>{S.bnMsg=null;render()},8000)}
  catch(e){f.busy=false;f.err=ERRB[e.code]||ERRB.red}
  render();window.scrollTo(0,0);
}
function clicBien(t){
  const a=t.dataset.a,f=S.bf;
  if(a==="bn-abrir"){abrirBien();render();return}
  if(!f)return;
  if(a==="bn-cancelar"){if(Object.keys(f.r).length&&!(S.bn&&S.bn.respuesta)){__dlg({texto:"¿Salir sin enviar? Se perderán las respuestas.",ok:"Salir",peligro:true}).then(si=>{if(si&&S.bf===f){S.bf=null;render()}});return}S.bf=null;render();return}
  if(a==="bn-op"){const q=BQ[f.paso];f.r[q.k]=q.o?(typeof q.o[0][0]==="number"?Number(t.dataset.v):t.dataset.v):Number(t.dataset.v);render();setTimeout(()=>{if(S.bf===f&&f.paso<BQ.length){f.paso=S.bn&&S.bn.respuesta&&f.volver?BQ.length:f.paso+1;f.volver=false;render();window.scrollTo(0,0)}},180);return}
  if(a==="bn-sig"){f.paso++;f.volver=false;render();return}
  if(a==="bn-atras"){f.paso=Math.max(0,f.paso-1);render();return}
  if(a==="bn-ir"){f.paso=Number(t.dataset.v);f.volver=true;render();return}
  if(a==="bn-enviar")enviarBien();
}
document.addEventListener("input",ev=>{if(ev.target.id==="bn-l"&&S.bf){S.bf.r.l=ev.target.value;const c=document.getElementById("bn-cnt");if(c)c.textContent=ev.target.value.length}});
setInterval(()=>{if(S.bn&&!S.bn.no)marcarPend()},60000);
render();
if(S.ses)actualizar();
try{document.getElementById("cfgBtn").hidden=false}catch(e){}
/* v4.13 · campanita: el shell avisa cuántas novedades sin leer hay */
addEventListener("sige:bell",e=>{try{const n=document.getElementById("bellNm"),k=+e.detail||0;n.hidden=!k;n.textContent=k>9?"9+":String(k)}catch(x){}});
return {tab:v=>{if(S.tab!==v)clicComunidad({dataset:{a:"tab",v}})},S};

  })(crearDoc(sr,sr.querySelector(".mp-body")));
};
})();
