import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Activity } from 'lucide-react';

export default function LeetCodeSection({ isPage = false }) {
  const TitleTag = isPage ? 'h1' : 'h2';
  const username = "Dev_D_Patel";

  return (
    <section id="leetcode" className="relative w-full py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4 bg-orange-500/10">
            <Target size={14} className="text-orange-400" />
            <span className="text-xs font-medium text-orange-400 tracking-wide uppercase">
              Problem Solving
            </span>
          </div>

          <TitleTag className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <Code2 size={40} className="text-orange-500" />
            LeetCode Stats
          </TitleTag>

          <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-secondary max-w-2xl text-lg md:text-left text-center">
            Continuous practice and deep-dive into complex algorithms and data structures.
          </p>
        </motion.div>

        {/* Submissions Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full glass-card p-6 flex flex-col items-center justify-center min-h-60 group hover:bg-surfaceLight/70 transition-all text-center overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity size={28} className="text-orange-400" />
            <h3 className="text-xl font-bold text-white">Recent Submissions</h3>
          </div>

          <div className="w-full max-w-3xl mx-auto flex items-center justify-center rounded-lg border border-white/5 relative p-4 bg-black/20">
            <div className="absolute inset-0 bg-orange-500/5 hover:bg-transparent transition-colors z-10 pointer-events-none rounded-lg"></div>

            <img
              src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=heatmap`}
              alt="LeetCode Submission Heatmap"
              className="w-full max-w-2xl h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}