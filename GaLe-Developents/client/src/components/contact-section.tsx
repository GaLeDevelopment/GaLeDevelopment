import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Tech Avenue", "Silicon Valley, CA 94025"],
    color: "primary"
  },
  {
    icon: Phone,
    title: "Call Us", 
    details: ["+1 (555) 123-4567", "Mon-Fri 9am-6pm PST"],
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@galedevelopments.com", "support@galedevelopments.com"],
    color: "primary"
  }
];

const services = [
  "Cloud Solutions",
  "AI & Machine Learning", 
  "Cybersecurity",
  "Mobile Solutions",
  "Data Analytics",
  "Custom Software",
  "Other"
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Mail className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClass = info.color === "primary" ? "text-primary" : "text-accent";
                const bgColorClass = info.color === "primary" ? "bg-primary/10" : "bg-accent/10";
                
                return (
                  <Card key={index} className="bg-card border border-border rounded-xl" data-testid={`contact-info-${index}`}>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className={`${colorClass}`} size={20} />
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{info.title}</h3>
                      <div className="text-muted-foreground text-sm">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>{detail}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border rounded-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8" data-testid="success-message">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="text-primary" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="block text-sm font-medium text-secondary mb-2">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="form-input"
                            {...form.register("firstName")}
                            data-testid="input-first-name"
                          />
                          {form.formState.errors.firstName && (
                            <p className="text-sm text-destructive mt-1">{form.formState.errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="block text-sm font-medium text-secondary mb-2">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="form-input"
                            {...form.register("lastName")}
                            data-testid="input-last-name"
                          />
                          {form.formState.errors.lastName && (
                            <p className="text-sm text-destructive mt-1">{form.formState.errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="form-input"
                          {...form.register("email")}
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                          Phone Number (Optional)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="form-input"
                          {...form.register("phone")}
                          data-testid="input-phone"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">
                          What services are you interested in?
                        </Label>
                        <Select
                          value={form.watch("service")}
                          onValueChange={(value) => form.setValue("service", value)}
                        >
                          <SelectTrigger className="form-input" data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {form.formState.errors.service && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.service.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="form-input resize-none"
                          {...form.register("message")}
                          data-testid="textarea-message"
                        />
                        {form.formState.errors.message && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                        )}
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                        <Send className="ml-2" size={18} />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
