"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Book3D from "./Book3D";
import AmazonButton from "./AmazonButton";
import { Reveal, SplitWords, Counter, Magnetic } from "./Motion";
import { Sparkles, Marquee } from "./Effects";
import useSiteReady from "@/lib/useSiteReady";
import { BOOKS } from "@/lib/site";

const book = BOOKS[0];

/* ---------------- HERO ---------------- */
export function Hero() {
  const ready = useSiteReady();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bookY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const st = (d) => ({
    initial: { opacity: 0, y: 40 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: d },
  });

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY }} />
      <div className="hero-glow" />
      <Sparkles count={36} />
      <svg className="hero-swoosh" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M-20,260 C300,120 700,300 1460,140"
          stroke="#d7261e"
          strokeWidth="10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={ready ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-20,285 C320,150 760,320 1460,170"
          stroke="#f5b919"
          strokeWidth="6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={ready ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: textY, opacity: fade }}>
          <motion.span className="eyebrow" {...st(0.1)}>
            <span className="pulse" /> A True Entrepreneurial Story
          </motion.span>

          <h1 className="hero-title">
            <motion.span
              className="hero-script"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={ready ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
            >
              What&apos;s A
            </motion.span>
            <span className="hero-main">
              {"QuiZnos".split("").map((l, i) => (
                <motion.span
                  key={i}
                  className={l === "Z" ? "gold" : ""}
                  initial={{ y: 120, opacity: 0, rotateX: -80 }}
                  animate={ready ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 + i * 0.06 }}
                >
                  {l}
                </motion.span>
              ))}
              <motion.span
                className="hero-q"
                initial={{ scale: 0, rotate: -120 }}
                animate={ready ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1 }}
              >
                ?
              </motion.span>
            </span>
          </h1>

          <motion.p className="hero-sub" {...st(1.05)}>
            The Entrepreneurial Story of <br />
            <strong>America&apos;s Hottest Sub Chain</strong>
          </motion.p>
          <motion.span
            className="hero-rule"
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.p className="hero-tag" {...st(1.3)}>
            The entrepreneurial journey behind Quiznos.
          </motion.p>
          <motion.div className="hero-ctas" {...st(1.45)}>
            <AmazonButton size="btn-lg" />
            <Magnetic>
              <Link href="/books/whats-a-quiznos" className="btn btn-ghost btn-lg">
                Explore the Book
              </Link>
            </Magnetic>
          </motion.div>
          <motion.div className="hero-author" {...st(1.6)}>
            <span>Written by</span> <strong>Todd C. Disner</strong>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-book"
          style={{ y: bookY }}
          initial={{ opacity: 0, x: 120, rotate: 8 }}
          animate={ready ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="hero-ring" />
          <div className="hero-ring r2" />
          <Book3D size="xl" />
          <motion.div
            className="float-badge b1"
            initial={{ scale: 0 }}
            animate={ready ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 1.6 }}
          >
            <span>📖</span> Now on Kindle
          </motion.div>
          <motion.div
            className="float-badge b2"
            initial={{ scale: 0 }}
            animate={ready ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 1.8 }}
          >
            <span>⭐</span> A True Story
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 2 }}>
        <span className="mouse"><i /></span>
        Scroll to explore
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
export function Ticker() {
  return (
    <div className="ticker">
      <Marquee items={["Vision", "Hustle", "Perseverance", "Franchise Dreams", "Toasted to Perfection", "The American Dream", "Innovation"]} />
    </div>
  );
}

/* ---------------- ABOUT THE BOOK ---------------- */
export function AboutBook() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgR = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section className="section cream about-book" ref={ref}>
      <div className="seeds" aria-hidden="true" />
      <div className="container split-grid">
        <div>
          <Reveal><span className="kicker">About the Book</span></Reveal>
          <h2 className="h2">
            <SplitWords text="From a small idea to an" />{" "}
            <SplitWords text="American icon." className="script-accent dark" delay={0.3} />
          </h2>
          {book.description.map((p, i) => (
            <Reveal key={i} delay={0.15 * i}><p className="lead">{p}</p></Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="btn-row">
              <AmazonButton />
              <Link href="/books/whats-a-quiznos" className="link-arrow">
                Read more <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <motion.div className="sandwich-wrap" style={{ y: imgY, rotate: imgR }}>
          <div className="sandwich-blob" />
          <img src="/img/sandwich.png" alt="Toasted sub sandwich" className="sandwich" />
          <span className="steam s1" />
          <span className="steam s2" />
          <span className="steam s3" />
          <div className="sticker">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#circ">• TOASTED • TRUE STORY • MUST READ </textPath>
              </text>
            </svg>
            <b>🔥</b>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
export function Stats() {
  const stats = [
    { n: 1981, label: "The year the first Quiznos opened in Denver", plain: true },
    { n: 5000, suffix: "+", label: "Restaurants at the brand's peak" },
    { n: 1, label: "Small idea that started it all" },
    { n: 100, suffix: "%", label: "True entrepreneurial story" },
  ];
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="stat">
            <div className="stat-num">
              <Counter to={s.n} suffix={s.suffix} plain={s.plain} />
            </div>
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- AUTHOR ---------------- */
export function AuthorTeaser() {
  return (
    <section className="section dark author-sec">
      <div className="hero-glow left" />
      <div className="container split-grid reverse-mobile">
        <Reveal x={-60} y={0} className="portrait-wrap">
          <div className="portrait-ring" />
          <div className="portrait">
            <img src="/img/author.png" alt="Todd C. Disner" />
          </div>
          <div className="portrait-tag">
            <strong>Todd C. Disner</strong>
            <span>Author · Entrepreneur</span>
          </div>
        </Reveal>
        <div>
          <Reveal><span className="kicker light">About the Author</span></Reveal>
          <h2 className="h2 light">
            <SplitWords text="Meet the storyteller behind the" />{" "}
            <SplitWords text="sub." className="script-accent" delay={0.35} />
          </h2>
          <Reveal delay={0.1}>
            <p className="lead light">
              Todd C. Disner is an entrepreneur, storyteller, and business enthusiast. Through his experiences in
              building Quiznos, he shares valuable lessons about vision, perseverance, and the American dream.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead light">
              His journey is one of determination, innovation, and a passion for creating something extraordinary.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Magnetic>
              <Link href="/about" className="btn btn-ghost">Meet Todd →</Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY (horizontal scroll) ---------------- */
const CHAPTERS = [
  { n: "01", t: "The Spark", d: "Every empire starts with a single, stubborn idea and someone willing to bet on it.", icon: "💡" },
  { n: "02", t: "The Oven", d: "Finding the difference that makes customers come back, and having the nerve to own it.", icon: "🔥" },
  { n: "03", t: "The Hustle", d: "Long nights, tight margins, and the lessons only the grind can teach.", icon: "⚙️" },
  { n: "04", t: "The Franchise", d: "Turning one shop into a system, and a system into a movement.", icon: "🏪" },
  { n: "05", t: "The Legacy", d: "What it all means, and what every dreamer can take from it.", icon: "🏆" },
];

export function Journey() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [wide, setWide] = useState(false);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const set = () => {
      setWide(mq.matches);
      if (trackRef.current) setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 64));
    };
    set();
    mq.addEventListener("change", set);
    window.addEventListener("resize", set);
    return () => {
      mq.removeEventListener("change", set);
      window.removeEventListener("resize", set);
    };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * dist);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={`journey ${wide ? "is-wide" : ""}`} ref={ref}>
      <div className="journey-sticky">
        <div className="container journey-head">
          <span className="kicker light">Inside the Journey</span>
          <h2 className="h2 light">
            Five chapters. <span className="script-accent">One big dream.</span>
          </h2>
          <motion.div className="journey-bar" style={{ scaleX: wide ? bar : 1 }} />
        </div>
        <motion.div className="journey-track" ref={trackRef} style={wide ? { x } : {}}>
          {CHAPTERS.map((c, i) => (
            <motion.article
              key={c.n}
              className="chapter"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: wide ? i * 0.08 : 0, duration: 0.7 }}
            >
              <span className="chapter-n">{c.n}</span>
              <span className="chapter-icon">{c.icon}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </motion.article>
          ))}
          <article className="chapter chapter-cta">
            <h3>Read the full story</h3>
            <AmazonButton />
          </article>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TAKEAWAYS + QUOTE ---------------- */
export function Takeaways() {
  return (
    <section className="section cream">
      <div className="container split-grid">
        <div>
          <Reveal><span className="kicker">Key Takeaways</span></Reveal>
          <h2 className="h2"><SplitWords text="What you'll walk away with" /></h2>
          <ul className="checks">
            {book.takeaways.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <motion.span
                  className="check"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 + i * 0.12 }}
                >
                  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </motion.span>
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
        <Reveal className="quote-card" y={60}>
          <span className="quote-mark">&ldquo;</span>
          <blockquote>An inspiring story of vision, hard work, and success.</blockquote>
          <svg className="quote-line" viewBox="0 0 300 30" aria-hidden="true">
            <motion.path
              d="M5 20 C 80 5, 200 5, 295 18"
              fill="none"
              stroke="#f5b919"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Sparkles count={24} />
      <svg className="cta-waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path className="cw1" d="M0,220 C360,120 720,320 1440,180 L1440,320 L0,320 Z" />
        <path className="cw2" d="M0,260 C420,180 900,330 1440,230 L1440,320 L0,320 Z" />
      </svg>
      <div className="container cta-grid">
        <Reveal className="cta-book" y={80}>
          <Book3D size="md" />
        </Reveal>
        <div className="cta-copy">
          <h2 className="h2 light big">
            <SplitWords text="Get Your Copy" />{" "}
            <SplitWords text="Today!" className="script-accent" delay={0.3} />
          </h2>
          <Reveal delay={0.2}><p className="lead light">Be inspired by a true entrepreneurial journey.</p></Reveal>
          <Reveal delay={0.35}><AmazonButton size="btn-lg" /></Reveal>
        </div>
      </div>
    </section>
  );
}
