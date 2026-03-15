import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHub';
import LeetCodeSection from './components/LeetCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white">
      {/* Background ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubSection />
        <LeetCodeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
