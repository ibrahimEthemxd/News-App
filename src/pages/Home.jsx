import { useEffect, useState } from "react";
import axios from "axios";
import NewsSlider from "../components/NewsSlider";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const pageSize = 20;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`
        );

        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <ClipLoader color="#f04e30" loading={true} size={50} />
        </div>
      ) : (
        <>
          <NewsSlider articles={articles.slice(0, 3)} />
          <NewsList articles={articles.slice(3)} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
