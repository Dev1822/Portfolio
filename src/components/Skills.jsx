import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-blue-400" size={24} />,
      skills: ["Python", "C", "JavaScript"],
      color: "group-hover:border-blue-400/50 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]"
    },
    {
      title: "Web Development",
      icon: <Layout className="text-purple-400" size={24} />,
      skills: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS"],
      color: "group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]"
    },
    {
      title: "AI / ML / DS",
      icon: <Brain className="text-emerald-400" size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      color: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
    },
    {
      title: "Tools",
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Vite", "Figma"],
      color: "group-hover:border-orange-400/50 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]"
    }
  ];

  return (
    <section id="skills" className="relative w-full py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`glass-card p-6 group transition-all duration-500 hover:-translate-y-2 ${category.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 text-white/90">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-3 text-secondary group-hover:text-white/80 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-current transition-colors duration-300"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
