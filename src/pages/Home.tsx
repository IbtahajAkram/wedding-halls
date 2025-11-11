import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Award, Heart, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-hall.jpg";
import hall1 from "@/assets/hall-1.jpg";
import hall2 from "@/assets/hall-2.jpg";
import hall3 from "@/assets/hall-3.jpg";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Romantic Ambiance",
      description: "Carefully designed spaces that create the perfect atmosphere for your special day",
    },
    {
      icon: Users,
      title: "Flexible Capacity",
      description: "Venues ranging from intimate gatherings to grand celebrations of 500+ guests",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Dedicated event coordinators ensuring every detail is perfect",
    },
    {
      icon: Calendar,
      title: "Year-Round Availability",
      description: "Book your dream date with our flexible scheduling options",
    },
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      text: "Our wedding at Elegant Celebrations was absolutely perfect. The staff went above and beyond to make our day magical!",
      rating: 5,
    },
    {
      name: "Emily & James",
      text: "The venue was stunning and the service was impeccable. We couldn't have asked for a better place to celebrate our love.",
      rating: 5,
    },
    {
      name: "Rachel & David",
      text: "From the first visit to the last dance, everything was flawless. Highly recommend for anyone planning their special day!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Elegant wedding hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-slow">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Where Dreams Become
            <span className="block text-rose-gold">Forever Memories</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Discover the perfect setting for your once-in-a-lifetime celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              <Link to="/catalog">Explore Our Venues</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 elegant-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose <span className="text-gradient">Elegant Celebrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled elegance and service for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none elegant-shadow hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Halls */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured <span className="text-gradient">Venues</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning wedding halls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { img: hall1, title: "Grand Ballroom", capacity: "300-500 guests", price: "$5,000+" },
              { img: hall2, title: "Garden Pavilion", capacity: "150-250 guests", price: "$3,500+" },
              { img: hall3, title: "Intimate Chapel", capacity: "50-100 guests", price: "$2,000+" },
            ].map((hall, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer elegant-shadow hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hall.img}
                    alt={hall.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{hall.title}</h3>
                  <p className="text-muted-foreground mb-1">{hall.capacity}</p>
                  <p className="text-primary font-semibold mb-4">Starting at {hall.price}</p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to="/catalog">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/catalog">View All Venues</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 elegant-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Happy <span className="text-gradient">Couples</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read what our clients say about their special day with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none elegant-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a tour of our venues and let us help bring your vision to life
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/contact">Book Your Tour Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
