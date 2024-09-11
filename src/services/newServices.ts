//src/services/newServices.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

export const fetchNews = async (query: string, page: number) => {
  const response = await axios.get(`${API_URL}?query=${query}&page=${page}`);
  return response.data;
};
