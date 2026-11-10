"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SplitWords } from "./Motion";
import { Sparkles } from "./Effects";

export default function PageHero({ eyebrow, title, accent, sub, crumb }) {
  return (
    <section className="page-hero">
      <div className="hero-glow" />
      <Sparkles count={20} />
      <div className="container page-hero-inner">
        <motion.div
          className="crumbs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/">Home</Link> <span>/</span> <em>{crumb}</em>
        </motion.div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-title">
          <SplitWords text={title} delay={0.35} />{" "}
          {accent && <SplitWords text={accent} className="script-accent" delay={0.6} />}
        </h1>
        {sub && (
          <motion.p
            className="page-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {sub}
          </motion.p>
        )}
      </div>
      <svg className="page-hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path className="w1" d="M0,80 C320,10 720,130 1440,40 L1440,120 L0,120 Z" />
        <path className="w2" d="M0,100 C400,40 900,140 1440,70 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
