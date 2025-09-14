import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";
import { WalletOnboarding } from "./WalletOnboarding";
import { useLanguage } from "@/contexts/LanguageContext";
import yurtifyLogo from "@/assets/yurtify-logo-new.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWalletOnboarding, setShowWalletOnboarding] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border shadow-soft" style={{ backgroundColor: '#020817' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={yurtifyLogo} alt="Yurtify" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/marketplace" 
              className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
            >
              {t('nav.marketplace')}
            </Link>
            <Link 
              to="/dashboard" 
              className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
            >
              {t('nav.dashboard')}
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
            >
              {t('nav.about')}
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-primary/20 text-primary hover:bg-primary/5"
              onClick={() => setShowWalletOnboarding(true)}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {t('nav.connectWallet')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/marketplace" 
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.marketplace')}
              </Link>
              <Link 
                to="/dashboard" 
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.dashboard')}
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <div className="flex items-center gap-3 mt-4">
                <LanguageSwitch />
                <Button 
                  variant="outline" 
                  className="border-primary/20 text-primary hover:bg-primary/5 flex-1"
                  onClick={() => {
                    setShowWalletOnboarding(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {t('nav.connectWallet')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <WalletOnboarding 
        isOpen={showWalletOnboarding} 
        onClose={() => setShowWalletOnboarding(false)} 
      />
    </header>
  );
};