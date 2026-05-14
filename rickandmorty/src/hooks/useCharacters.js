import { useCallback, useEffect, useState } from 'react';
import { fetchCharacters } from '../services/charactersApi';

export const useCharacters = ({ page, name }) => {
  const [data, setData] = useState({ results: [], info: null });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const result = await fetchCharacters({ page, name });
      setData(result);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setData({ results: [], info: null });
      setStatus('error');
    }
  }, [page, name]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    characters: data.results,
    info: data.info,
    isLoading: status === 'loading',
    isError: status === 'error',
    error,
    refetch: load,
  };
};
