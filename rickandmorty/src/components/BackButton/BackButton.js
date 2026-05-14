import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BackButton.css';

const MotionLink = motion(Link);

const BackButton = ({ to = '/', children = 'Back' }) => (
  <MotionLink
    to={to}
    className="back"
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ x: -2 }}
  >
    <span aria-hidden="true">←</span> {children}
  </MotionLink>
);

export default BackButton;
