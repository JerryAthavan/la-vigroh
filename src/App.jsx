import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosBar from "./components/LogosBar";
import Products from "./components/Products"
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ScrollToHash from "./components/ScrollToHash";
function App() {
  return (
    <div>
      <ScrollToHash/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;