import React from "react";
import TopBar from "../TopBar/TopBar";
import MidBar from "../MidBar/MidBar";
import NavBar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <TopBar />
      <MidBar />
      <NavBar />
    </div>
  );
};

export default Header;
