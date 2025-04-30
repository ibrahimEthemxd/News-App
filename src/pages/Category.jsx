import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import ClipLoader from "react-spinners/ClipLoader";
import "./Category.css";

const Category = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [author, setAuthor] = useState("");
  const [sortByViews, setSortByViews] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=${apiKey}`
      );
      const enriched = response.data.articles.map((item) => ({
        ...item,
        views: Math.floor(Math.random() * 1000) + 100,
      }));
      setArticles(enriched);
      setFilteredArticles(enriched);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    setKeyword("");
    setStartDate("");
    setEndDate("");
    setAuthor("");
    setSortOrder("default");
    setSortByViews("none");
    setCurrentPage(1);
  }, [categoryName]);

  const handleFilter = (e) => {
    e.preventDefault();
    let filtered = articles.filter((a) =>
      a.title?.toLowerCase().includes(keyword.toLowerCase())
    );

    if (author) {
      filtered = filtered.filter((a) =>
        a.author?.toLowerCase().includes(author.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((a) => {
        const date = new Date(a.publishedAt);
        return date >= new Date(startDate) && date <= new Date(endDate);
      });
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sortByViews === "asc") {
      filtered.sort((a, b) => a.views - b.views);
    } else if (sortByViews === "desc") {
      filtered.sort((a, b) => b.views - a.views);
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <>
      <h2 className="page-title">{categoryName.toUpperCase()} NEWS</h2>

      <div className="category-page">
        <div className="filters">
          <h3>Filters</h3>
          <form onSubmit={handleFilter}>
            <label htmlFor="keyword">Keyword</label>
            <input
              type="text"
              id="keyword"
              placeholder="e.g. technology"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              placeholder="e.g. John Doe"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <label>Sort by Title</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="asc">Title A-Z</option>
              <option value="desc">Title Z-A</option>
            </select>

            <label>Sort by Views</label>
            <select
              value={sortByViews}
              onChange={(e) => setSortByViews(e.target.value)}
            >
              <option value="none">None</option>
              <option value="asc">Views Low to High</option>
              <option value="desc">Views High to Low</option>
            </select>

            <button type="submit">Apply Filters</button>
          </form>
        </div>

        <div className="news-list">
          {loading ? (
            <div className="loading-container">
              <ClipLoader color="#f04e30" loading={loading} size={50} />
            </div>
          ) : (
            <>
              {currentArticles.length === 0 ? (
                <div className="no-results">
                  <h3>No results found for your filter criteria..!</h3>
                </div>
              ) : (
                currentArticles.map((article, index) => (
                  <div key={index} className="news-item">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={article.urlToImage || "/default-image.jpg"}
                        alt="news"
                        className="news-image"
                      />
                    </a>

                    <div className="news-content">
                      <h3>{article.title || "Dargınım gözlerine "}</h3>
                      <p>
                        {article.description ||
                          "Sabret doğacaktır. Elbet güneş :D"}
                      </p>
                      <div className="news-meta">
                        <span>
                          🗓️ {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                        <span>✍️ {article.author || "İbrahim Ethem Öztürk"}</span>
                        <span>👁️ {article.views || 6127} views</span>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(
                  filteredArticles.length / articlesPerPage
                )}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
