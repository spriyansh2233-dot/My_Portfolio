import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const codeSnippet = `const developer = {
  name: "Priyansh Sharma",
  role: "Full Stack Developer",
  education: "B.Tech CSE (AIML)",
  frontend: [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ],
  backend: [
    "Spring Boot",
    "Java",
    "SQL"
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code"
  ],
  currently: "Building Quantum Intel",
  status: "Open to Opportunities"
};`;

// Safe local parser for syntax highlighting typing code
const highlightCode = (code) => {
  if (!code) return '';
  
  // Escape HTML characters
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  // Highlight strings (double quotes content)
  html = html.replace(/("[^"]*")/g, '<span class="code-string">$1</span>');
  
  // Highlight keywords: const
  html = html.replace(/\b(const)\b/g, '<span class="code-keyword">$1</span>');
  
  // Highlight object properties followed by a colon
  html = html.replace(/\b(name|role|education|frontend|backend|tools|currently|status)(?=\s*:)/g, '<span class="code-property">$1</span>');
  
  // Highlight brackets & punctuation
  html = html.replace(/([{}[\];,])/g, '<span class="code-punctuation">$1</span>');
  
  return html;
};

export default function Hero() {
  const [typedCode, setTypedCode] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
  const codeIndex = useRef(0);

  // Parallax movement for background Aurora Orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor lag
  const orbX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const orbY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  useEffect(() => {
    // Reset typing animation variables to ensure clean sync on mount/restart
    codeIndex.current = 0;
    setTypedCode('');

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // max 40px displacement
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Typing effect
    const interval = setInterval(() => {
      if (codeIndex.current < codeSnippet.length) {
        const nextChar = codeSnippet[codeIndex.current];
        setTypedCode((prev) => prev + nextChar);
        codeIndex.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 15); // Slightly faster typing for longer snippet

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Split name for staggered character entrance
  const nameChars = "Priyansh".split("");

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const nameCharVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.03,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Systems */}
      <div className="grid-overlay hero-grid-mask" />
      
      {/* Interactive Aurora Orbs */}
      <motion.div 
        className="aurora-orb orb-left" 
        style={{ 
          x: orbX, 
          y: orbY,
          top: '35%',
          left: '30%'
        }} 
      />
      <motion.div 
        className="aurora-orb orb-right" 
        style={{ 
          x: useSpring(mouseX, { damping: 50, stiffness: 100 }), 
          y: useSpring(mouseY, { damping: 50, stiffness: 100 }),
          top: '55%',
          left: '75%'
        }} 
      />

      <div className="container hero-container">
        <div className="hero-content-layout">
          {/* Hero Left Content */}
          <motion.div
            className="hero-text-area"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p className="hero-eyebrow mono" variants={itemVariants}>
              Full Stack Developer · B.Tech Final Year
            </motion.p>

            {/* Split character H1 */}
            <h1 className="hero-title">
              {nameChars.map((char, i) => (
                <span key={i} className="title-char-wrapper">
                  <motion.span
                    custom={i}
                    variants={nameCharVariants}
                    className={char === 'P' ? 'title-p' : ''}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Hero Subtitle */}
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Building full-stack applications that solve real-world problems.
            </motion.h2>

            {/* Body */}
            <motion.p className="hero-body" variants={itemVariants}>
              Final-year B.Tech student focused on full-stack development, building responsive web applications using React, Spring Boot, and modern web technologies. Passionate about creating intuitive user experiences and reliable backend solutions.
            </motion.p>

            {/* CTA row */}
            <motion.div className="hero-cta-row" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
                View Projects
              </a>
              <a href="/resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
            </motion.div>

            {/* Status Badge */}
            <motion.div className="hero-status-badge" variants={itemVariants}>
              <div className="status-badge-container">
                <span className="pulse-dot" />
                <span className="status-text mono">Currently Building Quantum Intel</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Code Visual */}
          <motion.div
            className="hero-visual-area"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="terminal-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* Terminal Title Bar */}
              <div className="terminal-header">
                <div className="terminal-dot close" />
                <div className="terminal-dot minimize" />
                <div className="terminal-dot maximize" />
                <div className="terminal-title mono">priyansh.js</div>
              </div>
              
              {/* Code Panel */}
              <div className="terminal-body">
                <pre className="terminal-code mono">
                  <code 
                    dangerouslySetInnerHTML={{ 
                      __html: highlightCode(typedCode) + '<span class="typing-cursor">|</span>' 
                    }} 
                  />
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="scroll-label mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="scroll-arrow" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
