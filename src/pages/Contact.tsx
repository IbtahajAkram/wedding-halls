import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours to discuss your event.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Celebration Avenue", "Wedding City, WC 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main: (123) 456-7890", "Events: (123) 456-7891"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elegantcelebrations.com", "events@elegantcelebrations.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat-Sun: 10:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 elegant-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Let's start planning your perfect celebration together
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-none elegant-shadow hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Schedule Your <span className="text-gradient">Tour</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We'd love to show you our beautiful venues in person. Fill out the form, and our event coordinator will contact you within 24 hours to schedule your personalized tour.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                During your visit, you'll have the opportunity to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Explore our stunning venue spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Meet with our experienced event coordinators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Discuss your vision and requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Review packages and customization options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Get answers to all your questions</span>
                </li>
              </ul>
            </div>

            <Card className="elegant-shadow animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="John & Jane Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Event Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Expected Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        value={formData.guests}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="150"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your event</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-32"
                      placeholder="Share your vision, preferences, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 elegant-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Find <span className="text-gradient">Us</span>
            </h2>
            <p className="text-muted-foreground">Located in the heart of Wedding City</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden elegant-shadow">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold mb-2">123 Celebration Avenue</p>
                  <p className="text-muted-foreground">Wedding City, WC 12345</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Map integration available upon request
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
