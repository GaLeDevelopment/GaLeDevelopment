import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, ArrowRight } from "lucide-react";
import { SiLinkedin, SiX, SiGithub, SiFacebook } from "react-icons/si";

const quickLinks = ["Home", "Products", "About Us", "Contact"];
const services = ["Cloud Solutions", "AI & ML", "Cybersecurity", "Data Analytics"];
const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(" ", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">
                GaLe <span className="text-primary">Developments</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering businesses with cutting-edge technology solutions for the digital age.
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg p-0"
                data-testid="social-linkedin"
              >
                <SiLinkedin size={16} />
              </Button>
              <Button
                size="sm" 
                variant="ghost"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg p-0"
                data-testid="social-twitter"
              >
                <SiX size={16} />
              </Button>
              <Button
                size="sm"
                variant="ghost" 
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg p-0"
                data-testid="social-github"
              >
                <SiGithub size={16} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg p-0"
                data-testid="social-facebook"
              >
                <SiFacebook size={16} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(link.toLowerCase().replace(" us", "").replace(" ", ""))}
                    className="text-gray-300 hover:text-primary transition-colors text-sm p-0 h-auto justify-start"
                    data-testid={`footer-link-${link.toLowerCase().replace(" ", "-")}`}
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("products")}
                    className="text-gray-300 hover:text-primary transition-colors text-sm p-0 h-auto justify-start"
                    data-testid={`footer-service-${service.toLowerCase().replace(" ", "-").replace("&", "")}`}
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-lg rounded-r-none bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-primary text-sm"
                data-testid="newsletter-email"
              />
              <Button 
                className="bg-primary px-4 py-2 rounded-r-lg rounded-l-none hover:bg-accent transition-colors"
                data-testid="newsletter-submit"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0" data-testid="copyright">
            © 2024 GaLe Developments. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {legalLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-gray-400 hover:text-primary transition-colors text-sm p-0 h-auto"
                data-testid={`legal-link-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
