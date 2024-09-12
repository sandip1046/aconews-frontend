import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const NewsDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL params
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const data = await fetchNews('', 1); // Fetch news without a query or with the appropriate page number
        const newsArticle = data.articles[parseInt(id || '0', 10)]; // Get the specific article based on ID
        setArticle(newsArticle);
      } catch (error) {
        console.error('Error fetching the news article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!article) {
    return <p className="text-center">News article not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-[5/12] md:h-[560px]  rounded mb-4" />
      )}

      <p className="text-gray-600 mb-2 font-bold">{article.publishedAt}</p>
      <p className="text-gray-800 mb-4">{article.description}</p>
      <p className="text-gray-800 mb-4">{article.content}</p>

      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Read full article at {article.source.name}
      </a>

      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;


