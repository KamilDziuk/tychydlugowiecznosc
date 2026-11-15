export interface Artist {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo?: string;
  website?: string;
  social?: { label: string; url: string }[];
}

export const artists: Artist[] = [
  {
    id: "albert-kopciara",
    name: "Albert Kopciara",
    role: "Saksofon",
    shortBio:
      "16-letni saksofonista z Tychów - zdobywca Grand Prix i I miejsc na konkursach w Polsce, Szwajcarii, Austrii i Belgii.",
    fullBio: `Albert Kopciara to 16-letni saksofonista z Tychów, który swoją przygodę z muzyką rozpoczął
9 lat temu w Zespole Szkół Muzycznych im. Feliksa Rybickiego w Tychach.

Obecnie Albert kontynuuje swoją edukację muzyczną i naukę gry na saksofonie w Zespole
Państwowych Szkół Muzycznych im Stanisława Moniuszki w Bielsku-Białej.

Poza muzyką klasyczną, Albert gra również jazz oraz pop.

Albert gra na prawie wszystkich typach saksofonów: sopranowym, altowym, tenorowym i
barytonowym. Jednak tym najczęściej używanym jest saksofon altowy.

Albert podczas swojej dotychczasowej przygody z saksofonem uczestniczył w bardzo wielu
konkursach krajowych i międzynarodowych, brał udział w wielu koncertach w Polsce i za
granicą, a także uczestniczył w wielu warsztatach i kursach mistrzowskich pod okiem
wybitnych saksofonistów.

Do najważniejszych osiągnięć konkursowych Alberta można zaliczyć:

Grand Prix podczas Ogólnopolskiego Konkursu Instrumentów Dętych w Chełmnie
I miejsce podczas Międzynarodowego Konkursu Muzycznego Małopolska w Krakowie
I miejsce podczas Międzynarodowego Konkursu Instrumentów Dętych w Jastrzębiu-Zdroju
II miejsce podczas Międzynarodowego Festiwalu Saksofonowego w Przeworsku
III miejsce podczas Konkursu Młodego Muzyka w Szczecinku
I miejsce podczas Międzynarodowego Konkursu Saksofonowego we Wrocławiu
I miejsce podczas Międzynarodowego Konkursu Instrumentalnego w Lugano (Szwajcaria)
I miejsce podczas International Gloria Artis Music Competition w Wiedniu (Austria)
I miejsce podczas International Music Competition Grand Prix Virtuoso w Brukseli (Belgia).

Albert jest stypendystą Prezydenta Miasta Tychy „Tyskie Orły” (2022r), Wyróżniony podczas
VIII Tyskiej Gali Najzdolniejszych Uczniów 2023 za osiągnięcia artystyczne, Wyróżniony
podczas IX Tyskiej Gali Najzdolniejszych Uczniów 2024 za osiągnięcia artystyczne.

Albert trzykrotnie grał z Orkiestrą Saksofonową w ramach Europejskiego Forum
Saksofonowego we Wrocławiu (orkiestra składająca się z ponad 100 saksofonistów
występujących jednocześnie na scenie).

Albert koncertował podczas XXII Międzynarodowego Festiwalu Młodzi Artyści w Krakowie,
podczas VII Festiwalu Muzyki Organowej i Kameralnej w Koniecpolu, grał jako solista z
Orkiestrą Kameralną Miasta Tychy „Aukso”. Swoim występem uświetnił także VII Tyską Galę
Najzdolniejszych Uczniów. Grał podczas festiwalu Gastro Gare w Perpignan (Francja).

W chwilach wolnych od nauki i gry na saksofonie Albert gra w hokeja na lodzie. Jest
członkiem jednej z tyskich amatorskich drużyn gdzie pełni rolę bramkarza.

W przyszłości Albert chciałby rozwijać swoją karierę jako saksofonista solowy łącząc w
swojej twórczości różne style muzyki od muzyki klasycznej aż po jazz.`,
    photo: "/images/albert-kopciara.jpg",
  },
  {
    id: "jakub-derej",
    name: "Jakub Derej",
    role: "Fortepian, kompozycja, dyrygentura",
    shortBio:
      "Pianista, kompozytor, aranżer i dyrygent. Finalista konkursu Młody Muzyk Roku 2026. Stypendysta Ministra Kultury i Dziedzictwa Narodowego.",
    fullBio: `Jakub Derej (2008) - pianista, kompozytor, aranżer i dyrygent. Absolwent Ogólnokształcącej Szkoły
Muzycznej I stopnia im. Feliksa Rybickiego w Tychach i Zespołu Państwowych Szkół Muzycznych im. S.
Moniuszki w Bielsku-Białej w klasie fortepianu. Wykonawca muzyki klasycznej i jazzowej.

Autor płyty
„Seventeen” z własnymi kompozycjami w stylu jazzowo-ilustracyjnym.

Laureat kilkudziesięciu nagród i
wyróżnień konkursów rangi ogólnopolskiej i międzynarodowej, w tym organizowanych przez Centrum
Edukacji Artystycznej (CEA) oraz uzyskany tytuł „Finalisty wyróżnionego” XLIX Olimpiady Artystycznej w
sekcji historii muzyki. Stypendysta Prezesa Rady Ministrów, dwukrotny stypendysta Ministra Kultury i
Dziedzictwa Narodowego, Krajowego Funduszu na Rzecz Dzieci, Fundacji Santander Bank Polska S.A.,
Laureat Nagrody Prezydenta Miasta Bielsko-Biała oraz Nagrody Prezydenta Miasta Tychy.

Finalista
konkursu Młody Muzyk Roku 2026 organizowanego przez Ministerstwo Kultury i Dziedzictwa
Narodowego, Narodowy Instytut Muzyki i Tańca oraz TVP Kultura.

Uczestnik ogólnopolskiej trasy
koncertowej Fundacji Pianistyki Polskiej w 2024 roku oraz Festiwalu Chopin en Vacances w 2026 r.
Zadebiutował jako solista z Lwowską Orkiestrą Kameralną w wieku 13 lat. Dyrygował m.in.
Orkiestrą Kameralną Filharmonii Narodowej i Lwowską Orkiestrą Kameralną. W latach 2021 - 2026 grał w
orkiestrach Adama Sztaby. 

Swoje umiejętności doskonalił u wybitnych pedagogów i mistrzów m.in. na
kursach i warsztatach muzycznych - w tym Międzynarodowe Forum Pianistyczne w Sanoku,
Ogólnopolskie Warsztaty Pianistyczne w Łańcucie, Letnia Akademia Muzyki w Krakowie, Zimowa
Akademia Muzyki w Europejskim Centrum Muzyki Krzysztofa Pendereckiego w Lusławicach,
Międzynarodowe Warsztaty Jazzowe CHO-JAZZ w Chodzieży, warsztaty orkiestrowo-wokalne
„Orchestra4Young” w Bydgoszczy i Międzynarodowe Warsztaty Jazzowe w Puławach. Młody artysta
koncertuje w rożnych stylach muzycznych i składach instrumentalnych jak duet fortepianowy, trio
jazzowe, big band, czy orkiestra. 

Występował m.in. na Zamku Królewskim w Warszawie, na 79. i 80.
Międzynarodowym Festiwalu Chopinowskim w Dusznikach-Zdroju, w Europejskim Centrum Muzyki
Krzysztofa Pendereckiego w Lusławicach, na Uniwersytecie Muzycznym Fryderyka Chopina w Warszawie,
w Filharmonii Pomorskiej w Bydgoszczy, na zamku w Tarnobrzegu, w Muzeum Henryka Sienkiewicza w
Oblęgorku oraz Filharmonii Szczecińskiej, gdzie został laureatem II miejsca ogólnopolskiego konkursu
kompozytorskiego Edu Virtuoso.
Strona www: www.kubaderej.com`,
    photo: "/images/Kuba-Derej.jpg",
    website: "https://www.kubaderej.com",
    social: [
      { label: "Facebook", url: "https://www.facebook.com/kubaderej" },
      { label: "Instagram", url: "https://www.instagram.com/kubaderej" },
    ],
  },
  {
    id: "dorota-majcher",
    name: "Dorota Majcher-Rosikowska",
    role: "Wokalistka, kompozytorka",
    shortBio:
      "Solistka muzyki kościelnej, gospel i rozrywkowej. Współpracowała z orkiestrą AUKSO oraz występuje w programach TVP.",
    fullBio: `Dorota Majcher - Rosikowska - wokalistka i kompozytorka. Solistka zespołów i
chórów z kręgu muzyki kościelnej, gospel i rozrywkowej. Formacje muzyczne, w których
występowała w ostatnich latach to m.in.

Zespół  Property, Zespół HeavenLand, Chór
Liturgiczny „Angelicus” pod batutą Maestro Henryka Jana Botora oraz Chór Uniwersytetu
Ekonomicznego w Katowicach. Wraz z chórem Property laureatka głównej nagrody w
Ogólnopolskim Konkursie organizowanym przez TVP1 oraz Fundację  Orszak Trzech Króli  
(prezentacja piosenki pt.  Kiedy nadszedł czas  na antenie TVP1).

Razem z Chórem
Uniwersytetu Ekonomicznego w Katowicach wystąpiła na największych krajowych scenach
biorąc udział w trasie koncertowej Royal Concert  Tribute to Hans Zimmer, Enio Morricone,
John Wiliams raz Tribute to... 

Artystka występuje również w różnych składach
instrumentalnych od duetów do składów orkiestrowych, w tym m.in. Aukso Orkiestra
Kameralna Miasta Tychy. Artystka zajmuje się również oprawą muzyczną wyjątkowych
ceremonii oraz występuje w programach telewizyjnych, jak np. ;A kto nam zabroni 
realizowanym przez Telewizję Polską (TVP3).`,
    photo: "/images/Dorota-Majcher-Rosikowska.jpeg",
  },
  {
    id: "amelia-szelest",
    name: "Amelia Szelest",
    role: "Taniec",
    shortBio:
      "15-letnia tancerka z Mysłowic, II Wicemistrzyni Polski IDO. W 2025 r. zajęła 8. miejsce na Mistrzostwach Świata w Burgos.",
    fullBio: `Amelia pochodzi z Mysłowic i ma 15 lat. Swoją taneczną przygodę rozpoczęła w wieku siedmiu lat i od
tego czasu nieustannie rozwija swoją pasję, doskonaląc warsztat oraz budując sceniczną dojrzałość.

Jest zawodniczką Akademii Tańca D Way of Life, gdzie z powodzeniem rywalizuje zarówno jako
solistka, jak i członkini duetów, mini formacji oraz formacji. Jej talent, pracowitość, konsekwencja i
ogromne zaangażowanie sprawiły, że podium stało się jej niemal drugim domem.

Miniony sezon był najlepszym w jej dotychczasowej karierze. W duecie z Niną Okońską wywalczyła
tytuł II Wicemistrzyni Polski IDO. Jest również II Wicemistrzynią Polski formacji jazzowych oraz
Wicemistrzynią Polski mini formacji jazzowych IDO.

Jako solistka regularnie triumfuje w prestiżowych konkursach i turniejach ogólnopolskich. W tym
sezonie zdobyła między innymi Mistrzostwo Mazowsza oraz zwyciężała w kategoriach solo
Performing Arts Improvisation. Jej osiągnięcia na arenie międzynarodowej są równie imponujące. W
2025 roku zajęła 8. miejsce podczas Mistrzostw Świata Global DWC w Burgos w Hiszpanii oraz
zdobyła 2. miejsce podczas finałów Global Dance Open w Birmingham w Wielkiej Brytanii. W tym
roku, dzięki wysokim lokatom w kwalifikacjach, ponownie wywalczyła awans do światowego finału
Global Dance Open w Hiszpanii.

Amelia jest przykładem młodej artystki, która łączy talent z ciężką pracą i pokorą. Każdy występ
traktuje jako szansę na rozwój, a jej największą siłą są autentyczność, wrażliwość sceniczna oraz
niezwykła umiejętność opowiadania historii tańcem.`,
    photo: "/images/amelia-szelest.jpg",
  },
  {
    id: "nina-okonska",
    name: "Nina Okońska",
    role: "Taniec",
    shortBio: `Nina Okońska (2011) Jest tancerką szkoły tańca D Way of Life, gdzie od czwartego roku życia doskonali
swoje umiejętności taneczne pod okiem Dominiki Cybulskiej - Musz oraz innych światowej klasy
tancerzy i choreografów.`,
    fullBio: `Nina Okońska (2011) Jest tancerką szkoły tańca D Way of Life, gdzie od czwartego roku życia doskonali
swoje umiejętności taneczne pod okiem Dominiki Cybulskiej- Musz oraz innych światowej klasy
tancerzy i choreografów, m.in.: Jan Ravnik (Słowenia), tancerz Taylor Swift, Tanner Bond ( RPA),
Leightonjay Halliday (Anglia), Abbi Brown ( Anglia), , Dominika Grzesik i inni.
Modern, Jazz, Balet to style, które rozwija i udoskonala swój kunszt taneczny uczestnicząc w warsztatach
w kraju i za granicą. Jest również wieloletnią stypendystką , nagrody Prezydenta Miasta Tychy „ Tyskie
Orły”
Uczestnicząc w wielu konkursach międzynarodowych jak i krajowych może poszczycić się licznymi
prestiżowymi osiągnięciami jak.:
1.miejsce Mistrzostwa polski solo 2018 i awans do eliminacji Mistrzostw Świata (Łomianki)
1 miejsce solo w Ogólnopolskim turnieju tańca Łańcut 2025
3 miejsce oraz tytuł II wicemistrza Polski 2026 w kategorii duet wraz z Amelią Szelest
2 miejsce solo na eliminacjach na eliminacjach do mistrzostw Świata 2026 Global Dance Open w
San Sebastian (Hiszpania)
2 miejsce oraz tytuł wicemistrza Polski w grupie 2026
3 miejsce oraz tytuł II wicemistrza Polski w formacji 2026
2 miejsce oraz tytuł wicemistrza Świata 2025 Global Dance Open w grupie , Birmingham ( Anglia)
W przyszłości Nina zamierza rozwijać i doskonalić sztukę tańca i chciałaby tańczyć na scenach
tanecznych świata.`,
    photo: "/images/nina-okonska.jpg",
  },
  {
    id: "raisa-misztela",
    name: "Raisa Misztela",
    role: "Śpiew",
    shortBio:
      "Tyska piosenkarka, ścisła finalistka TVP2 The Voice Senior. Współpracuje z TVP 3 Katowice w programie \u201eA kto nam zabroni!\u201d.",
    fullBio: `Raisa Misztela - zaangażowana artystycznie i społecznie tyska piosenkarka, ścisła finalistka programu
TVP2 The Voice Senior, współpracuje z TVP 3 Katowice w programie „A kto nam zabroni!”. Można ją
zobaczyć w TVS w programie „Szlagierowa Lista” oraz na koncertach w całej Polsce z programem
„Góral z Gwiazdami”.`,
    photo: "/images/raisa-misztela.jpg",
  },
  {
    id: "sonos-kwartet",
    name: "SONOS Kwartet",
    role: "Kwartet kameralny",
    shortBio:
      "SONOS Kwartet to cztery osobowości, cztery różne instrumenty i temperamenty. W zespole flet swoim brzmieniem poszerza możliwości sonorystyczne grupy instrumentów smyczkowych.",
    fullBio: `SONOS Kwartet to cztery osobowości, cztery różne instrumenty i temperamenty:
• Małgorzata Hlawsa - flet
• Marta Huget-Skiba - skrzypce
• Anna Grzybała - altówka
• Joanna Urbańska-Mikszta - wiolonczela

SONOS Kwartet to cztery osobowości, cztery różne instrumenty i temperamenty. W zespole flet
swoim brzmieniem poszerza możliwości sonorystyczne grupy instrumentów smyczkowych.
To trzon, znanej w Polsce i w Europie, Orkiestry Kameralnej Miasta Tychy AUKSO.
SONOS Kwartet w swojej ponad 10-letniej działalności współpracował z takimi artystami jak: Philip
Dizack, Sławomir Kurkiewicz, Piotr Orzechowski, Czesław Mozil, Gaba Kulka, Miłosz Wośko, Mateusz
Nagórski, Adam Woronowicz, Asi Mina, Grzegorz Eckert, Katarzyna Prudło, Tomasz Rożek, Renata
Przemyk, Natalia Niemen, Kasia Moś, Alicja Majewska, Anna Dereszowska, Roman Frankl, Czesław
Majewski.
SONOS Kwartet nie stroni również od wykonawstwa muzyki współczesnej i alternatywnej. Członkinie
zespołu zdobywają doświadczenie w wykonawstwie muzyki XXI wieku na takich festiwalach jak:
Warszawska Jesień, Festiwal „Łańcuch”, Auksodrone w Tychach czy Ostrava Days Of New Music. W
czerwcu 2025 roku kwartet został zaproszony do współpracy z Wojciechem Rusinem i Larą Agar -
artystami działającymi w Wielkiej Brytanii w nurcie muzyki performatywnej. Koncert odbył się w
Filharmonii Podkarpackiej w ramach Festiwalu „Wschód Europy” Europejski Stadion Kultury 2025.`,
    photo: "/images/sonos-kwartet.jpg",
  },
];

export interface ProgramItem {
  time?: string;
  title: string;
  description?: string;
}

export const program: ProgramItem[] = [
  {
    time: "17.00 - 17.10",
    title: "Otwarcie spotkania",
    description: "Rozpoczęcie spotkania, przywitanie gości, artystów, muzyków",
  },
  {
    time: "17.10 - 17.25",
    title: "Część artystyczna I",
    description: "Występy artystyczne",
  },
  {
    time: "17.25 - 17.35",
    title: "Blue Zones",
    description:
      "Jak czerpać przykłady ze sprawdzonych sposobów - strefy Blue Zones, miejsca na świecie, gdzie długowieczność nie jest problemem, lecz codziennością",
  },
  {
    time: "17.35 - 17.50",
    title: "Część artystyczna II",
    description: "Występy artystyczne",
  },
  {
    time: "17.50 - 17.55",
    title: "Akceptacja siebie",
    description:
      "Akceptacja samego siebie jako sposób na otwarcie się na innych",
  },
  {
    time: "17.55 - 18.10",
    title: "Część artystyczna III",
    description: "Występy artystyczne",
  },
  {
    time: "18.10 - 18.15",
    title: "Pielęgnacja i zdrowie",
    description:
      "Pielęgnacja idąca w kierunku redukcji procesów starzenia się i poprawy samopoczucia",
  },
  {
    time: "18.15 - 18.30",
    title: "Część artystyczna IV",
    description: "Występy artystyczne",
  },
  {
    time: "18.30 - 18.35",
    title: "Profilaktyka zdrowotna",
    description:
      "Profilaktyka zdrowotna i suplementacja w celu kontroli stanu zdrowia",
  },
  {
    time: "18.35 - 18.50",
    title: "Część artystyczna V",
    description: "Występy artystyczne",
  },
  {
    time: "18.50 - 18.55",
    title: "Aktywność i długowieczność",
    description:
      "Aktywność fizyczna i umysłowa dla spowolnienia procesu starzenia się. Charytatywna, wolontariacka aktywność społeczna jako nowy cel w życiu.",
  },
  {
    time: "18.55 - 19.15",
    title: "Finał spotkania",
    description: "Finał spotkania, część artystyczna i pożegnanie gości",
  },
];
