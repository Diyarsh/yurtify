import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calculator, Wallet } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Invest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tokenAmount, setTokenAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const pricePerToken = 2500; // ₸2,500 per token
  const totalCost = tokenAmount * pricePerToken;
  const expectedYield = 8.5; // 8.5% annual yield
  const estimatedMonthlyIncome = (totalCost * expectedYield) / 100 / 12;

  const handleInvest = () => {
    setIsLoading(true);
    // Simulate investment processing
    setTimeout(() => {
      navigate(`/invest-success/${id}?tokens=${tokenAmount}&amount=${totalCost}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Property
          </Button>

          {/* Investment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Investment Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Token Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="tokens">Number of Tokens</Label>
                <Input
                  id="tokens"
                  type="number"
                  min="1"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Each token costs ₸{pricePerToken.toLocaleString()}
                </p>
              </div>

              <Separator />

              {/* Investment Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold">Investment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tokens:</span>
                    <span className="font-medium">{tokenAmount}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per token:</span>
                    <span className="font-medium">₸{pricePerToken.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Investment:</span>
                    <span className="text-primary">₸{totalCost.toLocaleString()}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Annual Yield:</span>
                    <span className="font-medium text-accent">{expectedYield}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Est. Monthly Income:</span>
                    <span className="font-medium text-accent">₸{estimatedMonthlyIncome.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Investment Button */}
              <Button
                onClick={handleInvest}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                <Wallet className="w-4 h-4 mr-2" />
                {isLoading ? "Processing..." : `Invest ₸${totalCost.toLocaleString()}`}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By investing, you agree to our terms and conditions. This is a simulated transaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}