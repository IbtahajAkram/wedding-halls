import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";
import aboutImage from "@/assets/about-venue.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description: "Every detail matters to us, from the first consultation to the last dance of your celebration.",
    },
    {
      icon: Users,
      title: "Client-Centered Service",
      description: "Your vision guides everything we do. We listen, adapt, and deliver beyond expectations.",
    },
    {
      icon: Award,
      title: "Excellence in Every Event",
      description: "Award-winning service and venues recognized for creating unforgettable experiences.",
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Over a decade of creating magical moments and turning dreams into reality.",
    },
  ];

  const stats = [
    { number: "2000+", label: "Celebrations Hosted" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Staff Members" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImage}
            alt="About our venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Creating unforgettable moments since 2009
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 elegant-gradient">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in">
            <p className="text-xl leading-relaxed">
              Welcome to <span className="font-semibold text-primary">Elegant Celebrations</span>, where every love story finds its perfect setting. For over 15 years, we've been transforming dreams into reality, creating magical moments that last a lifetime.
            </p>
            <p className="leading-relaxed">
              Our journey began with a simple belief: every couple deserves a wedding venue that reflects their unique love story. What started as a single elegant hall has grown into a collection of stunning venues, each designed to offer something special while maintaining our commitment to excellence and personalized service.
            </p>
            <p className="leading-relaxed">
              We understand that planning a wedding is both exciting and overwhelming. That's why we've built a team of passionate professionals dedicated to making your experience seamless and stress-free. From your first visit to the final farewell, we're here to ensure every moment exceeds your expectations.
            </p>
            <p className="leading-relaxed">
              Our venues blend timeless elegance with modern amenities, offering versatile spaces that can be transformed to match any vision—from intimate gatherings to grand celebrations. Each location features exquisite architecture, state-of-the-art facilities, and the kind of attention to detail that makes all the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none elegant-shadow hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 elegant-gradient">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Our dedicated team of event professionals brings decades of combined experience in creating exceptional celebrations. From expert event coordinators to talented designers, every team member is committed to making your special day perfect.
          </p>
          <p className="text-lg text-muted-foreground animate-fade-in">
            We believe in building lasting relationships with our clients, often becoming part of their extended family as we work together to bring their dreams to life. Your happiness is our greatest achievement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
