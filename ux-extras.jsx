// =============================================
// UX components: Mid-page CTA banner + Desktop sticky CTA
// =============================================

const { useState: useStateUx, useEffect: useEffectUx } = React;

function MidCTA() {
  return (
    <section className="mid-cta" aria-label="Zarezerwuj miejsce">
      <div className="wrap">
        <div className="mid-cta-card">
          <div className="mid-cta-left">
            <div className="mid-cta-eyebrow">
              <span className="dot"></span>
              Bilety w sprzedaży · Early bird&nbsp;15%
            </div>
            <h3 className="mid-cta-title">
              Dołącz do <span className="text-accent">400+&nbsp;ekspertów</span> kadrowo-płacowych
            </h3>
            <div className="mid-cta-sub">
              Spotkamy się 5 listopada w Warsaw Plaza Hotel oraz online. Bilety od&nbsp;<strong>699&nbsp;zł netto</strong>.
            </div>
          </div>
          <div className="mid-cta-actions">
            <a href="#bilety" className="btn btn-primary" style={{ padding: '16px 26px', fontSize: 15 }}>
              Zarezerwuj miejsce <window.ArrowRight/>
            </a>
            <a href="#program" className="btn btn-ghost-light">Zobacz program</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopStickyCTA() {
  const [visible, setVisible] = useStateUx(false);
  const [dismissed, setDismissed] = useStateUx(false);

  useEffectUx(() => {
    function handler() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const tickets = document.getElementById('bilety');
      const ticketsTop = tickets ? tickets.getBoundingClientRect().top : 99999;
      // Show when past hero, hide when tickets section is visible
      setVisible(heroBottom < 0 && ticketsTop > window.innerHeight * 0.3);
    }
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (dismissed) return null;

  return (
    <div className={`dsk-sticky ${visible ? 'show' : ''}`} role="region" aria-label="Szybki dostęp do biletów">
      <div className="dsk-sticky-inner">
        <div className="dsk-sticky-info">
          <div className="dsk-sticky-tag">
            <span className="dot"></span>
            Bilety od <strong>699 zł</strong>
          </div>
          <div className="dsk-sticky-text">
            <strong>5 listopada 2026</strong> · Warsaw Plaza Hotel · online
          </div>
        </div>
        <div className="dsk-sticky-actions">
          <a href="#bilety" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 14 }}>
            Zarezerwuj miejsce <window.ArrowRight size={12}/>
          </a>
          <button
            className="dsk-sticky-close"
            onClick={() => setDismissed(true)}
            aria-label="Ukryj pasek"
          >×</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MidCTA, DesktopStickyCTA });
