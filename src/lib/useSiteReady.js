"use client";
import { useEffect, useState } from "react";

/** true once the intro loader has finished (immediately on client-side navigations) */
export default function useSiteReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.__siteLoaded) {
      setReady(true);
      return;
    }
    const on = () => setReady(true);
    window.addEventListener("site:loaded", on);
    return () => window.removeEventListener("site:loaded", on);
  }, []);
  return ready;
}
