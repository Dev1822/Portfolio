import React, { useState } from 'react';
import { Send, Linkedin, Github, Code2, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from './animations/Reveal';
import Tilt from './animations/Tilt';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setError('Web3Forms Access Key is missing. Please check your .env file.');
      setIsSubmitting(false);
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formDataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 border-t border-white/5 bg-surface/30">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white/90">Let's Connect</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary max-w-xl text-lg">Looking to collaborate on a project? Drop a message below.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <Reveal x={-30} delay={0.2}>
              <Tilt>
                <div className="glass-card p-8 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-white/90">Contact Information</h3>

                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "devpatel2007jan@gmail.com", href: "mailto:devpatel2007jan@gmail.com" },
                      { icon: Phone, label: "Phone", value: "+91 7990267752", href: "tel:+917990267752" },
                      { icon: MapPin, label: "Location", value: "Kalol, Gujarat, India", href: "https://maps.google.com/?q=Kalol,Gujarat,India" }
                    ].map((item, i) => (
                      <Reveal key={i} x={-20} delay={0.2 + i * 0.1}>
                        <a
                          href={item.href}
                          className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-secondary uppercase tracking-widest font-spacemono">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </a>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Tilt>
            </Reveal>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Dev1822", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dev-daxin-patel/", label: "LinkedIn" },
                { icon: Code2, href: "https://leetcode.com/Dev_D_Patel", label: "LeetCode" },
                { icon: Youtube, href: "https://www.youtube.com/@DevDaxinPatel", label: "YouTube" },
                { icon: Twitter, href: "https://x.com/DevPatel1822", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Reveal x={30} delay={0.4}>
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {isSubmitted && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-20">
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all font-sans"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all font-sans"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all font-sans resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-white text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-white/90 focus:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
              >
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
