import AboutSection from "./components/AboutSection";
import CoreBusiness from "./components/CoreBusiness";
import GlobalNetwork from "./components/GlobalNetwork";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";
import WhyChooseUs from "./components/WhyChooseUs";


export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <CoreBusiness/>
      <ProductCategories/>
      <WhyChooseUs/>
      <GlobalNetwork/>
      
    </main>
  );
}