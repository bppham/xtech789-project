import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./Home.css";
import Product from "../../components/Product/Product";
import Advertising from "../../components/Advertising/Advertising";
import Adward from "../../components/Adward/Adward";
import Mission from "../../components/Mission/Mission";
import News from "../../components/News/News";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      <div className="title">
        <section>Most Popular Products</section>
      </div>

      <Product />
      <Advertising />
      <div className="title">
        <section>Adward And Recognition</section>
      </div>
      <Adward />
      <div className="title">
        <section>The Nu Skin Way</section>
      </div>
      <Mission />
      <News />
    </div>
  );
};

export default Home;