import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Code2, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-secondary tracking-wide uppercase">Open to opportunities</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Dev Patel</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Building the future.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            Computer Engineering Student | Full Stack Developer. <br className="hidden md:block"/>
            Frontend Developer | Backend Developer | Data Science Enthusiast.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="group relative px-8 py-3 rounded-xl bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2">
                View Projects 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-16 h-16 glass-card rounded-2xl flex items-center justify-center opacity-40"
        >
          <Code2 className="text-accent w-8 h-8" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[25%] w-20 h-20 glass-card rounded-2xl flex items-center justify-center opacity-30"
        >
          <Cpu className="text-blue-400 w-10 h-10" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] w-12 h-12 glass-card rounded-full flex items-center justify-center opacity-20"
        >
          <Globe className="text-white w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
