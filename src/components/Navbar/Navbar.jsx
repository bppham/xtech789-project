import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [showCategories, setShowCategories] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setShowMobileMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        ☰
      </div>

      <div className="navbar-left">
        <div
          className="nav-item categories-toggle"
          onClick={() => setShowCategories(!showCategories)}
        >
          Categories ▼
        </div>

        {showCategories && (
          <div className="dropdown">
            <ul>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>Swimwear</li>
              <li>Sleepwear</li>
              <li>Sportwear</li>
              <li>Jumpsuits</li>
              <li>Biazers</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          </div>
        )}
      </div>

      <div className="navbar-right">
        <div className="navbar-info">
          {["Home", "Shop", "Shop Detail", "Pages", "Contact"].map((item) => (
            <a
              key={item}
              className={`nav-item ${activeLink === item ? "active" : ""}`}
              href="#"
              onClick={() => handleNavClick(item)}
            >
              {item} {item === "Pages" ? "▼" : ""}
            </a>
          ))}
        </div>
        <div className="navbar-auth">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu">
          {["Home", "Shop", "Shop Detail", "Pages", "Contact"].map((item) => (
            <a
              key={item}
              className={`nav-item ${activeLink === item ? "active" : ""}`}
              href="#"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
          <div className="mobile-auth">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}
