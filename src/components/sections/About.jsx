import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });

  // Quick facts matching updated student criteria
  const quickFacts = [
    { label: 'EDUCATION', value: 'B.Tech CSE (AIML)' },
    { label: 'GRADUATING', value: '2027' },
    { label: 'SPECIALIZATION', value: 'Full Stack Development' }
  ];

  return (
    <section id="about" className="about-section section-padding" ref={ref}>
      <div className="container">
        
        {/* Section Label */}
        <span className="section-label mono">01 — About</span>

        <div className="about-layout">
          {/* Left Column - Text Details */}
          <motion.div
            className="about-text-column"
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="about-heading">
              Creating web experiences from frontend to backend.
            </h2>

            {/* Mobile Profile Card (Hidden on Desktop) */}
            <div className="about-portrait-mobile">
              <div className="developer-profile-card">
                <div className="profile-card-header">
                  <div className="profile-card-pfp-wrapper">
                    <img src="/image/portfolio-pfp.png" alt="Priyansh" className="profile-card-pfp" />
                  </div>
                  <h3 className="profile-card-name">Priyansh</h3>
                  <p className="profile-card-title">Full Stack Developer</p>
                  <p className="profile-card-bio">
                    Building modern full-stack applications with Java, Spring Boot, React, and AI integrations.
                  </p>
                </div>

                <div className="profile-metrics-grid">
                  <div className="metric-card">
                    <span className="metric-label mono">Projects Built</span>
                    <span className="metric-value">6+</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label mono">Primary Stack</span>
                    <span className="metric-value">Java + React</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label mono">Focus Area</span>
                    <span className="metric-value">Full Stack & AI</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label mono">Graduation</span>
                    <span className="metric-value">2027</span>
                  </div>
                </div>

                <div className="profile-tech-pills">
                  {['Java', 'Spring Boot', 'React', 'JavaScript', 'PostgreSQL', 'MySQL', 'JWT', 'Tailwind CSS', 'Google Gemini'].map(tech => (
                    <span key={tech} className="tech-pill mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-description">
              <p>
                I'm a final-year B.Tech student specializing in Computer Science with a strong interest in full-stack web development.
              </p>
              <p>
                I build modern web applications using React, Java, Spring Boot, and SQL, focusing on responsive user experiences and scalable backend systems.
              </p>
              <p>
                My projects include Focusly, an AI-powered learning platform, TechHub, an ecommerce application, Social-Mate, a social networking platform, and Quantum Intel, an AI-driven research assistant.
              </p>
              <p>
                Currently, I'm expanding my knowledge in system design, cloud technologies, and scalable software architecture while continuing to build real-world products.
              </p>
            </div>

            {/* Status Badge */}
            <div className="status-badge mono">
              <span className="status-badge-dot" />
              <span className="status-badge-text">Currently Building AI-Powered Full Stack Applications</span>
            </div>

            {/* Quick Facts Grid */}
            <div className="quick-facts-grid">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <span className="fact-label mono">{fact.label}</span>
                  <span className="fact-value mono">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Premium Developer Profile Card */}
          <motion.div
            className="about-visual-column"
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="developer-profile-card">
              <div className="profile-card-header">
                <div className="profile-card-pfp-wrapper">
                  <img src="/image/portfolio-pfp.png" alt="Priyansh" className="profile-card-pfp" />
                </div>
                <h3 className="profile-card-name">Priyansh</h3>
                <p className="profile-card-title">Full Stack Developer</p>
                <p className="profile-card-bio">
                  Building modern full-stack applications with Java, Spring Boot, React, and AI integrations.
                </p>
              </div>

              <div className="profile-metrics-grid">
                <div className="metric-card">
                  <span className="metric-label mono">Projects Built</span>
                  <span className="metric-value">6+</span>
                </div>
                <div className="metric-card">
                  <span className="metric-label mono">Primary Stack</span>
                  <span className="metric-value">Java + React</span>
                </div>
                <div className="metric-card">
                  <span className="metric-label mono">Focus Area</span>
                  <span className="metric-value">Full Stack & AI</span>
                </div>
                <div className="metric-card">
                  <span className="metric-label mono">Graduation</span>
                  <span className="metric-value">2027</span>
                </div>
              </div>

              <div className="profile-tech-pills">
                {['Java', 'Spring Boot', 'React', 'JavaScript', 'PostgreSQL', 'MySQL', 'JWT', 'Tailwind CSS', 'Google Gemini'].map(tech => (
                  <span key={tech} className="tech-pill mono">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
