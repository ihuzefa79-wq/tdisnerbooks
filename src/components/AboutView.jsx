"use client";
import { Reveal, SplitWords, Tilt } from "./Motion";
import { FinalCTA } from "./HomeSections";

const VALUES = [
  { icon: "🔭", t: "Vision", d: "Seeing what a small idea could become, long before anyone else does." },
  { icon: "🧗", t: "Perseverance", d: "Pushing through the hard seasons that every real business faces." },
  { icon: "🇺🇸", t: "The American Dream", d: "Proof that hard work and a great product can still change everything." },
];

export default function AboutView() {
  return (
    <>
      <section className="section cream">
        <div className="container split-grid">
          <Reveal x={-60} y={0} className="portrait-wrap">
            <div className="portrait-ring" />
            <div className="portrait">
              <img src="/img/author.png" alt="Todd C. Disner" />
            </div>
            <div className="portrait-tag">
              <strong>Todd C. Disner</strong>
              <span>Author of What&apos;s A QuiZnos?</span>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="kicker">His Story</span></Reveal>
            <h2 className="h2"><SplitWords text="A builder who learned by" /> <SplitWords text="doing." className="script-accent dark" delay={0.3} /></h2>
            <Reveal><p className="lead">
              Todd C. Disner is an entrepreneur, storyteller, and business enthusiast. Through his experiences in building
              Quiznos, he shares valuable lessons about vision, perseverance, and the American dream.
            </p></Reveal>
            <Reveal delay={0.1}><p className="lead">
              His journey is one of determination, innovation, and a passion for creating something extraordinary. In
              <em> What&apos;s A QuiZnos?</em> he opens the doors on what it really takes to grow a small idea into a
              national brand.
            </p></Reveal>
            <Reveal delay={0.2}>
              <div className="signature">Todd C. Disner</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="center-head">
            <Reveal><span className="kicker light">What Drives Him</span></Reveal>
            <h2 className="h2 light"><SplitWords text="The values behind the" /> <SplitWords text="story." className="script-accent" delay={0.25} /></h2>
          </div>
          <div className="aud-grid three">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.12}>
                <Tilt className="aud-card">
                  <span className="aud-icon">{v.icon}</span>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
