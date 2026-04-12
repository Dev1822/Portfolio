import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Reveal from "./animations/Reveal";
import Tilt from "./animations/Tilt";

// Certificates
import electrosphereCert from "../assets/hackathon/Electrosphere/Certificate/Electrosphere 2026 Certificate.jpeg";
import dopplegangerCert from "../assets/hackathon/Doppleganger/Certificate/Doppleganger.jpg";

// Images
import dImage1 from "../assets/hackathon/Doppleganger/image1.png";
import dImage2 from "../assets/hackathon/Doppleganger/image2.png";
import dImage3 from "../assets/hackathon/Doppleganger/image3.png";
import dImage4 from "../assets/hackathon/Doppleganger/image4.png";

import eImage1 from "../assets/hackathon/Electrosphere/image1.png";
import eImage2 from "../assets/hackathon/Electrosphere/image2.png";
import eImage3 from "../assets/hackathon/Electrosphere/image3.png";
import eImage4 from "../assets/hackathon/Electrosphere/image4.png";

const hackathons = [
  {
    title: "Doppleganger",
    organization: "OpenPools",
    date: "2026",
    description:
      "An innovation-driven hackathon focused on solving real-world challenges through collaborative development.",
    images: [dopplegangerCert, dImage1, dImage2, dImage3, dImage4],
    project: {
      name: "PlantPal",
      description:
        "AI-powered plant care platform with smart watering, pest detection, and a community hub.",
      tech: ["React", "Node", "MySQL"],
      github: "https://github.com/Dev1822/PlantPal",
      demo: "https://plant-pal-ten.vercel.app/",
    },
  },
  {
    title: "Electrosphere 2026",
    organization: "Tech Fest",
    date: "2026",
    description:
      "A high-stakes technical competition focused on innovative engineering solutions.",
    images: [electrosphereCert, eImage1, eImage2, eImage3, eImage4],
    project: {
      name: "Kalix AI",
      description:
        "Modern AI assistant with chat and audio based reply for solving your queries.",
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/Dev1822/Kalix",
      demo: "https://kalix-syntax-squad.vercel.app/",
    },
  },
];

const HackathonCard = ({ hackathon, onImageClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hackathon.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hackathon.images.length]);

  const next = () =>
    setIndex((prev) => (prev + 1) % hackathon.images.length);
  const prev = () =>
    setIndex((prev) =>
      (prev - 1 + hackathon.images.length) % hackathon.images.length
    );

  return (
    <div className="h-full">
      <Tilt>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group relative rounded-2xl overflow-hidden h-full flex flex-col
          bg-linear-to-br from-white/5 to-white/2
          border border-white/10 
          shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          transition-all duration-500"
        >
          {/* GALLERY AREA */}
          <div className="relative p-3 sm:p-4 flex items-center justify-center bg-black/30">
            <div
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => onImageClick?.(hackathon, index)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={hackathon.images[index]}
                  alt={`${hackathon.title} gallery image ${index + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

              {/* controls */}
              <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {hackathon.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full ${i === index ? "w-4 bg-accent" : "w-1.5 bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* OVERVIEW AREA */}
          <div className="p-5 sm:p-6 flex flex-col border-b border-white/10">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs uppercase tracking-widest text-accent">
                Overview
              </span>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Calendar size={14} />
                {hackathon.date}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {hackathon.title}
            </h3>

            <p className="text-accent text-sm font-medium mb-4">
              {hackathon.organization}
            </p>

            <p className="text-white/70 text-sm leading-relaxed">
              {hackathon.description}
            </p>
          </div>

          {/* PROJECT AREA */}
          <div className="p-5 sm:p-6 flex flex-col grow">
            <span className="text-xs uppercase tracking-widest text-accent mb-3">
              Project
            </span>

            <h4 className="text-lg font-semibold text-white mb-2">
              {hackathon.project.name}
            </h4>

            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {hackathon.project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {hackathon.project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-[11px] rounded-md 
                  bg-white/4 border border-white/10 text-white/70
                  hover:bg-accent/10 hover:text-accent transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href={hackathon.project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 justify-center items-center gap-2 px-4 py-2 rounded-lg 
                bg-white/5 hover:bg-accent border border-white/10 
                text-sm font-medium transition"
              >
                <Github size={16} /> Code
              </a>

              <a
                href={hackathon.project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 justify-center items-center gap-2 px-4 py-2 rounded-lg 
                bg-white/5 hover:bg-accent border border-white/10 
                text-sm font-medium transition"
              >
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

const FullScreenGallery = ({ hackathon, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hackathon.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hackathon.images.length]);

  const next = () => setIndex((prev) => (prev + 1) % hackathon.images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + hackathon.images.length) % hackathon.images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hackathon.images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-50"
      >
        <X size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-50 hidden sm:block"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-50 hidden sm:block"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={hackathon.images[index]}
            alt={`${hackathon.title} full screen gallery image ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl pointer-events-auto"
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {hackathon.images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Hackathons() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    if (selectedGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedGallery]);

  return (
    <section id="hackathons" className="relative py-28">
      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedGallery && (
          <FullScreenGallery
            hackathon={selectedGallery.hackathon}
            initialIndex={selectedGallery.index}
            onClose={() => setSelectedGallery(null)}
          />
        )}
      </AnimatePresence>

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-37.5 left-1/2 -translate-x-1/2 w-150 h-150 bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* header */}
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Trophy size={14} className="text-accent" />
              <span className="text-xs text-accent uppercase tracking-wider">
                Hackathons
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6">
              Building Under Pressure
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Real-world projects built during intense hackathons where ideas
              turn into working products.
            </p>
          </div>
        </Reveal>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 justify-items-center">
          {hackathons.map((h, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="max-w-md lg:max-w-none w-full h-full">
                <HackathonCard
                  hackathon={h}
                  onImageClick={(hackathon, index) => setSelectedGallery({ hackathon, index })}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}