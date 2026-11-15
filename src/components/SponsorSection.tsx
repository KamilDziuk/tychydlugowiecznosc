import { useScrollFade } from "../hooks/useScrollFade";

export default function SponsorSection() {
  const ref = useScrollFade();

  return (
    <section
      id="sponsoripatroni"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(160deg, hsl(160 25% 16%) 0%, hsl(30 20% 14%) 100%)",
      }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="scroll-fade-in max-w-5xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "hsl(38 65% 55%)", letterSpacing: "0.35em" }}
          >
            Partner i sponsor spotkania
          </p>
          <h2
            className="font-display font-light pb-3"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            Certyfikowany Gabinet Medycyny Estetycznej Sensual Beauty w Tychach
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Sponsor card */}
        <div
          className="sponsor-card grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Photo */}
          <div
            className="relative overflow-hidden"
            style={{ minHeight: "30px" }}
          >
            <img
              src="/images/agnieszka-krzysztof-gemza.jpg"
              alt="Agnieszka Surgiel-Gemza i Krzysztof Gemza - Sensual Beauty Tychy"
              className="inset-0 w-full h-full object-cover"
              style={{ objectPosition: "27% 0%" }}
            />
            <div className="absolute  inset-0" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-center">
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "hsl(38 65% 55%)", letterSpacing: "0.3em" }}
            >
              Certyfikowany Gabinet Medycyny Estetycznej Sensual Beauty w
              Tychach.
            </p>
            <h3
              className="font-display font-light text-3xl mb-2"
              style={{ color: "#fff" }}
            >
              Agnieszka Surgiel-Gemza, magister kosmetolog i trycholog
            </h3>
            <h3
              className="font-display font-light text-3xl mb-5"
              style={{ color: "hsl(38 65% 55%)" }}
            >
              &amp; Dr Krzysztof Gemza
            </h3>

            <div
              className="h-px mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />

            <div
              className="font-body text-sm leading-relaxed space-y-3"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <p>
                Certyfikowany Gabinet Medycyny Estetycznej{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  Sensual Beauty
                </strong>{" "}
                w Tychach. To wyjątkowe miejsce na mapie nie tylko Śląska ale
                całej Polski stworzone z pasji do medycyny i miłości do
                naturalnego piękna.
              </p>
              <p>
                Gabinet stworzony przez:{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  Agnieszka Surgiel-Gemza
                </strong>{" "}
                i{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  Krzysztof Gemza
                </strong>
                .{" "}
              </p>
              <p>
                Twórcy Sensual Beauty są stałymi uczestnikami i prelegentami
                kongresów medycyny przeciwstarzeniowej w kraju i za granicą.
              </p>
            </div>

            <a
              href="https://www.sensualbeauty.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-body text-xs md:tracking-[0.25em] tracking-normal uppercase px-2 md:px-8 py-3 self-start transition-all duration-300"
              style={{
                background: "hsl(38 65% 55%)",
                color: "hsl(30 20% 12%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "hsl(38 65% 65%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "hsl(38 65% 55%)";
              }}
            >
              www.sensualbeauty.pl →
            </a>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-center mt-14">
          <div
            className="font-display italic text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            „Dzięki wielkiemu sercu i tytanicznej pracy, każdy pacjent może
            spełniać swoje marzenia o pięknym, młodzieńczym i naturalnym
            wyglądzie."
          </div>
        </blockquote>
      </div>
    </section>
  );
}
