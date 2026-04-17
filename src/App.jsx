import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
          <Route path="/about-dev-patel" element={
            <>
              <Helmet>
                <title>About Dev Patel | Full Stack Developer & AI Enthusiast</title>
                <meta name="description" content="Learn more about Dev Patel, a Computer Engineering student passionate about AI, ML, and Full Stack Development." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><About /></Suspense>
            </>
          } />
          <Route path="/developer-skills" element={
            <>
              <Helmet>
                <title>Skills & Expertise | Dev Patel</title>
                <meta name="description" content="Explore the technical skills and expertise of Dev Patel, including React, AI/ML, and modern web technologies." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><Skills /></Suspense>
            </>
          } />
          <Route path="/software-projects" element={
            <>
              <Helmet>
                <title>Software Projects | Dev Patel Portfolio</title>
                <meta name="description" content="Discover the software projects built by Dev Patel, ranging from web applications to AI-powered solutions." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><Projects /></Suspense>
            </>
          } />
          <Route path="/hackathon-experience" element={
            <>
              <Helmet>
                <title>Hackathon Experience | Dev Patel</title>
                <meta name="description" content="A showcase of hackathons attended and projects built by Dev Patel in competitive environments." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><Hackathons /></Suspense>
            </>
          } />
          <Route path="/tech-certifications" element={
            <>
              <Helmet>
                <title>Technical Certifications | Dev Patel</title>
                <meta name="description" content="View the professional certifications and achievements earned by Dev Patel in the field of technology." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><Certifications /></Suspense>
            </>
          } />
          <Route path="/github-contributions" element={
            <>
              <Helmet>
                <title>GitHub Contributions | Dev Patel</title>
                <meta name="description" content="Explore Dev Patel's open-source contributions and activity on GitHub." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><GitHubSection /></Suspense>
            </>
          } />
          <Route path="/leetcode-profile" element={
            <>
              <Helmet>
                <title>LeetCode Profile | Dev Patel</title>
                <meta name="description" content="Check out Dev Patel's problem-solving journey and achievements on LeetCode." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><LeetCodeSection /></Suspense>
            </>
          } />
          <Route path="/contact-dev-patel" element={
            <>
              <Helmet>
                <title>Contact Dev Patel | Get In Touch</title>
                <meta name="description" content="Reach out to Dev Patel for collaborations, opportunities, or just to say hi." />
              </Helmet>
              <Suspense fallback={<PageLoader />}><Contact /></Suspense>
            </>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
