import CatCareSection from "./components/CatCareSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Family from "./components/Family";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <CatCareSection />
        <Pricing />
        <Family />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default App;
