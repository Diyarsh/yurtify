import { Link } from "react-router-dom";
import logoImage from "@/assets/yurtify-logo-new.png";
export const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            
            <p className="text-muted-foreground mb-4 max-w-md">
              Democratizing real estate investment through blockchain tokenization. 
              Making new Astana properties accessible to everyone.
            </p>
            <div className="text-sm text-muted-foreground">© 2025 Yurtify. All rights reserved.</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-smooth">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-muted-foreground hover:text-primary transition-smooth">
                  Fees
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            Modular ownership. Real estate for everyone. 🏢
          </p>
          
          {/* Hackathon Branding */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-3 py-1 rounded text-xs font-medium animate-pulse">
              Built for Solana Day 2025
            </div>
          </div>
        </div>
      </div>
    </footer>;
};