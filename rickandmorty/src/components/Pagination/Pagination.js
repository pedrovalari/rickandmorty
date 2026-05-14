import { motion } from 'framer-motion';
import './Pagination.css';

const Pagination = ({ page, info, onPageChange }) => {
  if (!info || info.pages <= 1) return null;

  const hasPrev = Boolean(info.prev);
  const hasNext = Boolean(info.next);

  return (
    <motion.nav
      className="pagination"
      aria-label="Pagination"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(page - 1)}
        disabled={!hasPrev}
      >
        ← Prev
      </button>
      <span className="pagination__info">
        {page} / {info.pages}
      </span>
      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
      >
        Next →
      </button>
    </motion.nav>
  );
};

export default Pagination;
