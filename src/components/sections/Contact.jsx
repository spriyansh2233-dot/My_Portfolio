import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, Mail } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



export default function Contact({ triggerToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('loading');

    // Simulate server latency for premium experience
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/spriyansh2233-dot', icon: <GithubIcon size={20} />, handle: '@spriyansh2233-dot' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-sharma-30aa852b1', icon: <LinkedinIcon size={20} />, handle: '/in/priyansh-sharma-30aa852b1' },
    { name: 'Email Me', href: 'mailto:spriyansh2233@gmail.com', icon: <Mail size={20} />, handle: 'spriyansh2233@gmail.com' },
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Label */}
        <span className="section-label mono">05 — Contact</span>

        <div className="contact-layout">
          {/* Left Column: Direct info and socials */}
          <div className="contact-info-column">
            <h2 className="contact-title">Let's build something.</h2>
            <p className="contact-subtitle">
              I'm open to full-time roles, internships, and interesting collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>



            {/* Social Links Rows */}
            <div className="social-links-list">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'Email Me' ? '_self' : '_blank'}
                  rel={social.name === 'Email Me' ? '' : 'noreferrer'}
                  className="social-link-row interactive"
                >
                  <div className="social-row-left">
                    <span className="social-row-icon">{social.icon}</span>
                    <span className="social-row-name">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="form-card card-premium">
              <div className="card-ambient-glow" />
              
              <AnimatePresence mode="wait">
                {formStatus !== 'success' ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="contact-form"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    {/* Name Field */}
                    <div className="form-field">
                      <label htmlFor="name" className="form-label mono">guest.name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="John Doe"
                        disabled={formStatus === 'loading'}
                      />
                      {errors.name && <span className="form-error-msg mono">{errors.name}</span>}
                    </div>

                    {/* Email Field */}
                    <div className="form-field">
                      <label htmlFor="email" className="form-label mono">guest.email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="john@example.com"
                        disabled={formStatus === 'loading'}
                      />
                      {errors.email && <span className="form-error-msg mono">{errors.email}</span>}
                    </div>

                    {/* Message Field */}
                    <div className="form-field">
                      <label htmlFor="message" className="form-label mono">message.body</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                        placeholder="Describe your project, role, or ideas..."
                        disabled={formStatus === 'loading'}
                      />
                      {errors.message && <span className="form-error-msg mono">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <div className="form-loading-spinner" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="form-success-state"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="success-icon-wrapper">
                      <Check size={32} />
                    </div>
                    <h3 className="success-title">Message Received</h3>
                    <p className="success-desc">
                      Thank you for reaching out. I will review your message and respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="btn btn-secondary success-reset-btn"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
