import { useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, TrendingUp, Trophy } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

export default function InvestSuccess() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const tokens = searchParams.get("tokens") || "1";
  const amount = searchParams.get("amount") || "2500";

  useEffect(() => {
    // Show success toast and badge achievement
    const timer = setTimeout(() => {
      toast("🏆 Achievement Unlocked!", {
        description: "Yurt Builder - You made your first investment!",
        icon: <Trophy className="w-4 h-4 text-accent" />,
        duration: 5000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Animation */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-bounce-soft">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            {/* Yurt Animation */}
            <div className="absolute -top-4 -right-4 w-16 h-16 animate-float">
              <div className="w-full h-full bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              Investment Successful!
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to the world of fractional real estate ownership
            </p>
          </div>

          {/* Investment Details */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Trophy className="w-3 h-3 mr-1" />
                  Yurt Builder
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tokens Purchased:</span>
                  <span className="font-semibold">{tokens}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Investment:</span>
                  <span className="font-semibold text-primary">₸{parseInt(amount).toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-mono text-sm">YRT{Date.now().toString().slice(-8)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cultural Message */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
            <p className="text-lg font-medium gradient-text">
              "Modular ownership. Real estate for everyone."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              You're now part of a community building the future of property investment in Kazakhstan
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="w-full sm:w-auto">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Dashboard
              </Button>
            </Link>
            
            <Link to="/marketplace">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Explore More Properties
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}