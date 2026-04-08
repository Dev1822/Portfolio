import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Hackathons = lazy(() => import('./components/Hackathons'));
const Certifications = lazy(() => import('./components/Certifications'));
const GitHubSection = lazy(() => import('./components/GitHub'));
const LeetCodeSection = lazy(() => import('./components/LeetCode'));
const Contact = lazy(() => import('./components/Contact'));

import SmoothScroll from './components/animations/SmoothScroll';
import CustomCursor from './components/animations/CustomCursor';
import Noise from './components/animations/Noise';
import Reveal from './components/animations/Reveal';

const PageLoader = () => (
  <div className="flex justify-center items-center py-20 w-full min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

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
      
      <main className="relative z-10 flex flex-col items-center w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Suspense fallback={<PageLoader />}>
                <About />
                <Skills />
                <Projects />
                <Hackathons />
                <Certifications />
                <GitHubSection />
                <LeetCodeSection />
                <Contact />
              </Suspense>
            </>
          } />
          <Route path="/about-dev-patel" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/developer-skills" element={<Suspense fallback={<PageLoader />}><Skills /></Suspense>} />
          <Route path="/software-projects" element={<Suspense fallback={<PageLoader />}><Projects /></Suspense>} />
          <Route path="/hackathon-experience" element={<Suspense fallback={<PageLoader />}><Hackathons /></Suspense>} />
          <Route path="/tech-certifications" element={<Suspense fallback={<PageLoader />}><Certifications /></Suspense>} />
          <Route path="/github-contributions" element={<Suspense fallback={<PageLoader />}><GitHubSection /></Suspense>} />
          <Route path="/leetcode-profile" element={<Suspense fallback={<PageLoader />}><LeetCodeSection /></Suspense>} />
          <Route path="/contact-dev-patel" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
