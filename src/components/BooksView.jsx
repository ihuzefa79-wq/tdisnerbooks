"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Book3D from "./Book3D";
import AmazonButton from "./AmazonButton";
import { Reveal, Magnetic } from "./Motion";
import { BOOKS } from "@/lib/site";

export default function BooksView() {
  return (
    <section className="section cream books-sec">
      <div className="container">
        {BOOKS.map((b) => (
          <Reveal key={b.slug} y={80}>
            <article className="book-card">
              <div className="book-card-bg" />
              <div className="book-card-visual">
                <div className="shelf-glow" />
                <Book3D cover={b.cover} size="lg" />
                <div className="shelf" />
              </div>
              <div className="book-card-body">
                <span className="tag">Featured · New Release</span>
                <h2 className="book-title">{b.title}</h2>
                <p className="book-subtitle">{b.subtitle}</p>
                <p className="book-by">by <strong>{b.author}</strong></p>
                <p className="lead">{b.blurb}</p>
                <div className="chips">
                  {b.formats.map((f) => <span key={f} className="chip">{f}</span>)}
                  <span className="chip ghost">{b.genre}</span>
                </div>
                <div className="btn-row">
                  <AmazonButton href={b.amazon} />
                  <Magnetic>
                    <Link href={`/books/${b.slug}`} className="btn btn-dark">View Details</Link>
                  </Magnetic>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="coming-grid">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="coming-card"
              initial={{ opacity: 0, y: 50, rotate: -2 + i * 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, rotate: 0 }}
            >
              <div className="coming-cover">
                <span>?</span>
              </div>
              <h4>More stories coming soon</h4>
              <p>New titles from Todd are in the oven. Check back for updates.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
