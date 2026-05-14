import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SearchBar,
  CharacterGrid,
  Pagination,
  Loader,
  EmptyState,
} from '../../components';
import { useCharacters } from '../../hooks/useCharacters';
import { useDebounce } from '../../hooks/useDebounce';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 350);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const { characters, info, isLoading, isError, error, refetch } = useCharacters({
    page,
    name: debouncedSearch,
  });

  const showEmpty = !isLoading && !isError && characters.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <SearchBar value={search} onChange={setSearch} />

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}

        {isError && (
          <EmptyState
            key="error"
            title="Something went wrong"
            message={error}
            action={
              <button type="button" className="home__retry" onClick={refetch}>
                Try again
              </button>
            }
          />
        )}

        {showEmpty && (
          <EmptyState
            key="empty"
            title="No characters found"
            message="Try a different search term."
          />
        )}

        {!isLoading && !isError && characters.length > 0 && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CharacterGrid characters={characters} />
            <Pagination page={page} info={info} onPageChange={setPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
