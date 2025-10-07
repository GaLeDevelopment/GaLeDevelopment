import { Card, CardContent } from "@/components/ui/card";
import { 
  Info, 
  Target, 
  Rocket, 
  Users, 
  Star, 
  Handshake,
  Award
} from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "Constantly pushing boundaries",
    color: "primary"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority",
    color: "accent"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Uncompromising quality",
    color: "primary"
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparent partnerships",
    color: "accent"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Info className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Pioneering Technology <span className="gradient-text">Innovation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              At GaLe Developments, we're more than just a technology company—we're your strategic partner in digital transformation. Since our founding, we've been committed to delivering cutting-edge solutions that drive real business value.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our team of expert engineers, designers, and strategists work collaboratively to create technology products that solve complex challenges and unlock new opportunities for growth.
            </p>
            
            {/* Mission Statement */}
            <Card className="bg-muted rounded-xl mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center">
                  <Target className="text-primary mr-3" size={24} />
                  Our Mission
                </h3>
                <p className="text-foreground">
                  To empower businesses worldwide with innovative technology solutions that enhance efficiency, security, and competitiveness in the digital age.
                </p>
              </CardContent>
            </Card>
            
            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const colorClass = value.color === "primary" ? "text-primary" : "text-accent";
                const bgColorClass = value.color === "primary" ? "bg-primary/10" : "bg-accent/10";
                
                return (
                  <div key={index} className="flex items-start space-x-3" data-testid={`value-${index}`}>
                    <div className={`w-10 h-10 ${bgColorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={colorClass} size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* About Visual */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Modern technology workspace" 
              className="rounded-2xl shadow-2xl"
              data-testid="about-image"
            />
            
            {/* Overlay stats card */}
            <Card className="absolute -bottom-8 -left-8 bg-white dark:bg-card rounded-xl shadow-2xl border border-border max-w-xs hidden sm:block">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="text-2xl text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary" data-testid="years-experience">10+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
