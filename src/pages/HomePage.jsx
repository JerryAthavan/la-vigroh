import Hero from '../components/Hero';
import LogosBar from '../components/LogosBar';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <Hero />
      <LogosBar />
      <Products />
      <HowItWorks />
      <Stats />
      <Testimonial />
      <CTASection />
      <ContactSection />
    </>
  );
}

export default HomePage;