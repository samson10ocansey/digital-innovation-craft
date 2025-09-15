import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Download, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
      primary: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourname"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/yourname"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? Let's explore how AI-powered solutions can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities and innovative projects. 
                Whether you're a startup looking to leverage AI or an established company 
                seeking digital transformation, let's explore how we can work together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/30 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className={`${method.primary ? 'text-primary' : 'text-muted-foreground'} group-hover:text-primary transition-colors`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-medium">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in San Francisco Bay Area</span>
            </div>

            {/* Download Resume Button */}
            <Button className="btn-hero w-full lg:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="card-professional p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="mt-2 min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-accent w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;