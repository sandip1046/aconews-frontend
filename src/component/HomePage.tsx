//src/component/HomePage.tsx

import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { fetchNews } from '../services/newServices';


interface NewsArticle {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  url: string;
  source: {
    name: string;
  };
  content: string;
}

const HomePage: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews(query, page);
        setNews(data.articles);
        setTotalPages(Math.ceil(data.totalArticles / 10)); // Assuming 10 articles per page
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [query, page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    setQuery(query);
  };

  return (
    <div className="container mx-auto p-4">
     

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-[20%] rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-300 hover:text-black">
          Search
        </button>
      </form>

      {/* News List */}
      {loading ? (
        <p className="text-center">Loading news...</p>
    
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {news.map((article, index) => (
            <div key={index} className="border rounded shadow-lg p-4 hover:bg-slate-200">
              {article.image && (
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded mb-4" />
              )}
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-2">{article.description}</p>
              <Link to={`/news/${index}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded mr-2 hover:bg-gray-400"
        >
          Prev
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded ml-2 hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
