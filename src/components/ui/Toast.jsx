import { motion } from 'framer-motion';
import './Toast.css';

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <motion.div
      className="toast-container mono"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="toast-content">
        <span className="toast-message">{message}</span>
      </div>
    </motion.div>
  );
}
