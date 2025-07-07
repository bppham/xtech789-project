import React from "react";
import './Advertising.css'
const Advertising = () => {
  return (
    <div className="promo-banner">
      <div className="promo-image">
        <img src="https://vn4u.vn/wp-content/uploads/2023/09/bai-viet-quang-cao-sua-rua-mat-avt.jpg" alt="Promo" />
        <div className="sale-badge">
          Sale Of
          <br />
          <strong>$29.99</strong>
        </div>
      </div>

      <div className="promo-content">
        <p className="product-category">AGELOC LUMISPA® IO</p>
        <h2 className="product-title">ageLOC® LumiSpa® iO</h2>
        <p className="product-desc">Elevate your skincare routine</p>
        <button className="shop-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Advertising;
