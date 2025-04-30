import { Link } from "react-router-dom";
import "./NewsList.css";

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img
              src={article.urlToImage || "/default-image.jpg"}
              alt="news"
              className="news-image"
            />
          </a>
          <div className="news-info">
            <h3>{article.title || "Frontend Challenge "}</h3>
            <p>{article.description || "Seni saraylarda yaşatacam ana."}</p>

            <div className="news-meta">
              <span>
                🗓️ {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span>✍️ {article.author || "İbrahim Ethem Öztürk"}</span>
              <span>👁️ {article.views || 6127} views</span>
            </div>

            <Link to={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
