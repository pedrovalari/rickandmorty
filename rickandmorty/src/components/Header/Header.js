import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => (
  <motion.header
    className="header"
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <Link to="/" className="header__link">
      <h1 className="header__title">Rick &amp; Morty</h1>
    </Link>
    <p className="header__subtitle">A minimalist character explorer</p>
  </motion.header>
);

export default Header;
