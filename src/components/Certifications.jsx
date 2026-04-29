import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

import cert1 from '../assets/certificate/HTML.webp';
import cert2 from '../assets/certificate/Guvi Certification - Python.webp';
import cert3 from '../assets/certificate/IITM Pravartak Certificate - Python.webp';
import cert4 from '../assets/certificate/NumpyPandasMatplotlib.webp';
import cert5 from '../assets/certificate/JSBeginner.webp';
import cert6 from '../assets/certificate/EDAforML.webp';

export default function Certifications({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  const certifications = [
    {
      title: "Introduction to JavaScript",
      issuer: "Sololearn",
      description: "Learned the fundamentals of JavaScript and how to create dynamic web pages.",
      image: cert5,
      skills: ["JavaScript"]
    },
    {
      title: "Introduction to HTML",
      issuer: "Sololearn",
      description: "Learned the fundamentals of HTML and how to create web pages.",
      image: cert1,
      skills: ["HTML"]
    },
    {
      title: "EDA for Machine Learning",
      issuer: "IBM",
      description: "Explored advanced data analysis techniques to uncover patterns and insights from complex datasets.",
      image: cert6,
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      title: "Data Science Stack",
      issuer: "Udemy",
      description: "Gained proficiency in the essential Python libraries used for data processing and visualization.",
      image: cert4,
      skills: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Python Certification",
      issuer: "Guvi",
      description: "Validated core Python programming skills and logical reasoning through rigorous assessment.",
      image: cert2,
      skills: ["Python"]
    },
    {
      title: "Python Programming",
      issuer: "IITM Pravartak",
      description: "Mastered algorithmic foundations and professional coding standards in Python.",
      image: cert3,
      skills: ["Python"]
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4 bg-emerald-500/10">
            <Award size={14} className="text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Credentials</span>
          </div>
          <TitleTag className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <CheckCircle size={40} className="text-white" />
            Certifications
          </TitleTag>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-secondary max-w-2xl text-lg md:text-left text-center">Formal recognition of my technical skills and achievements from leading institutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="w-full h-64 sm:h-80 relative overflow-hidden bg-surfaceLight/80">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>

              <div className="p-6 border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="mb-4">
                  <p className="text-emerald-400 text-sm font-medium">{cert.issuer}</p>
                  <p className="text-secondary text-sm leading-relaxed mt-1 opacity-80">{cert.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
