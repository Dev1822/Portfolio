import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  GitPullRequest,
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  Code2,
  Crown,
  Medal,
  Terminal,
  Compass,
  Github,
  Activity
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import Reveal from "./animations/Reveal";

// Import ELUSOC26 Assets
import elusocCert from "../assets/open_source/ELUSOC26/Certificate.jpg";
import elusocDashboard from "../assets/open_source/ELUSOC26/Dashboard.png";
import elusocTicket from "../assets/open_source/ELUSOC26/elusoc-ticket-Dev1822.png";
import elusocLogo from "../assets/open_source/ELUSOC26/Logo.png";

// Import ELUSOC26 Badges
import badgeSpawnling from "../assets/open_source/ELUSOC26/Badges/Spawnling(Score 1 point).png";
import badgeStoneCoder from "../assets/open_source/ELUSOC26/Badges/Stone_Coder(50 points).png";
import badgeIronDev from "../assets/open_source/ELUSOC26/Badges/Iron_Developer(150 points).png";
import badgeGoldEng from "../assets/open_source/ELUSOC26/Badges/Gold_Engineer(Score 350 points).png";
import badgeDiamondArch from "../assets/open_source/ELUSOC26/Badges/Diamond_Architech(750 points).png";
import badgeEndConqueror from "../assets/open_source/ELUSOC26/Badges/End Conqueror(1500 points).png";

// Import ECSOC26 Assets
import ecsocCert from "../assets/open_source/ECSOC26/Participation_Certificate.png";
import ecsocAppreciationCert from "../assets/open_source/ECSOC26/Appreciation_Certificate (Top 500).png";
import ecsocDashboard from "../assets/open_source/ECSOC26/Dashboard.png";
import ecsocLogo from "../assets/open_source/ECSOC26/logo.jpg";

// Import ECSOC26 Badges
import ecsocAdminBadge from "../assets/open_source/ECSOC26/Badges/Project_Admin(Get Selected As A Project Admin).png";
import ecsocEliteBadge from "../assets/open_source/ECSOC26/Badges/Elite(Reach 5000XP).png";
import ecsocRookieBadge from "../assets/open_source/ECSOC26/Badges/Rookie(Reach 1000XP).png";
import ecsocHustlerBadge from "../assets/open_source/ECSOC26/Badges/Hustler(Reach 500XP).png";
import ecsocBeginnerBadge from "../assets/open_source/ECSOC26/Badges/Beginner(Reach 150XP).png";

// Import GSSOC26 Assets
import gssocLogo from "../assets/open_source/GSSOC26/Logo.png";
import gssocDashboard from "../assets/open_source/GSSOC26/Dashboard.png";
import gssocContributions from "../assets/open_source/GSSOC26/Contribution_Section.png";
import gssocProjects from "../assets/open_source/GSSOC26/Difficulties_And_Projects.png";

// Import GSSOC26 Badges
import gssocChampionBadge from "../assets/open_source/GSSOC26/Badges/Champion(Reach 10,000 points).png";
import gssocEliteBadge from "../assets/open_source/GSSOC26/Badges/elite(Reach 5000 Points).png";
import gssocLegendBadge from "../assets/open_source/GSSOC26/Badges/Legend(100 PRs Merged).png";
import gssocProlificBadge from "../assets/open_source/GSSOC26/Badges/Prolific(50 PRs Merged)..png";
import gssocTop100Badge from "../assets/open_source/GSSOC26/Badges/Top_100.png";

// Import GitHub Heatmap Image
import githubHeatmap from "../assets/open_source/github-heatmap.png";

const openSourceData = [
  {
    id: "ecsoc-26",
    program: "ECSoC ’26",
    fullName: "Elite Coders Summer of Code 2026",
    role: "Project Admin",
    roleType: "admin",
    rank: "#6",
    rankLabel: "Top 10 Global Finish",
    color: "from-amber-500 to-yellow-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
    borderColor: "border-amber-500/40",
    logo: ecsocLogo,
    badgeIcon: Crown,
    summary: "Led and maintained open-source repositories, authored structured issues, guided community contributors, and enforced high code-quality standards.",
    highlights: [
      "Ranked #6 overall out of all Project Admins & Mentors",
      "Awarded Certificate of Appreciation (Top 500 Finish)",
      "Achieved Elite Tier Level (5000+ XP) & unlocked 5 Milestones Badges",
      "Architected issue roadmaps with detailed implementation specs",
      "Reviewed and merged community pull requests with automated CI/CD checks",
      "Mentored first-time open-source contributors on Git & React workflows"
    ],
    badgesUnlocked: [
      { name: "Elite Tier", pts: "5000+ XP", img: ecsocEliteBadge, tier: "Elite" },
      { name: "Project Admin", pts: "Verified Admin", img: ecsocAdminBadge, tier: "Leadership" },
      { name: "Rookie", pts: "1000 XP", img: ecsocRookieBadge, tier: "Gold" },
      { name: "Hustler", pts: "500 XP", img: ecsocHustlerBadge, tier: "Silver" },
      { name: "Beginner", pts: "150 XP", img: ecsocBeginnerBadge, tier: "Bronze" }
    ],
    gallery: [
      { title: "ECSoC '26 Appreciation Certificate (Top 500)", src: ecsocAppreciationCert, type: "Certificate" },
      { title: "ECSoC '26 Participation Certificate", src: ecsocCert, type: "Certificate" },
      { title: "Dashboard & Leaderboard Snapshot (Rank #6)", src: ecsocDashboard, type: "Dashboard" }
    ],
    links: {
      github: "https://github.com/Dev1822/paySphere",
      live: "https://paysphere-dev-patel.vercel.app/"
    }
  },
  {
    id: "elusoc-26",
    program: "ElUSoC ’26",
    fullName: "EduLinkUp Summer of Code 2026",
    role: "Contributor",
    roleType: "contributor",
    rank: "#11",
    rankLabel: "Top 15 Global Finish",
    color: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderColor: "border-purple-500/40",
    logo: elusocLogo,
    badgeIcon: Trophy,
    summary: "Achieved Rank #11 worldwide by unlocking all 6 Tier Badges—from Spawnling to End Conqueror (1500+ XP points)—shipping high-impact pull requests across active open-source projects.",
    highlights: [
      "Secured Rank #11 globally on the official leaderboard",
      "Unlocked 6 Progression Tier Badges ending with 'End Conqueror' (1500 pts)",
      "Merged key feature & optimization PRs across multiple repositories",
      "Awarded Official Certificate of Excellence & Verified Contributor Badge"
    ],
    badgesUnlocked: [
      { name: "End Conqueror", pts: "1500+ pts", img: badgeEndConqueror, tier: "Legendary" },
      { name: "Diamond Architect", pts: "750 pts", img: badgeDiamondArch, tier: "Epic" },
      { name: "Gold Engineer", pts: "350 pts", img: badgeGoldEng, tier: "Gold" },
      { name: "Iron Developer", pts: "150 pts", img: badgeIronDev, tier: "Iron" },
      { name: "Stone Coder", pts: "50 pts", img: badgeStoneCoder, tier: "Stone" },
      { name: "Spawnling", pts: "1 pt", img: badgeSpawnling, tier: "Starter" }
    ],
    gallery: [
      { title: "ElUSoC '26 Official Certificate", src: elusocCert, type: "Certificate" },
      { title: "Leaderboard & Dashboard Snapshot (Rank #11)", src: elusocDashboard, type: "Dashboard" },
      { title: "Official Developer Ticket & Badge", src: elusocTicket, type: "Ticket" }
    ]
  },
  {
    id: "gssoc-26",
    program: "GSSoC ’26",
    fullName: "GirlScript Summer of Code 2026",
    role: "Contributor",
    roleType: "contributor",
    rank: "#79",
    rankLabel: "Top 100 Finish",
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.25)",
    borderColor: "border-pink-500/40",
    logo: gssocLogo,
    badgeIcon: Medal,
    summary: "Ranked #80 among thousands of open-source enthusiasts, contributing code refinements, UI enhancements, and documentation upgrades to open-source software.",
    highlights: [
      "Finished in the Top 100 (Rank #80) on the global contributor leaderboard",
      "Unlocked Champion Badge (10,000+ points) & Legend Badge (100+ Merged PRs)",
      "Contributed clean, well-tested code & UI improvements across projects",
      "Collaborated with international project maintainers & peers",
      "Earned official GSSoC '26 digital credential & certificate"
    ],
    badgesUnlocked: [
      { name: "Champion", pts: "10,000+ pts", img: gssocChampionBadge, tier: "Legendary" },
      { name: "Legend", pts: "100+ PRs", img: gssocLegendBadge, tier: "Epic" },
      { name: "Elite", pts: "5000+ pts", img: gssocEliteBadge, tier: "Gold" },
      { name: "Prolific", pts: "50+ PRs", img: gssocProlificBadge, tier: "Silver" },
      { name: "Top 100", pts: "Rank #80", img: gssocTop100Badge, tier: "Honor" }
    ],
    gallery: [
      { title: "GSSoC '26 Dashboard & Leaderboard Snapshot (Rank #80)", src: gssocDashboard, type: "Dashboard" },
      { title: "Merged Contributions & PR Analytics", src: gssocContributions, type: "Contributions" },
      { title: "Project Breakdown & Technical Contributions", src: gssocProjects, type: "Projects" }
    ]
  }
];

export default function OpenSource({ isPage = false }) {
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [activeImageModal, setActiveImageModal] = useState(null);

  const filteredPrograms = openSourceData.filter((item) => {
    if (selectedProgram === "admin") return item.roleType === "admin";
    if (selectedProgram === "contributor") return item.roleType === "contributor";
    return true;
  });

  return (
    <section id="open-source" className={`w-full relative z-10 ${isPage ? "py-28" : "py-24"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Community & Code Craftsmanship</span>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.1}>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-blue-500">Impact & Contributions</span>
            </h2>
          </Reveal>

          <Reveal y={20} delay={0.2}>
            <p className="font-sans text-secondary max-w-2xl text-base sm:text-lg">
              Empowering the developer ecosystem through active contribution and repository leadership.
            </p>
          </Reveal>
        </div>

        {/* Global Highlight Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <Reveal y={20} delay={0.1}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <span className="text-xs uppercase font-mono tracking-wider text-secondary">ECSoC ’26</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-syne text-white">Rank #6</div>
              <p className="text-xs text-amber-400 font-medium mt-1">Project Admin (Top 10)</p>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.15}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-purple-400" />
                <span className="text-xs uppercase font-mono tracking-wider text-secondary">ElUSoC ’26</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-syne text-white">Rank #11</div>
              <p className="text-xs text-purple-400 font-medium mt-1">Top 15 Contributor</p>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.2}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all" />
              <div className="flex items-center gap-3 mb-2">
                <Medal className="w-5 h-5 text-pink-400" />
                <span className="text-xs uppercase font-mono tracking-wider text-secondary">GSSoC ’26</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-syne text-white">Rank #80</div>
              <p className="text-xs text-pink-400 font-medium mt-1">Top 100 Contributor</p>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.25}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-xs uppercase font-mono tracking-wider text-secondary">ElUSoC Tiers</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-syne text-white">6 Badges</div>
              <p className="text-xs text-accent font-medium mt-1">Max Level: End Conqueror</p>
            </div>
          </Reveal>
        </div>

        {/* GitHub Contributions Heatmap & Direct Profile Link Card */}
        <Reveal y={25} delay={0.25}>
          <div className="mb-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-white flex items-center gap-2">
                    <Github className="w-5 h-5" /> Continuous GitHub Activity
                  </h3>
                  <p className="text-xs text-secondary font-mono">Consistently building, shipping, and pushing code</p>
                </div>
              </div>

              <a
                href="https://github.com/Dev1822"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-accent/20 hover:bg-accent/30 border border-accent/40 text-xs sm:text-sm font-semibold text-white flex items-center gap-2 transition-all self-start sm:self-auto shadow-lg shadow-accent/10 hover:shadow-accent/25"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>Visit GitHub Profile (@Dev1822)</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>

            {/* Live Dynamic GitHub Calendar Heatmap */}
            <div className="w-full flex justify-center items-center bg-black/40 rounded-2xl p-4 sm:p-6 border border-white/5 overflow-x-auto">
              <GitHubCalendar
                username="Dev1822"
                blockSize={13}
                blockMargin={4}
                fontSize={13}
                colorScheme="dark"
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* Filter Controls */}
        <Reveal y={15} delay={0.3}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              {[
                { id: "all", label: "All Programs" },
                { id: "admin", label: "Project Admin" },
                { id: "contributor", label: "Contributor" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedProgram(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedProgram === tab.id
                      ? "bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg shadow-accent/25"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Program Cards Grid */}
        <div className="space-y-12">
          {filteredPrograms.map((prog, idx) => {
            const IconComp = prog.badgeIcon;
            return (
              <Reveal key={prog.id} y={30} delay={idx * 0.1}>
                <div className={`rounded-3xl bg-white/[0.02] border ${prog.borderColor} p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:bg-white/[0.04] shadow-2xl`}>
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
                    style={{ background: prog.glowColor }}
                  />

                  {/* Program Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-4">
                      {prog.logo ? (
                        <div className="w-12 h-12 rounded-2xl bg-black/40 border border-purple-500/30 p-1.5 shrink-0 overflow-hidden shadow-lg flex items-center justify-center">
                          <img src={prog.logo} alt={prog.program} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${prog.color} text-white shadow-lg shrink-0`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-syne text-2xl font-bold text-white">{prog.program}</h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10">
                            {prog.role}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30 flex items-center gap-1">
                            <Trophy className="w-3 h-3" /> {prog.rankLabel}
                          </span>
                        </div>
                        <p className="text-sm text-secondary font-mono">{prog.fullName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
                        <span className="text-xs text-secondary block">Official Rank</span>
                        <span className="font-syne font-bold text-xl text-white">{prog.rank}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Bullet Highlights */}
                  <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-secondary text-sm sm:text-base leading-relaxed">
                        {prog.summary}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        {prog.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                            <span className="text-sm text-white/90">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Admin Links if available */}
                      {prog.links && (
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                          {prog.links.github && (
                            <a
                              href={prog.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white flex items-center gap-2 transition-colors"
                            >
                              <Terminal className="w-4 h-4 text-accent" />
                              <span>GitHub Repository</span>
                              <ExternalLink className="w-3.5 h-3.5 text-secondary" />
                            </a>
                          )}
                          {prog.links.live && (
                            <a
                              href={prog.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-accent/20 hover:bg-accent/30 border border-accent/40 text-xs sm:text-sm font-medium text-white flex items-center gap-2 transition-colors"
                            >
                              <Compass className="w-4 h-4 text-accent" />
                              <span>Live Project Demo</span>
                              <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Tiers Badges Showcase */}
                    {prog.badgesUnlocked && (
                      <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5">
                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" /> Unlocked Badges ({prog.badgesUnlocked.length})
                          </span>
                          <span className="text-xs text-secondary font-mono">
                            {prog.id === 'ecsoc-26' ? '5000+ XP' : prog.id === 'gssoc-26' ? '10,000+ Pts' : '1500+ XP'}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {prog.badgesUnlocked.map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 group cursor-pointer"
                              onClick={() => setActiveImageModal({ title: `${b.name} Badge (${b.pts})`, src: b.img })}
                            >
                              <div className="w-12 h-12 mb-1 relative flex items-center justify-center">
                                <img
                                  src={b.img}
                                  alt={b.name}
                                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <span className="text-[11px] font-semibold text-white truncate w-full">{b.name}</span>
                              <span className="text-[10px] text-purple-300 font-mono">{b.pts}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ElUSoC Credentials & Gallery Attachments */}
                  {prog.gallery && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-xs font-mono uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" /> Verified Proof & Certificates
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {prog.gallery.map((item, gIdx) => (
                          <div
                            key={gIdx}
                            onClick={() => setActiveImageModal(item)}
                            className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 p-2 cursor-pointer hover:border-accent/50 transition-all duration-300 flex flex-col items-center justify-between"
                          >
                            <div className="w-full aspect-[16/10] overflow-hidden rounded-lg bg-black/40 flex items-center justify-center">
                              <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="w-full pt-2 flex items-center justify-between">
                              <span className="text-[10px] font-mono text-accent uppercase tracking-wider">{item.type}</span>
                              <span className="text-xs font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-1 truncate max-w-[80%]">
                                <span className="truncate">{item.title}</span>
                                <Maximize2 className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for Badges & Certificates */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-surface border border-white/10 rounded-2xl overflow-hidden p-4 shadow-2xl flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                <h4 className="font-syne text-lg font-bold text-white">{activeImageModal.title}</h4>
                <button
                  onClick={() => setActiveImageModal(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[75vh] overflow-auto flex justify-center w-full rounded-xl bg-black/50 p-2">
                <img
                  src={activeImageModal.src}
                  alt={activeImageModal.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
