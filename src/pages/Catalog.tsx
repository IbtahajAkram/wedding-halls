import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hall1 from "@/assets/hall-1.jpg";
import hall2 from "@/assets/hall-2.jpg";
import hall3 from "@/assets/hall-3.jpg";
import hall4 from "@/assets/hall-4.jpg";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const halls = [
    {
      id: 1,
      name: "Grand Ballroom",
      image: hall1,
      capacity: "300-500 guests",
      location: "Main Building",
      price: "$5,000+",
      category: "large",
      features: ["Crystal Chandeliers", "Marble Floors", "Stage Area", "VIP Lounge"],
      description: "Our signature venue featuring soaring ceilings, elegant chandeliers, and luxurious finishes perfect for grand celebrations.",
    },
    {
      id: 2,
      name: "Garden Pavilion",
      image: hall2,
      capacity: "150-250 guests",
      location: "Garden Wing",
      price: "$3,500+",
      category: "medium",
      features: ["Natural Lighting", "Garden Views", "Outdoor Terrace", "Modern Décor"],
      description: "A contemporary space with floor-to-ceiling windows offering stunning garden views and natural ambiance.",
    },
    {
      id: 3,
      name: "Intimate Chapel",
      image: hall3,
      capacity: "50-100 guests",
      location: "Garden Area",
      price: "$2,000+",
      category: "small",
      features: ["Fairy Lights", "Garden Setting", "Intimate Atmosphere", "Romantic Décor"],
      description: "Perfect for intimate ceremonies with charming outdoor setting and magical evening ambiance.",
    },
    {
      id: 4,
      name: "Royal Marquee",
      image: hall4,
      capacity: "200-400 guests",
      location: "West Wing",
      price: "$4,500+",
      category: "large",
      features: ["Grand Staircase", "Luxury Finishes", "Premium Sound System", "Bar Area"],
      description: "An opulent space featuring dramatic architecture and sophisticated design elements for prestigious events.",
    },
  ];

  const categories = [
    { id: "all", label: "All Venues" },
    { id: "small", label: "Intimate (50-100)" },
    { id: "medium", label: "Medium (150-250)" },
    { id: "large", label: "Grand (300+)" },
  ];

  const filteredHalls = selectedCategory === "all" 
    ? halls 
    : halls.filter(hall => hall.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 elegant-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
            Our <span className="text-gradient">Venues</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover the perfect setting for your celebration
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Halls Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredHalls.map((hall, index) => (
              <Card
                key={hall.id}
                className="overflow-hidden elegant-shadow hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden group">
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                      {hall.price}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-2">{hall.name}</h3>
                    <p className="text-muted-foreground">{hall.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{hall.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{hall.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hall.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                      <Link to="/contact">
                        Book Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 group">
                      <Link to="/contact">
                        Schedule Tour
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 elegant-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our event consultants are here to help you find the perfect venue for your celebration
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
