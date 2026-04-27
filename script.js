const PALETTE = [{ bg: '#E6F1FB', text: '#0C447C' }, { bg: '#E1F5EE', text: '#085041' }, { bg: '#FAEEDA', text: '#633806' }, { bg: '#EEEDFE', text: '#3C3489' }, { bg: '#FAECE7', text: '#712B13' }, { bg: '#FBEAF0', text: '#72243E' }, { bg: '#EAF3DE', text: '#27500A' }, { bg: '#F1EFE8', text: '#444441' }];
const WORDS = ['Discover', 'Buildify', 'Launchpad', 'Creatix', 'Exploron', 'Notionix', 'Lumenary', 'Vortexio'];
const LINKS = ['Home', 'About', 'Work', 'Contact', 'Blog', 'Pricing', 'Docs', 'Team'];
const CARD_LABELS = ['Active Users', 'Revenue', 'Sessions', 'Bounce Rate', 'Reports', 'Overview'];
const TEXTS = ['Streamline your workflow with modern tools built for scale.', 'Built for teams who move fast and think big — every single day.', 'Simple. Powerful. Reliable. Everything your team actually needs.', 'Your data, your rules, your way forward. Always and forever.', 'Automate the repetitive. Focus on what actually moves the needle.'];
const HEADINGS = ['Welcome back', 'Getting started', 'Your dashboard', "What's new today", 'Key insights', 'Quick overview', 'Built for scale', 'Ship faster, together'];
const SUBHEADINGS = ['Track your progress', 'Explore the features', 'Manage your workspace', 'See the latest updates', 'Monitor performance'];
const BTNS = ['Get started', 'Learn more', 'Sign up free', 'Try for free', 'See the demo', 'Explore now', 'View all', 'Go to dashboard'];
const BADGE_LABELS = ['New', 'Beta', 'Pro', 'Free', 'v2.0', 'Live', 'Early Access', 'Just shipped'];
const FEATURE_TITLES = ['Fast delivery', 'Smart sync', 'Easy export', 'Auto backup', 'Live preview', 'Team access', 'Role control', 'One-click deploy'];
const FEATURE_DESCS = ['Works instantly across all your devices.', 'Stays in sync, always up to date in real time.', 'Export your data in one click, any format.', 'Never lose your work with automatic backups.', 'See changes as they happen across your team.', 'Collaborate with your whole team seamlessly.', 'Set permissions for every member, granularly.', 'Push to production without leaving the app.'];
const LIST_ITEMS = ['Unlimited projects', 'Real-time updates', 'Priority support', 'Custom domains', 'Advanced analytics', 'API access', 'Version history', 'SSO & SAML', 'Custom integrations'];
const TAG_WORDS = ['design', 'development', 'research', 'ux', 'frontend', 'data', 'api', 'mobile', 'cloud', 'auth', 'security', 'performance'];
const AVATAR_NAMES = ['Alex Morgan', 'Sam Chen', 'Priya Nair', 'Jordan Lee', 'Maya Patel', 'Chris Wu', 'Dana Kim'];
const AVATAR_ROLES = ['Product Designer', 'Lead Engineer', 'Data Analyst', 'UX Researcher', 'Growth Lead', 'DevOps Lead', 'Brand Strategist'];
const QUOTES = ['The best tool we have used in years. Incredibly smooth and fast.', 'Finally a product that just works without any of the friction.', 'Our team productivity doubled within the very first week of use.', 'Switching was the best decision our team made this quarter.'];
const STAT_LABELS = ['Uptime', 'Growth', 'Conversion', 'Retention', 'NPS Score', 'DAU', 'MRR', 'Churn'];
const TRENDS = [{ sym: '↑', color: '#1D9E75' }, { sym: '↓', color: '#D85A30' }, { sym: '→', color: '#888780' }];
const KPI_LABELS = ['Revenue', 'Users', 'Signups', 'Sessions'];
const KPI_VALS = [['$48.2k', '↑ 12% this month'], ['14,820', '↑ 8% this week'], ['3,041', '↑ 22% today'], ['92,400', '→ steady']];
const NAV_LAYOUTS = ['logo-spacer-links-extra', 'logo-links-spacer-extra', 'centered', 'left-all', 'right-all'];

const ZONE_PRESETS = [
    ['heading', 'text', 'btn', 'badge', 'divider', 'feature', 'feature'],
    ['heading', 'subheading', 'feature', 'feature', 'feature', 'btn', 'badge'],
    ['heading', 'stat', 'stat', 'stat', 'progress', 'badge', 'btn'],
    ['heading', 'subheading', 'list', 'tags', 'btn', 'badge', 'divider'],
    ['image', 'heading', 'text', 'btn', 'badge', 'feature', 'feature'],
    ['heading', 'text', 'tags', 'btn', 'stat', 'progress', 'badge'],
    ['quote', 'avatar', 'badge', 'divider', 'feature', 'feature', 'btn'],
    ['heading', 'progress', 'progress', 'progress', 'stat', 'badge', 'btn'],
    ['avatar', 'text', 'btn', 'divider', 'feature', 'feature', 'badge'],
    ['heading', 'feature', 'feature', 'list', 'btn', 'badge', 'divider'],
    ['kpi', 'progress', 'badge', 'feature', 'feature', 'text', 'btn'],
    ['image', 'heading', 'text', 'stat', 'stat', 'badge', 'btn'],
    ['heading', 'tags', 'list', 'feature', 'btn', 'badge', 'divider'],
    ['feature', 'feature', 'feature', 'divider', 'text', 'btn', 'badge'],
    ['heading', 'quote', 'btn', 'divider', 'stat', 'progress', 'badge'],
    ['heading', 'avatar', 'text', 'badge', 'feature', 'feature', 'btn'],
    ['subheading', 'list', 'tags', 'feature', 'btn', 'badge', 'divider'],
    ['heading', 'stat', 'text', 'progress', 'feature', 'badge', 'btn'],
    ['heading', 'kpi', 'btn', 'divider', 'feature', 'text', 'badge'],
    ['heading', 'feature', 'avatar', 'badge', 'list', 'btn', 'divider'],
    ['image', 'stat', 'stat', 'heading', 'text', 'badge', 'btn'],
    ['heading', 'subheading', 'feature', 'feature', 'list', 'btn', 'badge'],
    ['heading', 'text', 'list', 'btn', 'divider', 'stat', 'badge'],
    ['stat', 'stat', 'progress', 'badge', 'feature', 'text', 'btn'],
    ['heading', 'text', 'feature', 'feature', 'feature', 'badge', 'btn'],
    ['kpi', 'stat', 'progress', 'feature', 'btn', 'badge', 'divider'],
    ['heading', 'quote', 'avatar', 'feature', 'btn', 'badge', 'text'],
    ['image', 'heading', 'subheading', 'list', 'btn', 'badge', 'divider'],
    ['heading', 'feature', 'feature', 'progress', 'stat', 'btn', 'badge'],
    ['subheading', 'feature', 'feature', 'feature', 'tags', 'btn', 'badge'],
];

let running = false;
const delay = ms => new Promise(r => setTimeout(r, ms));
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = arr => arr[rand(0, arr.length - 1)];
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const conLines = document.getElementById('con-lines');

function clog(msg) {
    const line = document.createElement('div');
    line.className = 'con-line';
    line.innerHTML = `<span class="con-prompt">›</span>${msg}`;
    conLines.appendChild(line);
    [...conLines.children].forEach((l, i, a) => { if (i < a.length - 1) l.classList.add('dim'); });
    while (conLines.children.length > 9) conLines.removeChild(conLines.firstChild);
}

const dot = document.getElementById('bot-dot');
function moveDot(x, y) { const r = dot.offsetWidth / 2 || 8; dot.style.left = (x - r) + 'px'; dot.style.top = (y - r) + 'px'; }
function elCenter(el) { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
async function dotThink(ms = 750) { dot.style.animation = 'think 0.45s ease-in-out infinite'; await delay(ms); dot.style.animation = ''; }

async function typeInto(el, text, speed = 44) {
    const cur = document.createElement('span'); cur.className = 'tcursor'; el.appendChild(cur);
    for (let i = 0; i < text.length; i++) { if (!running) return; cur.insertAdjacentText('beforebegin', text[i]); await delay(speed + rand(-8, 12)); }
    cur.remove();
}

function makeShell(type) {
    const wrap = document.createElement('div'); wrap.className = 'slot-el'; wrap._type = type;
    const c = pick(PALETTE); wrap._pal = c;
    switch (type) {
        case 'logo': wrap.className += ' el-logo'; break;
        case 'links': wrap.className = 'el-links slot-el'; shuffle(LINKS).slice(0, rand(3, 5)).forEach(l => { const a = document.createElement('span'); a.className = 'el-link'; a._word = l; wrap.appendChild(a); }); break;
        case 'search': wrap.className += ' el-search'; wrap.innerHTML = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'; const sp = document.createElement('span'); wrap.appendChild(sp); wrap._span = sp; break;
        case 'btn': wrap.className += ' el-btn'; break;
        case 'card': { wrap.className += ' el-card'; wrap.style.background = c.bg; const lbl = document.createElement('div'); lbl.style.cssText = `font-size:13px;color:${c.text};opacity:0.7;margin-bottom:8px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;`; const val = document.createElement('div'); val.style.cssText = `font-size:34px;font-weight:600;color:${c.text};`; wrap.appendChild(lbl); wrap.appendChild(val); wrap._lbl = lbl; wrap._val = val; break; }
        case 'text': wrap.className += ' el-text'; break;
        case 'heading': wrap.className += ' el-heading'; break;
        case 'subheading': wrap.className += ' el-subheading'; break;
        case 'badge': wrap.className += ' el-badge'; wrap.style.cssText = `background:${c.bg};color:${c.text};`; break;
        case 'image': wrap.className += ' el-image'; wrap.style.background = c.bg; wrap.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="${c.text}" stroke-width="1.2"/><circle cx="8.5" cy="8.5" r="1.5" fill="${c.text}"/><path d="M3 16l5-5 4 4 3-3 6 6" stroke="${c.text}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`; break;
        case 'stat': { wrap.className += ' el-stat'; const sl = document.createElement('div'); sl.className = 'el-stat-label'; const sv = document.createElement('div'); sv.className = 'el-stat-val'; const st = document.createElement('div'); st.className = 'el-stat-trend'; const tr = pick(TRENDS); st.style.color = tr.color; st._sym = tr.sym; wrap.appendChild(sl); wrap.appendChild(sv); wrap.appendChild(st); wrap._lbl = sl; wrap._val = sv; wrap._trend = st; break; }
        case 'progress': { wrap.className += ' el-progress-wrap'; const pl = document.createElement('div'); pl.className = 'el-progress-label'; const pb = document.createElement('div'); pb.className = 'el-progress-bar'; const pf = document.createElement('div'); pf.className = 'el-progress-fill'; const pct = rand(20, 92); pf.style.width = '0%'; pf.style.background = c.text; pb.appendChild(pf); wrap.appendChild(pl); wrap.appendChild(pb); wrap._lbl = pl; wrap._fill = pf; wrap._pct = pct; break; }
        case 'feature': { wrap.className += ' el-feature'; const fi = document.createElement('div'); fi.className = 'el-feature-icon'; fi.style.background = c.bg; fi.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="${c.text}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`; const ftw = document.createElement('div'); ftw.className = 'el-feature-text'; const ftt = document.createElement('div'); ftt.className = 'el-feature-title'; const ftd = document.createElement('div'); ftd.className = 'el-feature-desc'; ftw.appendChild(ftt); ftw.appendChild(ftd); wrap.appendChild(fi); wrap.appendChild(ftw); wrap._title = ftt; wrap._desc = ftd; break; }
        case 'list': { wrap.className += ' el-list-wrap'; shuffle(LIST_ITEMS).slice(0, rand(4, 6)).forEach(it => { const row = document.createElement('div'); row.className = 'el-list-item'; const d = document.createElement('div'); d.className = 'el-list-dot'; const s = document.createElement('span'); s._word = it; d.style.background = c.text; row.appendChild(d); row.appendChild(s); wrap.appendChild(row); }); wrap._items = wrap.querySelectorAll('.el-list-item span'); break; }
        case 'tags': wrap.className += ' el-tags-wrap'; shuffle(TAG_WORDS).slice(0, rand(5, 8)).forEach(t => { const tag = document.createElement('div'); tag.className = 'el-tag slot-el'; tag._word = t; wrap.appendChild(tag); }); break;
        case 'avatar': { wrap.className += ' el-avatar-wrap'; const nm = pick(AVATAR_NAMES); const rl = pick(AVATAR_ROLES); const initials = nm.split(' ').map(w => w[0]).join(''); const circle = document.createElement('div'); circle.className = 'el-avatar-circle'; circle.style.cssText = `background:${c.bg};color:${c.text};`; circle.textContent = initials; const info = document.createElement('div'); info.className = 'el-avatar-info'; const aname = document.createElement('div'); aname.className = 'el-avatar-name'; const arole = document.createElement('div'); arole.className = 'el-avatar-role'; info.appendChild(aname); info.appendChild(arole); wrap.appendChild(circle); wrap.appendChild(info); wrap._name = aname; wrap._role = arole; wrap._nm = nm; wrap._rl = rl; break; }
        case 'quote': { wrap.className += ' el-quote-wrap'; const qt = document.createElement('div'); qt.className = 'el-quote-text'; wrap.appendChild(qt); wrap._qt = qt; break; }
        case 'divider': wrap.className += ' el-divider'; break;
        case 'kpi': { wrap.className += ' el-kpi-row'; const count = rand(2, 3); const picked = shuffle(KPI_LABELS).slice(0, count); const boxes = []; picked.forEach(label => { const kpi = document.createElement('div'); kpi.className = 'el-kpi'; kpi.style.background = c.bg; const klbl = document.createElement('div'); klbl.className = 'el-kpi-label'; klbl.style.color = c.text; const kval = document.createElement('div'); kval.className = 'el-kpi-val'; kval.style.color = c.text; const ksub = document.createElement('div'); ksub.className = 'el-kpi-sub'; ksub.style.color = c.text; const idx = KPI_LABELS.indexOf(label); klbl._word = label; kval._word = KPI_VALS[idx][0]; ksub._word = KPI_VALS[idx][1]; kpi.appendChild(klbl); kpi.appendChild(kval); kpi.appendChild(ksub); wrap.appendChild(kpi); boxes.push({ klbl, kval, ksub }); }); wrap._boxes = boxes; break; }
    }
    return wrap;
}

async function typeEl(el) {
    switch (el._type) {
        case 'logo': clog('typing logo...'); await typeInto(el, pick(WORDS), 58); break;
        case 'links': clog('typing nav links...'); for (const ch of el.children) { await typeInto(ch, ch._word, 50); await delay(70); } break;
        case 'search': clog('typing placeholder...'); await typeInto(el._span, 'Search...', 68); break;
        case 'btn': clog('typing button...'); await typeInto(el, pick(BTNS), 50); break;
        case 'card': clog('typing card...'); await typeInto(el._lbl, pick(CARD_LABELS), 48); await delay(120); await typeInto(el._val, String(rand(10, 999)), 75); break;
        case 'text': clog('typing text...'); await typeInto(el, pick(TEXTS), 26); break;
        case 'heading': clog('typing heading...'); await typeInto(el, pick(HEADINGS), 52); break;
        case 'subheading': clog('typing subheading...'); await typeInto(el, pick(SUBHEADINGS), 48); break;
        case 'badge': clog('typing badge...'); await typeInto(el, pick(BADGE_LABELS), 58); break;
        case 'image': clog('placing image...'); await delay(260); break;
        case 'stat': clog('typing stat...'); await typeInto(el._lbl, pick(STAT_LABELS), 46); await delay(100); await typeInto(el._val, rand(10, 99) + '%', 72); await delay(80); await typeInto(el._trend, el._trend._sym + ' ' + rand(1, 24) + '%', 60); break;
        case 'progress': clog('drawing progress...'); await typeInto(el._lbl, pick(STAT_LABELS), 46); await delay(160); el._fill.style.width = el._pct + '%'; await delay(950); break;
        case 'feature': { clog('typing feature...'); const idx = rand(0, FEATURE_TITLES.length - 1); await typeInto(el._title, FEATURE_TITLES[idx], 50); await delay(80); await typeInto(el._desc, FEATURE_DESCS[idx], 24); break; }
        case 'list': clog('typing list...'); for (const s of el._items) { await typeInto(s, s._word, 38); await delay(65); } break;
        case 'tags': clog('typing tags...'); for (const tag of el.children) { await typeInto(tag, tag._word, 50); await delay(50); } break;
        case 'avatar': clog('typing avatar...'); await typeInto(el._name, el._nm, 48); await delay(80); await typeInto(el._role, el._rl, 40); break;
        case 'quote': clog('typing quote...'); await typeInto(el._qt, pick(QUOTES), 24); break;
        case 'divider': clog('divider...'); await delay(160); break;
        case 'kpi': clog('typing KPI row...'); for (const box of el._boxes) { await typeInto(box.klbl, box.klbl._word, 46); await delay(60); await typeInto(box.kval, box.kval._word, 52); await delay(50); await typeInto(box.ksub, box.ksub._word, 36); await delay(80); } break;
    }
}

async function placeInto(container, type) {
    if (!running) return;
    const ghost = document.createElement('div'); ghost.style.cssText = 'width:4px;height:4px;opacity:0;'; container.appendChild(ghost); await delay(40);
    const gc = elCenter(ghost); moveDot(gc.x, gc.y); await delay(380); await dotThink(rand(480, 760));
    const el = makeShell(type); container.replaceChild(el, ghost); await delay(50);
    const ec = elCenter(el); moveDot(ec.x, ec.y); await typeEl(el); await delay(rand(200, 340));
}

async function buildNav(nav, layout) {
    nav.style.background = '#fff';
    if (layout === 'logo-spacer-links-extra') { nav.style.justifyContent = 'flex-start'; await placeInto(nav, 'logo'); const sp = document.createElement('div'); sp.style.flex = '1'; nav.appendChild(sp); await placeInto(nav, 'links'); await placeInto(nav, pick(['search', 'btn'])); }
    else if (layout === 'logo-links-spacer-extra') { nav.style.justifyContent = 'flex-start'; await placeInto(nav, 'logo'); await placeInto(nav, 'links'); const sp = document.createElement('div'); sp.style.flex = '1'; nav.appendChild(sp); await placeInto(nav, pick(['search', 'btn', 'badge'])); }
    else if (layout === 'centered') { nav.style.justifyContent = 'center'; await placeInto(nav, 'logo'); await placeInto(nav, 'links'); if (Math.random() > 0.5) await placeInto(nav, pick(['search', 'btn'])); }
    else if (layout === 'left-all') { nav.style.justifyContent = 'flex-start'; await placeInto(nav, 'logo'); await placeInto(nav, 'links'); if (Math.random() > 0.4) await placeInto(nav, pick(['btn', 'badge'])); }
    else if (layout === 'right-all') { nav.style.justifyContent = 'flex-start'; await placeInto(nav, 'logo'); const sp = document.createElement('div'); sp.style.flex = '1'; nav.appendChild(sp); await placeInto(nav, 'links'); await placeInto(nav, pick(['search', 'btn'])); if (Math.random() > 0.5) await placeInto(nav, 'badge'); }
}

async function runBot() {
    running = false; await delay(80); running = true;
    const rebuildBtn = document.getElementById('rebuild-inside');
    const consolEl = document.getElementById('bot-console');
    rebuildBtn.disabled = true; rebuildBtn.style.opacity = '0';
    const page = document.getElementById('bot-page');
    const nav = document.getElementById('bot-nav');
    const body = document.getElementById('bot-body');
    page.style.opacity = '0'; nav.innerHTML = ''; body.innerHTML = '';
    conLines.innerHTML = ''; dot.style.display = 'none'; dot.style.opacity = '0'; consolEl.style.opacity = '0';
    const bg = pick(PALETTE);
    const numZones = rand(2, 3);
    const cx = window.innerWidth / 2; const cy = window.innerHeight / 2;
    await delay(320);
    dot.style.display = 'block'; moveDot(cx, cy); dot.style.opacity = '1'; await delay(360); await dotThink(580);
    consolEl.style.opacity = '1'; clog('bot initialized'); await delay(280);
    clog('setting background...'); moveDot(cx, cy); await delay(380); await dotThink(440);
    page.style.background = bg.bg; page.style.opacity = '1'; clog('background set'); await delay(300);
    const navLayout = pick(NAV_LAYOUTS); clog('nav: ' + navLayout); await buildNav(nav, navLayout);
    clog('creating ' + numZones + ' zones...');
    const zones = [];
    const flexOptions = numZones === 2 ? [[1.8, 1], [1, 1], [1, 1.5], [1.4, 1], [1, 1.8]] : [[1, 1, 1], [1.5, 1, 1], [1, 1.2, 1], [1, 1, 1.5]];
    const flexSet = pick(flexOptions);
    for (let i = 0; i < numZones; i++) {
        if (!running) return;
        const zone = document.createElement('div'); zone.className = 'bot-zone'; zone.style.flex = flexSet[i] || 1;
        body.appendChild(zone); zones.push(zone); await delay(40);
        const zc = elCenter(zone); moveDot(zc.x, zc.y); await dotThink(340);
        clog('zone ' + (i + 1) + ' ready'); await delay(180);
    }
    const usedPresets = shuffle(ZONE_PRESETS);
    for (let i = 0; i < zones.length; i++) {
        if (!running) return;
        const preset = usedPresets[i];
        clog('--- zone ' + (i + 1) + ': ' + preset.length + ' items ---');
        for (const type of preset) { if (!running) return; clog('zone ' + (i + 1) + ' → ' + type); await placeInto(zones[i], type); }
        await delay(160);
    }
    moveDot(window.innerWidth - 24, 20); await delay(480); dot.style.opacity = '0'; await delay(320); dot.style.display = 'none';
    clog('✓ build complete'); rebuildBtn.disabled = false; rebuildBtn.style.opacity = '1';
}

document.getElementById('rebuild-inside').addEventListener('click', () => {
    if (!document.getElementById('rebuild-inside').disabled) runBot();
});
runBot();