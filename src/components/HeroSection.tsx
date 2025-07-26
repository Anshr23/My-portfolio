import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-hero-text-muted text-6xl opacity-20">
        &lt;/&gt;
      </div>
      <div className="absolute top-32 right-32 text-hero-text-muted text-4xl opacity-20">
        ⚛️
      </div>
      <div className="absolute bottom-32 right-20 text-hero-text-muted text-5xl opacity-20">
        ✦
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-hero-text mb-6">
          Ansh Rai
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-hero-text-muted text-xl md:text-2xl">&lt;/&gt;</span>
          <h2 className="text-xl md:text-2xl text-hero-text-muted">
            Full-Stack Developer & <span className="text-hero-accent">AI Enthusiast</span>
          </h2>
          <span className="text-hero-accent text-2xl">⚡</span>
        </div>

        <p className="text-hero-text-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Crafting solutions at the intersection of code and <span className="text-hero-accent">intelligence</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-primary/80 hover:bg-primary text-white border-0 px-8 py-3 text-lg rounded-full"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/20 text-hero-text hover:bg-white/10 px-8 py-3 text-lg rounded-full"
          >
            View Projects
          </Button>
        </div>

        <div className="text-center">
          <p className="text-hero-text-muted mb-2">Scroll Down</p>
          <ChevronDown className="h-6 w-6 text-hero-text-muted mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;