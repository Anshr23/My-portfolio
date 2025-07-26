const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs", "WebSockets", "JWT Auth"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "OpenAI APIs", "Render", "VS Code"]
    }
  ];

  return (
    <section className="py-24 bg-muted/20" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-muted rounded-md px-4 py-2 text-sm font-medium text-muted-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-lg">
            Constantly learning and adapting to new technologies to build innovative solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;