import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Brain, Wrench, Database } from 'lucide-react';
import { Icon } from '@iconify/react';
import Reveal from './animations/Reveal';
import MatrixRain from './animations/MatrixRain';

const SkillOrbit = ({ slugs, accent, isHovered }) => {
  const radius = 90; // Orbit radius
  const logoSize = 24;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {slugs.map((slug, idx) => {
          const angle = (idx / slugs.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={slug}
              className="absolute flex items-center justify-center p-1.5 rounded-lg bg-surface/80 backdrop-blur-sm border border-theme-border-light shadow-xl"
              style={{
                x,
                y,
                left: `calc(50% - ${logoSize / 2}px)`,
                top: `calc(50% - ${logoSize / 2}px)`,
              }}
              animate={isHovered ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Icon
                icon={slug}
                className="w-5 h-5 opacity-80"
                style={{ color: accent }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function Skills({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains('light'));
    };

    // Initial check
    checkTheme();

    // Observe class changes on html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      label: "01",
      icon: Code2,
      skills: ["Python", "C", "JavaScript", "C++"],
      slugs: ["simple-icons:python", "simple-icons:c", "simple-icons:javascript", "simple-icons:cplusplus"],
      accent: "#60A5FA",
      glow: "rgba(96,165,250,0.2)",
      tag: "CORE LANGUAGES"
    },
    {
      title: "Web Dev",
      label: "02",
      icon: Layout,
      skills: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS"],
      slugs: ["simple-icons:html5", "simple-icons:css3", "simple-icons:react", "simple-icons:nodedotjs", "simple-icons:tailwindcss"],
      accent: "#C084FC",
      glow: "rgba(192,132,252,0.2)",
      tag: "FRONTEND & BACKEND"
    },
    {
      title: "AI / ML / DS",
      label: "03",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      slugs: ["simple-icons:pandas", "simple-icons:numpy", "devicon:matplotlib", "simple-icons:scikitlearn"],
      accent: "#34D399",
      glow: "rgba(52,211,153,0.2)",
      tag: "DATA & INTELLIGENCE"
    },
    {
      title: "Tools",
      label: "04",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Vite", "Figma", "PowerBI"],
      slugs: ["simple-icons:git", "simple-icons:github", "simple-icons:visualstudiocode", "simple-icons:vite", "simple-icons:figma", "simple-icons:powerbi"],
      accent: "#FB923C",
      glow: "rgba(251,146,60,0.2)",
      tag: "DEV ENVIRONMENT"
    },
    {
      title: "Database",
      label: "05",
      icon: Database,
      skills: ["MongoDB","MySQL"],
      slugs: ["simple-icons:mongodb", "simple-icons:mysql"],
      accent: "#FACC15",
      glow: "rgba(250,204,21,0.2)",
      tag: "DATA STORAGE & MANAGEMENT"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .card-shimmer {
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          animation: shimmer 3s infinite;
          pointer-events: none;
          border-radius: 2px;
          overflow: hidden;
        }
      `}</style>

      <section
        id="skills"
        className="relative w-full py-24 border-t border-theme-border bg-background overflow-hidden"
      >
        {/* Matrix Rain Background */}
        <MatrixRain
          hoveredColor={hoveredCard !== null ? skillCategories[hoveredCard].accent : null}
          intensity={hoveredCard !== null ? 2.5 : 1}
          isLightMode={isLightMode}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Header */}
          <Reveal>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-spacemono text-[10px] tracking-[0.2em] text-primary/30 uppercase">CAPABILITIES</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <span className="font-spacemono text-[10px] tracking-[0.2em] text-primary/20">v2025</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <TitleTag className="font-syne font-extrabold tracking-tight leading-[0.9] text-3xl sm:text-4xl md:text-7xl text-primary">
                  Technical<br />
                  <span style={{ WebkitTextStroke: '1px var(--color-theme-border)', color: 'transparent' }}>Skills</span>
                </TitleTag>
                <p className="font-sans text-sm leading-[1.8] text-primary/35 max-w-xs">
                  A curated set of technologies I work with — from systems programming to intelligent data pipelines.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              const isHovered = hoveredCard === i;

              return (
                <Reveal key={i} delay={i * 0.1} y={20}>
                  <div
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative rounded-2xl cursor-default overflow-hidden group border border-theme-border transition-all duration-500 bg-surface/60 backdrop-blur-md h-full"
                    style={{
                      boxShadow: isHovered ? `inset 0 0 60px ${cat.glow}, 0 20px 60px ${cat.glow}` : 'none',
                      borderColor: isHovered ? cat.accent : 'var(--color-theme-border)'
                    }}
                  >
                    {isHovered && <div className="card-shimmer" />}

                    {/* Orbiting Logos */}
                    <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <SkillOrbit slugs={cat.slugs} accent={cat.accent} isHovered={isHovered} />
                    </div>

                    <div 
                      className={`p-5 sm:p-7 h-full flex flex-col relative z-10 transition-all duration-500 ${isHovered ? 'blur-md opacity-10 scale-[0.95]' : 'blur-0 opacity-100 scale-100'}`}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-500"
                          style={{
                            background: isHovered ? `${cat.accent}18` : 'var(--color-theme-hover-bg)',
                            border: `1px solid ${isHovered ? cat.accent + '40' : 'var(--color-theme-border-light)'}`
                          }}
                        >
                          <Icon size={20} color={isHovered ? cat.accent : 'var(--color-secondary)'} />
                        </div>
                        <span className="font-spacemono text-[11px] tracking-widest opacity-35 text-primary">{cat.label}</span>
                      </div>

                      <div className="mb-2">
                        <span
                          className="font-spacemono text-[9px] tracking-widest font-bold transition-colors duration-300"
                          style={{ color: isHovered ? cat.accent : 'var(--color-theme-text-muted)' }}
                        >
                          {cat.tag}
                        </span>
                      </div>

                      <h3 className="font-syne font-extrabold tracking-tight text-2xl mb-6 text-primary/90 leading-none">
                        {cat.title}
                      </h3>

                      <div className="mb-6 h-px w-full" style={{ background: isHovered ? `linear-gradient(90deg, ${cat.accent}60, transparent)` : 'var(--color-theme-border-light)' }} />

                      <div className="flex flex-col gap-2 mt-auto">
                        {cat.skills.map((skill, si) => (
                          <div key={si} className="flex items-center gap-3 group/item">
                            <div
                              className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
                              style={{ background: isHovered ? cat.accent : 'var(--color-theme-text-muted)' }}
                            />
                            <span
                              className="font-spacemono text-[11px] tracking-wider transition-colors duration-300"
                              style={{ color: isHovered ? 'var(--color-primary)' : 'var(--color-secondary)' }}
                            >
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom ticker */}
          <Reveal delay={0.6}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
              <span className="font-spacemono text-[9px] tracking-[0.2em] text-primary/15">
                {skillCategories.reduce((a, c) => a + c.skills.length, 0)} TECHNOLOGIES · {skillCategories.length} DOMAINS
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
