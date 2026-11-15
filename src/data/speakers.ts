export interface Speakers {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo?: string;
  website?: string;
  social?: { label: string; url: string }[];
}

export const speakers: Speakers[] = [
  {
    id: "ag",
    name: "mgr Agnieszka Surgiel-Gemza",
    role: "prelegentka",
    shortBio: `kosmetologiem i dyplomowanym trychologiem z
wieloletnim doświadczeniem i pasjonatką terapii laserowych, opracowuje nowe protokoły

rewitalizacji skóry i stale wprowadza nowe rozwiązania terapeutyczne w celu podwyższenia
skuteczności zabiegów kosmetologicznych i trychologicznych.`,
    fullBio: `Mgr Agnieszka Surgiel-Gemza jest kosmetologiem i dyplomowanym trychologiem z
wieloletnim doświadczeniem i pasjonatką terapii laserowych, opracowuje nowe protokoły

rewitalizacji skóry i stale wprowadza nowe rozwiązania terapeutyczne w celu podwyższenia
skuteczności zabiegów kosmetologicznych i trychologicznych. Przekazuje również swoją
wiedzę i doświadczenie będąc wykładowcą akademickim na studiach o kierunku
kosmetologia w Uniwersytecie Jana Długosza w Częstochowie oraz SWSM w Katowicach.
Dzięki wielkiemu sercu, bogatemu doświadczeniu oraz tytanicznej pracy jaką doktor
Krzysztof Gemza oraz mgr Agnieszka Surgiel - Gemza włożyli w stworzenie Sensual Beauty
dzisiaj każdy pacjent może w tym magicznym miejscu spełniać swoje marzenia o pięknym,
młodzieńczym i naturalnym wyglądzie, jak również może znaleźć rozwiązanie na problemy i
defekty estetyczne związane ze starzeniem się organizmu ludzkiego.`,
    photo: "/images/mg.jpg",
  },
  {
    id: "kg",
    name: "dr Krzysztof Gemza",
    role: "prelegent",
    shortBio: `Dr Krzysztof Gemza już ponad 35 lat jako lekarz, a blisko 13 lat - po uzyskaniu dyplomu na
studiach o kierunku Medycyna Estetyczna dla Lekarzy - jako lekarz zajmujący się medycyną
estetyczno - naprawczą - z niezwykłą empatią, specjalistyczną i ugruntowaną wiedzą.`,
    fullBio: `Dr Krzysztof Gemza już ponad 35 lat jako lekarz, a blisko 13 lat - po uzyskaniu dyplomu na
studiach o kierunku Medycyna Estetyczna dla Lekarzy - jako lekarz zajmujący się medycyną
estetyczno - naprawczą - z niezwykłą empatią, specjalistyczną i ugruntowaną wiedzą oraz
wieloletnim doświadczeniem służy swoim pacjentom sprawiając, że dla każdego z nich czas
na chwilę zatrzymuje się w miejscu, a biologiczny zegar procesu starzenia się skóry spowalnia
swoje wskazówki.
Indywidualne łączone terapie zabiegowe, certyfikowane produkty oraz wysoce
zaawansowane technologicznie urządzenia i lasery w połączeniu z interdyscyplinarną
współpracą sprawiają, że Dr Krzysztof Gemza oraz mgr kosmetolog i dyplomowany trycholog
Agnieszka Surgiel - Gemza uzupełniają się wzajemnie i dzięki temu radzą sobie z każdym
problemem estetycznym swoich pacjentów.
Umiejętność radzenia sobie z powikłaniami oraz gruntowna wiedza o zastosowaniu i
działaniu kwasu hialuronowego sprawiły, że dr Krzysztof Gemza stał się praktykiem w
leczeniu powikłań wynikających z zastosowania HA w estetyce.`,
    photo: "/images/dk.jpg",
  },
  {
    id: "rm",
    name: "Raisa Misztela",
    role: "prelegentka",
    shortBio: `prywatnie: żona, matka, babcia. Zaangażowana artystycznie i społecznie
tyska piosenkarka, kobieta z charyzmą i ogromnym, otwartym sercem na ludzką krzywdę i
ludzkie potrzeby.`,
    fullBio: `prywatnie: żona, matka, babcia. Zaangażowana artystycznie i społecznie
tyska piosenkarka, kobieta z charyzmą i ogromnym, otwartym sercem na ludzką krzywdę i
ludzkie potrzeby. Ścisła finalistka programu TVP2 „The Voice Senior”, współpracującą z TVP 3
Katowice w programie „A kto nam zabroni!”. Można ją zobaczyć w TVS w programie
„Szlagierowa Lista” oraz na koncertach w całej Polsce z programem „Góral z Gwiazdami”.`,
    photo: "/images/r.jpg",
  },
  {
    id: "kn",
    name: "Kamil Nosal",
    role: "prelegent",
    shortBio: "koordynator Tyskiego Centrum Wolontariatu",
    fullBio: `koordynator Tyskiego Centrum Wolontariatu`,
    photo: undefined,
  },
];
