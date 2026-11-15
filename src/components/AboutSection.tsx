import { useScrollFade } from "../hooks/useScrollFade";

export default function AboutSection() {
  const ref = useScrollFade();

  return (
    <section
      id="o-wydarzeniu"
      className="py-24 md:py-32"
      style={{ background: "hsl(40 30% 96%)" }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="scroll-fade-in max-w-4xl mx-auto px-6 text-center"
      >
        {/* Section label */}
        <p
          className="font-body text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "hsl(38 65% 38%)", letterSpacing: "0.35em" }}
        >
          O wydarzeniu
        </p>

        <h2
          className="font-display font-light mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "hsl(30 15% 15%)",
            letterSpacing: "0.05em",
          }}
        >
          Uroczystość{" "}
          <span style={{ fontStyle: "italic", color: "hsl(38 65% 38%)" }}>
            pięknego życia
          </span>
        </h2>

        <div className="section-divider mb-8" />

        <div
          className="font-body text-base md:text-lg leading-relaxed space-y-5 max-w-2xl mx-auto"
          style={{ color: "hsl(30 12% 35%)" }}
        >
          <p>
            <strong style={{ color: "hsl(30 15% 18%)", fontWeight: 600 }}>
              Drugie Życie, czyli Tyskie Spotkania z Długowiecznością
            </strong>{" "}
            to wyjątkowe charytatywne wydarzenie artystyczne odbywające się w
            Tychach, łączące muzykę, taniec i słowną refleksję nad pięknem
            doświadczonego życia.
          </p>
          <p>
            Spotkanie artystów różnych pokoleń i dyscyplin - od utalentowanej
            młodzieży po uznanych twórców - tworzy niepowtarzalny dialog między
            przeszłością a przyszłością.
          </p>
          <p>
            To przestrzeń, w której sztuka i wiedza staje się mostem łączącym
            pokolenia, a wspólne przeżycia artystyczne nabierają szczególnego
            znaczenia.
          </p>
        </div>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[
            { number: "7", label: "artystów i zespołów", icon: "" },
            { number: "2", label: "dyscypliny artystyczne", icon: "" },
            { number: "7", label: "paneli dyskusyjnych", icon: "" },
          ].map((item) => (
            <div
              key={item.label}
              className="py-8 px-6 border text-center"
              style={{ borderColor: "hsl(38 25% 82%)" }}
            >
              <div
                className="font-display text-5xl font-light mb-1"
                style={{ color: "hsl(38 65% 38%)" }}
              >
                {item.number}
              </div>
              <div
                className="font-body text-sm tracking-wide"
                style={{ color: "hsl(30 12% 45%)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
