import { API_BASE_URL, ENDPOINTS } from '../constants/api';

const buildUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};

export const fetchCharacters = async ({ page = 1, name = '' } = {}) => {
  const url = buildUrl(ENDPOINTS.CHARACTERS, { page, name });
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], info: { pages: 0, count: 0, next: null, prev: null } };
    }
    throw new Error(`Failed to fetch characters (${response.status})`);
  }

  return response.json();
};
