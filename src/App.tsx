import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ansh Rai
            </h3>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer & AI Enthusiast
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Anshr23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ansh-rai-98a30233b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:raiansh230405@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Email
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Ansh Rai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}