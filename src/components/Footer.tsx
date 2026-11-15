export default function Footer() {
  return (
    <footer
      className=" flex py-12 text-center "
      style={{
        background: "hsl(30 20% 10%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Logo text */}
        <p
          className="font-display text-2xl font-light tracking-[0.25em] uppercase mb-2"
          style={{ color: "hsl(38 65% 50%)" }}
        >
          Długowieczność
        </p>
        <p
          className="font-body text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.25em" }}
        >
          Tychy
        </p>

        {/* Divider */}
        <div
          className="w-16 h-px mx-auto mb-8"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            ["#o-wydarzeniu", "O wydarzeniu"],
            ["#artyści", "Artyści"],
            ["#program", "Program"],
            ["#sponsor", "Sponsor"],
            ["#kontakt", "Kontakt"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-body text-xs tracking-wider uppercase transition-colors"
              style={{
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "hsl(38 65% 55%)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        <p
          className="font-body text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          © 2026 Długowieczność - Tychy. Wszelkie prawa zastrzeżone.
        </p>
        <p
          className="font-body text-xs mt-1"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          Partner i sponsor:{" "}
          <a
            href="https://www.sensualbeauty.pl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Sensual Beauty Tychy
          </a>
        </p>
        <p
          className="font-body text-xs mt-1"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
Informacje prawne:{" "}
          <a
            href="../../images/polityka-prywatnosci.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >   Polityka prywatności</a>
        </p>
        <p
          className="font-body text-xs mt-1"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          Wykonanie:{" "}
          <a
            href="https://kamildziuk.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Kamil Dziuk
          </a>
        </p>
      </div>
    </footer>
  );
}
