import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Github, ExternalLink, Sparkles } from 'lucide-react';

import Reveal from './animations/Reveal';
import Tilt from './animations/Tilt';

// Import certificates
import electrosphereCert from '../assets/certificate/Electrosphere 2026 Certificate.jpeg';
import dopplegangerCert from '../assets/certificate/Doppleganger.jpg';



// You can add your certificates and projects here
const hackathons = [
  {
    title: "Doppleganger",
    organization: "OpenPools",
    date: "2026",
    description: "An innovation-driven hackathon focused on solving real-world challenges through collaborative development.",
    certificate: dopplegangerCert,
    project: {
      name: "PlantPal",
      description: "PlantPal is a plant care platform with smart watering schedules, AI-based pest detection, and a community forum for tips and support.",
      tech: ["Reactjs", "Nodejs", "MySQL"],
      github: "https://github.com/Dev1822/PlantPal",
      demo: "https://plant-pal-ten.vercel.app/"
    }
  },
  {
    title: "Electrosphere 2026",
    organization: "Tech Fest",
    date: "2026",
    description: "A high-stakes technical competition focusing on innovative engineering solutions and creative problem-solving.",
    certificate: electrosphereCert,
    project: {
      name: "Kalix AI",
      description: "Kalix AI features a clean chat interface with multi-chat support, image generation, voice interaction, and efficient local data management, powered by APIs for dynamic and scalable AI responses.",
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/Dev1822/Kalix",
      demo: "https://kalix-syntax-squad.vercel.app/"
    }
  },
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

        <div className="grid grid-cols-1 gap-12">
          {hackathons.map((hackathon, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Tilt>
                <div className="glass-card group h-fit overflow-hidden flex flex-col border border-white/5 bg-white/2 backdrop-blur-md hover:border-accent/30 transition-all duration-500">
                  {/* Header Section */}
                  <div className="p-8 border-b border-white/5 bg-white/1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors font-syne tracking-tight">
                          {hackathon.title}
                        </h3>
                        <p className="text-accent text-sm font-semibold mt-0.5">{hackathon.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <Calendar size={12} className="text-accent/60" />
                        <span>{hackathon.date}</span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed max-w-3xl">{hackathon.description}</p>
                  </div>

                  {/* Content Split */}
                  <div className="flex flex-col lg:flex-row grow">
                    {/* Certificate Left/Top */}
                    <div className="lg:w-[45%] relative group/cert overflow-hidden bg-black/40 border-r border-white/5 flex items-center justify-center">
                      {/* Decorative Background Glow */}
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-700" />

                      {/* Certificate Frame */}
                      <div className="relative w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden border border-white/10 group-hover/cert:scale-[1.02] transition-all duration-700 ease-out">
                        <img
                          src={hackathon.certificate}
                          alt={`${hackathon.title} Certificate`}
                          className="w-full h-auto object-cover grayscale-[0.2] group-hover/cert:grayscale-0 transition-all duration-700"
                        />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover/cert:translate-x-full transition-transform duration-1000 delay-100" />
                      </div>
                    </div>

                    {/* Project Right/Bottom */}
                    <div className="lg:w-[55%] p-8 flex flex-col bg-white/0.5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-px bg-accent/30" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80">Project Built</span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        {hackathon.project.name}
                        <Sparkles size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed mb-6 grow italic opacity-90">
                        "{hackathon.project.description}"
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {hackathon.project.tech.map((tech, tIndex) => (
                          <span key={tIndex} className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/5 border border-white/5 text-white/50 hover:border-accent/30 hover:text-accent transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/5">
                        <a
                          href={hackathon.project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-all">
                            <Github size={14} />
                          </div>
                          <span>Code</span>
                        </a>
                        <a
                          href={hackathon.project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-all">
                            <ExternalLink size={14} />
                          </div>
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
