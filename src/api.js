const API_KEY = '676f017549224f488970f1835f9db971'; // aşırı yüklenmeden error verdi değiştirdim...
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (params = {}) => {
  const query = new URLSearchParams({ country: 'tr', ...params, apiKey: API_KEY });
  const res = await fetch(`${BASE_URL}?${query}`);
  const data = await res.json();
  return data;
};
