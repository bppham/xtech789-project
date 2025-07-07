import React, { useContext, useState } from "react";
import "./Product.css";
import { CartContext } from "../../context/CartContext";

const PRODUCTS_PER_PAGE = 3;

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState("description");
  const [startIndex, setStartIndex] = useState(0);

  const totalProducts = 6; 
  const products = Array.from({ length: totalProducts });

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - PRODUCTS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + PRODUCTS_PER_PAGE, totalProducts - PRODUCTS_PER_PAGE)
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="product-section">
      <div className="product-banner">
        <img
          src="https://i.pinimg.com/736x/75/58/eb/7558eba99a08b096817f8af6a70fc1ae.jpg"
          alt="Left Banner"
        />
      </div>

      <div className="product-content">
        <div className="product-tabs">
          <button
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <a href="#" className="view-all">View All &gt;&gt;</a>
        </div>

        <div className="slider-wrapper">
          <button
            className="arrow left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            &#8249;
          </button>

          <div className="product-slider">
            {visibleProducts.map((_, index) => (
              <div className="product-card" key={index}>
                <div className="badge">SALE</div>
                <img
                  src="https://bizweb.dktcdn.net/100/370/389/products/sua-rua-mat-duong-am-cerave-xanh-la-cho-da-dau-1.png?v=1665551816350"
                  alt="Product"
                />
                <p className="name">Pure Pineapple</p>
                <p className="price">
                  <span className="sale-price">$14.00</span>
                  <span className="original-price">$35.00</span>
                </p>
                <button className="add-to-cart" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>

          <button
            className="arrow right"
            onClick={handleNext}
            disabled={startIndex + PRODUCTS_PER_PAGE >= totalProducts}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
