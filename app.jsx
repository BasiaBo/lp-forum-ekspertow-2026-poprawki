// =============================================
// Main App + Tweaks Panel
// =============================================

const { useState: useStateApp, useEffect: useEffectApp } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F08020",
  "primary": "#22C55E",
  "navy": "#143278",
  "display": "Bricolage Grotesque",
  "showCountdown": true
}/*EDITMODE-END*/;

function applyTokens(t) {
  const r = document.documentElement;
  r.style.setProperty('--yellow', t.accent);
  r.style.setProperty('--green', t.primary);
  r.style.setProperty('--navy', t.navy);
  r.style.setProperty('--display', `'${t.display}', 'Inter', system-ui, sans-serif`);
}

function App() {
  const tw = window.useTweaks ? window.useTweaks(DEFAULTS) : [DEFAULTS, () => {}];
  const [t, setTweak] = tw;

  useEffectApp(() => { applyTokens(t); }, [t]);

  return (
    <>
      <window.Nav/>
      <window.Hero/>
      <window.Stats/>
      <window.About/>
      <window.Audience/>
      <window.Pillars/>
      <window.Hosts/>
      <window.Speakers/>
      <window.MidCTA/>
      <window.Program/>
      <window.PreviousEdition/>
      <window.Tickets/>
      <window.FAQSection/>
      <window.Footer/>
      <window.StickyBuy/>
      <window.DesktopStickyCTA/>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Kolory marki">
            <window.TweakColor
              label="Granat (główny)"
              value={t.navy}
              options={['#143278', '#0F2D6E', '#1B3F8F', '#0A1F4A', '#22324F']}
              onChange={v => setTweak('navy', v)}
            />
            <window.TweakColor
              label="Akcent (pomarańczowy z logo)"
              value={t.accent}
              options={['#F08020', '#FFB927', '#E5484D', '#7C3AED', '#0E7490']}
              onChange={v => setTweak('accent', v)}
            />
            <window.TweakColor
              label="CTA Kup bilet"
              value={t.primary}
              options={['#22C55E', '#16A34A', '#2C6FE6', '#1E40AF', '#DC2626']}
              onChange={v => setTweak('primary', v)}
            />
          </window.TweakSection>
          <window.TweakSection title="Typografia">
            <window.TweakSelect
              label="Font nagłówków"
              value={t.display}
              options={['Bricolage Grotesque', 'Inter', 'Plus Jakarta Sans', 'Manrope', 'Space Grotesk', 'DM Sans']}
              onChange={v => setTweak('display', v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
