import { useState, useEffect } from "react";
import "./NewsSlider.css";

const NewsSlider = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(articles.length - 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(nextSlide, 5000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="news-slider">
      {articles.length > 0 && (
        <div className="slider-content">
          <img src={articles[currentIndex].urlToImage} alt="slider" />
          <div className="slider-info">
            <h2>{articles[currentIndex].title}</h2>
            <p>{articles[currentIndex].description}</p>
            <a
              href={articles[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      )}

      <button className="prev btn" onClick={prevSlide}>
        ❮
      </button>
      <button className="next btn" onClick={nextSlide}>
        ❯
      </button>

      <div className="slider-dots">
        {articles.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
