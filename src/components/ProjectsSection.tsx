import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "J.A.C.K – AI Chatbot",
      description: "A full-stack AI chatbot using OpenAI's API for dynamic conversations. Features JWT authentication, secure cookies, and MongoDB for persistent history.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["MERN", "TypeScript", "OpenAI API", "JWT", "MongoDB"],
      liveDemo: "#",
      code: "#"
    },
    {
      title: "Spotify-Inspired Music App", 
      description: "Built with React and modern web technologies, featuring responsive design and seamless user experience.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveDemo: "#",
      code: "#"
    }
  ];

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className="group">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;