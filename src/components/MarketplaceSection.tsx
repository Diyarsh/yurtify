import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const featuredProperties = [
  {
    id: "1",
    title: "Emerald Towers Penthouse",
    location: "Nur-Sultan, Left Bank",
    price: "₸45,500,000",
    image: apartment1,
    tokenizationStatus: "live" as const,
    tokensAvailable: 150,
    totalTokens: 1000,
    yield: "8.5%",
    investors: 234,
    pricePerToken: "₸45,500",
    isVerified: true
  },
  {
    id: "2",
    title: "Sky Garden Residence",
    location: "Nur-Sultan, Business District",
    price: "₸32,800,000",
    image: apartment2,
    tokenizationStatus: "live" as const,
    tokensAvailable: 320,
    totalTokens: 800,
    yield: "7.2%",
    investors: 156,
    pricePerToken: "₸41,000",
    isVerified: true
  },
  {
    id: "3",
    title: "Golden Square Luxury",
    location: "Nur-Sultan, Center",
    price: "₸58,200,000",
    image: apartment3,
    tokenizationStatus: "upcoming" as const,
    tokensAvailable: 1200,
    totalTokens: 1200,
    yield: "9.1%",
    investors: 0,
    pricePerToken: "₸48,500",
    isVerified: false
  }
];

export const MarketplaceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover premium real estate opportunities in Astana. 
            Invest with as little as ₸10,000 and start earning rental income immediately.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div key={property.id} className="animate-fade-in">
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                image={property.image}
                tokenizationStatus={property.tokenizationStatus}
                tokensAvailable={property.tokensAvailable}
                totalTokens={property.totalTokens}
                yield={property.yield}
                investors={property.investors}
                pricePerToken={property.pricePerToken}
                isVerified={property.isVerified}
              />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" variant="gradient" className="group">
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card border border-border rounded-2xl p-8 shadow-medium">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                ₸15.2B
              </div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                127
              </div>
              <div className="text-muted-foreground">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                2,847
              </div>
              <div className="text-muted-foreground">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                8.2%
              </div>
              <div className="text-muted-foreground">Avg. Annual Yield</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};