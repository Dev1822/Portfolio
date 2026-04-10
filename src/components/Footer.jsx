import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 border-t border-white/10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} Dev Patel. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-sm text-secondary">
          <a href="https://x.com/DevPatel1822" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://www.linkedin.com/in/dev-daxin-patel/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/Dev1822" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://leetcode.com/Dev_D_Patel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a>
          <a href="https://www.youtube.com/@DevDaxinPatel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 text-secondary hover:text-white hover:bg-white/10 transition-colors border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
        
      </div>
    </footer>
  );
}
