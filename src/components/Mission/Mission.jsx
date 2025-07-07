import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-section">
      {/* Top intro block */}
      <div className="mission-header">
        <h2>
          Nu Skin,
          <br />
          Improving Lives Everyday
        </h2>
        <div className="mission-stats">
          <div>
            <strong>25+</strong>
            <p>Years of Giving</p>
          </div>
          <div>
            <strong>20+</strong>
            <p>
              <p>Current Social Projects</p>
            </p>
          </div>
          <div>
            <strong>850M+</strong>
            <p>
              <p>Meals Donated through Nourish the Children</p>
            </p>
          </div>
        </div>
      </div>

      {/* Middle block */}
      <div className="mission-row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6n7z7nOkVZRgKb8QE-oK7YH_lbHUDHRv-w&s" />
        <div className="mission-text">
          <h3>Being a Force for Good</h3>
          <p>
            Some call it corporate social responsibility. We call it our
            purpose. Together we’re engaged in initiatives worldwide—nourishing
            thousands of hungry children, funding pediatric health and wellness
            services, or striving for a more sustainable future. And sometimes,
            we're simply taking meaningful steps to improve our local
            communities. Whatever we do, we believe changing the world begins
            with a single action.
          </p>
          <a href="#">Explore our projects</a>
        </div>
      </div>

      {/* Bottom block */}
      <div className="mission-row">
        <div className="mission-text">
          <h3>Nature + Science</h3>
          <p>
            Capturing the best in nature to bring you the best results is our
            personal mission. We combine powerful ingredients with innovative
            science and technology. The result ? Worldc-class products that
            deliver real benefits. And even though we've spent more than 30
            years researching aging at the genetic level, Mother Nature
            continually inspires us to push the boundaries of inquiry and
            innovation. We bottle what's best and bring it right to your door.
          </p>
          <a href="#">Discover more</a>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG9kALBawB034q4Uo33cD9OMy1_KOaZoYMA&s"
          alt="Nu Skin product"
        />
      </div>
    </div>
  );
};

export default Mission;
