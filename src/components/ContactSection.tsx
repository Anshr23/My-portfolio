import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeDownload = () => {
    const resumeUrl = '/AnshRai_Resume.pdf';
    const newWindow = window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link for email functionality
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:raiansh230405@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.open(mailtoLink, '_blank');
      
      // Reset form and show success
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-gray-700 shadow-2xl bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-200">raiansh230405@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300"
                      onClick={() => window.open('https://github.com/Anshr23', '_blank')}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300"
                      onClick={() => window.open('https://www.linkedin.com/in/ansh-rai-98a30233b', '_blank')}
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </div>

                  <Button
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-gray-700 shadow-2xl bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700 resize-none transition-all duration-300"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="text-green-400 text-sm text-center mt-2">
                      ✓ Message sent successfully! Check your email client.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-sm text-center mt-2">
                      ✗ Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}