import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import Tilt from './animations/Tilt';
import Reveal from './animations/Reveal';

import celestialImg from '../assets/project/celestial.png';
import iccImg from '../assets/project/icc.png';
import lovableImg from '../assets/project/lovablelabs.png';
import jonesImg from '../assets/project/greatjones.png';
import materialImg from '../assets/project/material.png';
import marvelImg from '../assets/project/marvel.png';
import youtubeImg from '../assets/project/youtube.png';
import AiJobsImg from '../assets/project/AIJobsEDA.png';
import RoadAccidentImg from '../assets/project/RoadEDA.png';
import HeartDiseaseEDAImg from '../assets/project/HeartEDA.png';
import APIHub from '../assets/project/apihub.png';
import House from '../assets/project/HousePrediction.png';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "House Price Prediction",
      description: "House Price Predictor is a full-stack app using React, Flask, and scikit-learn that lets users input property details to get real-time house price estimates.",
      tech: ["Reactjs", "Tailwind CSS", "Flask", "Scikit Learn"],
      category: "ML",
      image: House,
      github: "https://github.com/Dev1822/House-Price-Prediction",
      demo: "https://dev-patel-house-price-prediction.vercel.app/"
    },
    {
      title: "API Studio",
      description: "APIStudio is a Postman-inspired app built with React, Node, Express, and MongoDB that lets developers send, test, and save HTTP API requests easily.",
      tech: ["Reactjs", "Nodejs", "Express", "Mongodb"],
      category: "MERN",
      image: APIHub,
      github: "https://github.com/Dev1822/APIStudio",
      demo: "https://api-studio-gilt.vercel.app/"
    },
    {
      title: "Heart-Disease-EDA",
      description: "Heart Disease EDA is a Python-based project using Pandas, Seaborn, and Matplotlib to analyze patient data and uncover key risk factors and insights related to heart disease.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: HeartDiseaseEDAImg,
      github: "https://github.com/Dev1822/Heart-Disease-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/heart-disease-eda"
    },
    {
      title: "Road-Accident-EDA",
      description: "Road Accident EDA is a Python-based project using Pandas, Matplotlib, and Seaborn to analyze accident data, uncover patterns, and generate actionable insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: RoadAccidentImg,
      github: "https://github.com/Dev1822/Road-Accident-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/road-accident-eda"
    },
    {
      title: "AI-Jobs-EDA",
      description: "AI Job Market EDA is a Python-based analysis using Pandas, NumPy, and visualization tools to uncover trends in demand, salaries, and work patterns across AI and data roles.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: AiJobsImg,
      github: "https://github.com/Dev1822/AI-Jobs-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/ai-jobs-eda"
    },
    {
      title: "Youtube",
      description: "YouTube Clone is a dynamic web app built with HTML, CSS, and JavaScript that integrates APIs to deliver real-time video content, smart search, and interactive playback.",
      tech: ["HTML", "CSS", "JS"],
      category: "Website Clone",
      image: youtubeImg,
      github: "https://github.com/Dev1822/Youtube",
      demo: "https://devpatel-youtube.vercel.app/"
    },
    {
      title: "Material Kitchen",
      description: "Material Kitchen Website Clone is a polished frontend project showcasing clean typography, responsive design, and improved UI/UX with smooth navigation and visual hierarchy.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: materialImg,
      github: "https://github.com/Dev1822/MaterialKitchen",
      demo: "https://devpatel-materialkitchen.netlify.app/"
    },
    {
      title: "GreatJones",
      description: "A visually focused website clone project exploring CSS techniques like custom shapes and split layouts to enhance branding and overall design aesthetics.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: jonesImg,
      github: "https://github.com/Dev1822/GreatJones",
      demo: "https://devpatel-greatjones.netlify.app/"
    },
    {
      title: "Celestial AI",
      description: "An interaction-focused website clone project exploring responsive layouts, custom mobile navigation, and basic UI structuring to create more usable interfaces.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: celestialImg,
      github: "https://github.com/Dev1822/Celestial.ai",
      demo: "https://devpatel-celestial.netlify.app/"
    },
    {
      title: "Lovable Labs",
      description: "A detail-focused website clone project emphasizing precise spacing, consistency, and pixel-perfect UI to enhance overall design quality.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: lovableImg,
      github: "https://github.com/Dev1822/LovableLabs",
      demo: "https://devpatel-lovelablelabs.netlify.app/"
    },
    {
      title: "ICC Website Clone",
      description: "A content-driven website clone focused on organizing complex cricket data with structured layouts, sticky navigation, and clear visual alignment for better usability—like the ICC site.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: iccImg,
      github: "https://github.com/Dev1822/ICC",
      demo: "https://devpatel-iccclone.netlify.app/"
    },
    {
      title: "Marvel",
      description: "A foundational HTML & CSS project focused on mastering layout structure, Flexbox, and image handling to build a strong base in positioning and design flow—like the Marvel website.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: marvelImg,
      github: "https://github.com/Dev1822/Marvel",
      demo: "https://devpatel-marvelclone.netlify.app/"
    }
  ];

  const categories = ['All', 'Website Clone', 'EDA', 'MERN',"ML"];

  const filteredProjects = projects.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-medium text-secondary tracking-wide uppercase">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary max-w-2xl text-lg">A showcase of my technical abilities, featuring intelligent applications, pixel-perfect clones, and modern web platforms.</p>
          </div>
        </Reveal>

        {/* Filter Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-accent'
                  : 'bg-white/5 text-secondary hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
                <Tilt>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group glass-card overflow-hidden flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    {/* Project Image */}
                    <div className="w-full h-48 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                      {/* Overlay Links */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-[2px]">
                        <a href={project.github} className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-all">
                          <Github size={20} />
                        </a>
                        <a href={project.demo} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-all">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-white/90">{project.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, tIndex) => (
                          <span key={tIndex} className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-white/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
