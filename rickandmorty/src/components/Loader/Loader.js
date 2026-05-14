import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => (
  <motion.div
    className="loader"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    role="status"
    aria-label="Loading"
  >
    <motion.span
      className="loader__dot"
      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="loader__dot"
      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
    />
    <motion.span
      className="loader__dot"
      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    />
  </motion.div>
);

export default Loader;
