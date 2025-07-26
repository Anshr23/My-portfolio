const AboutSection = () => {
  const skills = [
    "Full-Stack",
    "AI/ML", 
    "DevOps",
    "Cloud",
    "Performance",
    "Security"
  ];

  return (
    <section className="py-24 bg-background" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Professional Background
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Experienced full-stack developer specializing in cutting-edge web technologies and artificial intelligence integration. I architect and build scalable solutions that solve complex business problems with clean, efficient code.
              </p>
              <p>
                My expertise spans the entire development stack - from crafting intuitive user interfaces with React and TypeScript to designing robust backend systems with Node.js and MongoDB. I'm particularly focused on leveraging AI technologies to create intelligent, data-driven applications.
              </p>
              <p>
                I thrive in challenging environments where innovation meets technical excellence. Whether it's optimizing database performance, implementing real-time features, or integrating machine learning models, I deliver production-ready solutions that scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="text-lg font-semibold text-card-foreground">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;