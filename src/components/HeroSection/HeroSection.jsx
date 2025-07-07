import { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const slides = [
    {
      image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/26/1151771/My-Pham-12-01.JPG",
      smallText: "10% OFF YOUR FIRST ORDER",
      heading: "Reasonable Price",
    },
    {
      image: "https://dnlhealthcare.com/wp-content/uploads/2023/06/banner-bo-my-pham-1024x536.png",
      smallText: "SALE UP TO 50%",
      heading: "New Year Collection",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXpmeV-WupqtFF-B1cGGaN2UvMvEBR8yBpg&s",
      smallText: "SPRING 2025 RELEASE",
      heading: "Fresh Look",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-section">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="carousel">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
          <div className="carousel-overlay">
            <p className="small-text">{slides[currentSlide].smallText}</p>
            <h2>{slides[currentSlide].heading}</h2>
            <button className="shop-btn">Shop Now</button>
          </div>
          <button className="arrow left" onClick={prevSlide}>‹</button>
          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>

        <div className="sub-banners">
          <div className="banner-item">
            <img src="https://thumbs.dreamstime.com/b/autumn-winter-collection-lady-s-clothes-17856183.jpg" alt="Winter 1" />
            <div className="banner-text">
              <p>PREFER CUSTOMER 2025</p>
              <h3>Winter Collection</h3>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
          <div className="banner-item">
            <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/26/1151771/My-Pham-12-01.JPG" alt="Winter 2" />
            <div className="banner-text">
              <p>PREFER CUSTOMER 2025</p>
              <h3>Winter Collection</h3>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
