import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout shell components
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer';

// Section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// UI components
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import Toast from './components/ui/Toast';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '' });

  const triggerToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2000);
  };

  return (
    <SmoothScroll>
      {/* Shell systems */}
      <CustomCursor />
      
      {/* Global decorative background elements */}
      <div className="noise-overlay" />
      <svg className="sr-only">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" />
        </filter>
      </svg>

      {/* Cinematic loader */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Page content */}
      {!loading && (
        <>
          {/* Skip link for a11y keyboard users */}
          <a href="#about" className="skip-link mono">Skip to main content</a>
          
          <Navbar />
          
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact triggerToast={triggerToast} />
          </main>
          
          <Footer />

          {/* Toast notifications */}
          <AnimatePresence>
            {toast.show && <Toast message={toast.message} show={toast.show} />}
          </AnimatePresence>
        </>
      )}
    </SmoothScroll>
  );
}
