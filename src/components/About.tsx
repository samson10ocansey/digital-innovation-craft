import { Code, Brain, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-First Approach",
      description: "Leveraging cutting-edge AI tools to automate processes and unlock new possibilities for business growth."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Excellence",
      description: "Building robust, scalable solutions using modern web technologies and best practices."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Every project is measured by its impact on business metrics and return on investment."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Spirit",
      description: "Working seamlessly with cross-functional teams to deliver exceptional outcomes."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about the intersection of technology and business growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-gradient-accent">
              My Journey in Digital Innovation
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                What started as curiosity about how technology could solve business problems 
                has evolved into a deep expertise in AI-powered solutions and digital marketing strategies.
              </p>
              <p>
                Over the past 5+ years, I've helped startups and established companies transform 
                their operations through intelligent automation, data-driven marketing campaigns, 
                and modern web applications that scale with their growth.
              </p>
              <p>
                I believe the future belongs to businesses that embrace AI not as a replacement 
                for human creativity, but as an amplifier of human potential. My mission is to 
                bridge that gap for forward-thinking organizations.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`card-feature animate-slide-in-right p-6`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;