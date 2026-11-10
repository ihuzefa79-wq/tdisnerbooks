"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Motion";
import Book3D from "./Book3D";

const TOPICS = ["Media & Press", "Speaking", "Book Clubs", "General"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(TOPICS[0]);

  return (
    <section className="section cream">
      <div className="container contact-grid">
        <Reveal className="contact-side" x={-50} y={0}>
          <h2 className="h2">We&apos;d love to <span className="script-accent dark">hear</span> from you.</h2>
          <p className="lead">Every message is read personally. Expect a reply within a few business days.</p>
          <div className="contact-book"><Book3D size="sm" /></div>
        </Reveal>

        <Reveal className="form-card" y={60}>
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="topics">
                  {TOPICS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      className={`topic ${topic === t ? "on" : ""}`}
                      onClick={() => setTopic(t)}
                    >
                      {topic === t && <motion.span layoutId="topic-bg" className="topic-bg" />}
                      <span>{t}</span>
                    </button>
                  ))}
                </div>
                <div className="field-row">
                  <label className="field">
                    <input required placeholder=" " name="name" />
                    <span>Your name</span>
                  </label>
                  <label className="field">
                    <input required type="email" placeholder=" " name="email" />
                    <span>Email address</span>
                  </label>
                </div>
                <label className="field">
                  <textarea required rows={5} placeholder=" " name="message" />
                  <span>Your message</span>
                </label>
                <button className="btn btn-gold btn-lg" type="submit">
                  Send Message <span className="arrow">→</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="ok"
                className="sent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <svg viewBox="0 0 80 80">
                  <motion.circle cx="40" cy="40" r="34" fill="none" stroke="#f5b919" strokeWidth="5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                  <motion.path d="M24 41l11 11 21-23" fill="none" stroke="#0f3d24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
                </svg>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. We&apos;ll be in touch soon.</p>
                <button className="btn btn-dark" onClick={() => setSent(false)}>Send another</button>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
