// =============================================
// About 2026, Audience, Pillars, Previous Edition
// =============================================

const { useState: useStateS, useEffect: useEffectS } = React;

const GALLERY = [
  { src: "uploads/sala-plenarna.png",      lab: "Sala plenarna · 2025" },
  { src: "uploads/stoliki-eksperckie.png", lab: "Stoliki eksperckie" },
  { src: "uploads/networking.png",         lab: "Networking" },
  { src: "uploads/panel-dyskusyjny.png",   lab: "Panel dyskusyjny" },
  { src: "uploads/warsztaty.png",          lab: "Warsztaty drugiego dnia" },
  ...Array.from({ length: 18 }, (_, i) => ({ src: `uploads/${i + 1}.png`, lab: `Galeria · ${i + 1}` })),
];
const GALLERY_TILES = GALLERY.slice(0, 5);

function Lightbox({ index, onClose, onPrev, onNext }) {
  const g = GALLERY[index];
  useEffectS(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Zamknij">✕</button>
      <button className="lb-prev" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Poprzednie">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
        <img src={g.src} alt={g.lab} className="lb-img"/>
        <div className="lb-caption">{g.lab} <span className="lb-count">{index + 1} / {GALLERY.length}</span></div>
      </div>
      <button className="lb-next" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Następne">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}

function About() {
  return (
    <section className="about section-pad" id="o-konferencji">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-title">
            <h2 className="display">
              <span className="text-blue">2026</span><br/>
              <span className="text-blue">rok przełomu</span> w&nbsp;działach kadr i&nbsp;płac.
            </h2>
            <div className="callout-card">
              <div className="icon"><img src="uploads/24-lata.svg" alt="24 lata" className="callout-icon-svg"/></div>
              <div className="text">
                <strong>XXIV edycja — organizowana nieprzerwanie od 2002 roku.</strong>
                Coroczna konferencja poświęcona tematyce prawa pracy przez Portal Kadrowy. W tym roku spotykamy się w Warsaw Plaza Hotel oraz online.
              </div>
            </div>
          </div>
          <div className="about-body">
            <p>
              W 2026 roku w życie wchodzą przepisy, które znacząco wpłyną na funkcjonowanie działów HR, kadr i płac. W centrum zmian znajdą się <strong>jawność wynagrodzeń, nowelizacja ustawy o PIP</strong> oraz nowe przepisy dotyczące <strong>mobbingu</strong>. Równolegle rośnie znaczenie tematu luki płacowej — raportowania, analityki, wartościowania stanowisk i sposobu komunikacji z pracownikami.
            </p>
            <p>
              Pracodawcy muszą być gotowi na zmiany w zasadach liczenia stażu pracy, a jednocześnie mierzyć się z optymalizacją kosztów w organizacji, w tym ze zwolnieniami grupowymi. To wszystko oznacza <strong>nowe obowiązki i większą odpowiedzialność</strong> po stronie działów kadr i płac.
            </p>
            <p>
              Podczas XXIV Ogólnopolskiego Kadrowo-Płacowego Forum Ekspertów, corocznej konferencji poświęconej tematyce prawa pracy organizowanej od 2002 roku w Warszawie przez Portal Kadrowy, w gronie specjalistów <strong>wyjaśnimy, co w praktyce oznaczają najnowsze zmiany w prawie.</strong> Pokażemy także, jak przygotować się do wdrożenia jawności wynagrodzeń i jak bezpiecznie podejść do nowych obowiązków pracodawcy. Spotkasz tu uznanych praktyków z zakresu prawa pracy, ZUS oraz rozliczeń wynagrodzeń. Otrzymasz konkretne wskazówki, jak dostosować organizację do zmian — krok po kroku i z pełnym zrozumieniem ich konsekwencji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience section-pad-sm">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="users">Dla kogo</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>Sześć ról.<br/><span className="text-blue">Jedna konferencja.</span></h2>
          </div>
          <p className="lead">
            Wydarzenie skierowane jest do osób, które na co dzień odpowiadają za zgodność, bezpieczeństwo i&nbsp;jakość procesów kadrowo-płacowych. Niezależnie od stanowiska — wyjdziesz z&nbsp;konkretnymi narzędziami.
          </p>
        </div>

        <ul className="audience-list">
          {window.AUDIENCE.map((a, i) => (
            <li className="audience-item" key={i}>
              <div className="audience-num">{a.num}</div>
              <div>
                <div className="audience-title">{a.title}</div>
                <div className="audience-sub">{a.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="pillars section-pad" id="filary">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="pillars">Trzy filary 2026</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              <span className="text-blue">3 najważniejsze zmiany w&nbsp;2026,</span><br/>o których mówimy.
            </h2>
          </div>
          <p className="lead">
            Cała agenda 2026 sprowadza się do trzech obszarów, które zmienią sposób pracy działów kadr i&nbsp;HR w&nbsp;Polsce. Każdy z&nbsp;nich rozkładamy na konkretne wskazówki i&nbsp;procedury.
          </p>
        </div>

        <div className="pillar-grid">
          {window.PILLARS.map((p) => (
            <div className="pillar" id={`pillar-${p.slug}`} key={p.num}>
              <div className="pillar-head">
                <span className="pillar-num">{p.num}</span>
                <span className="pillar-chip">{p.chip}</span>
              </div>
              <h3>{p.title}</h3>
              <div className="pillar-sub">{p.sub}</div>
              <ul className="pillar-list">
                {p.bullets.map((b, i) => <li key={i}><span>{b}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviousEdition() {
  const [lightbox, setLightbox] = useStateS(null);
  const total = GALLERY.length;

  return (
    <section className="prev-edition section-pad-sm">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="photo">Poprzednia edycja</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Jak <span className="text-blue">było</span><br/>w 2025?
            </h2>
          </div>
          <p className="lead">
            Ponad 400 uczestników, 11 prelegentów, 8 godzin merytorycznych wystąpień i&nbsp;niezliczone rozmowy przy stolikach eksperckich. Zobacz krótkie podsumowanie zeszłorocznego spotkania.
          </p>
        </div>

        <div className="prev-gallery">
          {GALLERY_TILES.map((g, i) => (
            <div
              key={i}
              className={`tile ${i === 0 ? 't1' : ''}`}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Otwórz zdjęcie: ${g.lab}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
            >
              <img src={g.src} alt={g.lab} className="tile-img"/>
              <span className="lab">{g.lab}</span>
              <span className="tile-zoom" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="gallery-strip">
          {GALLERY.slice(5).map((g, i) => (
            <div
              key={i}
              className="gallery-thumb"
              onClick={() => setLightbox(i + 5)}
              role="button"
              tabIndex={0}
              aria-label={`Otwórz zdjęcie ${i + 6}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i + 5)}
            >
              <img src={g.src} alt={g.lab} className="gallery-thumb-img"/>
            </div>
          ))}
          <div className="gallery-strip-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            {GALLERY.length} zdjęć z edycji 2025
          </div>
        </div>

        {lightbox !== null && (
          <Lightbox
            index={lightbox}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((lightbox - 1 + total) % total)}
            onNext={() => setLightbox((lightbox + 1) % total)}
          />
        )}

        <div className="prev-stats">
          <div className="prev-stats-header">
            <span className="prev-stats-num">200</span>
            <span className="prev-stats-label">uczestników, z których</span>
          </div>
          <div className="prev-stats-grid">
            {[
              { pct: "94%", desc: "poleciłoby uczestnictwo w Forum znajomym" },
              { pct: "94%", desc: "wyraziło zadowolenie z udziału" },
              { pct: "80%", desc: "było zdecydowanie zadowolonych" },
              { pct: "77%", desc: "deklaruje wykorzystanie zdobytej wiedzy w codziennej pracy" },
              { pct: "83%", desc: "wskazało aktualność tematyki jako najmocniejszą stronę wydarzenia" },
              { pct: "78%", desc: "doceniło wiedzę i profesjonalizm prowadzących" },
            ].map((s, i) => (
              <div className="prev-stat-card" key={i}>
                <div className="prev-stat-pct">{s.pct}</div>
                <div className="prev-stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="prev-stats-opinions-heading" id="poprzednia-edycja">Opinie uczestników</h3>
          <div className="testimonial-screenshots">
            {[1,2,3,4,5,6].map(n => (
              <div className="tscreenshot" key={n}>
                <img
                  src={`uploads/testimonial_${n}.png`}
                  alt={`Opinia uczestnika konferencji ${n}`}
                  className="tscreenshot-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Audience, Pillars, PreviousEdition });
