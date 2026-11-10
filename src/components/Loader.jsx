"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LETTERS = ["Q", "u", "i", "Z", "n", "o", "s"];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading -> leaving -> gone

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    // timer-based (not rAF) so it always completes, even in background tabs
    const start = Date.now();
    const DURATION = 2600;
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / DURATION);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t >= 1) {
        clearInterval(id);
        setTimeout(() => setPhase("leaving"), 300);
      }
    }, 30);
    const failsafe = setTimeout(() => setPhase((p) => (p === "loading" ? "leaving" : p)), 5000);
    return () => {
      clearInterval(id);
      clearTimeout(failsafe);
    };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    document.documentElement.classList.remove("is-loading");
    window.__siteLoaded = true;
    window.dispatchEvent(new Event("site:loaded"));
    const t = setTimeout(() => setPhase("gone"), 1300);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className={`loader ${phase === "leaving" ? "is-leaving" : ""}`} aria-hidden={phase === "leaving"}>
      <div className="loader-panel top" />
      <div className="loader-panel bottom" />

      <div className="loader-stage">
        <div className="loader-orbit">
          <span className="orbit-dot" />
        </div>
        <div className="loader-orbit second" />

        <div className="loader-logo">
          <motion.span
            className="logo-script"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
          >
            What&apos;s A
          </motion.span>
          <svg className="loader-swash" viewBox="0 0 200 20">
            <motion.path
              d="M4 14 C 60 2, 140 2, 196 10"
              fill="none"
              stroke="#f5b919"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            />
          </svg>
          <span className="logo-main">
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                className={l === "Z" ? "gold" : ""}
                style={{ display: "inline-block" }}
                initial={{ y: 60, opacity: 0, rotate: -12 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.7 + i * 0.07 }}
              >
                {l}
              </motion.span>
            ))}
            <motion.span
              className="logo-q"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: [0, 1.35, 1], rotate: [-90, 15, 0] }}
              transition={{ duration: 0.7, delay: 1.35 }}
            >
              ?
            </motion.span>
          </span>
        </div>

        <div className="loader-progress">
          <div className="loader-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-meta">
            <span>
              Turning the page<span className="dots"><i>.</i><i>.</i><i>.</i></span>
            </span>
            <span className="loader-num">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
