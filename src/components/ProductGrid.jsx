import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ showSidebar, sortType }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);


  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "high") return b.price - a.price;
    if (sortType === "low") return a.price - b.price;
    if (sortType === "newest") return b.id - a.id;

    return 0; 
  });

  return (
    <div className={`product-grid ${showSidebar ? "with-sidebar" : "full-width"}`}>
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}