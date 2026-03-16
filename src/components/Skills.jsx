import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Brain, Wrench } from 'lucide-react';
import Reveal from './animations/Reveal';

const MatrixRain = ({ hoveredColor, intensity = 1 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const chars = "{}[]<>/\\*&%#@01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Use hoveredColor if active, otherwise subtle grey
        ctx.fillStyle = hoveredColor ? hoveredColor : 'rgba(255, 255, 255, 0.15)';
        
        // Add glow if hovered
        if (hoveredColor) {
           ctx.shadowBlur = 5;
           ctx.shadowColor = hoveredColor;
        } else {
           ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top if it reaches bottom, or randomly for varied rain
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment position based on intensity
        drops[i] += (0.5 * intensity) + (Math.random() * 0.5);
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredColor, intensity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
  );
};

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: "Programming",
      label: "01",
      icon: Code2,
      skills: ["Python", "C", "JavaScript"],
      accent: "#60A5FA",
      glow: "rgba(96,165,250,0.2)",
      tag: "CORE LANGUAGES"
    },
    {
      title: "Web Dev",
      label: "02",
      icon: Layout,
      skills: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS"],
      accent: "#C084FC",
      glow: "rgba(192,132,252,0.2)",
      tag: "FRONTEND & BACKEND"
    },
    {
      title: "AI / ML / DS",
      label: "03",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      accent: "#34D399",
      glow: "rgba(52,211,153,0.2)",
      tag: "DATA & INTELLIGENCE"
    },
    {
      title: "Tools",
      label: "04",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Vite", "Figma"],
      accent: "#FB923C",
      glow: "rgba(251,146,60,0.2)",
      tag: "DEV ENVIRONMENT"
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
        className="relative w-full py-24 border-t border-white/5 bg-black overflow-hidden"
      >
        {/* Matrix Rain Background */}
        <MatrixRain 
          hoveredColor={hoveredCard !== null ? skillCategories[hoveredCard].accent : null} 
          intensity={hoveredCard !== null ? 2.5 : 1}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <Reveal>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-spacemono text-[10px] tracking-[0.2em] text-white/30 uppercase">CAPABILITIES</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                <span className="font-spacemono text-[10px] tracking-[0.2em] text-white/20">v2025</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="font-syne font-extrabold tracking-tight leading-[0.9] text-5xl md:text-7xl text-white">
                  Technical<br />
                  <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>Skills</span>
                </h2>
                <p className="font-sans text-sm leading-[1.8] text-white/35 max-w-xs">
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
                    className="relative rounded-2xl cursor-default overflow-hidden group border border-white/10 transition-all duration-500 bg-black/60 backdrop-blur-md h-full"
                    style={{
                      boxShadow: isHovered ? `inset 0 0 60px ${cat.glow}, 0 20px 60px ${cat.glow}` : 'none',
                      borderColor: isHovered ? cat.accent : 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {isHovered && <div className="card-shimmer" />}

                    <div className="p-7 h-full flex flex-col relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-500"
                          style={{
                            background: isHovered ? `${cat.accent}18` : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${isHovered ? cat.accent + '40' : 'rgba(255,255,255,0.08)'}`
                          }}
                        >
                          <Icon size={20} color={isHovered ? cat.accent : 'rgba(255,255,255,0.4)'} />
                        </div>
                        <span className="font-spacemono text-[11px] tracking-widest opacity-35 text-white">{cat.label}</span>
                      </div>

                      <div className="mb-2">
                        <span
                          className="font-spacemono text-[9px] tracking-widest font-bold transition-colors duration-300"
                          style={{ color: isHovered ? cat.accent : 'rgba(255,255,255,0.2)' }}
                        >
                          {cat.tag}
                        </span>
                      </div>

                      <h3 className="font-syne font-extrabold tracking-tight text-2xl mb-6 text-white/90 leading-none">
                        {cat.title}
                      </h3>

                      <div className="mb-6 h-px w-full" style={{ background: isHovered ? `linear-gradient(90deg, ${cat.accent}60, transparent)` : 'rgba(255,255,255,0.06)' }} />

                      <div className="flex flex-col gap-2 mt-auto">
                        {cat.skills.map((skill, si) => (
                          <div key={si} className="flex items-center gap-3 group/item">
                            <div
                              className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
                              style={{ background: isHovered ? cat.accent : 'rgba(255,255,255,0.15)' }}
                            />
                            <span
                              className="font-spacemono text-[11px] tracking-wider transition-colors duration-300"
                              style={{ color: isHovered ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.35)' }}
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
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <span className="font-spacemono text-[9px] tracking-[0.2em] text-white/15">
                {skillCategories.reduce((a, c) => a + c.skills.length, 0)} TECHNOLOGIES · {skillCategories.length} DOMAINS
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}