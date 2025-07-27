import { Card, CardContent } from './ui/card';
import { User, Code2, Cpu, Terminal, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Profile Photo Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-shrink-0 relative"
                  >
                    <div className="w-64 h-64 bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden border border-gray-600">
                      <User className="w-24 h-24 text-gray-300" />
                      {/* Tech pattern overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                    </div>
                    {/* Floating tech icons */}
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Terminal className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Cpu className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Database className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* About Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                        <Zap className="text-blue-400" size={28} />
                        <h3 className="text-3xl font-bold text-white">Professional Background</h3>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                      Aspiring full-stack developer and AI enthusiast with a strong foundation in web technologies and a proven track 
                      record of building real-time, scalable applications. I specialize in the MERN stack and have hands-on experience 
                      integrating AI APIs, WebSockets, and authentication systems to deliver functional, impactful web apps.
                      </p>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                      I've built Spotify-inspired music platforms and OpenAI-powered chatbots with advanced features like real-time chat, 
                      JWT auth, and cloud-based storage — all independently. With a strong eye for design and UX, I'm constantly 
                      exploring how to blend frontend smoothness with backend logic for end-to-end excellence.
                      </p>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                      Currently, I'm focused on building intelligent products, learning from every project, 
                      and growing in fast-paced environments that demand creativity, responsibility, and autonomy.
                      </p>

                      {/* Technical Focus Areas */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        {[
                          {  name: 'MERN Stack', icon: Code2 },
                          { name: 'Firebase & MongoDB', icon: Database },
                          { name: 'Real-Time Systems', icon: Terminal },
                          { name: 'Frontend Craft (UI/UX)', icon: Zap },
                          { name: 'Auth Systems (JWT, OAuth)', icon: Terminal },
                          { name: 'AI/ML', icon: Cpu }
                        ].map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-3 rounded-lg text-center shadow-lg border border-gray-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            <skill.icon className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                            <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}