// src/components/NewsList.jsx
import { Link } from 'react-router-dom';
import './NewsList.css';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <img src={article.urlToImage} alt={article.title} />
          <div className="news-info">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
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
