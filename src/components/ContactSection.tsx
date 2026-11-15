import { useScrollFade } from "../hooks/useScrollFade";

export default function ContactSection() {
  const ref = useScrollFade();

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32"
      style={{ background: "hsl(40 30% 96%)" }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="scroll-fade-in max-w-4xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <p
            className="font-body text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "hsl(38 65% 38%)", letterSpacing: "0.35em" }}
          >
            Kontakt
          </p>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "hsl(30 15% 15%)",
              letterSpacing: "0.05em",
            }}
          >
            Bądź{" "}
            <span style={{ fontStyle: "italic", color: "hsl(38 65% 38%)" }}>
              z nami
            </span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Event details */}
          <div>
            <h3
              className="font-display text-2xl font-light mb-6"
              style={{ color: "hsl(30 15% 18%)" }}
            >
              Szczegóły wydarzenia
            </h3>

            <div className="space-y-5">
              {[
                {
                  icon: "",
                  label: "Miejsce",
                  value: (
                    <>
                      <a
                        style={{ color: "rgb(160, 114, 34)" }}
                        href="https://www.google.com/maps/place/Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+16,+43-100+Tychy/@50.1065686,18.9826269,17z/data=!3m1!4b1!4m6!3m5!1s0x4716b7f9878a77b7:0xcd9528cdeb4cd6ff!8m2!3d50.1065686!4d18.9852018!16s%2Fg%2F11j3f_sg2f?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mediateka Tychy, Marszałka Józefa Piłsudskiego 16
                      </a>
                      <span> (Otwórz w Google Maps)</span>
                    </>
                  ),
                },

                {
                  icon: "",
                  label: "Termin",
                  value: (
                    <>
                      <a
                        style={{ color: "rgb(160, 114, 34)" }}
                        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=D%C5%82ugowieczno%C5%9B%C4%87+Tychy&dates=20261008T170000/20261008T180000&location=Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+16,+43-100+Tychy&details"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        8 października 2026, godzina 17.00
                      </a>
                      <span> (Dodaj do Kalendarza Google)</span>
                    </>
                  ),
                },
                {
                  icon: "",
                  label: "Charakter",
                  value:
                    "Charytatywne wydarzenie jednorazowe (z możliwością cykliczności)",
                },
                {
                  icon: "",
                  label: "Wstęp",
                  value:
                    "Wolny, jedynym ograniczeniem jest ilość miejsc siedzących na widowni",
                },
                {
                  icon: "",
                  label: "Typ",
                  value:
                    "Charytatywne wydarzenie artystyczne - muzyka, taniec i panel dyskusyjny",
                },
                {
                  icon: "",
                  label: "Organizator spotkania",
                  value:
                    "Fundacja Internationaler Bund Polska. Celem statutowym Fundacji jest kompleksowe wsparcie oraz aktywizacja społeczna i zawodowa osób zagrożonych wykluczeniem społecznym, w szczególności ze względu na wiek, pochodzenie, miejsce zamieszkania, poziom wykształcenia czy status społeczny",
                },
                {
                  icon: "",
                  label: "Wsparcie",
                  value: "Tyskie Centrum Wolontariatu",
                },

                {
                  icon: "",
                  label: "Adres www",
                  value: "www.tychydlugowiecznosc.pl",
                  isLink: true,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="font-body text-xs tracking-wider uppercase mb-0.5"
                      style={{ color: "hsl(30 12% 55%)" }}
                    >
                      {item.label}
                    </p>
                    {item.isLink ? (
                      <a
                        href={`http://${item.value}`}
                        className="font-body text-base"
                        style={{ color: "hsl(38 65% 38%)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-body text-base"
                        style={{ color: "hsl(30 15% 22%)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR code info + info box */}
          <div>
            <h3
              className="font-display text-2xl font-light mb-6"
              style={{ color: "hsl(30 15% 18%)" }}
            >
              Kod QR
            </h3>

            <div
              className="p-6 mb-6 border"
              style={{
                borderColor: "hsl(38 25% 82%)",
                background: "hsl(38 30% 94%)",
              }}
            >
              <img
                src="/qr-dlugowiecznosc.svg"
                alt="Kod QR - dlugowiecznosc.tychy.pl"
                className="w-44 h-44 mx-auto mb-3"
                style={{ imageRendering: "crisp-edges" }}
              />
              <p
                className="text-center font-body text-sm mb-3"
                style={{ color: "hsl(30 12% 45%)" }}
              >
                Zeskanuj, aby wejść na stronę
              </p>
              <p
                className="text-center font-body text-xs tracking-wide"
                style={{ color: "hsl(38 65% 38%)" }}
              >
                tychydlugowiecznosc.pl
              </p>
              <div className="text-center mt-4">
                <a
                  href="/qr-dlugowiecznosc.png"
                  download="QR-Dlugowiecznosc.png"
                  className="inline-block font-body text-xs tracking-wider uppercase px-5 py-2 border transition-all duration-200"
                  style={{
                    color: "hsl(38 65% 38%)",
                    borderColor: "hsl(38 45% 72%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "hsl(38 65% 38%)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      "hsl(38 65% 38%)";
                  }}
                >
                  Pobierz PNG →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
