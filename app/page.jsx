import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import CoreBusiness from "./components/CoreBusiness";
import GlobalNetwork from "./components/GlobalNetwork";
import IndustriesSection from "./components/IndustriesSection";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";
import TeamSection from "./components/TeamSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientShowcase from "./components/ClientShowcase";
import ParallaxCTA from "./components/ParallaxCTA";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";


export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      
      <AboutSection/>
      <CoreBusiness/>
      <ProductCategories/>
      <WhyChooseUs/>
      <GlobalNetwork/>
      <TeamSection/>
      <IndustriesSection/>
      <GallerySection/>
      <ClientShowcase/>
      <ParallaxCTA/>
      <Footer/>
      
    </main>
  );
}