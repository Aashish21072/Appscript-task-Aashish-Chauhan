import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("API ERROR:", error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}