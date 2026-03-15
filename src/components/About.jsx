import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile/profile.jpeg';

export default function About() {
  const timeline = [
    { year: "2024 - Present", title: "AI & ML Specialization", desc: "Exploring deep learning, LLMs, and deploying intelligent systems." },
    { year: "2023 - 2024", title: "Full Stack Development", desc: "Mastered React, Node.js, and modern high-performance web architectures." },
    { year: "2022 - 2023", title: "Computer Engineering", desc: "Began academic journey, focusing on core computing foundations and low-level programming." }
  ];

  return (
    <section id="about" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Profile Image */}
            <div className="glass-card w-full h-150 rounded-2xl overflow-hidden relative group border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-surfaceLight via-transparent to-transparent z-10 opacity-60"></div>
              <img 
                src={profileImg} 
                alt="Dev Patel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </motion.div>

          {/* Timeline Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <User className="text-accent" />
                Who I am
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                I am a Computer Engineering student with a profound passion for Data Science and Full Stack Development. <br className="mb-4"/>
                My philosophy centers on building products that aren't just technical experiments, but real-world solutions. I thrive at the intersection of aesthetic design and intelligent engineering, constantly pushing the boundaries of what modern web experiences can be.
              </p>
            </div>

            <br />
            <br />

            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Target className="text-blue-400" />
                My Vision
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                I aim to build intelligent systems that solve real-world problems at scale. I focus on continuously in building practical projects that demonstrate real value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
