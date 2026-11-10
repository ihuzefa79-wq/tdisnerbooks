"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Book3D from "./Book3D";
import AmazonButton from "./AmazonButton";
import { Reveal, SplitWords, Tilt } from "./Motion";
import { Sparkles, Marquee } from "./Effects";
import { FinalCTA } from "./HomeSections";

const AUDIENCE = [
  { icon: "🚀", t: "Dreamers", d: "Anyone with an idea they can't stop thinking about." },
  { icon: "📈", t: "Business Builders", d: "Founders and operators scaling something real." },
  { icon: "🏪", t: "Franchise Owners", d: "People who live the systems behind a brand." },
  { icon: "🥪", t: "Food Lovers", d: "Fans curious about the story behind the sub." },
];

export default function BookDetail({ book }) {
  return (
    <>
      <section className="detail-hero">
        <div className="hero-glow" />
        <Sparkles count={30} />
        <div className="container detail-grid">
          <motion.div
            className="detail-book"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="hero-ring" />
            <Book3D cover={book.cover} size="xl" />
          </motion.div>
          <div className="detail-copy">
            <div className="crumbs">
              <Link href="/">Home</Link> <span>/</span> <Link href="/books">Books</Link> <span>/</span>{" "}
              <em>{book.title}</em>
            </div>
            <span className="tag gold">New Release</span>
            <h1 className="detail-title">
              <SplitWords text={book.title} delay={0.4} />
            </h1>
            <motion.p className="detail-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              {book.subtitle}
            </motion.p>
            <motion.p className="book-by light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              by <strong>{book.author}</strong>
            </motion.p>
            <motion.div
              className="detail-meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div><small>Formats</small><span>{book.formats.join(" · ")}</span></div>
              <div><small>Genre</small><span>{book.genre}</span></div>
              <div><small>Available</small><span>Amazon</span></div>
            </motion.div>
            <motion.div className="btn-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}>
              <AmazonButton href={book.amazon} size="btn-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <Marquee items={["Inspiring", "Insightful", "Entrepreneurial", "Real-World Lessons", "Must-Read"]} reverse />
      </div>

      <section className="section cream">
        <div className="container split-grid">
          <div>
            <Reveal><span className="kicker">The Story</span></Reveal>
            <h2 className="h2"><SplitWords text="How a small idea became a" /> <SplitWords text="brand." className="script-accent dark" delay={0.3} /></h2>
            {book.description.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}><p className="lead">{p}</p></Reveal>
            ))}
          </div>
          <div>
            <Reveal><span className="kicker">Inside You&apos;ll Find</span></Reveal>
            <ul className="checks">
              {book.takeaways.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="center-head">
            <Reveal><span className="kicker light">Who It&apos;s For</span></Reveal>
            <h2 className="h2 light"><SplitWords text="Written for the" /> <SplitWords text="builders." className="script-accent" delay={0.25} /></h2>
          </div>
          <div className="aud-grid">
            {AUDIENCE.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.1}>
                <Tilt className="aud-card">
                  <span className="aud-icon">{a.icon}</span>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
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
