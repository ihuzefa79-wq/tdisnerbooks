import Link from "next/link";

export function LogoMark({ className = "" }) {
  return (
    <span className={`logo ${className}`} aria-label="What's A QuiZnos?">
      <span className="logo-script">What&apos;s A</span>
      <span className="logo-main">
        Qui<span className="gold">Z</span>nos<span className="logo-q">?</span>
      </span>
    </span>
  );
}

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className="logo-link" aria-label="Home">
      <LogoMark className={className} />
    </Link>
  );
}
