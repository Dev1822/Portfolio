import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Github, ExternalLink, Sparkles, Code2 } from 'lucide-react';

import Reveal from './animations/Reveal';
import Tilt from './animations/Tilt';

// Import certificates
import electrosphereCert from '../assets/certificate/Electrosphere 2026 Certificate.jpeg';
import dopplegangerCert from '../assets/certificate/Doppleganger.jpg';



// You can add your certificates and projects here
const hackathons = [
  {
    title: "Electrosphere 2026",
    organization: "Tech Fest",
    date: "2026",
    description: "A high-stakes technical competition focusing on innovative engineering solutions and creative problem-solving.",
    certificate: electrosphereCert,
    project: {
      name: "Kalix AI",
      description: "Kalix AI features a clean chat interface with multi-chat support, image generation, voice interaction, and efficient local data management, powered by APIs for dynamic and scalable AI responses.",
      tech: ["HTML","CSS","JS"],
      github: "https://github.com/Dev1822/Kalix",
      demo: "https://kalix-syntax-squad.vercel.app/"
    }
  },
  {
    title: "Doppleganger",
    organization: "OpenPools",
    date: "2026",
    description: "An innovation-driven hackathon focused on solving real-world challenges through collaborative development.",
    certificate: dopplegangerCert,
    project: {
      name: "PlantPal",
      description: "PlantPal is a plant care platform with smart watering schedules, AI-based pest detection, and a community forum for tips and support.",
      tech: ["Reactjs","Nodejs","MySQL"],
      github: "https://github.com/Dev1822/PlantPal",
      demo: "https://plant-pal-ten.vercel.app/"
    }
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative w-full py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Trophy size={14} className="text-accent" />
              <span className="text-xs font-medium text-accent tracking-wide uppercase font-syne">Hackathons & Competitions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-syne">Hackathon Journey</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary max-w-2xl text-lg">
              Showcasing my participation in coding marathons where I transform ideas into functional solutions under high pressure.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Tilt>
                <div className="glass-card group h-full overflow-hidden flex flex-col border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-accent/30 transition-all duration-500">
                  {/* Top Header */}
                  <div className="p-6 border-b border-white/5 bg-white/[0.01]">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">{hackathon.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        <Calendar size={12} />
                        <span>{hackathon.date}</span>
                      </div>
                    </div>
                    <p className="text-accent text-sm font-medium mb-3">{hackathon.organization}</p>
                    <p className="text-secondary text-sm leading-relaxed line-clamp-2">{hackathon.description}</p>
                  </div>

                  {/* Content Split */}
                  <div className="flex flex-col sm:flex-row flex-grow">
                    {/* Certificate Left/Top */}
                    <div className="sm:w-1/2 relative overflow-hidden group/cert bg-black/20 border-r border-white/5 min-h-[220px]">
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="w-full h-full relative border border-white/10 rounded-sm shadow-2xl overflow-hidden group-hover/cert:scale-[1.02] transition-transform duration-700">
                           <img src={hackathon.certificate} alt="Certificate" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Project Right/Bottom */}
                    <div className="sm:w-1/2 p-6 flex flex-col h-full bg-white/[0.01]">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 size={16} className="text-accent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/80">Project Built</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">{hackathon.project.name}</h4>
                      <p className="text-secondary text-xs leading-relaxed mb-4 flex-grow">
                        {hackathon.project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {hackathon.project.tech.map((tech, tIndex) => (
                          <span key={tIndex} className="px-2 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 text-white/50">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <a 
                          href={hackathon.project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                        <a 
                          href={hackathon.project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Sparkle */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Sparkles size={16} className="text-accent/30" />
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
