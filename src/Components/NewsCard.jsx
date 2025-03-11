import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Newspaper, ExternalLink, AlertCircle } from 'lucide-react';

function NewsCard() {
  const { place } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=weather ${place}&apiKey=327b0715c52a49c8b9fc61358c76eb0c`
        );
        
        if (response.data.status === 'ok') {
          setNewsData(response.data.articles || []);
        } else {
          setError(response.data.message || 'Failed to fetch news');
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (place) {
      fetchNews();
    }
  }, [place]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 py-8  flex items-center justify-center">
      <div className="bg-white/20 rounded-lg shadow-sm border border-gray-100 overflow-hidden w-5/6">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center">
          <Newspaper className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="news-heading font-semibold text-gray-800">Weather News</h2>
          {place && <span className="ml-2 text-sm text-gray-500 italic"> {place}</span>}
        </div>
        
        {loading ? (
          <div className="p-8 text-center bg-white">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Loading news articles...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center bg-white">
            <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-2" />
            <p className="text-gray-700">{error}</p>
          </div>
        ) : newsData.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-700">No news articles found for this location.</p>
          </div>
        ) : (
          <div className="max-h-[600px] overflow-y-auto ">
            {newsData.map((item, index) => (
              <article 
                key={index} 
                className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 bg-white"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <span className="font-medium text-gray-800 text1">{item.source.name}</span>
                      {item.publishedAt && (
                        <>
                          <span className="mx-2">•</span>
                          <time dateTime={item.publishedAt} className='text1'>{formatDate(item.publishedAt)}</time>
                        </>
                      )}
                    </div>
                    
                    <h3 className="news-heading font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2 md:line-clamp-3 text2">
                      {item.description || 'No description available'}
                    </p>
                    
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text2"
                    >
                      Read full article
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                  
                  {item.urlToImage && (
                    <div className="md:w-1/3 lg:w-1/4 h-32 md:h-auto">
                      <div className="h-full w-full relative">
                        <img 
                          src={item.urlToImage} 
                          alt={item.title} 
                          className="h-full w-full object-cover rounded-md"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;