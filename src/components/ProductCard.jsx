import { FaRegHeart } from "react-icons/fa";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      <div className="product-info-row">
        <div className="product-details">
          <h3 className="product-name">{product.title}</h3>
          <p className="product-subtext">
            <span className="sign-in-link">Sign in</span> or Create an account to see pricing
          </p>
        </div>
        
        <div className="wishlist-btn">
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
}