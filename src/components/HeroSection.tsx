import { ArrowRight, Download, Code, Zap, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-purple-400/30 text-6xl"
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 text-cyan-400/30 text-4xl"
        >
          { }
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 text-pink-400/30 text-3xl"
        >
          ⚛️
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
            >
              Ansh Rai
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <Code className="text-purple-400" size={32} />
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Full-Stack Developer & AI Enthusiast
              </h2>
              <Zap className="text-cyan-400" size={32} />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Crafting solutions at the intersection of{' '}
              <span className="text-purple-400 font-semibold">code</span> and{' '}
              <span className="text-cyan-400 font-semibold">intelligence</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              View Projects
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Scroll indicator with chevron */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
            >
              {/* <span className="text-sm mb-2">Scroll Down</span> */}
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}