import { useEffect, useState } from 'react';
import { fetchEpisodesByIds } from '../services/episodesApi';
import { extractIdFromUrl } from '../utils/url';

export const useEpisodes = (episodeUrls) => {
  const [episodes, setEpisodes] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!episodeUrls || episodeUrls.length === 0) {
      setEpisodes([]);
      setStatus('success');
      return;
    }

    let cancelled = false;
    setStatus('loading');
    setError(null);

    const ids = episodeUrls
      .map((url) => extractIdFromUrl(url))
      .filter(Boolean);

    fetchEpisodesByIds(ids)
      .then((result) => {
        if (!cancelled) {
          setEpisodes(result);
          setStatus('success');
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setEpisodes([]);
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [episodeUrls]);

  return {
    episodes,
    isLoading: status === 'loading',
    isError: status === 'error',
    error,
  };
};
