import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Header,
  SearchBar,
  CharacterGrid,
  Pagination,
  Loader,
  EmptyState,
  Footer,
} from './components';
import { useCharacters } from './hooks/useCharacters';
import { useDebounce } from './hooks/useDebounce';
import './App.css';

const App = () => {
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
    <div className="app">
      <Header />
      <SearchBar value={search} onChange={setSearch} />

      <main className="app__main">
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" />}

          {isError && (
            <EmptyState
              key="error"
              title="Something went wrong"
              message={error}
              action={
                <button type="button" className="app__retry" onClick={refetch}>
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
