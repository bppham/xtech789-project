import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";
const Detail = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (location.state?.keyword) {
      setSearchValue(location.state.keyword);
    }
  }, [location]);

  return (
    <div className="detail-container">
      <div className="content-container">
        <textarea
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-textarea"
        />
      </div>
    </div>
  );
};

export default Detail;
