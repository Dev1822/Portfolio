import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity } from 'lucide-react';

export default function GitHubSection({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  const username = "Dev1822"; // Placeholder username

  return (
    <section id="github" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4">
            <Activity size={14} className="text-accent" />
            <span className="text-xs font-medium text-secondary tracking-wide uppercase">Open Source</span>
          </div>
          <TitleTag className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <Github size={40} className="text-white" />
            GitHub Activity
          </TitleTag>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-secondary max-w-2xl text-lg md:text-left text-center">Constantly building, breaking, and shipping code. Here's a look at my open-source contributions and statistics.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 flex flex-col items-center justify-center min-h-55 group transition-all hover:bg-surfaceLight/70 text-center"
          >
            <Github size={48} className="text-secondary mb-4 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
            <h3 className="text-lg font-bold text-white mb-2">GitHub Statistics</h3>
            <p className="text-secondary text-sm">View my complete statistics and open-source contributions directly on GitHub.</p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors border border-white/5"
            >
              View Profile
            </a>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 flex flex-col items-center justify-center min-h-55 group transition-all hover:bg-surfaceLight/70 text-center"
          >
            <Activity size={48} className="text-secondary mb-4 opacity-50 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" />
            <h3 className="text-lg font-bold text-white mb-2">Top Languages</h3>
            <p className="text-secondary text-sm">Python, JavaScript, React, Tailwind CSS, C/C++</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-400 border border-blue-500/20">Python</span>
              <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">JavaScript</span>
              <span className="px-2 py-1 text-xs rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">React</span>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph (Placeholder using third-party image/widget) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass-card p-6 flex flex-col items-center justify-center w-full overflow-hidden group hover:bg-surfaceLight/70 transition-all"
        >
          <img
            src={`https://ghchart.rshah.org/3b82f6/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full max-w-5xl object-contain filter drop-shadow opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback if ghchart is down
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML += '<p class="text-secondary py-10">Contribution graph currently unavailable.</p>';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
