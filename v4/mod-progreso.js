/* SIGE Jaguares v4 · módulo Progreso (Mi progreso, En vivo, Muro, Equipo).
   GENERADO por sige-jaguares/build_modulos.py desde centro-de-datos/src/jugador.html. No editar a mano. */
(function(){
"use strict";
const HTML="<style>:host{display:block;--grid:rgba(14,42,64,.10); --brand:#0B4F7C; --pitch:#0d6b43;--bg:#F7FBFE;--surface:#FDFEFF;--surface-2:#EAF4FB;--ink:#0E2A40;--muted:#46607A;--accent:#1874B0;--accent-ink:#ffffff;--sky:#1874B0;--sky-soft:#D9EEFA;--border:#C9E4F4;\n  --warn:#c98a00;--warn-soft:#fff3d1;--danger:#c3352b;--danger-soft:#fde3e0;--ok:#1f8a4c;--ok-soft:#dcf2e5;\n  --display:\"Barlow Condensed\",\"Arial Narrow\",Arial,sans-serif;--body:\"Barlow\",\"Segoe UI\",Roboto,Arial,sans-serif;color-scheme:light}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--brand:#0e5c3b; --pitch:#0e5c3b;--bg:#0B0F0D;--surface:#141A17;--surface-2:#1B2420;--ink:#ECF3EF;--muted:#9DB2A7;--accent:#34D399;--accent-ink:#04140d;--sky:#5bc2e7;--sky-soft:#12313d;--border:#26332D;\n  --warn:#f0b429;--warn-soft:#3a2e0a;--danger:#ff6b5e;--danger-soft:#3d1714;--ok:#43c47a;--ok-soft:#143323;color-scheme:dark}}\n:host([data-theme=\"dark\"]){--brand:#0e5c3b; --pitch:#0e5c3b;--bg:#0B0F0D;--surface:#141A17;--surface-2:#1B2420;--ink:#ECF3EF;--muted:#9DB2A7;--accent:#34D399;--accent-ink:#04140d;--sky:#5bc2e7;--sky-soft:#12313d;--border:#26332D;\n  --warn:#f0b429;--warn-soft:#3a2e0a;--danger:#ff6b5e;--danger-soft:#3d1714;--ok:#43c47a;--ok-soft:#143323;color-scheme:dark}\n*{box-sizing:border-box}\n.mp-body{min-height:100vh;margin:0;background:var(--bg);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.4;-webkit-tap-highlight-color:transparent}\nbutton,input{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--sky);outline-offset:2px}\n[hidden]{display:none!important}\n.top{position:sticky;top:0;z-index:20;background:var(--brand);color:#fff;padding:calc(10px + env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) 10px max(16px,env(safe-area-inset-left,0px))}\n.top-in{max-width:720px;margin:0 auto;display:flex;align-items:center;gap:10px}\n.top img{width:38px;height:38px;object-fit:contain}\n.top .t{display:flex;flex-direction:column;min-width:0}\n.top b{font-family:var(--display);font-weight:800;font-size:1.25rem;text-transform:uppercase;letter-spacing:.04em;line-height:1}\n.top span{font-size:.78rem;opacity:.85}\nmain{max-width:720px;margin:0 auto;padding:14px max(16px,env(safe-area-inset-right,0px)) 40px max(16px,env(safe-area-inset-left,0px));display:flex;flex-direction:column;gap:14px}\nh2{font-family:var(--display);font-weight:800;font-size:1.6rem;text-transform:uppercase;letter-spacing:.03em;margin:0;line-height:1.05}\nh3{font-family:var(--display);font-weight:700;font-size:1.1rem;text-transform:uppercase;letter-spacing:.05em;margin:0}\n.sec{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:12px;min-width:0}\n.sec-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}\n.hint{color:var(--muted);font-size:.88rem;margin:0}\n.hero{display:flex;gap:14px;align-items:center}\n.av{width:92px;height:92px;border-radius:50%;flex:none;display:grid;place-items:center;background:var(--sky-soft);font-family:var(--display);font-weight:800;font-size:1.8rem;overflow:hidden;border:4px solid var(--accent)}\n.av img{width:100%;height:100%;object-fit:cover}\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(70px,1fr));gap:10px 8px}\n.kpi b{display:block;font-family:var(--display);font-weight:800;font-size:1.9rem;line-height:1;font-variant-numeric:tabular-nums}\n.kpi span{font-size:.68rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}\n.list{display:flex;flex-direction:column;gap:6px}\n.li{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:var(--surface-2)}\n.li .meta{flex:1;min-width:0;display:flex;flex-direction:column}\n.li .nm{font-weight:700;overflow-wrap:anywhere}\n.li .sub{font-size:.84rem;color:var(--muted)}\n.res{display:inline-grid;place-items:center;min-width:30px;height:30px;padding:0 6px;border-radius:8px;font-family:var(--display);font-weight:800;color:#fff;flex:none}\n.res.G{background:var(--ok)}.res.E{background:var(--muted)}.res.P{background:var(--danger)}\n.chip{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em}\n.chip.ok{background:var(--ok-soft);color:var(--ok)}.chip.b{background:var(--sky-soft);color:var(--sky)}.chip.n{background:var(--surface-2);color:var(--muted);border:1px solid var(--border)}\n.dots{display:flex;flex-wrap:wrap;gap:4px}\n.dots i{width:14px;height:14px;border-radius:4px}\n.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:.8rem;color:var(--muted)}\n.legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}\n.c-Presente{background:var(--ok)}.c-Ausente{background:var(--danger)}.c-Justificado{background:var(--warn)}.c-Lesionado{background:var(--sky)}.c-Otro{background:var(--muted)}\n.tb{display:flex;align-items:flex-end;gap:8px;height:110px}\n.tb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;font-size:.78rem;color:var(--muted);min-width:0}\n.tb i{display:block;width:100%;max-width:44px;background:var(--accent);border-radius:6px 6px 0 0}\n.tb b{color:var(--ink);font-variant-numeric:tabular-nums}\n.area{display:grid;grid-template-columns:96px 1fr 26px;align-items:center;gap:8px}\n.sc{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.sc i{height:12px;border-radius:4px;background:var(--surface-2)}.sc i.on{background:var(--accent)}\n.txt span{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700}\n.nm-card{display:flex;align-items:center;gap:12px}\n.nm-card .big{font-family:var(--display);font-weight:800;font-size:1.7rem;line-height:1}\nlabel.f{display:flex;flex-direction:column;gap:4px;font-size:.76rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}\nlabel.f input{font-size:1.1rem;text-transform:none;letter-spacing:0;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:50px;width:100%}\n.btn{border-radius:12px;min-height:50px;padding:10px 18px;font-weight:700;font-size:1rem;background:var(--surface-2);color:var(--ink);border:1px solid var(--border);cursor:pointer}\n.btn.pri{background:var(--accent);color:var(--accent-ink);border-color:transparent}\n.btn.sm{min-height:40px;font-size:.9rem;padding:6px 14px}\n.btn:disabled{opacity:.5}\n.banner{border-radius:12px;padding:10px 12px;font-size:.92rem}\n/* v4.2 · Bienestar semanal */\n.bn-card{border:2px solid var(--accent)}\n.bn-card.ok{border:1px solid var(--border)}\n.bn-prog{height:6px;border-radius:99px;background:var(--surface-2);overflow:hidden;margin:6px 0 14px}.bn-prog i{display:block;height:100%;background:var(--accent);border-radius:99px}\n.bn-q{font-family:var(--display);font-weight:800;font-size:1.55rem;line-height:1.15;margin:4px 0 6px;text-transform:none;letter-spacing:.01em}\n.bn-ops{display:grid;gap:8px;margin-top:12px}.bn-ops.n5{grid-template-columns:repeat(5,1fr)}\n.bn-op{min-height:58px;border-radius:14px;border:2px solid var(--border);background:var(--surface-2);color:var(--ink);font:700 1.05rem var(--body);cursor:pointer;padding:8px 10px;text-align:left}\n.bn-ops.n5 .bn-op{text-align:center;font:800 1.5rem var(--display);padding:6px 0}\n.bn-op[aria-pressed=\"true\"]{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 18%,var(--surface-2))}\n.bn-ext{display:flex;justify-content:space-between;gap:10px;font-size:.82rem;color:var(--muted);margin-top:6px}\n.bn-res{display:grid;gap:6px;margin:10px 0;min-width:0}\n/* Revisa y envía: pregunta y respuesta en una línea, con puntos suspensivos si no caben (nunca se salen de la pantalla) */\n.bn-res button{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:10px;width:100%;max-width:100%;box-sizing:border-box;text-align:left;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);border-radius:10px;padding:8px 10px;font:500 .92rem var(--body);cursor:pointer}\n.bn-res button span,.bn-res b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.bn-res b{max-width:42vw;text-align:right}\n#bn-l{width:100%;min-height:110px;border-radius:12px;border:1px solid var(--border);background:var(--surface-2);color:var(--ink);padding:10px 12px;font:inherit;resize:vertical}\n.tabs button .pt{position:absolute;top:6px;margin-left:18px;width:9px;height:9px;border-radius:50%;background:var(--danger)}\n.banner.err{background:var(--danger-soft);border:1px solid var(--danger)}\n.banner.warn{background:var(--warn-soft);border:1px solid var(--warn)}\n.empty{color:var(--muted);font-size:.92rem;margin:0}\n.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}\n.more{background:none;border:0;color:var(--sky);font-weight:700;padding:4px 0;cursor:pointer;align-self:flex-start}\n.tabs{position:fixed;left:0;right:0;bottom:0;z-index:25;background:var(--surface);border-top:1px solid var(--border);padding-bottom:env(safe-area-inset-bottom,0px)}\n.tabs-in{max-width:720px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr)}\n.tabs button{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 2px 10px;font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);cursor:pointer}\n.tabs button span{font-size:1.25rem;line-height:1}\n.tabs button[aria-current=\"page\"]{color:var(--accent)}\n.tabs{display:none!important}.mp-body main{padding-bottom:calc(var(--nav,62px) + 30px + env(safe-area-inset-bottom,0px))}\n.grid2{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}\n.pc{background:var(--surface-2);border:1px solid var(--border);border-radius:14px;padding:12px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;cursor:pointer;color:inherit;font:inherit}\n.pc .av{width:72px;height:72px;font-size:1.4rem;border-width:3px}\n.pc b{font-size:.98rem;line-height:1.15}\n.pc small{color:var(--muted);font-size:.78rem}\n.apodo{display:inline-block;background:var(--accent);color:var(--accent-ink);border-radius:999px;padding:2px 10px;font-size:.75rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase}\n.fchip{border:1px solid var(--border);background:var(--surface);color:inherit;border-radius:999px;padding:6px 12px;font:inherit;font-size:.86rem;cursor:pointer}.fchip[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:700}\n.post{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:14px;background:var(--surface-2);border:1px solid var(--border)}\n.post .top2{display:flex;gap:10px;align-items:center}\n.post .ic{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:1.4rem;background:var(--surface);flex:none;overflow:hidden}\n.post .ic img{width:100%;height:100%;object-fit:cover}\n.post.anuncio{background:var(--sky-soft);border-color:var(--accent)}\n.rx{display:flex;gap:6px;flex-wrap:wrap}\n.rx button{border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:4px 10px;min-height:36px;font-size:1rem;cursor:pointer;color:inherit}\n.rx button.on{border-color:var(--accent);background:var(--sky-soft);font-weight:700}\n.rx button b{font-size:.85rem;margin-left:4px}\ntextarea.ta{width:100%;font:inherit;font-size:1rem;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:90px;resize:vertical}\nselect.sel{width:100%;font:inherit;font-size:1rem;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:48px}\n.ovl{position:fixed;inset:0;z-index:60;background:rgba(4,20,30,.55);display:grid;place-items:end center}\n@media(min-width:640px){.ovl{place-items:center;padding:24px}}\n.ovl .box{background:var(--surface);color:var(--ink);width:100%;max-width:520px;max-height:90vh;overflow:auto;border-radius:18px 18px 0 0;padding:18px 16px calc(18px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:12px}\n@media(min-width:640px){.ovl .box{border-radius:18px}}\n.chip.w{background:var(--warn-soft);color:var(--warn)}\n.post .badge{align-self:flex-start;border-radius:999px;padding:2px 10px;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n.post.mvp{background:linear-gradient(135deg,#FFF7DA,#FFE38A);border:2px solid #E0B000;color:#3a2c00}.post.mvp .badge{background:#E0B000;color:#2b1d00}\n.post.hattrick{background:linear-gradient(135deg,#0B4F7C,#1874B0);border:0;color:#fff}.post.hattrick .badge{background:#7DD3F7;color:#06263c}\n.post.debut{background:linear-gradient(135deg,#EAF8EF,#C9EED7);border:2px solid #1f8a4c;color:#0e3a22}.post.debut .badge{background:#1f8a4c;color:#fff}\n.post.cumple{background:linear-gradient(135deg,#FFE4F1,#D9EEFA);border:2px solid #E26BA8;color:#4a1030}.post.cumple .badge{background:#E26BA8;color:#fff}\n.post.promocion{background:linear-gradient(135deg,#1f8a4c,#2fbf7a);border:0;color:#fff}.post.promocion .badge{background:#fff;color:#0e3a22}\n.post.mvp .hint,.post.debut .hint,.post.cumple .hint{color:inherit;opacity:.75}.post.hattrick .hint,.post.promocion .hint{color:#fff;opacity:.85}\n.post .big{font-size:1.15rem;line-height:1.3}\n.post.mvp .rx button,.post.debut .rx button,.post.cumple .rx button{background:rgba(255,255,255,.75);color:#1a1a1a;border-color:rgba(0,0,0,.14)}\n.post.hattrick .rx button,.post.promocion .rx button{background:rgba(255,255,255,.18);color:#fff;border-color:rgba(255,255,255,.4)}\n.post.mvp .rx button.on,.post.debut .rx button.on,.post.cumple .rx button.on{background:#fff;border-color:#1874B0}\n.post.hattrick .rx button.on,.post.promocion .rx button.on{background:rgba(255,255,255,.4);border-color:#fff}\n.post.mvp .ic,.post.debut .ic,.post.cumple .ic,.post.hattrick .ic,.post.promocion .ic{background:rgba(255,255,255,.8)}\n.post img.pf{width:100%;max-height:420px;object-fit:cover;border-radius:12px}\n.post .txtp{margin:0;white-space:pre-line;font-size:1rem}\n.avw{position:relative;display:inline-block;flex:none}\n.avw .emo{position:absolute;right:-6px;bottom:-4px;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:1.05rem;background:var(--surface);border:2px solid var(--border);box-shadow:0 2px 6px rgba(0,0,0,.18);line-height:1}\n.ic .emo,.avw.sm .emo{width:22px;height:22px;font-size:.75rem;right:-6px;bottom:-6px}\n.post .top2 .avw{width:44px;height:44px}\n.tg{display:flex;flex-wrap:wrap;gap:6px}\n.tg span,.tg button{border-radius:999px;padding:4px 10px;font-size:.82rem;font-weight:600;border:1px solid var(--border);background:var(--surface);color:var(--ink)}\n.txt .tg span{display:inline-block;text-transform:none;letter-spacing:0;color:var(--ink);font-weight:600;font-size:.82rem}\n.tg button{cursor:pointer;min-height:34px}.tg button.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n.tg button:disabled{opacity:.4}\n.emogrid{display:grid;grid-template-columns:repeat(8,1fr);gap:6px}\n.emogrid button{font-size:1.35rem;min-height:42px;border-radius:10px;border:1px solid var(--border);background:var(--surface);cursor:pointer;padding:0}\n.emogrid button.on{border:2px solid var(--accent);background:var(--sky-soft)}\n.board{background:var(--brand);color:#fff;border-radius:14px;padding:14px 12px;display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;text-align:center}\n.board .tm{display:flex;flex-direction:column;align-items:center;gap:6px;font-weight:700;font-size:.9rem;min-width:0;overflow-wrap:anywhere}\n.board .tm img{width:52px;height:52px;object-fit:contain}\n.board .sc{display:block;font-family:var(--display);font-weight:800;font-size:2.8rem;line-height:1;white-space:nowrap}\n.board .sc small{display:block;font-size:.8rem;letter-spacing:.06em;font-weight:700;opacity:.85;margin-top:4px}\n.livedot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4d;margin-left:4px;vertical-align:middle;animation:lp 1.2s infinite}\n@keyframes lp{50%{opacity:.25}}\n.board .sc i.livedot{width:8px;height:8px;border-radius:50%;background:#ff4d4d}\n.tl{display:flex;flex-direction:column;gap:8px}\n.tl .ev{display:grid;grid-template-columns:42px 1fr;gap:8px;align-items:start}\n.tl .ev b.m{font-family:var(--display);font-size:1.05rem;text-align:right}\n.prevw{max-width:100%;max-height:240px;border-radius:12px;object-fit:cover}\n.mt{padding:10px 0;border-top:1px solid var(--border)}.mt:first-of-type{border-top:0}\n.mt-big{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:6px 0}.mt-big b{font-family:var(--display);font-size:2rem;line-height:1}\n.niv{color:#fff;border-radius:999px;padding:3px 10px;font-size:.78rem;font-weight:700}.niv-Excelente{background:#1f8a4c}.niv-Bueno{background:#2E9BD6}.niv-Regular{background:#C98A00}.niv-A{background:#C3352B}\n.mt-msg{background:var(--surface-2);border-radius:10px;padding:10px 12px;font-size:.92rem;margin:8px 0}\n.mt-med{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.mt-med span{border:1px solid var(--border);border-radius:999px;padding:3px 10px;font-size:.8rem;font-weight:600}\n.mt-top{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;margin-top:8px}\n.mt-top ol{margin:4px 0 0;padding-left:18px;font-size:.86rem}.mt-top li{margin:2px 0}.mt-top li.yo{font-weight:800;color:var(--accent)}\n.mt-top li span{color:var(--muted);margin-left:4px}\n.mp-hist{margin-top:12px;border-top:1px solid var(--border);padding-top:10px}.mp-rs{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.mp-rs span{border-radius:8px;padding:4px 8px;font-size:.8rem;font-weight:700;background:var(--surface-2)}.mp-rs i{font-style:normal;display:inline-block;min-width:18px;text-align:center;border-radius:5px;color:#fff;margin-right:5px}.mp-rs .rG{background:#1f8a4c}.mp-rs .rE{background:#C98A00}.mp-rs .rP{background:#C3352B}\n.mm{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-top:1px solid var(--border)}.mm:first-of-type{border-top:0}.mm .ic{font-size:1.4rem;line-height:1}.mm.ok b{color:#1f8a4c}.mm.pa{opacity:.6}\n.top .cfg{margin-left:auto;background:rgba(255,255,255,.14);border:0;color:#fff;border-radius:12px;width:42px;height:42px;display:grid;place-items:center;cursor:pointer}\n.bnr{display:block;width:100%;aspect-ratio:3/1;object-fit:cover;border-radius:12px;margin:0 0 10px}\n.bnr-cv{width:100%;aspect-ratio:3/1;border-radius:12px;touch-action:none;cursor:grab;background:#000}\n.pc.prof{border:2px solid var(--accent)}\n</style><div class=\"mp-body\"><header class=\"top\"><div class=\"top-in\"><span id=\"crest\"></span><div class=\"t\"><b>Mi progreso</b><span id=\"club\"></span></div><button id=\"bellBtn\" class=\"cfg\" aria-label=\"Notificaciones\" style=\"position:relative\" onclick=\"window.dispatchEvent(new CustomEvent('sige:ir',{detail:'avisos'}))\"><svg viewBox=\"0 0 24 24\" width=\"21\" height=\"21\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/></svg><i id=\"bellNm\" hidden style=\"position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;border-radius:10px;background:#e5484d;color:#fff;font:700 11px/19px sans-serif;font-style:normal;padding:0 5px\"></i></button><button id=\"cfgBtn\" class=\"cfg\" style=\"margin-left:8px\" hidden aria-label=\"Cuenta\" onclick=\"window.dispatchEvent(new CustomEvent('sige:ir',{detail:'cuenta'}))\"><svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z\"/></svg></button></div></header><main id=\"app\"></main></div>";
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
  L.forEach((x,i)=>{if(x.idx!=null)g+=`<circle cx="${X(i)}" cy="${Y(x.idx)}" r="4.5" fill="${x.idx<60?"#C3352B":"var(--accent)"}"/>`;g+=`<text x="${X(i)}" y="${H-6}" text-anchor="middle" style="font-size:10px;fill:var(--muted)">${esc(dS(pD(x.fecha)).replace(/ .*/,"")+"/"+((pD(x.fecha)||new Date()).getMonth()+1))}</text>`});
  const hs=L.map(x=>x.horas).filter(v=>v!=null),ph=hs.length?hs.reduce((a,b)=>a+b,0)/hs.length:null,u=L[L.length-1];
  const tip=ph!=null&&ph<8?"Estás durmiendo en promedio "+f1(ph)+" horas. A tu edad se recomiendan entre 8 y 10 horas: el descanso también es entrenamiento.":u.mol&&!/^ninguna/i.test(u.mol)?"Reportaste molestias la última semana. Cuéntale a tu entrenador cómo sigues.":u.idx!=null&&u.idx<60?"Tu última semana fue exigente. Descansa, hidrátate y come bien.":"¡Vas bien! Mantén tus rutinas de sueño, alimentación e hidratación.";
  return `<section class="sec"><div class="sec-h"><h3>Mi bienestar</h3><span class="hint">últimas ${L.length} semanas · solo tú lo ves</span></div>
   ${pts.length?`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Tu índice de bienestar por semana">${g}</svg><div class="legend"><span><i style="background:var(--accent)"></i>Índice de bienestar</span><span class="hint">línea punteada: 60</span></div>`:""}
   ${hs.length?`<div class="kpis" style="margin-top:8px"><div class="kpi"><b>${f1(ph)} h</b><span>Sueño promedio</span></div><div class="kpi"><b>${u.idx!=null?Math.round(u.idx):"–"}</b><span>Último índice</span></div><div class="kpi"><b>${u.animo!=null?f1(u.animo):"–"}</b><span>Último ánimo</span></div></div>`:""}
   <div class="mt-msg">${esc(tip)}</div></section>`}

/* ---------- v4.7 · Banner del perfil (3:1). Se recorta en el teléfono y se ve cuando el entrenador lo aprueba ---------- */
function vMiBanner(){const e=S.eq;if(!e||!e.yo)return "";const y=e.yo,ap=fotoDe(y.banner),pr=y.bannerProp&&fotoDe(y.bannerProp.foto);
  return `<section class="sec"><div class="sec-h"><h3>Mi banner</h3>${y.bannerProp?'<span class="chip w">Esperando aprobación</span>':y.banner?'<span class="chip ok">Aprobado</span>':""}</div>
   <p class="hint">Una foto horizontal que aparece arriba de tu perfil en Equipo. El entrenador la aprueba antes de que se vea.</p>
   ${y.bannerRech?`<div class="banner err">El entrenador no aprobó tu banner${y.bannerRech.motivo?": "+esc(y.bannerRech.motivo):"."}</div>`:""}
   ${pr?`<img class="bnr" src="${pr}" alt="Banner enviado">`:y.bannerProp?'<p class="hint">Cargando tu banner…</p>':""}${!y.bannerProp&&ap?`<img class="bnr" src="${ap}" alt="Tu banner">`:""}
   <input type="file" id="bnr-file" accept="image/*" hidden>
   <div class="fgrid"><button class="btn ${y.banner||y.bannerProp?"":"pri"}" data-a="bnr-subir" ${S.bnBusy?"disabled":""}>${S.bnBusy?"Enviando…":y.banner||y.bannerProp?"Cambiar banner":"Subir banner"}</button>${y.banner||y.bannerProp?`<button class="btn" data-a="bnr-quitar" ${S.bnBusy?"disabled":""}>Quitar</button>`:""}</div></section>`}
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
      if(ok){d=cv.toDataURL("image/jpeg",0.82);if(d.length>650000)d=cv.toDataURL("image/jpeg",0.68)}
      ov.remove();URL.revokeObjectURL(url);ok?res(d):rej(new Error("cancelado"))});
  };img.src=url})}
async function subirBanner(file){const ses=ses0();if(!ses)return;let d;
  try{d=await recortarBanner(file)}catch(x){if(x.message==="grande")alert("La foto es muy pesada (máximo 15 MB).");else if(x.message==="tipo")alert("Ese archivo no es una foto.");return}
  S.bnBusy=true;render();
  try{const r=await llamar(ses,{op:"jugBanner",foto:d});S.fx[r.bannerProp.foto]=d;S.eq.yo.bannerProp=r.bannerProp;S.eq.yo.bannerRech=null;if(S.ses)LS.set("equipo",S.eq);alert("¡Listo! El entrenador revisará tu banner.")}
  catch(x){alert(x.code==="operacion_desconocida"?"El entrenador debe actualizar el servicio (puente v21).":x.code==="limite"?"Ya enviaste varios banners hoy. Intenta mañana.":"No se pudo enviar el banner.")}
  S.bnBusy=false;render()}
async function quitarBanner(){const ses=ses0();if(!ses||!confirm("¿Quitar tu banner?"))return;S.bnBusy=true;render();
  try{await llamar(ses,{op:"jugBanner",quitar:true});S.eq.yo.banner=null;S.eq.yo.bannerProp=null;if(S.ses)LS.set("equipo",S.eq)}catch(x){alert("No se pudo quitar.")}S.bnBusy=false;render()}
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
function salir(sil){LS.del("bien");LS.del("bienPend");S.bn=null;S.bf=null;LS.del("ses");LS.del("datos");LS.del("fotos");LS.del("stamp");LS.del("equipo");LS.del("fx");S.eq=null;S.fx={};S.tab="prog";S.ses=null;memSes=null;S.d=null;S.fotos=null;if(!sil)render()}

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
  h+=vBienCard();
  if(S.err)h+=`<div class="banner err">${esc(S.err)}</div>`;
  h+=`<section class="sec"><div class="hero"><span class="av">${foto?`<img src="${foto}" alt="">`:esc(ini(j.nombre))}</span><div><h2>${esc(j.nombre)}</h2><p class="hint" style="font-size:1rem">${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(j.pos1||"")}${j.pos2?" · "+esc(j.pos2):""}</p></div></div></section>`;
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
  h+=`<section class="sec"><h3>Mis partidos</h3>${ps.length?`<div class="kpis"><div class="kpi"><b>${conv.length}</b><span>Convocado</span></div><div class="kpi"><b>${jug.length}</b><span>Jugados</span></div><div class="kpi"><b>${conv.filter(x=>x.cond==="Titular"&&n(x.min)>0).length}</b><span>Titular</span></div><div class="kpi"><b>${sum("min")}'</b><span>Minutos</span></div>${gk?`<div class="kpi"><b>${inv}</b><span>Vallas invictas</span></div><div class="kpi"><b>${grT}</b><span>Goles recibidos</span></div><div class="kpi"><b>${sum("pa")}</b><span>Penales atajados</span></div>`:`<div class="kpi"><b>${sum("goles")}</b><span>Goles</span></div><div class="kpi"><b>${sum("asist")}</b><span>Asistencias</span></div>`}</div>
   <div class="list">${ps.slice(0,S.todos?999:6).map(x=>{const gf=n(x.gf),gc=n(x.gc),r=gf>gc?"G":gf<gc?"P":"E",m=n(x.min)||0,g=gk?grOf(x):null,extra=[gk&&g!=null?(g===0?"valla invicta":g+(g===1?" gol recibido":" goles recibidos")):"",gk&&n(x.pa)?x.pa+(n(x.pa)===1?" penal atajado":" penales atajados"):"",n(x.goles)?x.goles+(n(x.goles)===1?" gol":" goles"):"",n(x.asist)&&!gk||gk&&n(x.asist)?x.asist+(n(x.asist)===1?" asistencia":" asistencias"):"",n(x.am)?"amarilla":"",n(x.ro)?"roja":""].filter(Boolean).join(" · ");
     return `<div class="li"><span class="res ${r}">${esc(x.gf)}-${esc(x.gc)}</span><div class="meta"><span class="nm">vs ${esc(x.rival)}</span><span class="sub">${esc(dS(pD(x.fecha)))}${x.comp?" · "+esc(x.comp):""}</span><span class="sub">${!x.convocado?"No convocado":m>0?(x.cond==="Titular"?"Titular":"Ingresó")+" · "+m+"'":"Convocado, no jugó"}${extra?" · "+esc(extra):""}</span></div></div>`}).join("")}</div>
   ${ps.length>6?`<button class="more" data-a="todos">${S.todos?"Ver menos":"Ver todos ("+ps.length+")"}</button>`:""}`:'<p class="empty">Aún no hay partidos registrados.</p>'}</section>`;
  // Asistencia
  const ss=(d.sesiones||[]).slice().sort((a,b)=>(pD(a.fecha)||0)-(pD(b.fecha)||0)),c=a=>ss.filter(x=>x.asistencia===a).length,base=c("Presente")+c("Ausente");
  h+=`<section class="sec"><h3>Mi asistencia</h3>${ss.length?`<div class="kpis"><div class="kpi"><b>${base?Math.round(c("Presente")/base*100)+"%":"–"}</b><span>Asistencia</span></div><div class="kpi"><b>${c("Presente")}</b><span>Presente</span></div><div class="kpi"><b>${c("Ausente")}</b><span>Ausente</span></div><div class="kpi"><b>${c("Justificado")+c("Lesionado")}</b><span>Justificado</span></div></div>
   <div class="dots" aria-label="Últimos entrenamientos">${ss.slice(-60).map(x=>`<i class="c-${["Presente","Ausente","Justificado","Lesionado"].includes(x.asistencia)?x.asistencia:"Otro"}" title="${esc(x.fecha+" · "+x.asistencia)}"></i>`).join("")}</div>
   <div class="legend">${["Presente","Ausente","Justificado","Lesionado"].map(a=>`<span><i class="c-${a}"></i>${a}</span>`).join("")}</div>`:'<p class="empty">Aún no hay entrenamientos registrados.</p>'}</section>`;
  // Tests (v4.3): nivel, puesto, medallas y mensaje. El puente solo envía la media, el podio y los que más mejoraron.
  h+=d.testsEquipo?vMisTests(d):vMisTestsV17(d);
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
  h+=vMiPerfil();
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
  if(clicComunidad(t))return;
  if(t.dataset.a==="upd")actualizar();
  else if(t.dataset.a==="todos"){S.todos=!S.todos;render()}
  else if(t.dataset.a==="salir")api.salir()});

/* ============ Comunidad: Equipo, Muro y Mi perfil ============ */
if(location.hash==="#bienestar"){LS.set("abrirBien",1);LS.set("tab","prog");history.replaceState(null,"",location.pathname)}
S.tab=LS.get("tab","prog");if(/^#(vivo|muro|equipo|prog)$/.test(location.hash)){S.tab=location.hash.slice(1);LS.set("tab",S.tab);history.replaceState(null,"",location.pathname)}S.eq=LS.get("equipo",null);S.fx=LS.get("fx",{});S.ver=null;S.eqBusy=false;S.pf=null;
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
  const e=S.eq;if(!e)return;const ses=ses0();
  const ids=[...new Set([e.dt&&e.dt.foto,e.dt&&e.dt.banner,e.yo&&e.yo.banner,e.yo&&e.yo.bannerProp&&e.yo.bannerProp.foto,...e.jugadores.map(j=>j.foto),...e.jugadores.map(j=>j.banner),...e.muro.map(p=>p.foto),...((S.hist&&S.hist.d&&S.hist.d.items)||[]).map(p=>p.foto),...(e.misPosts||[]).map(p=>p.foto)].filter(x=>x&&!S.fx[x]))];
  for(let i=0;i<ids.length;i+=20){try{const r=await llamar(ses,{op:"jugFotos",ids:ids.slice(i,i+20)});Object.assign(S.fx,r.fotos||{});if(S.ses)try{LS.set("fx",S.fx)}catch(x){}render()}catch(x){return}}
}
function fotoDe(id){return id&&S.fx[id]||null}
function avP(j,cls){const f=fotoDe(j.foto);return `<span class="avw ${cls||""}"><span class="av">${f?`<img src="${f}" alt="">`:esc(ini(j.nombre))}</span>${j.emo?`<span class="emo" aria-label="Emoji de hoy">${j.emo}</span>`:""}</span>`}
const GICO={musica:"🎵",hobbies:"🎮",equipo:"⚽",materia:"📚"};
function gustosHtml(tags){const G=(S.eq&&S.eq.gustos)||[];const b=G.filter(g=>(tags&&tags[g.k]||[]).length);if(!b.length)return "";
  return b.map(g=>`<div class="txt"><span>${GICO[g.k]||""} ${esc(g.t)}</span><div class="tg" style="margin-top:4px">${tags[g.k].map(x=>`<span>${esc(x)}</span>`).join("")}</div></div>`).join("")}
function statsTxt(j){const s=j.stats||{};return j.gk?[[s.pj,"Partidos"],[s.vallas,"Vallas invictas"],[s.pa,"Penales atajados"],[s.mvp,"MVP"]]:[[s.pj,"Partidos"],[s.goles,"Goles"],[s.asist,"Asistencias"],[s.mvp,"MVP"]]}
function vEquipo(){
  const e=S.eq;
  if(!e)return `<section class="sec"><h2>Equipo</h2><p class="empty">${esc(S.eqErr||(navigator.onLine?"Cargando el equipo…":"Sin señal: el equipo aparece cuando tengas conexión."))}</p></section>`;
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
   ${fotoDe(j.banner)?`<img class="bnr" src="${fotoDe(j.banner)}" alt="">`:""}<div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center${fotoDe(j.banner)?";margin-top:-46px":""}">${avP(j)}<h2>${esc(j.nombre)}</h2>${j.apodo?`<span class="apodo" style="font-size:.9rem">${esc(j.apodo)}</span>`:""}<p class="hint">${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(j.pos1||"")}${j.pos2?" · "+esc(j.pos2):""}</p>${presLinea(S.eq.pres,j.id)}</div>
   ${j.desc?`<p style="margin:0;text-align:center;font-size:1.02rem">“${esc(j.desc)}”</p>`:""}${gustosHtml(j.tags)}
   <div class="kpis">${statsTxt(j).map(([v,l])=>`<div class="kpi"><b>${v||0}</b><span>${l}</span></div>`).join("")}</div><p class="hint" style="text-align:center">Temporada</p></div>`;
}
function vMuro(){
  const e=S.eq;
  if(!e)return `<section class="sec"><h2>Muro</h2><p class="empty">${esc(S.eqErr||(navigator.onLine?"Cargando el muro…":"Sin señal: el muro aparece cuando tengas conexión."))}</p></section>`;
  const porId={};e.jugadores.forEach(j=>porId[j.id]=j);
  let h=`<h2>Muro del equipo</h2>`+vCompositor();
  if(S.hist)return vMuroHist(porId);
  const pie=e.histN?`<button class="btn" data-a="hist" style="width:100%;margin-top:4px">🗂️ Ver publicaciones anteriores (${e.histN})</button>`:"";
  if(!e.muro.length)return h+`<section class="sec"><p class="empty">No hay publicaciones recientes. Aquí aparecerán los logros del equipo.</p></section>`+pie;
  return h+e.muro.map(p=>postHTML(p,porId,e)).join("")+pie;
}
/* v4.16 · Muro con caducidad: historial por mes (no se borra nada) */
function postHTML(p,porId,e){const j=porId[p.jug[0]],c=e.reac[p.id]||{},mia=e.mias[p.id];const f=j&&fotoDe(j.foto),esp=p.pronto?"🎂 Próximo cumpleaños":BADGE[p.tipo],eb=j&&j.emo?`<span class="emo">${j.emo}</span>`:"";
    const cab=p.tipo==="post"?`<div class="top2"><span class="avw sm"><span class="ic">${f?`<img src="${f}" alt="">`:"💬"}</span>${eb}</span><div style="flex:1;min-width:0"><b>${esc(p.autor||"")}</b><p class="hint">${esc(dL(pD(p.fecha)))}</p></div></div>${p.texto?`<p class="txtp">${esc(p.texto)}</p>`:""}${p.foto?(fotoDe(p.foto)?`<img class="pf" src="${fotoDe(p.foto)}" alt="Foto de la publicación">`:'<p class="hint">Cargando foto…</p>'):""}`
      :`${esp?`<span class="badge">${esp}</span>`:""}<div class="top2"><span class="avw sm"><span class="ic">${f?`<img src="${f}" alt="">`:ICO[p.tipo]||"⭐"}</span>${f?eb:""}</span><div style="flex:1;min-width:0"><b class="${esp?"big":""}">${!esp&&f?ICO[p.tipo]+" ":""}${esc(p.texto)}</b><p class="hint">${p.forma==="encuesta"?"Encuesta del entrenador · ":p.forma==="actividad"?"Actividad · ":p.tipo==="anuncio"?"Anuncio del entrenador · ":""}${esc(dL(pD(p.fecha)))}</p></div></div>`;
    const fm=p.forma?formaHTML(p):"";
    return `<article class="post ${esc(p.tipo)}">${p.fijado?'<span class="hint" style="font-weight:700">📌 Fijado por el entrenador</span>':""}${cab}${fm}<div class="rx">${RX.map(([k,i])=>`<button data-a="rx" data-ev="${esc(p.id)}" data-t="${k}" class="${mia===k?"on":""}" aria-label="${k}">${i}${c[k]?`<b>${c[k]}</b>`:""}</button>`).join("")}</div></article>`}
const MESES_H=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
function mesTxt(m){const [y,mm]=m.split("-");return MESES_H[+mm-1]+" "+y}
function vMuroHist(porId){
  const e=S.eq,H=S.hist,d=H.d;
  let h=`<div class="row" style="gap:8px;align-items:center"><button class="btn sm" data-a="histx">← Volver al muro</button></div><h2>Publicaciones anteriores</h2>`;
  if(!d)return h+`<p class="empty">${H.err?esc(H.err):"Cargando…"}</p>`;
  if(!d.meses.length)return h+`<p class="empty">Aún no hay publicaciones anteriores.</p>`;
  h+=`<div class="row" style="gap:6px;flex-wrap:wrap">${d.meses.map(x=>`<button class="fchip" aria-pressed="${x.m===d.mes}" data-a="hist" data-v="${x.m}" ${H.busy?"disabled":""}>${esc(mesTxt(x.m))} · ${x.n}</button>`).join("")}</div>`;
  return h+(H.busy?`<p class="hint">Cargando…</p>`:"")+d.items.map(p=>postHTML(p,porId,e)).join("");
}
async function abrirHist(mes){
  const ses=ses0();if(!ses)return;
  if(!navigator.onLine){alert("Sin señal: el historial necesita conexión.");return}
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
  if(!navigator.onLine){alert("Sin señal: intenta cuando tengas conexión.");return}
  const p=e.muro.find(x=>x.id===ev);if(!p)return;
  let val=p.enc?Number(v):v;if(p.enc&&p.enc.mio===val)return;if(p.act&&p.act.mio===val)val=null;
  S.resBusy=ev;render();
  try{const r=await llamar(ses,{op:"jugResponder",id:ev,v:val});if(r.item){Object.assign(p,r.item);if(S.ses)LS.set("equipo",e)}}
  catch(x){alert(x.code==="sin_cupo"?"Ya no hay cupos.":x.code==="cerrada"?"Ya no se reciben respuestas.":ERRC[x.code]||"No se pudo guardar tu respuesta.")}
  S.resBusy=null;render();
}
async function reaccionar(ev,t){
  const e=S.eq,ses=ses0();if(!e||!ses)return;
  if(!navigator.onLine){alert("Sin señal: intenta cuando tengas conexión.");return}
  const prev=e.mias[ev]||null,nuevo=prev===t?null:t,c=e.reac[ev]=e.reac[ev]||{};
  if(prev)c[prev]=Math.max(0,(c[prev]||1)-1);if(nuevo)c[nuevo]=(c[nuevo]||0)+1;if(nuevo)e.mias[ev]=nuevo;else delete e.mias[ev];render();
  try{await llamar(ses,{op:"jugReaccion",ev,tipo:nuevo});if(S.ses)LS.set("equipo",e)}
  catch(x){if(nuevo)c[nuevo]--;if(prev){c[prev]=(c[prev]||0)+1;e.mias[ev]=prev}else delete e.mias[ev];render();alert(ERRC[x.code]||"No se pudo guardar la reacción.")}
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
function comprimir(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file),im=new Image();im.onload=()=>{let max=1280,q=.82,out="";for(let i=0;i<4;i++){const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",q);if(out.length<850000)break;max*=.8;q-=.1}URL.revokeObjectURL(u);res(out)};im.onerror=()=>{URL.revokeObjectURL(u);rej()};im.src=u})}
async function enviarPub(){
  const ses=ses0(),P=S.pub;if(!ses||!P)return;
  if(!P.texto.trim()&&!P.foto){alert(ERRP.vacio);return}
  S.pubBusy=true;render();
  try{await llamar(ses,{op:"jugPublicar",texto:P.texto,foto:P.foto||""});S.pub=null;alert("¡Enviada! El entrenador la revisará.");S.pubBusy=false;await cargarEquipo()}
  catch(x){alert(ERRP[x.code]||"No se pudo enviar.")}
  S.pubBusy=false;render();
}
document.addEventListener("input",ev=>{if(ev.target.id==="pub-txt"&&S.pub){S.pub.texto=ev.target.value;const c=document.getElementById("pub-cnt");if(c)c.textContent=ev.target.value.length+"/500"}});
document.addEventListener("change",async ev=>{if(ev.target.id!=="pub-foto"||!S.pub)return;const f=ev.target.files&&ev.target.files[0];if(!f)return;try{S.pub.foto=await comprimir(f);render()}catch(x){alert(ERRP.foto_invalida)}});
function vGustos(){
  const e=S.eq,y=e&&e.yo;if(!y||!e.emojis)return "";
  const gu=S.gu||(S.gu=JSON.parse(JSON.stringify(y.tags||{})));
  return `<section class="sec"><div class="sec-h"><h3>Mi emoji de hoy</h3>${y.emo?`<span style="font-size:1.6rem">${y.emo}</span>`:""}</div><p class="hint">Se ve junto a tu foto durante 24 horas. Cámbialo cuando quieras.</p>
    <div class="emogrid">${e.emojis.map(x=>`<button data-a="emo" data-v="${x}" class="${y.emo===x?"on":""}" ${S.guBusy?"disabled":""}>${x}</button>`).join("")}</div>${y.emo?`<button class="btn sm" data-a="emo" data-v="" style="align-self:flex-start">Quitar emoji</button>`:""}</section>
   <section class="sec"><h3>Mis gustos</h3><p class="hint">Elige lo que más te gusta. Tus compañeros lo ven en tu perfil.</p>
    ${(e.gustos||[]).map(g=>{const sel=gu[g.k]||[];return `<div class="txt"><span>${GICO[g.k]||""} ${esc(g.t)} · ${sel.length}/${g.max}</span><div class="tg" style="margin-top:6px">${g.l.map(x=>{const on=sel.includes(x);return `<button data-a="tag" data-k="${g.k}" data-v="${esc(x)}" class="${on?"on":""}" ${!on&&sel.length>=g.max&&g.max>1?"disabled":""}>${esc(x)}</button>`}).join("")}</div></div>`}).join("")}
    <button class="btn pri" data-a="gustos-guardar" ${S.guBusy?"disabled":""}>${S.guBusy?"Guardando…":"Guardar mis gustos"}</button></section>`;
}
async function guardarGustos(body,ok){
  const ses=ses0();if(!ses)return;if(!navigator.onLine){alert(ERRC.red);return}
  S.guBusy=true;render();
  try{const r=await llamar(ses,Object.assign({op:"jugGustos"},body));const y=S.eq.yo;y.emo=r.emo;y.tags=r.tags;S.gu=JSON.parse(JSON.stringify(r.tags||{}));const me=S.eq.jugadores.find(j=>j.id===y.id);if(me){me.emo=r.emo;me.tags=r.tags}if(S.ses)LS.set("equipo",S.eq);if(ok)alert(ok)}
  catch(x){alert(x.code==="limite"?ERRC.limite:x.code==="emoji_invalido"?"Ese emoji no está disponible.":ERRC.red)}
  S.guBusy=false;render();
}
function vMiPerfil(){
  const e=S.eq;if(!e||!e.yo)return "";
  const y=e.yo,pf=S.pf||(S.pf={apodo:(y.prop&&y.prop.apodo)||y.apodo||"",desc:(y.prop&&y.prop.desc)||y.desc||""});
  return `<section class="sec"><div class="sec-h"><h3>Mi perfil en el equipo</h3>${y.prop?'<span class="chip w">Esperando aprobación</span>':y.apodo||y.desc?'<span class="chip ok">Aprobado</span>':""}</div>
   <p class="hint">Así te ven tus compañeros en Equipo. El entrenador aprueba el apodo y la descripción antes de que se vean.</p>
   ${y.rech?`<div class="banner err">El entrenador no aprobó tu última propuesta${y.rech.motivo?": "+esc(y.rech.motivo):"."}</div>`:""}
   ${!y.visible?'<div class="banner warn">Por ahora tu perfil no se muestra al equipo.</div>':""}
   <label class="f">Apodo<select id="pf-apodo" class="sel"><option value="">Sin apodo</option>${(e.apodos||[]).map(a=>`<option ${a===pf.apodo?"selected":""}>${esc(a)}</option>`).join("")}</select></label>
   <label class="f">Algo sobre mí <span id="pf-cnt" style="text-transform:none;letter-spacing:0;font-weight:500">(${pf.desc.length}/280)</span><textarea id="pf-desc" class="ta" maxlength="280" placeholder="Ej.: Me gusta jugar por la banda y mi ídolo es…">${esc(pf.desc)}</textarea></label>
   <button class="btn pri" data-a="pf-enviar" ${S.pfBusy?"disabled":""}>${S.pfBusy?"Enviando…":"Enviar para aprobación"}</button></section>${vMiBanner()}${vGustos()}`;
}
async function enviarPerfil(){
  const ses=ses0(),pf=S.pf;if(!ses||!pf)return;
  if(!pf.apodo&&!pf.desc.trim()){alert(ERRC.vacio);return}
  S.pfBusy=true;render();
  try{const r=await llamar(ses,{op:"jugPerfil",apodo:pf.apodo,desc:pf.desc});S.eq.yo.prop=r.prop;S.eq.yo.rech=null;if(S.ses)LS.set("equipo",S.eq);alert("¡Listo! El entrenador revisará tu perfil.")}
  catch(x){alert(ERRC[x.code]||"No se pudo enviar.")}
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
  try{const body={op:"jugVista"};if(S.reacPend.length){body.reac=S.reacPend.slice(0,40)}const r=await llamar(ses,body);if(body.reac)S.reacPend=S.reacPend.slice(body.reac.length);S.vv=r;S.vvT=Date.now();S.vvFail=0;S.vvNext=0;if(S.ses)LS.set("vivo",r);if(S.tab==="vivo"||r.actual)render();cargarFotosVivo()}
  catch(e){if(e.code==="operacion_desconocida")S.vvErr="El partido en vivo estará disponible cuando el entrenador actualice el servicio.";else{S.vvFail++;S.vvNext=Date.now()+Math.min(60000,4000*2**S.vvFail)+Math.random()*4000}}
  S.vvBusy=false;
}
async function cargarFotosVivo(){const v=S.vv;if(!v)return;const ses=ses0();const ids=[...new Set([v.marca&&v.marca.logo,...Object.values(v.fotos||{}),escRival(v)].filter(x=>x&&!S.fx[x]))];if(!ids.length)return;try{const r=await llamar(ses,{op:"jugFotos",ids:ids.slice(0,20)});Object.assign(S.fx,r.fotos||{});if(S.ses)try{LS.set("fx",S.fx)}catch(x){}render()}catch(x){}}
function escKey(s){return String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim()}
function escRival(v){const E=v.escudos||{},L=E.lista||[],k=escKey(v.partido&&v.partido.rival);if(!k)return null;const al=(E.alias||{})[k];if(al==="none")return null;if(al&&L.some(e=>e.id===al))return al;const f=L.filter(e=>escKey(e.nombre)===k);return f.length===1?f[0].id:null}
function vivoEstado(v){const p=v.partido||{},r=p.reloj||{},dur=Number(p.duracion)||80,h=dur/2,now=Date.now(),ep=p.estadoPartido;
  if(r.fin2)return {txt:ep&&ep.estado&&ep.estado!=="Finalizado"?ep.estado:"Final",fin:true};
  if(r.inicio2){const m=Math.floor((now-r.inicio2)/60000);return {txt:(h+Math.min(m,h)+1)+"'"+(m>=h?" +"+(m-h+1):"")+" · 2.º tiempo",enJuego:true}}
  if(r.fin1)return {txt:"Entretiempo",enJuego:true};
  if(r.inicio1){const m=Math.floor((now-r.inicio1)/60000);return {txt:(Math.min(m,h)+1)+"'"+(m>=h?" +"+(m-h+1):"")+" · 1.er tiempo",enJuego:true}}
  return {txt:"Por empezar"}}
function vVivo(){
  const v=S.vv;
  if(!v)return `<section class="sec"><h2>En vivo</h2><p class="empty">${esc(S.vvErr||(navigator.onLine?"Buscando el partido…":"Sin señal: el partido aparece cuando tengas conexión."))}</p></section>`;
  if(!v.actual)return `<section class="sec"><h2>En vivo</h2><p class="empty">No hay un partido en juego. Cuando el entrenador active el partido, aquí lo verás minuto a minuto.</p></section>`;
  const p=v.partido||{},jug={};(v.jugadores||[]).forEach(j=>jug[j.id]=j);const nm=id=>{const j=jug[id];return j?(j.dorsal?j.dorsal+" · ":"")+j.nombre:""};
  const evs=(v.eventos||[]).slice().sort((a,b)=>(b.periodo-a.periodo)||(b.minuto-a.minuto)||(b.ts-a.ts));
  const gf=evs.filter(e=>e.tipo==="gol").length,gc=evs.filter(e=>e.tipo==="gol_rival").length,est=vivoEstado(v);
  const loc=p.localia!=="Visitante",logo=v.marca&&v.marca.logo&&fotoDe(v.marca.logo),er=escRival(v),erf=er&&fotoDe(er);
  const nos=`<div class="tm">${logo?`<img src="${logo}" alt="">`:"🐆"}<span>Jaguares</span></div>`,riv=`<div class="tm">${erf?`<img src="${erf}" alt="">`:"🛡️"}<span>${esc(p.rival||"Rival")}</span></div>`;
  const TX={gol:"⚽ Gol",gol_rival:"⚽ Gol del rival",amarilla:"🟨 Amarilla",roja:"🟥 Roja",cambio:"🔁 Cambio",penal_atajado:"🧤 Penal atajado",atencion:"🩹 Atención médica",formacion:"📋 Cambio de formación",intercambio:"🔀 Cambio de posición"};
  const ap=(v.aplausos&&v.aplausos.ev)||{};
  let h=`<div class="board">${loc?nos:riv}<div class="sc">${loc?gf:gc} - ${loc?gc:gf}<small>${esc(est.txt)}${est.enJuego?'<i class="livedot"></i>':""}</small></div>${loc?riv:nos}</div>`;
  if(p.competicion||p.lugar)h+=`<p class="hint" style="text-align:center">${esc([p.competicion,p.lugar,p.formacion?"Formación "+p.formacion:""].filter(Boolean).join(" · "))}</p>`;
  if(v.fans)h+=`<button class="btn pri" data-a="animo">📣 ¡Vamos Jaguares!${v.aplausos&&v.aplausos.animo?` <b>${v.aplausos.animo}</b>`:""}</button>`;
  h+=`<section class="sec"><h3>Minuto a minuto</h3>${evs.length?`<div class="tl">${evs.map(e=>{let d="";
      if(e.tipo==="gol")d=nm(e.jugador)+(e.penal?" · de penal":"")+(e.rel?` · asistencia de ${nm(e.rel)}`:"");else if(e.tipo==="gol_rival"&&e.penal)d="De penal";else if(e.tipo==="intercambio")d=`${nm(e.jugador)} ⇄ ${nm(e.rel)}`;else if(e.tipo==="cambio")d=`Entra ${nm(e.rel)} · sale ${nm(e.jugador)}`;else if(e.tipo==="formacion")d=e.formacion||"";else if(e.jugador)d=nm(e.jugador);
      const c=ap[e.id]||{};
      return `<div class="ev"><b class="m">${e.minuto?e.minuto+"'":""}</b><div><b>${TX[e.tipo]||esc(e.tipo)}</b>${d?`<p class="hint" style="color:var(--ink)">${esc(d)}</p>`:""}${v.fans&&e.tipo==="gol"?`<div class="rx" style="margin-top:6px">${[["aplauso","👏"],["fuego","🔥"],["corazon","❤️"]].map(([k,i])=>`<button data-a="aplauso" data-ev="${esc(e.id)}" data-t="${k}">${i}${c[k]?`<b>${c[k]}</b>`:""}</button>`).join("")}</div>`:""}</div></div>`}).join("")}</div>`:'<p class="empty">Aún no hay eventos.</p>'}</section>`;
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
const ERRB={cerrado:"El formulario de esta semana ya cerró (se recibía hasta el sábado). El lunes abre el nuevo.",respuesta_invalida:"Revisa las respuestas e intenta de nuevo.",texto_largo:"El comentario pasa de 500 caracteres.",no_aplica:"Este formulario es solo para jugadores activos.",red:"Sin señal. Tus respuestas siguen aquí; intenta de nuevo cuando tengas conexión."};
S.bn=LS.get("bien",null);S.bf=null;
function bienTxt(q,v){if(v==null||v==="")return "—";if(q.o){const o=q.o.find(x=>String(x[0])===String(v));return o?o[1]:String(v)}if(q.libre)return String(v);return v+" de 5"}
// Plazo (DT, 06/11): responder el viernes después del último entrenamiento; se recibe hasta el sábado. El domingo está cerrado.
// Aviso: viernes desde las 5:00 p. m. y todo el sábado, si falta responder (hora del teléfono)
function bienCerrado(){return !!(S.bn&&S.bn.semana&&(S.bn.semana.cerrado||new Date().getDay()===0))}
function bienAviso(){if(!S.bn||S.bn.no||S.bn.respuesta||bienCerrado())return false;const d=new Date(),w=d.getDay();return (w===5&&d.getHours()>=17)||w===6}
function marcarPend(){try{localStorage.setItem("mp1:bienPend",bienAviso()?"1":"0");window.dispatchEvent(new Event("sige:pend"))}catch(e){}}
async function cargarBien(){
  const ses=ses0();if(!ses)return;
  try{const r=await llamar(ses,{op:"jugBienestar",modo:"ver"});S.bn={semana:r.semana,respuesta:r.respuesta,t:Date.now()};if(S.ses)LS.set("bien",S.bn)}
  catch(e){if(e.code==="operacion_desconocida"||e.code==="no_aplica"||e.code==="sin_hoja_bienestar")S.bn={no:true};}
  marcarPend();
  if(LS.get("abrirBien",0)&&S.bn&&!S.bn.no){LS.del("abrirBien");S.tab="prog";LS.set("tab","prog");if(!bienCerrado())abrirBien()}
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
  if(cerr)return `<section class="sec bn-card ok"><h3>Bienestar de la semana</h3><p class="hint">El formulario de esta semana cerró el sábado. El lunes abre el de la nueva semana.</p></section>`;
  const msg=w===6?'<div class="banner warn" style="margin-bottom:10px"><b>Último día:</b> hoy es el último día para responder.</div>'
    :w===5?`<div class="banner warn" style="margin-bottom:10px"><b>Hoy es el día:</b> respóndelo después del entrenamiento.</div>`:"";
  const sub=w===5||w===6?"10 preguntas, 2 minutos. Solo lo ve el profe; tus compañeros no.":"Respóndelo el <b>viernes, después del último entrenamiento</b> (se recibe hasta el sábado). 10 preguntas, 2 minutos. Solo lo ve el profe; tus compañeros no.";
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
    S.bn={semana:r.semana,respuesta:r.respuesta,t:Date.now()};if(S.ses)LS.set("bien",S.bn);S.bf=null;S.bnMsg=r.corregida?"Listo, guardamos tu corrección.":"¡Gracias! El profe ya tiene tu respuesta.";marcarPend();setTimeout(()=>{S.bnMsg=null;render()},8000)}
  catch(e){f.busy=false;f.err=ERRB[e.code]||ERRB.red}
  render();window.scrollTo(0,0);
}
function clicBien(t){
  const a=t.dataset.a,f=S.bf;
  if(a==="bn-abrir"){abrirBien();render();return}
  if(!f)return;
  if(a==="bn-cancelar"){if(Object.keys(f.r).length&&!(S.bn&&S.bn.respuesta)&&!confirm("¿Salir sin enviar? Se perderán las respuestas."))return;S.bf=null;render();return}
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
