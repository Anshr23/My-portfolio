import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'WebSockets', 'JWT Auth']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'OpenAI APIs', 'Render', 'VS Code']
    },
    {
      title: 'AI / ML',
      skills: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV']
    }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 2.5; // lower = slower

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        // Smooth loop: when reaching the end, reset to start seamlessly
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Auto-scrolling Skills Cards */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 transition-all"
          >
            {/* Original cards */}
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={`original-${category.title}`}
                className="w-[350px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                    className="text-2xl font-bold text-white mb-6 text-center"
                  >
                    {category.title}
                  </motion.h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.4
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-gray-200 hover:text-white font-medium text-sm transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate cards for seamless loop */}
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={`duplicate-${category.title}`}
                className="w-[350px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                    className="text-2xl font-bold text-white mb-6 text-center"
                  >
                    {category.title}
                  </motion.h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.4
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-gray-200 hover:text-white font-medium text-sm transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Constantly learning and adapting to new technologies to build innovative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
