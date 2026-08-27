"use client";

import { useEffect, useState } from "react";

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

export default function SiteHeader() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setFloating(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="siteHeader siteHeaderHero">
        <HeaderContent />
      </header>
      <header
        className={`siteHeader siteHeaderFloating${floating ? " isVisible" : ""}`}
        aria-hidden={!floating}
      >
        <HeaderContent floating />
      </header>
    </>
  );
}
