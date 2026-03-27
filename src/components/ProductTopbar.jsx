import { Link } from "react-router-dom";
import "./ProductTopbar.css";

export default function ProductTopbar({ showSidebar, setShowSidebar, setSortType }) {
  return (
    <div className="product-topbar">
      <div className="topbar-left">
        <span className="items-count">3425 ITEMS</span>

        <div
          className="filter-toggle"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span className="arrow-left">
            {showSidebar ? "‹" : "›"}
          </span>

          <span className="filter-text">
            {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>
      </div>

      <div className="topbar-right">
        <details className="sort-dropdown">
          <summary>
            RECOMMENDED <span className="arrow-down">⌵</span>
          </summary>

          <div className="dropdown-menu">
            <p onClick={() => setSortType("recommended")}>RECOMMENDED</p>
            <p onClick={() => setSortType("newest")}>NEWEST FIRST</p>
            <p onClick={() => setSortType("popular")}>POPULAR</p>
            <p onClick={() => setSortType("high")}>PRICE: HIGH TO LOW</p>
            <p onClick={() => setSortType("low")}>PRICE: LOW TO HIGH</p>
          </div>
        </details>
      </div>
    </div>
  );
}