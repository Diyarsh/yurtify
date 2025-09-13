import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal, TrendingUp } from "lucide-react";
import { useState } from "react";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const allProperties = [
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
  },
  {
    id: "4",
    title: "Bayterek View Apartment",
    location: "Nur-Sultan, Government Quarter",
    price: "₸29,300,000",
    image: apartment1,
    tokenizationStatus: "live" as const,
    tokensAvailable: 45,
    totalTokens: 600,
    yield: "6.8%",
    investors: 198,
    pricePerToken: "₸48,833",
    isVerified: false
  },
  {
    id: "5",
    title: "Khan Shatyr Plaza Suite",
    location: "Nur-Sultan, Entertainment District",
    price: "₸41,200,000",
    image: apartment2,
    tokenizationStatus: "sold" as const,
    tokensAvailable: 0,
    totalTokens: 900,
    yield: "7.9%",
    investors: 287,
    pricePerToken: "₸45,778",
    isVerified: true
  },
  {
    id: "6",
    title: "Astana Opera Residences",
    location: "Nur-Sultan, Cultural District",
    price: "₸52,700,000",
    image: apartment3,
    tokenizationStatus: "upcoming" as const,
    tokensAvailable: 1500,
    totalTokens: 1500,
    yield: "8.8%",
    investors: 0,
    pricePerToken: "₸35,133",
    isVerified: true
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || property.tokenizationStatus === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Real Estate Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover tokenized properties in Astana and start building your real estate portfolio
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="max-w-4xl mx-auto shadow-medium">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by property name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["all", "live", "upcoming", "sold"].map((filter) => (
                    <Badge
                      key={filter}
                      variant={selectedFilter === filter ? "default" : "outline"}
                      className={`cursor-pointer transition-smooth ${
                        selectedFilter === filter 
                          ? "gradient-primary text-white" 
                          : "hover:bg-primary/10"
                      }`}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      {filter === "all" ? ` (${allProperties.length})` : 
                       ` (${allProperties.filter(p => p.tokenizationStatus === filter).length})`}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">
                  {filteredProperties.length} Properties Found
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Average Yield: 7.8%
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button variant="ghost" size="sm">
                Price: Low to High
              </Button>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
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
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                No properties found matching your criteria
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredProperties.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Properties
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;