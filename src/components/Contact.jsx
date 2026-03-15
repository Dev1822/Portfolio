import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 border-t border-white/5 bg-surface/30">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-secondary max-w-xl text-lg">Looking to collaborate on a project? Drop a message below.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="glass-card p-8 group">
              <h3 className="text-2xl font-semibold mb-6 text-white/90">Contact Information</h3>

              <div className="space-y-6">
                <a href="mailto:devpatel2007jan@gmail.com
" className="flex items-center gap-4 text-secondary hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                  <div className="p-3 bg-white/5 rounded-full text-accent group-hover:bg-accent/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50 mb-1">Email</p>
                    <p className="font-medium">devpatel2007jan@gmail.com
                    </p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/dev-daxin-patel/" className="flex items-center gap-4 text-secondary hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                  <div className="p-3 bg-white/5 rounded-full text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50 mb-1">LinkedIn</p>
                    <p className="font-medium">Dev Patel</p>
                  </div>
                </a>

                <a href="https://github.com/Dev1822" className="flex items-center gap-4 text-secondary hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                  <div className="p-3 bg-white/5 rounded-full text-white group-hover:bg-white/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50 mb-1">GitHub</p>
                    <p className="font-medium">Dev1822</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6 relative">

              {isSubmitted && (
                <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-20">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-secondary">I'll get back to you shortly.</p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-secondary ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-white text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-white/90 focus:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 relative z-10">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
