import CatCareSection from "./components/CatCareSection";
import Hero from "./components/Hero";
import Hero2 from "./components/CatCareService";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Family from "./components/Family";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CatCareSection />
      <Hero2 />
      <Pricing />
      <Family />
      <Newsletter />
    </>
  );
}

export default App;
