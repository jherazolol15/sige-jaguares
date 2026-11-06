/* SIGE Jaguares v4 · módulo Datos (Centro de datos: Datos, Comunidad, Asistencia).
   GENERADO por sige-jaguares/build_modulos.py desde centro-de-datos/dist. No editar a mano. */
(function(){
"use strict";
const HTML="<style>img{max-width:100%}[hidden]{display:none!important}\n/* Mismo sistema visual que Partido en vivo: banda verde de cancha, celeste de apoyo, marcos por posición. Una columna en teléfono, dos en pantallas anchas. */\n:host{display:block;\n  --brand:#0B4F7C; --pitch:#0d6b43; --pitch-2:#0b5d3a; --line:rgba(255,255,255,.75);\n  --bg:#F7FBFE; --surface:#FDFEFF; --surface-2:#EAF4FB; --ink:#0E2A40; --muted:#46607A;\n  --accent:#1874B0; --accent-ink:#ffffff; --sky:#1874B0; --sky-soft:#D9EEFA; --border:#C9E4F4;\n  --warn:#c98a00; --warn-soft:#fff3d1; --danger:#c3352b; --danger-soft:#fde3e0; --ok:#1f8a4c; --ok-soft:#dcf2e5;\n  --grid:rgba(14,42,64,.10);\n  --display:\"Barlow Condensed\",\"Arial Narrow\",Arial,sans-serif;\n  --body:\"Barlow\",\"Segoe UI\",Roboto,Arial,sans-serif;\n  --r:14px;\n  --pos-por:#1f6fe0; --pos-def:#1fa85a; --pos-med:#e2b40c; --pos-del:#e0342a;\n}\n@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){\n  --brand:#0e5c3b; --pitch:#0e5c3b; --pitch-2:#0b4f33; --line:rgba(255,255,255,.6);\n  --bg:#0B0F0D; --surface:#141A17; --surface-2:#1B2420; --ink:#ECF3EF; --muted:#9DB2A7;\n  --accent:#34D399; --accent-ink:#04140d; --sky:#5bc2e7; --sky-soft:#12313d; --border:#26332D;\n  --warn:#f0b429; --warn-soft:#3a2e0a; --danger:#ff6b5e; --danger-soft:#3d1714; --ok:#43c47a; --ok-soft:#143323;\n  --grid:rgba(232,243,239,.10);\n  color-scheme:dark}}\n:host([data-theme=\"dark\"]){\n  --brand:#0e5c3b; --pitch:#0e5c3b; --pitch-2:#0b4f33; --line:rgba(255,255,255,.6);\n  --bg:#0B0F0D; --surface:#141A17; --surface-2:#1B2420; --ink:#ECF3EF; --muted:#9DB2A7;\n  --accent:#34D399; --accent-ink:#04140d; --sky:#5bc2e7; --sky-soft:#12313d; --border:#26332D;\n  --warn:#f0b429; --warn-soft:#3a2e0a; --danger:#ff6b5e; --danger-soft:#3d1714; --ok:#43c47a; --ok-soft:#143323;\n  --grid:rgba(232,243,239,.10);\n  color-scheme:dark}\n*{box-sizing:border-box}\n.cd-body{min-height:100vh;background:var(--bg);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.4;-webkit-tap-highlight-color:transparent}\n\nbutton,input,select,textarea{font:inherit;color:inherit}\nbutton{cursor:pointer}\n:focus-visible{outline:3px solid var(--sky);outline-offset:2px}\n.num{font-variant-numeric:tabular-nums}\n@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}\n\n/* Encabezado */\n.top{position:sticky;top:0;z-index:20;background:var(--brand);color:#fff;\n  padding-block:calc(10px + env(safe-area-inset-top,0px)) 10px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}\n.top-in{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:10px}\n.crest-img{width:38px;height:38px;object-fit:contain;flex:none}\n.top .ttl{flex:1;min-width:0;display:flex;flex-direction:column}\n.top .ttl b{font-family:var(--display);font-weight:800;font-size:1.25rem;text-transform:uppercase;letter-spacing:.04em;line-height:1}\n.top .ttl span{font-size:.78rem;color:rgba(255,255,255,.8)}\n.ibtn{background:rgba(255,255,255,.14);border:0;color:#fff;border-radius:10px;min-height:40px;min-width:40px;padding:6px 10px;font-weight:700;font-size:.85rem;display:inline-flex;align-items:center;gap:6px}\n.ibtn svg{width:18px;height:18px}\n.ibtn.spin svg{animation:sp 1s linear infinite}\n@keyframes sp{to{transform:rotate(360deg)}}\n\nmain{max-width:1000px;margin:0 auto;padding-block:14px calc(110px + var(--nav,62px));padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));display:flex;flex-direction:column;gap:14px}\nh2{font-family:var(--display);font-weight:700;font-size:1.55rem;text-transform:uppercase;letter-spacing:.03em;margin:0;line-height:1.05;text-wrap:balance}\nh3{font-family:var(--display);font-weight:700;font-size:1.1rem;text-transform:uppercase;letter-spacing:.05em;margin:0}\n.sec{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:14px;display:flex;flex-direction:column;gap:12px;min-width:0}\n.sec-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}\n.hint{color:var(--muted);font-size:.88rem;margin:0}\n.cols{display:grid;grid-template-columns:1fr;gap:14px}\n@media (min-width:820px){.cols{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}\n.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n\n/* Filtros */\n.chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}\n.chips::-webkit-scrollbar{display:none}\n.fchip{flex:none;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:999px;padding:7px 14px;font-weight:600;font-size:.88rem;min-height:38px}\n.fchip[aria-pressed=\"true\"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}\n\n/* Cifras */\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(76px,1fr));gap:10px 8px}\n.kpi{display:flex;flex-direction:column;gap:2px;min-width:0}\n.kpi b{font-family:var(--display);font-weight:800;font-size:1.9rem;line-height:1;font-variant-numeric:tabular-nums}\n.kpi span{font-size:.68rem;line-height:1.15;overflow-wrap:anywhere;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}\n.record{display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap}\n.record .pts{font-family:var(--display);font-weight:800;font-size:3.6rem;line-height:.85;font-variant-numeric:tabular-nums}\n.record .pts small{display:block;font-size:.8rem;letter-spacing:.08em;color:var(--muted);font-weight:700;margin-top:6px}\n.bar-eff{height:8px;border-radius:99px;background:var(--surface-2);overflow:hidden}\n.bar-eff i{display:block;height:100%;background:var(--accent);border-radius:99px}\n\n/* Resultados */\n.res{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;font-family:var(--display);font-weight:800;font-size:1rem;color:#fff;flex:none}\n.res.G{background:var(--ok)}.res.E{background:var(--warn)}.res.P{background:var(--danger)}\n.streak{display:flex;gap:6px;flex-wrap:wrap}\n\n.chip{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;white-space:nowrap}\n.chip.les{background:var(--danger-soft);color:var(--danger)}\n.chip.sus{background:var(--warn-soft);color:var(--warn)}\n.chip.ina{background:var(--surface-2);color:var(--muted)}\n.chip.ok{background:var(--ok-soft);color:var(--ok)}\n.chip.b{background:var(--sky-soft);color:var(--sky)}\n.banner{border-radius:12px;padding:10px 12px;font-size:.92rem}\n.banner.warn{background:var(--warn-soft);border:1px solid var(--warn)}\n.banner.err{background:var(--danger-soft);border:1px solid var(--danger)}\n.banner.ok{background:var(--ok-soft);border:1px solid var(--ok)}\n\n/* Avatares */\n.av{width:44px;height:44px;border-radius:50%;flex:none;display:grid;place-items:center;background:var(--sky-soft);color:var(--ink);font-family:var(--display);font-weight:700;font-size:1rem;overflow:hidden;border:3px solid var(--border)}\n.av.g-por{border-color:var(--pos-por)}.av.g-def{border-color:var(--pos-def)}.av.g-med{border-color:var(--pos-med)}.av.g-del{border-color:var(--pos-del)}\n.av img{width:100%;height:100%;object-fit:cover}\n.av.xl{width:96px;height:96px;font-size:1.8rem;border-width:4px}\n.av.sm{width:32px;height:32px;font-size:.8rem;border-width:2px}\n\n/* Listas */\n.list{display:flex;flex-direction:column;gap:6px}\n.li{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:var(--surface-2);min-height:54px;width:100%;text-align:left;border:0;color:inherit}\nbutton.li:hover{background:var(--sky-soft)}\n.li .meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.li .nm{font-weight:700;overflow-wrap:anywhere;line-height:1.2}\n.li .sub{font-size:.82rem;color:var(--muted)}\n.li .end{display:flex;flex-direction:column;align-items:flex-end;gap:2px;flex:none}\n.li .big{font-family:var(--display);font-weight:800;font-size:1.3rem;line-height:1;font-variant-numeric:tabular-nums}\n.ab{font-family:var(--display);font-weight:700;letter-spacing:.05em}\n\n.search{width:100%;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:11px 12px;min-height:46px;font-size:1rem}\n\n/* Partido */\n.mcard{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center}\n.score{font-family:var(--display);font-weight:800;font-size:1.6rem;font-variant-numeric:tabular-nums;white-space:nowrap}\n.board{background:var(--brand);color:#fff;border-radius:var(--r);padding:16px 14px;display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;text-align:center}\n.board .tm{display:flex;flex-direction:column;align-items:center;gap:6px;font-family:var(--display);font-weight:700;text-transform:uppercase;letter-spacing:.03em;line-height:1.1;min-width:0;overflow-wrap:anywhere}\n.board .sc{font-family:var(--display);font-weight:800;font-size:3rem;line-height:1;font-variant-numeric:tabular-nums}\n.board .sc small{display:block;font-size:.8rem;letter-spacing:.08em;color:var(--sky-soft);font-weight:600;margin-top:4px}\n.phase{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:center}\n.dots5{display:flex;gap:4px}\n.dots5 i{width:16px;height:16px;border-radius:4px;background:var(--surface-2);border:1px solid var(--border)}\n.dots5 i.on{background:var(--accent);border-color:var(--accent)}\n.phase p{grid-column:1/-1;margin:0 0 6px;font-size:.88rem;color:var(--muted)}\n.txt{white-space:pre-line;margin:0;font-size:.95rem}\n.tl{display:flex;flex-direction:column;gap:6px}\n.tl .ev{display:grid;grid-template-columns:44px 1fr;gap:8px;align-items:baseline;font-size:.92rem}\n.tl .ev b{font-family:var(--display);font-weight:700;font-size:1rem;text-align:right;font-variant-numeric:tabular-nums}\n\n/* Tablas */\n.tw{overflow-x:auto;margin-inline:-4px}\ntable{width:100%;border-collapse:collapse;font-size:.9rem;font-variant-numeric:tabular-nums}\nth{font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);text-align:right;padding:6px 6px;font-weight:700;white-space:nowrap}\ntd{padding:7px 6px;text-align:right;border-top:1px solid var(--border);white-space:nowrap}\nth:first-child,td:first-child{text-align:left}\ntd.n{white-space:normal;min-width:140px}\n\n/* Gráficos */\n.chart{width:100%;height:auto;display:block;overflow:visible}\n.chart text{fill:var(--muted);font-family:var(--body);font-size:12px}\n.chart .gl{stroke:var(--grid);stroke-width:1}\n.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:.8rem;color:var(--muted)}\n.legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}\n.hbar{display:grid;grid-template-columns:minmax(0,1fr);gap:3px}\n.hbar .lb{display:flex;justify-content:space-between;gap:8px;font-size:.88rem}\n.hbar .lb span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}\n.hbar .tr{height:12px;border-radius:6px;background:var(--surface-2);display:flex;overflow:hidden}\n.hbar .tr i{display:block;height:100%}\n.c-tit{background:var(--accent)}.c-sup{background:var(--sky)}\n.hbar.low .lb span:first-child{color:var(--danger)}\n\n/* Ficha del jugador */\n.hero{display:flex;gap:14px;align-items:center}\n.hero .meta{display:flex;flex-direction:column;gap:4px;min-width:0}\n.facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.fact{background:var(--surface-2);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;gap:2px;min-width:0}\n.fact span{font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700}\n.fact b{font-weight:700;overflow-wrap:anywhere}\n.cmp{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 10px;font-size:.9rem;align-items:center}\n.cmp .tr{grid-column:1/-1;position:relative;height:10px;border-radius:5px;background:var(--surface-2);margin-bottom:8px}\n.cmp .tr i{position:absolute;left:0;top:0;bottom:0;border-radius:5px;background:var(--accent)}\n.cmp .tr em{position:absolute;top:-3px;bottom:-3px;width:3px;border-radius:2px;background:var(--ink)}\n.pending{border:1px dashed var(--border);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:4px;background:transparent}\n.pending b{font-family:var(--display);text-transform:uppercase;letter-spacing:.04em}\n.adots{display:flex;gap:4px;flex-wrap:wrap}\n.adots i{width:14px;height:14px;border-radius:4px}\n.a-Presente{background:var(--ok)}.a-Ausente{background:var(--danger)}.a-Justificado{background:var(--warn)}.a-Lesionado{background:var(--sky)}.a-Otro{background:var(--muted)}\n\n/* Formulario */\nlabel.f{display:flex;flex-direction:column;gap:4px;font-size:.76rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;min-width:0}\nlabel.f input,label.f select,label.f textarea{font-size:1rem;text-transform:none;letter-spacing:0;color:var(--ink);background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;min-height:46px;width:100%;font-weight:500}\n.fgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.btn{border-radius:12px;min-height:50px;padding:10px 18px;font-weight:700;font-size:1rem;background:var(--surface-2);color:var(--ink);border:1px solid var(--border)}\n.btn.pri{background:var(--accent);color:var(--accent-ink);border-color:transparent}\n.btn.wide{width:100%}\n.btn.sm{min-height:38px;padding:6px 12px;font-size:.88rem}\n.btn:disabled{opacity:.45;cursor:not-allowed}\n.att{display:flex;flex-direction:column;gap:6px;padding:8px 10px;border-radius:12px;background:var(--surface-2)}\n.att-top{display:flex;align-items:center;gap:10px}\n.att-top .meta{display:flex;flex-direction:column;gap:2px}\n.att-top .sub{font-size:.8rem;color:var(--muted)}\n.seg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}\n.seg button{border:1px solid var(--border);background:var(--surface);border-radius:8px;min-height:38px;font-size:.78rem;font-weight:700;padding:2px}\n.seg button[aria-pressed=\"true\"].Presente{background:var(--ok);color:#fff;border-color:var(--ok)}\n.seg button[aria-pressed=\"true\"].Ausente{background:var(--danger);color:#fff;border-color:var(--danger)}\n.seg button[aria-pressed=\"true\"].Justificado{background:var(--warn);color:#2b1d00;border-color:var(--warn)}\n.seg button[aria-pressed=\"true\"].Lesionado{background:var(--sky);color:#062430;border-color:var(--sky)}\n.more{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.more label.f input,.more label.f select{min-height:40px;padding:6px 8px}\n.linkbtn{background:none;border:0;color:var(--sky);font-weight:700;font-size:.82rem;padding:4px 0;text-align:left}\n.sumbox{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;text-align:center}\n.sumbox div{background:var(--surface-2);border-radius:10px;padding:8px 4px}\n.sumbox b{display:block;font-family:var(--display);font-size:1.5rem;font-weight:800;line-height:1}\n.sumbox span{font-size:.68rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);font-weight:700}\n\n/* Barra inferior */\n.tabs{position:fixed;left:0;right:0;bottom:calc(var(--nav,62px) + env(safe-area-inset-bottom,0px));z-index:25;background:var(--surface);border-top:1px solid var(--border);\n  padding-bottom:0;padding-left:max(6px,env(safe-area-inset-left,0px));padding-right:max(6px,env(safe-area-inset-right,0px))}\n.tabs-in{max-width:620px;margin:0 auto;display:grid;grid-template-columns:repeat(5,minmax(0,1fr))}\n.tabs a{display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 2px 9px;font-size:.7rem;font-weight:700;letter-spacing:.03em;color:var(--muted);text-decoration:none;text-transform:uppercase}\n.tabs a svg{width:22px;height:22px}\n.tabs a[aria-current=\"page\"]{color:var(--accent)}\n.tabs a .badge{position:absolute;margin-left:18px;margin-top:-2px;background:var(--warn);color:#2b1d00;border-radius:99px;font-size:.62rem;padding:0 5px}\n.toast{position:fixed;left:50%;bottom:calc(84px + var(--nav,62px) + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:12px;font-weight:600;z-index:40;max-width:calc(100% - 32px);text-align:center}\n.back{display:inline-flex;align-items:center;gap:4px;background:none;border:0;color:var(--sky);font-weight:700;padding:4px 0;min-height:36px}\n.skel{height:90px;border-radius:var(--r);background:linear-gradient(90deg,var(--surface-2),var(--surface),var(--surface-2));background-size:200% 100%;animation:sk 1.4s ease infinite}\n@keyframes sk{to{background-position:-200% 0}}\n.empty{color:var(--muted);font-size:.92rem;padding:6px 0}\n.subnav{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin-bottom:-4px}\n.subnav::-webkit-scrollbar{display:none}\n.subnav a{flex:none;text-decoration:none;color:var(--muted);font-weight:700;font-size:.86rem;text-transform:uppercase;letter-spacing:.04em;padding:8px 12px;border-radius:10px;border:1px solid var(--border);background:var(--surface)}\n.subnav a[aria-current=\"page\"]{background:var(--brand);color:#fff;border-color:var(--brand)}\n.pitchbox{position:relative;width:100%;max-width:420px;margin:0 auto;aspect-ratio:68/100;border-radius:12px;overflow:hidden;background:repeating-linear-gradient(180deg,var(--pitch) 0 10%,var(--pitch-2) 10% 20%)}\n.pitchbox .ln{position:absolute;border:2px solid var(--line);pointer-events:none}\n.node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:0;padding:0;color:#fff;width:23%}\n.node .ring{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-family:var(--display);font-weight:800;font-size:1.45rem;line-height:1;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);font-variant-numeric:tabular-nums}\n.node .ring.ok{background:#1f8a4c}.node .ring.warn{background:#c98a00}.node .ring.bad{background:#c3352b}\n.node.sel .ring{outline:3px solid var(--sky);outline-offset:2px}\n.node .lb{font-family:var(--display);font-weight:700;font-size:.78rem;letter-spacing:.06em;background:rgba(0,0,0,.4);padding:0 6px;border-radius:4px}\n.scorebar{height:8px;border-radius:4px;background:var(--surface-2);overflow:hidden;margin-top:4px}\n.scorebar i{display:block;height:100%;background:var(--accent);border-radius:4px}\n.decbtn{border:1px solid var(--border);background:var(--surface);border-radius:10px;min-height:40px;min-width:92px;font-weight:700;font-size:.8rem;padding:4px 8px}\n.decbtn.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n.decbtn.no{background:var(--danger-soft);color:var(--danger);border-color:var(--danger)}\n.ccard{display:flex;flex-direction:column;gap:6px;padding:10px;border-radius:12px;background:var(--surface-2)}\n.ccard.chg{outline:2px solid var(--sky)}\n.cmpgrid{display:grid;gap:8px;align-items:center;font-variant-numeric:tabular-nums}\n.cmpgrid .h{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;font-weight:700;font-size:.85rem;min-width:0;overflow-wrap:anywhere}\n.cmpgrid .k{font-size:.78rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.04em}\n.cmpgrid .v{text-align:center;font-weight:600;padding:6px 2px;border-radius:8px}\n.cmpgrid .v.best{background:var(--ok-soft);color:var(--ok);font-weight:800}\n.light{width:14px;height:14px;border-radius:50%;flex:none;background:var(--surface-2);border:2px solid var(--border)}\n.light.l0{background:var(--ok);border-color:var(--ok)}.light.l1{background:var(--warn);border-color:var(--warn)}.light.l2{background:var(--danger);border-color:var(--danger)}\n.heat{border-collapse:separate;border-spacing:3px;width:auto;font-size:.8rem}\n.heat td,.heat th{border:0;padding:0;white-space:nowrap;text-align:center}\n.heat th{font-size:.66rem;vertical-align:bottom;padding-bottom:4px;height:44px}\n.heat th span{display:inline-block;writing-mode:vertical-rl;transform:rotate(180deg)}\n.heat td.nm,.heat th.hn{position:sticky;left:0;background:var(--surface);padding-right:8px;text-align:left;font-weight:600;max-width:120px;overflow:hidden;text-overflow:ellipsis;z-index:1}\n.heat td.nm a{color:inherit;text-decoration:none}\n.heat i{display:block;width:18px;height:18px;border-radius:4px;background:var(--surface-2)}\n.heat td.pc{padding-left:8px;font-weight:700;text-align:right}\n.heat td.tp{font-size:.62rem;color:var(--muted);font-weight:700}\n.seg5{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin-top:4px}\n.seg5 button{border:1px solid var(--border);background:var(--surface-2);border-radius:10px;min-height:44px;font-family:var(--display);font-weight:800;font-size:1.2rem}\n.seg5 button[aria-pressed=\"true\"]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n.resin{width:96px;flex:none;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:8px 10px;min-height:44px;font-size:1.05rem;text-align:right;font-variant-numeric:tabular-nums}\n.club-hero{background:var(--brand);color:#fff;border-radius:var(--r);padding:16px 14px}\n.ch-in{display:flex;align-items:center;gap:14px}\n.ch-in .crest-img{width:60px;height:60px}\n.ch-t{display:flex;flex-direction:column;gap:3px;min-width:0}\n.ch-t b{font-family:var(--display);font-weight:800;font-size:1.6rem;text-transform:uppercase;letter-spacing:.03em;line-height:1}\n.ch-t span{color:rgba(255,255,255,.85);font-size:.92rem}\n.nm-card{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;text-align:center}\n.nm-tm{display:flex;flex-direction:column;align-items:center;gap:6px;font-weight:700;font-size:.92rem;min-width:0;overflow-wrap:anywhere}\n.nm-tm .crest-img{width:52px;height:52px}\n.nm-mid{display:flex;flex-direction:column;gap:2px}\n.nm-mid b{font-family:var(--display);font-weight:800;font-size:1.6rem;line-height:1.05}\n.nm-mid span{color:var(--muted);font-size:.85rem}\n.form5{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}\n.f5{display:flex;flex-direction:column;align-items:center;gap:8px;text-decoration:none;color:inherit;position:relative;padding-bottom:12px}\n.f5s{width:100%;text-align:center;border-radius:8px;padding:6px 2px;font-family:var(--display);font-weight:800;font-size:1.05rem;color:#fff;font-variant-numeric:tabular-nums}\n.f5s.G{background:var(--ok)}.f5s.E{background:var(--muted)}.f5s.P{background:var(--danger)}\n.f5d{position:absolute;bottom:0;width:7px;height:7px;border-radius:50%;background:var(--muted)}\n.ci{display:flex;flex-direction:column;gap:12px}\n.ci-row{display:flex;align-items:center;gap:12px}\n.ci-ic{width:40px;height:40px;flex:none;display:grid;place-items:center;color:var(--muted)}\n.ci-ic svg{width:26px;height:26px}\n.ci-row .meta{display:flex;flex-direction:column;gap:1px;min-width:0}\n.ci-k{font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700}\n.ci-v{font-weight:600;font-size:1rem}\n.stickybar{position:sticky;bottom:calc(64px + var(--nav,62px) + env(safe-area-inset-bottom,0px));z-index:15;background:var(--surface);border:2px solid var(--accent);border-radius:var(--r);padding:10px;display:flex;flex-direction:column;gap:8px;box-shadow:0 6px 18px rgba(0,0,0,.18)}\n:host([data-comunidad]) .tabs,:host([data-comunidad]) .subnav{display:none!important}</style><div class=\"cd-body\"><header class=\"top\">\n  <div class=\"top-in\">\n    <span id=\"crest\"></span>\n    <div class=\"ttl\"><b>Centro de datos</b><span id=\"stamp\">Jaguares de Córdoba · Sub-15</span></div>\n    <button class=\"ibtn\" id=\"thm\" type=\"button\" aria-label=\"Cambiar entre modo día y noche\"></button><button class=\"ibtn\" id=\"refresh\" type=\"button\" aria-label=\"Actualizar datos de la hoja\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\"><path d=\"M20 11a8 8 0 1 0-2.3 5.7\"/><path d=\"M20 4v7h-7\"/></svg></button>\n  </div>\n</header>\n<main id=\"app\"><div class=\"skel\"></div><div class=\"skel\"></div></main>\n<nav class=\"tabs\" aria-label=\"Secciones\">\n  <div class=\"tabs-in\" id=\"tabs\"></div>\n</nav>\n<div id=\"toast\" class=\"toast\" hidden></div></div>";
window.SIGE_MOD=window.SIGE_MOD||{};
/** Monta el Centro en `host`. api: {sub(), navegar(ruta), base}. */
window.SIGE_MOD.datos=function(host,api){
  const sr=host.attachShadow({mode:"open"});sr.innerHTML=HTML;
  const body=sr.querySelector(".cd-body"),__hashL=[];
  const doc={
    getElementById:id=>sr.getElementById(id),
    querySelector:s=>sr.querySelector(s),
    querySelectorAll:s=>sr.querySelectorAll(s),
    addEventListener:(t,f,o)=>sr.addEventListener(t,f,o),
    createElement:t=>window.document.createElement(t),
    get activeElement(){return sr.activeElement},
    get visibilityState(){return window.document.visibilityState},
    documentElement:host,
    head:{appendChild:el=>el.tagName==="SCRIPT"?window.document.head.appendChild(el):sr.appendChild(el)},
    body
  };
  const loc={
    get hash(){const h=api.sub();return h?"#"+h:""},
    set hash(v){api.navegar(String(v||"").replace(/^#/,""))},
    get href(){return window.location.origin+"/centro-de-datos/"},
    get origin(){return window.location.origin},
    get pathname(){return "/centro-de-datos/"},
    reload(){window.location.reload()}
  };
  window.__cddDoc=doc;
  // Los enlaces internos del Centro (<a href="#jugadores">, barras de secciones) cambian la sub-ruta de la app
  sr.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;e.preventDefault();loc.hash=a.getAttribute("href")});
  // Lo que antes hacía la cabecera del Centro: acceso diferido al puente y tema guardado
  window.foto=function(){return null};window.__ready=new Promise(function(r){window.__setReady=r});window.claude={use:function(n){return window.__ready.then(function(c){return c.use(n)})}};
  try{const t=JSON.parse(localStorage.getItem("cdd1:theme")||'"auto"');if(t==="light"||t==="dark")host.setAttribute("data-theme",t)}catch(e){}
  const s=window.document.createElement("script");s.type="module";s.src=api.base+"mod-datos-adapter.js";window.document.head.appendChild(s);
  (function(document,location){
"use strict";
/* ============ Constantes ============ */
const SHEET_ID="";
const GS="Google Sheets";
const PARTIDO_EN_VIVO="https://jherazolol15.github.io/partido-en-vivo/";
const TEAM="Jaguares de Córdoba";
/* Fotos copiadas de Partido en vivo (id de jugador → archivo de esta app) */
let FOTOS={},CRESTS={lista:[],alias:{}};
let LOGO="";
const ASIS=["Presente","Ausente","Justificado","Lesionado","Selección/Otro"];
const TIPOS_DEF=["Campo","Gimnasio","Campo + Gimnasio","Recuperación","Amistoso interno","Charla/Video"];
const POS_AB={"Portero":"POR","Lateral derecho":"LAD","Lateral izquierdo":"LAI","Defensa central":"DEF","Mediocampista defensivo":"MCD","Mediocampista mixto":"MED","Mediocampista ofensivo":"MCO","Extremo derecho":"EDR","Extremo izquierdo":"EIZ","Delantero centro":"DEL"};
const FASES=[["Organización ofensiva",17],["Transición defensa-ataque",19],["Organización defensiva",21],["Transición ataque-defensa",23],["Balón parado",25]];

const S={mcp:null,ok:false,loading:false,err:null,stamp:null,offline:false,
  jug:[],partidos:[],stats:[],eventos:[],informes:{},lesiones:[],sanciones:[],sesiones:[],panel:{},config:{},tipos:TIPOS_DEF,
  comp:"Todas",grupo:"Todos",q:"",reg:null,queue:[],wq:[],busy:false,confirm:false,
  zonas:["Tobillo","Rodilla","Muslo posterior","Muslo anterior","Aductor","Gemelo","Cadera/Pelvis","Espalda","Hombro","Mano/Muñeca","Cabeza","Pie","Otra"],contextos:["Entrenamiento","Partido","Fuera del club"],
  conv:{rows:[]},prof:{},tests:[],evals:[],bien:[],testCat:[{n:"Course-Navette",u:"palier",mejor:"Mayor"}],tomas:["T1","T2","T3","T4"],evaluadores:["DT"],testSel:"",asisRng:"4s",rt:null,re:null,crests:{},dph:{},imgStatus:"",convEdit:{},convOpen:null,cmp:[],profSel:"",les:null,san:null,act:null};

/* ============ Utilidades ============ */
const LSK="cdd1:";
const LS={get(k,d){try{const v=localStorage.getItem(LSK+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(LSK+k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(LSK+k)}catch(e){}}};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function num(v){if(v==null||v==="")return null;if(typeof v==="number")return v;const s=String(v).replace(/%$/,"").replace(/\./g,"").replace(",",".").trim();const n=Number(s);return isFinite(n)?n:null}
function numDec(v){if(v==null||v==="")return null;if(typeof v==="number")return v;const n=Number(String(v).trim().replace(",","."));return isFinite(n)?n:null}
function pDate(s){if(!s)return null;const m=String(s).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(!m)return null;return new Date(+m[3],+m[2]-1,+m[1])}
function dKey(d){return d?d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"):""}
function dShort(d){return d?d.getDate()+"/"+(d.getMonth()+1):""}
const MES=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
function dLong(d){return d?d.getDate()+" "+MES[d.getMonth()]+" "+d.getFullYear():""}
function fmt1(n){return n==null||!isFinite(n)?"–":(Math.round(n*10)/10).toLocaleString("es-CO",{maximumFractionDigits:1})}
function pct(n){return n==null||!isFinite(n)?"–":Math.round(n*100)+"%"}
function nameOf(lbl){return String(lbl||"").replace(/^P\d+\s*·\s*/,"")}
function shortName(full){const p=String(full||"").split(/\s+/);return p.length>=3?p[0]+" "+p[p.length-2]:full}
function posGroup(p){p=String(p||"");if(/Portero/i.test(p))return "por";if(/Lateral|Defensa/i.test(p))return "def";if(/Mediocampista/i.test(p))return "med";if(/Extremo|Delantero/i.test(p))return "del";return ""}
function initials(n){const p=String(n||"").split(/\s+/).filter(Boolean);return ((p[0]||"?")[0]+((p[p.length>2?p.length-2:1]||"")[0]||"")).toUpperCase()}
function avatar(j,cls){const g=posGroup(j&&j.pos1);const f=j&&FOTOS[j.id]&&window.foto(FOTOS[j.id]),d=null;return `<span class="av ${cls||""} ${g?"g-"+g:""}">${f?`<img src="${f}" alt="">`:d?`<img src="${d}" alt="">`:esc(initials(j&&j.nombre))}</span>`}
const SHIELD="M20 1 L38 7 V22 C38 34 30 41 20 45 C10 41 2 34 2 22 V7 Z";
function rivalInitials(name){const stop=new Set(["FC","F.C.","CD","C.D.","CLUB","DE","DEL","LA","LAS","LOS","EL","Y","FÚTBOL","FUTBOL","ESCUELA","DEPORTIVO","SUB"]);
  const w=String(name||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().split(/[\s\-.]+/).filter(x=>x&&!stop.has(x)&&!/^\d/.test(x));
  if(!w.length)return "R";if(w.length===1)return w[0].slice(0,2);return (w[0][0]+w[1][0])}
function rivalHue(name){let h=0;for(const ch of String(name||""))h=(h*31+ch.charCodeAt(0))>>>0;return h%360}
function rivalCrest(name,px){const cu=crestUrl(name);if(cu){px=px||30;return `<img src="${cu}" alt="" style="width:${px}px;height:${Math.round(px*46/40)}px;object-fit:contain;flex:none">`}const t=rivalInitials(name),h=rivalHue(name);px=px||30;return `<svg width="${px}" height="${Math.round(px*46/40)}" viewBox="0 0 40 46" aria-hidden="true"><path d="${SHIELD}" fill="hsl(${h} 42% 36%)" stroke="#fff" stroke-width="2.2"/><path d="M4 17 H36" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/><text x="20" y="${t.length>1?32:33}" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, Arial, sans-serif" font-weight="800" font-size="${t.length>1?15:18}" fill="#fff">${esc(t)}</text></svg>`}
function ourCrest(px){const L=LOGO&&window.foto(LOGO);return L?`<img class="crest-img" src="${L}" alt="" style="width:${px}px;height:${px}px">`:rivalCrest(TEAM,px)}
function toast(t){const e=document.getElementById("toast");e.textContent=t;e.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>e.hidden=true,3200)}
function todayISO(){const d=new Date();return dKey(d)}
function isoToDate(iso){const [y,m,d]=String(iso).split("-").map(Number);return new Date(y,m-1,d)}

/* ============ Conexión con la hoja ============ */
function gsErrorText(e){
  const c=e&&e.code;
  if(c==="needs_reauth")return "La clave del puente ya no es válida. Recarga la app y entra con la clave nueva del DT.";
  if(c==="server_not_connected"||c==="selection_required")return "Esta app necesita tu conector de Google Sheets. Agrégalo en claude.ai → Configuración → Conectores.";
  if(c==="not_in_manifest"||c==="approval_required"||c==="consent_required")return "No se permitió el acceso a Google Sheets. Toca Actualizar y acepta el permiso.";
  if(c==="not_granted"||c==="capability_disabled"||c==="capability_removed")return "Esta vista no puede leer Google Sheets. Ábrela desde claude.ai con tu cuenta.";
  if(c==="server_unavailable"||c==="upstream_error")return "Sin señal o el puente no respondió. Revisa la conexión y toca Actualizar.";
  if(c==="no_mcp")return "Configura el acceso al puente para leer la hoja.";if(c==="sin_permiso")return "Esta app necesita la clave del DT.";
  return "No se pudo leer la hoja: "+((e&&e.message)||"sin detalle");
}
async function gs(tool,input){
  if(!S.mcp)throw {code:"no_mcp"};
  const r=await S.mcp.callTool(GS,tool,Object.assign({spreadsheetId:SHEET_ID},input),{cache:false});
  return r.payload;
}
async function readRange(range){const p=await gs("get_values",{range});return (p&&p.values)||[]}
async function readRetry(range){try{return await readRange(range)}catch(e){if(e&&e.retryable){await new Promise(r=>setTimeout(r,(e.retryAfterMs||800)+Math.random()*600));return await readRange(range)}throw e}}

/* Datos sensibles de Plantilla (R–V) nunca se piden: solo A–E, H–Q y W–X. Tampoco F (fecha) ni G (lugar). */
const RANGES={
  pA:"Plantilla!A2:E41",pB:"Plantilla!H2:Q41",pC:"Plantilla!W2:X41",
  partidos:"Partidos!A2:M200",stats:"Stats_Partido!A2:U2000",eventos:"Eventos!A2:K4000",inf:"Informe_Partido!A2:AJ300",
  les:"Lesiones!A2:L300",san:"Sanciones!A2:J300",ses:"Sesiones!A2:K3000",panel:"Panel!A11:X50",config:"Config!A1:B60",listas:"Listas!C2:Q14",tests:"Tests_Fisicos!A2:I800",eval:"Eval_Formativa!A2:Q500",bien:"Bienestar!A2:U1000",conv:"Convocatoria!A2:R44",prof:"Profundidad!A5:J16"
};
async function loadAll(){
  if(S.loading)return;S.loading=true;setRefreshSpin(true);
  try{
    const keys=Object.keys(RANGES);
    const out=await Promise.all(keys.map(k=>readRetry(RANGES[k]).then(v=>({k,v}),e=>({k,e}))));
    const fail=out.find(o=>o.e&&["pA","partidos","stats"].includes(o.k));
    if(fail)throw fail.e;
    const raw={};out.forEach(o=>raw[o.k]=o.e?null:o.v);
    parseAll(raw);S.ok=true;S.err=null;S.offline=false;S.stamp=Date.now();
    LS.set("snap",{raw,stamp:S.stamp});
    const partial=out.filter(o=>o.e).map(o=>o.k);
    if(partial.length)toast("Algunas pestañas no respondieron. Toca Actualizar más tarde.");
  }catch(e){
    S.err=gsErrorText(e);
    const snap=LS.get("snap",null);
    if(snap&&!S.ok){try{parseAll(snap.raw);S.ok=true;S.offline=true;S.stamp=snap.stamp}catch(x){}}
    else if(S.ok)S.offline=true;
  }finally{S.loading=false;setRefreshSpin(false);render()}
}
function setRefreshSpin(on){const b=document.getElementById("refresh");if(b)b.classList.toggle("spin",!!on)}

function parseAll(r){
  const A=r.pA||[],B=r.pB||[],C=r.pC||[];
  S.jug=[];
  A.forEach((row,i)=>{if(!row||!row[0]||!row[1])return;const b=B[i]||[],c=C[i]||[];
    S.jug.push({id:row[0],label:row[1],nombre:nameOf(row[1]),dorsal:row[2]||"",edad:b[0]||"",trim:b[1]||"",pos1:b[2]||"",pos2:b[3]||"",pierna:b[4]||"",est:b[5]||"",peso:b[6]||"",imc:b[7]||"",estado:b[8]||"Activo",disp:b[9]||"Disponible",obs:c[0]||"",grupo:String(c[1]||"").trim(),retirado:/retir|promov/i.test(b[8]||""),promovido:/promov/i.test(b[8]||""),row:i+2})});
  S.fixtures=(r.partidos||[]).filter(x=>x&&x[0]&&x[3]&&(x[6]===""||x[6]==null)).map(x=>({id:x[0],fecha:pDate(x[1]),comp:x[2]||"",rival:x[3],loc:x[4]||""})).filter(p=>p.fecha&&p.fecha>=today0()).sort((a,b)=>a.fecha-b.fecha);
  S.partidos=(r.partidos||[]).filter(x=>x&&x[0]&&x[3]).map(x=>({id:x[0],fecha:pDate(x[1]),comp:x[2]||"",rival:x[3],loc:x[4]||"",micro:x[5]||"",gf:num(x[6]),gc:num(x[7]),res:x[8]||"",pts:num(x[9]),label:x[10]||"",obs:x[11]||"",dur:num(x[12])||80}))
    .filter(p=>p.gf!=null&&p.gc!=null).sort((a,b)=>(a.fecha||0)-(b.fecha||0)||a.id.localeCompare(b.id));
  S.partidos.forEach(p=>{if(!p.res)p.res=p.gf>p.gc?"G":p.gf<p.gc?"P":"E";if(p.pts==null)p.pts=p.res==="G"?3:p.res==="E"?1:0});
  S.stats=(r.stats||[]).filter(x=>x&&x[1]&&x[5]).map(x=>({pt:x[1],comp:x[3]||"",jid:x[5],cond:x[6]||"",ent:num(x[7]),sal:num(x[8]),min:num(x[9])||0,g:num(x[10])||0,a:num(x[11])||0,am:num(x[12])||0,ro:num(x[13])||0,mvp:/^(s[ií]|1|x|true|mvp)$/i.test(String(x[14]||"").trim()),nota:numDec(x[15]),rpe:numDec(x[16]),gr:num(x[18]),pa:num(x[19]),obs:x[20]||""}));
  S.eventos=(r.eventos||[]).filter(x=>x&&x[1]).map(x=>({id:x[0],pt:x[1],per:x[2]||"",min:num(x[3]),tipo:x[4]||"",jug:x[5]||"",jid:x[6]||"",rel:x[7]||"",det:x[8]||"",mp:num(x[9]),mr:num(x[10])}));
  S.informes={};(r.inf||[]).forEach(x=>{if(x&&x[0])S.informes[x[0]]=x});
  S.lesiones=(r.les||[]).filter(x=>x&&x[1]).map(x=>({jid:x[1],fecha:pDate(x[2]),zona:x[3]||"",desc:x[4]||"",ctx:x[5]||"",altaPrev:pDate(x[6]),altaReal:pDate(x[7]),dias:num(x[8]),estado:x[9]||"",obs:x[10]||"",seg:x[11]||""}));
  S.sanciones=(r.san||[]).filter(x=>x&&x[1]).map(x=>({jid:x[1],fecha:pDate(x[2]),partido:x[3]||"",motivo:x[4]||"",fechas:num(x[5]),cumplidas:num(x[6]),rest:num(x[7]),estado:x[8]||"",obs:x[9]||""}));
  S.sesiones=(r.ses||[]).map((x,i)=>({row:i+2,fecha:pDate(x&&x[0]),micro:x&&x[1]||"",tipo:x&&x[2]||"",jug:x&&x[3]||"",jid:(x&&x[4])||String(x&&x[3]||"").slice(0,3),asis:x&&x[5]||"",min:num(x&&x[6]),rpe:numDec(x&&x[7]),obs:x&&x[9]||""})).filter(s=>s.fecha&&s.jug);
  S.sesRows=(r.ses||[]).length;
  S.panel={};(r.panel||[]).forEach(x=>{if(x&&/^P\d+/.test(x[0]||""))S.panel[x[0]]={asis:x[15]||"",alertas:String(x[20]||"").trim(),c7:x[16],c28:x[17],acwr:x[18],bien:x[21],dbien:x[22],resp:x[23]}});
  const cf={};(r.config||[]).forEach(x=>{if(x&&x[0])cf[x[0]]=x[1]});fichaDe(cf);
  S.config={micro:cf["Microciclo actual"]||"",duracion:num(cf["Duración del partido (min)"])||80,asisMin:num(cf["Asistencia mínima"]),acwrHi:numDec(cf["ACWR alto"]),acwrLo:numDec(cf["ACWR bajo"]),bienBajo:num(cf["Bienestar bajo (índice menor a)"]),temporada:cf["Temporada"]||""};
  const ls=r.listas||[];const tipos=ls.map(x=>x&&x[1]).filter(Boolean);if(tipos.length)S.tipos=tipos;
  const zonas=ls.map(x=>x&&x[11]).filter(Boolean);if(zonas.length)S.zonas=zonas;
  const ctx=ls.map(x=>x&&x[12]).filter(Boolean);if(ctx.length)S.contextos=ctx;
  const tc=ls.filter(x=>x&&x[7]).map(x=>({n:x[7],u:x[8]||"",mejor:x[9]||"Mayor"}));if(tc.length)S.testCat=tc;
  const tm=ls.map(x=>x&&x[10]).filter(Boolean);if(tm.length)S.tomas=tm;
  const evs=ls.map(x=>x&&x[14]).filter(Boolean);if(evs.length)S.evaluadores=evs;
  S.tests=(r.tests||[]).filter(x=>x&&x[2]&&x[4]&&x[5]!==""&&x[5]!=null).map(x=>({f:pDate(x[0]),toma:x[1]||"",jid:x[3]||String(x[2]).slice(0,3),test:x[4],res:numDec(x[5]),eval:x[7]||""})).filter(t=>t.res!=null);
  S.evals=(r.eval||[]).filter(x=>x&&x[0]&&x[2]).map(x=>({f:pDate(x[0]),per:x[1]||"",jid:x[3]||String(x[2]).slice(0,3),tec:numDec(x[4]),tac:numDec(x[5]),fis:numDec(x[6]),psi:numDec(x[7]),dep:numDec(x[8]),gen:numDec(x[9]),fort:x[11]||"",mej:x[12]||"",oc:x[13]||"",om:x[14]||"",ol:x[15]||"",obs:x[16]||""})).filter(e=>e.f).sort((a,b)=>a.f-b.f);
  S.bien=(r.bien||[]).filter(x=>x&&x[0]&&x[1]).map(x=>{const f=pDate(x[0]);return {f,sem:f?monday(f):null,jid:x[12]||String(x[1]).slice(0,3),horas:x[3]||"",mol:x[7]||"",animo:numDec(x[8]),exig:numDec(x[10]),com:x[11]||"",idx:numDec(x[14]),rep:x[17]||"",alertas:String(x[20]||"").trim()}}).filter(b=>b.f);
  const cv=r.conv||[];const h0=cv[0]||[];
  S.conv={ventana:h0[1]||"",cupos:num(h0[4]),convocados:num(h0[8])||0,ok:!!r.conv,rows:[]};
  cv.slice(3).forEach((x,i)=>{if(!x||!/^P\d+/.test(x[0]||"")||!x[1])return;S.conv.rows.push({row:i+5,id:x[0],nombre:x[1],pos:x[2]||"",disp:x[3]||"",sesComp:num(x[4]),pres:num(x[5]),asis:x[6]||"",min:num(x[7]),nota:numDec(x[8]),eval:numDec(x[9]),act:numDec(x[10]),nec:num(x[11]),punt:numDec(x[12]),rank:num(x[13]),sug:x[14]||"",dec:x[15]||"",just:x[16]||"",grupo:x[17]||""})});
  S.prof={};(r.prof||[]).forEach(x=>{if(x&&POS_AB[x[0]])S.prof[x[0]]={n:num(x[1])||0,disp:num(x[2])||0,nodisp:num(x[3])||0,alt:num(x[4])||0,total:num(x[5])||0,cob:x[9]||""}});
}

/* ============ Cálculos ============ */
function comps(){return [...new Set(S.partidos.map(p=>p.comp).filter(Boolean))]}
function fMatches(){return S.partidos.filter(p=>S.comp==="Todas"||p.comp===S.comp)}
function grupos(){return [...new Set(S.jug.map(j=>j.grupo).filter(Boolean))]}
function fJug(){return S.jug.filter(j=>!j.retirado&&(S.grupo==="Todos"||j.grupo===S.grupo))}
function jById(id){return S.jug.find(j=>j.id===id)}
function record(ms){const o={pj:ms.length,g:0,e:0,p:0,gf:0,gc:0,pts:0};ms.forEach(m=>{o[m.res.toLowerCase()]++;o.gf+=m.gf;o.gc+=m.gc;o.pts+=m.pts});o.eff=o.pj?o.pts/(o.pj*3):null;return o}
function pStats(jid,ms){
  const ids=new Set(ms.map(m=>m.id));const rows=S.stats.filter(s=>s.jid===jid&&ids.has(s.pt));
  const o={rows,pj:0,tit:0,sup:0,min:0,minTit:0,minSup:0,g:0,a:0,mvp:0,am:0,ro:0,gr:0,pa:0,notas:[],conv:rows.length};
  rows.forEach(s=>{if(s.min>0){o.pj++;if(s.cond==="Titular"){o.tit++;o.minTit+=s.min}else{o.sup++;o.minSup+=s.min}}o.min+=s.min;o.g+=s.g;o.a+=s.a;if(s.mvp)o.mvp++;o.am+=s.am;o.ro+=s.ro;if(s.nota!=null&&s.min>0)o.notas.push(s.nota);o.gr+=s.gr||0;o.pa+=s.pa||0});
  o.nota=o.notas.length?o.notas.reduce((a,b)=>a+b,0)/o.notas.length:null;return o;
}
function gkStats(jid,ms){let inv=0,gr=0,pa=0,pj=0;ms.forEach(m=>{const s=S.stats.find(x=>x.pt===m.id&&x.jid===jid);if(!s||!(s.min>0))return;pj++;const g=s.gr!=null?s.gr:(s.min>=(m.dur||S.config.duracion||80)?m.gc:null);if(g!=null)gr+=g;if(g===0)inv++;pa+=s.pa||0});return {inv,gr,pa,pj}}
function isGK(j){return posGroup(j&&j.pos1)==="por"}
function availMin(ms){const ids=new Set(S.stats.map(s=>s.pt));return ms.filter(m=>ids.has(m.id)).reduce((a,m)=>a+(m.dur||S.config.duracion||80),0)}
function activeInjury(jid){return S.lesiones.find(l=>l.jid===jid&&!l.altaReal&&!/alta|cerrad|recuper/i.test(l.estado))}
function activeSanction(jid){return S.sanciones.find(s=>s.jid===jid&&/activa|pendiente/i.test(s.estado))}
function dispChip(j){const d=j.disp||"";if(/Lesion/i.test(d))return '<span class="chip les">Lesionado</span>';if(/Suspend/i.test(d))return '<span class="chip sus">Suspendido</span>';if(j.retirado)return '<span class="chip ina">'+(j.promovido?"Promovido":"Retirado")+'</span>';if(/Inactiv/i.test(d)||/Inactiv/i.test(j.estado))return '<span class="chip ina">Inactivo</span>';return ""}
function sessionsOf(jid){return S.sesiones.filter(s=>s.jid===jid).sort((a,b)=>a.fecha-b.fecha)}
function asisPct(rows){const c=rows.filter(s=>s.asis==="Presente"||s.asis==="Ausente");return c.length?c.filter(s=>s.asis==="Presente").length/c.length:null}
function goalEvents(){return S.eventos.filter(e=>/^gol/i.test(e.tipo))}

/* ============ Gráficos SVG ============ */
function lineChart(pts,opt){
  opt=opt||{};const W=400,H=opt.h||200,L=34,R=12,T=14,Bt=30;
  if(!pts.length)return "";
  const max=Math.max(opt.max||0,...pts.map(p=>p.y))||1;const n=pts.length;
  const x=i=>L+(n===1?(W-L-R)/2:i*(W-L-R)/(n-1)),y=v=>T+(H-T-Bt)*(1-v/max);
  const step=max<=6?1:max<=15?3:max<=30?5:10;let g="";
  for(let v=0;v<=max;v+=step)g+=`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L-6}" y="${y(v)+4}" text-anchor="end">${v}</text>`;
  if(opt.ideal){g+=`<line x1="${x(0)}" y1="${y(opt.ideal[0])}" x2="${x(n-1)}" y2="${y(opt.ideal[1])}" stroke="var(--muted)" stroke-dasharray="4 4" stroke-width="1.5"/>`}
  const path=pts.map((p,i)=>(i?"L":"M")+x(i)+" "+y(p.y)).join(" ");
  const area=path+` L${x(n-1)} ${y(0)} L${x(0)} ${y(0)} Z`;
  let dots="",lab="";pts.forEach((p,i)=>{dots+=`<circle cx="${x(i)}" cy="${y(p.y)}" r="${i===n-1?6:4.5}" fill="${p.c||"var(--accent)"}" stroke="var(--surface)" stroke-width="2"/>`;
    if(n<=12||i%Math.ceil(n/12)===0||i===n-1)lab+=`<text x="${x(i)}" y="${H-10}" text-anchor="middle">${esc(p.x)}</text>`});
  const last=pts[n-1];
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opt.aria||"")}">${g}<path d="${area}" fill="var(--accent)" opacity=".12"/><path d="${path}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round"/>${dots}${lab}<text x="${x(n-1)}" y="${y(last.y)-12}" text-anchor="middle" style="fill:var(--ink);font-weight:700;font-size:13px">${last.y}</text></svg>`;
}
/* Minutos por partido (barras) y nota (línea) en el mismo eje de partidos */
function matchChart(items,dur){
  const W=400,H=210,L=34,R=34,T=14,Bt=36;if(!items.length)return "";
  const n=items.length,bw=Math.min(46,(W-L-R)/n*0.6),x=i=>L+(i+.5)*(W-L-R)/n;
  const ym=v=>T+(H-T-Bt)*(1-v/dur),yn=v=>T+(H-T-Bt)*(1-v/10);
  let g="";[0,dur/2,dur].forEach(v=>g+=`<line class="gl" x1="${L}" x2="${W-R}" y1="${ym(v)}" y2="${ym(v)}"/><text x="${L-6}" y="${ym(v)+4}" text-anchor="end">${Math.round(v)}'</text>`);
  [0,5,10].forEach(v=>g+=`<text x="${W-R+6}" y="${yn(v)+4}">${v}</text>`);
  let bars="",lab="",pts=[];
  items.forEach((it,i)=>{const h=Math.max(0,ym(0)-ym(Math.min(it.min,dur)));
    bars+=`<rect x="${x(i)-bw/2}" y="${ym(0)-h}" width="${bw}" height="${h}" rx="4" fill="${it.tit?"var(--accent)":"var(--sky)"}" opacity="${it.min>0?1:.25}"/>`;
    if(it.min===0)bars+=`<rect x="${x(i)-bw/2}" y="${ym(0)-3}" width="${bw}" height="3" rx="1.5" fill="var(--muted)"/>`;
    lab+=`<text x="${x(i)}" y="${H-20}" text-anchor="middle">${esc(it.x)}</text><text x="${x(i)}" y="${H-6}" text-anchor="middle">${it.min}'</text>`;
    if(it.nota!=null)pts.push([x(i),yn(it.nota),it.nota])});
  const line=pts.length>1?`<path d="${pts.map((p,i)=>(i?"L":"M")+p[0]+" "+p[1]).join(" ")}" fill="none" stroke="var(--warn)" stroke-width="2.5"/>`:"";
  const dots=pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--warn)" stroke="var(--surface)" stroke-width="2"/><text x="${p[0]}" y="${p[1]-9}" text-anchor="middle" style="fill:var(--ink);font-weight:700">${fmt1(p[2])}</text>`).join("");
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutos y nota por partido">${g}${bars}${line}${dots}${lab}</svg>`;
}
function colBars(items,opt){
  const W=400,H=opt&&opt.h||170,L=10,R=10,T=22,Bt=34;if(!items.length)return "";
  const max=Math.max(...items.map(i=>i.v),1),n=items.length,bw=Math.min(64,(W-L-R)/n*.62),x=i=>L+(i+.5)*(W-L-R)/n,y=v=>T+(H-T-Bt)*(1-v/max);
  let s=`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(0)}" y2="${y(0)}"/>`;
  items.forEach((it,i)=>{const h=y(0)-y(it.v);s+=`<rect x="${x(i)-bw/2}" y="${y(it.v)}" width="${bw}" height="${h}" rx="5" fill="${it.c||"var(--accent)"}"/><text x="${x(i)}" y="${y(it.v)-6}" text-anchor="middle" style="fill:var(--ink);font-weight:700;font-size:13px">${esc(it.t!=null?it.t:it.v)}</text><text x="${x(i)}" y="${H-18}" text-anchor="middle" style="font-weight:700">${esc(it.x)}</text>${it.s?`<text x="${x(i)}" y="${H-4}" text-anchor="middle">${esc(it.s)}</text>`:""}`});
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opt&&opt.aria||"")}">${s}</svg>`;
}

/* ============ Navegación ============ */
const TABS=[["inicio","Inicio",'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>'],
  ["partidos","Partidos",'<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/>'],
  ["jugadores","Jugadores",'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'],
  ["minutos","Control",'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>'],
  ["registrar","Registrar",'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 11l2 2 4-4M9 17h6"/>']];
const SUBJ=[["jugadores","Lista"],["convocatoria","Convocatoria"],["profundidad","Profundidad"],["comparar","Comparar"],["bajas","Lesiones y sanciones"],["accesos","Acceso jugadores"],["comunidad","Comunidad"]];
const SUBR=[["registrar","Asistencia"],["reg-test","Test"],["reg-eval","Evaluación"],["reg-lesion","Lesión"],["reg-sancion","Sanción"]];
function route(){const h=(location.hash||"").replace(/^#/,"");const m=h.match(/^(jugador|partido)-([A-Za-z0-9]+)$/);if(m)return {v:m[1],id:m[2]};if(SUBJ.some(t=>t[0]===h)||SUBR.some(t=>t[0]===h)||SUBS.some(t=>t[0]===h))return {v:h};return {v:TABS.some(t=>t[0]===h)?h:"inicio"}}
function subnav(list,cur){if(window.__esAsis)return '<div class="banner ok">Modo asistente: aquí tomas la asistencia de la sesión. El resto del Centro es solo para el DT.</div>';return `<nav class="subnav" aria-label="Secciones">${list.map(t=>`<a href="#${t[0]}" ${t[0]===cur?'aria-current="page"':""}>${t[1]}</a>`).join("")}</nav>`}
function renderTabs(cur){
  const base=cur==="jugador"||SUBJ.some(t=>t[0]===cur)?"jugadores":cur==="partido"?"partidos":SUBR.some(t=>t[0]===cur)?"registrar":SUBS.some(t=>t[0]===cur)?"minutos":cur;
  document.getElementById("tabs").innerHTML=TABS.map(t=>`<a href="#${t[0]}" ${base===t[0]?'aria-current="page"':""}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t[2]}</svg>${t[1]}${t[0]==="registrar"&&(S.queue.length+S.wq.length)?`<span class="badge">${S.queue.length+S.wq.length}</span>`:""}</a>`).join("");
}
function compChips(){const cs=comps();if(cs.length<2)return "";return `<div class="chips" role="group" aria-label="Competición">${["Todas",...cs].map(c=>`<button class="fchip" data-comp="${esc(c)}" aria-pressed="${S.comp===c}">${esc(c)}</button>`).join("")}</div>`}
function groupChips(){const gs=grupos();if(gs.length<2)return "";return `<div class="chips" role="group" aria-label="Grupo">${["Todos",...gs].map(c=>`<button class="fchip" data-grupo="${esc(c)}" aria-pressed="${S.grupo===c}">${c==="Todos"?"Todos los grupos":"Grupo "+esc(c)}</button>`).join("")}</div>`}

function render(){
  let r=route();if(window.__esAsis&&r.v!=="registrar")r={v:"registrar"};renderTabs(r.v);if(window.__esAsis){document.getElementById("tabs").innerHTML="";const tt=document.querySelector(".top .ttl b");if(tt)tt.textContent="Asistencia"}
  const st=document.getElementById("stamp");
  if(S.stamp){const d=new Date(S.stamp);st.textContent=(S.offline?"Sin conexión · datos de ":"Actualizado ")+d.toLocaleTimeString("es-CO",{hour:"numeric",minute:"2-digit"})}
  const app=document.getElementById("app");
  let html="";
  html+=wqBanner();
  if(S.err&&(S.offline||!S.ok))html+=`<div class="banner ${S.ok?"warn":"err"}">${esc(S.err)}${S.ok?" Mientras tanto ves la última copia guardada.":""}</div>`;
  if(!S.ok){app.innerHTML=html+(S.loading||!S.err?'<div class="skel"></div><div class="skel"></div><div class="skel"></div>':"");return}
  if(r.v==="inicio")html+=vInicio();
  else if(r.v==="partidos")html+=vPartidos();
  else if(r.v==="partido")html+=vPartido(r.id);
  else if(r.v==="jugadores")html+=vJugadores()+(window.retiradosCard?window.retiradosCard():"");
  else if(r.v==="jugador")html+=vJugador(r.id);
  else if(r.v==="minutos")html+=vMinutos();
  else if(r.v==="registrar")html+=vRegistrar();
  else if(r.v==="convocatoria")html+=vConvocatoria();
  else if(r.v==="profundidad")html+=vProfundidad();
  else if(r.v==="comparar")html+=vComparar();
  else if(r.v==="bajas")html+=vBajas();
  else if(r.v==="reg-lesion")html+=vRegLesion();
  else if(r.v==="reg-sancion")html+=vRegSancion();
  else if(r.v==="carga")html+=vCarga();
  else if(r.v==="asistencia")html+=vAsistencia();
  else if(r.v==="tests")html+=vTests();
  else if(r.v==="evaluacion")html+=vEvaluacion();
  else if(r.v==="reg-test")html+=vRegTest();
  else if(r.v==="reg-eval")html+=vRegEval();
  else if(r.v==="accesos")html+=window.vAccesos();
  else if(r.v==="comunidad")html+=window.vComunidad();
  const keepScroll=render._last===location.hash;render._last=location.hash;
  const ae=document.activeElement,aid=ae&&ae.id,sel=ae&&ae.selectionStart;
  app.innerHTML=html;
  if(aid){const el=document.getElementById(aid);if(el){el.focus();try{if(sel!=null)el.setSelectionRange(sel,sel)}catch(e){}}}
  if(!keepScroll)window.scrollTo(0,0);
}

/* ============ Inicio ============ */
function vInicio(){
  const ms=fMatches(),rc=record(ms),last5=ms.slice(-5);
  let h=clubHero()+compChips();
  if(!ms.length)return h+`<section class="sec"><p class="empty">Aún no hay partidos en ${esc(S.comp)}. Se registran desde Partido en vivo.</p></section>`;
  // Récord
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Récord</h3><span class="hint">${esc(S.comp==="Todas"?"Todas las competiciones":S.comp)}</span></div>
   <div class="record"><div class="pts num">${rc.pts}<small>PUNTOS</small></div>
   <div class="kpis" style="flex:1 1 220px"><div class="kpi"><b>${rc.pj}</b><span>PJ</span></div><div class="kpi"><b style="color:var(--ok)">${rc.g}</b><span>Ganados</span></div><div class="kpi"><b style="color:var(--warn)">${rc.e}</b><span>Empates</span></div><div class="kpi"><b style="color:var(--danger)">${rc.p}</b><span>Perdidos</span></div></div></div>
   <div class="row" style="justify-content:space-between"><span class="hint">Efectividad</span><b class="num">${pct(rc.eff)}</b></div><div class="bar-eff"><i style="width:${Math.round((rc.eff||0)*100)}%"></i></div>
   <div class="kpis"><div class="kpi"><b>${rc.gf}</b><span>Goles a favor</span></div><div class="kpi"><b>${rc.gc}</b><span>En contra</span></div><div class="kpi"><b>${rc.gf-rc.gc>0?"+":""}${rc.gf-rc.gc}</b><span>Diferencia</span></div><div class="kpi"><b>${fmt1(rc.gf/rc.pj)}</b><span>GF por partido</span></div></div>
  </section>`;
  // Próximo rival
  const lastInf=[...ms].reverse().map(m=>S.informes[m.id]).find(x=>x&&x[30]);
  h+=`<section class="sec"><h3>Foco de la semana</h3>${lastInf&&(lastInf[28]||lastInf[29])?`${lastInf[29]?`<div><span class="hint">Qué trabajar</span><p class="txt">${esc(lastInf[29])}</p></div>`:""}${lastInf[28]?`<div><span class="hint">Qué mantener</span><p class="txt">${esc(lastInf[28])}</p></div>`:""}<p class="hint">Del informe del último partido.</p>`:'<p class="empty">Aparece cuando completas “qué mantener” y “qué cambiar” en el cierre de un partido.</p>'}</section></div>`;
  // Disponibilidad
  const act=S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado));
  const les=act.filter(j=>/Lesion/i.test(j.disp)||activeInjury(j.id)),sus=act.filter(j=>/Suspend/i.test(j.disp)||activeSanction(j.id));
  const outIds=new Set([...les,...sus].map(j=>j.id));const disp=act.filter(j=>!outIds.has(j.id));
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Disponibilidad hoy</h3><span class="hint">${act.length} activos</span></div>
   <div class="kpis" ><div class="kpi"><b style="color:var(--ok)">${disp.length}</b><span>Disponibles</span></div><div class="kpi"><b style="color:var(--danger)">${les.length}</b><span>Lesionados</span></div><div class="kpi"><b style="color:var(--warn)">${sus.length}</b><span>Suspendidos</span></div></div>
   <div class="list">${les.map(j=>{const l=activeInjury(j.id);return `<a class="li" href="#bajas" style="text-decoration:none">${avatar(j,"sm")}<div class="meta"><span class="nm">${esc(j.nombre)}</span><span class="sub">${l?esc(l.zona+(l.altaPrev?" · alta prevista "+dLong(l.altaPrev):"")):"Lesionado"}</span></div><span class="chip les">Lesión</span></a>`}).join("")}
   ${sus.map(j=>{const s=activeSanction(j.id);return `<a class="li" href="#bajas" style="text-decoration:none">${avatar(j,"sm")}<div class="meta"><span class="nm">${esc(j.nombre)}</span><span class="sub">${s?esc(s.motivo+(s.fechas!=null?" · "+(s.cumplidas||0)+" de "+s.fechas+" fechas":s.estado?" · "+s.estado:"")):"Suspendido"}</span></div><span class="chip sus">Sanción</span></a>`}).join("")}
   ${!les.length&&!sus.length?'<p class="empty">Toda la plantilla activa está disponible.</p>':""}</div><a class="btn sm" href="#bajas" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center">Dar de alta o cerrar sanciones</a></section>`;
  // Alertas y líderes
  const al=S.jug.map(j=>({j,a:(S.panel[j.id]||{}).alertas})).filter(x=>x.a);
  const tops=["g","a","min"].map(k=>{const arr=fJug().map(j=>({j,s:pStats(j.id,ms)})).filter(x=>x.s[k]>0).sort((a,b)=>b.s[k]-a.s[k]).slice(0,3);return {k,arr}});
  const tl={g:"Goleadores",a:"Asistidores",min:"Minutos"};
  h+=`<section class="sec"><h3>Líderes</h3>${tops.map(t=>`<div><span class="hint">${tl[t.k]}</span><div class="list" style="margin-top:4px">${t.arr.length?t.arr.map(x=>`<a class="li" href="#jugador-${x.j.id}" style="text-decoration:none;min-height:46px">${avatar(x.j,"sm")}<div class="meta"><span class="nm">${esc(shortName(x.j.nombre))}</span></div><span class="big">${x.s[t.k]}${t.k==="min"?"'":""}</span></a>`).join(""):'<p class="empty">Sin registros.</p>'}</div></div>`).join("")}
   ${al.length?`<div><span class="hint">Alertas del Panel (${al.length})</span><div class="list" style="margin-top:4px">${al.slice(0,8).map(x=>`<a class="li" href="#jugador-${x.j.id}" style="text-decoration:none;min-height:44px">${avatar(x.j,"sm")}<div class="meta"><span class="nm">${esc(shortName(x.j.nombre))}</span><span class="sub">${esc(x.a)}</span></div></a>`).join("")}</div>${al.length>8?`<p class="hint">y ${al.length-8} más en la hoja Panel.</p>`:""}</div>`:""}
  </section></div>
  ${clubInfo()}
  ${imgCard()}
  <p class="hint" style="text-align:center"><a href="${PARTIDO_EN_VIVO}" target="_blank" rel="noopener" style="color:var(--sky);font-weight:700">Abrir Partido en vivo</a></p>`;
  return h;
}

/* ============ Partidos ============ */
function vPartidos(){
  const ms=fMatches();let h=`<h2>Partidos</h2>${compChips()}`;
  if(!ms.length)return h+`<section class="sec"><p class="empty">Aún no hay partidos en ${esc(S.comp)}.</p></section>`;
  let acc=0;const pts=ms.map(m=>{acc+=m.pts;return {x:dShort(m.fecha),y:acc,c:m.res==="G"?"var(--ok)":m.res==="E"?"var(--warn)":"var(--danger)"}});
  h+=`<section class="sec"><div class="sec-h"><h3>Puntos acumulados</h3><span class="hint">Línea punteada: ritmo perfecto (3 por partido)</span></div>${lineChart(pts,{max:ms.length*3,ideal:[3,ms.length*3],aria:"Puntos acumulados por partido"})}</section>`;
  // Splits
  const split=(f)=>record(ms.filter(f));const loc=split(m=>m.loc==="Local"),vis=split(m=>m.loc==="Visitante");
  const sis={};ms.forEach(m=>{const s=(S.informes[m.id]||[])[10];if(s){(sis[s]=sis[s]||[]).push(m)}});
  const recRow=(t,r)=>`<tr><td>${esc(t)}</td><td>${r.pj}</td><td>${r.g}-${r.e}-${r.p}</td><td>${r.gf}:${r.gc}</td><td><b>${pct(r.eff)}</b></td></tr>`;
  h+=`<div class="cols"><section class="sec"><h3>Local y visitante, por sistema</h3><div class="tw"><table><thead><tr><th></th><th>PJ</th><th>G-E-P</th><th>Goles</th><th>Efect.</th></tr></thead><tbody>
    ${loc.pj?recRow("Local",loc):""}${vis.pj?recRow("Visitante",vis):""}${Object.keys(sis).map(k=>recRow("Sistema "+k,record(sis[k]))).join("")}</tbody></table></div>
    ${Object.keys(sis).length?"":'<p class="hint">El sistema aparece cuando el partido tiene informe.</p>'}</section>`;
  // Goles por tramo
  const ids=new Set(ms.map(m=>m.id));const ge=goalEvents().filter(e=>ids.has(e.pt)&&e.min!=null);
  const cover=ms.filter(m=>S.eventos.some(e=>e.pt===m.id));
  if(ge.length){
    const dur=S.config.duracion||80,half=dur/2,bins=[];for(let t=0;t<dur;t+=10)bins.push({x:t+"-"+(t+10)+"'",f:0,c:0});
    ge.forEach(e=>{let t=e.min;if(e.per==="2T"&&t<=half)t+=half;const i=Math.min(bins.length-1,Math.max(0,Math.floor((t-0.001)/10)));if(/rival/i.test(e.tipo))bins[i].c++;else bins[i].f++});
    const mx=Math.max(1,...bins.map(b=>Math.max(b.f,b.c)));
    const W=400,H=190,L=10,R=10,T=18,Bt=26,n=bins.length,gw=(W-L-R)/n,bw=Math.min(20,gw*.32),mid=T+(H-T-Bt)/2,sc=(H-T-Bt)/2/mx;
    let s=`<line class="gl" x1="${L}" x2="${W-R}" y1="${mid}" y2="${mid}"/><line x1="${L+gw*n/2}" x2="${L+gw*n/2}" y1="${T}" y2="${H-Bt}" stroke="var(--muted)" stroke-dasharray="3 3"/>`;
    bins.forEach((b,i)=>{const cx=L+gw*(i+.5);if(b.f)s+=`<rect x="${cx-bw/2}" y="${mid-b.f*sc}" width="${bw}" height="${b.f*sc}" rx="3" fill="var(--accent)"/><text x="${cx}" y="${mid-b.f*sc-4}" text-anchor="middle" style="fill:var(--ink);font-weight:700">${b.f}</text>`;
      if(b.c)s+=`<rect x="${cx-bw/2}" y="${mid}" width="${bw}" height="${b.c*sc}" rx="3" fill="var(--danger)"/><text x="${cx}" y="${mid+b.c*sc+12}" text-anchor="middle" style="fill:var(--ink);font-weight:700">${b.c}</text>`;
      s+=`<text x="${cx}" y="${H-6}" text-anchor="middle">${b.x}</text>`});
    const t1=ge.filter(e=>e.per!=="2T"),t2=ge.filter(e=>e.per==="2T");
    h+=`<section class="sec"><div class="sec-h"><h3>Goles por tramo</h3><span class="hint">${cover.length} de ${ms.length} partidos con minuto</span></div>
      <div class="legend"><span><i style="background:var(--accent)"></i>A favor</span><span><i style="background:var(--danger)"></i>En contra</span></div>
      <svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Goles por tramo de 10 minutos">${s}</svg>
      <div class="kpis"><div class="kpi"><b>${t1.filter(e=>!/rival/i.test(e.tipo)).length}:${t1.filter(e=>/rival/i.test(e.tipo)).length}</b><span>Primer tiempo</span></div><div class="kpi"><b>${t2.filter(e=>!/rival/i.test(e.tipo)).length}:${t2.filter(e=>/rival/i.test(e.tipo)).length}</b><span>Segundo tiempo</span></div></div></section></div>`;
  }else{
    h+=`<section class="sec"><h3>Goles por tramo</h3><div class="pending"><b>Pendiente</b><span class="hint">Aparece cuando registras los goles con minuto en Partido en vivo. Hay eventos en ${cover.length} de ${ms.length} partidos, pero ninguno es un gol.</span></div></section></div>`;
  }
  // Lista
  h+=`<section class="sec"><h3>Todos los partidos</h3><div class="list">${[...ms].reverse().map(m=>`<a class="li mcard" href="#partido-${esc(m.id)}" style="text-decoration:none">${rivalCrest(m.rival,30)}<div class="meta"><span class="nm">${esc(m.rival)}</span><span class="sub">${esc(dLong(m.fecha))} · ${esc(m.loc)} · ${esc(m.comp)}</span></div><div class="end"><span class="score">${m.gf}-${m.gc}</span><span class="res ${m.res}" style="width:22px;height:22px;font-size:.8rem">${m.res}</span></div></a>`).join("")}</div></section>`;
  return h;
}
function vPartido(id){
  const m=S.partidos.find(p=>p.id===id);if(!m)return `<button class="back" data-go="#partidos">‹ Partidos</button><section class="sec"><p class="empty">No se encontró el partido ${esc(id)}.</p></section>`;
  const inf=S.informes[id];const local=m.loc!=="Visitante";
  const us=`<div class="tm">${ourCrest(44)}<span>${esc(TEAM)}</span></div>`,th=`<div class="tm">${rivalCrest(m.rival,40)}<span>${esc(m.rival)}</span></div>`;
  let h=`<button class="back" data-go="#partidos">‹ Partidos</button>
   <div class="board">${local?us:th}<div class="sc">${local?m.gf:m.gc} - ${local?m.gc:m.gf}<small>${esc(dLong(m.fecha))}</small></div>${local?th:us}</div>
   <p class="hint" style="text-align:center">${esc(m.comp)} · ${esc(m.loc)}${m.micro?" · Micro #"+esc(m.micro):""}${inf&&inf[10]?" · "+esc(inf[10]):""}${inf&&inf[32]?" · "+esc(inf[32])+(inf[33]?" "+esc(inf[33])+"°C":""):""}</p>`;
  const rows=S.stats.filter(s=>s.pt===id).map(s=>({s,j:jById(s.jid)})).sort((a,b)=>(b.s.cond==="Titular")-(a.s.cond==="Titular")||b.s.min-a.s.min);
  const evs=S.eventos.filter(e=>e.pt===id).sort((a,b)=>(a.per>b.per)-(a.per<b.per)||(a.min||0)-(b.min||0));
  h+=`<div class="cols">`;
  if(inf){
    h+=`<section class="sec"><h3>Informe · 5 fases</h3>${FASES.map(([t,i])=>{const v=num(inf[i]);return `<div class="phase"><span style="font-weight:600">${t}</span><span class="dots5" aria-label="${v||0} de 5">${[1,2,3,4,5].map(k=>`<i class="${v>=k?"on":""}"></i>`).join("")}</span>${inf[i+1]?`<p>${esc(inf[i+1])}</p>`:'<p></p>'}</div>`}).join("")}</section>
    <section class="sec"><h3>Conclusiones</h3>
     ${inf[27]?`<div><span class="hint">Destacados</span><p class="txt">${esc(inf[27])}</p></div>`:""}
     ${inf[28]?`<div><span class="hint">Qué mantener</span><p class="txt">${esc(inf[28])}</p></div>`:""}
     ${inf[29]?`<div><span class="hint">Qué cambiar</span><p class="txt">${esc(inf[29])}</p></div>`:""}
     ${m.obs?`<div><span class="hint">Observaciones</span><p class="txt">${esc(m.obs)}</p></div>`:""}</section>`;
  }else h+=`<section class="sec"><h3>Informe</h3><div class="pending"><b>Sin informe</b><span class="hint">Este partido no tiene informe de fases. Se completa en el cierre de Partido en vivo.</span></div>${m.obs?`<p class="txt">${esc(m.obs)}</p>`:""}</section>`;
  h+=`</div>`;
  h+=`<section class="sec"><div class="sec-h"><h3>Jugadores</h3><span class="hint">${rows.filter(r=>r.s.min>0).length} jugaron</span></div><div class="tw"><table><thead><tr><th>Jugador</th><th>Cond.</th><th>Min</th><th>G</th><th>A</th><th>Nota</th></tr></thead><tbody>
   ${rows.map(({s,j})=>`<tr><td class="n"><a href="#jugador-${esc(s.jid)}" style="color:inherit;font-weight:600">${esc(j?shortName(j.nombre):s.jid)}</a>${s.mvp?' <span class="chip b">MVP</span>':""}${s.am?' <span class="chip sus">'+s.am+' TA</span>':""}${s.ro?' <span class="chip les">TR</span>':""}</td><td>${s.cond==="Titular"?"Tit.":s.min>0?"Sup.":"–"}</td><td>${s.min}</td><td>${s.g||""}</td><td>${s.a||""}</td><td>${s.nota!=null?fmt1(s.nota):""}</td></tr>`).join("")}</tbody></table></div>
   ${rows.length?"":'<p class="empty">No hay estadísticas individuales de este partido.</p>'}</section>`;
  if(evs.length)h+=`<section class="sec"><h3>Eventos</h3><div class="tl">${evs.map(e=>`<div class="ev"><b>${e.min!=null?e.min+"'":""}</b><span><span class="chip ${/rival|roja/i.test(e.tipo)?"les":/amarilla/i.test(e.tipo)?"sus":/^gol/i.test(e.tipo)?"ok":"ina"}">${esc(e.tipo)}</span> ${esc(nameOf(e.jug))}${e.rel?` <span class="hint">· ${/cambio/i.test(e.tipo)?"sale ":""}${esc(nameOf(e.rel))}</span>`:""}${e.det?` <span class="hint">· ${esc(e.det)}</span>`:""} <span class="hint">(${esc(e.per)})</span></span></div>`).join("")}</div></section>`;
  return h;
}

/* ============ Jugadores ============ */
function vJugadores(){
  const ms=fMatches();const q=S.q.trim().toLowerCase();
  const list=fJug().filter(j=>!q||(j.nombre+" "+j.dorsal+" "+j.pos1).toLowerCase().includes(q));
  const groups=[["por","Porteros"],["def","Defensas"],["med","Mediocampistas"],["del","Delanteros y extremos"],["","Sin posición"]];
  let h=`${subnav(SUBJ,"jugadores")}<h2>Jugadores</h2>${groupChips()}${compChips()}<input class="search" id="q" type="search" placeholder="Buscar por nombre, dorsal o posición" value="${esc(S.q)}" autocomplete="off">`;
  groups.forEach(([g,t])=>{const arr=list.filter(j=>posGroup(j.pos1)===g);if(!arr.length)return;
    h+=`<section class="sec"><div class="sec-h"><h3>${t}</h3><span class="hint">${arr.length}</span></div><div class="list">${arr.map(j=>{const s=pStats(j.id,ms);return `<a class="li" href="#jugador-${j.id}" style="text-decoration:none">${avatar(j)}<div class="meta"><span class="nm">${j.dorsal?`<span class="ab">${esc(j.dorsal)}</span> · `:""}${esc(j.nombre)}</span><span class="sub"><span class="ab">${esc(POS_AB[j.pos1]||j.pos1||"–")}</span> · ${s.pj} PJ · ${s.g} G · ${s.a} A ${dispChip(j)}</span></div><div class="end"><span class="big">${s.min}'</span><span class="sub">${s.nota!=null?"nota "+fmt1(s.nota):""}</span></div></a>`}).join("")}</div></section>`});
  if(!list.length)h+=`<section class="sec"><p class="empty">Ningún jugador coincide con “${esc(S.q)}”.</p></section>`;
  return h;
}
function vJugador(id){
  const j=jById(id);if(!j)return `<button class="back" data-go="#jugadores">‹ Jugadores</button><section class="sec"><p class="empty">No se encontró el jugador ${esc(id)}.</p></section>`;
  const ms=fMatches(),s=pStats(id,ms);
  const team=fJug().map(x=>pStats(x.id,ms)).filter(x=>x.pj>0);
  const avg=k=>team.length?team.reduce((a,b)=>a+(b[k]||0),0)/team.length:null;
  const notas=team.filter(x=>x.nota!=null);const tNota=notas.length?notas.reduce((a,b)=>a+b.nota,0)/notas.length:null;
  const tMinPJ=team.length?team.reduce((a,b)=>a+b.min/b.pj,0)/team.length:null;
  const les=S.lesiones.filter(l=>l.jid===id),san=S.sanciones.filter(x=>x.jid===id),ses=sessionsOf(id);
  let h=`<button class="back" data-go="#jugadores">‹ Jugadores</button>
  <section class="sec"><div class="hero">${avatar(j,"xl")}<div class="meta"><h2>${esc(j.nombre)}</h2>
   <span class="hint"><span class="ab">${j.dorsal?"#"+esc(j.dorsal)+" · ":""}${esc(POS_AB[j.pos1]||"")}</span> ${esc(j.pos1)}${j.pos2?" · alt. "+esc(j.pos2):""}</span>
   <span class="row">${dispChip(j)||'<span class="chip ok">Disponible</span>'}${j.grupo&&grupos().length>1?`<span class="chip b">Grupo ${esc(j.grupo)}</span>`:""}</span></div></div>
   <div class="facts"><div class="fact"><span>Edad</span><b>${esc(j.edad||"–")}</b></div><div class="fact"><span>Nacido en</span><b>${esc(j.trim||"–")}</b></div><div class="fact"><span>Pierna</span><b>${esc(j.pierna||"–")}</b></div>
   <div class="fact"><span>Estatura</span><b>${j.est?esc(j.est)+" cm":"–"}</b></div><div class="fact"><span>Peso</span><b>${j.peso?esc(j.peso)+" kg":"–"}</b></div><div class="fact"><span>IMC</span><b>${esc(j.imc||"–")}</b></div></div>
   ${j.obs?`<p class="hint">${esc(j.obs)}</p>`:""}</section>`;
  h+=`<button class="btn pri wide" data-act="inf-open" data-id="${esc(id)}">Informe PDF del jugador</button>${compChips()}<section class="sec"><div class="sec-h"><h3>Temporada</h3><span class="hint">${esc(S.comp==="Todas"?"Todas las competiciones":S.comp)}</span></div>
   <div class="kpis"><div class="kpi"><b>${s.pj}</b><span>PJ de ${ms.length}</span></div><div class="kpi"><b>${s.tit}</b><span>Titular</span></div><div class="kpi"><b>${s.min}'</b><span>Minutos</span></div><div class="kpi"><b>${fmt1(s.nota)}</b><span>Nota media</span></div>
   ${isGK(j)?(k=>`<div class="kpi"><b>${k.inv}</b><span>Vallas invictas</span></div><div class="kpi"><b>${k.gr}</b><span>Goles recibidos</span></div><div class="kpi"><b>${k.pa}</b><span>Penales atajados</span></div>`)(gkStats(id,ms)):`<div class="kpi"><b>${s.g}</b><span>Goles</span></div><div class="kpi"><b>${s.a}</b><span>Asist.</span></div>`}<div class="kpi"><b>${s.mvp}</b><span>MVP</span></div><div class="kpi"><b>${s.am}/${s.ro}</b><span>TA / TR</span></div></div></section>`;
  h+=perfilCard(j);
  const items=ms.map(m=>{const r=S.stats.find(x=>x.pt===m.id&&x.jid===id);return {x:dShort(m.fecha),min:r?r.min:0,tit:r&&r.cond==="Titular",nota:r&&r.min>0?r.nota:null,conv:!!r}});
  h+=`<div class="cols"><section class="sec"><h3>Partido a partido</h3><div class="legend"><span><i style="background:var(--accent)"></i>Minutos de titular</span><span><i style="background:var(--sky)"></i>Desde el banco</span><span><i style="background:var(--warn);border-radius:50%"></i>Nota (eje derecho)</span></div>${matchChart(items,S.config.duracion||80)}</section>
   <section class="sec"><h3>Frente al equipo</h3><p class="hint">La marca negra es la media de los jugadores que han jugado.</p>
   ${cmpRow("Minutos por partido jugado",s.pj?s.min/s.pj:null,tMinPJ,S.config.duracion||80,"'")}
   ${cmpRow("Nota media",s.nota,tNota,10,"")}
   ${cmpRow("Goles + asistencias",s.g+s.a,avg("g")+avg("a"),Math.max(s.g+s.a,...team.map(x=>x.g+x.a),1),"")}
   ${cmpRow("Asistencia a sesiones",asisPct(ses)!=null?asisPct(ses)*100:null,avgAsis(),100,"%")}</section></div>`;
  // Asistencia
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Asistencia</h3><span class="hint">${ses.length} sesiones</span></div>${ses.length?`<div class="kpis" ><div class="kpi"><b>${pct(asisPct(ses))}</b><span>Asistencia</span></div><div class="kpi"><b>${ses.filter(x=>x.asis==="Ausente").length}</b><span>Ausencias</span></div><div class="kpi"><b>${ses.filter(x=>x.asis==="Justificado").length}</b><span>Justificadas</span></div></div>
   <div class="adots" aria-label="Últimas sesiones">${ses.slice(-30).map(x=>`<i class="a-${ASIS.includes(x.asis)&&x.asis!=="Selección/Otro"?x.asis:"Otro"}" title="${esc(dShort(x.fecha)+" · "+x.tipo+" · "+x.asis)}"></i>`).join("")}</div><div class="legend">${["Presente","Ausente","Justificado","Lesionado"].map(a=>`<span><i class="a-${a}"></i>${a}</span>`).join("")}</div>`:
   `<div class="pending"><b>Pendiente</b><span class="hint">Aún no hay sesiones registradas. Registra la asistencia desde la pestaña Registrar.</span></div>`}</section>`;
  h+=`<section class="sec"><h3>Lesiones y sanciones</h3>${les.length||san.length?`<div class="list">${les.map(l=>`<div class="li"><span class="chip les">Lesión</span><div class="meta"><span class="nm">${esc(l.zona)}${l.desc?" · "+esc(l.desc):""}</span><span class="sub">${esc(dLong(l.fecha))}${l.dias!=null?" · "+l.dias+" días":""}${l.altaReal?" · alta "+esc(dLong(l.altaReal)):l.altaPrev?" · alta prevista "+esc(dLong(l.altaPrev)):""} · ${esc(l.estado||"")}</span></div></div>`).join("")}
   ${san.map(x=>`<div class="li"><span class="chip sus">Sanción</span><div class="meta"><span class="nm">${esc(x.motivo)}</span><span class="sub">${esc(dLong(x.fecha))}${x.fechas!=null?" · "+(x.cumplidas||0)+" de "+x.fechas+" fechas":""} · ${esc(x.estado||"")}</span></div></div>`).join("")}</div>`:'<p class="empty">Sin lesiones ni sanciones registradas.</p>'}${les.some(l=>!l.altaReal)||san.some(x=>/activa|pendiente/i.test(x.estado))?btnLink("#bajas","Dar de alta o cerrar sanción"):""}</section></div>`;
  h+=fichaE3(j);
  h+=(window.gestionCard?window.gestionCard(j):"");
  return h;
}
function avgAsis(){const v=S.jug.map(j=>asisPct(sessionsOf(j.id))).filter(x=>x!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length*100:null}
function cmpRow(t,v,avg,max,u){
  if(v==null&&avg==null)return `<div class="cmp"><span>${t}</span><b class="hint">sin datos</b></div>`;
  const w=v==null?0:Math.min(100,v/max*100),a=avg==null?null:Math.min(100,avg/max*100);
  return `<div class="cmp"><span>${t}</span><b class="num">${v==null?"–":fmt1(v)+u} <span class="hint" style="font-weight:500">/ ${avg==null?"–":fmt1(avg)+u}</span></b><div class="tr"><i style="width:${w}%"></i>${a!=null?`<em style="left:calc(${a}% - 1.5px)"></em>`:""}</div></div>`;
}

/* ============ Minutos y equidad ============ */
function vMinutos(){
  const ms=fMatches(),av=availMin(ms);
  const pl=fJug().filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).map(j=>({j,s:pStats(j.id,ms)})).sort((a,b)=>b.s.min-a.s.min);
  let h=`${subnav(SUBS,"minutos")}<h2>Minutos y equidad</h2>${groupChips()}${compChips()}`;
  if(!av)return h+`<section class="sec"><p class="empty">Aún no hay minutos registrados.</p></section>`;
  const tot=pl.reduce((a,b)=>a+b.s.min,0),played=pl.filter(x=>x.s.min>0).length,low=pl.filter(x=>x.s.min/av<0.25);
  h+=`<section class="sec"><div class="kpis"><div class="kpi"><b>${av}'</b><span>Disponibles por jugador</span></div><div class="kpi"><b>${played}/${pl.length}</b><span>Han jugado</span></div><div class="kpi"><b>${fmt1(tot/(pl.length||1))}'</b><span>Media por jugador</span></div><div class="kpi"><b style="color:${low.length?"var(--danger)":"var(--ok)"}">${low.length}</b><span>Bajo 25%</span></div></div></section>`;
  // Edad relativa
  const tr=["T1","T2","T3","T4"].map(t=>{const a=pl.filter(x=>x.j.trim===t);const m=a.reduce((s,x)=>s+x.s.min,0);return {t,n:a.length,avg:a.length?m/a.length:0}});
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Minutos según trimestre de nacimiento</h3></div>
   <p class="hint">Media de minutos por jugador. Si T4 (octubre a diciembre) queda muy por debajo de T1, puede estar pesando la edad relativa.</p>
   ${colBars(tr.map((x,i)=>({x:x.t,v:Math.round(x.avg),t:Math.round(x.avg)+"'",s:x.n+" jug.",c:["var(--accent)","var(--sky)","var(--warn)","var(--danger)"][i]})),{aria:"Minutos medios por trimestre de nacimiento"})}</section>`;
  // Titular vs suplente
  const tt=pl.reduce((a,b)=>a+b.s.minTit,0),ts=pl.reduce((a,b)=>a+b.s.minSup,0);
  h+=`<section class="sec"><h3>Quién juega poco</h3>${low.length?`<div class="list">${low.map(x=>`<a class="li" href="#jugador-${x.j.id}" style="text-decoration:none;min-height:46px">${avatar(x.j,"sm")}<div class="meta"><span class="nm">${esc(shortName(x.j.nombre))}</span><span class="sub">${x.s.pj} PJ ${dispChip(x.j)}</span></div><div class="end"><span class="big">${x.s.min}'</span><span class="sub">${pct(x.s.min/av)}</span></div></a>`).join("")}</div>`:'<p class="empty">Todos superan el 25% de los minutos disponibles.</p>'}
   <p class="hint">Minutos jugados desde el inicio: ${pct(tt/((tt+ts)||1))} · desde el banco: ${pct(ts/((tt+ts)||1))}.</p></section></div>`;
  // Barras por jugador
  h+=`<section class="sec"><div class="sec-h"><h3>Reparto por jugador</h3><span class="hint">% de los ${av} minutos posibles</span></div>
   <div class="legend"><span><i class="c-tit"></i>Titular</span><span><i class="c-sup"></i>Suplente</span></div>
   <div class="list">${pl.map(x=>`<a class="hbar ${x.s.min/av<0.25?"low":""}" href="#jugador-${x.j.id}" style="text-decoration:none;color:inherit"><div class="lb"><span>${esc(shortName(x.j.nombre))} <span class="hint ab">${esc(POS_AB[x.j.pos1]||"")}</span></span><span class="num">${x.s.min}' · ${pct(x.s.min/av)} · ${x.s.tit}T/${x.s.sup}S</span></div><div class="tr"><i class="c-tit" style="width:${x.s.minTit/av*100}%"></i><i class="c-sup" style="width:${x.s.minSup/av*100}%"></i></div></a>`).join("")}</div></section>`;
  return h;
}

/* ============ Registrar asistencia ============ */
function newReg(){
  const lastMicro=[...S.sesiones].reverse().find(s=>s.micro);
  const roster=S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado));
  const p={};roster.forEach(j=>{p[j.id]={asis:/Lesion/i.test(j.disp)?"Lesionado":"Presente",rpe:"",min:"",obs:"",open:false}});
  return {fecha:todayISO(),micro:String(S.config.micro||(lastMicro&&lastMicro.micro)||""),tipo:S.tipos[0]||"Campo",min:"90",rpe:"5",grupo:S.grupo,p};
}
function ensureReg(){if(!S.reg){S.reg=LS.get("draft",null)||newReg()}const reg=S.reg;S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).forEach(j=>{if(!reg.p[j.id])reg.p[j.id]={asis:/Lesion/i.test(j.disp)?"Lesionado":"Presente",rpe:"",min:"",obs:"",open:false}});return reg}
function saveDraft(){LS.set("draft",S.reg)}
function regPlayers(){const reg=ensureReg();return S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)&&(reg.grupo==="Todos"||!reg.grupo||j.grupo===reg.grupo)).sort((a,b)=>(Number(a.dorsal)||999)-(Number(b.dorsal)||999)||a.nombre.localeCompare(b.nombre))}
function existingFor(reg){const d=isoToDate(reg.fecha);return S.sesiones.filter(s=>dKey(s.fecha)===dKey(d)&&s.tipo===reg.tipo)}
function vRegistrar(){
  const reg=ensureReg(),pl=regPlayers(),gs=grupos();
  const cnt=a=>pl.filter(j=>reg.p[j.id].asis===a).length;
  const ex=existingFor(reg),exIds=new Set(ex.map(s=>s.jid));
  let h=`${subnav(SUBR,"registrar")}<h2>Registrar asistencia</h2>`;
  if(S.queue.length)h+=`<div class="banner warn"><b>${S.queue.length} ${S.queue.length===1?"sesión guardada":"sesiones guardadas"} en el teléfono sin enviar.</b><div class="row" style="margin-top:8px">${S.queue.map((q,i)=>`<span class="chip b">${esc(dShort(isoToDate(q.fecha)))} · ${esc(q.tipo)} · ${q.rows.length} jug.</span>`).join("")}</div><button class="btn pri sm" data-act="flush" style="margin-top:8px" ${S.busy?"disabled":""}>Enviar a la hoja ahora</button></div>`;
  h+=`<section class="sec"><div class="fgrid">
   <label class="f">Fecha<input type="date" id="r-fecha" value="${esc(reg.fecha)}"></label>
   <label class="f">Micro #<input type="number" inputmode="numeric" id="r-micro" value="${esc(reg.micro)}" min="1"></label>
   <label class="f" style="grid-column:1/-1">Tipo de sesión<select id="r-tipo">${S.tipos.map(t=>`<option ${t===reg.tipo?"selected":""}>${esc(t)}</option>`).join("")}</select></label>
   <label class="f">Duración (min)<input type="number" inputmode="numeric" id="r-min" value="${esc(reg.min)}" min="0" max="150"></label>
   <label class="f">RPE del grupo (1-10)<input type="number" inputmode="numeric" id="r-rpe" value="${esc(reg.rpe)}" min="1" max="10"></label>
   ${gs.length>1?`<label class="f" style="grid-column:1/-1">Grupo<select id="r-grupo">${["Todos",...gs].map(g=>`<option value="${esc(g)}" ${g===reg.grupo?"selected":""}>${g==="Todos"?"Todos los grupos":"Grupo "+esc(g)}</option>`).join("")}</select></label>`:""}
  </div><p class="hint">Duración y RPE se aplican a todos los presentes. Toca “Ajustar” en un jugador si hizo menos tiempo o sintió otro esfuerzo.</p></section>`;
  if(ex.length)h+=`<div class="banner warn">Ya hay ${ex.length} registros de ${esc(reg.tipo)} el ${esc(dLong(isoToDate(reg.fecha)))} en la hoja. Esos jugadores se marcan como ya registrados y no se vuelven a escribir.</div>`;
  h+=`<section class="sec"><div class="sec-h"><h3>Jugadores</h3><button class="linkbtn" data-act="allP">Marcar todos presentes</button></div>
   <div class="sumbox"><div><b style="color:var(--ok)">${cnt("Presente")}</b><span>Presentes</span></div><div><b style="color:var(--danger)">${cnt("Ausente")}</b><span>Ausentes</span></div><div><b style="color:var(--warn)">${cnt("Justificado")}</b><span>Justific.</span></div><div><b style="color:var(--sky)">${cnt("Lesionado")+cnt("Selección/Otro")}</b><span>Les./Otro</span></div></div>
   <div class="list">${pl.map(j=>{const p=reg.p[j.id];const done=exIds.has(j.id);return `<div class="att" ${done?'style="opacity:.55"':""}><div class="att-top">${avatar(j,"sm")}<div class="meta" style="flex:1;min-width:0"><span class="nm" style="font-weight:700">${j.dorsal?`<span class="ab">${esc(j.dorsal)}</span> · `:""}${esc(shortName(j.nombre))}</span>${done?'<span class="sub">Ya registrado en la hoja</span>':dispChip(j)?`<span>${dispChip(j)}</span>`:""}</div>${done?"":`<button class="linkbtn" data-act="open" data-id="${j.id}" aria-expanded="${p.open}">${p.open?"Cerrar":"Ajustar"}</button>`}</div>
    ${done?"":`<div class="seg" role="group" aria-label="Asistencia de ${esc(j.nombre)}">${["Presente","Ausente","Justificado","Lesionado"].map(a=>`<button class="${a}" data-act="asis" data-id="${j.id}" data-v="${a}" aria-pressed="${p.asis===a}">${a==="Justificado"?"Justif.":a}</button>`).join("")}</div>
    ${p.open?`<div class="more"><label class="f">Min<input type="number" inputmode="numeric" id="m-${j.id}" data-pf="min" data-id="${j.id}" value="${esc(p.min)}" placeholder="${esc(reg.min)}"></label><label class="f">RPE<input type="number" inputmode="numeric" id="e-${j.id}" data-pf="rpe" data-id="${j.id}" value="${esc(p.rpe)}" placeholder="${esc(reg.rpe)}" min="1" max="10"></label><label class="f">Otro<select id="o-${j.id}" data-pf="asis" data-id="${j.id}"><option value="">—</option><option ${p.asis==="Selección/Otro"?"selected":""}>Selección/Otro</option></select></label><label class="f" style="grid-column:1/-1">Observación<input type="text" id="b-${j.id}" data-pf="obs" data-id="${j.id}" value="${esc(p.obs)}" placeholder="Molestia, llegó tarde, salió antes…"></label></div>`:""}`}</div>`}).join("")}</div></section>`;
  const toWrite=pl.filter(j=>!exIds.has(j.id));
  if(S.confirm){
    h+=`<section class="sec" style="border-color:var(--accent);border-width:2px"><h3>Confirmar envío</h3><p style="margin:0">Se agregarán <b>${toWrite.length}</b> filas a la pestaña Sesiones: ${esc(reg.tipo)}, ${esc(dLong(isoToDate(reg.fecha)))}, Micro #${esc(reg.micro||"–")}. ${cnt("Presente")} presentes con ${esc(reg.min)} min y RPE ${esc(reg.rpe)} salvo los ajustados.</p>
     <div class="fgrid"><button class="btn" data-act="cancel">Volver</button><button class="btn pri" data-act="send" ${S.busy?"disabled":""}>${S.busy?"Enviando…":"Enviar a la hoja"}</button></div></section>`;
  }else{
    h+=`<div class="fgrid"><button class="btn" data-act="reset">Empezar de nuevo</button><button class="btn pri" data-act="review" ${toWrite.length?"":"disabled"}>Revisar y enviar</button></div>`;
  }
  // Historial
  const byS={};S.sesiones.forEach(s=>{const k=dKey(s.fecha)+"|"+s.tipo;(byS[k]=byS[k]||{fecha:s.fecha,tipo:s.tipo,micro:s.micro,rows:[]}).rows.push(s)});
  const hist=Object.values(byS).sort((a,b)=>b.fecha-a.fecha).slice(0,12);
  h+=`<section class="sec"><h3>Sesiones registradas</h3>${hist.length?`<div class="list">${hist.map(x=>{const pr=x.rows.filter(r=>r.asis==="Presente");const rp=pr.filter(r=>r.rpe!=null);return `<div class="li"><div class="meta"><span class="nm">${esc(dLong(x.fecha))} · ${esc(x.tipo)}</span><span class="sub">Micro #${esc(x.micro||"–")} · ${pr.length} de ${x.rows.length} presentes${rp.length?" · RPE medio "+fmt1(rp.reduce((a,b)=>a+b.rpe,0)/rp.length):""}</span></div><span class="big">${pct(asisPct(x.rows))}</span></div>`}).join("")}</div>`:'<p class="empty">Todavía no hay sesiones en la hoja. La primera que envíes aparecerá aquí.</p>'}</section>`;
  return h;
}
function buildBatch(){
  const reg=ensureReg(),pl=regPlayers(),exIds=new Set(existingFor(reg).map(s=>s.jid));
  const rows=pl.filter(j=>!exIds.has(j.id)).map(j=>{const p=reg.p[j.id];const pres=p.asis==="Presente";
    return {label:j.label,jid:j.id,asis:p.asis,min:pres?(p.min!==""?Number(p.min):Number(reg.min)):"",rpe:pres?(p.rpe!==""?Number(p.rpe):Number(reg.rpe)):"",obs:p.obs||""}});
  return {fecha:reg.fecha,micro:reg.micro,tipo:reg.tipo,rows};
}
function validReg(){const reg=ensureReg();const m=Number(reg.min),r=Number(reg.rpe);
  if(!reg.fecha)return "Elige la fecha.";if(!(m>=0&&m<=150))return "La duración debe estar entre 0 y 150 minutos.";if(!(r>=1&&r<=10))return "El RPE debe estar entre 1 y 10.";
  for(const j of regPlayers()){const p=reg.p[j.id];if(p.rpe!==""&&!(Number(p.rpe)>=1&&Number(p.rpe)<=10))return "Revisa el RPE de "+shortName(j.nombre)+": debe estar entre 1 y 10.";if(p.min!==""&&!(Number(p.min)>=0&&Number(p.min)<=150))return "Revisa los minutos de "+shortName(j.nombre)+".";}
  return null}
/* Escribe solo columnas de datos: A–D, F–H y J. E, I y K son fórmulas de la hoja. */
async function writeBatch(b){
  const fresh=await readRange("Sesiones!A2:K3000");
  const d=isoToDate(b.fecha),k=dKey(d);
  const done=new Set(fresh.filter(x=>x&&dKey(pDate(x[0]))===k&&x[2]===b.tipo).map(x=>String(x[3]||"").slice(0,3)));
  const rows=b.rows.filter(r=>!done.has(r.jid));
  if(!rows.length)return 0;
  let last=0;fresh.forEach((x,i)=>{if(x&&(x[0]||x[3]))last=i+1});
  const r0=last+2,r1=r0+rows.length-1;
  const date=`=DATE(${d.getFullYear()};${d.getMonth()+1};${d.getDate()})`;
  const micro=b.micro===""?"":Number(b.micro)||b.micro;
  const hasObs=rows.some(r=>r.obs);
  await gs("update_values",{range:`Sesiones!A${r0}:J${r1}`,values:rows.map(r=>[date,micro,b.tipo,r.label,null,r.asis,r.min,r.rpe,null,hasObs?r.obs:null])});
  return rows.length;
}
async function sendQueue(){
  if(S.busy)return;S.busy=true;render();let sent=0,err=null;
  while(S.queue.length){try{sent+=await writeBatch(S.queue[0]);S.queue.shift();LS.set("queue",S.queue)}catch(e){err=e;break}}
  S.busy=false;
  if(err){toast(err.code==="server_unavailable"||err.code==="upstream_error"||err.code==="no_mcp"?"Sin conexión con la hoja. La sesión queda guardada en el teléfono.":gsErrorText(err))}
  else{toast(sent?`Enviado: ${sent} filas en Sesiones.`:"Esa sesión ya estaba en la hoja.");await loadAll()}
  render();
}

/* ============ Etapa 2 · Lesiones y sanciones ============ */
function daysBetween(a,b){return Math.round((b-a)/86400000)}
function today0(){const d=new Date();d.setHours(0,0,0,0);return d}
function vBajas(){
  const t0=today0();
  const les=[...S.lesiones].sort((a,b)=>(b.fecha||0)-(a.fecha||0)),san=[...S.sanciones].sort((a,b)=>(b.fecha||0)-(a.fecha||0));
  const act=les.filter(l=>!l.altaReal),sact=san.filter(x=>/activa|pendiente/i.test(x.estado));
  const dias=les.reduce((a,l)=>a+(l.dias||0),0);
  let h=`${subnav(SUBJ,"bajas")}<h2>Lesiones y sanciones</h2>
  <section class="sec"><div class="kpis"><div class="kpi"><b style="color:var(--danger)">${act.length}</b><span>Lesiones activas</span></div><div class="kpi"><b>${les.length}</b><span>Lesiones en la temporada</span></div><div class="kpi"><b>${dias}</b><span>Días de baja</span></div><div class="kpi"><b style="color:var(--warn)">${sact.length}</b><span>Sanciones vigentes</span></div></div>
  <div class="row"><a class="btn sm" href="#reg-lesion" style="text-decoration:none;display:inline-flex;align-items:center">Registrar lesión</a><a class="btn sm" href="#reg-sancion" style="text-decoration:none;display:inline-flex;align-items:center">Registrar sanción</a></div></section>`;
  // Activas
  h+=`<div class="cols"><section class="sec"><h3>Lesiones activas</h3>${act.length?`<div class="list">${act.map(l=>{const j=jById(l.jid);const k=l.jid+"|"+dKey(l.fecha);
     let ret=l.altaPrev?"":"alta indefinida";if(l.altaPrev){const d=daysBetween(t0,l.altaPrev);ret=d>0?`vuelve en ${d} ${d===1?"día":"días"}`:d===0?"alta prevista hoy":`alta prevista vencida hace ${-d} ${d===-1?"día":"días"}`}
     const open=S.act&&S.act.k===k&&S.act.t==="alta";
     return `<div class="ccard"><div class="att-top">${avatar(j||{nombre:l.jid},"sm")}<div class="meta" style="flex:1;min-width:0"><a class="nm" href="#jugador-${esc(l.jid)}" style="color:inherit;font-weight:700">${esc(j?shortName(j.nombre):l.jid)}</a><span class="sub">${esc(l.zona)}${l.desc?" · "+esc(l.desc):""} · desde ${esc(dLong(l.fecha))} · ${l.dias!=null?l.dias+" días":""}</span>${ret?`<span class="sub" style="color:${/vencida/.test(ret)?"var(--danger)":"var(--ink)"};font-weight:600">${ret}${l.seg?` · <span class="chip b">${esc(l.seg)}</span>`:""}</span>`:""}</div></div>${S.act&&S.act.k===k?"":`<div class="row"><button class="btn sm" data-act="e2-open" data-t="segui" data-k="${esc(k)}">Actualizar seguimiento</button><button class="btn sm" data-act="e2-open" data-t="alta" data-k="${esc(k)}">Dar de alta</button></div>`}
     ${S.act&&S.act.k===k&&S.act.t==="segui"?segForm(l):""}${open?`<div class="fgrid"><label class="f">Fecha del alta<input type="date" id="alta-fecha" value="${esc(S.act.fecha)}"></label><label class="f">Observación<input type="text" id="alta-obs" value="${esc(S.act.obs||"")}" placeholder="Opcional"></label><button class="btn" data-act="e2-close">Cancelar</button><button class="btn pri" data-act="e2-alta" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Confirmar alta"}</button></div>`:""}</div>`}).join("")}</div>`:'<p class="empty">No hay lesiones activas.</p>'}</section>`;
  h+=`<section class="sec"><h3>Sanciones vigentes</h3>${sact.length?`<div class="list">${sact.map(x=>{const j=jById(x.jid);const k=x.jid+"|"+dKey(x.fecha);const open=S.act&&S.act.k===k&&(S.act.t==="fechas"||S.act.t==="cumplida");
     return `<div class="ccard"><div class="att-top">${avatar(j||{nombre:x.jid},"sm")}<div class="meta" style="flex:1;min-width:0"><a class="nm" href="#jugador-${esc(x.jid)}" style="color:inherit;font-weight:700">${esc(j?shortName(j.nombre):x.jid)}</a><span class="sub">${esc(x.motivo)} · ${esc(dLong(x.fecha))}</span><span class="sub" style="font-weight:600;color:var(--ink)">${x.fechas!=null?`${x.cumplidas||0} de ${x.fechas} fechas cumplidas · faltan ${x.rest!=null?x.rest:Math.max(0,x.fechas-(x.cumplidas||0))}`:`Sanción sin definir · ${x.cumplidas||0} fechas de Liga jugadas desde la falta`}</span></div></div>${open?"":`<div class="row"><button class="btn sm" data-act="e2-open" data-t="fechas" data-k="${esc(k)}">${x.fechas!=null?"Cambiar fechas de sanción":"Fijar fechas de sanción"}</button><button class="btn sm" data-act="e2-open" data-t="cumplida" data-k="${esc(k)}">Dar por cumplida</button></div>`}
     ${open&&S.act.t==="cumplida"?`<div class="banner ok">Se registra con ${x.cumplidas||0} ${(x.cumplidas||0)===1?"fecha":"fechas"} de sanción (las de Liga ya jugadas después de la falta) y queda cumplida. El jugador vuelve a estar disponible.</div><div class="fgrid"><button class="btn" data-act="e2-close">Cancelar</button><button class="btn pri" data-act="e2-cumplida" data-n="${x.cumplidas||0}" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Confirmar"}</button></div>`:open?`<div class="fgrid"><label class="f" style="grid-column:1/-1">Fechas de sanción que dio la Liga<input type="number" inputmode="numeric" id="fx-n" min="0" max="30" value="${esc(S.act.n)}"></label><button class="btn" data-act="e2-close">Cancelar</button><button class="btn pri" data-act="e2-fechas" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar"}</button></div><p class="hint">Las fechas cumplidas se cuentan solas con los partidos de Liga jugados después de la falta.</p>`:""}</div>`}).join("")}</div>`:'<p class="empty">No hay sanciones vigentes.</p>'}</section></div>`;
  // Zonas
  const z={};les.forEach(l=>{const k=l.zona||"Sin zona";z[k]=z[k]||{n:0,d:0};z[k].n++;z[k].d+=l.dias||0});
  const zk=Object.keys(z).sort((a,b)=>z[b].n-z[a].n||z[b].d-z[a].d);const zmax=Math.max(1,...zk.map(k=>z[k].n));
  h+=`<div class="cols"><section class="sec"><h3>Zonas más afectadas</h3>${zk.length?`<div class="list">${zk.map(k=>`<div class="hbar"><div class="lb"><span>${esc(k)}</span><span class="num">${z[k].n} ${z[k].n===1?"lesión":"lesiones"} · ${z[k].d} días</span></div><div class="tr"><i style="width:${z[k].n/zmax*100}%;background:var(--danger)"></i></div></div>`).join("")}</div>`:'<p class="empty">Sin lesiones registradas.</p>'}</section>`;
  // Cronología
  const all=[...les.map(l=>({t:"l",f:l.fecha,o:l})),...san.map(x=>({t:"s",f:x.fecha,o:x}))].sort((a,b)=>(b.f||0)-(a.f||0));
  h+=`<section class="sec"><h3>Cronología</h3>${all.length?`<div class="tl">${all.map(e=>{const j=jById(e.o.jid);const nm=esc(j?shortName(j.nombre):e.o.jid);
     return e.t==="l"?`<div class="ev"><b style="font-size:.85rem">${esc(dShort(e.f))}</b><span><span class="chip les">Lesión</span> ${nm} · ${esc(e.o.zona)}${e.o.ctx?" · "+esc(e.o.ctx):""} <span class="hint">· ${e.o.altaReal?"alta "+esc(dShort(e.o.altaReal))+" · "+(e.o.dias||0)+" días":"activa"}</span></span></div>`
     :`<div class="ev"><b style="font-size:.85rem">${esc(dShort(e.f))}</b><span><span class="chip sus">Sanción</span> ${nm} · ${esc(e.o.motivo)} <span class="hint">· ${esc(e.o.estado)}</span></span></div>`}).join("")}</div>`:'<p class="empty">Sin registros.</p>'}</section></div>`;
  return h;
}
function playerOptions(sel){return `<option value="">Elige un jugador</option>`+S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).sort((a,b)=>a.nombre.localeCompare(b.nombre)).map(j=>`<option value="${j.id}" ${j.id===sel?"selected":""}>${esc(j.nombre)}${j.dorsal?" · "+esc(j.dorsal):""}</option>`).join("")}
function vRegLesion(){
  if(!S.les)S.les={jid:"",fecha:todayISO(),zona:"",desc:"",ctx:S.contextos[0]||"",prev:"",obs:"",confirm:false};
  const f=S.les,j=jById(f.jid);
  let h=`${subnav(SUBR,"reg-lesion")}<h2>Registrar lesión</h2><section class="sec"><div class="fgrid">
   <label class="f" style="grid-column:1/-1">Jugador<select id="ls-jid">${playerOptions(f.jid)}</select></label>
   <label class="f">Fecha de la lesión<input type="date" id="ls-fecha" value="${esc(f.fecha)}"></label>
   <label class="f">Contexto<select id="ls-ctx">${S.contextos.map(c=>`<option ${c===f.ctx?"selected":""}>${esc(c)}</option>`).join("")}</select></label>
   <label class="f">Zona corporal<select id="ls-zona"><option value="">Elige la zona</option>${S.zonas.map(c=>`<option ${c===f.zona?"selected":""}>${esc(c)}</option>`).join("")}</select></label>
   <label class="f">Alta prevista<input type="date" id="ls-prev" value="${esc(f.prev)}"></label>
   <label class="f" style="grid-column:1/-1">Seguimiento<select id="ls-seg"><option value="">—</option>${SEGS.map(c=>`<option ${c===f.seg?"selected":""}>${esc(c)}</option>`).join("")}</select></label>
   <label class="f" style="grid-column:1/-1">Descripción<input type="text" id="ls-desc" value="${esc(f.desc)}" placeholder="Ej.: esguince grado 1"></label>
   <label class="f" style="grid-column:1/-1">Observaciones<input type="text" id="ls-obs" value="${esc(f.obs)}" placeholder="Opcional"></label></div>
   <p class="hint">El jugador pasa a “Lesionado” en la hoja hasta que le des el alta. Si aún no hay fecha (por ejemplo, falta el veredicto del fisio), deja vacía el alta prevista: queda como <b>indefinida</b>.</p></section>`;
  h+=f.confirm?`<section class="sec" style="border:2px solid var(--accent)"><h3>Confirmar</h3><p style="margin:0">Lesión de <b>${esc(j?j.nombre:"")}</b> en ${esc(f.zona)}, ${esc(dLong(isoToDate(f.fecha)))}${f.prev?", alta prevista "+esc(dLong(isoToDate(f.prev))):""}.</p><div class="fgrid"><button class="btn" data-act="e2-back">Volver</button><button class="btn pri" data-act="e2-saveles" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar en la hoja"}</button></div></section>`
   :`<button class="btn pri wide" data-act="e2-revles">Revisar y guardar</button>`;
  return h;
}
function vRegSancion(){
  if(!S.san)S.san={jid:"",fecha:todayISO(),partido:"",motivo:"Roja directa",fechas:"",obs:"",confirm:false};
  const f=S.san,j=jById(f.jid);const pts=[...S.partidos].reverse();
  let h=`${subnav(SUBR,"reg-sancion")}<h2>Registrar sanción</h2><section class="sec"><div class="fgrid">
   <label class="f" style="grid-column:1/-1">Jugador<select id="sn-jid">${playerOptions(f.jid)}</select></label>
   <label class="f" style="grid-column:1/-1">Partido<select id="sn-partido"><option value="">Sin partido</option>${pts.map(p=>`<option value="${esc(p.label||p.id)}" ${f.partido===(p.label||p.id)?"selected":""}>${esc(p.label||p.id)}</option>`).join("")}</select></label>
   <label class="f">Fecha de la falta<input type="date" id="sn-fecha" value="${esc(f.fecha)}"></label>
   <label class="f">Motivo<select id="sn-motivo">${["Roja directa","Doble amarilla","Acumulación de amarillas","Otra"].map(c=>`<option ${c===f.motivo?"selected":""}>${c}</option>`).join("")}</select></label>
   <label class="f" style="grid-column:1/-1">Fechas de sanción<input type="number" inputmode="numeric" id="sn-fechas" min="0" max="30" value="${esc(f.fechas)}" placeholder="Déjalo vacío si la Liga aún no decide"></label>
   <label class="f" style="grid-column:1/-1">Observaciones<input type="text" id="sn-obs" value="${esc(f.obs)}" placeholder="Opcional"></label></div>
   <p class="hint">Sin fechas definidas queda “Pendiente” y el jugador figura como suspendido. Las fechas cumplidas se cuentan solas con los partidos de Liga.</p></section>`;
  h+=f.confirm?`<section class="sec" style="border:2px solid var(--accent)"><h3>Confirmar</h3><p style="margin:0">Sanción a <b>${esc(j?j.nombre:"")}</b>: ${esc(f.motivo)}, ${esc(dLong(isoToDate(f.fecha)))}, ${f.fechas!==""?esc(f.fechas)+" fechas":"fechas pendientes"}.</p><div class="fgrid"><button class="btn" data-act="e2-back">Volver</button><button class="btn pri" data-act="e2-savesan" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar en la hoja"}</button></div></section>`
   :`<button class="btn pri wide" data-act="e2-revsan">Revisar y guardar</button>`;
  return h;
}
const SEGS=["Sin valoración del fisio","En valoración","En fisioterapia","Readaptación"];
function segForm(l){const A=S.act;return `<div class="fgrid"><label class="f">Nueva alta prevista<input type="date" id="sg-prev" value="${esc(A.prev||"")}" ${A.indef?"disabled":""}></label><label class="f" style="justify-content:flex-end"><span class="row" style="gap:8px;text-transform:none;letter-spacing:0;font-size:.95rem;color:var(--ink)"><input type="checkbox" id="sg-indef" ${A.indef?"checked":""} style="width:22px;height:22px;min-height:0"> Indefinida</span></label><label class="f" style="grid-column:1/-1">Seguimiento<select id="sg-seg"><option value="">—</option>${SEGS.map(c=>`<option ${c===A.seg?"selected":""}>${esc(c)}</option>`).join("")}</select></label><button class="btn" data-act="e2-close">Cancelar</button><button class="btn pri" data-act="e2-segui" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar"}</button></div><p class="hint">No da de alta: el jugador sigue como lesionado.</p>`}
function dateFormula(iso){const d=isoToDate(iso);return `=DATE(${d.getFullYear()};${d.getMonth()+1};${d.getDate()})`}
function lastRow(rows){let last=0;rows.forEach((x,i)=>{if(x&&x.some(v=>v!==""&&v!=null))last=i+1});return last+2}
async function writeLesion(f){
  const fresh=await readRange("Lesiones!A2:K300");const k=dKey(isoToDate(f.fecha));
  if(fresh.some(x=>x&&String(x[0]||"").slice(0,3)===f.jid&&dKey(pDate(x[2]))===k))throw {code:"dup",message:"Ya hay una lesión de este jugador en esa fecha."};
  const r=lastRow(fresh),j=jById(f.jid);
  await gs("update_values",{range:`Lesiones!A${r}:L${r}`,values:[[j.label,null,dateFormula(f.fecha),f.zona,f.desc,f.ctx,f.prev?dateFormula(f.prev):"",null,null,null,f.obs||null,f.seg||null]]});
}
async function writeSancion(f){
  const fresh=await readRange("Sanciones!A2:J300");const k=dKey(isoToDate(f.fecha));
  if(fresh.some(x=>x&&String(x[0]||"").slice(0,3)===f.jid&&dKey(pDate(x[2]))===k))throw {code:"dup",message:"Ya hay una sanción de este jugador en esa fecha."};
  const r=lastRow(fresh),j=jById(f.jid);
  await gs("update_values",{range:`Sanciones!A${r}:J${r}`,values:[[j.label,null,dateFormula(f.fecha),f.partido,f.motivo,f.fechas===""?"":Number(f.fechas),null,null,null,f.obs||null]]});
}
async function findRow(sheet,range,k){const fresh=await readRange(range);const [jid,dk]=k.split("|");const i=fresh.findIndex(x=>x&&String(x[0]||"").slice(0,3)===jid&&dKey(pDate(x[2]))===dk);if(i<0)throw {code:"gone",message:"No encontré ese registro en la hoja. Toca Actualizar."};return {r:i+2,row:fresh[i]}}
async function writeAlta(k,fecha,obs){const {r,row}=await findRow("Lesiones","Lesiones!A2:K300",k);if(row[7])throw {code:"dup",message:"Esa lesión ya tiene alta en la hoja."};
  await gs("update_values",{range:`Lesiones!H${r}:K${r}`,values:[[dateFormula(fecha),null,null,obs?[row[10],"Alta: "+obs].filter(Boolean).join(" "):null]]});}
async function writeSegui(k,prev,seg){const {r}=await findRow("Lesiones","Lesiones!A2:K300",k);await gs("update_values",{range:`Lesiones!G${r}:L${r}`,values:[[prev?dateFormula(prev):"",null,null,null,null,seg||""]]})}
async function writeFechas(k,n){const {r}=await findRow("Sanciones","Sanciones!A2:J300",k);await gs("update_values",{range:`Sanciones!F${r}`,values:[[Number(n)]]})}
const JOBS={segui:(k,p,g)=>writeSegui(k,p,g),les:(f)=>writeLesion(f),san:(f)=>writeSancion(f),alta:(k,f,o)=>writeAlta(k,f,o),fechas:(k,n)=>writeFechas(k,n),conv:(e)=>writeConv(e),tests:(f,rows)=>writeTests(f,rows),eval:(f)=>writeEval(f)};
const JOB_TXT={segui:"Seguimiento de lesión",les:"Lesión",san:"Sanción",alta:"Alta de lesión",fechas:"Fechas de sanción",conv:"Convocatoria",tests:"Tests",eval:"Evaluación"};
function isNet(e){return !navigator.onLine||!!(e&&(e.code==="server_unavailable"||e.code==="upstream_error"))}
function jobDesc(q){const a=q.a||[],f=a[0]||{};const j=f.jid?jById(f.jid):null;
  if(q.k==="tests")return `Tests · ${f.test||""} · ${(a[1]||[]).length} jug.`;if(q.k==="conv")return `Convocatoria · ${Object.keys(f).length} cambios`;
  if(q.k==="alta"||q.k==="fechas"||q.k==="segui"){const jj=jById(String(a[0]||"").split("|")[0]);return JOB_TXT[q.k]+(jj?" · "+shortName(jj.nombre):"")}
  return JOB_TXT[q.k]+(j?" · "+shortName(j.nombre):"")}
function encolar(job){S.wq.push(job);LS.set("wq",S.wq)}
async function runWrite(job,okMsg,after){
  if(S.busy)return;S.busy=true;render();
  job={k:job.k,a:JSON.parse(JSON.stringify(job.a)),ok:okMsg,ts:Date.now()};
  if(!navigator.onLine||S.wq.length){encolar(job);toast("Guardado en este teléfono. Se enviará a la hoja al volver la señal.");if(after)after();S.busy=false;render();if(navigator.onLine)flushWQ();return}
  try{await JOBS[job.k](...job.a);toast(okMsg);if(after)after();await loadAll()}
  catch(e){if(isNet(e)){encolar(job);toast("Sin señal: quedó guardado en este teléfono y se enviará solo.");if(after)after()}
    else toast(e&&(e.code==="dup"||e.code==="gone")?e.message:gsErrorText(e))}
  finally{S.busy=false;render()}
}
/* Envía en orden lo pendiente. Si un registro ya está en la hoja (llegó antes de perder la señal), no se repite. */
async function flushWQ(){
  if(S._wqBusy||!S.wq.length||!navigator.onLine)return;S._wqBusy=true;S.wqErr=null;render();let n=0,dup=0;
  while(S.wq.length){const q=S.wq[0];
    try{await JOBS[q.k](...q.a);n++}
    catch(e){if(e&&(e.code==="dup"||e.code==="gone"))dup++;else{if(!isNet(e))S.wqErr=gsErrorText(e);break}}
    S.wq.shift();LS.set("wq",S.wq)}
  S._wqBusy=false;
  if(n||dup){toast(`Enviado a la hoja: ${n} ${n===1?"registro":"registros"}`+(dup?` · ${dup} ya ${dup===1?"estaba":"estaban"}`:""));await loadAll()}
  render();
}
function wqBanner(){if(!S.wq.length)return "";
  return `<div class="banner warn"><b>${S.wq.length} ${S.wq.length===1?"registro guardado":"registros guardados"} en el teléfono sin enviar.</b><div class="row" style="margin-top:8px">${S.wq.map(q=>`<span class="chip b">${esc(jobDesc(q))}</span>`).join("")}</div>
   ${S.wqErr?`<p style="margin:8px 0 0">El primero no se pudo guardar: ${esc(S.wqErr)}</p>`:""}
   <div class="row" style="margin-top:8px"><button class="btn pri sm" data-act="wq-flush" ${S._wqBusy?"disabled":""}>${S._wqBusy?"Enviando…":"Enviar a la hoja ahora"}</button>${S.wqErr?'<button class="btn sm" data-act="wq-drop">Descartar el primero</button>':""}</div></div>`}
document.addEventListener("click",ev=>{const t=ev.target.closest('[data-act="wq-flush"],[data-act="wq-drop"]');if(!t)return;
  if(t.dataset.act==="wq-flush"){if(!navigator.onLine){toast("Sin señal todavía.");return}flushWQ()}
  else if(confirm("¿Descartar ese registro? No se guardará en la hoja.")){S.wq.shift();LS.set("wq",S.wq);S.wqErr=null;render()}});

/* ============ Etapa 2 · Convocatoria ============ */
function convRows(){return S.conv.rows.filter(c=>S.grupo==="Todos"||!c.grupo||c.grupo===S.grupo)}
function decOf(c){const e=S.convEdit[c.id];return e&&e.dec!==undefined?e.dec:c.dec}
function necOf(c){const e=S.convEdit[c.id];return e&&e.nec!==undefined?e.nec:c.nec}
function justOf(c){const e=S.convEdit[c.id];return e&&e.just!==undefined?e.just:c.just}
function vConvocatoria(){
  let h=`${subnav(SUBJ,"convocatoria")}<h2>Convocatoria</h2>${groupChips()}`;
  if(!S.conv.ok)return h+'<section class="sec"><p class="empty">No se pudo leer la pestaña Convocatoria. Toca Actualizar.</p></section>';
  const rows=convRows();const disp=rows.filter(c=>c.disp==="Disponible"),out=rows.filter(c=>c.disp!=="Disponible");
  disp.sort((a,b)=>(a.rank||999)-(b.rank||999));
  const nConv=rows.filter(c=>decOf(c)==="Convocado").length,cup=S.conv.cupos;
  const changes=Object.keys(S.convEdit).length;
  h+=`<section class="sec"><div class="kpis"><div class="kpi"><b style="color:${cup&&nConv>cup?"var(--danger)":"var(--ink)"}">${nConv}${cup?"/"+cup:""}</b><span>Convocados por ti</span></div><div class="kpi"><b>${disp.filter(c=>c.sug==="Convocar").length}</b><span>Sugeridos</span></div><div class="kpi"><b>${disp.length}</b><span>Disponibles</span></div></div>
   <p class="hint">Ventana: ${esc(S.conv.ventana)}. El puntaje combina asistencia, nota, evaluación formativa, actitud y necesidad posicional, con los pesos de Config. Si falta un dato, se calcula con los que hay.</p>
   ${cup&&nConv>cup?`<div class="banner err">Pasaste el cupo: ${nConv} convocados para ${cup} cupos.</div>`:""}
   <div class="row"><button class="btn sm" data-act="cv-sug">Tomar la sugerencia</button><button class="btn sm" data-act="cv-clear">Limpiar decisiones</button></div></section>`;
  const card=(c,i)=>{const j=jById(c.id)||{id:c.id,nombre:c.nombre,pos1:c.pos};const d=decOf(c);const open=S.convOpen===c.id;const chg=!!S.convEdit[c.id];
    return `<div class="ccard ${chg?"chg":""}"><div class="att-top">${c.rank?`<span class="ab" style="width:22px;text-align:center;font-size:1.05rem">${c.rank}</span>`:""}${avatar(j,"sm")}<div class="meta" style="flex:1;min-width:0"><span class="nm" style="font-weight:700">${esc(shortName(c.nombre))} <span class="hint ab">${esc(POS_AB[c.pos]||"")}</span></span>
      <span class="sub">${c.punt!=null?"Puntaje "+fmt1(c.punt):"Sin datos"} · ${c.sug==="Convocar"?'<span class="chip ok">Sugerido</span>':c.sug==="Reserva"?'<span class="chip ina">Reserva</span>':`<span class="chip ${/Lesion/i.test(c.sug)?"les":/Suspend/i.test(c.sug)?"sus":"ina"}">${esc(c.sug)}</span>`}</span>
      ${c.punt!=null?`<div class="scorebar"><i style="width:${Math.min(100,c.punt)}%"></i></div>`:""}</div>
      <button class="decbtn ${d==="Convocado"?"on":d==="No convocado"?"no":""}" data-act="cv-dec" data-id="${c.id}">${d==="Convocado"?"Convocado":d==="No convocado"?"No conv.":"Decidir"}</button></div>
      <button class="linkbtn" data-act="cv-open" data-id="${c.id}">${open?"Ocultar detalle":"Ver detalle"}</button>
      ${open?`<div class="facts"><div class="fact"><span>Asistencia</span><b>${esc(c.asis||"–")}${c.sesComp?` <span class="hint">(${c.pres}/${c.sesComp})</span>`:""}</b></div><div class="fact"><span>Minutos</span><b>${c.min!=null?c.min+"'":"–"}</b></div><div class="fact"><span>Nota</span><b>${fmt1(c.nota)}</b></div><div class="fact"><span>Eval. deportiva</span><b>${fmt1(c.eval)}</b></div><div class="fact"><span>Actitud</span><b>${fmt1(c.act)}</b></div><div class="fact"><span>Necesidad</span><b>${necOf(c)||"–"}</b></div></div>
       <div class="fgrid"><label class="f">Necesidad posicional (1-5)<select data-cv="nec" data-id="${c.id}" id="cn-${c.id}"><option value="">Sin valor</option>${[1,2,3,4,5].map(n=>`<option ${Number(necOf(c))===n?"selected":""}>${n}</option>`).join("")}</select></label>
       <label class="f">Justificación<input type="text" data-cv="just" data-id="${c.id}" id="cj-${c.id}" value="${esc(justOf(c))}" placeholder="Opcional"></label></div>`:""}</div>`};
  h+=`<section class="sec"><div class="sec-h"><h3>Ranking de disponibles</h3><span class="hint">Toca el botón para alternar Convocado / No convocado / sin decidir</span></div><div class="list">${disp.map(card).join("")}</div></section>`;
  if(out.length)h+=`<section class="sec"><h3>No disponibles</h3><div class="list">${out.map(card).join("")}</div></section>`;
  if(changes)h+=`<div class="stickybar"><b>${changes} ${changes===1?"cambio":"cambios"} sin guardar</b><div class="fgrid"><button class="btn" data-act="cv-undo">Descartar</button><button class="btn pri" data-act="cv-save" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar en la hoja"}</button></div></div>`;
  return h;
}
function setConv(id,field,val){const c=S.conv.rows.find(x=>x.id===id);if(!c)return;S.convEdit[id]=S.convEdit[id]||{};S.convEdit[id][field]=val;
  const e=S.convEdit[id];if((e.dec===undefined||e.dec===c.dec)&&(e.nec===undefined||String(e.nec||"")===String(c.nec||""))&&(e.just===undefined||e.just===c.just))delete S.convEdit[id]}
async function writeConv(edits){
  const fresh=await readRange("Convocatoria!A5:Q44");const N=40;
  edits=edits||{};const ids=Object.keys(edits);const anyNec=ids.some(id=>edits[id].nec!==undefined),anyPQ=ids.some(id=>edits[id].dec!==undefined||edits[id].just!==undefined);
  const L=[],PQ=[];
  for(let i=0;i<N;i++){const x=fresh[i]||[];const e=edits[x[0]]||{};
    L.push([e.nec!==undefined?(e.nec===""||e.nec==null?"":Number(e.nec)):(x[11]==null?"":x[11])]);
    PQ.push([e.dec!==undefined?(e.dec||""):(x[15]||""),e.just!==undefined?(e.just||""):(x[16]||"")])}
  if(anyNec)await gs("update_values",{range:"Convocatoria!L5:L44",values:L});
  if(anyPQ)await gs("update_values",{range:"Convocatoria!P5:Q44",values:PQ});
}
/* ============ Etapa 2 · Profundidad ============ */
const PITCH_POS=[["Delantero centro",50,12],["Extremo izquierdo",17,21],["Extremo derecho",83,21],["Mediocampista ofensivo",50,31],["Mediocampista mixto",50,45],["Mediocampista defensivo",50,59],["Lateral izquierdo",15,67],["Lateral derecho",85,67],["Defensa central",50,75],["Portero",50,90]];
function covClass(c,total){if(/descub|sin cob|no cub/i.test(c))return "bad";if(/justa/i.test(c))return "warn";if(/cubierta/i.test(c))return "ok";return total>=2?"ok":total===1?"warn":"bad"}
function vProfundidad(){
  const avail=j=>!/Lesion|Suspend|Inactiv/i.test(j.disp)&&!/Inactiv|Retir|Promov/i.test(j.estado);
  const sel=S.profSel||"";
  const info=p=>{const pr=S.jug.filter(j=>j.pos1===p),al=S.jug.filter(j=>j.pos2===p);const s=S.prof[p];return {pr,al,total:s?s.total:pr.filter(avail).length+al.filter(avail).length,disp:s?s.disp:pr.filter(avail).length,cob:s?s.cob:""}};
  let h=`${subnav(SUBJ,"profundidad")}<h2>Profundidad por posición</h2>
   <section class="sec"><p class="hint">El número es cuántos jugadores disponibles cubren cada puesto, contando la posición alternativa. Toca un puesto para ver quiénes son.</p>
   <div class="pitchbox" role="group" aria-label="Cancha con la cobertura de cada posición">
    <span class="ln" style="inset:3% 4%;border-radius:4px"></span><span class="ln" style="left:4%;right:4%;top:50%;height:0;border-width:2px 0 0"></span>
    <span class="ln" style="left:50%;top:50%;width:26%;aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%)"></span>
    <span class="ln" style="left:22%;right:22%;top:3%;height:14%;border-top:0"></span><span class="ln" style="left:22%;right:22%;bottom:3%;height:14%;border-bottom:0"></span>
    ${PITCH_POS.map(([p,x,y])=>{const i=info(p);return `<button class="node ${sel===p?"sel":""}" style="left:${x}%;top:${y}%" data-act="pf-sel" data-p="${esc(p)}" aria-label="${esc(p)}: ${i.total} disponibles"><span class="ring ${covClass(i.cob,i.total)}">${i.total}</span><span class="lb">${POS_AB[p]}</span></button>`}).join("")}
   </div>
   <div class="legend" style="justify-content:center"><span><i style="background:#1f8a4c;border-radius:50%"></i>Cubierta</span><span><i style="background:#c98a00;border-radius:50%"></i>Justa</span><span><i style="background:#c3352b;border-radius:50%"></i>Descubierta</span></div></section>`;
  const ps=sel?[sel]:PITCH_POS.map(x=>x[0]);
  h+=`<section class="sec"><div class="sec-h"><h3>${sel?esc(sel):"Todas las posiciones"}</h3>${sel?'<button class="linkbtn" data-act="pf-sel" data-p="">Ver todas</button>':""}</div><div class="list">${ps.map(p=>{const i=info(p);
    return `<div class="ccard"><div class="sec-h"><b>${esc(p)} <span class="hint ab">${POS_AB[p]}</span></b><span class="chip ${covClass(i.cob,i.total)==="ok"?"ok":covClass(i.cob,i.total)==="warn"?"sus":"les"}">${i.cob?esc(i.cob)+" · ":""}${i.total}</span></div>
     <div class="row">${i.pr.map(j=>`<a href="#jugador-${j.id}" class="chip ${avail(j)?"b":"les"}" style="text-decoration:none;text-transform:none;font-size:.8rem">${esc(shortName(j.nombre))}${avail(j)?"":" · "+esc(j.disp)}</a>`).join("")||'<span class="hint">Nadie la tiene como principal.</span>'}</div>
     ${i.al.length?`<div class="row"><span class="hint">Alternativa:</span>${i.al.map(j=>`<a href="#jugador-${j.id}" class="chip ina" style="text-decoration:none;text-transform:none;font-size:.8rem">${esc(shortName(j.nombre))}</a>`).join("")}</div>`:""}</div>`}).join("")}</div></section>`;
  return h;
}

/* ============ Etapa 2 · Comparador ============ */
const CMP_COL=["var(--accent)","var(--sky)","var(--warn)"];
function vComparar(){
  const ms=fMatches();
  let h=`${subnav(SUBJ,"comparar")}<h2>Comparar jugadores</h2>${compChips()}<section class="sec"><div class="fgrid">${[0,1,2].map(i=>`<label class="f" style="${i===2?"grid-column:1/-1":""}">Jugador ${i+1}${i===2?" (opcional)":""}<select id="cmp-${i}" data-cmp="${i}">${playerOptions(S.cmp[i]||"")}</select></label>`).join("")}</div></section>`;
  const ids=S.cmp.filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i);
  if(ids.length<2)return h+'<section class="sec"><div class="pending"><b>Elige al menos dos jugadores</b><span class="hint">Útil cuando dudas entre dos para un puesto.</span></div></section>';
  const P=ids.map(id=>{const j=jById(id),s=pStats(id,ms),c=S.conv.rows.find(x=>x.id===id)||{};const ses=sessionsOf(id);return {j,s,c,asis:asisPct(ses)}});
  const rows=[["Partidos jugados",p=>p.s.pj,1],["Titular",p=>p.s.tit,1],["Minutos",p=>p.s.min,1,"'"],["Minutos por partido",p=>p.s.pj?p.s.min/p.s.pj:null,1,"'"],["Goles",p=>p.s.g,1],["Asistencias",p=>p.s.a,1],["G+A por 90",p=>p.s.min?(p.s.g+p.s.a)*90/p.s.min:null,1],["Nota media",p=>p.s.nota,1],["MVP",p=>p.s.mvp,1],["Tarjetas",p=>p.s.am+p.s.ro*2,-1],["Asistencia a sesiones",p=>p.asis!=null?p.asis*100:null,1,"%"],["Puntaje de convocatoria",p=>p.c.punt!=null?p.c.punt:null,1]];
  const cols=`grid-template-columns:minmax(90px,1.2fr) repeat(${P.length},minmax(0,1fr))`;
  h+=`<section class="sec"><div class="cmpgrid" style="${cols}"><span></span>${P.map((p,i)=>`<div class="h">${avatar(p.j,"")}<span style="color:${CMP_COL[i]}">${esc(shortName(p.j.nombre))}</span><span class="hint ab">${esc(POS_AB[p.j.pos1]||"")}</span>${dispChip(p.j)}</div>`).join("")}
   ${rows.map(([k,fn,dir,u])=>{const v=P.map(fn);const valid=v.filter(x=>x!=null);const best=valid.length>1?(dir>0?Math.max(...valid):Math.min(...valid)):null;const tie=valid.filter(x=>x===best).length===valid.length;
     return `<span class="k">${k}</span>${v.map(x=>`<span class="v ${x!=null&&x===best&&!tie?"best":""}">${x==null?"–":(Number.isInteger(x)?x:fmt1(x))+(u||"")}</span>`).join("")}`}).join("")}</div>
   <p class="hint">Verde: el mejor valor de la fila. En tarjetas gana el que tiene menos; la roja cuenta doble.</p></section>`;
  // Nota partido a partido
  const W=400,H=200,L=26,R=10,T=14,Bt=28,n=ms.length;
  if(n){const x=i=>L+(n===1?(W-L-R)/2:i*(W-L-R)/(n-1)),y=v=>T+(H-T-Bt)*(1-v/10);let g="";[0,5,10].forEach(v=>g+=`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L-5}" y="${y(v)+4}" text-anchor="end">${v}</text>`);
    ms.forEach((m,i)=>g+=`<text x="${x(i)}" y="${H-8}" text-anchor="middle">${esc(dShort(m.fecha))}</text>`);
    P.forEach((p,k)=>{const pts=ms.map((m,i)=>{const r=S.stats.find(s=>s.pt===m.id&&s.jid===p.j.id);return r&&r.min>0&&r.nota!=null?[x(i),y(r.nota)]:null});
      let d="",prev=false;pts.forEach(q=>{if(q){d+=(prev?"L":"M")+q[0]+" "+q[1];prev=true}else prev=false});
      g+=`<path d="${d}" fill="none" stroke="${CMP_COL[k]}" stroke-width="2.5"/>`+pts.filter(Boolean).map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="4.5" fill="${CMP_COL[k]}" stroke="var(--surface)" stroke-width="2"/>`).join("")});
    h+=`<section class="sec"><h3>Nota partido a partido</h3><div class="legend">${P.map((p,i)=>`<span><i style="background:${CMP_COL[i]}"></i>${esc(shortName(p.j.nombre))}</span>`).join("")}</div><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Nota por partido de los jugadores comparados">${g}</svg><p class="hint">Los huecos son partidos sin jugar.</p></section>`}
  h+=cmpE3(P);
  return h;
}

/* ============ Etapa 2 · Eventos ============ */
function bindForm(obj,map,t){if(!S[obj])return false;for(const id in map){if(t.id===id){S[obj][map[id]]=t.value;S[obj].confirm=false;return true}}return false}
document.addEventListener("input",ev=>{const t=ev.target;
  if(bindForm("les",{"ls-jid":"jid","ls-fecha":"fecha","ls-ctx":"ctx","ls-zona":"zona","ls-prev":"prev","ls-desc":"desc","ls-obs":"obs","ls-seg":"seg"},t))return;
  if(bindForm("san",{"sn-jid":"jid","sn-fecha":"fecha","sn-partido":"partido","sn-motivo":"motivo","sn-fechas":"fechas","sn-obs":"obs"},t)){if(t.id==="sn-partido"){const p=S.partidos.find(x=>(x.label||x.id)===t.value);if(p&&p.fecha){S.san.fecha=dKey(p.fecha);render()}}return}
  if(S.act){if(t.id==="alta-fecha")S.act.fecha=t.value;if(t.id==="alta-obs")S.act.obs=t.value;if(t.id==="fx-n")S.act.n=t.value}
  if(t.dataset.cv==="just"){setConv(t.dataset.id,"just",t.value);const bar=document.querySelector(".stickybar");if(!bar||!Object.keys(S.convEdit).length)render()}
});
document.addEventListener("change",ev=>{const t=ev.target;
  if(t.dataset.cv==="nec"){setConv(t.dataset.id,"nec",t.value===""?"":Number(t.value));render()}
  if(t.dataset.cmp!=null){S.cmp[Number(t.dataset.cmp)]=t.value;LS.set("cmp",S.cmp);render()}
});
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-act]");if(!t)return;const a=t.dataset.act;if(!/^(e2|cv|pf)-/.test(a))return;
  if(a==="pf-sel"){S.profSel=t.dataset.p;render();return}
  if(a==="e2-open"&&t.dataset.t==="segui"){const k=t.dataset.k,l=S.lesiones.find(x=>x.jid+"|"+dKey(x.fecha)===k);S.act={t:"segui",k,prev:l&&l.altaPrev?dKey(l.altaPrev):"",indef:!(l&&l.altaPrev),seg:l?l.seg:""};render();return}
  if(a==="e2-segui"){const A=S.act;if(!A.indef&&!A.prev){toast("Elige la nueva alta prevista o marca Indefinida.");return}runWrite({k:"segui",a:[A.k,A.indef?"":A.prev,A.seg]},"Seguimiento actualizado. El jugador sigue lesionado.",()=>{S.act=null});return}
  if(a==="e2-open"){const k=t.dataset.k;if(t.dataset.t==="alta")S.act={t:"alta",k,fecha:todayISO(),obs:""};else{const x=S.sanciones.find(s=>s.jid+"|"+dKey(s.fecha)===k);S.act={t:t.dataset.t,k,n:x&&x.fechas!=null?String(x.fechas):""}}render();return}
  if(a==="e2-close"){S.act=null;render();return}
  if(a==="e2-alta"){const A=S.act;if(!A.fecha){toast("Elige la fecha del alta.");return}runWrite({k:"alta",a:[A.k,A.fecha,A.obs]},"Alta guardada. El jugador vuelve a estar disponible.",()=>{S.act=null});return}
  if(a==="e2-cumplida"){const A=S.act;runWrite({k:"fechas",a:[A.k,Number(t.dataset.n)]},"Sanción cumplida. El jugador vuelve a estar disponible.",()=>{S.act=null});return}
  if(a==="e2-fechas"){const A=S.act;const n=Number(A.n);if(A.n===""||!(n>=0&&n<=30)){toast("Escribe un número de fechas entre 0 y 30.");return}runWrite({k:"fechas",a:[A.k,n]},"Fechas de sanción guardadas.",()=>{S.act=null});return}
  if(a==="e2-revles"){const f=S.les;if(!f.jid||!f.fecha||!f.zona){toast("Elige jugador, fecha y zona.");return}if(f.prev&&f.prev<f.fecha){toast("El alta prevista no puede ser antes de la lesión.");return}f.confirm=true;render();return}
  if(a==="e2-revsan"){const f=S.san;if(!f.jid||!f.fecha){toast("Elige jugador y fecha.");return}if(f.fechas!==""&&!(Number(f.fechas)>=0&&Number(f.fechas)<=30)){toast("Las fechas deben estar entre 0 y 30.");return}f.confirm=true;render();return}
  if(a==="e2-back"){if(S.les)S.les.confirm=false;if(S.san)S.san.confirm=false;render();return}
  if(a==="e2-saveles"){const f=Object.assign({},S.les);runWrite({k:"les",a:[f]},"Lesión guardada en la hoja.",()=>{S.les=null;location.hash="#bajas"});return}
  if(a==="e2-savesan"){const f=Object.assign({},S.san);runWrite({k:"san",a:[f]},"Sanción guardada en la hoja.",()=>{S.san=null;location.hash="#bajas"});return}
  if(a==="cv-open"){S.convOpen=S.convOpen===t.dataset.id?null:t.dataset.id;render();return}
  if(a==="cv-dec"){const c=S.conv.rows.find(x=>x.id===t.dataset.id);const d=decOf(c);setConv(c.id,"dec",d==="Convocado"?"No convocado":d==="No convocado"?"":"Convocado");render();return}
  if(a==="cv-sug"){convRows().forEach(c=>setConv(c.id,"dec",c.sug==="Convocar"?"Convocado":c.disp==="Disponible"?"No convocado":""));render();toast("Sugerencia aplicada. Revisa y guarda.");return}
  if(a==="cv-clear"){convRows().forEach(c=>setConv(c.id,"dec",""));render();toast("Decisiones vaciadas. Guarda para aplicarlo en la hoja.");return}
  if(a==="cv-undo"){S.convEdit={};render();return}
  if(a==="cv-save"){runWrite({k:"conv",a:[S.convEdit]},"Convocatoria guardada en la hoja.",()=>{S.convEdit={}});return}
});

/* ============ Etapa 3 · Utilidades ============ */
const TOMAS_DEF=["T1","T2","T3","T4"];
const AREAS=[["tec","Técnico"],["tac","Táctico"],["fis","Físico"],["psi","Psicosocial"]];
const SUBS=[["minutos","Minutos"],["carga","Carga y bienestar"],["asistencia","Asistencia"],["tests","Tests"],["evaluacion","Evaluación"]];
function monday(d){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x}
function mmss(v){const t=Math.round(v*10)/10,mi=Math.floor(t/60),se=t-mi*60;return mi+":"+(se<10?"0":"")+(Math.round(se*10)/10).toLocaleString("es-CO",{maximumFractionDigits:1})}
function fmtV(v,u){return u==="s"&&v!=null&&isFinite(v)&&v>=60?mmss(v):fmtR(v)}
function fmtT(v,u){return u==="s"&&v!=null&&isFinite(v)&&v>=60?mmss(v)+" min":fmtR(v)+" "+u}
function parseRes(raw){const m=/^(\d{1,3})\s*(?:[:'´’-]|\s)\s*([0-5]?\d(?:[.,]\d+)?)\s*(?:''|"|’’|s)?$/i.exec(String(raw).trim());if(m){const se=Number(m[2].replace(",","."));return se<60?Number(m[1])*60+se:null}return numDec(raw)}
function fmtR(v){return v==null||!isFinite(v)?"–":Number(v).toLocaleString("es-CO",{maximumFractionDigits:2})}
function btnLink(href,txt,pri){return `<a class="btn sm ${pri?"pri":""}" href="${href}" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;align-self:flex-start">${txt}</a>`}
function pendingBox(t,msg,link){return `<div class="pending"><b>${t}</b><span class="hint">${msg}</span>${link||""}</div>`}
function activePl(){return fJug().filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).sort((a,b)=>(Number(a.dorsal)||999)-(Number(b.dorsal)||999)||a.nombre.localeCompare(b.nombre))}
function loadsOf(jid){const out=[];
  S.sesiones.forEach(s=>{if((!jid||s.jid===jid)&&s.asis==="Presente"&&s.min!=null&&s.rpe!=null)out.push({f:s.fecha,c:s.min*s.rpe,jid:s.jid})});
  S.stats.forEach(s=>{const m=S.partidos.find(p=>p.id===s.pt);if((!jid||s.jid===jid)&&m&&m.fecha&&s.min>0&&s.rpe!=null)out.push({f:m.fecha,c:s.min*s.rpe,jid:s.jid})});return out}
function weekly(list,n){const t=monday(today0()),weeks=[],idx={};for(let i=n-1;i>=0;i--){const d=new Date(t);d.setDate(d.getDate()-7*i);const w={k:dKey(d),d,sum:0,ids:new Set()};weeks.push(w);idx[w.k]=w}
  list.forEach(l=>{const w=idx[dKey(monday(l.f))];if(w){w.sum+=l.c;w.ids.add(l.jid)}});return weeks}
function lastBien(jid,days){const lim=today0();lim.setDate(lim.getDate()-(days||14));const a=S.bien.filter(b=>b.jid===jid&&b.f>=lim).sort((x,y)=>x.f-y.f);return a[a.length-1]||null}
function semaforo(j){const p=S.panel[j.id]||{};const acwr=numDec(p.acwr),bien=numDec(p.bien);const hi=S.config.acwrHi||1.5,lo=S.config.acwrLo||0.8,bb=S.config.bienBajo||60;
  const lb=lastBien(j.id);const reasons=[];let lvl=0;
  if(acwr!=null){if(acwr>hi){lvl=2;reasons.push("ACWR alto")}else if(acwr<lo){lvl=1;reasons.push("ACWR bajo")}}
  if(lb&&lb.alertas)lb.alertas.split(".").map(x=>x.trim()).filter(Boolean).forEach(a=>{reasons.push(a);lvl=Math.max(lvl,/bajo|Caída|Molestia/i.test(a)?2:1)});
  else if(bien!=null&&bien<bb){lvl=2;reasons.push("Bienestar bajo")}
  return {lvl:acwr==null&&bien==null&&!lb?-1:lvl,reasons,acwr,bien,lb}}
function lastEval(jid){const a=S.evals.filter(e=>e.jid===jid);return a[a.length-1]||null}
function teamEvalAvg(){const L=S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).map(j=>lastEval(j.id)).filter(Boolean);return AREAS.map(([k])=>{const v=L.map(e=>e[k]).filter(x=>x!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null})}
function testMeta(n){return S.testCat.find(t=>t.n===n)||{n,u:"",mejor:"Mayor"}}
function tomaVals(jid,test){const o={};S.tests.filter(t=>t.jid===jid&&t.test===test).forEach(t=>{if(!o[t.toma]||(t.f||0)>=(o[t.toma].f||0))o[t.toma]=t});return o}
function testsPresent(){return [...new Set(S.tests.map(t=>t.test))]}
function tomasOf(test){const ts=new Set(S.tests.filter(t=>t.test===test).map(t=>t.toma));return [...S.tomas.filter(t=>ts.has(t)),...[...ts].filter(t=>!S.tomas.includes(t))]}
function rankFor(test,toma){const m=testMeta(test);const arr=S.jug.map(j=>({j,v:(tomaVals(j.id,test)[toma]||{}).res})).filter(x=>x.v!=null);arr.sort((a,b)=>m.mejor==="Menor"?a.v-b.v:b.v-a.v);return arr}
function improve(test,a,b){if(a==null||b==null||!a)return null;return testMeta(test).mejor==="Menor"?(a-b)/a:(b-a)/a}
function barW(v,mn,mx,mejor){if(mx===mn)return 100;const r=(v-mn)/(mx-mn);return Math.round(20+80*(mejor==="Menor"?1-r:r))}
function radar(series,axes,max){const W=320,H=270,cx=160,cy=138,R=96,n=axes.length;const pt=(i,v)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*R*v/max,cy+Math.sin(a)*R*v/max]};
  let g="";for(let k=1;k<=max;k++)g+=`<polygon points="${axes.map((_,i)=>pt(i,k).join(",")).join(" ")}" fill="none" class="gl"/>`;
  axes.forEach((a,i)=>{const [x,y]=pt(i,max),[lx,ly]=pt(i,max*1.2);g+=`<line class="gl" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/><text x="${lx}" y="${ly+4}" text-anchor="middle" style="font-weight:700;fill:var(--ink)">${esc(a)}</text>`});
  series.forEach(s=>{const vs=s.v.map(v=>v==null?0:v);g+=`<polygon points="${vs.map((v,i)=>pt(i,v).join(",")).join(" ")}" fill="${s.c}" fill-opacity="${s.dash?0:.16}" stroke="${s.c}" stroke-width="2.5" ${s.dash?'stroke-dasharray="5 4"':""}/>`;
    if(!s.dash)vs.forEach((v,i)=>{const [x,y]=pt(i,v);g+=`<circle cx="${x}" cy="${y}" r="4" fill="${s.c}"/>`})});
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" style="max-width:340px;margin:0 auto" role="img" aria-label="Radar de evaluación formativa">${g}</svg>`}
function defaultPer(){const used=S.evals.map(e=>e.per).filter(Boolean);if(used.length)return used[used.length-1];const d=new Date();const M=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return M[d.getMonth()]+" "+d.getFullYear()}

/* ============ Etapa 3 · Carga y bienestar ============ */
function vCarga(){
  let h=`${subnav(SUBS,"carga")}<h2>Carga y bienestar</h2>${groupChips()}`;
  const act=activePl(),wk=monday(today0());
  const resp=new Set(S.bien.filter(b=>b.sem&&dKey(b.sem)===dKey(wk)).map(b=>b.jid));
  const sem=act.map(j=>({j,s:semaforo(j)}));const red=sem.filter(x=>x.s.lvl===2),yel=sem.filter(x=>x.s.lvl===1);
  h+=`<section class="sec"><div class="kpis"><div class="kpi"><b style="color:var(--danger)">${red.length}</b><span>En rojo</span></div><div class="kpi"><b style="color:var(--warn)">${yel.length}</b><span>En amarillo</span></div><div class="kpi"><b>${resp.size}/${act.length}</b><span>Respondieron esta semana</span></div></div>
   <p class="hint">Rojo: ACWR sobre ${fmtR(S.config.acwrHi||1.5)}, bienestar bajo ${S.config.bienBajo||60}, caída fuerte o molestia repetida. Amarillo: ACWR bajo ${fmtR(S.config.acwrLo||0.8)} u otra alerta del formulario. Los umbrales salen de Config.</p></section>`;
  const W=weekly(loadsOf(null).filter(l=>act.some(j=>j.id===l.jid)),8);const anyL=W.some(w=>w.sum>0);
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Carga media semanal</h3><span class="hint">sRPE por jugador</span></div>${anyL?colBars(W.map(w=>{const v=w.ids.size?Math.round(w.sum/w.ids.size):0;return {x:dShort(w.d),v,t:v||"",c:dKey(w.d)===dKey(wk)?"var(--sky)":"var(--accent)"}}),{aria:"Carga media semanal por jugador",h:170})+'<p class="hint">Sesiones y partidos. La barra celeste es la semana en curso.</p>':pendingBox("Pendiente","Aparece cuando registras sesiones con duración y RPE, o partidos con RPE.")}</section>`;
  const lim=today0();lim.setDate(lim.getDate()-14);
  const mol=S.bien.filter(b=>b.f>=lim&&b.mol&&!/^ninguna$/i.test(b.mol.trim())&&act.some(j=>j.id===b.jid)).sort((a,b)=>b.f-a.f);
  const nores=act.filter(j=>!resp.has(j.id));
  h+=`<section class="sec"><div class="sec-h"><h3>Formulario semanal</h3><span class="hint">Semana del ${esc(dLong(wk))}</span></div>
   ${S.bien.length?(nores.length?`<span class="hint">No han respondido (${nores.length}):</span><div class="row">${nores.map(j=>`<a class="chip ina" href="#jugador-${j.id}" style="text-decoration:none;text-transform:none;font-size:.8rem">${esc(shortName(j.nombre))}</a>`).join("")}</div>`:'<p class="empty">Todos respondieron esta semana.</p>')
     +`<span class="hint">Molestias reportadas en las últimas 2 semanas:</span>${mol.length?`<div class="list">${mol.map(b=>{const j=jById(b.jid);return `<a class="li" href="#jugador-${b.jid}" style="text-decoration:none;min-height:44px">${avatar(j||{nombre:b.jid},"sm")}<div class="meta"><span class="nm">${esc(j?shortName(j.nombre):b.jid)}</span><span class="sub">${esc(b.mol)} · ${esc(dShort(b.f))}</span></div>${/^s[ií]/i.test(b.rep)?'<span class="chip les">Repetida</span>':""}</a>`}).join("")}</div>`:'<p class="empty">Ninguna.</p>'}`
     :pendingBox("Pendiente","El formulario de bienestar todavía no tiene respuestas. Cuando los jugadores respondan, verás aquí quién falta y las molestias.")}</section></div>`;
  sem.sort((a,b)=>b.s.lvl-a.s.lvl||a.j.nombre.localeCompare(b.j.nombre));
  h+=`<section class="sec"><h3>Semáforo por jugador</h3><div class="list">${sem.map(({j,s})=>`<a class="li" href="#jugador-${j.id}" style="text-decoration:none"><span class="light l${s.lvl}" aria-label="${["Sin datos","Verde","Amarillo","Rojo"][s.lvl+1]}"></span>${avatar(j,"sm")}<div class="meta"><span class="nm">${esc(shortName(j.nombre))}</span><span class="sub">${s.lvl<0?"Sin datos de carga ni bienestar":s.reasons.length?esc(s.reasons.join(" · ")):"Sin alertas"}</span></div><div class="end"><span class="sub">ACWR</span><b class="num">${s.acwr!=null?fmtR(s.acwr):"–"}</b></div><div class="end" style="min-width:58px"><span class="sub">Bienestar</span><b class="num">${s.bien!=null?Math.round(s.bien):"–"}</b></div></a>`).join("")}</div></section>`;
  return h;
}

/* ============ Etapa 3 · Mapa de asistencia ============ */
function vAsistencia(){
  let h=`${subnav(SUBS,"asistencia")}<h2>Asistencia</h2>${groupChips()}`;
  if(!S.sesiones.length)return h+`<section class="sec">${pendingBox("Pendiente","Aún no hay sesiones registradas.",btnLink("#registrar","Registrar asistencia",true))}</section>`;
  const rng=S.asisRng||"4s";
  h+=`<div class="chips">${[["4s","Últimas 4 semanas"],["todo","Toda la temporada"]].map(([k,t])=>`<button class="fchip" data-act="t3-rng" data-v="${k}" aria-pressed="${rng===k}">${t}</button>`).join("")}</div>`;
  const lim=today0();lim.setDate(lim.getDate()-28);
  const act=activePl(),ids=new Set(act.map(j=>j.id));
  const ses=S.sesiones.filter(s=>(rng==="todo"||s.fecha>=lim)&&ids.has(s.jid));
  if(!ses.length)return h+`<section class="sec"><p class="empty">No hay sesiones en este periodo.</p></section>`;
  const cols={};ses.forEach(s=>{const k=dKey(s.fecha)+"|"+s.tipo;cols[k]=cols[k]||{f:s.fecha,t:s.tipo,rows:{}};cols[k].rows[s.jid]=s.asis});
  const C=Object.values(cols).sort((a,b)=>a.f-b.f||a.t.localeCompare(b.t));
  const thr=(S.config.asisMin||75)/100;
  const P=act.map(j=>{const rr=ses.filter(s=>s.jid===j.id);return {j,p:asisPct(rr)}}).sort((a,b)=>(a.p??2)-(b.p??2)||a.j.nombre.localeCompare(b.j.nombre));
  const tp=asisPct(ses),low=P.filter(x=>x.p!=null&&x.p<thr);
  h+=`<section class="sec"><div class="kpis"><div class="kpi"><b>${pct(tp)}</b><span>Asistencia del grupo</span></div><div class="kpi"><b>${C.length}</b><span>Sesiones</span></div><div class="kpi"><b style="color:${low.length?"var(--danger)":"var(--ok)"}">${low.length}</b><span>Bajo ${Math.round(thr*100)}%</span></div></div></section>`;
  const cpct=c=>{const v=Object.values(c.rows).filter(a=>a==="Presente"||a==="Ausente");return v.length?v.filter(a=>a==="Presente").length/v.length:null};
  h+=`<section class="sec"><div class="sec-h"><h3>Mapa por jugador</h3><span class="hint">Los que menos asisten, arriba</span></div>
   <div class="legend">${["Presente","Ausente","Justificado","Lesionado"].map(a=>`<span><i class="a-${a}"></i>${a}</span>`).join("")}<span><i style="background:var(--surface-2);border:1px solid var(--border)"></i>Sin registro</span></div>
   <div class="tw"><table class="heat"><thead><tr><th class="hn"></th>${C.map(c=>`<th title="${esc(c.t)}"><span>${esc(dShort(c.f))}</span></th>`).join("")}<th class="hp">%</th></tr></thead><tbody>
   <tr><td class="nm hint">Grupo</td>${C.map(c=>{const p=cpct(c);return `<td class="tp">${p==null?"":Math.round(p*100)}</td>`}).join("")}<td></td></tr>
   ${P.map(x=>`<tr><td class="nm"><a href="#jugador-${x.j.id}">${esc(shortName(x.j.nombre))}</a></td>${C.map(c=>{const a=c.rows[x.j.id];return `<td><i class="${a?"a-"+(["Presente","Ausente","Justificado","Lesionado"].includes(a)?a:"Otro"):""}" title="${esc(dShort(c.f)+" · "+c.t+" · "+(a||"sin registro"))}"></i></td>`}).join("")}<td class="pc" style="color:${x.p!=null&&x.p<thr?"var(--danger)":"inherit"}">${x.p==null?"–":Math.round(x.p*100)+"%"}</td></tr>`).join("")}
   </tbody></table></div><p class="hint">El porcentaje cuenta presentes sobre presentes más ausentes; justificados y lesionados no restan.</p></section>`;
  return h;
}

/* ============ Etapa 3 · Tests físicos ============ */
function vTests(){
  let h=`${subnav(SUBS,"tests")}<h2>Tests físicos</h2>`;
  const tp=testsPresent();
  if(!tp.length)return h+`<section class="sec">${pendingBox("Pendiente","Aún no hay tests registrados. Cuando tomes el primero verás el ranking del equipo, el progreso de T1 a T4 y el porcentaje de mejora.",btnLink("#reg-test","Registrar un test",true))}</section>`;
  if(!tp.includes(S.testSel))S.testSel=tp[0];const test=S.testSel,m=testMeta(test);
  h+=`<div class="chips">${tp.map(t=>`<button class="fchip" data-act="t3-test" data-v="${esc(t)}" aria-pressed="${t===test}">${esc(t)}</button>`).join("")}</div>`;
  const tomas=tomasOf(test),lt=tomas[tomas.length-1],rk=rankFor(test,lt);const avg=rk.length?rk.reduce((a,b)=>a+b.v,0)/rk.length:null;
  h+=`<section class="sec"><div class="sec-h"><h3>${esc(test)}</h3><span class="hint">${esc(m.u==="s"&&rk.some(x=>x.v>=60)?"min:s":m.u)} · mejor si es ${esc(String(m.mejor||"").toLowerCase())}</span></div>
   <div class="kpis"><div class="kpi"><b>${rk.length}</b><span>Evaluados en ${esc(lt)}</span></div><div class="kpi"><b>${fmtV(avg,m.u)}</b><span>Media del equipo</span></div><div class="kpi"><b>${rk.length?fmtV(rk[0].v,m.u):"–"}</b><span>Mejor marca</span></div></div>
   ${tomas.length>1?`<span class="hint">Media del equipo por toma</span>`+colBars(tomas.map(t=>{const r=rankFor(test,t);const a=r.length?r.reduce((x,y)=>x+y.v,0)/r.length:0;return {x:t,v:a,t:fmtV(a,m.u),s:r.length+" jug."}}),{aria:"Media del equipo por toma",h:150}):""}</section>`;
  const vs=rk.map(x=>x.v),mn=Math.min(...vs),mx=Math.max(...vs);
  h+=`<div class="cols"><section class="sec"><h3>Ranking · ${esc(lt)}</h3><div class="list">${rk.map((x,i)=>`<a class="hbar" href="#jugador-${x.j.id}" style="text-decoration:none;color:inherit"><div class="lb"><span>${i+1}. ${esc(shortName(x.j.nombre))} <span class="hint ab">${esc(POS_AB[x.j.pos1]||"")}</span></span><span class="num">${esc(fmtT(x.v,m.u))}</span></div><div class="tr"><i style="width:${barW(x.v,mn,mx,m.mejor)}%;background:${i<3?"var(--accent)":"var(--sky)"}"></i></div></a>`).join("")}</div></section>`;
  const rows=S.jug.map(j=>{const tv=tomaVals(j.id,test);const vals=tomas.map(t=>tv[t]?tv[t].res:null);const fv=vals.find(v=>v!=null),lv=[...vals].reverse().find(v=>v!=null);return {j,vals,imp:vals.filter(v=>v!=null).length>1?improve(test,fv,lv):null}}).filter(r=>r.vals.some(v=>v!=null)).sort((a,b)=>(b.imp??-9)-(a.imp??-9));
  h+=`<section class="sec"><h3>Progreso por toma</h3><div class="tw"><table><thead><tr><th>Jugador</th>${tomas.map(t=>`<th>${esc(t)}</th>`).join("")}<th>Mejora</th></tr></thead><tbody>${rows.map(r=>`<tr><td class="n"><a href="#jugador-${r.j.id}" style="color:inherit;font-weight:600">${esc(shortName(r.j.nombre))}</a></td>${r.vals.map(v=>`<td>${fmtV(v,m.u)}</td>`).join("")}<td style="font-weight:700;color:${r.imp==null?"var(--muted)":r.imp>=0?"var(--ok)":"var(--danger)"}">${r.imp==null?"–":(r.imp>=0?"+":"")+Math.round(r.imp*100)+"%"}</td></tr>`).join("")}</tbody></table></div>
   <p class="hint">La mejora compara la primera y la última toma de cada jugador. En pruebas de tiempo, bajar es mejorar.</p></section></div>`;
  return h;
}

/* ============ Etapa 3 · Evaluación formativa ============ */
function vEvaluacion(){
  let h=`${subnav(SUBS,"evaluacion")}<h2>Evaluación formativa</h2>${groupChips()}`;
  const act=activePl(),L=act.map(j=>({j,e:lastEval(j.id)})),done=L.filter(x=>x.e),miss=L.filter(x=>!x.e);
  if(!done.length)return h+`<section class="sec">${pendingBox("Pendiente","Aún no hay evaluaciones. Cada una alimenta el puntaje de convocatoria (evaluación deportiva y actitud) y el radar de la ficha del jugador.",btnLink("#reg-eval","Evaluar jugadores",true))}</section>`;
  const avg=teamEvalAvg();
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Media del equipo</h3><span class="hint">Última evaluación de cada jugador</span></div>${radar([{v:avg,c:"var(--accent)"}],AREAS.map(a=>a[1]),5)}<div class="kpis">${AREAS.map(([k,t],i)=>`<div class="kpi"><b>${fmt1(avg[i])}</b><span>${t}</span></div>`).join("")}</div></section>
   <section class="sec"><div class="sec-h"><h3>Sin evaluar</h3><span class="hint">${miss.length} de ${act.length}</span></div>${miss.length?`<div class="row">${miss.map(x=>`<span class="chip ina" style="text-transform:none;font-size:.8rem">${esc(shortName(x.j.nombre))}</span>`).join("")}</div>`:'<p class="empty">Toda la plantilla activa tiene al menos una evaluación.</p>'}${btnLink("#reg-eval","Evaluar jugadores")}</section></div>`;
  done.sort((a,b)=>(b.e.gen||0)-(a.e.gen||0));
  h+=`<section class="sec"><h3>Última evaluación por jugador</h3><div class="tw"><table><thead><tr><th>Jugador</th><th>Téc.</th><th>Tác.</th><th>Fís.</th><th>Psi.</th><th>Prom.</th><th>Fecha</th></tr></thead><tbody>${done.map(x=>`<tr><td class="n"><a href="#jugador-${x.j.id}" style="color:inherit;font-weight:600">${esc(shortName(x.j.nombre))}</a></td>${AREAS.map(([k])=>`<td>${fmt1(x.e[k])}</td>`).join("")}<td><b>${fmt1(x.e.gen)}</b></td><td>${esc(dShort(x.e.f))}</td></tr>`).join("")}</tbody></table></div></section>`;
  return h;
}

/* ============ Etapa 3 · Ficha y comparador ============ */
function fichaE3(j){
  const s=semaforo(j),p=S.panel[j.id]||{};
  const W=weekly(loadsOf(j.id),8),anyL=W.some(w=>w.sum>0);
  const B=S.bien.filter(b=>b.jid===j.id&&b.idx!=null).sort((a,b)=>a.f-b.f).slice(-10),lb=B[B.length-1];
  let h=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Carga</h3>${s.lvl>=0?`<span class="row" style="gap:6px"><span class="light l${s.lvl}"></span><span class="hint">${s.reasons.length?esc(s.reasons.join(" · ")):"Sin alertas"}</span></span>`:""}</div>
   <div class="kpis"><div class="kpi"><b>${fmtR(numDec(p.c7))}</b><span>Carga 7 días</span></div><div class="kpi"><b>${fmtR(numDec(p.c28))}</b><span>Media semanal 28 d</span></div><div class="kpi"><b>${s.acwr!=null?fmtR(s.acwr):"–"}</b><span>ACWR</span></div></div>
   ${anyL?`<span class="hint">sRPE por semana (sesiones + partidos)</span>`+colBars(W.map(w=>({x:dShort(w.d),v:Math.round(w.sum),t:w.sum?Math.round(w.sum):""})),{aria:"Carga semanal del jugador",h:150}):pendingBox("Pendiente","Aparece cuando registras sesiones con duración y RPE.")}</section>
   <section class="sec"><h3>Bienestar</h3>${B.length?lineChart(B.map(b=>({x:dShort(b.f),y:Math.round(b.idx),c:b.idx<(S.config.bienBajo||60)?"var(--danger)":"var(--accent)"})),{max:100,aria:"Índice de bienestar por semana"})
     +`<div class="facts"><div class="fact"><span>Sueño</span><b>${esc(lb.horas||"–")}</b></div><div class="fact"><span>Ánimo</span><b>${fmt1(lb.animo)}</b></div><div class="fact"><span>Exigencia</span><b>${fmt1(lb.exig)}</b></div></div>${lb.mol&&!/^ninguna$/i.test(lb.mol)?`<p class="hint">Molestias: ${esc(lb.mol)}</p>`:""}${lb.com?`<p class="hint">“${esc(lb.com)}”</p>`:""}`
     :pendingBox("Pendiente","Aún no hay respuestas de este jugador en el formulario semanal.")}</section></div>`;
  const e=lastEval(j.id),avg=teamEvalAvg(),n=S.evals.filter(x=>x.jid===j.id).length;
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Evaluación formativa</h3>${e?`<span class="hint">${esc(dLong(e.f))}${e.per?" · "+esc(e.per):""}</span>`:""}</div>${e?`
     <div class="kpis">${AREAS.map(([k,t])=>`<div class="kpi"><b>${fmt1(e[k])}</b><span>${t}</span></div>`).join("")}</div>
     ${[["Fortalezas","fort"],["A mejorar","mej"],["Objetivo corto plazo","oc"],["Objetivo mediano plazo","om"],["Objetivo largo plazo","ol"]].filter(([,k])=>e[k]).map(([t,k])=>`<div><span class="hint">${t}</span><p class="txt">${esc(e[k])}</p></div>`).join("")}
     <p class="hint">${n} ${n===1?"evaluación":"evaluaciones"} en total.</p>`:pendingBox("Pendiente","Este jugador aún no tiene evaluación formativa.",btnLink("#reg-eval","Evaluarlo"))}</section>`;
  const tl=testsPresent().filter(t=>S.tests.some(x=>x.jid===j.id&&x.test===t));
  h+=`<section class="sec"><h3>Tests físicos</h3>${tl.length?`<div class="tw"><table><thead><tr><th>Test</th><th>Primera</th><th>Última</th><th>Mejora</th><th>Puesto</th></tr></thead><tbody>${tl.map(t=>{const m=testMeta(t),tv=tomaVals(j.id,t),tom=tomasOf(t).filter(x=>tv[x]);const f=tv[tom[0]].res,l=tv[tom[tom.length-1]].res,imp=tom.length>1?improve(t,f,l):null;const lt=tomasOf(t).pop(),rk=rankFor(t,lt),pos=rk.findIndex(x=>x.j.id===j.id);
     return `<tr><td class="n">${esc(t)} <span class="hint">${esc(m.u)}</span></td><td>${fmtV(f,m.u)} <span class="hint">${esc(tom[0])}</span></td><td>${tom.length>1?fmtR(l)+` <span class="hint">${esc(tom[tom.length-1])}</span>`:"–"}</td><td style="font-weight:700;color:${imp==null?"var(--muted)":imp>=0?"var(--ok)":"var(--danger)"}">${imp==null?"–":(imp>=0?"+":"")+Math.round(imp*100)+"%"}</td><td>${pos>=0?(pos+1)+" de "+rk.length:"–"}</td></tr>`}).join("")}</tbody></table></div><p class="hint">Puesto en el equipo en la última toma de cada test.</p>`
     :pendingBox("Pendiente","Este jugador aún no tiene tests registrados.")}</section></div>`;
  return h;
}
function cmpE3(P){
  const withE=P.map((p,i)=>({p,i,e:lastEval(p.j.id)})).filter(x=>x.e);
  let h=cmpRadar(P)+`<div class="cols"><section class="sec" hidden><h3>Evaluación formativa</h3>${withE.length?`<div class="legend">${withE.map(x=>`<span><i style="background:${CMP_COL[x.i]}"></i>${esc(shortName(x.p.j.nombre))}</span>`).join("")}</div>${radar(withE.map(x=>({v:AREAS.map(a=>x.e[a[0]]),c:CMP_COL[x.i]})),AREAS.map(a=>a[1]),5)}${withE.length<P.length?`<p class="hint">Sin evaluación: ${P.filter(p=>!lastEval(p.j.id)).map(p=>esc(shortName(p.j.nombre))).join(", ")}.</p>`:""}`:pendingBox("Pendiente","Ninguno de estos jugadores tiene evaluación formativa todavía.")}</section>`;
  const tl=testsPresent().filter(t=>P.some(p=>S.tests.some(x=>x.jid===p.j.id&&x.test===t)));
  h+=`<section class="sec"><h3>Tests físicos</h3>${tl.length?`<div class="cmpgrid" style="grid-template-columns:minmax(90px,1.2fr) repeat(${P.length},minmax(0,1fr))"><span></span>${P.map((p,i)=>`<span class="k" style="text-align:center;color:${CMP_COL[i]}">${esc(shortName(p.j.nombre).split(" ")[0])}</span>`).join("")}
     ${tl.map(t=>{const m=testMeta(t);const v=P.map(p=>{const tv=tomaVals(p.j.id,t);const tom=tomasOf(t).filter(x=>tv[x]);return tom.length?tv[tom[tom.length-1]].res:null});const ok=v.filter(x=>x!=null);const best=ok.length>1?(m.mejor==="Menor"?Math.min(...ok):Math.max(...ok)):null;
       return `<span class="k">${esc(t)}<br><span style="text-transform:none;font-weight:500">${esc(m.u)}</span></span>${v.map(x=>`<span class="v ${x!=null&&x===best&&ok.filter(y=>y===best).length<ok.length?"best":""}">${fmtV(x,m.u)}</span>`).join("")}`}).join("")}</div><p class="hint">Última toma de cada jugador.</p>`:pendingBox("Pendiente","Ninguno tiene tests registrados todavía.")}</section></div>`;
  return h;
}

/* ============ Etapa 3 · Registrar test ============ */
function vRegTest(){
  if(!S.rt)S.rt=LS.get("rt",null)||{fecha:todayISO(),toma:S.tomas[0]||"T1",test:"",ev:S.evaluadores[0]||"DT",vals:{},obs:{},confirm:false};
  const f=S.rt,m=f.test?testMeta(f.test):null,pl=activePl();
  const ex={};if(f.test)S.tests.filter(t=>t.test===f.test&&t.toma===f.toma).forEach(t=>ex[t.jid]=t.res);
  let h=`${subnav(SUBR,"reg-test")}<h2>Registrar test</h2><section class="sec"><div class="fgrid">
   <label class="f" style="grid-column:1/-1">Test<select id="rt-test"><option value="">Elige el test</option>${S.testCat.map(t=>`<option ${t.n===f.test?"selected":""}>${esc(t.n)}</option>`).join("")}</select></label>
   <label class="f">Toma<select id="rt-toma">${S.tomas.map(t=>`<option ${t===f.toma?"selected":""}>${esc(t)}</option>`).join("")}</select></label>
   <label class="f">Fecha<input type="date" id="rt-fecha" value="${esc(f.fecha)}"></label>
   <label class="f" style="grid-column:1/-1">Evaluador<select id="rt-ev">${S.evaluadores.map(t=>`<option ${t===f.ev?"selected":""}>${esc(t)}</option>`).join("")}</select></label></div>
   ${m?`<p class="hint">Resultado en <b>${esc(m.u)}</b>; mejor si es ${esc(String(m.mejor).toLowerCase())}. ${m.u==="s"?"Para minutos y segundos separa con espacio o guion: 4 35 o 4-35 (también 4:35). O escribe solo segundos (275). ":""}Usa coma o punto para decimales. Deja vacío a quien no hizo el test. Lo que anotes queda guardado en el teléfono hasta que lo envíes.</p>`:""}</section>`;
  if(!f.test)return h+'<section class="sec"><p class="empty">Elige el test para ver la lista de jugadores.</p></section>';
  const n=pl.filter(j=>ex[j.id]==null&&String(f.vals[j.id]||"").trim()!=="").length;
  h+=`<section class="sec"><div class="sec-h"><h3>Resultados</h3><span class="hint" id="rt-count">${n} anotados</span></div><div class="list">${pl.map(j=>{const done=ex[j.id]!=null;return `<div class="li" style="min-height:52px">${avatar(j,"sm")}<div class="meta"><span class="nm">${j.dorsal?`<span class="ab">${esc(j.dorsal)}</span> · `:""}${esc(shortName(j.nombre))}</span>${done?`<span class="sub">Ya registrado: ${esc(fmtT(ex[j.id],m.u))}</span>`:dispChip(j)?`<span>${dispChip(j)}</span>`:""}</div>${done?"":`<input class="resin" type="text" inputmode="decimal" id="tv-${j.id}" data-tv="${j.id}" value="${esc(f.vals[j.id]||"")}" placeholder="${esc(m.u)}" aria-label="Resultado de ${esc(j.nombre)}" autocomplete="off">`}</div>`}).join("")}</div></section>`;
  h+=f.confirm?`<section class="sec" style="border:2px solid var(--accent)"><h3>Confirmar</h3><p style="margin:0">Se agregarán <b>${n}</b> resultados de ${esc(f.test)} (${esc(f.toma)}, ${esc(dLong(isoToDate(f.fecha)))}) a la pestaña Tests_Fisicos.</p><div class="fgrid"><button class="btn" data-act="t3-back">Volver</button><button class="btn pri" data-act="t3-rtsave" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar en la hoja"}</button></div></section>`
    :`<div class="fgrid"><button class="btn" data-act="t3-rtreset">Empezar de nuevo</button><button class="btn pri" id="rt-rev" data-act="t3-rtrev" ${n?"":"disabled"}>Revisar y guardar</button></div>`;
  return h;
}
function rtRows(){const f=S.rt,pl=activePl();const ex=new Set(S.tests.filter(t=>t.test===f.test&&t.toma===f.toma).map(t=>t.jid));const rows=[],bad=[];
  pl.forEach(j=>{if(ex.has(j.id))return;const raw=String(f.vals[j.id]||"").trim();if(!raw)return;const v=parseRes(raw);if(v==null||v<0)bad.push(shortName(j.nombre));else rows.push({j,v})});return {rows,bad}}
async function writeTests(f,rows){
  const fresh=await readRange("Tests_Fisicos!A2:I800");const done=new Set(fresh.filter(x=>x&&x[2]).map(x=>String(x[2]).slice(0,3)+"|"+x[4]+"|"+x[1]));
  rows=rows.filter(r=>!done.has(r.j.id+"|"+f.test+"|"+f.toma));if(!rows.length)throw {code:"dup",message:"Esos resultados ya estaban en la hoja."};
  const r0=lastRow(fresh),r1=r0+rows.length-1,d=dateFormula(f.fecha);
  await gs("update_values",{range:`Tests_Fisicos!A${r0}:H${r1}`,values:rows.map(r=>[d,f.toma,r.j.label,null,f.test,r.v,null,f.ev])});
}

/* ============ Etapa 3 · Registrar evaluación ============ */
function blankEval(keep){return Object.assign({fecha:todayISO(),per:defaultPer(),jid:"",tec:null,tac:null,fis:null,psi:null,fort:"",mej:"",oc:"",om:"",ol:"",obs:"",confirm:false},keep||{})}
function vRegEval(){
  if(!S.re)S.re=LS.get("re",null)||blankEval();
  const f=S.re,pl=activePl(),doneIds=new Set(S.evals.filter(e=>e.per===f.per).map(e=>e.jid)),pers=[...new Set(S.evals.map(e=>e.per).filter(Boolean))];
  const prev=f.jid?lastEval(f.jid):null,j=jById(f.jid);
  let h=`${subnav(SUBR,"reg-eval")}<h2>Evaluación formativa</h2><section class="sec"><div class="fgrid">
   <label class="f">Fecha<input type="date" id="re-fecha" value="${esc(f.fecha)}"></label>
   <label class="f">Periodo<input type="text" id="re-per" list="re-pers" value="${esc(f.per)}"><datalist id="re-pers">${pers.map(p=>`<option value="${esc(p)}"></option>`).join("")}</datalist></label>
   <label class="f" style="grid-column:1/-1">Jugador<select id="re-jid"><option value="">Elige un jugador</option>${pl.map(x=>`<option value="${x.id}" ${x.id===f.jid?"selected":""}>${doneIds.has(x.id)?"✓ ":""}${esc(x.nombre)}${x.dorsal?" · "+esc(x.dorsal):""}</option>`).join("")}</select></label></div>
   <p class="hint">${pl.filter(x=>doneIds.has(x.id)).length} de ${pl.length} evaluados en “${esc(f.per)}”. La marca ✓ indica que ya tiene evaluación en este periodo.</p></section>`;
  if(!f.jid)return h;
  h+=`<section class="sec"><div class="sec-h"><h3>${esc(j?j.nombre:"")}</h3>${prev?`<span class="hint">Anterior (${esc(dShort(prev.f))}): ${AREAS.map(([k,t])=>t.slice(0,3)+" "+fmt1(prev[k])).join(" · ")}</span>`:'<span class="hint">Primera evaluación</span>'}</div>
   ${AREAS.map(([k,t])=>`<div><span class="hint" style="font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:.76rem">${t}${k==="psi"?" / actitud":""}</span><div class="seg5" role="group" aria-label="${t}">${[1,2,3,4,5].map(v=>`<button data-act="t3-area" data-k="${k}" data-v="${v}" aria-pressed="${f[k]===v}">${v}</button>`).join("")}</div></div>`).join("")}
   <p class="hint">1 muy por debajo · 3 en lo esperado para su edad · 5 sobresaliente.</p>
   <div class="fgrid">
   <label class="f" style="grid-column:1/-1">Fortalezas<textarea id="re-fort" rows="2">${esc(f.fort)}</textarea></label>
   <label class="f" style="grid-column:1/-1">Aspectos a mejorar<textarea id="re-mej" rows="2">${esc(f.mej)}</textarea></label>
   <label class="f" style="grid-column:1/-1">Objetivo corto plazo<input type="text" id="re-oc" value="${esc(f.oc)}"></label>
   <label class="f" style="grid-column:1/-1">Objetivo mediano plazo<input type="text" id="re-om" value="${esc(f.om)}"></label>
   <label class="f" style="grid-column:1/-1">Objetivo largo plazo<input type="text" id="re-ol" value="${esc(f.ol)}"></label>
   <label class="f" style="grid-column:1/-1">Observaciones<input type="text" id="re-obs" value="${esc(f.obs)}"></label></div></section>`;
  h+=f.confirm?`<section class="sec" style="border:2px solid var(--accent)"><h3>Confirmar</h3><p style="margin:0">${esc(j?j.nombre:"")} · ${esc(dLong(isoToDate(f.fecha)))} · ${esc(f.per)}: ${AREAS.map(([k,t])=>t+" "+(f[k]||"–")).join(", ")}.</p><div class="fgrid"><button class="btn" data-act="t3-back">Volver</button><button class="btn pri" data-act="t3-resave" ${S.busy?"disabled":""}>${S.busy?"Guardando…":"Guardar"}</button><button class="btn pri" data-act="t3-resave" data-next="1" style="grid-column:1/-1" ${S.busy?"disabled":""}>Guardar y seguir con el siguiente</button></div></section>`
    :`<button class="btn pri wide" data-act="t3-rerev">Revisar y guardar</button>`;
  return h;
}
async function writeEval(f){
  const fresh=await readRange("Eval_Formativa!A2:Q500");const k=dKey(isoToDate(f.fecha));
  if(fresh.some(x=>x&&String(x[2]||"").slice(0,3)===f.jid&&dKey(pDate(x[0]))===k))throw {code:"dup",message:"Este jugador ya tiene una evaluación con esa fecha."};
  const r=lastRow(fresh),j=jById(f.jid),v=x=>x==null?"":x;
  const txt=!!(f.fort||f.mej||f.oc||f.om||f.ol||f.obs),T=x=>txt?x:null;
  await gs("update_values",{range:`Eval_Formativa!A${r}:Q${r}`,values:[[dateFormula(f.fecha),f.per,j.label,null,v(f.tec),v(f.tac),v(f.fis),v(f.psi),null,null,null,T(f.fort),T(f.mej),T(f.oc),T(f.om),T(f.ol),T(f.obs)]]});
}

/* ============ Etapa 3 · Eventos ============ */
document.addEventListener("input",ev=>{const t=ev.target;
  if(t.dataset.tv&&S.rt){S.rt.vals[t.dataset.tv]=t.value;S.rt.confirm=false;LS.set("rt",S.rt);const n=rtRows().rows.length;const c=document.getElementById("rt-count");if(c)c.textContent=n+" anotados";const b=document.getElementById("rt-rev");if(b)b.disabled=!n;return}
  const rtm={"rt-fecha":"fecha"};if(S.rt&&rtm[t.id]){S.rt.fecha=t.value;S.rt.confirm=false;LS.set("rt",S.rt);return}
  const rem={"re-fecha":"fecha","re-per":"per","re-fort":"fort","re-mej":"mej","re-oc":"oc","re-om":"om","re-ol":"ol","re-obs":"obs"};
  if(S.re&&rem[t.id]){S.re[rem[t.id]]=t.value;S.re.confirm=false;LS.set("re",S.re);if(t.id==="re-per"&&ev.inputType===undefined)render();return}
});
document.addEventListener("change",ev=>{const t=ev.target;
  if(S.rt&&["rt-test","rt-toma","rt-ev"].includes(t.id)){S.rt[{"rt-test":"test","rt-toma":"toma","rt-ev":"ev"}[t.id]]=t.value;S.rt.confirm=false;LS.set("rt",S.rt);render();return}
  if(S.re&&t.id==="re-jid"){const keep={fecha:S.re.fecha,per:S.re.per};S.re=blankEval(keep);S.re.jid=t.value;LS.set("re",S.re);render();return}
  if(S.re&&t.id==="re-per"){render()}
});
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-act]");if(!t)return;const a=t.dataset.act;if(!/^t3-/.test(a))return;
  if(a==="t3-rng"){S.asisRng=t.dataset.v;render();return}
  if(a==="t3-test"){S.testSel=t.dataset.v;render();return}
  if(a==="t3-area"){const k=t.dataset.k,v=Number(t.dataset.v);S.re[k]=S.re[k]===v?null:v;S.re.confirm=false;LS.set("re",S.re);render();return}
  if(a==="t3-back"){if(S.rt)S.rt.confirm=false;if(S.re)S.re.confirm=false;render();return}
  if(a==="t3-rtreset"){S.rt={fecha:todayISO(),toma:S.rt.toma,test:S.rt.test,ev:S.rt.ev,vals:{},obs:{},confirm:false};LS.set("rt",S.rt);render();return}
  if(a==="t3-rtrev"){const {rows,bad}=rtRows();if(!S.rt.fecha){toast("Elige la fecha.");return}if(bad.length){toast("Revisa el resultado de "+bad.join(", ")+".");return}if(!rows.length){toast("No hay resultados nuevos para guardar.");return}S.rt.confirm=true;render();setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),30);return}
  if(a==="t3-rtsave"){const f=Object.assign({},S.rt),rows=rtRows().rows;runWrite({k:"tests",a:[f,rows]},`Guardados ${rows.length} resultados de ${f.test}.`,()=>{S.rt={fecha:f.fecha,toma:f.toma,test:f.test,ev:f.ev,vals:{},obs:{},confirm:false};LS.set("rt",S.rt);S.testSel=f.test});return}
  if(a==="t3-rerev"){const f=S.re;if(!f.fecha||!f.jid){toast("Elige fecha y jugador.");return}if(!f.per.trim()){toast("Escribe el periodo.");return}if(AREAS.every(([k])=>f[k]==null)){toast("Califica al menos un área.");return}f.confirm=true;render();setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),30);return}
  if(a==="t3-resave"){const f=Object.assign({},S.re),next=!!t.dataset.next;runWrite({k:"eval",a:[f]},"Evaluación guardada.",()=>{
      const keep={fecha:f.fecha,per:f.per};S.re=blankEval(keep);
      if(next){const pl=activePl(),done=new Set(S.evals.filter(e=>e.per===f.per).map(e=>e.jid));done.add(f.jid);const i=pl.findIndex(x=>x.id===f.jid);const nx=[...pl.slice(i+1),...pl.slice(0,i)].find(x=>!done.has(x.id));if(nx)S.re.jid=nx.id;else toast("Evaluación guardada. Ya evaluaste a todos en este periodo.")}
      LS.set("re",S.re);window.scrollTo(0,0)});return}
});

/* ============ Fotos y escudos desde Drive ============ */
const CREST_STOP=new Set(["FC","F","C","CLUB","CD","DEPORTIVO","ESCUELA","DE","DEL","LA","LAS","LOS","EL"]);
function crestKey(n){return String(n||"").replace(/\.(png|jpe?g|webp|gif)$/i,"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().split(/[^A-Z0-9]+/).filter(w=>w&&!CREST_STOP.has(w)).join(" ")}
const ESC_STOP=new Set(["FC","F","C","CLUB","CD","DEPORTIVO","ESCUELA","CORPORACION","ASOCIACION"]);
function escKey(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim()}
function escCore(s){return escKey(s).split(" ").filter(w=>w&&!ESC_STOP.has(w)).join(" ")}
function escudoId(name){const E=CRESTS||{};const k=escKey(name);if(!k)return null;const L=E.lista||[];const al=(E.alias||{})[k];if(al==="none")return null;if(al&&L.some(e=>e.id===al))return al;
  let f=L.filter(e=>escKey(e.nombre)===k);if(f.length===1)return f[0].id;const c=escCore(name);if(!c)return null;f=L.filter(e=>escCore(e.nombre)===c);return f.length===1?f[0].id:null}
function crestUrl(name){const id=escudoId(name);return id?window.foto(id):null}
function aplicarImagenes(m){if(!m)return;FOTOS=m.fotos||{};LOGO=m.logo||"";CLUB.dtFoto=m.dt||"";CRESTS=m.escudos||{lista:[],alias:{}};const c=document.getElementById("crest");if(c)c.innerHTML=ourCrest(38)}
async function loadDriveImages(force){
  if(S._imgBusy||!window.cargarImagenes)return;S._imgBusy=true;S.imgStatus=force?"Buscando fotos y escudos…":"";if(force)render();
  try{aplicarImagenes(await window.cargarImagenes(force));S.imgStatus=""}
  catch(e){S.imgStatus=e&&e.code==="server_unavailable"?"Sin señal: se usan las fotos guardadas en el teléfono.":"No se pudieron traer las fotos y escudos de Partido en vivo."}
  S._imgBusy=false;render();
}
let fotosT=null;
window.__fotosNuevas=()=>{clearTimeout(fotosT);fotosT=setTimeout(()=>{const a=document.activeElement;if(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)){window.__fotosNuevas();return}const c=document.getElementById("crest");if(c)c.innerHTML=ourCrest(38);render()},250)};
function imgCard(){
  const act=S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado));const sin=act.filter(j=>!FOTOS[j.id]);
  const riv=[...new Set(S.partidos.map(p=>p.rival))];const rs=riv.filter(r=>!escudoId(r));
  const acc=window.__acceso&&window.__acceso();
  return `<section class="sec"><div class="sec-h"><h3>Fotos y escudos</h3><span class="hint">${act.length-sin.length}/${act.length} fotos · ${riv.length-rs.length}/${riv.length} escudos</span></div>
   ${S.imgStatus?`<p class="hint">${esc(S.imgStatus)}</p>`:""}
   <p class="hint">Son las mismas de Partido en vivo. Para agregar o cambiar una, impórtala allí (Ajustes → Fotos → Importar desde Drive, o Escudos) y luego toca Volver a cargar.</p>
   ${sin.length?`<p class="hint">Sin foto: ${sin.map(j=>esc(shortName(j.nombre))+" ("+j.id+")").join(", ")}.</p>`:""}
   ${rs.length?`<p class="hint">Sin escudo: ${rs.map(esc).join(", ")}.</p>`:""}
   <button class="btn sm" data-act="img-reload" ${S._imgBusy?"disabled":""} style="align-self:flex-start">Volver a cargar</button></section>
   <section class="sec"><h3>Acceso</h3><p class="hint">Conectado al puente de Partido en vivo como DT${acc&&acc.desde==="pev"?" (con la sesión que ya tenías en Partido en vivo)":""}.</p><button class="btn sm" data-act="logout" style="align-self:flex-start">Cerrar sesión en este teléfono</button></section>`;
}
document.addEventListener("click",ev=>{const t=ev.target.closest('[data-act="img-reload"]');if(t)loadDriveImages(true);if(ev.target.closest('[data-act="logout"]')&&confirm("¿Cerrar sesión en este teléfono?"))window.cerrarSesion()});

/* ============ Perfil del jugador (radar) ============ */
const RMODES=[["integral","Integral"],["partidos","Partidos"],["fisico","Físico"],["formativo","Formativo"]];
const MIN_RADAR=90;
const POS_SCOPE={por:"los porteros",def:"los defensas",med:"los mediocampistas",del:"los delanteros y extremos"};
function pctRank(x,vals,lower){if(x==null)return null;const v=vals.filter(y=>y!=null&&isFinite(y));const n=v.length;if(n<2)return 50;const b=v.filter(y=>y<x).length,e=v.filter(y=>y===x).length;const p=Math.max(0,Math.min(100,(b+Math.max(0,e-1)/2)/(n-1)*100));return Math.round(lower?100-p:p)}
function grpOf(j){return posGroup(j&&j.pos1)||"med"}
function playedMs(ms){return ms.filter(m=>S.stats.some(s=>s.pt===m.id))}
function peerSet(j,ms){const g=grpOf(j);const all=S.jug.filter(x=>!/Inactiv/i.test(x.estado)).map(x=>({j:x,s:pStats(x.id,ms)})).filter(x=>x.s.min>=MIN_RADAR);
  let grp=all.filter(x=>grpOf(x.j)===g),scope=POS_SCOPE[g];if(grp.length<3&&g!=="por"){grp=all.filter(x=>grpOf(x.j)!=="por");scope="los jugadores de campo"}return {grp,scope,gk:g==="por"}}
function matchVals(s,nMs,gk){const m=s.min||0,p90=v=>m?v*90/m:null,av=nMs*(S.config.duracion||80);
  return gk?[{l:"Participación",v:av?m/av:null,f:x=>pct(x)},{l:"Titular",v:nMs?s.tit/nMs:null,f:()=>s.tit+"/"+nMs},{l:"Nota",v:s.nota,f:fmt1},{l:"Goles rec./90",v:p90(s.gr||0),f:fmtR,low:1},{l:"Penales atajados",v:s.pa||0,f:x=>String(x)},{l:"Disciplina",v:p90(s.am+2*s.ro),f:()=>s.am+" TA · "+s.ro+" TR",low:1}]
   :[{l:"Participación",v:av?m/av:null,f:x=>pct(x)},{l:"Titular",v:nMs?s.tit/nMs:null,f:()=>s.tit+"/"+nMs},{l:"Goles/90",v:p90(s.g),f:fmtR},{l:"Asist./90",v:p90(s.a),f:fmtR},{l:"Nota",v:s.nota,f:fmt1},{l:"Disciplina",v:p90(s.am+2*s.ro),f:()=>s.am+" TA · "+s.ro+" TR",low:1}]}
function profPartidos(j,ms){const nMs=playedMs(ms).length,s=pStats(j.id,ms),P=peerSet(j,ms);
  if(s.min<MIN_RADAR)return {ok:false,msg:`Necesita al menos ${MIN_RADAR} minutos en partidos para compararse (lleva ${s.min}').`};
  const mine=matchVals(s,nMs,P.gk),others=P.grp.map(x=>matchVals(x.s,nMs,P.gk));
  const axes=mine.map((a,i)=>({l:a.l,raw:a.v==null?"–":a.f(a.v),p:pctRank(a.v,others.map(o=>o[i].v),a.low)}));
  return {ok:true,axes,ref:axes.map(()=>50),scope:P.scope,n:P.grp.length,nMs,kind:"pct"}}
function latestTest(jid,test){const tv=tomaVals(jid,test),tom=tomasOf(test).filter(x=>tv[x]);return tom.length?tv[tom[tom.length-1]].res:null}
function profFisico(j){const tests=testsPresent().filter(t=>latestTest(j.id,t)!=null);
  if(tests.length<3)return {ok:false,msg:tests.length?`Tiene ${tests.length} ${tests.length===1?"test":"tests"}; el radar físico se arma con al menos 3.`:"Aún no tiene tests registrados."};
  const axes=tests.map(t=>{const m=testMeta(t),v=latestTest(j.id,t);return {l:t.replace(/^Velocidad /,"Vel. ").replace(/^Flexibilidad.*/,"Flexibilidad"),raw:fmtT(v,m.u),p:pctRank(v,S.jug.map(x=>latestTest(x.id,t)),m.mejor==="Menor")}});
  return {ok:true,axes,ref:axes.map(()=>50),scope:"el equipo",kind:"pct"}}
function profFormativo(j){const e=lastEval(j.id);if(!e)return {ok:false,msg:"Aún no tiene evaluación formativa."};const avg=teamEvalAvg();
  return {ok:true,axes:AREAS.map(([k,t])=>({l:t,raw:e[k]!=null?fmt1(e[k])+"/5":"–",p:e[k]!=null?e[k]/5*100:null})),ref:avg.map(v=>v!=null?v/5*100:0),scope:"el equipo",kind:"abs",date:e.f}}
function profIntegral(j,ms){const e=lastEval(j.id),pa=profPartidos(j,ms),fi=profFisico(j),ses=sessionsOf(j.id),as=asisPct(ses),avg=teamEvalAvg();
  const ev=k=>e&&e[k]!=null?e[k]/5*100:null,mean=a=>{const v=a.filter(x=>x!=null);return v.length?Math.round(v.reduce((x,y)=>x+y,0)/v.length):null};
  const fisP=fi.ok?mean(fi.axes.map(a=>a.p)):ev("fis");
  const teamAs=(()=>{const v=S.jug.map(x=>asisPct(sessionsOf(x.id))).filter(x=>x!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length*100:null})();
  const axes=[{l:"Técnico",p:ev("tec"),raw:e&&e.tec!=null?fmt1(e.tec)+"/5":"sin datos"},{l:"Táctico",p:ev("tac"),raw:e&&e.tac!=null?fmt1(e.tac)+"/5":"sin datos"},{l:"Físico",p:fisP,raw:fi.ok?"tests":e&&e.fis!=null?fmt1(e.fis)+"/5":"sin datos"},
    {l:"Rendimiento",p:pa.ok?mean(pa.axes.map(a=>a.p)):null,raw:pa.ok?"partidos":"sin datos"},{l:"Compromiso",p:as!=null?Math.round(as*100):null,raw:as!=null?pct(as)+" asist.":"sin datos"},{l:"Psicosocial",p:ev("psi"),raw:e&&e.psi!=null?fmt1(e.psi)+"/5":"sin datos"}];
  if(axes.every(a=>a.p==null))return {ok:false,msg:"Aún no hay datos para el perfil integral."};
  const ref=[avg[0]!=null?avg[0]/5*100:50,avg[1]!=null?avg[1]/5*100:50,50,50,teamAs!=null?teamAs:50,avg[3]!=null?avg[3]/5*100:50];
  return {ok:true,axes,ref,scope:"el equipo",kind:"mix",missing:axes.filter(a=>a.p==null).map(a=>a.l)}}
function profile(j,mode,ms){return mode==="partidos"?profPartidos(j,ms):mode==="fisico"?profFisico(j):mode==="formativo"?profFormativo(j):profIntegral(j,ms)}
function radarP(labels,series,opt){opt=opt||{};const W=360,H=310,cx=180,cy=158,R=96,n=labels.length;const pt=(i,v)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*R*v/100,cy+Math.sin(a)*R*v/100]};
  let g="";[25,50,75,100].forEach(k=>g+=`<polygon points="${labels.map((_,i)=>pt(i,k).join(",")).join(" ")}" fill="${k===100?"var(--surface-2)":"none"}" fill-opacity="${k===100?.5:0}" class="gl"/>`);
  labels.forEach((L,i)=>{const [x,y]=pt(i,100),[lx,ly]=pt(i,124);const anchor=Math.abs(lx-cx)<8?"middle":lx<cx?"end":"start";
    g+=`<line class="gl" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/><text x="${lx}" y="${ly-(L.sub?3:-4)}" text-anchor="${anchor}" style="font-weight:700;fill:${L.na?"var(--muted)":"var(--ink)"}">${esc(L.l)}</text>${L.sub?`<text x="${lx}" y="${ly+12}" text-anchor="${anchor}" style="font-size:11px">${esc(L.sub)}</text>`:""}`});
  series.forEach(s=>{const vs=s.v.map(v=>v==null?0:v);g+=`<polygon points="${vs.map((v,i)=>pt(i,v).join(",")).join(" ")}" fill="${s.c}" fill-opacity="${s.dash?0:.2}" stroke="${s.c}" stroke-width="${s.dash?1.6:2.6}" stroke-linejoin="round" ${s.dash?'stroke-dasharray="5 4"':""}/>`;
    if(!s.dash)s.v.forEach((v,i)=>{const [x,y]=pt(i,v==null?0:v);g+=v==null?`<circle cx="${x}" cy="${y}" r="3.5" fill="var(--surface)" stroke="var(--muted)" stroke-width="1.5"/>`:`<circle cx="${x}" cy="${y}" r="4.2" fill="${s.c}" stroke="var(--surface)" stroke-width="1.5"/>`})});
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" style="max-width:420px;margin:0 auto" role="img" aria-label="${esc(opt.aria||"Radar del jugador")}">${g}</svg>`}
function modeChips(){return `<div class="chips" role="group" aria-label="Tipo de radar">${RMODES.map(([k,t])=>`<button class="fchip" data-act="rd-mode" data-v="${k}" aria-pressed="${S.radarMode===k}">${t}</button>`).join("")}</div>`}
const RHELP={integral:"Mezcla tu evaluación (técnico, táctico, psicosocial), los tests, el rendimiento en partidos y la asistencia. Escala de 0 a 100.",partidos:"Puesto de 0 a 100 frente a sus pares: 100 es el mejor del grupo y 50 la mitad. Disciplina y goles recibidos puntúan más cuanto menos haya.",fisico:"Puesto de 0 a 100 en cada test frente al resto del equipo, con su última toma.",formativo:"Tu última evaluación (1 a 5) llevada a escala de 0 a 100."};
function perfilCard(j){
  const ms=fMatches(),mode=S.radarMode||"integral",pr=profile(j,mode,ms);
  let h=`<section class="sec"><div class="sec-h"><h3>Perfil del jugador</h3>${pr.ok?`<span class="hint">Frente a ${esc(pr.scope)}</span>`:""}</div>${modeChips()}`;
  if(!pr.ok)return h+pendingBox("Pendiente",pr.msg)+`</section>`;
  const refLbl=pr.kind==="pct"?"Mitad del grupo":"Media del equipo";
  h+=`<div class="legend"><span><i style="background:var(--accent)"></i>${esc(shortName(j.nombre))}</span><span><i style="background:transparent;border:1.5px dashed var(--muted)"></i>${refLbl}</span></div>`;
  h+=radarP(pr.axes.map(a=>({l:a.l,sub:a.p==null?"sin datos":(pr.kind==="pct"||mode==="integral")?String(a.p):a.raw,na:a.p==null})),[{v:pr.ref,c:"var(--muted)",dash:true},{v:pr.axes.map(a=>a.p),c:"var(--accent)"}],{aria:"Radar "+mode});
  h+=`<div class="list">${pr.axes.map(a=>`<div class="hbar"><div class="lb"><span>${esc(a.l)}</span><span class="num">${esc(a.raw)}${a.p!=null?` · <b>${Math.round(a.p)}</b>`:""}</span></div><div class="tr"><i style="width:${a.p||0}%;background:${a.p==null?"transparent":a.p>=67?"var(--ok)":a.p>=34?"var(--sky)":"var(--warn)"}"></i></div></div>`).join("")}</div>`;
  const notes=[RHELP[mode]];if(mode==="partidos"&&pr.nMs<6)notes.push(`Muestra pequeña: ${pr.nMs} partidos y ${pr.n} jugadores en el grupo.`);if(pr.missing&&pr.missing.length)notes.push("Sin datos todavía: "+pr.missing.join(", ")+".");
  return h+`<p class="hint">${esc(notes.join(" "))}</p></section>`;
}
function cmpRadar(P){
  const ms=fMatches(),mode=S.radarMode||"integral";const prs=P.map(p=>profile(p.j,mode,ms));const okI=prs.map((r,i)=>r.ok?i:-1).filter(i=>i>=0);
  let h=`<section class="sec"><div class="sec-h"><h3>Perfil comparado</h3></div>${modeChips()}`;
  if(okI.length<1)return h+pendingBox("Pendiente",prs[0].msg||"Sin datos para este radar.")+`</section>`;
  let labels;if(mode==="fisico"){const common=testsPresent().filter(t=>okI.every(i=>latestTest(P[i].j.id,t)!=null));if(common.length<3)return h+pendingBox("Pendiente","Estos jugadores no comparten al menos 3 tests.")+`</section>`;
    const series=okI.map(i=>({v:common.map(t=>{const m=testMeta(t);return pctRank(latestTest(P[i].j.id,t),S.jug.map(x=>latestTest(x.id,t)),m.mejor==="Menor")}),c:CMP_COL[i]}));
    return h+`<div class="legend">${okI.map(i=>`<span><i style="background:${CMP_COL[i]}"></i>${esc(shortName(P[i].j.nombre))}</span>`).join("")}</div>`+radarP(common.map(t=>({l:t.replace(/^Velocidad /,"Vel. ")})),series)+`</section>`}
  labels=prs[okI[0]].axes.map(a=>({l:a.l}));
  const gkMix=mode==="partidos"&&new Set(okI.map(i=>grpOf(P[i].j)==="por")).size>1;
  h+=`<div class="legend">${okI.map(i=>`<span><i style="background:${CMP_COL[i]}"></i>${esc(shortName(P[i].j.nombre))}</span>`).join("")}</div>`+radarP(labels,okI.map(i=>({v:prs[i].axes.map(a=>a.p),c:CMP_COL[i]})));
  const miss=P.filter((p,i)=>!prs[i].ok).map(p=>shortName(p.j.nombre));
  return h+`<p class="hint">${esc(RHELP[mode])}${mode==="partidos"?" Cada uno se mide frente a los de su posición.":""}${gkMix?" Ojo: estás comparando un portero con un jugador de campo; los ejes no son los mismos.":""}${miss.length?" Sin datos suficientes: "+miss.join(", ")+".":""}</p></section>`;
}
document.addEventListener("click",ev=>{const t=ev.target.closest('[data-act="rd-mode"]');if(!t)return;S.radarMode=t.dataset.v;LS.set("rmode",S.radarMode);render()});

/* ============ Inicio estilo app ============ */
const CLUB={nombre:"",cat:"",sede:"",ciudad:"",comps:[],dt:"",dtFoto:"",dtOrigen:"",dtNac:null,dtDesde:null};
/* Ficha del club: filas "Ficha · …" de la pestaña Config (las edita el DT) */
function fichaDe(cf){const g=k=>String(cf["Ficha · "+k]||"").trim();CLUB.nombre=g("Nombre")||cf["Club"]||"";CLUB.cat=g("Categoría")||cf["Categoría"]||"";CLUB.sede=g("Sede");CLUB.ciudad=g("Ciudad");CLUB.comps=g("Competiciones").split(/\s*;\s*/).filter(Boolean);CLUB.dt=g("Entrenador")||cf["Director técnico"]||"";CLUB.dtOrigen=g("Lugar de nacimiento del entrenador");CLUB.dtNac=pDate(g("Nacimiento del entrenador"));CLUB.dtDesde=pDate(g("Entrenador desde"))}
function yearsSince(d){const t=new Date();let y=t.getFullYear()-d.getFullYear();if(t.getMonth()<d.getMonth()||(t.getMonth()===d.getMonth()&&t.getDate()<d.getDate()))y--;return y}
function nextMatch(){const f=S.fixtures&&S.fixtures[0];if(f)return {rival:f.rival,fecha:f.fecha,comp:f.comp,loc:f.loc,src:"Partidos"};
  const inf=[...S.partidos].reverse().map(m=>S.informes[m.id]).find(x=>x&&x[30]);if(!inf)return null;const d=pDate(inf[31]);return {rival:inf[30],fecha:d&&d>=today0()?d:null,comp:"",loc:"",src:"informe"}}
function countdown(d){if(!d)return "Fecha por confirmar";const n=daysBetween(today0(),d);return n===0?"Hoy":n===1?"Mañana":`En ${n} días`}
function clubHero(){
  const nm=nextMatch();const last=[...S.partidos].slice(-5);
  let h=`<section class="club-hero"><div class="ch-in">${ourCrest(60)}<div class="ch-t"><b>${esc(CLUB.nombre)}</b><span>${esc(CLUB.cat)}</span></div></div></section>`;
  h+=`<div class="cols"><section class="sec"><div class="sec-h"><h3>Próximo partido</h3>${nm&&nm.comp?`<span class="hint">${esc(nm.comp)}</span>`:""}</div>${nm?`<div class="nm-card"><div class="nm-tm">${nm.loc==="Visitante"?rivalCrest(nm.rival,52):ourCrest(52)}<span>${esc(nm.loc==="Visitante"?nm.rival:"Jaguares")}</span></div>
     <div class="nm-mid"><b>${countdown(nm.fecha)}</b>${nm.fecha?`<span>${esc(["dom","lun","mar","mié","jue","vie","sáb"][nm.fecha.getDay()]+", "+dLong(nm.fecha))}</span>`:""}${nm.loc?`<span>${esc(nm.loc)}</span>`:""}</div>
     <div class="nm-tm">${nm.loc==="Visitante"?ourCrest(52):rivalCrest(nm.rival,52)}<span>${esc(nm.loc==="Visitante"?"Jaguares":nm.rival)}</span></div></div>${nm.src==="informe"?'<p class="hint">Tomado del último informe. Si registras el partido en la pestaña Partidos antes de jugarlo, aquí aparece la fecha y la localía.</p>':""}`:'<p class="empty">El próximo rival aparece cuando lo anotas en el cierre de un partido o registras el partido en la pestaña Partidos.</p>'}</section>
   <section class="sec"><h3 style="text-align:center">Forma reciente</h3>${last.length?`<div class="form5">${last.map((m,i)=>`<a class="f5" href="#partido-${esc(m.id)}" aria-label="${esc(m.rival)} ${m.gf}-${m.gc}"><span class="f5s ${m.res}">${m.gf} - ${m.gc}</span>${rivalCrest(m.rival,34)}${i===last.length-1?'<i class="f5d"></i>':""}</a>`).join("")}</div>`:'<p class="empty">Sin partidos todavía.</p>'}</section></div>`;
  return h;
}
function clubInfo(){
  const ico={dt:'<path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21c0-4 3.6-6 8-6s8 2 8 6"/>',pin:'<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',cup:'<path d="M7 4h10v5a5 5 0 0 1-10 0zM5 5H3v2a4 4 0 0 0 4 4M19 5h2v2a4 4 0 0 1-4 4M9 21h6M12 14v7"/>',std:'<path d="M3 20V9l9-5 9 5v11M3 20h18M8 20v-6h8v6"/>',team:'<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M14 15c3 0 8 1 8 5"/>'};
  const row=(i,k,v)=>`<div class="ci-row"><span class="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ico[i]}</svg></span><div class="meta"><span class="ci-k">${k}</span><span class="ci-v">${v}</span></div></div>`;
  const act=S.jug.filter(j=>!/Inactiv|Retir|Promov/i.test(j.estado)).length,yrs=CLUB.dtDesde?yearsSince(CLUB.dtDesde):null,dtf=CLUB.dtFoto&&window.foto(CLUB.dtFoto);
  return `<section class="sec"><h3>Ficha del club</h3><div class="ci">
   <div class="ci-row"><span class="av" style="width:52px;height:52px;border-color:var(--accent)">${dtf?`<img src="${dtf}" alt="">`:esc(initials(CLUB.dt))}</span><div class="meta"><span class="ci-k">Entrenador</span><span class="ci-v">${esc(CLUB.dt)}</span>${CLUB.dtDesde?`<span class="hint">Entrenador desde ${["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][CLUB.dtDesde.getMonth()]} de ${CLUB.dtDesde.getFullYear()} · ${yrs} ${yrs===1?"año":"años"}</span>`:""}</div></div>
   ${CLUB.dtOrigen||CLUB.dtNac?row("cal","Nacimiento del entrenador",esc(CLUB.dtOrigen)+(CLUB.dtNac?` <span class="hint">· ${dLong(CLUB.dtNac)} · ${yearsSince(CLUB.dtNac)} años</span>`:"")):""}
   ${CLUB.sede?row("std","Sede",esc(CLUB.sede)):""}
   ${CLUB.ciudad?row("pin","Ciudad",esc(CLUB.ciudad)):""}
   ${CLUB.comps.length?row("cup","Competiciones",CLUB.comps.map(esc).join("<br>")):""}
   ${row("team","Categoría",esc(CLUB.cat)+` <span class="hint">· ${act} jugadores activos</span>`)}
   ${S.config.temporada?row("cal","Temporada",esc(S.config.temporada)):""}
  </div></section>`;
}

/* ============ Eventos ============ */
document.addEventListener("click",ev=>{
  const t=ev.target.closest("[data-comp],[data-grupo],[data-go],[data-act]");if(!t)return;
  if(t.dataset.comp){S.comp=t.dataset.comp;LS.set("comp",S.comp);render();return}
  if(t.dataset.grupo){S.grupo=t.dataset.grupo;LS.set("grupo",S.grupo);render();return}
  if(t.dataset.go){location.hash=t.dataset.go;return}
  const a=t.dataset.act,reg=S.reg;
  if(a==="asis"){reg.p[t.dataset.id].asis=t.dataset.v;saveDraft();render()}
  else if(a==="open"){const p=reg.p[t.dataset.id];p.open=!p.open;saveDraft();render()}
  else if(a==="allP"){regPlayers().forEach(j=>{if(!/Lesion/i.test(j.disp))reg.p[j.id].asis="Presente"});saveDraft();render()}
  else if(a==="reset"){S.reg=newReg();LS.del("draft");S.confirm=false;render()}
  else if(a==="review"){const e=validReg();if(e){toast(e);return}S.confirm=true;render();setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),30)}
  else if(a==="cancel"){S.confirm=false;render()}
  else if(a==="send"){const b=buildBatch();S.queue.push(b);LS.set("queue",S.queue);S.reg=newReg();LS.del("draft");S.confirm=false;sendQueue()}
  else if(a==="flush"){sendQueue()}
});
document.addEventListener("input",ev=>{
  const t=ev.target;
  if(t.id==="q"){S.q=t.value;render();return}
  if(!S.reg)return;
  if(t.dataset.pf){const p=S.reg.p[t.dataset.id];if(t.dataset.pf==="asis"){p.asis=t.value||"Presente";saveDraft();render();return}p[t.dataset.pf]=t.value;saveDraft();return}
  const map={"r-fecha":"fecha","r-micro":"micro","r-min":"min","r-rpe":"rpe"};
  if(map[t.id]){S.reg[map[t.id]]=t.value;saveDraft();if(t.id==="r-fecha")render()}
});
document.addEventListener("change",ev=>{const t=ev.target;if(!S.reg)return;
  if(t.id==="r-tipo"){S.reg.tipo=t.value;saveDraft();render()}
  if(t.id==="r-grupo"){S.reg.grupo=t.value;saveDraft();render()}});
document.getElementById("refresh").addEventListener("click",()=>loadAll());
__hashL.push(render);

/* ============ Arranque ============ */
(function boot(){
  S.comp=LS.get("comp","Todas");S.grupo=LS.get("grupo","Todos");S.queue=LS.get("queue",[]);S.wq=LS.get("wq",[]);S.cmp=LS.get("cmp",[]);S.crests=LS.get("crests",{});S.radarMode=LS.get("rmode","integral");S.dph=LS.get("dph",{});
  if(window.imagenesGuardadas)aplicarImagenes(window.imagenesGuardadas());
  document.getElementById("crest").innerHTML=ourCrest(38);
  render();
  const C=window.claude;
  (C&&C.use?C.use("mcp").catch(()=>null):Promise.resolve(null)).then(m=>{S.mcp=m;
    if(!m){const snap=LS.get("snap",null);if(snap){parseAll(snap.raw);S.ok=true;S.offline=true;S.stamp=snap.stamp}S.err=gsErrorText({code:"no_mcp"});render();return}
    loadAll().then(async()=>{if(S.queue.length&&!S.offline)await sendQueue();if(!S.offline)flushWQ();loadDriveImages()});
    window.__alVolverSenal=async()=>{await loadAll();if(S.queue.length)await sendQueue();flushWQ();loadDriveImages()};
    setInterval(()=>{if(document.visibilityState==="visible"&&navigator.onLine&&(S.queue.length||S.wq.length)&&!S.busy)window.__alVolverSenal()},60000);
  });
})();

/* Centro de datos v2.1 · Informe PDF del jugador y Acceso de jugadores ("Mi progreso").
   Script clásico: usa las funciones y el estado (S) de la app principal. */
(function () {
const css = `
.ovl{position:fixed;inset:0;z-index:60;background:rgba(4,20,13,.55);display:grid;place-items:end center;padding:0}
@media (min-width:640px){.ovl{place-items:center;padding:24px}}
.ovl .box{background:var(--surface);color:var(--ink);width:100%;max-width:520px;max-height:92vh;overflow:auto;border-radius:18px 18px 0 0;padding:18px 16px calc(18px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:12px}
@media (min-width:640px){.ovl .box{border-radius:18px}}
.codebox{font-family:var(--display);font-weight:800;font-size:2.6rem;letter-spacing:.18em;text-align:center;background:var(--surface-2);border-radius:12px;padding:10px;font-variant-numeric:tabular-nums}
.msgbox{white-space:pre-wrap;background:var(--surface-2);border-radius:10px;padding:10px;font-size:.88rem;overflow-wrap:anywhere}
/* Informe A4 (se dibuja fuera de la vista y se convierte en PDF) */
.rp-host{position:fixed;left:0;top:0;z-index:-5;pointer-events:none}
.rp-page{width:794px;height:1123px;background:#fff;color:#0E2A40;padding:30px 40px 22px;box-sizing:border-box;display:flex;flex-direction:column;font-family:"Barlow","Segoe UI",Arial,sans-serif;font-size:13px;line-height:1.35;margin-bottom:10px}
.rp-head{display:flex;align-items:center;gap:12px;background:#0B4F7C;color:#fff;border-radius:10px;padding:10px 14px;flex:none}
.rp-head img{width:46px;height:46px;object-fit:contain}
.rp-head .t{flex:1;display:flex;flex-direction:column}
.rp-head b{font-family:"Barlow Condensed",Arial,sans-serif;font-weight:800;font-size:21px;text-transform:uppercase;letter-spacing:.03em;line-height:1}
.rp-head span{font-size:12px;opacity:.9}
.rp-head .r{text-align:right;font-size:12px}
.rp-head .r b{font-size:16px}
.rp-body{flex:1;overflow:hidden;display:flex;flex-direction:column;gap:12px;padding-top:12px}
.rp-foot{flex:none;display:flex;justify-content:space-between;font-size:10.5px;color:#46607A;border-top:1px solid #C9E4F4;padding-top:6px}
.rp-blk h4{font-family:"Barlow Condensed",Arial,sans-serif;font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px;color:#0B4F7C;border-bottom:2px solid #0B4F7C;padding-bottom:3px}
.rp-hero{display:flex;gap:16px;align-items:center}
.rp-ph{width:104px;height:104px;border-radius:50%;overflow:hidden;border:4px solid #0B4F7C;display:grid;place-items:center;background:#d6eef8;font-family:"Barlow Condensed",Arial,sans-serif;font-weight:800;font-size:34px;flex:none}
.rp-ph img{width:100%;height:100%;object-fit:cover}
.rp-hero .n{font-family:"Barlow Condensed",Arial,sans-serif;font-weight:800;font-size:28px;text-transform:uppercase;line-height:1}
.rp-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:8px}
.rp-fact{background:#EAF4FB;border-radius:8px;padding:5px 8px}
.rp-fact span{display:block;font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:#46607A;font-weight:700}
.rp-fact b{font-size:13px}
.rp-kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.rp-kpi{background:#EAF4FB;border-radius:8px;padding:6px 8px;text-align:center}
.rp-kpi b{display:block;font-family:"Barlow Condensed",Arial,sans-serif;font-weight:800;font-size:24px;line-height:1}
.rp-kpi span{font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;color:#46607A;font-weight:700}
.rp-t{width:100%;border-collapse:collapse;font-size:12px}
.rp-t th{font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;color:#46607A;text-align:left;padding:4px 5px;border-bottom:1px solid #C9E4F4}
.rp-t td{padding:4px 5px;border-bottom:1px solid #EAF4FB;vertical-align:middle}
.rp-t .c{text-align:center}
.rp-bar{height:8px;border-radius:4px;background:#EAF4FB;width:70px;display:inline-block;vertical-align:middle;overflow:hidden;margin-right:5px}
.rp-bar i{display:block;height:100%;border-radius:4px}
.rp-res{display:inline-block;width:18px;height:18px;border-radius:4px;color:#fff;font-weight:800;text-align:center;line-height:18px;font-size:11px;margin-left:4px}
.rp-dots{display:flex;flex-wrap:wrap;gap:3px;margin:6px 0}
.rp-dots i{width:12px;height:12px;border-radius:3px;display:block}
.rp-leg{display:flex;gap:12px;font-size:10.5px;color:#46607A}
.rp-leg i{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:4px}
.rp-2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.rp-card{background:#F7FBFE;border:1px solid #C9E4F4;border-radius:8px;padding:8px 10px}
.rp-card .h{display:flex;justify-content:space-between;font-weight:700;margin-bottom:4px}
.rp-tb{display:flex;align-items:flex-end;gap:6px;height:70px;margin:4px 0}
.rp-tb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;font-size:10px;color:#46607A}
.rp-tb i{display:block;width:100%;max-width:34px;background:#1874B0;border-radius:4px 4px 0 0}
.rp-tb b{font-size:11px;color:#0E2A40}
.rp-area{display:grid;grid-template-columns:110px 1fr 24px;align-items:center;gap:8px;margin:3px 0}
.rp-sc{display:flex;gap:4px}.rp-sc i{width:26px;height:10px;border-radius:3px;background:#EAF4FB}.rp-sc i.on{background:#1874B0}
.rp-txt{margin:2px 0 6px}.rp-txt span{font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;color:#46607A;font-weight:700;display:block}
.rp-firma{display:flex;justify-content:flex-end;margin-top:26px}
.rp-firma div{width:250px;border-top:1px solid #0E2A40;text-align:center;padding-top:4px;font-size:12px}
.rp-empty{color:#46607A;font-style:italic}
`;
const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

/* ---------- Librerías del PDF (se guardan en el teléfono para usarlas sin señal) ---------- */
const LIBS = { h2c: ["https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", () => window.html2canvas], pdf: ["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", () => window.jspdf && window.jspdf.jsPDF] };
const cargando = {};
function lib(k) {
  const [url, ok] = LIBS[k];
  if (ok()) return Promise.resolve();
  if (cargando[k]) return cargando[k];
  return cargando[k] = new Promise((res, rej) => {
    const s = document.createElement("script"); s.src = url; s.crossOrigin = "anonymous";
    s.onload = () => ok() ? res() : rej({ code: "sin_libreria" });
    s.onerror = () => { delete cargando[k]; s.remove(); rej({ code: "sin_libreria" }); };
    document.head.appendChild(s);
  });
}

/* ---------- Periodo ---------- */
const PERIODOS = [["temp", "Toda la temporada"], ["30", "Últimos 30 días"], ["90", "Últimos 90 días"], ["fechas", "Elegir fechas"]];
function rango(I) {
  const hoy = today0();
  if (I.per === "30" || I.per === "90") { const d = new Date(hoy); d.setDate(d.getDate() - Number(I.per)); return { desde: d, hasta: null, txt: "Últimos " + I.per + " días" }; }
  if (I.per === "fechas") { const d = I.desde ? isoToDate(I.desde) : null, h = I.hasta ? isoToDate(I.hasta) : null; return { desde: d, hasta: h, txt: (d ? dLong(d) : "Inicio") + " – " + (h ? dLong(h) : "hoy") }; }
  return { desde: null, hasta: null, txt: "Temporada" + (S.config.temporada ? " " + S.config.temporada : "") };
}
const enRango = (d, R) => !!d && (!R.desde || d >= R.desde) && (!R.hasta || d <= R.hasta);

/* ---------- Contenido del informe (sin comparaciones con el equipo) ---------- */
const C = { ok: "#1f8a4c", warn: "#c98a00", bad: "#c3352b", sky: "#2ea3d4", mut: "#93b0a8", acc: "#1874B0" };
const ASIS_C = { Presente: C.ok, Ausente: C.bad, Justificado: C.warn, Lesionado: C.sky };
function bloques(j, R) {
  const out = [], v = x => x == null || x === "" ? "–" : esc(x);
  const foto = FOTOS[j.id] && window.foto(FOTOS[j.id]);
  out.push(`<div class="rp-hero"><div class="rp-ph">${foto ? `<img src="${foto}">` : esc(initials(j.nombre))}</div><div style="flex:1">
    <div class="n">${esc(j.nombre)}</div><div style="font-size:14px;margin-top:4px">${j.dorsal ? "<b>#" + esc(j.dorsal) + "</b> · " : ""}${esc(j.pos1 || "")}${j.pos2 ? " · alternativa: " + esc(j.pos2) : ""}</div>
    <div class="rp-facts"><div class="rp-fact"><span>Edad</span><b>${v(j.edad)}</b></div><div class="rp-fact"><span>Pierna hábil</span><b>${v(j.pierna)}</b></div>
    <div class="rp-fact"><span>Estatura</span><b>${j.est ? esc(j.est) + " cm" : "–"}</b></div><div class="rp-fact"><span>Peso</span><b>${j.peso ? esc(j.peso) + " kg" : "–"}</b></div></div></div></div>`);
  // Partidos
  const ms = S.partidos.filter(m => enRango(m.fecha, R)), s = pStats(j.id, ms), gk = isGK(j), k = gk ? gkStats(j.id, ms) : null;
  const kp = (b, t) => `<div class="rp-kpi"><b>${b}</b><span>${t}</span></div>`;
  out.push(`<h4>Partidos</h4><div class="rp-kpis">${kp(s.conv, "Convocado de " + ms.length)}${kp(s.pj, "Jugados")}${kp(s.tit, "Titular")}${kp(s.min + "'", "Minutos")}${kp(fmt1(s.nota), "Nota media")}
    ${gk ? kp(k.inv, "Vallas invictas") + kp(k.gr, "Goles recibidos") + kp(k.pa, "Penales atajados") + kp(s.mvp, "MVP") + kp(s.am + " / " + s.ro, "Amarillas / rojas")
         : kp(s.g, "Goles") + kp(s.a, "Asistencias") + kp(s.mvp, "MVP") + kp(s.am, "Amarillas") + kp(s.ro, "Rojas")}</div>`);
  if (ms.length) {
    const filas = ms.slice().reverse().map(m => {
      const r = S.stats.find(x => x.pt === m.id && x.jid === j.id), dur = m.dur || S.config.duracion || 80;
      const cond = !r ? "No convocado" : r.min > 0 ? (r.cond === "Titular" ? "Titular" : "Suplente") : "No jugó";
      const min = r ? r.min : 0;
      return `<tr><td>${esc(dShort(m.fecha))}</td><td>${esc(m.rival)}<br><span style="color:#46607A;font-size:10.5px">${esc(m.comp)}</span></td><td class="c">${m.gf}-${m.gc}<span class="rp-res" style="background:${m.res === "G" ? C.ok : m.res === "E" ? C.mut : C.bad}">${m.res}</span></td>
        <td>${cond}</td><td>${(w => `<span class="rp-bar" style="background:linear-gradient(90deg,${r && r.cond === "Titular" ? C.acc : C.sky} ${w}%,#EAF4FB ${w}%)"></span>`)(Math.round(Math.min(100, min / dur * 100)))}${min}'</td>
        ${gk ? (g => `<td class="c">${g == null ? "" : g === 0 ? "0 ✓" : g}</td><td class="c">${r && r.pa ? r.pa : ""}</td>`)(r && r.min > 0 ? (r.gr != null ? r.gr : (r.min >= dur ? m.gc : null)) : null) : `<td class="c">${r && r.g ? r.g : ""}</td><td class="c">${r && r.a ? r.a : ""}</td>`}<td class="c">${r && r.min > 0 && r.nota != null ? fmt1(r.nota) : ""}</td><td class="c">${r ? (r.am ? r.am + " TA " : "") + (r.ro ? r.ro + " TR" : "") : ""}</td></tr>`;
    });
    const head = `<table class="rp-t"><tr><th>Fecha</th><th>Rival</th><th class="c">Resultado</th><th>Condición</th><th>Minutos</th>${gk ? '<th class="c">GR</th><th class="c">PA</th>' : '<th class="c">G</th><th class="c">A</th>'}<th class="c">Nota</th><th class="c">Tarjetas</th></tr>`;
    const nota = gk ? '<p style="font-size:10.5px;color:#46607A;margin:4px 0 0">GR: goles recibidos con él en cancha (✓ valla invicta). PA: penales atajados.</p>' : "";
    for (let i = 0; i < filas.length; i += 16) out.push(`<h4>Partido a partido${i ? " (continuación)" : ""}</h4>${head}${filas.slice(i, i + 16).join("")}</table>${i + 16 >= filas.length ? nota : ""}`);
  }
  // Asistencia
  const ses = sessionsOf(j.id).filter(x => enRango(x.fecha, R)), cnt = a => ses.filter(x => x.asis === a).length;
  out.push(`<h4>Asistencia a entrenamientos</h4>${ses.length ? `<div class="rp-kpis"><div class="rp-kpi"><b>${pct(asisPct(ses))}</b><span>Asistencia</span></div><div class="rp-kpi"><b>${ses.length}</b><span>Sesiones</span></div><div class="rp-kpi"><b>${cnt("Presente")}</b><span>Presente</span></div><div class="rp-kpi"><b>${cnt("Ausente")}</b><span>Ausente</span></div><div class="rp-kpi"><b>${cnt("Justificado") + cnt("Lesionado")}</b><span>Justif. / lesión</span></div></div>
    <div class="rp-dots">${ses.slice(-90).map(x => `<i style="background:${ASIS_C[x.asis] || C.mut}"></i>`).join("")}</div>
    <div class="rp-leg">${Object.keys(ASIS_C).map(a => `<span><i style="background:${ASIS_C[a]}"></i>${a}</span>`).join("")}<span><i style="background:${C.mut}"></i>Otro</span><span>· El porcentaje cuenta presentes sobre presentes más ausentes.</span></div>` : '<p class="rp-empty">Sin sesiones registradas en el periodo.</p>'}`);
  // Tests
  const ts = S.tests.filter(t => t.jid === j.id && (!t.f || enRango(t.f, R)));
  const porTest = {}; ts.forEach(t => (porTest[t.test] = porTest[t.test] || []).push(t));
  const tarjetas = Object.keys(porTest).map(n => {
    const m = testMeta(n), a = porTest[n].slice().sort((x, y) => (x.f || 0) - (y.f || 0)), max = Math.max(...a.map(x => x.res), 0) || 1;
    const dif = a.length > 1 ? a[a.length - 1].res - a[0].res : null, mejora = dif == null ? null : (m.mejor === "Menor" ? dif < 0 : dif > 0);
    return `<div class="rp-card"><div class="h"><span>${esc(n)}</span><span style="color:#46607A;font-weight:500">${esc(m.u === "s" && a.some(x => x.res >= 60) ? "min:s" : m.u)} · mejor si es ${esc(String(m.mejor || "Mayor").toLowerCase())}</span></div>
      <div class="rp-tb">${a.slice(-6).map(x => `<div><b>${fmtV(x.res, m.u)}</b><i style="height:${Math.max(4, x.res / max * 48)}px"></i>${esc(x.toma || dShort(x.f))}</div>`).join("")}</div>
      ${dif != null && dif !== 0 ? `<div style="font-size:11.5px;color:${mejora ? C.ok : C.bad};font-weight:700">${mejora ? "Mejoró" : "Bajó"} ${esc(fmtT(Math.abs(dif), m.u))} desde la primera toma</div>` : dif === 0 ? '<div style="font-size:11.5px;color:#46607A">Igual que en la primera toma</div>' : '<div style="font-size:11.5px;color:#46607A">Una sola toma</div>'}</div>`;
  });
  if (!tarjetas.length) out.push('<h4>Tests físicos</h4><p class="rp-empty">Sin tests registrados en el periodo.</p>');
  for (let i = 0; i < tarjetas.length; i += 4) out.push(`<h4>Tests físicos${i ? " (continuación)" : ""}</h4><div class="rp-2">${tarjetas.slice(i, i + 4).join("")}</div>`);
  // Evaluación formativa
  const evs = S.evals.filter(e => e.jid === j.id && enRango(e.f, R));
  if (!evs.length) out.push('<h4>Evaluación formativa</h4><p class="rp-empty">Sin evaluaciones en el periodo.</p>');
  else {
    const e = evs[evs.length - 1], prev = evs.slice(0, -1);
    out.push(`<h4>Evaluación formativa · ${esc(e.per || "")} (${esc(dLong(e.f))})</h4><div class="rp-2"><div>${AREAS.map(([k, t]) => `<div class="rp-area"><span>${t}</span><span class="rp-sc">${[1, 2, 3, 4, 5].map(n => `<i class="${e[k] != null && n <= e[k] ? "on" : ""}"></i>`).join("")}</span><b>${e[k] != null ? fmt1(e[k]) : "–"}</b></div>`).join("")}
      <p style="font-size:10.5px;color:#46607A;margin:4px 0 0">Escala 1 a 5: 3 es lo esperado para su edad.</p>
      ${prev.length ? `<table class="rp-t" style="margin-top:6px"><tr><th>Anteriores</th>${AREAS.map(a => `<th class="c">${a[1].slice(0, 3)}</th>`).join("")}</tr>${prev.slice(-4).map(p => `<tr><td>${esc(p.per || dShort(p.f))}</td>${AREAS.map(([k]) => `<td class="c">${p[k] != null ? fmt1(p[k]) : "–"}</td>`).join("")}</tr>`).join("")}</table>` : ""}</div>
      <div>${[["Fortalezas", e.fort], ["Aspectos a mejorar", e.mej], ["Objetivo a corto plazo", e.oc], ["Objetivo a mediano plazo", e.om], ["Objetivo a largo plazo", e.ol]].filter(x => x[1]).map(x => `<div class="rp-txt"><span>${x[0]}</span>${esc(x[1])}</div>`).join("") || '<p class="rp-empty">Sin comentarios.</p>'}</div></div>`);
  }
  // Lesiones y sanciones
  const les = S.lesiones.filter(l => l.jid === j.id && enRango(l.fecha, R)), san = S.sanciones.filter(x => x.jid === j.id && enRango(x.fecha, R));
  out.push(`<h4>Lesiones y sanciones</h4>${les.length || san.length ? `<table class="rp-t"><tr><th>Fecha</th><th>Tipo</th><th>Detalle</th><th>Estado</th></tr>${les.map(l => `<tr><td>${esc(dShort(l.fecha))}</td><td>Lesión</td><td>${esc(l.zona)}${l.desc ? " · " + esc(l.desc) : ""}${l.dias != null ? " · " + l.dias + " días" : ""}</td><td>${l.altaReal ? "Alta " + esc(dShort(l.altaReal)) : esc(l.estado || "En recuperación")}</td></tr>`).join("")}
    ${san.map(x => `<tr><td>${esc(dShort(x.fecha))}</td><td>Sanción</td><td>${esc(x.motivo)}${x.fechas != null ? " · " + x.fechas + " fechas" : ""}</td><td>${esc(x.estado || "")}</td></tr>`).join("")}</table>` : '<p class="rp-empty">Sin lesiones ni sanciones en el periodo.</p>'}
    <div class="rp-firma"><div>${esc(CLUB.dt || "")}<br><span style="color:#46607A">Entrenador${CLUB.nombre ? " · " + esc(CLUB.nombre) : ""}</span></div></div>`);
  return out;
}
function cabecera(R) {
  const L = LOGO && window.foto(LOGO);
  return `<div class="rp-head">${L ? `<img src="${L}">` : ""}<div class="t"><b>${esc(CLUB.nombre || "Informe")}</b><span>${esc(CLUB.cat || "")}</span></div><div class="r"><b>Informe del jugador</b><br>${esc(R.txt)}</div></div>`;
}
async function paginas(j, R) {
  const host = document.createElement("div"); host.className = "rp-host"; document.body.appendChild(host);
  const pages = []; let body;
  const nueva = () => { const p = document.createElement("div"); p.className = "rp-page"; p.innerHTML = cabecera(R) + '<div class="rp-body"></div><div class="rp-foot"></div>'; host.appendChild(p); body = p.querySelector(".rp-body"); pages.push(p); };
  nueva();
  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
  for (const b of bloques(j, R)) {
    const el = document.createElement("div"); el.className = "rp-blk"; el.innerHTML = b; body.appendChild(el);
    if (body.scrollHeight > body.clientHeight + 1 && body.children.length > 1) { el.remove(); nueva(); body.appendChild(el); }
  }
  const hoy = dLong(new Date());
  pages.forEach((p, i) => { p.querySelector(".rp-foot").innerHTML = `<span>${esc(CLUB.nombre || "")} · Centro de datos</span><span>Generado el ${hoy} · Página ${i + 1} de ${pages.length}</span>`; });
  return { host, pages };
}
function archivo(j) { return `Informe_${j.id}_${shortName(j.nombre).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z0-9]+/g, "_")}_${todayISO()}.pdf`; }

/* ---------- Ventana del informe ---------- */
let I = null;
function ventana() {
  let el = document.getElementById("inf-ovl");
  if (!I) { if (el) el.remove(); document.body.style.overflow = ""; return; }
  if (!el) { el = document.createElement("div"); el.id = "inf-ovl"; el.className = "ovl"; document.body.appendChild(el); document.body.style.overflow = "hidden"; }
  const j = jById(I.id), R = rango(I);
  el.innerHTML = `<div class="box" role="dialog" aria-label="Informe PDF"><div class="sec-h"><h2>Informe PDF</h2><button class="btn sm" data-act="inf-close">Cerrar</button></div>
    <p style="margin:0"><b>${esc(j ? j.nombre : "")}</b></p>
    ${I.blob ? `<div class="banner ok">Listo: ${esc(I.name)} (${I.paginas} ${I.paginas === 1 ? "página" : "páginas"}).</div>
      <div class="fgrid">${navigator.canShare ? '<button class="btn pri" data-act="inf-share">Compartir</button>' : ""}<button class="btn ${navigator.canShare ? "" : "pri"}" data-act="inf-dl" ${navigator.canShare ? "" : 'style="grid-column:1/-1"'}>Descargar</button></div>
      <button class="linkbtn" data-act="inf-again">Generar con otro periodo</button>` : `
    <div class="chips" role="group" aria-label="Periodo">${PERIODOS.map(p => `<button class="fchip" aria-pressed="${I.per === p[0]}" data-act="inf-per" data-v="${p[0]}">${p[1]}</button>`).join("")}</div>
    ${I.per === "fechas" ? `<div class="fgrid"><label class="f">Desde<input type="date" id="inf-desde" value="${esc(I.desde || "")}"></label><label class="f">Hasta<input type="date" id="inf-hasta" value="${esc(I.hasta || "")}"></label></div>` : ""}
    <p class="hint">Incluye datos del jugador, partidos, asistencia, tests físicos, evaluación formativa, lesiones y sanciones de: <b>${esc(R.txt)}</b>. No incluye comparaciones con el equipo.</p>
    ${I.err ? `<div class="banner err">${esc(I.err)}</div>` : ""}
    <button class="btn pri wide" data-act="inf-gen" ${I.busy ? "disabled" : ""}>${I.busy ? esc(I.busy) : "Generar PDF"}</button>`}</div>`;
}
async function generar() {
  const j = jById(I.id); if (!j) return;
  if (I.per === "fechas" && I.desde && I.hasta && I.hasta < I.desde) { I.err = "La fecha final no puede ser antes de la inicial."; ventana(); return; }
  I.err = null; I.busy = "Preparando…"; ventana();
  let host = null;
  try {
    await Promise.all([lib("h2c"), lib("pdf")]);
    const R = rango(I), r = await paginas(j, R); host = r.host;
    const pdf = new window.jspdf.jsPDF({ unit: "mm", format: "a4", compress: true });
    for (let i = 0; i < r.pages.length; i++) {
      I.busy = `Generando página ${i + 1} de ${r.pages.length}…`; ventana();
      const cv = await window.html2canvas(r.pages[i], { scale: 2, backgroundColor: "#ffffff", logging: false, scrollX: 0, scrollY: 0, windowWidth: 794 });
      if (i) pdf.addPage();
      pdf.addImage(cv.toDataURL("image/jpeg", 0.9), "JPEG", 0, 0, 210, 297);
    }
    I.blob = pdf.output("blob"); I.name = archivo(j); I.paginas = r.pages.length; I.busy = null;
  } catch (e) {
    I.busy = null;
    I.err = e && e.code === "sin_libreria" ? "Se necesita señal la primera vez para preparar el generador de PDF. Conéctate e intenta de nuevo." : "No se pudo generar el PDF: " + ((e && e.message) || "error");
  } finally { if (host) host.remove(); ventana(); }
}
window.__informe = { abrir: id => { I = { id, per: "temp", desde: "", hasta: "" }; ventana(); }, estado: () => I };
document.addEventListener("click", async ev => {
  const t = ev.target.closest("[data-act^='inf-']"); if (!t) return;
  const a = t.dataset.act;
  if (a === "inf-open") { window.__informe.abrir(t.dataset.id); return; }
  if (!I) return;
  if (a === "inf-close") { I = null; ventana(); }
  else if (a === "inf-per") { I.per = t.dataset.v; I.err = null; ventana(); }
  else if (a === "inf-gen") { if (!I.busy) generar(); }
  else if (a === "inf-again") { I.blob = null; ventana(); }
  else if (a === "inf-dl") { const u = URL.createObjectURL(I.blob), x = document.createElement("a"); x.href = u; x.download = I.name; document.body.appendChild(x); x.click(); x.remove(); setTimeout(() => URL.revokeObjectURL(u), 5000); }
  else if (a === "inf-share") { const f = new File([I.blob], I.name, { type: "application/pdf" }); try { if (navigator.canShare({ files: [f] })) await navigator.share({ files: [f], title: I.name }); else t.nextElementSibling && t.nextElementSibling.click(); } catch (e) {} }
});
document.addEventListener("input", ev => { if (!I) return; if (ev.target.id === "inf-desde") I.desde = ev.target.value; if (ev.target.id === "inf-hasta") I.hasta = ev.target.value; });
document.addEventListener("change", ev => { if (I && (ev.target.id === "inf-desde" || ev.target.id === "inf-hasta")) ventana(); });
// Las librerías se dejan listas en segundo plano para poder generar sin señal más adelante.
setTimeout(() => { if (navigator.onLine) { lib("h2c").catch(() => {}); lib("pdf").catch(() => {}); } }, 8000);

/* ---------- Acceso de jugadores (Mi progreso) ---------- */
const A = { cod: LS.get("accCod", {}), sinDoc: LS.get("accSinDoc", []), cargado: 0, err: null, busy: null, nuevo: null };
function enlace() {
  const u = window.__acceso && window.__acceso();
  if (!u || !u.url) return "";
  const tok = btoa(unescape(encodeURIComponent(JSON.stringify({ url: u.url }))));
  return new URL("jugador.html", location.href).href.split("#")[0] + "#p=" + encodeURIComponent(tok);
}
function errTxt(e) {
  const c = e && e.code;
  if (c === "operacion_desconocida") return "Falta actualizar el puente a la versión 10. Pega el código nuevo en Apps Script y publica una versión nueva.";
  if (c === "sin_documento") return "Falta el número de documento de ese jugador en la pestaña Plantilla (columna R).";
  if (c === "server_unavailable") return "Sin señal: la gestión de códigos necesita conexión.";
  return gsErrorText(e);
}
async function cargar(force) {
  if (A.busy || (!force && Date.now() - A.cargado < 60000)) return;
  A.busy = "lista"; render();
  try { const r = await window.puenteDT({ op: "jugCodigos" }); A.cod = r.codigos || {}; A.sinDoc = r.sinDoc || []; A.cargado = Date.now(); A.err = null; LS.set("accCod", A.cod); LS.set("accSinDoc", A.sinDoc); }
  catch (e) { A.err = errTxt(e); A.cargado = Date.now(); }
  A.busy = null; render();
}
function mensaje(j, codigo) {
  const n = shortName(j.nombre);
  return `Hola, familia de ${j.nombre}. Este es el acceso a «Mi progreso» de ${n}${CLUB.nombre ? " en " + CLUB.nombre : ""}${CLUB.cat ? " (" + CLUB.cat + ")" : ""}:\n${enlace()}\n\nUsuario: número de documento de ${n}\nCódigo personal: ${codigo}\n\nAhí pueden ver su asistencia, sus partidos, sus tests físicos y su evaluación formativa. Por favor no compartan el código.`;
}
window.vAccesos = function () {
  setTimeout(() => cargar(false), 0);
  const pl = activePl(), con = pl.filter(j => A.cod[j.id]).length;
  let h = `${subnav(SUBJ, "accesos")}<h2>Acceso de jugadores</h2>
   <section class="sec"><p class="hint">Cada jugador y su familia consultan «Mi progreso» con el <b>número de documento</b> del jugador y un <b>código personal</b> de 6 dígitos. Ven solo su asistencia, sus partidos, sus tests y su evaluación formativa: nada de otros jugadores, notas por partido, lesiones ni comparaciones.</p>
   <div class="kpis"><div class="kpi"><b>${con}</b><span>Con acceso</span></div><div class="kpi"><b>${pl.length - con}</b><span>Sin código</span></div></div>
   ${A.err ? `<div class="banner err">${esc(A.err)}</div>` : ""}
   <button class="btn sm" data-act="acc-reload" style="align-self:flex-start" ${A.busy ? "disabled" : ""}>${A.busy === "lista" ? "Cargando…" : "Actualizar estado"}</button></section>`;
  if (A.nuevo) {
    const j = jById(A.nuevo.id), m = mensaje(j, A.nuevo.codigo);
    h += `<section class="sec" style="border:2px solid var(--accent)"><h3>Código de ${esc(shortName(j.nombre))}</h3><div class="codebox">${esc(A.nuevo.codigo)}</div>
     <p class="hint"><b>Solo se muestra esta vez.</b> Envíalo ahora a la familia. Si se pierde, genera uno nuevo.</p><div class="msgbox">${esc(m)}</div>
     <div class="fgrid"><a class="btn pri" style="text-decoration:none;display:grid;place-items:center" href="https://wa.me/?text=${encodeURIComponent(m)}" target="_blank" rel="noopener">Enviar por WhatsApp</a><button class="btn" data-act="acc-copy">Copiar mensaje</button></div>
     <button class="btn wide" data-act="acc-done">Listo</button></section>`;
  }
  h += `<section class="sec"><div class="list">${pl.map(j => {
    const c = A.cod[j.id], sd = A.sinDoc.includes(j.id);
    return `<div class="li">${avatar(j, "sm")}<div class="meta"><span class="nm">${j.dorsal ? `<span class="ab">${esc(j.dorsal)}</span> · ` : ""}${esc(shortName(j.nombre))}</span>
      <span class="sub">${c ? `<span class="chip ok">Con acceso</span> desde ${esc(dLong(new Date(c.desde)))}` : sd ? '<span class="chip sus">Falta documento</span> en Plantilla' : '<span class="chip ina">Sin código</span>'}</span></div>
      <div class="end" style="flex-direction:row;gap:6px">${sd && !c ? "" : `<button class="btn sm ${c ? "" : "pri"}" data-act="acc-gen" data-id="${j.id}" ${A.busy ? "disabled" : ""}>${A.busy === j.id ? "…" : c ? "Cambiar" : "Generar"}</button>`}${c ? `<button class="btn sm" data-act="acc-del" data-id="${j.id}" ${A.busy ? "disabled" : ""}>Quitar</button>` : ""}</div></div>`;
  }).join("")}</div></section>`;
  return h;
};
document.addEventListener("click", async ev => {
  const t = ev.target.closest("[data-act^='acc-']"); if (!t) return;
  const a = t.dataset.act, id = t.dataset.id;
  if (a === "acc-reload") { cargar(true); return; }
  if (a === "acc-done") { A.nuevo = null; render(); return; }
  if (a === "acc-copy") { try { await navigator.clipboard.writeText(mensaje(jById(A.nuevo.id), A.nuevo.codigo)); toast("Mensaje copiado."); } catch (e) { toast("No se pudo copiar: selecciona el texto y cópialo."); } return; }
  if (A.busy) return;
  const j = jById(id); if (!j) return;
  if (a === "acc-gen") {
    if (A.cod[id] && !confirm(`¿Cambiar el código de ${shortName(j.nombre)}? El código anterior dejará de funcionar.`)) return;
    A.busy = id; render();
    try { const r = await window.puenteDT({ op: "jugCodigo", id }); A.nuevo = { id, codigo: r.codigo }; A.cod[id] = { desde: Date.now() }; LS.set("accCod", A.cod); A.err = null; window.scrollTo(0, 0); }
    catch (e) { A.err = errTxt(e); }
    A.busy = null; render();
  }
  if (a === "acc-del") {
    if (!confirm(`¿Quitar el acceso de ${shortName(j.nombre)}? Su código dejará de funcionar.`)) return;
    A.busy = id; render();
    try { await window.puenteDT({ op: "jugQuitar", id }); delete A.cod[id]; LS.set("accCod", A.cod); if (A.nuevo && A.nuevo.id === id) A.nuevo = null; toast("Acceso quitado."); A.err = null; }
    catch (e) { A.err = errTxt(e); }
    A.busy = null; render();
  }
});

/* ---------- Modo día / noche ---------- */
const TEMAS = ["auto", "light", "dark"];
const ICON = { auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>', light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>', dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>' };
const NOMBRE = { auto: "Automático (como el teléfono)", light: "Modo día", dark: "Modo noche" };
function aplicarTema() {
  const t = LS.get("theme", "auto"), el = document.documentElement;
  if (t === "auto") el.removeAttribute("data-theme"); else el.setAttribute("data-theme", t);
  const b = document.getElementById("thm"); if (b) { b.innerHTML = ICON[t]; b.title = NOMBRE[t]; }
}
document.addEventListener("click", ev => { if (!ev.target.closest("#thm")) return; const t = LS.get("theme", "auto"); const n = TEMAS[(TEMAS.indexOf(t) + 1) % 3]; LS.set("theme", n); aplicarTema(); toast(NOMBRE[n]); });
aplicarTema();

/* ---------- Seguimiento de lesión (formulario) ---------- */
document.addEventListener("input", ev => { const t = ev.target; if (!S.act || S.act.t !== "segui") return; if (t.id === "sg-prev") S.act.prev = t.value; if (t.id === "sg-seg") S.act.seg = t.value; });
document.addEventListener("change", ev => { const t = ev.target; if (!S.act || S.act.t !== "segui") return; if (t.id === "sg-indef") { S.act.indef = t.checked; render(); } if (t.id === "sg-seg") S.act.seg = t.value; });

/* ---------- Gestión del jugador: quitar foto, retirado ---------- */
window.gestionCard = function (j) {
  const conFoto = !!FOTOS[j.id];
  return `<section class="sec"><h3>Gestión del jugador</h3>
   ${j.promovido ? '<div class="banner ok">Promovido a otra categoría. Su historial se conserva y sigue viendo «Mi progreso», pero no aparece en listas, asistencia, convocatoria, registros ni en Equipo.</div>' : j.retirado ? '<div class="banner warn">Retirado del equipo. Su historial se conserva, pero no aparece en listas, convocatoria ni registros, y no tiene acceso a «Mi progreso».</div>' : ""}
   <div class="row">${conFoto ? `<button class="btn sm" data-act="g-foto" data-id="${j.id}">Quitar foto</button>` : ""}
   ${j.retirado ? `<button class="btn sm" data-act="g-ret" data-v="Activo" data-id="${j.id}">Reincorporar al equipo</button>` : `<button class="btn sm" data-act="g-ret" data-v="Promovido" data-id="${j.id}">Promover a otra categoría</button><button class="btn sm" data-act="g-ret" data-v="Retirado" data-id="${j.id}">Marcar como retirado</button>`}</div>
   <p class="hint">${conFoto ? "Quitar foto la borra en las dos apps; el jugador vuelve a mostrar sus iniciales. Si la foto equivocada está en la carpeta FOTOS APP de Drive, cámbiala o bórrala allí para que no vuelva al importar. " : ""}Para una pausa temporal usa «Inactivo» en la columna Estado de Plantilla.</p></section>`;
};
window.retiradosCard = function () {
  const r = S.jug.filter(j => j.retirado);
  if (!r.length) return "";
  return `<section class="sec"><details><summary style="cursor:pointer;font-weight:700">Fuera de la plantilla: promovidos y retirados (${r.length})</summary><div class="list" style="margin-top:10px">${r.map(j => `<a class="li" href="#jugador-${j.id}" style="text-decoration:none">${avatar(j, "sm")}<div class="meta"><span class="nm">${esc(j.nombre)}</span><span class="sub">${esc(j.pos1 || "")}</span></div><span class="chip ${j.promovido ? "ok" : "ina"}">${j.promovido ? "Promovido" : "Retirado"}</span></a>`).join("")}</div></details></section>`;
};
document.addEventListener("click", async ev => {
  const t = ev.target.closest('[data-act="g-foto"],[data-act="g-ret"]'); if (!t || S.busy) return;
  const j = jById(t.dataset.id); if (!j) return;
  if (!navigator.onLine) { toast("Se necesita señal para hacer este cambio."); return; }
  if (t.dataset.act === "g-foto") {
    if (!confirm(`¿Quitar la foto de ${shortName(j.nombre)}? Se borra en el Centro y en Partido en vivo.`)) return;
    S.busy = true; render();
    try { await window.quitarFoto(j.id); aplicarImagenes(window.imagenesGuardadas()); toast("Foto quitada."); }
    catch (e) { toast("No se pudo quitar la foto: " + ((e && e.message) || "sin señal")); }
    S.busy = false; render(); return;
  }
  const v = t.dataset.v, ret = v === "Retirado", pro = v === "Promovido";
  let destino = "";
  if (pro) { destino = prompt(`¿A qué equipo o categoría pasa ${shortName(j.nombre)}? (por ejemplo: Sub-17A)`, ""); if (destino === null) return; destino = destino.trim().slice(0, 40); if (!destino) { toast("Escribe el equipo de destino."); return; } }
  else if (!confirm(ret ? `¿Marcar a ${j.nombre} como retirado del equipo? Se conserva su historial y se quita su acceso a «Mi progreso».` : `¿Reincorporar a ${j.nombre} al equipo?`)) return;
  S.busy = true; render();
  try {
    await window.puenteDT({ op: "set", range: `Plantilla!P${j.row}`, values: [[v]] });
    if (ret) { try { await window.puenteDT({ op: "jugQuitar", id: j.id }); } catch (e) {} }
    if (pro || v === "Activo") {
      const data = { promo: pro ? { a: destino, ts: Date.now() } : null }, ruta = "comunidad/" + j.id;
      try { const w = await window.puenteDT({ op: "escribir", ops: [{ id: "g1", tipo: "update", ruta, data }] }); if (pro && !(w.resultados || []).every(x => x.ok)) await window.puenteDT({ op: "escribir", ops: [{ id: "g2", tipo: "set", ruta, data }] }); } catch (e) {}
    }
    toast(pro ? `${shortName(j.nombre)} promovido a ${destino}. Se publica en el muro.` : ret ? "Jugador marcado como retirado." : "Jugador reincorporado.");
    S.busy = false; await loadAll();
  } catch (e) { toast("No se pudo guardar: " + gsErrorText(e)); }
  S.busy = false; render();
});

/* ---------- Comunidad (v2.2): aprobar perfiles, anuncios, muro y visibilidad ---------- */
const CM = { d: LS.get("com", null), busy: null, err: null, t: 0, ver: {} };
const RXI = { aplauso: "👏", fuego: "🔥", fuerza: "💪", corazon: "❤️", balon: "⚽" };
const ICOM = { victoria: "🏆", mvp: "⭐", gol: "⚽", hattrick: "⚽⚽⚽", asis: "🎯", valla: "🧤", debut: "🌟", test: "📈", cumple: "🎂", anuncio: "📣", promocion: "🚀", post: "💬" };
async function comCargar(force) {
  if (CM.busy || (!force && Date.now() - CM.t < 30000)) return;
  CM.busy = "carga"; render();
  try { CM.d = await window.puenteDT({ op: "comMuro" }, 90000); CM.err = null; LS.set("com", CM.d); }
  catch (e) { CM.err = e && e.code === "operacion_desconocida" ? "Falta actualizar el puente a la versión 12. Pega el código nuevo en Apps Script y publica una versión nueva." : e && e.code === "server_unavailable" ? "Sin señal: se muestra la última copia." : gsErrorText(e); }
  CM.t = Date.now(); CM.busy = null; render();
}
async function comEscribir(ops, ok) {
  if (CM.busy) return; CM.busy = "w"; render();
  try {
    const r = await window.puenteDT({ op: "escribir", ops: ops.map((o, i) => Object.assign({ id: "c" + Date.now() + i }, o)) });
    if (!(r.resultados || []).every(x => x.ok)) throw { code: "tool_error", message: "La base no aceptó el cambio" };
    toast(ok); CM.busy = null; CM.t = 0; await comCargar(true);
  } catch (e) { CM.busy = null; toast("No se pudo guardar: " + ((e && e.message) || "sin señal")); render(); }
}
/* Cambia solo los campos indicados del documento (si no existe, lo crea): no borra emoji, gustos ni ascenso. */
async function comUpsert(ruta, data, ok) {
  if (CM.busy) return; CM.busy = "w"; render();
  try {
    let w = await window.puenteDT({ op: "escribir", ops: [{ id: "u" + Date.now(), tipo: "update", ruta, data }] });
    if (!(w.resultados || []).every(x => x.ok)) w = await window.puenteDT({ op: "escribir", ops: [{ id: "s" + Date.now(), tipo: "set", ruta, data }] });
    if (!(w.resultados || []).every(x => x.ok)) throw { message: "La base no aceptó el cambio" };
    toast(ok); CM.busy = null; CM.t = 0; await comCargar(true);
  } catch (e) { CM.busy = null; toast("No se pudo guardar: " + ((e && e.message) || "sin señal")); render(); }
}
window.vComunidad = function () {
  setTimeout(() => comCargar(false), 0);
  const d = CM.d;
  let h = `${subnav(SUBJ, "comunidad")}<h2>Comunidad</h2>${CM.err ? `<div class="banner ${d ? "warn" : "err"}">${esc(CM.err)}</div>` : ""}`;
  if (!d) return h + `<section class="sec"><p class="empty">${CM.busy ? "Cargando…" : "Toca Actualizar."}</p><button class="btn sm" data-act="cm-reload">Actualizar</button></section>`;
  const pend = d.perfiles.filter(p => p.prop);
  h += `<section class="sec"><div class="sec-h"><h3>Por aprobar</h3><span class="hint">${pend.length}</span></div>${pend.length ? `<div class="list">${pend.map(p => { const j = jById(p.id) || { id: p.id, nombre: p.nombre };
    return `<div class="ccard"><div class="att-top">${avatar(j, "sm")}<div class="meta" style="flex:1;min-width:0"><span class="nm" style="font-weight:700">${esc(p.nombre)}</span>${p.prop.apodo ? `<span class="sub">Apodo: <b style="color:var(--ink)">${esc(p.prop.apodo)}</b>${p.apodo && p.apodo !== p.prop.apodo ? ` (antes: ${esc(p.apodo)})` : ""}</span>` : '<span class="sub">Sin apodo</span>'}</div></div>
      ${p.prop.desc ? `<p style="margin:0">“${esc(p.prop.desc)}”</p>` : '<p class="hint">Sin descripción</p>'}
      <div class="fgrid"><button class="btn sm" data-act="cm-rech" data-id="${p.id}" ${CM.busy ? "disabled" : ""}>Rechazar</button><button class="btn pri sm" data-act="cm-ok" data-id="${p.id}" ${CM.busy ? "disabled" : ""}>Aprobar</button></div></div>`; }).join("")}</div>` : '<p class="empty">No hay perfiles por aprobar.</p>'}</section>`;
  const pp = (d.posts || []).filter(x => x.estado === "pendiente");
  h += `<section class="sec"><div class="sec-h"><h3>Publicaciones por aprobar</h3><span class="hint">${pp.length}</span></div>${pp.length ? `<div class="list">${pp.map(x => { const j = jById(x.autor) || { id: x.autor, nombre: x.nombre }, f = x.foto && window.foto(x.foto);
    return `<div class="ccard"><div class="att-top">${avatar(j, "sm")}<div class="meta" style="flex:1;min-width:0"><span class="nm" style="font-weight:700">${esc(x.nombre)}</span><span class="sub">${esc(dLong(new Date(x.ts)))}</span></div></div>
      ${x.texto ? `<p style="margin:0;white-space:pre-line">${esc(x.texto)}</p>` : ""}${x.foto ? (f ? `<img src="${f}" alt="Foto de la publicación" style="width:100%;max-height:360px;object-fit:cover;border-radius:12px">` : '<p class="hint">Cargando foto…</p>') : ""}
      <div class="fgrid"><button class="btn sm" data-act="cm-prech" data-id="${esc(x.id)}" ${CM.busy ? "disabled" : ""}>Rechazar</button><button class="btn pri sm" data-act="cm-pok" data-id="${esc(x.id)}" ${CM.busy ? "disabled" : ""}>Aprobar y publicar</button></div></div>`; }).join("")}</div>` : '<p class="empty">No hay publicaciones por aprobar.</p>'}</section>`;
  if (d.emojis) {
    const G = d.gustos || [], dt = d.dt || {}, gu = CM.gu || (CM.gu = JSON.parse(JSON.stringify(dt.tags || {})));
    h += `<section class="sec"><div class="sec-h"><h3>Mi perfil de entrenador</h3>${dt.emo ? `<span style="font-size:1.6rem">${dt.emo}</span>` : ""}</div>
      <p class="hint">Tu emoji del día (24 horas) y tus gustos se ven en tu tarjeta de «Equipo». Los demás datos salen de Config (filas «Perfil DT · …»).</p>
      <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px">${d.emojis.map(x => `<button class="btn sm" style="font-size:1.25rem;padding:0;min-height:40px;${dt.emo === x ? "border:2px solid var(--accent);background:var(--sky-soft)" : ""}" data-act="cm-emo" data-v="${x}" ${CM.busy ? "disabled" : ""}>${x}</button>`).join("")}</div>
      ${dt.emo ? `<button class="btn sm" data-act="cm-emo" data-v="" style="align-self:flex-start" ${CM.busy ? "disabled" : ""}>Quitar emoji</button>` : ""}
      ${G.map(g => { const sel = gu[g.k] || []; return `<div><span class="hint" style="font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:.74rem">${esc(g.t)} · ${sel.length}/${g.max}</span><div class="row" style="gap:6px;margin-top:6px">${g.l.map(x => { const on = sel.includes(x); return `<button class="fchip" aria-pressed="${on}" data-act="cm-tag" data-k="${g.k}" data-v="${esc(x)}" ${!on && sel.length >= g.max && g.max > 1 ? "disabled" : ""}>${esc(x)}</button>`; }).join("")}</div></div>`; }).join("")}
      <button class="btn pri" data-act="cm-gustos" ${CM.busy ? "disabled" : ""}>Guardar mis gustos</button></section>`;
  }
  h += `<section class="sec"><h3>Anuncio en el muro</h3><label class="f">Texto<textarea id="cm-anuncio" rows="2" maxlength="280" placeholder="Ej.: Mañana entreno a las 3 p. m. en la sede.">${esc(CM.borrador || "")}</textarea></label>
    <button class="btn pri" data-act="cm-pub" ${CM.busy ? "disabled" : ""}>Publicar anuncio</button>
    ${d.anuncios.length ? `<div class="list">${d.anuncios.sort((a, b) => b.ts - a.ts).map(a => `<div class="li"><div class="meta"><span class="nm">📣 ${esc(a.texto)}</span><span class="sub">${esc(dLong(new Date(a.ts)))}</span></div><button class="btn sm" data-act="cm-borrar" data-id="${esc(a.id)}" ${CM.busy ? "disabled" : ""}>Borrar</button></div>`).join("")}</div>` : ""}</section>`;
  h += `<section class="sec"><div class="sec-h"><h3>Muro</h3><button class="btn sm" data-act="cm-reload" ${CM.busy ? "disabled" : ""}>${CM.busy === "carga" ? "Cargando…" : "Actualizar"}</button></div>
    <p class="hint">Jugadores y familias ven solo los totales de reacciones. Tú ves quién reaccionó. Lo oculto no lo ve nadie más.</p>
    ${d.muro.length ? `<div class="list">${d.muro.map(p => { const c = {}; p.quien.forEach(q => c[q.tipo] = (c[q.tipo] || 0) + 1); const open = CM.ver[p.id];
      return `<div class="ccard" style="${p.oculto ? "opacity:.55" : ""}"><div class="att-top"><span style="font-size:1.4rem">${ICOM[p.tipo] || "⭐"}</span><div class="meta" style="flex:1;min-width:0"><span class="nm" style="font-weight:700">${p.tipo === "post" ? esc(p.autor) + ": " : ""}${esc(p.texto)}</span><span class="sub">${esc(p.fecha)}${p.oculto ? " · oculta" : ""}</span></div>${p.tipo === "post" ? `<button class="btn sm" data-act="cm-pdel" data-id="${esc(p.id.replace(/^post_/, ""))}" ${CM.busy ? "disabled" : ""}>Borrar</button>` : ""}<button class="btn sm" data-act="cm-oc" data-id="${esc(p.id)}" data-v="${p.oculto ? 0 : 1}" ${CM.busy ? "disabled" : ""}>${p.oculto ? "Mostrar" : "Ocultar"}</button></div>
        ${p.quien.length ? `<button class="linkbtn" data-act="cm-ver" data-id="${esc(p.id)}">${Object.keys(c).map(k => RXI[k] + " " + c[k]).join("  ")} · ${open ? "ocultar nombres" : "ver quién"}</button>${open ? `<p class="hint" style="margin:0">${p.quien.map(q => esc(q.nombre) + " " + (RXI[q.tipo] || "")).join(" · ")}</p>` : ""}` : '<span class="hint">Sin reacciones</span>'}</div>`; }).join("")}</div>` : '<p class="empty">Aún no hay publicaciones.</p>'}</section>`;
  h += `<section class="sec"><h3>Perfiles y visibilidad</h3><p class="hint">Si una familia prefiere que su hijo no aparezca en Equipo ni en el Muro, apaga «Visible». Él sigue viendo su propio progreso.</p>
    <div class="list">${d.perfiles.map(p => { const j = jById(p.id) || { id: p.id, nombre: p.nombre };
      const nt = Object.values(p.tags || {}).reduce((a, x) => a + (x || []).length, 0);
      return `<div class="li">${avatar(j, "sm")}<div class="meta"><span class="nm">${p.emo ? p.emo + " " : ""}${esc(p.nombre)}${p.apodo ? ` <span class="chip b">${esc(p.apodo)}</span>` : ""}</span><span class="sub">${p.desc ? esc(p.desc) : "Sin descripción aprobada"}${nt ? ` · ${nt} gustos` : ""}</span>${p.emo ? `<button class="linkbtn" data-act="cm-quitaremo" data-id="${p.id}">Quitar su emoji</button>` : ""}</div>
        <label class="row" style="gap:6px;font-size:.85rem;font-weight:700;flex:none"><input type="checkbox" data-act="cm-vis" data-id="${p.id}" ${p.visible ? "checked" : ""} ${CM.busy ? "disabled" : ""} style="width:22px;height:22px">Visible</label></div>`; }).join("")}</div></section>`;
  return h;
};
document.addEventListener("input", ev => { if (ev.target.id === "cm-anuncio") CM.borrador = ev.target.value; });
document.addEventListener("click", ev => {
  const t = ev.target.closest("[data-act^='cm-']"); if (!t || !CM.d) return;
  const a = t.dataset.act, id = t.dataset.id, P = id && CM.d.perfiles.find(x => x.id === id);
  const full = p => ({ apodo: p.apodo || "", desc: p.desc || "", prop: p.prop || null, rech: p.rech || null, visible: p.visible !== false });
  if (a === "cm-reload") { comCargar(true); return; }
  if (a === "cm-ver") { CM.ver[id] = !CM.ver[id]; render(); return; }
  if (a === "cm-tag") { const g = (CM.d.gustos || []).find(x => x.k === t.dataset.k), v = t.dataset.v, arr = CM.gu[g.k] = CM.gu[g.k] || []; const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else if (g.max === 1) arr.splice(0, 1, v); else if (arr.length < g.max) arr.push(v); render(); return; }
  if (!navigator.onLine) { toast("Se necesita señal para este cambio."); ev.preventDefault(); return; }
  if (a === "cm-ok" && P) comUpsert("comunidad/" + id, { apodo: P.prop.apodo || "", desc: P.prop.desc || "", prop: null, rech: null }, "Perfil aprobado.");
  else if (a === "cm-rech" && P) { const m = prompt("Motivo para el jugador (opcional):", ""); if (m === null) return; comUpsert("comunidad/" + id, { prop: null, rech: { motivo: m.trim().slice(0, 200), ts: Date.now() } }, "Propuesta rechazada."); }
  else if (a === "cm-vis" && P) comUpsert("comunidad/" + id, { visible: t.checked }, t.checked ? "Visible para el equipo." : "Oculto para el equipo.");
  else if (a === "cm-oc") { const ids = {}; CM.d.muro.forEach(p => { if (p.oculto) ids[p.id] = true; }); if (t.dataset.v === "1") ids[id] = true; else delete ids[id]; comEscribir([{ tipo: "set", ruta: "comunidad/ocultos", data: { ids } }], t.dataset.v === "1" ? "Publicación oculta." : "Publicación visible."); }
  else if (a === "cm-pub") { const x = String(CM.borrador || "").trim(); if (!x) { toast("Escribe el anuncio."); return; } comEscribir([{ tipo: "set", ruta: "anuncios/a" + Date.now().toString(36), data: { texto: x.slice(0, 280), ts: Date.now() } }], "Anuncio publicado."); CM.borrador = ""; }
  else if (a === "cm-pok") comEscribir([{ tipo: "update", ruta: "posts/" + id, data: { estado: "aprobado", tsAprob: Date.now(), motivo: "" } }], "Publicación aprobada.");
  else if (a === "cm-prech") { const m = prompt("Motivo para el jugador (opcional):", ""); if (m === null) return; comEscribir([{ tipo: "update", ruta: "posts/" + id, data: { estado: "rechazado", motivo: m.trim().slice(0, 200) } }], "Publicación rechazada."); }
  else if (a === "cm-pdel") { if (!confirm("¿Borrar esta publicación del muro? No se puede deshacer.")) return; const x = (CM.d.posts || []).find(q => q.id === id); comEscribir([{ tipo: "delete", ruta: "posts/" + id }], "Publicación borrada.").then(() => { if (x && x.foto) window.puenteDT({ op: "fotoBorrar", id: x.foto }).catch(() => {}); }); }
  else if (a === "cm-emo") { const dt = CM.d.dt || {}; comEscribir([{ tipo: "set", ruta: "comunidad/DT", data: { emo: t.dataset.v ? { e: t.dataset.v, ts: Date.now() } : null, tags: dt.tags || {} } }], t.dataset.v ? "Emoji del día publicado." : "Emoji quitado."); }
  else if (a === "cm-gustos") { const dt = CM.d.dt || {}; comEscribir([{ tipo: "set", ruta: "comunidad/DT", data: { emo: dt.emoRaw || null, tags: CM.gu || {} } }], "Gustos guardados."); CM.gu = null; }
  else if (a === "cm-quitaremo" && P) comUpsert("comunidad/" + id, { emo: null }, "Emoji quitado.");
  else if (a === "cm-borrar") { if (!confirm("¿Borrar este anuncio del muro?")) return; comEscribir([{ tipo: "delete", ruta: "anuncios/" + id }], "Anuncio borrado."); }
});
})();

  })(doc,loc);
  return {aviso(){__hashL.forEach(f=>{try{f()}catch(e){console.error(e)}})}};
};
})();
