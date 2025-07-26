import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-hero-text font-bold text-xl">
            AR
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-hero-text-muted hover:text-hero-text transition-colors">
              Home
            </a>
            <a href="#about" className="text-hero-text-muted hover:text-hero-text transition-colors">
              About
            </a>
            <a href="#skills" className="text-hero-text-muted hover:text-hero-text transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-hero-text-muted hover:text-hero-text transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-hero-text-muted hover:text-hero-text transition-colors">
              Contact
            </a>
          </div>

          <Button variant="secondary" className="bg-primary/80 hover:bg-primary text-white">
            CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;