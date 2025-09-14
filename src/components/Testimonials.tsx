import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aidar Nazarbayev",
    role: "Tech Entrepreneur",
    avatar: "👨‍💼",
    rating: 5,
    text: "Yurtify made real estate investment accessible. I started with just ₸50,000 and now earn passive income monthly.",
    modules: 15,
    income: "₸32,500"
  },
  {
    id: 2,
    name: "Symbat Kalieva", 
    role: "Marketing Manager",
    avatar: "👩‍💼",
    rating: 5,
    text: "The modular approach is brilliant. Like building a yurt, I'm assembling my real estate portfolio piece by piece.",
    modules: 23,
    income: "₸48,900"
  },
  {
    id: 3,
    name: "Dias Mukanov",
    role: "Software Developer",
    avatar: "👨‍💻",
    rating: 5,
    text: "Finally, real estate investment that makes sense for young professionals. Transparent, liquid, and profitable.",
    modules: 8,
    income: "₸26,400"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Module Holders Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of investors building wealth through modular real estate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-all duration-300 border border-primary/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-sm leading-relaxed pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {testimonial.modules} modules
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                    +{testimonial.income}/month
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};