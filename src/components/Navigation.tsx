import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleCVDownload = () => {
    // Update this path to match your actual CV PDF filename
    const resumeUrl = '/AnshRai_Resume.pdf'; // Replace with your actual PDF filename
    
    // Open PDF in new tab/window for viewing with proper window features
    const newWindow = window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AR
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* CV Button */}
            <Button
              onClick={handleCVDownload}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={handleCVDownload}
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}