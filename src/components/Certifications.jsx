import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, GraduationCap, Calendar, ShieldCheck } from 'lucide-react';

import cert1 from '../assets/certificate/HTML.webp';
import cert2 from '../assets/certificate/Guvi Certification - Python.webp';
import cert3 from '../assets/certificate/IITM Pravartak Certificate - Python.webp';
import cert4 from '../assets/certificate/NumpyPandasMatplotlib.webp';
import cert5 from '../assets/certificate/JSBeginner.webp';
import cert6 from '../assets/certificate/EDAforML.webp';
import cert7 from '../assets/certificate/CBeginner.webp';
import cert8 from '../assets/certificate/CppBeginner.webp';
import cert9 from '../assets/certificate/DelloiteJobSimulation.webp';
import cert10 from '../assets/certificate/MLRegression.webp';
import cert11 from '../assets/certificate/MySQLBeginner.webp';
import cert12 from '../assets/certificate/PythonBeginner.webp';
import cert13 from '../assets/certificate/PythonIntermediate.webp';

export default function Certifications({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  
  const certifications = [
    {
      title: "Data Analyst Job Simulation",
      issuer: "Deloitte",
      description: "Completed a virtual internship simulating real-world technology consulting tasks at Deloitte.",
      image: cert9,
      skills: ["Consulting", "Analysis"],
      date: "2024"
    },
    {
      title: "Machine Learning: Regression",
      issuer: "IBM",
      description: "In-depth study of regression models and their applications in machine learning.",
      image: cert10,
      skills: ["Machine Learning", "Regression", "Python"],
      date: "2024"
    },
    {
      title: "EDA for Machine Learning",
      issuer: "IBM",
      description: "Explored advanced data analysis techniques to uncover patterns and insights from complex datasets.",
      image: cert6,
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      date: "2024"
    },
    {
      title: "Data Science Stack",
      issuer: "Unstop",
      description: "Gained proficiency in the essential Python libraries used for data processing and visualization.",
      image: cert4,
      skills: ["NumPy", "Pandas", "Matplotlib"],
      date: "2024"
    },
    {
      title: "Introduction to JavaScript",
      issuer: "Sololearn",
      description: "Learned the fundamentals of JavaScript and how to create dynamic web pages.",
      image: cert5,
      skills: ["JavaScript"],
      date: "2023"
    },
    {
      title: "Introduction to HTML",
      issuer: "Sololearn",
      description: "Learned the fundamentals of HTML and how to create web pages.",
      image: cert1,
      skills: ["HTML"],
      date: "2023"
    },
    {
      title: "Python Certification",
      issuer: "Guvi",
      description: "Validated core Python programming skills and logical reasoning through rigorous assessment.",
      image: cert2,
      skills: ["Python"],
      date: "2023"
    },
    {
      title: "Python Programming",
      issuer: "IITM Pravartak",
      description: "Mastered algorithmic foundations and professional coding standards in Python.",
      image: cert3,
      skills: ["Python"],
      date: "2023"
    },
    {
      title: "MySQL for Beginners",
      issuer: "Sololearn",
      description: "Gained foundational knowledge in database management and SQL queries.",
      image: cert11,
      skills: ["MySQL", "SQL"],
      date: "2023"
    },
    {
      title: "Python Intermediate",
      issuer: "Sololearn",
      description: "Deepened knowledge of Python with advanced topics like decorators and generators.",
      image: cert13,
      skills: ["Python"],
      date: "2023"
    },
    {
      title: "Python for Beginners",
      issuer: "Sololearn",
      description: "Learned the basics of Python programming and problem-solving.",
      image: cert12,
      skills: ["Python"],
      date: "2023"
    },
    {
      title: "C for Beginners",
      issuer: "Sololearn",
      description: "Mastered the basics of C programming, including variables, loops, and functions.",
      image: cert7,
      skills: ["C"],
      date: "2023"
    },
    {
      title: "C++ for Beginners",
      issuer: "Sololearn",
      description: "Learned the fundamentals of C++ and object-oriented programming.",
      image: cert8,
      skills: ["C++", "OOP"],
      date: "2023"
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-24 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Award size={16} className="text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">Credentials</span>
          </div>
          <TitleTag className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            My Certifications
          </TitleTag>
          <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A curated collection of professional certifications and academic achievements from global institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl shadow-black/20"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-56 overflow-hidden bg-surfaceLight/30 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10" />
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain z-20 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 z-30">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-tighter">Verified</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-emerald-500/90 text-sm font-medium mt-1 flex items-center gap-1.5">
                      <GraduationCap size={14} />
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  {cert.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-white/5 border border-white/10 text-white/60 group-hover:border-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300 uppercase tracking-wider"
                    >
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
