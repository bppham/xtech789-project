import "./MidBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MidBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate("/detail", { state: { keyword: search } });
    }
  };
  return (
    <div className="midbar">
      <div className="left-section"></div>

      <div className="right-section">
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="icons">
          <span className="icon-box">
            <FontAwesomeIcon icon={faHeart} className="icon" /> 0
          </span>
          <span className="icon-box">
            <FontAwesomeIcon icon={faCartShopping} className="icon" />{" "}
            {cartCount}
          </span>
        </div>
      </div>
    </div>
  );
}
