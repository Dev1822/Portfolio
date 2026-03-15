import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Zap, Award, Activity, Loader2 } from 'lucide-react';

export default function LeetCodeSection() {
  const username = "Dev_D_Patel";
  const [badges, setBadges] = useState([]);
  const [loadingBadges, setLoadingBadges] = useState(true);

  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/badges`)
      .then(res => res.json())
      .then(data => {
        if (data && data.badges) {
          setBadges(data.badges.slice(0, 6));
        }
        setLoadingBadges(false);
      })
      .catch(err => {
        console.error("Failed to fetch LeetCode badges", err);
        setLoadingBadges(false);
      });
  }, [username]);

  const getBadgeSrc = (icon) => {
    if (icon.startsWith('http')) return icon;
    return `https://leetcode.com${icon}`;
  };

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
            <span className="text-xs font-medium text-orange-400 tracking-wide uppercase">Problem Solving</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <Code2 size={40} className="text-orange-500" />
            LeetCode Stats
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>
          <p className="text-secondary max-w-2xl text-lg md:text-left text-center">Continuous practice and deep-dive into complex algorithms and data structures.</p>
        </motion.div>

        {/* Badges & Submissions Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dynamic Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full glass-card p-6 flex flex-col items-center justify-center min-h-[240px] group hover:bg-surfaceLight/70 transition-all text-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} className="text-orange-400" />
              <h3 className="text-xl font-bold text-white">Earned Badges</h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 min-h-[100px]">
              {loadingBadges ? (
                <div className="flex flex-col items-center justify-center text-secondary">
                  <Loader2 className="animate-spin mb-2" size={24} />
                  <span className="text-sm">Fetching badges...</span>
                </div>
              ) : badges.length > 0 ? (
                badges.map((badge, idx) => (
                  <div key={idx} className="relative group/badge flex flex-col items-center tooltip" title={badge.displayName}>
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={getBadgeSrc(badge.icon)}
                      alt={badge.displayName}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg transform group-hover/badge:scale-110 group-hover/badge:-translate-y-2 transition-all duration-300"
                    />
                    <span className="text-xs text-secondary mt-3 opacity-0 group-hover/badge:opacity-100 transition-opacity font-medium max-w-[100px] truncate">{badge.displayName}</span>
                  </div>
                ))
              ) : (
                <p className="text-secondary text-sm">No badges to display yet.</p>
              )}
            </div>
          </motion.div>

          {/* Submissions Graph from API */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full glass-card p-6 flex flex-col items-center justify-center min-h-[240px] group hover:bg-surfaceLight/70 transition-all text-center overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <Activity size={28} className="text-orange-400" />
              <h3 className="text-xl font-bold text-white">Recent Submissions</h3>
            </div>

            <div className="w-full flex items-center justify-center rounded-lg border border-white/5 relative p-4 bg-black/20">
              <div className="absolute inset-0 bg-orange-500/5 hover:bg-transparent transition-colors z-10 pointer-events-none rounded-lg"></div>
              <img
                src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=heatmap`}
                alt="LeetCode Submission Heatmap"
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
