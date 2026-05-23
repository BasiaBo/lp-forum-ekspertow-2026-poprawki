// =============================================
// Program, Tables, Workshops
// =============================================

const { useState: useState2 } = React;

function durationMin(start, end) {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

function Program() {
  const [open, setOpen] = useState2(1);
  const [filter, setFilter] = useState2('all');
  const [day, setDay] = useState2(1);

  const sessions = window.SESSIONS;
  const filtered = sessions.filter(s => {
    if (filter === 'all') return true;
    if (filter === 'breaks') return s.kind === 'break';
    if (filter === 'partners') return s.badge && s.badge.startsWith('PARTNER');
    if (filter === 'main') return !s.kind && !(s.badge && s.badge.startsWith('PARTNER'));
    return true;
  });

  return (
    <section className="program section-pad" id="program">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="calendar">Program konferencji</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Program <span className="text-blue">konferencji.</span>
            </h2>
            <p className="program-disclaimer">* Organizator zastrzega sobie prawo do zmian w programie.</p>
          </div>
          <p className="lead">
            Dwa dni merytoryki — wykłady i&nbsp;stoliki eksperckie pierwszego dnia, warsztaty praktyczne drugiego. Każdą sesję możesz rozwinąć, by zobaczyć szczegóły i&nbsp;prelegenta.
          </p>
        </div>

        {/* Day tabs */}
        <div className="day-tabs">
          <button
            className={`day-tab ${day === 1 ? 'active' : ''}`}
            onClick={() => setDay(1)}
          >
            <span className="day-tab-date">5 listopada 2026</span>
            <span className="day-tab-label">Dzień 1 — Konferencja i&nbsp;stoliki eksperckie</span>
          </button>
          <button
            className={`day-tab ${day === 2 ? 'active' : ''}`}
            onClick={() => setDay(2)}
          >
            <span className="day-tab-date">6 listopada 2026</span>
            <span className="day-tab-label">Dzień 2 — Warsztaty</span>
          </button>
        </div>

        {day === 1 && (
          <>
            <div className="program-controls">
              <button className={`filter-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Wszystko</button>
              <button className={`filter-pill ${filter === 'main' ? 'active' : ''}`} onClick={() => setFilter('main')}>Wykłady eksperckie</button>
              <button className={`filter-pill ${filter === 'partners' ? 'active' : ''}`} onClick={() => setFilter('partners')}>Wystąpienia partnerów</button>
              <button className={`filter-pill ${filter === 'breaks' ? 'active' : ''}`} onClick={() => setFilter('breaks')}>Przerwy i networking</button>
              <button className={`filter-pill ${filter === 'tables' ? 'active' : ''}`} onClick={() => { setFilter('tables'); setTimeout(() => { const el = document.getElementById('stoliki'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 160; window.scrollTo({ top, behavior: 'smooth' }); } }, 50); }}>Stoliki eksperckie</button>
            </div>

            <div className="program-table">
              {filtered.map((s, i) => {
                const isOpen = open === i && !s.kind;
                return (
                  <div
                    key={i}
                    id={s.anchor}
                    className={`session ${isOpen ? 'open' : ''} ${s.kind === 'break' ? 'break' : ''} ${s.kind === 'intro' ? 'intro' : ''}`}
                    onClick={() => !s.kind && setOpen(isOpen ? -1 : i)}
                  >
                    <div className="time">
                      <span>{s.time} — {s.end}</span>
                      {!s.kind && <span className="dur">{durationMin(s.time, s.end)} min</span>}
                    </div>
                    <div>
                      <div className="title">
                        {s.badge && <span className={`badge ${s.badgeKind || ''}`}>{s.badge}</span>}
                        {s.title}
                      </div>
                      {s.sub && (
                        <div style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 8, fontStyle: 'italic', maxWidth: '60ch' }}>
                          {s.sub}
                        </div>
                      )}
                      {s.topics && (
                        <ul className="topics">
                          {s.topics.map((t, ti) => <li key={ti}>{t}</li>)}
                        </ul>
                      )}
                    </div>
                    {s.kind === 'break' && (
                      <div className="expert">
                        <div className="av av-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/>
                            <line x1="6" y1="2" x2="6" y2="4"/>
                            <line x1="10" y1="2" x2="10" y2="4"/>
                            <line x1="14" y1="2" x2="14" y2="4"/>
                          </svg>
                        </div>
                        <div>
                          <div className="name">Przerwa kawowa</div>
                          <div className="role">networking</div>
                        </div>
                      </div>
                    )}
                    {s.kind === 'intro' && <div className="expert-placeholder"/>}
                    {s.panel && (
                      <div className="expert-panel">
                        <div className="expert-panel-avatars">
                          {s.panel.map((p, pi) => (
                            p.photo
                              ? <img key={pi} src={p.photo} alt={p.name || ''} className="av av-photo"/>
                              : <div key={pi} className="av av-placeholder">{p.initial}</div>
                          ))}
                        </div>
                        <div className="name">Panel ekspertów</div>
                      </div>
                    )}
                    {s.expert && (
                      <div className="expert">
                        {s.expert.photo
                          ? <img src={s.expert.photo} alt={s.expert.name} className="av av-photo"/>
                          : <div className={`av ${s.expert.copper ? 'yellow' : ''}`}>{s.expert.initial}</div>
                        }
                        <div>
                          <div className="name">{s.expert.name}</div>
                          <div className="role">{s.expert.role}</div>
                        </div>
                      </div>
                    )}
                    {!s.kind && (
                      <div className="toggle" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 8 11 13 6"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stoliki eksperckie — dzień 1 */}
            <div className="tables-block" id="stoliki">
              <div className="tables-block-hero">
                <div className="tables-block-intro">
                  <window.Eyebrow icon="table">Dzień 1 · 5 listopada 2026</window.Eyebrow>
                  <h2 className="display tables-block-title">
                    Stoliki<br/><span className="text-blue">eksperckie.</span>
                  </h2>
                  <p className="tables-block-lead">
                    Sześć stolików, przy których możesz zadać swoje konkretne pytanie ekspertowi. Zapisy na miejscu, w&nbsp;kolejności zgłoszeń — dostępne wyłącznie dla uczestników stacjonarnych.
                  </p>
                </div>
                <div className="tables-block-photo-wrap">
                  <img src="uploads/14.png" alt="Stoliki eksperckie Forum Ekspertów" className="tables-block-photo"/>
                  <div className="tables-block-photo-badge">
                    <span className="tables-block-badge-num">6</span>
                    <span className="tables-block-badge-lbl">stolików eksperckich</span>
                  </div>
                </div>
              </div>
              <div className="tables-grid">
                {window.TABLES_TOPICS.map((t, i) => (
                  <div className="table-card" key={i}>
                    <div className="table-num">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="10" rx="2"/>
                        <line x1="8" y1="14" x2="6" y2="20"/>
                        <line x1="16" y1="14" x2="18" y2="20"/>
                        <line x1="5" y1="20" x2="19" y2="20"/>
                      </svg>
                    </div>
                    <h4>{t.title}</h4>
                    <div className="expert-mini">
                      {t.photo
                        ? <img src={t.photo} alt={t.expert} className="av av-photo"/>
                        : <div className="av">{t.init}</div>
                      }
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--ink)' }}>{t.expert}</div>
                        <div style={{ color: 'var(--muted)', fontSize: 12 }}>Ekspert dyżurujący</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {day === 2 && (
          <div className="ws-grid" id="warsztaty">
            <div className="ws-card">
              <div className="ws-head">
                <div className="ws-num">01</div>
                <div className="ws-chip">Czas pracy</div>
              </div>
              <h3>Rozliczanie czasu pracy — rozkłady i ewidencje, praktyczne przykłady, wzory i narzędzia AI</h3>
              <div className="ws-host">
                <img src="uploads/Szymon_Sokolik.png" alt="Szymon Sokolik" className="av av-photo"/>
                <div>Prowadzący: <strong>Szymon Sokolik</strong><br/><span style={{ fontSize: 13, color: 'var(--muted)' }}>Prawnik, specjalista prawa pracy</span></div>
              </div>
              <div className="ws-blocks">
                <div className="ws-block">
                  <div className="lbl">Program warsztatów</div>
                  <ul>
                    <li>Tworzenie rozkładów czasu pracy krok po kroku</li>
                    <li>Praktyczne wzory ewidencji</li>
                    <li>Promptowanie AI do harmonogramów</li>
                    <li>Najczęstsze błędy i jak ich uniknąć</li>
                  </ul>
                </div>
                <div className="ws-block">
                  <div className="lbl">Korzyści z udziału</div>
                  <ul>
                    <li>Gotowe szablony do wdrożenia w poniedziałek</li>
                    <li>Praca z realnymi case'ami uczestników</li>
                    <li>Indywidualna konsultacja z prowadzącym</li>
                    <li>Certyfikat ukończenia warsztatów</li>
                  </ul>
                </div>
              </div>
              <div className="ws-meta">
                <div>Data <span className="v">6.11.2026</span></div>
                <div>Godzina <span className="v">10:00 — 15:00</span></div>
              </div>
            </div>

            <div className="ws-card">
              <div className="ws-head">
                <div className="ws-num">02</div>
                <div className="ws-chip">Wartościowanie</div>
              </div>
              <h3>Wartościowanie stanowisk — analityka danych pod dyrektywę 2023/970</h3>
              <div className="ws-host">
                <img src="uploads/Karol_Wolski.jpg" alt="Karol Wolski" className="av av-photo"/>
                <div>Prowadzący: <strong>Karol Wolski</strong><br/><span style={{ fontSize: 13, color: 'var(--muted)' }}>Partner Zarządzający, Mocni w HR</span></div>
              </div>
              <div className="ws-blocks">
                <div className="ws-block">
                  <div className="lbl">Program warsztatów</div>
                  <ul>
                    <li>Metoda analityczna wartościowania stanowisk</li>
                    <li>Mapowanie obiektywnych, neutralnych kryteriów</li>
                    <li>Przygotowanie danych pod raportowanie luki</li>
                    <li>Komunikacja wyników z zarządem i zespołami</li>
                  </ul>
                </div>
                <div className="ws-block">
                  <div className="lbl">Korzyści z udziału</div>
                  <ul>
                    <li>Gotowa metodyka pod dyrektywę 2023/970</li>
                    <li>Narzędzia analityczne do natychmiastowego użycia</li>
                    <li>Praca z danymi z Twojej organizacji</li>
                    <li>Certyfikat ukończenia warsztatów</li>
                  </ul>
                </div>
              </div>
              <div className="ws-meta">
                <div>Data <span className="v">6.11.2026</span></div>
                <div>Godzina <span className="v">10:00 — 15:00</span></div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

Object.assign(window, { Program, ExpertTables: () => null, Workshops: () => null });
