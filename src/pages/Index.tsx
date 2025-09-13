import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HackathonBranding } from "@/components/HackathonBranding";
import { DemoModeToggle } from "@/components/DemoModeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarketplaceSection />
      <Testimonials />
      <FAQ />
      <Footer />
      <HackathonBranding />
      <DemoModeToggle />
    </div>
  );
};

export default Index;
