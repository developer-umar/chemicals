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
export const metadata = {
  title:
    "FH Chemicals | PU Chemicals & Leather Tanning Chemicals Manufacturer",

  description:
    "Leading manufacturer of PU chemicals, leather tanning chemicals, finishing chemicals and footwear chemical solutions.",

  keywords: [
    "PU chemicals",
    "Leather tanning chemicals",
    "Footwear chemicals",
    "Leather finishing chemicals",
    "Safety shoe chemicals",
  ],
};



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