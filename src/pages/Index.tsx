// index.tsx

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sprout,
  Cloud,
  LineChart,
  ShoppingCart,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import heroImage from "@/assets/hero-farmers.jpg";
import testimonialImage from "@/assets/testimonial-grace.jpg";
import featureImage from "@/assets/feature-monitoring.jpg";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "how", label: "How It Works" },
  { id: "benefits", label: "Benefits" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Stories" },
  { id: "partners", label: "Partners" },
  { id: "team", label: "Team" },
  { id: "cta", label: "Join" },
  { id: "contact", label: "Contact" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="flex justify-center gap-6 py-3 text-sm font-medium overflow-x-auto px-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap transition-colors hover:text-primary ${
                activeSection === section.id
                  ? "text-primary font-semibold underline underline-offset-4"
                  : "text-muted-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

{/* Hero Section */}
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
>
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `linear-gradient(rgba(20, 83, 45, 0.75), rgba(20, 83, 45, 0.85)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  <div className="container relative z-10 px-4 py-20 mx-auto text-center">
    
    {/* Logo */}
  <div className="flex justify-center mb-10 animate-fade-in">
  <img
    src="@/assets/logo.png"
    alt="SkyFarm African Roots Logo"
    className="w-110 h-1000 rounded-full object-contain shadow-2xl bg-white p-6"
  />
</div>



    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
      Empowering Africa's Smallholder Farmers
    </h1>
    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
      SkyFarm helps farmers grow smarter — monitor crops, predict weather, and sell produce easily
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
      <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
        Get Started <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
      >
        Join Our Pilot
      </Button>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About SkyFarm</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Sky Farm, we transform traditional farming into data-driven, sustainable
              agribusiness. We empower smallholder farmers across Africa with cutting-edge technology
              that makes farming more profitable and predictable through fighting unpredictable climate change and its effects. Our platform offers real-time weather forecasts, crop health monitoring, pest and disease
              alerts, and a direct marketplace to connect farmers with international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Weather Alerts</h3>
              <p className="text-muted-foreground">
                Receive accurate, location-specific weather forecasts and extreme weather alerts to
                protect your crops and plan farming activities.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
              <LineChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Crop Health Insights</h3>
              <p className="text-muted-foreground">
                Chatbot pest management tool for offering recommendations to maximize your yield and
                minimize losses.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
              <ShoppingCart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Marketplace Access</h3>
              <p className="text-muted-foreground">
                Connect directly with buyers, negotiate fair prices, and sell your produce without
                middlemen taking unfair cuts.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Farmer Community</h3>
              <p className="text-muted-foreground">
                Join a thriving community of farmers to share knowledge, ask questions, and learn
                from each other's experiences.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Financial Tools</h3>
              <p className="text-muted-foreground">
                Access microloans, track expenses, manage inventory, and get financial insights to
                grow your farming business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Farmer Onboarding</h3>
              <p className="text-muted-foreground">
                Farmers register via USSD (*285*85#), selecting language, location, and crop. NGOs use a web dashboard for streamlined management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Advisory Engine
              </h3>
              <p className="text-muted-foreground">
                Inputs like crop, location, and satellite triggers generate localized SMS alerts, providing precise guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Multi-Channel Delivery
              </h3>
              <p className="text-muted-foreground">
                Information reaches farmers via USSD/SMS for those without internet access and through our a mobile application for online access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Why Choose SkyFarm?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Increased Yield</h3>
                    <p className="text-muted-foreground">
                      Our farmers see an average 40% increase in crop yields using data-driven
                      insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Reduced Losses</h3>
                    <p className="text-muted-foreground">
                      Early disease detection and weather alerts help prevent crop failures and
                      financial losses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Real-Time Data & Forecasts
                    </h3>
                    <p className="text-muted-foreground">
                      Access hyper-local weather forecasts and market prices to make informed
                      decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Fair Market Access</h3>
                    <p className="text-muted-foreground">
                      Connect directly with buyers and get up to 30% better prices for your produce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={featureImage}
                alt="Farmer using smartphone in field"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<section id="pricing" className="py-20 bg-card">
  <div className="container px-4 mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Pricing Plans</h2>
    <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
      Whether you're just getting started or running a large-scale farm, SkyFarm has a plan that fits your needs. 
      Start for free and upgrade anytime to unlock advanced features.
    </p>

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {/* Free Plan */}
      <Card className="p-10 bg-background border-border shadow-md hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-foreground mb-2">Freemium</h3>
        <p className="text-muted-foreground mb-6">Perfect for smallholder farmers getting started.</p>
        <p className="text-5xl font-extrabold mb-6 text-primary">Free</p>

        <ul className="text-left space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Access to basic weather alerts
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Crop management tips
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Community support access
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Commission off every market sale
          </li>
        </ul>

        <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
          Get Started
        </Button>
      </Card>

      {/* Subscription Plan */}
      <Card className="p-10 bg-background border-border shadow-md hover:shadow-xl transition-all relative">
        <div className="absolute top-0 right-0 bg-secondary text-white text-xs px-3 py-1 rounded-bl-lg">
          Popular
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-2">Pro Subscription</h3>
        <p className="text-muted-foreground mb-6">Ideal for professional farmers and cooperatives.</p>
        <p className="text-5xl font-extrabold mb-6 text-primary">$9<span className="text-lg text-muted-foreground">/month</span></p>

        <ul className="text-left space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Advanced weather prediction
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            No commission charged off market sales
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Live updates about international markets
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Priority customer support
          </li>
        </ul>

        <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
          Upgrade Now
        </Button>
      </Card>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Farmer Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-background border-border">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonialImage}
                  alt="Grace, Maize Farmer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-card-foreground">Rebecca Nantongo</p>
                  <p className="text-sm text-muted-foreground">Maize Farmer, Matugga</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "I always make losses when I miscalculate the times of the seasons. This affects my plans of planting, weeding and also harvesting. Since I started using SkyFarm, I have been able to plan well and make profits. I am excited about SkyFarms solution and I look forward to using it."
              </p>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Monday Hassan</p>
                  <p className="text-sm text-muted-foreground">Bean Farmer, Mukono</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The market place feature of providing us with information about global marketing standards is what I find so interesting. I have always tried to export my produce to other countries but my products are either rejected because of their low quality or I am given a very low price for my hard work"
              </p>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Sprout className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Peter Ddumba</p>
                  <p className="text-sm text-muted-foreground">Maize farmer, Buikwe</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "I am excited about SkyFarm because it will provide me with weather information that can help me plan my farming activities better. The offline feature will also help me access all these features deep in Buikwe without having to pay for internet access."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Our Partners
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Collaborating with leading organizations to empower farmers across Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
            <div className="bg-card p-8 rounded-lg border border-border flex items-center justify-center">
              <img src="@/assets/images.jpeg" alt="Partner 1" />
            </div>
            <div className="bg-card p-8 rounded-lg border border-border flex items-center justify-center">
              <img src="@/assets/OFFICIAL-MIIC-LOGO-PDF.webp" alt="Partner 2" />
            </div>
            <div className="bg-card p-8 rounded-lg border border-border flex items-center justify-center">
              <img src="@/assets/Min-of-Agriculture-LOGO.jpg" alt="Partner 3" />
            </div>
            <div className="bg-card p-8 rounded-lg border border-border flex items-center justify-center">
              <img src="@/assets/fao_logo_3lines_en1.png" alt="Partner 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Meet Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A passionate team committed to transforming African agriculture
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
            <div className="bg-background rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src="@/assets/Ssali.JPG"
                alt="Ssali Joshua"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground">Ssali Joshua</h3>
              <p className="text-muted-foreground mb-4">Founder</p>
              <a
                href="https://www.linkedin.com/in/ssali-joshua-bfa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="bg-background rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src="@/assets/f903031c-35cb-44c9-aede-2290b9e5ea54.jpeg"
                alt="Namata Haula Muanaisha"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground">Namata Haula Muanaisha</h3>
              <p className="text-muted-foreground mb-4">Co-Founder</p>
              <a
                href="https://www.linkedin.com/in/haula-namata-muanaisha-83b431315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="bg-background rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src="@/assets/PHOTO-2025-10-22-20-53-40.jpg"
                alt="Kagoya Bianca"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground">Kagoya Bianca</h3>
              <p className="text-muted-foreground mb-4">Agricultural Expert</p>
              <a
                href="https://www.linkedin.com/in/bianca-kagoya-4735642ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of Africa's Digital Farming Revolution
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of farmers across Africa who are already growing smarter with SkyFarm.
            Start your journey to better yields and fair prices today.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            Join SkyFarm Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-8 inline-block bg-white p-4 rounded-lg">
            <div className="w-32 h-32 bg-muted rounded flex items-center justify-center">
              <p className="text-xs text-muted-foreground text-center px-2">
                QR Code<br />Scan to Download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-card-foreground">Email</h3>
                <p className="text-muted-foreground">salelgpu@gmail.com</p>
              </Card>

              <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-card-foreground">Phone</h3>
                <p className="text-muted-foreground">+256 705 434 992</p>
              </Card>

              <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-card-foreground">Location</h3>
                <p className="text-muted-foreground">Kampala, Uganda</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© 2025 Sky Farm. Empowering African farmers with technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;