import { Link } from "react-router-dom";
import "./ProductTopbar.css";

export default function ProductTopbar() {
  return (
    <div className="product-topbar">
      <div className="topbar-left">
        <span className="items-count">3425 ITEMS</span>
        <div className="filter-toggle">
          <span className="arrow-left">‹</span>
          <span className="filter-text">HIDE FILTER</span>
        </div>
      </div>

      <div className="topbar-right">
        <details className="sort-dropdown">
          <summary>
            RECOMMENDED <span className="arrow-down">⌵</span>
          </summary>

          <div className="dropdown-menu">
            <Link to="/">RECOMMENDED</Link>
            <Link to="/">NEWEST FIRST</Link>
            <Link to="/">POPULAR</Link>
            <Link to="/">PRICE: HIGH TO LOW</Link>
            <Link to="/">PRICE: LOW TO HIGH</Link>
          </div>
        </details>
      </div>
    </div>
  );
}