import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Brain, 
  Lock, 
  Smartphone, 
  BarChart3, 
  Code,
  CheckCircle,
  ArrowRight,
  Layers
} from "lucide-react";

const products = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that power your digital transformation with reliability and security.",
    features: [
      "Multi-cloud deployment",
      "Auto-scaling capabilities", 
      "24/7 monitoring"
    ],
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics solutions that unlock insights from your data.",
    features: [
      "Custom ML models",
      "Natural language processing",
      "Computer vision systems"
    ],
    color: "accent"
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced security solutions protecting your business from evolving digital threats and vulnerabilities.",
    features: [
      "Threat detection & response",
      "Zero-trust architecture",
      "Compliance management"
    ],
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications delivering seamless user experiences across all devices.",
    features: [
      "iOS & Android development",
      "Progressive web apps",
      "Real-time synchronization"
    ],
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our powerful analytics and visualization tools.",
    features: [
      "Real-time dashboards",
      "Predictive modeling",
      "Custom reporting"
    ],
    color: "primary"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions built specifically for your unique business requirements and workflows.",
    features: [
      "Enterprise applications",
      "API development",
      "System integration"
    ],
    color: "accent"
  }
];

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Layers className="text-primary mr-2" size={16} />
            <span className="text-sm font-medium text-primary">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Technology Solutions Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology products designed to elevate your business
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const colorClass = product.color === "primary" ? "text-primary" : "text-accent";
            const bgColorClass = product.color === "primary" ? "bg-primary/10" : "bg-accent/10";
            
            return (
              <Card 
                key={index} 
                className="product-card bg-card border border-border rounded-xl p-8 hover:border-primary/50 h-full"
                data-testid={`product-card-${index}`}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className={`w-16 h-16 ${bgColorClass} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`${colorClass}`} size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-3" data-testid={`product-title-${index}`}>
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow" data-testid={`product-description-${index}`}>
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <CheckCircle className={`${colorClass} mr-2`} size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className={`${colorClass} font-semibold inline-flex items-center hover:text-accent transition-colors justify-start p-0 h-auto`}
                    data-testid={`product-learn-more-${index}`}
                  >
                    Learn More 
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
