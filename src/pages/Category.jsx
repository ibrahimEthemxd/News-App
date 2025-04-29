import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "../components/NewsList";

const Category = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        console.error("Haberler alınamadı:", err);
      }
      setLoading(false);
    };

    fetchNews();
  }, [categoryName]);

  return (
    <div className="home-page">
      <h2>{categoryName.toUpperCase()} Haberleri</h2>
      {loading ? <p>Yükleniyor...</p> : <NewsList articles={articles} />}
    </div>
  );
};

export default Category;
