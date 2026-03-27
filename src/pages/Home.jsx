import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductTopbar from "../components/ProductTopbar";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductTopbar />

      <div style={{ display: "flex" }}>
        <Sidebar />
        <ProductGrid />
      </div>

      <Footer />
    </>
  );
}