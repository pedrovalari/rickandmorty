import { useCallback, useEffect, useState } from 'react';
import { fetchCharacterById } from '../services/charactersApi';

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    if (!id) return;
    setStatus('loading');
    setError(null);
    try {
      const result = await fetchCharacterById(id);
      setCharacter(result);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setCharacter(null);
      setStatus('error');
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    character,
    isLoading: status === 'loading' || status === 'idle',
    isError: status === 'error',
    error,
    refetch: load,
  };
};
