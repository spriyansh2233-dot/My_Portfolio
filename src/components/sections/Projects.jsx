import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Play } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);



export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const focuslyRef = useRef(null);
  const focuslyInView = useInView(focuslyRef, { once: true, amount: 0.15 });

  const techhubRef = useRef(null);
  const techhubInView = useInView(techhubRef, { once: true, amount: 0.2 });

  const quantumAgentRef = useRef(null);
  const quantumAgentInView = useInView(quantumAgentRef, { once: true, amount: 0.2 });

  const socialmateRef = useRef(null);
  const socialmateInView = useInView(socialmateRef, { once: true, amount: 0.2 });

  const othersRef = useRef(null);
  const othersInView = useInView(othersRef, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="section-fade-divider" />
      
      <div className="container">
        {/* Section Label */}
        <span className="section-label mono" ref={titleRef}>03 — Projects</span>
        <h2 className="projects-section-heading">Selected Engineering Work</h2>
        <p className="projects-section-subtitle">
          Products and systems engineered from frontend to backend.
        </p>

        {/* 1. FOCUSLY — standard project-row layout */}
        <div className="project-row" ref={focuslyRef}>
          {/* Content Left */}
          <motion.div
            className="project-content"
            initial={{ x: -50, opacity: 0 }}
            animate={focuslyInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="project-number mono">01</span>
            <span className="project-tag mono">✦ AI LEARNING PLATFORM · REACT · SPRING BOOT · GEMINI AI</span>
            <h3 className="project-title">Focusly</h3>
            <h4 className="project-subtitle-highlight mono">AI-Powered Personalized Learning</h4>
            <p className="project-description">
              An AI-powered learning platform that generates personalized learning roadmaps, tracks progress, and delivers adaptive study experiences. Built with React, Spring Boot, PostgreSQL, and Google Gemini to help learners stay focused and improve outcomes.
            </p>

            <div className="project-tech-pills">
              <span className="tag mono">React</span>
              <span className="tag mono">Spring Boot</span>
              <span className="tag mono">PostgreSQL</span>
              <span className="tag mono">Google Gemini</span>
              <span className="tag mono">JWT Authentication</span>
              <span className="tag mono">Tailwind CSS</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/spriyansh2233-dot/focusly" target="_blank" rel="noreferrer" className="btn btn-secondary project-btn">
                <GithubIcon size={16} /> Code
              </a>
              <a href="https://focusly-ecru.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>

          {/* Mockup Right */}
          <motion.div
            className="project-mockup-wrapper"
            initial={{ x: 50, opacity: 0, rotateY: -4 }}
            animate={focuslyInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="browser-address mono">focusly.study</div>
              </div>
              <div className="browser-body has-image">
                <div className="browser-image-wrapper">
                  <img src="/image/focusly.png" alt="Focusly Project Screenshot" className="browser-image" />
                  <div className="browser-image-overlay" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. TECHHUB (Featured Project 2) */}
        <div className="project-row alternated" ref={techhubRef}>
          {/* Interactive Mockup Left */}
          <motion.div 
            className="project-mockup-wrapper"
            initial={{ x: -50, opacity: 0, rotateY: 4 }}
            animate={techhubInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="browser-address mono">techhub.store</div>
              </div>
              <div className="browser-body has-image">
                <div className="browser-image-wrapper">
                  <img src="/image/techub.png" alt="TechHub Project Screenshot" className="browser-image" />
                  <div className="browser-image-overlay" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="project-content"
            initial={{ x: 50, opacity: 0 }}
            animate={techhubInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="project-number mono">02</span>
            <span className="project-tag mono">FULL STACK ECOMMERCE · REACT · SPRING BOOT · MYSQL</span>
            <h3 className="project-title">TechHub</h3>
            <h4 className="project-subtitle-highlight mono">End-to-End Ecommerce Architecture</h4>
            <p className="project-description">
              A full-stack ecommerce platform featuring secure authentication, product management, and seamless shopping workflows. Engineered with React, Spring Boot, MySQL, and JWT-based security for a scalable and responsive user experience.
            </p>
            
            <div className="project-tech-pills">
              <span className="tag mono">React</span>
              <span className="tag mono">Spring Boot</span>
              <span className="tag mono">MySQL</span>
              <span className="tag mono">Spring Security</span>
              <span className="tag mono">JWT Authentication</span>
              <span className="tag mono">Framer Motion</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/spriyansh2233-dot/TechHub" target="_blank" rel="noreferrer" className="btn btn-secondary project-btn">
                <GithubIcon size={16} /> Code
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3. QUANTUM RESEARCH AGENT (Featured Project 3) */}
        <div className="project-row" ref={quantumAgentRef}>
          {/* Content Left */}
          <motion.div 
            className="project-content"
            initial={{ x: -50, opacity: 0 }}
            animate={quantumAgentInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="project-number mono">03</span>
            <div className="project-badge-row">
              <span className="hackathon-badge mono">✦ Capgemini Hackathon Project</span>
            </div>
            <span className="project-tag mono">AI RESEARCH PLATFORM · PYTHON · LLMs</span>
            <h3 className="project-title">Quantum Research Agent</h3>
            <h4 className="project-subtitle-highlight mono">Hackathon-Built AI Research Automation</h4>
            <p className="project-description">
              An AI-driven research assistant developed during the Capgemini Hackathon that automates information gathering, analysis, and insight generation. Combines intelligent agent workflows with modern AI models to accelerate research and decision-making.
            </p>
            
            <div className="project-tech-pills">
              <span className="tag mono">Python</span>
              <span className="tag mono">LLMs</span>
              <span className="tag mono">AI Agents</span>
              <span className="tag mono">Research Automation</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/AbhiTrivedi2712/QUANTAM-AI-RESEARCH-AGENT" target="_blank" rel="noreferrer" className="btn btn-secondary project-btn">
                <GithubIcon size={16} /> Code
              </a>
            </div>
          </motion.div>

          {/* Interactive Mockup Right */}
          <motion.div 
            className="project-mockup-wrapper"
            initial={{ x: 50, opacity: 0, rotateY: -4 }}
            animate={quantumAgentInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="browser-address mono">agent.quantum.research</div>
              </div>
              <div className="browser-body has-image">
                <div className="browser-image-wrapper">
                  <img src="/image/quantum-agent.png" alt="Quantum Research Agent Project Screenshot" className="browser-image" />
                  <div className="browser-image-overlay" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. SOCIAL-MATE (Featured Project 4) */}
        <div className="project-row alternated" ref={socialmateRef}>
          {/* Interactive Mockup Left */}
          <motion.div 
            className="project-mockup-wrapper"
            initial={{ x: -50, opacity: 0, rotateY: 4 }}
            animate={socialmateInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="browser-address mono">socialmate.app</div>
              </div>
              <div className="browser-body has-image">
                <div className="browser-image-wrapper">
                  <img src="/image/social-mate.png" alt="Social-Mate Project Screenshot" className="browser-image" />
                  <div className="browser-image-overlay" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="project-content"
            initial={{ x: 50, opacity: 0 }}
            animate={socialmateInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="project-number mono">04</span>
            <span className="project-tag mono">SOCIAL PLATFORM · REACT · JAVASCRIPT</span>
            <h3 className="project-title">Social-Mate</h3>
            <h4 className="project-subtitle-highlight mono">Interactive Social Networking Platform</h4>
            <p className="project-description">
              A social media platform designed for content sharing, user interaction, and community engagement. Built with modern frontend architecture and scalable backend services to deliver a smooth and responsive social experience.
            </p>
            
            <div className="project-tech-pills">
              <span className="tag mono">React</span>
              <span className="tag mono">JavaScript</span>
              <span className="tag mono">Responsive UI</span>
              <span className="tag mono">Component Architecture</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/spriyansh2233-dot/Social-Mate" target="_blank" rel="noreferrer" className="btn btn-secondary project-btn">
                <GithubIcon size={16} /> Code
              </a>
            </div>
          </motion.div>
        </div>

        {/* OTHER PROJECTS (Secondary Section) */}
        <div className="other-projects-section" ref={othersRef}>
          <h3 className="other-projects-title mono">
            ✦ other_projects.config
          </h3>
          
          <motion.div 
            className="other-projects-grid"
            initial={{ y: 25, opacity: 0 }}
            animate={othersInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Other Project 1: MoviesApp */}
            <div className="other-project-card card-premium">
              <div className="other-card-glow" />
              <div className="other-card-header">
                <span className="other-project-tag mono">React · JavaScript · REST APIs</span>
                <Globe size={16} className="other-project-icon" />
              </div>
              <h4 className="other-project-title">MoviesApp</h4>
              <span className="other-project-highlight mono">Real-Time Movie Discovery Experience</span>
              <p className="other-project-desc">
                A movie discovery application that enables users to explore trending films, search titles, and view detailed movie information through real-time API integrations and an intuitive user interface.
              </p>
              <div className="other-project-links">
                <a href="https://github.com/spriyansh2233-dot/MoviesApp" target="_blank" rel="noreferrer" className="other-link-btn mono">
                  <GithubIcon size={12} /> Code
                </a>
              </div>
            </div>

            {/* Other Project 2: Ping Pong Game */}
            <div className="other-project-card card-premium">
              <div className="other-card-glow" />
              <div className="other-card-header">
                <span className="other-project-tag mono">JavaScript · HTML · CSS</span>
                <Play size={16} className="other-project-icon" />
              </div>
              <h4 className="other-project-title">Ping Pong Game</h4>
              <span className="other-project-highlight mono">Interactive JavaScript Game Development</span>
              <p className="other-project-desc">
                A browser-based arcade game built to strengthen JavaScript fundamentals, collision detection logic, and interactive gameplay mechanics while delivering a smooth user experience.
              </p>
              <div className="other-project-links">
                <a href="https://github.com/spriyansh2233-dot/ping-pong-game" target="_blank" rel="noreferrer" className="other-link-btn mono">
                  <GithubIcon size={12} /> Code
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* View all on Github link */}
        <div className="view-all-github-container">
          <a href="https://github.com/spriyansh2233-dot" target="_blank" rel="noreferrer" className="view-all-github-link mono">
            View all systems on GitHub <ArrowRight size={14} className="github-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
}
