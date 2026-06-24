import React from 'react';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import Reveal from './animations/Reveal';

export default function Education({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Undergraduate Program",
      score: "9.33 SGPA (1st Semester)",
      icon: <GraduationCap className="text-emerald-400" size={24} />,
      date: "Present",
      isActive: true,
      description: "Currently pursuing a Bachelor of Engineering in Computer Engineering, focusing on core computing foundations, programming paradigms, and modern software development practices."
    },
    {
      degree: "Higher Secondary Education (11th - 12th Grade)",
      institution: "Saraswati International School, Valsad",
      score: "12th Boards: 85.6%",
      icon: <School className="text-blue-400" size={24} />,
      date: "Completed",
      description: "Completed higher secondary education in the science stream, building a strong foundation in physics, chemistry, mathematics, and logical reasoning."
    },
    {
      degree: "Primary & Secondary Education (1st - 10th Grade)",
      institution: "Saraswati International School, Valsad",
      score: "10th Boards: 91.2%",
      icon: <School className="text-blue-400" size={24} />,
      date: "Completed",
      description: "Completed primary and secondary schooling with excellent academic performance and an active interest in science and mathematics."
    }
  ];

  return (
    <section id="education" className="relative w-full py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <GraduationCap size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">Academic Background</span>
            </div>
            <TitleTag className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white/90">
              Education
            </TitleTag>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-surface/40 p-6 text-center border border-white/5 rounded-2xl hover:bg-surface/60 hover:border-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold text-emerald-400 mb-1">9.33</h3>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider">Current SGPA</p>
            </div>

            <div className="bg-surface/40 p-6 text-center border border-white/5 rounded-2xl hover:bg-surface/60 hover:border-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-1">91.2%</h3>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider">10th Boards</p>
            </div>

            <div className="bg-surface/40 p-6 text-center border border-white/5 rounded-2xl hover:bg-surface/60 hover:border-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-1">85.6%</h3>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider">12th Boards</p>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <Reveal key={index} y={30} delay={0.2 + index * 0.2}>
                <div className="relative flex items-start gap-6 md:gap-10 group">
                  {/* Timeline Connector */}
                  {index !== educationData.length - 1 && (
                    <div className="absolute left-8 top-16 -bottom-12 w-px bg-white/10" />
                  )}

                  {/* Timeline Node */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-surface flex items-center justify-center relative z-10 border transition-colors duration-300 ${
                      edu.isActive ? 'border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-white/10'
                    }`}>
                      {edu.icon}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="grow w-full pt-1 md:pt-2">
                    <div className={`bg-surface/40 p-6 md:p-8 rounded-2xl border transition-colors duration-300 ${
                      edu.isActive 
                        ? "border-emerald-500/30 bg-surface/60" 
                        : "border-white/5 hover:border-white/10 hover:bg-surface/60"
                    }`}>
                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-3">
                          <h3 className={`text-2xl md:text-3xl font-bold ${edu.isActive ? 'text-white' : 'text-white/90'}`}>
                            {edu.degree}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap self-start ${
                            edu.isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-secondary border border-white/5'
                          }`}>
                            <Calendar size={14} />
                            {edu.date}
                          </span>
                        </div>
                        
                        <p className={`text-base uppercase tracking-wider mb-3 font-medium ${edu.isActive ? 'text-emerald-400' : 'text-white/50'}`}>
                          {edu.institution}
                        </p>
                        
                        <p className="text-base leading-8 text-secondary mb-5">
                          {edu.description}
                        </p>
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold border ${
                          edu.isActive ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white/5 border-white/5 text-secondary'
                        }`}>
                          <Award size={16} />
                          {edu.score}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
