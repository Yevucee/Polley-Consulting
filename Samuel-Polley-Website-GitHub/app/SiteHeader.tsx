"use client";

import { useEffect, useState } from "react";

const REVEAL_START = 20;
const REVEAL_END = 170;

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#alice", label: "Alice" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function HeaderContent({ floating }: { floating?: boolean }) {
  return (
    <>
      <a className="wordmark" href="#top">
        Samuel Polley
      </a>
      <nav aria-label={floating ? "Primary navigation (floating)" : "Primary navigation"}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}

function getReveal(scrollY: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return scrollY > 100 ? 1 : 0;
  }

  const progress = (scrollY - REVEAL_START) / (REVEAL_END - REVEAL_START);
  return Math.min(1, Math.max(0, progress));
}

export default function SiteHeader() {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setReveal(getReveal(window.scrollY, media.matches));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      media.removeEventListener("change", update);
    };
  }, []);

  const heroStyle = {
    opacity: 1 - reveal,
    transform: `translateY(${-reveal * 10}px)`,
  };

  const floatStyle = {
    opacity: reveal,
    transform: `translateY(${(1 - reveal) * -100}%)`,
    boxShadow: `0 ${6 + reveal * 10}px ${24 + reveal * 28}px rgba(12, 12, 10, ${0.08 + reveal * 0.1})`,
    pointerEvents: reveal > 0.4 ? ("auto" as const) : ("none" as const),
  };

  return (
    <>
      <header
        className="siteHeader siteHeaderHero"
        style={heroStyle}
        aria-hidden={reveal > 0.85}
      >
        <HeaderContent />
      </header>
      <header
        className="siteHeader siteHeaderFloating"
        style={floatStyle}
        aria-hidden={reveal < 0.15}
      >
        <HeaderContent floating />
      </header>
    </>
  );
}
