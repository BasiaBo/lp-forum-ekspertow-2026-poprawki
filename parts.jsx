// =============================================
// Speakers, Tickets, FAQ, Footer
// =============================================

const { useState: useStateB, useEffect: useEffectB } = React;

function EarlyBirdBanner() {
  const [tick, setTick] = useStateB(0);
  useEffectB(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date("2026-06-30T23:59:59");
  const diff = Math.max(0, target - new Date());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff % 86400000 / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);
  const expired = diff === 0;

  return (
    <div className="promo-banner">
      <div className="promo-banner-left">
        <div className="promo-banner-label">
          <span className="promo-dot"></span>
          Cena promocyjna · do 30.06.2026
        </div>
        <div className="promo-banner-body">
          <strong>15% zniżki</strong> na wszystkie bilety przy zakupie do końca czerwca. Rabat naliczany automatycznie w formularzu.
        </div>
      </div>
      {!expired ? (
        <div className="promo-countdown">
          <div className="promo-countdown-label">Koniec promocji za</div>
          <div className="promo-countdown-nums">
            <div className="promo-cd-unit"><span className="promo-n">{String(d).padStart(2,'0')}</span><span className="promo-u">dni</span></div>
            <div className="promo-cd-sep">:</div>
            <div className="promo-cd-unit"><span className="promo-n">{String(h).padStart(2,'0')}</span><span className="promo-u">godz</span></div>
            <div className="promo-cd-sep">:</div>
            <div className="promo-cd-unit"><span className="promo-n">{String(m).padStart(2,'0')}</span><span className="promo-u">min</span></div>
            <div className="promo-cd-sep">:</div>
            <div className="promo-cd-unit"><span className="promo-n">{String(s).padStart(2,'0')}</span><span className="promo-u">sek</span></div>
          </div>
        </div>
      ) : (
        <div className="promo-expired">Promocja zakończona</div>
      )}
    </div>
  );
}

function Speakers() {
  return (
    <section className="speakers section-pad" id="prelegenci">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="award">Prelegenci 2026</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Eksperci, którzy<br/><span className="text-blue">znają praktykę.</span>
            </h2>
          </div>
          <p className="lead">
            Radcowie prawni, partnerzy kancelarii, praktycy z&nbsp;największych polskich firm i&nbsp;organizacji. Każdy z&nbsp;nich pracuje codziennie z&nbsp;tematami, o&nbsp;których mówi ze sceny.
          </p>
        </div>

        <div className="speakers-grid">
          {window.SPEAKERS.map((s, i) => (
            <div className={`speaker${s.placeholder ? ' speaker-placeholder' : ''}`} key={i}>
              <div className="portrait">
                {s.placeholder
                  ? <><div className={`ph ph-v${s.v} ph-placeholder`}></div><div className="initial placeholder-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                    </div></>
                  : s.photo
                    ? <img src={s.photo} alt={s.name} className="portrait-img"/>
                    : <><div className={`ph ph-v${s.v}`}></div><div className="initial">{s.initial}</div></>
                }
              </div>
              {s.placeholder
                ? <><div className="name speaker-tba">Prelegent TBA</div><div className="role speaker-tba-role">Informacja wkrótce</div></>
                : <><div className="name">{s.name}</div><div className="role">{s.role}</div></>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Organizer() {
  return (
    <section className="organizer-section section-pad" id="organizator">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="shield">Organizator</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Organizator <span className="text-blue">konferencji.</span>
            </h2>
          </div>
          <p className="lead">
            XXIV Ogólnopolskie Kadrowo-Płacowe Forum Ekspertów organizowane jest przez Portal Kadrowy — lidera wiedzy z zakresu kadr, płac i&nbsp;prawa pracy w&nbsp;Polsce.
          </p>
        </div>

        <div className="organizer-logo-slot">
          <img src="assets/logo-portal-kadrowy.svg" alt="Portal Kadrowy" className="organizer-logo-img"/>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const logos = [
    { src: "assets/partner1.png", alt: "Partner 1" },
    { src: "assets/partner2.png", alt: "Partner 2" },
    null, null, null, null,
  ];
  return (
    <section className="partners-section section-pad" id="partnerzy">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="award">Partnerzy</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Partnerzy <span className="text-blue">konferencji.</span>
            </h2>
          </div>
          <p className="lead">
            Dziękujemy partnerom, których wsparcie współtworzy najważniejsze spotkanie środowiska kadrowo-płacowego w Polsce.
          </p>
        </div>

        <div className="partners-grid">
          {logos.map((p, i) => (
            <div className={`partner-logo-slot${p ? ' partner-logo-slot--filled' : ''}`} key={i} aria-label={p ? p.alt : `Miejsce na logo partnera ${i + 1}`}>
              {p
                ? <img src={p.src} alt={p.alt} className="partner-logo-img"/>
                : <span className="partner-logo-label">Logo partnera</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tickets() {
  const [selected, setSelected] = useStateB(1);
  const [form, setForm] = useStateB({ name: '', email: '', company: '', nip: '', count: 1, invoice: true, marketing: false });

  const t = window.TICKETS[selected];
  const total = t.price * (form.count || 1);

  function submit(e) {
    e.preventDefault();
    alert(`Dziękujemy! Wysłaliśmy potwierdzenie zamówienia na ${form.email || 'twój e-mail'}.`);
  }

  return (
    <section className="tickets section-pad" id="bilety">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="ticket">Bilety</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Wybierz<br/><span className="text-blue">swój bilet.</span>
            </h2>
          </div>
          <p className="lead">
            Dwie formy uczestnictwa — udział stacjonarny lub udział stacjonarny z&nbsp;warsztatami drugiego dnia. Wszystkie ceny netto, faktura w&nbsp;ciągu 24 godzin.
          </p>
        </div>

        <div className="tickets-grid">
          {window.TICKETS.map((tk, i) => (
            <div
              key={i}
              className={`ticket ${selected === i ? 'active' : ''} ${tk.featured ? 'featured' : ''}`}
              onClick={() => { setSelected(i); setTimeout(() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }}
            >
              <div className="t-head">
                <div>
                  <div className="t-type">{tk.type}</div>
                  <h3 style={{ marginTop: 6 }}>{tk.name}</h3>
                </div>
                <div className={`ticket-radio ${selected === i ? 'checked' : ''}`}>
                  {selected === i && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className="price">
                <span className="v">{tk.price}</span>
                <span className="currency">zł</span>
                <span className="net">{tk.netInfo}</span>
              </div>
              <ul className="feat">
                {tk.feat.map((f, fi) => (
                  typeof f === 'string'
                    ? <li key={fi}>{f}</li>
                    : <li key={fi} className="no">{f.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <EarlyBirdBanner/>

        {/* Form */}
        <div className="order-form-wip" id="order-form">
          <window.Eyebrow icon="ticket">Formularz zamówienia</window.Eyebrow>
          <h3 className="display order-form-wip-title">Zarezerwuj miejsce.</h3>
          <div className="order-form-wip-box">
            <div className="order-form-wip-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-4 0v2"/>
                <path d="M8 7V5a2 2 0 0 1 4 0"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <div>
              <div className="order-form-wip-label">Miejsce na formularz WIP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = 'text', required, min, max }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, color: 'var(--ink-soft)', fontWeight: 600 }}>
        {label}{required && ' *'}
      </span>
      <input
        type={type}
        value={value}
        min={min}
        max={max}
        required={required}
        onChange={e => onChange(e.target.value)}
        style={{
          padding: '14px 16px',
          border: '1.5px solid var(--line)',
          borderRadius: 10,
          fontSize: 15,
          fontFamily: 'var(--sans)',
          background: 'var(--blue-soft-2)',
          outline: 'none',
          transition: 'border-color .15s, background .15s',
          color: 'var(--ink)',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.background = 'white'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--line)'; e.target.style.background = 'var(--blue-soft-2)'; }}
      />
    </label>
  );
}

function FAQSection() {
  const [open, setOpen] = useStateB(0);
  return (
    <section className="faq section-pad" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <window.Eyebrow icon="help">FAQ</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Najczęstsze<br/><span className="text-blue">pytania.</span>
            </h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '34ch', marginTop: 24, lineHeight: 1.5 }}>
              Nie znalazłeś odpowiedzi? Napisz na <a href="mailto:kontakt@portalkadrowy.pl" style={{ color: 'var(--blue)', textDecoration: 'underline', textUnderlineOffset: 4 }}>kontakt@portalkadrowy.pl</a> lub zadzwoń pod +48 22 000 00 00.
            </p>
          </div>
          <div className="faq-list">
            {window.FAQ.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="ic">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 8 11 13 6"/>
                    </svg>
                  </span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Organizator</h4>
            <div style={{ display: 'inline-flex', padding: '16px 22px', background: 'white', borderRadius: 14, marginBottom: 20 }}>
              <img src="assets/logo-portal-kadrowy.svg" alt="Portal Kadrowy — kadry, płace, ZUS, HR" style={{ height: 36, width: 'auto', display: 'block' }}/>
            </div>
            <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, maxWidth: '38ch' }}>
              Wydawca <strong style={{ color: 'white' }}>portalkadrowy.pl</strong> — specjalistyczny portal dla działów kadr i płac. Od 2002 roku organizujemy największą polską konferencję poświęconą prawu pracy.
            </div>
          </div>
          <div>
            <h4>Kontakt</h4>
            <div className="contact">
              <strong style={{ color: 'white' }}>Wiedza i Praktyka Sp. z o.o.</strong><br/>
              <span style={{ opacity: 0.7 }}>ul. Łotewska 9A, 03-918 Warszawa</span><br/>
              <span style={{ opacity: 0.7 }}>NIP: 526-19-92-256</span><br/><br/>
              <a href="tel:+48225182929">22 518 29 29</a><br/>
              <a href="mailto:cok@wip.pl">cok@wip.pl</a>
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com/WiedzaiPraktyka/?locale=pl_PL" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/wip/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Partnerzy 2026</h4>
            <div className="partners">
              {[1,2,3,4,5,6].map(n => (
                <span className="partner-chip partner-chip-logo" key={n}>LOGO</span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Portal kadrowy · XXIV Forum Ekspertów</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Regulamin</a>
            <a href="#">Polityka prywatności</a>
            <a href="#">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyBuy() {
  return (
    <div className="sticky-buy">
      <div>
        <div className="lbl">Od</div>
        <div className="pr">999 zł</div>
      </div>
      <a href="#bilety" className="btn btn-primary" style={{ padding: '12px 18px', fontSize: 14 }}>
        Zarezerwuj miejsce <window.ArrowRight size={12}/>
      </a>
    </div>
  );
}

Object.assign(window, { Speakers, Organizer, Partners, Tickets, FAQSection, Footer, StickyBuy });
