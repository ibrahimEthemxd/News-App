// src/pages/Search.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import NewsList from "../components/NewsList";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageSize = 20;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`
        );

        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query, currentPage]);

  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h2>Arama Sonuçları: "{query}"</h2>

      <NewsList articles={articles} />

      {!loading && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Search;
