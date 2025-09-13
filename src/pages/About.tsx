import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-accent bg-clip-text text-transparent">Yurtify</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Revolutionizing real estate investment in Kazakhstan through blockchain technology and fractional ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    Yurtify is democratizing real estate investment in Kazakhstan by making premium properties accessible to everyone through blockchain tokenization. We believe that everyone should have the opportunity to invest in real estate, regardless of their capital size.
                  </p>
                  <p className="text-muted-foreground">
                    Our platform combines traditional real estate investment with modern technology, creating a transparent, secure, and accessible investment ecosystem for the digital age.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">₸15.2B</div>
                      <div className="text-sm text-muted-foreground">Assets Tokenized</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">2,847</div>
                      <div className="text-sm text-muted-foreground">Investors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">127</div>
                      <div className="text-sm text-muted-foreground">Properties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">12.5%</div>
                      <div className="text-sm text-muted-foreground">Avg. Returns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at Yurtify
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  Every transaction, ownership record, and property detail is transparent and verifiable on the blockchain.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making real estate investment accessible to everyone, starting from as little as ₸10,000.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge blockchain technology to revolutionize traditional real estate investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground">
                Meet the experts behind Yurtify's success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aidar Kairatov</h3>
                <p className="text-muted-foreground mb-2">CEO & Founder</p>
                <p className="text-sm text-muted-foreground">
                  Former real estate executive with 15+ years experience in Kazakhstan's property market.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DN</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dana Nazarbayeva</h3>
                <p className="text-muted-foreground mb-2">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Blockchain technology expert with expertise in smart contracts and DeFi protocols.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Arman Serikbayev</h3>
                <p className="text-muted-foreground mb-2">Head of Operations</p>
                <p className="text-sm text-muted-foreground">
                  Operations specialist focused on regulatory compliance and investor relations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;