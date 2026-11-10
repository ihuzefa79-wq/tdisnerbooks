import Link from "next/link";
import Logo from "./Logo";
import { NAV, AMAZON_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,90 1080,-10 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo className="logo-sm" />
          <p>The entrepreneurial journey behind one of America&apos;s hottest sub chains, told by the people who lived it.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </div>
        <div>
          <h4>Get the Book</h4>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Kindle eBook</a>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Amazon Store</a>
          <Link href="/books/whats-a-quiznos">Book Details</Link>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="socials">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" /></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} What&apos;s A QuiZnos? · Todd C. Disner. All rights reserved.</span>
        <span>Crafted with passion &amp; a toasted sub.</span>
      </div>
    </footer>
  );
}
