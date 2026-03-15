import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
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

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Heart-Disease-EDA",
      description: "Performed Exploratory Data Analysis on datasets consisting of Heart Disease Patients.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: HeartDiseaseEDAImg,
      github: "https://github.com/Dev1822/Heart-Disease-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/heart-disease-eda"
    },
    {
      title: "Road-Accident-EDA",
      description: "Performed Exploratory Data Analysis on datasets consisting of Road Accident data.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: RoadAccidentImg,
      github: "https://github.com/Dev1822/Road-Accident-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/road-accident-eda"
    },
    {
      title: "AI-Jobs-EDA",
      description: "Performed Exploratory Data Analysis on datasets consisting of AI-related jobs.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "EDA",
      image: AiJobsImg,
      github: "https://github.com/Dev1822/AI-Jobs-EDA",
      demo: "https://www.kaggle.com/code/devdaxinpatel/ai-jobs-eda"
    },
    {
      title: "Youtube",
      description: "Youtube Clone made using HTML,CSS AND JS.",
      tech: ["HTML", "CSS", "JS"],
      category: "Website Clone",
      image: youtubeImg,
      github: "https://github.com/Dev1822/Youtube",
      demo: "https://devpatel-youtube.vercel.app/"
    },
    {
      title: "Material Kitchen",
      description: "Material Kitchen Clone made using HTML,CSS.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: materialImg,
      github: "https://github.com/Dev1822/MaterialKitchen",
      demo: "https://devpatel-materialkitchen.netlify.app/"
    },
    {
      title: "GreatJones",
      description: "Great Jones Clone made using HTML,CSS.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: jonesImg,
      github: "https://github.com/Dev1822/GreatJones",
      demo: "https://devpatel-greatjones.netlify.app/"
    },
    {
      title: "Celestial AI",
      description: "Celestial.ai Clone made using HTML,CSS.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: celestialImg,
      github: "https://github.com/Dev1822/Celestial.ai",
      demo: "https://devpatel-celestial.netlify.app/"
    },
    {
      title: "Lovable Labs",
      description: "Lovable Labs Clone made using HTML,CSS.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: lovableImg,
      github: "https://github.com/Dev1822/LovableLabs",
      demo: "https://devpatel-lovelablelabs.netlify.app/"
    },
    {
      title: "ICC Website Clone",
      description: "https://github.com/Dev1822/ICC",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: iccImg,
      github: "https://github.com/Dev1822/ICC",
      demo: "https://devpatel-iccclone.netlify.app/"
    },
    {
      title: "Marvel",
      description: "Marvel Clone made using HTML,CSS.",
      tech: ["HTML", "CSS"],
      category: "Website Clone",
      image: marvelImg,
      github: "https://github.com/Dev1822/Marvel",
      demo: "https://devpatel-marvelclone.netlify.app/"
    }
  ];

  const categories = ['All', 'Website Clone', 'EDA'];

  const filteredProjects = projects.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-secondary tracking-wide uppercase">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-secondary max-w-2xl text-lg">A showcase of my technical abilities, featuring intelligent applications, pixel-perfect clones, and modern web platforms.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
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
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-card overflow-hidden flex flex-col"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 relative overflow-hidden bg-surfaceLight/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surfaceLight to-transparent opacity-90"></div>

                  {/* Overlay Links on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-black/40">
                    <a href={project.github} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-white/90">{project.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, tIndex) => (
                      <span key={tIndex} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-white/70 group-hover:border-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
