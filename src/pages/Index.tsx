import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarketplaceSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
