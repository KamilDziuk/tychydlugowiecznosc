import { useState } from "react";
import { useScrollFade } from "../hooks/useScrollFade";
import { speakers, type Speakers } from "../data/speakers";

function SpeakersModal({
  speakers,
  onClose,
}: {
  speakers: Speakers;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(5px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{
          background: "hsl(40 35% 98%)",
          borderTop: "3px solid hsl(38 65% 38%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-1 font-body text-sm"
          style={{ color: "hsl(30 12% 50%)" }}
        >
          ✕ Zamknij
        </button>

        <div className="flex flex-col md:flex-row " id="prelegenci-inforamcjie">
          {speakers.photo && (
            <div className="md:w-48 flex-shrink-0">
              <img
                src={speakers.photo}
                alt={speakers.name}
                className="w-full h-90   object-cover  object-[27%_10%]"
              />
            </div>
          )}
          <div className="p-8 flex-1">
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "hsl(38 65% 38%)", letterSpacing: "0.3em" }}
            >
              {speakers.role}
            </p>
            <h3
              className="font-display font-light text-3xl mb-4"
              style={{ color: "hsl(30 15% 15%)" }}
            >
              {speakers.name}
            </h3>
            <div
              className="h-px mb-5"
              style={{ background: "hsl(38 25% 82%)" }}
            />
            <div
              className="font-body text-sm leading-relaxed whitespace-pre-line"
              style={{ color: "hsl(30 12% 35%)" }}
            >
              {speakers.fullBio}
            </div>
            {speakers.website && (
              <a
                href={speakers.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-body text-xs tracking-wider uppercase"
                style={{ color: "hsl(38 65% 38%)" }}
              >
                {speakers.website} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeakersCard({ speakers }: { speakers: Speakers }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#prelegenci-inforamcjie"
        className="speakers-card group cursor-pointer"
        onClick={() => setOpen(true)}
        style={{ borderBottom: "1px solid hsl(38 25% 85%)" }}
      >
        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: "120%" }}
        >
          {speakers.photo ? (
            <img
              src={speakers.photo}
              alt={speakers.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "top center" }}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "rgba(20, 18, 16, 0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span
                className="font-display text-6xl font-light"
                style={{ color: "hsl(38 65% 55%)" }}
              >
                {speakers.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div
            className="speakers-overlay absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(20,14,8,0.9) 0%, rgba(20,14,8,0.3) 60%, transparent 100%)",
            }}
          >
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: "hsl(38 65% 65%)", letterSpacing: "0.2em" }}
            >
              Czytaj więcej
            </span>
          </div>
        </div>

        <div className="py-5 px-1">
          <p
            className="font-body text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: "hsl(38 65% 38%)", letterSpacing: "0.25em" }}
          >
            {speakers.role}
          </p>
          <h3
            className="font-display font-normal text-xl"
            style={{ color: "rgb(215, 160, 66)", letterSpacing: "0.02em" }}
          >
            {speakers.name}
          </h3>
          <p
            className="font-body text-sm mt-2 leading-relaxed"
            style={{ color: "hsl(30 12% 45%)" }}
          >
            {speakers.shortBio}
          </p>
        </div>
      </a>

      {open && (
        <SpeakersModal speakers={speakers} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

export default function SpeakerssSection() {
  const ref = useScrollFade();

  return (
    <section
      id="prelegenci"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(160deg, hsl(21, 35%, 18%) 0%, hsl(30 20% 12%) 50%, hsl(38 40% 22%) 100%)",
      }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="scroll-fade-in max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "hsl(38 65% 55%)", letterSpacing: "0.35em" }}
          >
            Prelegenci
          </p>
          <h2
            className="font-display font-light mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            Panele{" "}
            <span style={{ fontStyle: "italic", color: "hsl(38 65% 55%)" }}>
              Tematyczne
            </span>
          </h2>

          <ol
            className=" text-left text-[19px] "
            style={{
              color: "rgb(255 255 255 / 60%)",
              listStyleType: "upper-roman",
              paddingLeft: "4rem",
            }}
            type="I"
          >
            <li>
              Jak czerpać przykłady ze sprawdzonych sposobów - strefy Blue
              Zones, miejsca na świecie, gdzie długowieczność nie jest
              problemem, lecz codziennością.
            </li>
            <li>
              Akceptacja samego siebie jako sposób na otwarcie się na innych.
            </li>
            <li>
              Aktywność fizyczna i umysłowa wspierająca spowolnienie procesu
              starzenia się.
            </li>
            <li>Profilaktyka zdrowotna w celu kontroli stanu zdrowia.</li>
            <li>Suplementacja - co jest najważniejsze.</li>
            <li>
              Charytatywna, wolontariacka aktywność społeczna jako nowy cel w
              życiu.
            </li>
            <li>
              Pielęgnacja ukierunkowana na redukcję procesów starzenia się i
              poprawę samopoczucia.
            </li>
          </ol>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speakers) => (
            <SpeakersCard key={speakers.id} speakers={speakers} />
          ))}
        </div>

        <p
          className="text-center font-body text-sm mt-10 italic"
          style={{ color: "hsl(30 12% 45%)" }}
        >
          Kliknij na kartę artysty, aby przeczytać pełną biografię
        </p>
      </div>
    </section>
  );
}
