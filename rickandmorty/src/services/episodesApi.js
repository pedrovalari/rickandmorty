import { API_BASE_URL, ENDPOINTS } from '../constants/api';

export const fetchEpisodesByIds = async (ids) => {
  if (!ids || ids.length === 0) return [];

  const path = ids.length === 1 ? `${ids[0]}` : ids.join(',');
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.EPISODES}/${path}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch episodes (${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [data];
};
