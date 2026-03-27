import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductTopbar from "../components/ProductTopbar";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <Navbar />
      <Hero />

      <ProductTopbar 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
      />

      <div style={{ display: "flex" }}>
        {showSidebar && <Sidebar />}
        <ProductGrid showSidebar={showSidebar} />
      </div>

      <Footer />
    </>
  );
}