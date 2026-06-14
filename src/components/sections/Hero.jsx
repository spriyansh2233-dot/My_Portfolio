import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [showIndicator, setShowIndicator] = useState(true);

  // Parallax movement for background Aurora Orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor lag
  const orbX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const orbY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  // Springs for subtler visual card movement
  const cardX = useSpring(useMotionValue(0), { damping: 50, stiffness: 100 });
  const cardY = useSpring(useMotionValue(0), { damping: 50, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // max 40px displacement
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
      
      // sub-spring offsets for subtle card movement
      cardX.set(x * 0.35); // max ~14px displacement
      cardY.set(y * 0.35);
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY, cardX, cardY]);

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

          {/* Hero Right Workspace Visual */}
          <motion.div
            className="hero-visual-area"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="workspace-card-wrapper"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <motion.div
                className="workspace-card"
                style={{ x: cardX, y: cardY }}
                whileHover={{ y: -4 }}
              >
                <div className="workspace-img-container">
                  <img 
                    src="/image/developer_workspace.png" 
                    alt="Premium full-stack developer workspace illustration" 
                    className="workspace-img"
                  />
                  <div className="workspace-glow" />
                </div>
              </motion.div>
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
