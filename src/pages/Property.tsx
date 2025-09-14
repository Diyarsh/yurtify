import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  Eye, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Calculator,
  ArrowLeft,
  Share,
  Heart
} from "lucide-react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [investmentAmount, setInvestmentAmount] = useState("100000");
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock property data - in real app this would come from API
  const property = {
    id: "1",
    title: "Emerald Towers Penthouse",
    location: "Astana, Left Bank District",
    price: "₸45,500,000",
    tokenizationStatus: "live" as const,
    tokensAvailable: 150,
    totalTokens: 1000,
    tokenPrice: "₸45,500",
    yield: "8.5%",
    investors: 234,
    description: "Luxury penthouse apartment in the prestigious Emerald Towers complex. This stunning 3-bedroom unit offers panoramic views of the Ishim River and Astana's modern skyline. Premium finishes, smart home technology, and access to world-class amenities.",
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      parking: 2
    },
    amenities: [
      "Concierge Service",
      "Rooftop Pool",
      "Fitness Center",
      "Underground Parking",
      "24/7 Security",
      "High-Speed Internet"
    ],
    images: [apartment1, apartment2, apartment3],
    rentalYield: {
      monthly: "₸850,000",
      annual: "₸10,200,000"
    }
  };

  const calculateReturns = () => {
    const amount = parseFloat(investmentAmount) || 0;
    const tokens = Math.floor(amount / 45500);
    const monthlyReturn = (tokens * 850);
    const annualReturn = monthlyReturn * 12;
    
    return { tokens, monthlyReturn, annualReturn };
  };

  const { tokens, monthlyReturn, annualReturn } = calculateReturns();
  const progress = ((property.totalTokens - property.tokensAvailable) / property.totalTokens) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/marketplace" className="hover:text-primary transition-smooth flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Link>
          </div>
        </div>

        {/* Property Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-large">
                  <img 
                    src={property.images[selectedImage]} 
                    alt={property.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      🟢 Live Investment
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      AR View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                      <Share className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-lg overflow-hidden transition-smooth ${
                        selectedImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`View ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment Panel */}
            <div className="space-y-6">
              <Card className="shadow-medium border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-primary">
                      {property.price}
                    </CardTitle>
                    <Badge variant="outline" className="text-accent border-accent/20">
                      {property.yield} Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tokens Sold</span>
                      <span className="font-medium">
                        {property.totalTokens - property.tokensAvailable} / {property.totalTokens}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="gradient-primary h-3 rounded-full transition-smooth" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {property.tokensAvailable} tokens remaining
                    </div>
                  </div>

                  <Separator />

                  {/* Investment Calculator */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Calculator className="w-5 h-5" />
                      Investment Calculator
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="investment">Investment Amount (₸)</Label>
                        <Input
                          id="investment"
                          type="number"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(e.target.value)}
                          placeholder="100,000"
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tokens to receive:</span>
                          <span className="font-medium">{tokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Monthly income:</span>
                          <span className="font-medium text-green-600">
                            ₸{monthlyReturn.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Annual income:</span>
                          <span className="font-medium text-green-600">
                            ₸{annualReturn.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    variant="gradient" 
                    className="w-full"
                    onClick={() => navigate(`/invest/${id}`)}
                  >
                    Invest Now
                  </Button>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Minimum investment: ₸10,000 • No platform fees
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-medium">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium">{property.yield}</div>
                      <div className="text-xs text-muted-foreground">Expected Yield</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium">{property.investors}</div>
                      <div className="text-xs text-muted-foreground">Investors</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Property Details */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Property Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">{property.specs.bedrooms}</div>
                        <div className="text-xs text-muted-foreground">Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">{property.specs.bathrooms}</div>
                        <div className="text-xs text-muted-foreground">Bathrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">{property.specs.area}m²</div>
                        <div className="text-xs text-muted-foreground">Area</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">{property.specs.parking}</div>
                        <div className="text-xs text-muted-foreground">Parking</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Financial Details */}
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Value</span>
                      <span className="font-medium">{property.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Token Price</span>
                      <span className="font-medium">{property.tokenPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Rental</span>
                      <span className="font-medium text-green-600">{property.rentalYield.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Rental</span>
                      <span className="font-medium text-green-600">{property.rentalYield.annual}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3">
                      <span className="text-muted-foreground">Expected Yield</span>
                      <span className="font-semibold text-accent">{property.yield}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Property;