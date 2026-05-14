import { motion } from 'framer-motion';
import './SearchBar.css';

const SearchBar = ({ value, onChange, placeholder = 'Search characters...' }) => (
  <motion.div
    className="search"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    <input
      type="text"
      className="search__input"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label="Search characters"
    />
  </motion.div>
);

export default SearchBar;
