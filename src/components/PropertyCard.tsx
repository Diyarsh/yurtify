import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, Eye, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ARViewButton } from "./ARViewButton";
import { SocialProof } from "./SocialProof";
import { TransactionModal } from "./TransactionModal";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tokenizationStatus: "live" | "upcoming" | "sold";
  tokensAvailable: number;
  totalTokens: number;
  yield: string;
  investors: number;
  pricePerToken: string;
  isVerified?: boolean;
}

export const PropertyCard = ({ 
  id, 
  title, 
  location, 
  price, 
  image, 
  tokenizationStatus, 
  tokensAvailable, 
  totalTokens, 
  yield: propertyYield, 
  investors,
  pricePerToken,
  isVerified = false
}: PropertyCardProps) => {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const ownersCount = Math.floor(Math.random() * 200) + 50;
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "upcoming": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "sold": return "bg-gray-500/10 text-gray-600 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const progress = ((totalTokens - tokensAvailable) / totalTokens) * 100;

  return (
    <Card className="group hover:shadow-large transition-bounce overflow-hidden border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${getStatusColor(tokenizationStatus)} font-medium`}>
            {tokenizationStatus === "live" ? "🟢 Live" : tokenizationStatus === "upcoming" ? "🟡 Upcoming" : "🔴 Sold Out"}
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 font-medium flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Yurt Verified
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <ARViewButton propertyTitle={title} />
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Location */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          
          <SocialProof ownersCount={ownersCount} />

          {/* Price */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">
              {price}
            </div>
            <div className="text-sm text-muted-foreground">
              {pricePerToken} per token
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tokens Left</span>
              <span className="font-medium">{tokensAvailable} / {totalTokens}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="gradient-primary h-2 rounded-full transition-smooth" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <div>
                <div className="text-sm font-medium">{propertyYield}</div>
                <div className="text-xs text-muted-foreground">Expected Yield</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-accent" />
              <div>
                <div className="text-sm font-medium">{investors}</div>
                <div className="text-xs text-muted-foreground">Investors</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowTransactionModal(true)}
              className="flex-1 gradient-primary text-white" 
              disabled={tokenizationStatus === "sold"}
            >
              Buy Modules
            </Button>
            <Link to={`/property/${id}`}>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
      
      <TransactionModal 
        isOpen={showTransactionModal}
        onClose={() => setShowTransactionModal(false)}
        property={{
          id: id,
          title: title,
          pricePerToken: parseInt(pricePerToken.replace(/[^\d]/g, '')),
          availableTokens: tokensAvailable,
          image: image
        }}
      />
    </Card>
  );
};