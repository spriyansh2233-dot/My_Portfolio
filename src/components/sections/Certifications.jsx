import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Download, X, Award } from 'lucide-react';
import { certificates } from '../../data/certificates';
import './Certifications.css';

export default function Certifications() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

  // Double the list — Set A + Set B rendered as two sibling divs
  // CSS animates both simultaneously so there is never a visible reset
  const certSet = certificates;

  return (
    <section
      id="certifications"
      className="certifications-section section-padding"
      ref={containerRef}
    >
      <div className="section-fade-divider" />

      {/* ── Header ── */}
      <div className="container">
        <span className="section-label mono">04 — CERTIFICATIONS</span>
        <div className="cert-header-row">
          <div className="cert-header-text">
            <h2 className="certifications-heading">Certified Knowledge</h2>
            <p className="certifications-section-subtitle">
              Industry-recognized certifications and continuous learning focused on full stack
              development, AI, cloud technologies, and software engineering.
            </p>
          </div>
          <motion.div
            className="cert-count-badge"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="cert-count-number">{certificates.length}</span>
            <span className="cert-count-label mono">Certifications<br />Earned</span>
          </motion.div>
        </div>
      </div>

      {/* ── Infinite Marquee ── */}
      <motion.div
        className="cert-marquee-container"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="cert-marquee-track">
          {/* Set A */}
          <div className="cert-marquee-set" aria-hidden="false">
            {certSet.map((cert) => (
              <CertCard key={`a-${cert.id}`} cert={cert} onClick={() => setSelectedCert(cert)} />
            ))}
          </div>
          {/* Set B — exact duplicate, animates seamlessly behind Set A */}
          <div className="cert-marquee-set" aria-hidden="true">
            {certSet.map((cert) => (
              <CertCard key={`b-${cert.id}`} cert={cert} onClick={() => setSelectedCert(cert)} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-card"
              initial={{ scale: 0.92, y: 28, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 28, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ambient glow tinted to accent */}
              <div
                className="modal-ambient-glow"
                style={{ background: `radial-gradient(circle at 30% 30%, ${selectedCert.accent}20 0%, transparent 65%)` }}
              />

              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="modal-grid">
                {/* Preview */}
                <div className="modal-preview-side">
                  <div
                    className="modal-preview-frame"
                    style={{ borderColor: `${selectedCert.accent}30` }}
                  >
                    {selectedCert.image ? (
                      <img
                        src={selectedCert.image}
                        alt={`${selectedCert.title} certificate preview`}
                        className="cert-preview-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="cert-preview-placeholder"
                      style={{ display: selectedCert.image ? 'none' : 'flex' }}
                    >
                      <Award size={36} style={{ color: selectedCert.accent, opacity: 0.6 }} />
                      <span className="mono placeholder-text">PREVIEW PENDING</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="modal-info-side">
                  <span
                    className="modal-issuer mono"
                    style={{ color: selectedCert.accent }}
                  >
                    ✦ {selectedCert.issuer}
                  </span>
                  <h3 className="modal-title">{selectedCert.title}</h3>

                  <div className="modal-meta-row mono">
                    <span className="meta-label">YEAR EARNED</span>
                    <span className="meta-value">{selectedCert.year}</span>
                  </div>

                  <div
                    className="modal-accent-bar"
                    style={{ background: `linear-gradient(90deg, ${selectedCert.accent}, transparent)` }}
                  />

                  <div className="modal-actions">
                    <a
                      href={selectedCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary modal-action-btn"
                    >
                      <ExternalLink size={15} /> View Certificate
                    </a>
                    <a
                      href={selectedCert.pdf}
                      download
                      className="btn btn-secondary modal-action-btn"
                    >
                      <Download size={15} /> Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Cert Card sub-component ── */
function CertCard({ cert, onClick }) {
  return (
    <div className="cert-card" onClick={onClick} role="button" tabIndex={0}>
      {/* Top accent stripe */}
      <div className="cert-card-stripe" style={{ background: cert.accent }} />

      {/* Thumbnail */}
      <div className="cert-thumb-wrapper">
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="cert-thumb-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="cert-thumb-placeholder"
          style={{ display: cert.image ? 'none' : 'flex', color: cert.accent }}
        >
          <Award size={28} />
        </div>
        <div className="cert-thumb-overlay" />
      </div>

      {/* Body */}
      <div className="cert-card-body">
        <div className="cert-card-meta">
          <span
            className="cert-card-issuer mono"
            style={{ color: cert.accent }}
          >
            {cert.issuer}
          </span>
          <span className="cert-card-year mono">{cert.year}</span>
        </div>
        <h3 className="cert-card-title">{cert.title}</h3>
        <span className="cert-card-cta mono">
          View Credentials <ExternalLink size={11} />
        </span>
      </div>
    </div>
  );
}
