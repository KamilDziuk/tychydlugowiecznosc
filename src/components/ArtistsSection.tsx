import { useState } from "react";
import { useScrollFade } from "../hooks/useScrollFade";
import { artists, type Artist } from "../data/artists";

function ArtistModal({
  artist,
  onClose,
}: {
  artist: Artist;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
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

        <div className="flex flex-col md:flex-row">
          {artist.photo && (
            <div className="md:w-48 flex-shrink-0">
              <img
                id="artysci-inforamcjie"
                src={artist.photo}
                alt={artist.name}
                className="w-full h-90   object-cover  object-[27%_10%]"

              />
            </div>
          )}
          <div className="p-8 flex-1">
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "hsl(38 65% 38%)", letterSpacing: "0.3em" }}
            >
              {artist.role}
            </p>
            <h3
              className="font-display font-light text-3xl mb-4"
              style={{ color: "hsl(30 15% 15%)" }}
            >
              {artist.name}
            </h3>
            <div
              className="h-px mb-5"
              style={{ background: "hsl(38 25% 82%)" }}
            />
            <div
              className="font-body text-sm leading-relaxed whitespace-pre-line"
              style={{ color: "hsl(30 12% 35%)" }}
            >
              {artist.fullBio}
            </div>
            {artist.website && (
              <a
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-body text-xs tracking-wider uppercase"
                style={{ color: "hsl(38 65% 38%)" }}
              >
                {artist.website} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtistCard({ artist }: { artist: Artist }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#artysci-inforamcjie"
        className="artist-card group cursor-pointer"
        onClick={() => setOpen(true)}
        style={{ borderBottom: "1px solid hsl(38 25% 85%)" }}
      >
        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: "120%" }}
        >
          {artist.photo ? (
            <img
              src={artist.photo}
              alt={artist.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 object-[27%_0%]"

            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(30 20% 20%), hsl(160 20% 22%))",
              }}
            >
              <span
                className="font-display text-6xl font-light"
                style={{ color: "hsl(38 65% 55%)" }}
              >
                {artist.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div
            className="artist-overlay absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300"
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
            {artist.role}
          </p>
          <h3
            className="font-display font-normal text-xl"
            style={{ color: "rgb(215, 160, 66)", letterSpacing: "0.02em" }}
          >
            {artist.name}
          </h3>
          <p
            className="font-body text-sm mt-2 leading-relaxed"
            style={{ color: "hsl(30 12% 45%)" }}
          >
            {artist.shortBio}
          </p>
        </div>
      </a>
      {open && <ArtistModal artist={artist} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function ArtistsSection() {
  const ref = useScrollFade();

  return (
    <section
      id="artyści"
      className="py-24 md:py-32"
      style={{ background: "hsl(30 20% 12%)" }}
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
            Artyści
          </p>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            Wyjątkowi{" "}
            <span style={{ fontStyle: "italic", color: "hsl(38 65% 55%)" }}>
              wykonawcy
            </span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
