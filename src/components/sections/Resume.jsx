import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="resume" className="resume-section section-padding" ref={containerRef}>
      <div className="container">
        <motion.div
          className="resume-card card-premium"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="resume-ambient-glow" />

          <div className="resume-content">
            <h2 className="resume-title">Want the full picture?</h2>
            
            <p className="resume-text">
              Download my resume for a complete overview of my experience, technical skill sets, and academic background.
            </p>

            <div className="resume-cta-wrapper">
              <a href="/resume.pdf" download="Priyansh_Resume.pdf" className="btn btn-primary btn-large resume-btn">
                <Download size={18} /> Download Resume (PDF)
              </a>
            </div>

            <span className="resume-updated mono">Last updated: June 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
