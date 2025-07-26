import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-hero-gradient" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-hero-text mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-hero-text-muted text-lg mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to work on innovative projects 
          that challenge me and create meaningful impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-hero-text border border-white/20 px-8 py-3 text-lg rounded-full"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/20 text-hero-text hover:bg-white/10 px-8 py-3 text-lg rounded-full"
          >
            Download CV
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="text-hero-text-muted hover:text-hero-text transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-hero-text-muted hover:text-hero-text transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-hero-text-muted hover:text-hero-text transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-hero-text-muted hover:text-hero-text transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;