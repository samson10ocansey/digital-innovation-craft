import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Code, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI & Automation Tools",
      color: "text-primary",
      skills: [
        "ChatGPT & GPT-4", "Claude AI", "Midjourney", "Zapier", 
        "Make.com", "Bubble.io", "Notion AI", "GitHub Copilot"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      color: "text-accent",
      skills: [
        "React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
        "Supabase", "Vercel", "Git & GitHub", "REST APIs"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Digital Marketing",
      color: "text-secondary",
      skills: [
        "Google Analytics", "Google Ads", "Facebook Ads", "SEO/SEM", 
        "Email Marketing", "Content Strategy", "A/B Testing", "HubSpot"
      ]
    }
  ];

  const certifications = [
    "Google Analytics Certified",
    "Google Ads Certified",
    "HubSpot Content Marketing",
    "Meta Blueprint Certified",
    "AWS Cloud Practitioner"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern business challenges
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-professional p-8 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`${category.color} mb-4 flex justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-8">
            Professional <span className="text-gradient-accent">Certifications</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                className="bg-accent/10 text-accent border border-accent/30 px-4 py-2 text-base hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;