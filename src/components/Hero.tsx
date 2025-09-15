import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">AI-Powered</span>{" "}
            <span className="text-foreground">Business</span>{" "}
            <span className="text-gradient-accent">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Digital marketing professional specializing in cutting-edge AI tools, modern web development, 
            and data-driven strategies that deliver measurable results for tech startups and digital agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero group">
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline-hero group">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-gradient-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-scale-in animation-delay-200">
              <div className="text-3xl font-bold text-gradient-accent">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-scale-in animation-delay-400">
              <div className="text-3xl font-bold text-gradient-primary">200%</div>
              <div className="text-muted-foreground">Avg ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;