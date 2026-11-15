import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [days, setDays] = useState();
  const [month, setMonth] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [sek, setSek] = useState();
  useEffect(() => {
    function testdesf() {
      let test: any = new Date("2026-10-08T17:00:00");
      let test1: any = new Date();
      let test3 = test - test1;
      const days: any = Math.floor(test3 / (1000 * 60 * 60 * 24));
      const month: any = Math.floor(test3 / (1000 * 60 * 60 * 24 * 30));
      const hours: any = Math.floor((test3 / (1000 * 60 * 60)) % 24);
      const minutes: any = Math.floor((test3 / (1000 * 60)) % 60);
      const seconds: any = Math.floor((test3 / 1000) % 60);
      setDays(days);
      setHours(hours);
      setMonth(month);
      setMinutes(minutes);
      setSek(seconds);
    }
    testdesf();
    setInterval(testdesf, 1000);
    const el = titleRef.current;
    const logo = logoRef.current;
    if (!el || !logo) return;

    logo.style.opacity = "0";
    logo.style.transform = "translateY(-16px)";
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    const t1 = setTimeout(() => {
      logo.style.transition = "opacity 1s ease, transform 1s ease";
      logo.style.opacity = "1";
      logo.style.transform = "translateY(0)";
    }, 100);

    const t2 = setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col  items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(160 35% 18%) 0%, hsl(30 20% 12%) 50%, hsl(38 40% 22%) 100%)",
      }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180,140,60,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Ornamental lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0  right-0 h-px opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(38 65% 55%), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto ">
        {/* Logo / ornament */}
        {/* Pre-title */}
        <p
          className="font-body text-xs tracking-[0.4em] uppercase mb-8  md: mb-30 opacity-0"
          style={{
            color: "hsl(38 65% 60%)",
            letterSpacing: "0.4em",
            animation: "fadeUp 1s ease 0.7s forwards",
          }}
        >
          Tychy &nbsp;·&nbsp; Wydarzenie artystyczne
        </p>
        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display font-light leading-none mb-6 text-[30px] md:text-[90px] "
          style={{
            letterSpacing: "0.15em",
            color: "#fff",
          }}
        >
          DŁUGO
          <span
            style={{
              display: "block",
              background:
                "linear-gradient(135deg, hsl(38 65% 55%), hsl(44 80% 68%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WIECZNOŚĆ
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className="h-px flex-1 max-w-16"
            style={{ background: "hsl(38 65% 45%)" }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: "hsl(38 65% 55%)" }}
          />
          <div
            className="h-px flex-1 max-w-16"
            style={{ background: "hsl(38 65% 45%)" }}
          />
        </div>
        {/* Subtitle */}
        <p
          className="font-display italic text-xl md:text-2xl mb-15 font-light "
          style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}
        >
          Muzyka, taniec, sztuka i wiedza w celebracji życia
        </p>
<div
  className="flex flex-col items-center   justify-center  mx-0 md:mx-40 gap-4 md:flex-row md:gap-3 px-10 py-10 md:px-0 md:py-4"
  style={{ backgroundColor: "#007FC2" }}
>
  <p
    className="m-0 mt-0  md:mt-15 text-center md:text-left"
    style={{
      fontFamily: '"Proxima Nova", sans-serif',
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "17px",
      lineHeight: 1.2,
      color: "#fff",
    }}
  >
    Oficjalne wydarzenie obchodów
  </p>

  <img
    src="/IVY_Logo_RGB_Stack_PL.webp"
    alt="Logo IVY"
    className="w-[200px] h-auto"
  />
</div>

        <p
          className="font-display text-xl md:text-2xl mb-6 mt-6 font-light"
          style={{ color: "hsl(38 65% 60%)" }}
        >
          08-10-2026 17:00
        </p>

        <div className="relative md:flex items-center  justify-center gap-7 mb-8   md:p-5">
          <div className="text-center">
            <h4
              className="font-display italic text-xl md:text-2xl mb-1 font-light"
              style={{
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.05em",
              }}
            >
              Do wydarzenia pozostało
            </h4>
          </div>
          <div className="w-px  h-2 md:h-12 bg-white/20" />
          <div className="text-center">
            <span className="block font-body text-[9px] uppercase tracking-[0.3em] text-white/70">
              dni
            </span>
            <h4
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: "hsl(38 65% 60%)" }}
            >
              {days}
            </h4>
          </div>

          <div className="w-px  h-2 md:h-12 bg-white/20" />

          <div className="text-center">
            <span className="block font-body text-[9px] uppercase tracking-[0.3em] text-white/70">
              miesięcy
            </span>
            <h4
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: "hsl(38 65% 60%)" }}
            >
              {month}
            </h4>
          </div>
          <div className="w-px   h-2 md:h-12 bg-white/20" />

          <div className="text-center">
            <span className="block font-body text-[9px] uppercase tracking-[0.3em] text-white/70">
              godzin
            </span>
            <h4
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: "hsl(38 65% 60%)" }}
            >
              {hours}
            </h4>
          </div>
          <div className="w-px   h-2 md:h-12 bg-white/20" />

          <div className="text-center">
            <span className="block font-body text-[9px] uppercase tracking-[0.3em] text-white/70">
              miniut
            </span>
            <h4
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: "hsl(38 65% 60%)" }}
            >
              {minutes}
            </h4>
          </div>
          <div className="w-px  h-2 md:h-12 bg-white/20" />

          <div className="text-center">
            <span className="block font-body text-[9px] uppercase tracking-[0.3em] text-white/70">
              sekund
            </span>
            <h4
              className="font-display text-4xl mb-4 md:mb-0 md:text-5xl font-light"
              style={{ color: "hsl(38 65% 60%)" }}
            >
              {sek}
            </h4>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#o-wydarzeniu"
          className="inline-block font-body text-xs tracking-[0.25em] uppercase md:mb-10  mb-0 px-10 py-3.5 border transition-all duration-300"
          style={{
            color: "hsl(38 65% 65%)",
            borderColor: "hsl(38 65% 45%)",
            letterSpacing: "0.25em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "hsl(38 65% 38%)";
            el.style.color = "#fff";
            el.style.borderColor = "hsl(38 65% 38%)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.color = "hsl(38 65% 65%)";
            el.style.borderColor = "hsl(38 65% 45%)";
          }}
        >
          Dowiedz się więcej
        </a>
        <span className="relative inline-flex items-center justify-center md:hidden  mt-7">
          {/* ping background */}
          <span className="absolute h-10 w-40 mb-10 animate-ping bg-yellow-800 opacity-30" />

          {/* button */}
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=D%C5%82ugowieczno%C5%9B%C4%87+Tychy&dates=20261008T170000/20261008T180000&location=Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+16,+43-100+Tychy&details"
            target="_blank"
            rel="noopener noreferrer"
            className=" md:hidden z-30  inline-flex font-body  text-xs tracking-[0.25em] uppercase px-6 pt-3 mb-10 border transition-all duration-300"
            style={{
              color: "hsl(38 65% 65%)",
              borderColor: "hsl(38 65% 45%)",
              letterSpacing: "0.25em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "hsl(38 65% 38%)";
              el.style.color = "#fff";
              el.style.borderColor = "hsl(38 65% 38%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "hsl(38 65% 65%)";
              el.style.borderColor = "hsl(38 65% 45%)";
            }}
          >
            <Calendar className="w-9 h-8 pb-2" />
            Zapisz wydarzenie
          </a>
        </span>
      </div>
    </section>
  );
}
