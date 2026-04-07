import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, FileText, Github, Linkedin, Youtube , Twitter} from "lucide-react";
import Scene3D from "./animations/Scene3D";
import Reveal from "./animations/Reveal";

export default function Hero() {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Scene3D />

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <Reveal delay={0.2} stagger={0.1}>
          <div className="max-w-4xl">

            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-lg bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-spacemono text-[11px] tracking-widest text-secondary uppercase">
                Open to opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-gray-500">
                Dev Patel
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-400">
                Building the future.
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
              Computer Engineering Student | Full Stack Developer.
              <br className="hidden md:block" />
              Frontend Developer | Backend Developer | Data Science Enthusiast.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  className="group px-8 py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/1e4cV6O19AZDJb_8H65gfloPN06Q3ksgJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  View Resume
                  <FileText
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Dev1822", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dev-daxin-patel/", label: "LinkedIn" },
                { icon: Code2, href: "https://leetcode.com/Dev_D_Patel", label: "LeetCode" },
                { icon: Youtube, href: "https://www.youtube.com/@DevDaxinPatel", label: "YouTube" },
                { icon: Twitter, href: "https://x.com/DevPatel1822", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

          </div>
        </Reveal>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-16 h-16 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center opacity-40"
        >
          <Code2 className="text-accent w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[25%] w-20 h-20 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center opacity-30"
        >
          <Cpu className="text-blue-400 w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] w-12 h-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-full flex items-center justify-center opacity-20"
        >
          <Globe className="text-white w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}