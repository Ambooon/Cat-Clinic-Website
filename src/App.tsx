import CatCareSection from "./components/CatCareSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Family from "./components/Family";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Store from "./components/Store";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CatCareSection />
                <Pricing />
                <Family />
                <Newsletter />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/store" element={<Store />} />
          <Route />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
