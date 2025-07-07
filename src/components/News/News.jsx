import React, { useState } from "react";
import newsData from "../../data/newsdata";
import "./News.css";

const ITEMS_PER_PAGE = 3;

const News = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, newsData.length - ITEMS_PER_PAGE)
    );
  };

  const visibleItems = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="news-section">
      <div className="news-slider-area">
        <div className="news-header">
          <div></div>
          <a href="#">View All &gt;&gt;</a>
        </div>

        <div className="slider-wrapper">
          <button
            className="arrow-button left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            &#8249;
          </button>

          <div className="news-slider">
            {visibleItems.map((item, index) => (
              <div className="news-card" key={index}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          <button
            className="arrow-button right"
            onClick={handleNext}
            disabled={startIndex + ITEMS_PER_PAGE >= newsData.length}
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="news-right">
        <img
          src="https://img.freepik.com/premium-psd/best-daily-skin-care-product-promotion-social-media-post-banner-template_536881-28.jpg"
          alt="News Banner"
        />
        <div className="news-overlay">
          <h2>News</h2>
          <p>Nu Skin In The News</p>
        </div>
      </div>
    </div>
  );
};

export default News;
