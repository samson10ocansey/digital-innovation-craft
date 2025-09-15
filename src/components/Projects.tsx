import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Analytics Dashboard",
      description: "Built a comprehensive analytics platform using React and Python that processes 10M+ data points daily, providing real-time insights and AI-driven recommendations that increased client revenue by 240%.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Python", "OpenAI API", "Supabase"],
      metrics: {
        impact: "240% Revenue Increase",
        timeline: "3 Months",
        dataPoints: "10M+ Daily"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Automated Content Marketing System",
      description: "Developed an AI-driven content creation and distribution system using GPT-4 and automation tools. Reduced content creation time by 80% while improving engagement rates by 150%.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "GPT-4 API", "Zapier", "Notion", "Buffer API"],
      metrics: {
        impact: "80% Time Reduction",
        timeline: "2 Months",
        engagement: "150% Increase"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Lead Generation Optimization Platform",
      description: "Created a multi-channel lead generation system with AI-powered qualification and nurturing. Implemented advanced tracking and A/B testing that resulted in 300% more qualified leads.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "HubSpot API", "Google Analytics", "Mailchimp"],
      metrics: {
        impact: "300% Lead Increase",
        timeline: "4 Months",
        conversion: "45% Conversion Rate"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Real-time Customer Behavior Tracker",
      description: "Built a sophisticated tracking system that monitors user behavior across web and mobile platforms. Provides actionable insights that helped clients optimize their conversion funnels by 185%.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Google Analytics"],
      metrics: {
        impact: "185% Funnel Optimization",
        timeline: "6 Months",
        accuracy: "98% Tracking Accuracy"
      },
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/10">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions that drive measurable business results
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-professional overflow-hidden animate-fade-in ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex lg:items-center`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-primary/50" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-muted-foreground capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold text-primary">{value}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="btn-accent">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;