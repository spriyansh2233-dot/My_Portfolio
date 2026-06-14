import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 900); // 800ms load + buffer

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%', 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      <div className="loader-content">
        <motion.span
          className="loader-logo"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          P
        </motion.span>
        <motion.div 
          className="loader-line"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
