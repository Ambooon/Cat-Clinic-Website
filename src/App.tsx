import CatCareSection from "./components/CatCareSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Family from "./components/Family";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
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
          <Route />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
