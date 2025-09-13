import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/astana-hero.jpg";

export const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Astana skyline with yurt patterns" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 yurt-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block">{t('hero.title1')}</span>
            <span className="block gradient-accent bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg font-medium text-accent mb-8">
            {t('hero.tagline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Button size="xl" variant="hero" className="group">
              {t('hero.explore')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <Play className="w-5 h-5 mr-2" />
              {t('hero.demo')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">₸15.2B</div>
              <div className="text-white/80 text-sm">{t('hero.stats.tokenized')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">2,847</div>
              <div className="text-white/80 text-sm">{t('hero.stats.investors')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">127</div>
              <div className="text-white/80 text-sm">{t('hero.stats.properties')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};