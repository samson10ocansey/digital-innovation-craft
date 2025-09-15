import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow Startup",
      company: "TechFlow",
      content: "Working with this digital marketing expert transformed our entire approach to customer acquisition. The AI-powered analytics dashboard they built increased our conversion rates by 240% in just three months. Their technical expertise combined with marketing acumen is truly exceptional.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLab Agency",
      content: "The automated content marketing system delivered beyond our expectations. We've seen 150% improvement in engagement while reducing our content creation time by 80%. Their understanding of both AI tools and marketing strategy is unmatched.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "Emily Watson",
      role: "VP of Marketing",
      company: "InnovateNow",
      content: "The lead generation optimization platform completely revolutionized our sales funnel. We went from struggling to find qualified leads to having a 300% increase in high-quality prospects. The ROI has been incredible.",
      rating: 5,
      initials: "EW"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      company: "DataDriven Solutions",
      content: "Their real-time customer behavior tracking system provided insights we never had before. The 185% improvement in our conversion funnel optimization directly impacted our bottom line. Highly recommend their services.",
      rating: 5,
      initials: "DK"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by innovative companies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`card-professional p-8 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-6">
                <Quote className="h-12 w-12" />
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;