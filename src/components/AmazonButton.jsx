import { AMAZON_URL } from "@/lib/site";
import { Magnetic } from "./Motion";

export function AmazonIcon() {
  return (
    <svg className="amz" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.9 8.6c0-1.4.1-2.6-.7-3.8-.6-.9-1.6-1.4-2.7-1.4-1.7 0-3.6.8-4 2.9 0 .3.2.4.3.4l1.8.2c.2 0 .3-.2.3-.4.2-.8.8-1.2 1.6-1.2.4 0 .9.2 1.1.5.3.4.2.9.2 1.3v.3c-1.1.1-2.6.2-3.6.6-1.2.5-2.1 1.6-2.1 3.1 0 2 1.3 3 2.9 3 1.4 0 2.1-.3 3.2-1.4.4.5.5.8 1.1 1.3.2.1.4.1.5 0l1.4-1.2c.2-.1.1-.3 0-.5-.3-.5-.7-.9-.7-1.8V8.6zm-2.5 2.6c0 .7 0 1.3-.4 1.9-.3.5-.8.8-1.3.8-.7 0-1.2-.6-1.2-1.4 0-1.6 1.4-1.9 2.9-1.9v.6z" />
      <path d="M20.7 17.3C18.3 19.1 14.8 20 11.8 20c-4.2 0-8-1.6-10.9-4.2-.2-.2 0-.5.3-.3 3.1 1.8 6.9 2.9 10.8 2.9 2.7 0 5.6-.6 8.3-1.7.4-.2.7.3.4.6z" />
      <path d="M21.7 16.1c-.3-.4-2-.2-2.8-.1-.2 0-.3-.2-.1-.3 1.4-1 3.6-.7 3.9-.4.3.3-.1 2.6-1.4 3.7-.2.2-.4.1-.3-.1.3-.8 1-2.4.7-2.8z" />
    </svg>
  );
}

export default function AmazonButton({ label = "Buy on Amazon", href = AMAZON_URL, size = "", variant = "gold" }) {
  return (
    <Magnetic>
      <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn-${variant} ${size}`}>
        <AmazonIcon />
        <span>{label}</span>
        <span className="arrow">→</span>
      </a>
    </Magnetic>
  );
}
