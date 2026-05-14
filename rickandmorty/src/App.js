import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const url = searchTerm 
        ? `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`
        : `https://rickandmortyapi.com/api/character/?page=${page}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('No characters found');
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      setError(err.message);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  }, [page, searchTerm]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(search);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearch('');
    setSearchTerm('');
    setPage(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <p className="subtitle">Explore the multiverse of characters</p>
      </header>

      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
          {searchTerm && (
            <button type="button" onClick={handleClearSearch} className="clear-button">
              Clear
            </button>
          )}
        </form>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading characters...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={handleClearSearch} className="retry-button">
            Show All Characters
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="characters-grid">
            {characters.map((character) => (
              <div key={character.id} className="character-card">
                <img src={character.image} alt={character.name} />
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <div className="status">
                    <span className={`status-indicator ${character.status.toLowerCase()}`}></span>
                    {character.status} - {character.species}
                  </div>
                  <div className="details">
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin.name}</p>
                    <p><strong>Location:</strong> {character.location.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {info && (
            <div className="pagination">
              <button 
                onClick={() => setPage(page - 1)} 
                disabled={!info.prev}
                className="page-button"
              >
                Previous
              </button>
              <span className="page-info">
                Page {page} of {info.pages}
              </span>
              <button 
                onClick={() => setPage(page + 1)} 
                disabled={!info.next}
                className="page-button"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <footer className="App-footer">
        <p>Data from <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">The Rick and Morty API</a></p>
      </footer>
    </div>
  );
}

export default App;
