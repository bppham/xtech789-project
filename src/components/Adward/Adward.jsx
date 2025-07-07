import React from "react";
import "./Adward.css";
import awardData from "../../data/awardata";
const Adward = () => {
  return (
    <div className="award-section">
      <div className="award-top">
        <img
          src="https://c8.alamy.com/comp/2E5EC7N/banner-with-eco-organic-cosmetics-for-homemade-spa-on-pink-background-skin-care-zero-waste-product-for-healthy-lifestyle-flat-lay-with-copy-space-2E5EC7N.jpg"
          alt="Devices"
          className="device-image"
        />
        <div className="award-heading">
          <h4>WORLD'S #1 COMPANY FOR</h4>
          <p>Beauty & Wellness Device Systems</p>
          <span className="source">Source: Euromonitor</span>
        </div>
      </div>

      <div className="award-list">
        {awardData.map((award, index) => (
          <div className="award-item" key={index}>
            <img src={award.image} alt={award.title} />
            <h5>{award.title}</h5>
            <p>{award.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adward;
