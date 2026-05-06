import AboutSection from "./components/AboutSection";
import CoreBusiness from "./components/CoreBusiness";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";


export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <CoreBusiness/>
      <ProductCategories/>
    </main>
  );
}