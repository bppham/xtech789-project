import React from "react";
import "./TopBar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="#">FAQs</a> | <a href="#">Help</a> | <a href="#">Support</a>
      </div>
      <div className="topbar-right">
        <a href="#">
          <i className="fab fa-facebook-f">
            <FaFacebookF />
          </i>
        </a>
        <a href="#">
          <i className="fab fa-twitter">
            <FaTwitter />
          </i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in">
            <FaLinkedin />
          </i>
        </a>
        <a href="#">
          <i className="fab fa-instagram">
            <FaInstagram />
          </i>
        </a>
        <a href="#">
          <i className="fab fa-youtube">
            <FaYoutube />
          </i>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
