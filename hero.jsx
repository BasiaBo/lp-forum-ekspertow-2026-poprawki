// =============================================
// Hero, Nav, Countdown, Stats
// =============================================

const { useState, useEffect, useRef } = React;

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}
function PlayIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M12 9l12 7-12 7V9z" fill="currentColor" />
    </svg>);

}
function LinkedInIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17C2.67 2 2 2.67 2 3.5v17c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5zM8 19H5V9h3v10zM6.5 7.7C5.5 7.7 4.7 6.9 4.7 6s.8-1.7 1.8-1.7S8.3 5.1 8.3 6 7.5 7.7 6.5 7.7zM19 19h-3v-5.6c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V19h-3V9h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z" />
    </svg>);

}

function ConfLogo() {
  return (
    <img
      src="assets/logo-konferencja.png"
      alt="Ogólnopolskie Kadrowo-Płacowe Forum Ekspertów"
      style={{ height: 56, width: 'auto', display: 'block' }} />);


}

const NAV_LINKS = [
  { href: "o-konferencji", label: "O konferencji" },
  { href: "filary",        label: "Tematy" },
  { href: "program",       label: "Program" },
  { href: "prelegenci",    label: "Prelegenci" },
  { href: "poprzednia-edycja", label: "Opinie" },
  { href: "warsztaty",     label: "Warsztaty" },
  { href: "bilety",        label: "Bilety" },
];

function Nav() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href);
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand" aria-label="XXIV Forum Ekspertów 2026 - strona główna">
          <ConfLogo />
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              className={`nav-link ${active === href ? 'active' : ''}`}
            >{label}</a>
          ))}
        </nav>
        <a href="#bilety" className="btn btn-primary nav-cta-pulse" style={{ padding: '12px 18px', fontSize: 14 }}>
          <span className="nav-cta-dot"></span>
          Zarezerwuj miejsce <ArrowRight size={12} />
        </a>
      </div>
    </header>
  );
}

function useCountdown(target) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const now = new Date();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff % 86400000 / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);
  return { d, h, m, s };
}

function Hero() {
  const target = new Date("2026-11-05T09:00:00");
  const cd = useCountdown(target);

  return (
    <section className="hero" id="top">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="wrap hero-inner">
<div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow-block">
              <span className="hero-edition-num">XXIV</span>
              <span className="hero-edition-label">Ogólnopolskie Kadrowo-Płacowe<br/>Forum Ekspertów</span>
            </div>

            <h1 className="hero-h1 display">
              <span className="accent">Bezpieczeństwo kadrowe</span><br/>w&nbsp;przełomowym 2026 roku.
            </h1>

            <p className="hero-lead">
              Spotkanie liderów HR, kadr i&nbsp;płac wokół czterech zmian regulacyjnych, które w&nbsp;2026 przekształcą polski rynek pracy.
            </p>

            <div className="hero-cta-row">
              <a href="#bilety" className="btn btn-primary">Zarezerwuj miejsce <ArrowRight /></a>
              <a href="#program" className="btn btn-ghost-light">Sprawdź program</a>
            </div>

            <div className="hero-event-meta">
              <div className="hem-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div><strong>5 listopada 2026</strong><span>czwartek, 9:00 — 17:00</span></div>
              </div>
              <div className="hem-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div><strong>Warsaw Plaza Hotel</strong><span>ul. Łączyny 5, Warszawa</span></div>
              </div>
              <div className="hem-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
                <div><strong>Transmisja na żywo online</strong><span>dostęp do nagrań przez 14 dni</span></div>
              </div>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-visual" role="button" tabIndex={0} aria-label="Odtwórz film z poprzedniej edycji">
              <div className="ph"></div>
              <div className="caption-top">Film · poprzednia edycja</div>
              <button className="play" aria-label="Odtwórz">
                <PlayIcon size={28} />
              </button>
            </div>

            <ul className="hero-topics" aria-label="Tematy konferencji">
              <li className="hero-topic" tabIndex={0} onClick={() => document.getElementById('pillar-pip')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <span className="num">01</span>
                <span>Nowelizacja ustawy o PIP</span>
                <ArrowRight size={12}/>
              </li>
              <li className="hero-topic" tabIndex={0} onClick={() => document.getElementById('pillar-jawnosc')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <span className="num">02</span>
                <span>Jawność wynagrodzeń&nbsp;i&nbsp;luka płacowa</span>
                <ArrowRight size={12}/>
              </li>
              <li className="hero-topic" tabIndex={0} onClick={() => document.getElementById('pillar-mobbing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <span className="num">03</span>
                <span>Procedury antymobbingowe</span>
                <ArrowRight size={12}/>
              </li>
              <li className="hero-topic" tabIndex={0} onClick={() => document.getElementById('panel-2027')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <span className="num">04</span>
                <span>Wyzwania pracodawców na&nbsp;2027</span>
                <ArrowRight size={12}/>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown">
        <div className="wrap">
          <div className="countdown-card">
            <div className="col">
              <div className="countdown-label">Do rozpoczęcia konferencji</div>
              <div className="countdown-date">5 listopada 2026</div>
            </div>
            <div className="countdown-nums">
              <div className="cd-unit"><div className="n">{String(cd.d).padStart(2, '0')}</div><div className="u">Dni</div></div>
              <div className="cd-unit"><div className="n">{String(cd.h).padStart(2, '0')}</div><div className="u">Godzin</div></div>
              <div className="cd-unit"><div className="n">{String(cd.m).padStart(2, '0')}</div><div className="u">Minut</div></div>
              <div className="cd-unit"><div className="n">{String(cd.s).padStart(2, '0')}</div><div className="u">Sekund</div></div>
            </div>
            <div className="countdown-cta">
              <a href="#bilety" className="btn btn-primary">Zarezerwuj miejsce <ArrowRight /></a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat">
            <div className="icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div className="n">8<span className="unit">h</span></div>
            <div className="l">sesji merytorycznych + panel dyskusyjny ekspertów</div>
          </div>
          <div className="stat">
            <div className="icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div className="n">10</div>
            <div className="l">ekspertów-praktyków polskiego prawa pracy</div>
          </div>
          <div className="stat">
            <div className="icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            </div>
            <div className="n">12</div>
            <div className="l">wykładów merytorycznych + drugi dzień warsztatów</div>
          </div>
          <div className="stat">
            <div className="icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>
            </div>
            <div className="n">6</div>
            <div className="l">stolików eksperckich — konsultacje 1:1 na miejscu</div>
          </div>
        </div>
      </div>
    </section>);

}

const EYEBROW_ICONS = {
  calendar:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  users:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  shield:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  mic:         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>,
  ticket:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>,
  help:        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  award:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  table:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="10" rx="2"/><line x1="8" y1="14" x2="6" y2="20"/><line x1="16" y1="14" x2="18" y2="20"/><line x1="5" y1="20" x2="19" y2="20"/></svg>,
  workshop:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  photo:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  pillars:     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><polyline points="4 6 5 7 7 5"/><polyline points="4 12 5 13 7 11"/><polyline points="4 18 5 19 7 17"/></svg>,
};

function Eyebrow({ icon, children, className = '' }) {
  return (
    <div className={`eyebrow ${className}`}>
      <span className="eyebrow-icon">{EYEBROW_ICONS[icon]}</span>
      {children}
    </div>
  );
}

Object.assign(window, { Nav, Hero, Stats, ArrowRight, PlayIcon, LinkedInIcon, Eyebrow });