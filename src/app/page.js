import Beafs from "@/components/Beafs";
import ContactSection from "@/components/Contact";
import Delivered from "@/components/Delivered";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HalalSection from "@/components/Halal";
import HealthySection from "@/components/Healthy";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Premium from "@/components/Premium";
import ServicesSection from "@/components/Services";
import PromoAndTestimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-hero bg-cover min-h-screen">
    <Navbar/>
    <Hero/>

    </div>
    <Intro/>
    <Menu/>
    <Gallery/>
    <ServicesSection/>
    <HalalSection/>
    <Premium/>
    <HealthySection/>
    <Delivered/>
    <Trust/>
    <Beafs/>
    <Work/>
    <News/>
    <PromoAndTestimonials/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
