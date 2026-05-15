import AboutSection from "./components/AboutSection";
import CoreBusiness from "./components/CoreBusiness";
import GlobalNetwork from "./components/GlobalNetwork";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientShowcase from "./components/ClientShowcase";
import ParallaxCTA from "./components/ParallaxCTA";
import HeroSection from "./components/Hero";
import TeamSection from "./components/TeamSection";
import XuchuanPartnership from "./components/Dealership";
import CorporateContact from "./components/Contact";
import TansolFooter from "./components/Footer";
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
    
      <WhyChooseUs/>
      <XuchuanPartnership/>
      
      <GlobalNetwork/>
      <TeamSection/>
     
      
      
   
      <ClientShowcase/>
      <ParallaxCTA/> 
      <CorporateContact/>
      
      <TansolFooter/>
      
    </main>
  );
}