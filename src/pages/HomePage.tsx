import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ArtistsSection from "../components/ArtistsSection";
import Speakers from "../components/Speakers";
import ProgramSection from "../components/ProgramSection";
import SponsorSection from "../components/SponsorSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <Speakers />
        <ProgramSection />
        <SponsorSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
