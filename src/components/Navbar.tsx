import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#o-wydarzeniu", label: "O wydarzeniu" },
    { href: "#artyści", label: "Artyści" },
    { href: "#program", label: "Program" },
    { href: "#sponsoripatroni", label: "sponsor i patroni" },
    { href: "#prelegenci", label: "prelegenci" },
    { href: "#kontakt", label: "Kontakt" },
    {
  href: "https://calendar.google.com/calendar/u/0/r/eventedit?text=D%C5%82ugowieczno%C5%9B%C4%87+Tychy&dates=20261008T170000/20261008T180000&location=Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+16,+43-100+Tychy&details",
  label: (
    <span className="relative">
      <span className="md:absolute relative left-1/2 top-1/2 h-8 w-23 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-90 bg-green-700"></span>

      <div className="items-center justify-center">
        <span
          className="relative inline-flex h-12 p-1 items-center justify-center uppercase border cursor-pointer transition-all duration-300"
          style={{
            borderColor: "#166534",
            background: "#166534",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#14532d";
            el.style.borderColor = "#14532d";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "#166534";
            el.style.borderColor = "#166534";
          }}
        >
          <Calendar className="w-7 p-0.5" />
          Zapisz wydarzenie
        </span>
      </div>
    </span>

      ),
    },
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250, 246, 238, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-27">
        <a href="#top" aria-label="Długowieczność - strona główna">
          <img
            src="/logo.webp"
            className=" w-45 pt-5  md:w-55 md:pt-5"
            alt="logo"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] tracking-wider uppercase"
              style={{
                color: scrolled ? "hsl(30 15% 30%)" : "rgba(255,255,255,0.85)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "hsl(38 65% 38%)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = scrolled
                  ? "hsl(30 15% 30%)"
                  : "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all"
              style={{ background: scrolled ? "hsl(38 65% 38%)" : "#fff" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(250, 246, 238, 0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-body text-sm tracking-wider uppercase py-3 border-b"
              style={{
                color: "hsl(30 15% 30%)",
                borderColor: "hsl(38 25% 85%)",
                letterSpacing: "0.12em",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
