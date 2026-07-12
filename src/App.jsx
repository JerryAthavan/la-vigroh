import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosBar from "./components/LogosBar";
import Products from "./components/Products"
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LogosBar/>
      <Products/>
      <HowItWorks/>
      <Stats/>
      <Testimonial/>
      <CTASection/>
      <Footer/>
    </div>
  );
}

export default App;