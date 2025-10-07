import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Cpu, Shield } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 overflow-hidden network-bg circuit-pattern">
      {/* Decorative networking nodes */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary rounded-full connection-node" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full connection-node" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-primary rounded-full connection-node" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full connection-node" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left pt-8 sm:pt-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-primary">Next-Generation Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Connecting Your Business to the{" "}
              <span className="gradient-text">Future</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              GaLe Developments delivers cutting-edge technology products and solutions that transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("products")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                data-testid="button-explore-products"
              >
                Explore Products
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-muted text-foreground px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200 font-semibold border-border"
                data-testid="button-get-in-touch"
              >
                Get in Touch
                <MessageSquare className="ml-2" size={18} />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary" data-testid="stat-clients">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary" data-testid="stat-products">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Tech Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary" data-testid="stat-support">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Support</div>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Technology network visualization" 
              className="rounded-2xl shadow-2xl"
              data-testid="hero-image"
            />
            
            {/* Floating tech cards */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl border border-border animate-float">
              <Cpu className="text-3xl text-primary mb-2" size={32} />
              <div className="text-sm font-semibold text-secondary">AI Powered</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl border border-border animate-float-delayed">
              <Shield className="text-3xl text-accent mb-2" size={32} />
              <div className="text-sm font-semibold text-secondary">Secure Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
