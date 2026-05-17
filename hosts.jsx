// =============================================
// Hosts — "Konferencję poprowadzą"
// =============================================

function Hosts() {
  return (
    <section className="hosts section-pad" id="prowadzacy">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <window.Eyebrow icon="mic">Prowadzący</window.Eyebrow>
            <h2 className="display" style={{ marginTop: 16 }}>
              Konferencję<br/><span className="text-blue">poprowadzą.</span>
            </h2>
          </div>
          <p className="lead">
            Dwoje doświadczonych prawników, którzy poprowadzą Cię przez agendę i&nbsp;zadbają o&nbsp;płynne przejścia między sesjami. Praktycy z&nbsp;wieloletnim stażem w&nbsp;prawie pracy.
          </p>
        </div>

        <div className="hosts-grid">
          {window.HOSTS.map((h, i) => (
            <article className="host-card" key={i}>
              <div className="host-top">
                <div className="host-visual">
                  {h.photo
                    ? <img src={h.photo} alt={h.name} className="host-graphic"/>
                    : <div className="host-initial-box"><div className={`ph ph-v${h.v}`}></div><div className="host-initial">{h.initial}</div></div>
                  }
                </div>
                <div className="host-header">
                  <div className="host-role">{h.title}</div>
                  <h3 className="host-name">{h.name}</h3>
                  <div className="host-org">{h.role}</div>
                </div>
              </div>
              <div className="host-bottom">
                <p className="host-bio">{h.bio}</p>
                <div className="host-tags">
                  {h.tags.map((t, ti) => <span className="host-tag" key={ti}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hosts });
