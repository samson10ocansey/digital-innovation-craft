import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/30 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient-primary">Portfolio</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Building the future with AI-powered solutions and innovative web technologies.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Your Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
