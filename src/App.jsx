import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHub';
import LeetCodeSection from './components/LeetCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

import SmoothScroll from './components/animations/SmoothScroll';
import CustomCursor from './components/animations/CustomCursor';
import Noise from './components/animations/Noise';
import Reveal from './components/animations/Reveal';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white">
      <Helmet>
        <title>Dev Patel | Portfolio Website</title>
        <meta name="description" content="Dev Patel - Computer Engineering Student | AI & ML Enthusiast | Full Stack Developer Portfolio" />
        <meta name="keywords" content="Dev Patel, Portfolio, Developer, AI Engineer, Machine Learning, React Developer, Full Stack Developer" />
        <meta name="author" content="Dev Patel" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev Patel | Portfolio Website" />
        <meta property="og:description" content="Dev Patel - Computer Engineering Student | AI & ML Enthusiast | Full Stack Developer Portfolio" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Dev Patel | Portfolio Website" />
        <meta property="twitter:description" content="Dev Patel - Computer Engineering Student | AI & ML Enthusiast | Full Stack Developer Portfolio" />
      </Helmet>
      <SmoothScroll />
      <CustomCursor />
      <Noise />
      
      {/* Background ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Hackathons />
              <Certifications />
              <GitHubSection />
              <LeetCodeSection />
              <Contact />
            </>
          } />
          <Route path="/about-dev-patel" element={<About />} />
          <Route path="/developer-skills" element={<Skills />} />
          <Route path="/software-projects" element={<Projects />} />
          <Route path="/hackathon-experience" element={<Hackathons />} />
          <Route path="/tech-certifications" element={<Certifications />} />
          <Route path="/github-contributions" element={<GitHubSection />} />
          <Route path="/leetcode-profile" element={<LeetCodeSection />} />
          <Route path="/contact-dev-patel" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
