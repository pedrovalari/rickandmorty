import { motion } from 'framer-motion';
import './EmptyState.css';

const EmptyState = ({ title = 'No results', message, action }) => (
  <motion.div
    className="empty"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="empty__title">{title}</h2>
    {message && <p className="empty__message">{message}</p>}
    {action}
  </motion.div>
);

export default EmptyState;
