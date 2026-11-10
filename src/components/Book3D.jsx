"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Book3D({ cover = "/img/cover.png", size = "lg", float = true, interactive = true }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const ry = useSpring(useTransform(mx, [0, 1], [-45, -5]), { stiffness: 120, damping: 16 });
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 16 });

  return (
    <div
      className={`book3d-wrap ${size}`}
      onMouseMove={
        interactive
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              mx.set((e.clientX - r.left) / r.width);
              my.set((e.clientY - r.top) / r.height);
            }
          : undefined
      }
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className={float ? "book3d-float" : ""}>
        <motion.div className="book3d" style={{ rotateY: ry, rotateX: rx }}>
          <div className="book3d-front">
            <img src={cover} alt="What's A QuiZnos? book cover" draggable="false" />
            <span className="book3d-shine" />
          </div>
          <div className="book3d-spine">
            <span>WHAT&apos;S A QUIZNOS? · TODD C DISNER</span>
          </div>
          <div className="book3d-pages" />
          <div className="book3d-back" />
        </motion.div>
      </div>
      <div className="book3d-shadow" />
    </div>
  );
}
