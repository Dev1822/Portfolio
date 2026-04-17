import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile/profile.jpeg';
import Reveal from './animations/Reveal';
import Tilt from './animations/Tilt';

export default function About() {
  const timeline = [
    { year: "2024 - Present", title: "AI & ML Specialization", desc: "Exploring deep learning, LLMs, and deploying intelligent systems." },
    { year: "2023 - 2024", title: "Full Stack Development", desc: "Mastered React, Node.js, and modern high-performance web architectures." },
    { year: "2022 - 2023", title: "Computer Engineering", desc: "Began academic journey, focusing on core computing foundations and low-level programming." }
  ];

  return (
    <section id="about" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        <Reveal>
          <div className="mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white/90">About Me</h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Side */}
          <div className="flex flex-col space-y-8">
            {/* Profile Image */}
            <Reveal x={-30} delay={0.2}>
              <Tilt>
                <div className="glass-card w-full h-87.5 lg:h-125 rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
                  <img
                    src={profileImg}
                    alt="Dev Patel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </Tilt>
            </Reveal>
          </div>

          {/* Timeline Side */}
          <div className="space-y-8">
            <Reveal x={30} delay={0.4}>
              <Tilt>
                <div className="glass-card p-5 sm:p-6 lg:p-8 relative overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all duration-500"></div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-white/90">
                    <User className="text-accent" />
                    Who I am
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    I am a Computer Engineering student with a profound passion for Data Science and Full Stack Development. <br className="mb-4" />
                    My philosophy centers on building products that aren't just technical experiments, but real-world solutions. I thrive at the intersection of aesthetic design and intelligent engineering, constantly pushing the boundaries of what modern web experiences can be.
                  </p>
                </div>
              </Tilt>
            </Reveal>

            <Reveal x={30} delay={0.6}>
              <Tilt>
                <div className="glass-card p-5 sm:p-6 lg:p-8 relative overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-white/90">
                    <Target className="text-blue-400" />
                    My Vision
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    I aim to build intelligent systems that solve real-world problems at scale. I focus on continuously in building practical projects that demonstrate real value.
                  </p>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
