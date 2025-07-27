import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Spotify-Inspired Music App',
      description: 'Built a full-stack, responsive music platform with playlist support, JWT auth, and a polished UI. Added real-time chat via WebSockets and admin dashboard.',
      tags: ['MERN', 'WebSockets', 'JWT', 'Real-time Chat'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      liveDemo: 'https://spotify-clone-9xd3.onrender.com/',
      sourceCode: 'https://github.com/Anshr23/spotify_clone',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'J.A.C.K - AI Chatbot',
      description: 'A full-stack AI chatbot using OpenAI\'s API for dynamic conversations. Features JWT authentication, secure cookies, and MongoDB for persistent history.',
      tags: ['MERN', 'TypeScript', 'OpenAI API', 'JWT', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      liveDemo: null,
      sourceCode: 'https://github.com/Anshr23/J.A.C.K._AI-chatbot',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Contact Manager API',
      description: 'A robust backend-only CRUD contact management API built with Express and MongoDB. Features comprehensive API endpoints for contact operations.',
      tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      liveDemo: null,
      sourceCode: 'https://github.com/Anshr23/Contact_manager',
      gradient: 'from-orange-500 to-red-600'
    },
    // {
    //   title: 'E-Commerce Website',
    //   description: 'A full-featured online shopping platform with product listings, cart, Stripe integration, and user dashboard with role-based access.',
    //   tags: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Tailwind'],
    //   image: 'https://your-ecommerce-image-link-here.com', // <-- Replace with actual image link
    //   liveDemo: null,
    //   sourceCode: '#',
    //   gradient: 'from-pink-500 to-yellow-500'
    // }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (startIndex + visibleCards < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full disabled:opacity-30"
            disabled={startIndex === 0}
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full disabled:opacity-30"
            disabled={startIndex + visibleCards >= projects.length}
          >
            ▶
          </button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="min-w-[100%] md:min-w-[33.33%] px-4 group h-full"
                >
                  <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center`}>
                        <div className="text-white text-center">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm opacity-90">View Details</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 pt-4">
                        <motion.button
                          whileHover={project.liveDemo ? { scale: 1.05 } : {}}
                          whileTap={project.liveDemo ? { scale: 0.95 } : {}}
                          onClick={project.liveDemo ? () => window.open(project.liveDemo, '_blank') : undefined}
                          disabled={!project.liveDemo}
                          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                            project.liveDemo 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.sourceCode, '_blank')}
                          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Great Together
            </h3>
            <p className="text-xl text-gray-300 mb-6">
            I'm open to freelance work, exciting collaborations, or full-time opportunities. <br />
            Let's connect and make it happen.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/ansh-rai-98a30233b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                  <FaLinkedin className="text-white text-xl" />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
