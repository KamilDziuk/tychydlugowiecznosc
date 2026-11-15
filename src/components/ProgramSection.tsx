import { useScrollFade } from "../hooks/useScrollFade";
import { program } from "../data/artists";

export default function ProgramSection() {
  const ref = useScrollFade();

  return (
    <section
      id="program"
      className="py-24 md:py-32"
      style={{ background: "hsl(40 30% 96%)" }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="scroll-fade-in max-w-3xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body text-xs tracking-[0.35em] uppercase mb-4"
            style={{
              color: "hsl(38 65% 38%)",
              letterSpacing: "0.35em",
            }}
          >
            Program
          </p>

          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "hsl(30 15% 15%)",
              letterSpacing: "0.05em",
            }}
          >
            Ramowy{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "hsl(38 65% 38%)",
              }}
            >
              przebieg wieczoru
            </span>
          </h2>

          <div className="section-divider mt-6" />
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {program.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 md:gap-10 group"
              style={{
                paddingTop: i === 0 ? 0 : "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom:
                  i < program.length - 1 ? "1px solid hsl(38 25% 88%)" : "none",
              }}
            >
              {/* Time */}
              <div className="flex-shrink-0 w-24 md:w-32 text-right">
                {item.time && (
                  <span
                    className="font-display text-xl md:text-2xl font-light"
                    style={{ color: "hsl(38 65% 38%)" }}
                  >
                    {item.time}
                  </span>
                )}
              </div>

              {/* Dot */}
              <div className="hidden md:flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full border-2 mt-1.5 transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: "hsl(38 65% 38%)",
                    background: "hsl(40 30% 96%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 pb-1">
                <h3
                  className="font-display text-xl font-normal"
                  style={{
                    color: "hsl(30 15% 18%)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>

                {item.description && (
                  <p
                    className="font-body text-sm mt-1"
                    style={{ color: "hsl(30 12% 48%)" }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div
          className="mt-16 border p-8 md:p-10 "
          style={{
            borderColor: "hsl(38 30% 78%)",
            background: "hsl(38 30% 94%)",
          }}
        >
          <section>
            <h3
              className="font-display text-2xl italic text-center"
              style={{ color: "hsl(30 15% 30%)" }}
            >
              Temat merytoryczny
            </h3>

            <div
              className="mt-6 space-y-4 text-sm leading-relaxed md:text-base"
              style={{ color: "hsl(30 12% 48%)" }}
            >
              <p>
                Wiodącym tematem merytorycznym spotkania jest pojęcie
                długowieczności.
              </p>

              <p>
                Chcemy przekazać przesłanie, jak można sprawić, aby organizm
                funkcjonował sprawnie do późnej starości, a co za tym idzie -
                abyśmy byli aktywni przez całe życie, dzieląc się swoją wiedzą,
                doświadczeniem i pomocą z innymi ludźmi.
              </p>

              <p>
                Podczas spotkania wskażemy, poprzez krótkie prelekcje, sposoby
                sprzyjające zdrowiu i długowieczności:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Jak czerpać przykłady ze sprawdzonych sposobów - strefy Blue
                  Zones, miejsca na świecie, gdzie długowieczność nie jest
                  problemem, lecz codziennością.
                </li>

                <li>
                  Akceptacja samego siebie jako sposób na otwarcie się na
                  innych.
                </li>

                <li>
                  Aktywność fizyczna i umysłowa wspierająca spowolnienie procesu
                  starzenia się.
                </li>

                <li>Profilaktyka zdrowotna w celu kontroli stanu zdrowia.</li>

                <li>Suplementacja - co jest najważniejsze.</li>

                <li>
                  Charytatywna i wolontariacka aktywność społeczna jako nowy cel
                  w życiu.
                </li>

                <li>
                  Pielęgnacja ukierunkowana na redukcję procesów starzenia się i
                  poprawę samopoczucia.
                </li>
              </ol>
            </div>
          </section>

          <div
            className="my-8 h-px"
            style={{ background: "hsl(38 25% 82%)" }}
          />

          <section>
            <h3
              className="font-display text-2xl italic text-center"
              style={{ color: "hsl(30 15% 30%)" }}
            >
              Motyw wiodący
            </h3>

            <p
              className="mt-6 text-sm leading-relaxed md:text-base"
              style={{ color: "hsl(30 12% 48%)" }}
            >
              Wiodącym motywem artystycznym będą utwory wykonywane przez
              międzypokoleniową grupę piosenkarek, muzyków oraz tancerek z
              bogatym dorobkiem artystycznym. Utwory będą nawiązywać do
              długowieczności, pozytywnego postrzegania rzeczywistości w wieku
              dojrzałym, radości ze spotkań z ludźmi i bliskimi, akceptacji
              samego siebie, spokoju wewnętrznego oraz przekonania, że najlepsze
              jeszcze przed nami.
              <br />
              <br />
              Dodatkową oprawę stanowić będzie taniec nowoczesny prezentowany
              przez duet młodych, utalentowanych tancerek, harmonijnie
              współgrający z występami zaproszonych artystów.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
