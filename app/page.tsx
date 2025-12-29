import Hero from "@/components/Hero";
import CapabilitiesCarousel from "@/components/CapabilitiesCarousel";
import PaasExplainer from "@/components/PaasExplainer";
import MarketplacePreview from "@/components/MarketplacePreview";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CapabilitiesCarousel />
      <PaasExplainer />
      <MarketplacePreview />
      <TrustedManufacturers />
      <Footer />
    </main>
  );
}
