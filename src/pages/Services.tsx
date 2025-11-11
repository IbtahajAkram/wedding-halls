import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Utensils, 
  Music, 
  Camera, 
  Flower2, 
  Cake, 
  Car,
  Sparkles,
  Users,
  Check
} from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Essential",
      price: "$3,500",
      description: "Perfect for intimate celebrations",
      features: [
        "Venue rental (6 hours)",
        "Tables & chairs setup",
        "Basic lighting",
        "Event coordinator",
        "Complimentary consultation",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$6,500",
      description: "Our most popular choice",
      features: [
        "Venue rental (8 hours)",
        "Premium décor package",
        "Advanced lighting & sound",
        "Dedicated event coordinator",
        "Complimentary tasting session",
        "Beverage service",
        "Valet parking",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$12,000",
      description: "The ultimate celebration experience",
      features: [
        "Venue rental (12 hours)",
        "Custom luxury décor",
        "State-of-the-art A/V system",
        "Personal event planner",
        "Gourmet catering",
        "Premium bar service",
        "Valet & security",
        "Complimentary bridal suite",
        "Post-event cleanup",
      ],
      popular: false,
    },
  ];

  const services = [
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Exquisite cuisine crafted by our award-winning chefs, customizable menus to suit any taste or dietary requirement.",
    },
    {
      icon: Flower2,
      title: "Floral & Décor",
      description: "Professional decoration services transforming our venues to match your vision with elegant floral arrangements.",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Premium sound systems, live bands, DJs, and entertainment options to keep your celebration lively.",
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Professional photography and videography packages to capture every precious moment of your special day.",
    },
    {
      icon: Cake,
      title: "Custom Cakes",
      description: "Stunning custom wedding cakes designed to be both a visual masterpiece and delicious treat.",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury transportation services for the wedding party and guests, including valet parking coordination.",
    },
    {
      icon: Sparkles,
      title: "Event Styling",
      description: "Complete event design services from concept to execution, ensuring every detail is perfect.",
    },
    {
      icon: Users,
      title: "Event Coordination",
      description: "Experienced coordinators managing every aspect of your event, so you can relax and enjoy your celebration.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 elegant-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
            Services & <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Comprehensive solutions for your perfect celebration
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Wedding <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your celebration, all fully customizable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden elegant-shadow hover:scale-105 transition-all duration-300 animate-fade-in ${
                  pkg.popular ? 'border-2 border-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gradient">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">starting</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 px-4 elegant-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              À La Carte <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your package with our premium individual services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none elegant-shadow hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every celebration is unique. Let us create a personalized package tailored to your specific needs and budget.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
