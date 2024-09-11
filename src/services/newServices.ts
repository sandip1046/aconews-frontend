//src/services/newServices.ts
import axios from 'axios';

const API_URL = 'https://aconews-backend-two.vercel.app/api/news/';

export const fetchNews = async (query: string, page: number) => {
  const response = await axios.get(`${API_URL}?query=${query}&page=${page}`);
  return response.data;
};
