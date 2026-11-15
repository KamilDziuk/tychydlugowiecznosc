# Długowieczność - Strona Internetowa

Strona one-page dla wydarzenia artystycznego **Długowieczność** w Tychach.

## Uruchamianie lokalnie

### Wymagania
- Node.js 18+ (zalecane: 20+)
- npm 9+

### Instalacja i uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:5173**

### Budowanie do produkcji

```bash
npm run build
npm run preview
```

## Struktura projektu

```
dlugowiecznosc-website/
├── public/
│   └── images/          # Zdjęcia artystów i sponsora
├── src/
│   ├── components/      # Komponenty React
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ArtistsSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── SponsorSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── artists.ts   # Dane artystów i program
│   ├── hooks/
│   │   └── useScrollFade.ts
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Stos technologiczny

- **React 19** + **TypeScript**
- **Vite 7** (dev server + build)
- **Tailwind CSS 4**
- **Fonty**: Cormorant Garamond (display) + Lato (body) z Google Fonts

## Aktualizacja treści

Edytuj plik `src/data/artists.ts` aby zaktualizować:
- Dane artystów (imię, rola, biografia, zdjęcie)
- Program imprezy (godziny, tytuły punktów)

Zdjęcia artystów znajdują się w katalogu `public/images/`.

## Kod QR

Tak - do strony można przypiąć kod QR. Wygeneruj kod QR wskazujący na docelowy adres www (np. `www.dlugowiecznosc.tychy.pl`) i umieść go na materiałach promocyjnych.
