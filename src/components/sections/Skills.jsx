import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Database, GitBranch, Cloud, Cpu, LayoutGrid, ShieldCheck, KeyRound 
} from 'lucide-react';
import './Skills.css';

// Custom, pixel-perfect developer icons for specific tech
const GithubIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M16 8v5a2.5 2.5 0 0 1-5 0" />
    <circle cx="10.5" cy="11.5" r="0.5" fill="currentColor" />
    <path d="M14 17.5c.6 0 1-.4 1-1s-.4-1-1-1-1-.4-1-1 .4-1 1-1 1 .4 1 1" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6C9 6 7 8 6 12C7.5 10 9 10 10.5 11.5C12 13 12 14.5 14 16C15.5 17 17 17 18 15C16.5 15.5 15 15.5 13.5 14C12 12.5 12 11 10 9.5C8.5 8.5 7 8.5 6 10.5C7.5 10 9 10 10.5 11.5" />
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 2H19V9H12L5 16V23L19 9V2H12L5 9" />
  </svg>
);

const SpringBootIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 6 4 9 4 13.5C4 18 7.5 21 12 21C16.5 21 20 18 20 13.5C20 9 16 6 12 2Z" />
    <path d="M12 21V13.5" />
    <path d="M12 13.5C12 11.5 13.5 10 15.5 10" />
    <path d="M12 16.5C12 18.5 10.5 20 8.5 20" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10h10c1.5 0 2.5 1 2.5 2.5V14c0 1.5-1 2.5-2.5 2.5H6" />
    <path d="M18.5 11c1 0 1.5.5 1.5 1.5v1c0 1-.5 1.5-1.5 1.5" />
    <path d="M5 20h12" />
    <path d="M9 3c0 2-2 2-2 4" />
    <path d="M13 3c0 2-2 2-2 4" />
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 12h1m4 0h2m4 0h1" />
  </svg>
);

const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 15.5 17.5 22l4-4-19-15.5z" />
    <path d="M21.5 6L2.5 15.5V8.5L17.5 2z" />
    <path d="M17.5 2v20" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6Z" fill="currentColor" />
  </svg>
);

// Core stack
const coreSkills = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'Spring Boot', icon: <SpringBootIcon /> },
  { name: 'SQL', icon: <Database size={24} /> }
];

// Technologies & Tools
const techSkills = [
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Framer Motion', icon: <FramerIcon /> },
  { name: 'JWT', icon: <KeyRound size={16} /> },
  { name: 'Spring Security', icon: <ShieldCheck size={16} /> },
  { name: 'REST APIs', icon: <ApiIcon /> },
  { name: 'Hibernate/JPA', icon: <Database size={16} /> },
  { name: 'MySQL', icon: <Database size={16} /> },
  { name: 'PostgreSQL', icon: <Database size={16} /> },
  { name: 'Git', icon: <GitBranch size={16} /> },
  { name: 'GitHub', icon: <GithubIcon size={16} /> },
  { name: 'VS Code', icon: <VsCodeIcon /> },
  { name: 'Google Gemini', icon: <GeminiIcon /> },
  { name: 'AI Integration', icon: <Cpu size={16} /> },
  { name: 'System Design', icon: <LayoutGrid size={16} /> },
  { name: 'Cloud Computing', icon: <Cloud size={16} /> }
];

// Marquee items
const marqueeSkillsLeft = [
  'React', 'JavaScript', 'Spring Boot', 'Java', 'SQL',
  'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Spring Security', 'JWT'
];

const marqueeSkillsRight = [
  'REST APIs', 'Git', 'GitHub', 'VS Code', 'Google Gemini',
  'AI Integration', 'Framer Motion', 'System Design', 'Cloud Computing'
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Stagger configurations for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tagContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      }
    }
  };

  const tagVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="skills-section section-padding" ref={containerRef}>
      <div className="section-fade-divider" />
      
      <div className="container">
        {/* Section Label */}
        <span className="section-label mono">02 — Skills</span>
        <h2 className="skills-section-heading">Technical Capabilities</h2>
        <p className="skills-section-subtitle">
          Frameworks, databases, and tools used to build modern, production-grade applications.
        </p>

        {/* Core Focus Badge */}
        <div className="core-focus-badge-wrapper">
          <div className="core-focus-badge card-premium">
            <div className="badge-ambient-glow" />
            <span className="badge-label mono">✦ Core Focus</span>
            <div className="badge-content">
              <span className="badge-text">Java Full Stack Development</span>
              <span className="badge-plus">+</span>
              <span className="badge-text">AI-Powered Applications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="marquee-container">
        {/* Row 1: Left */}
        <div className="marquee-track marquee-scroll-left">
          {[...marqueeSkillsLeft, ...marqueeSkillsLeft, ...marqueeSkillsLeft].map((skill, index) => (
            <span key={`left-${index}`} className="tag marquee-tag mono">
              {skill}
            </span>
          ))}
        </div>
        
        {/* Row 2: Right */}
        <div className="marquee-track marquee-scroll-right">
          {[...marqueeSkillsRight, ...marqueeSkillsRight, ...marqueeSkillsRight].map((skill, index) => (
            <span key={`right-${index}`} className="tag marquee-tag mono">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* 1. Core Stack Card */}
          <motion.div className="skills-card core-stack-card card-premium" variants={cardVariants}>
            <div className="card-ambient-glow" />
            <h3 className="category-title">Core Stack</h3>
            
            <motion.div 
              className="core-skills-grid"
              variants={tagContainerVariants}
            >
              {coreSkills.map((skill) => (
                <motion.div key={skill.name} className="core-skill-item" variants={tagVariants}>
                  <div className="core-skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div className="core-skill-info">
                    <span className="core-skill-name mono">{skill.name}</span>
                    <span className="core-skill-level mono">Primary Stack</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 2. Technologies & Tools Card */}
          <motion.div className="skills-card tech-tools-card card-premium" variants={cardVariants}>
            <div className="card-ambient-glow" />
            <h3 className="category-title">Technologies & Tools</h3>
            
            <motion.div 
              className="tech-pills-wrapper"
              variants={tagContainerVariants}
            >
              {techSkills.map((skill) => (
                <motion.div key={skill.name} className="tech-skill-pill" variants={tagVariants}>
                  <span className="tech-pill-icon">{skill.icon}</span>
                  <span className="tech-pill-name mono">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
