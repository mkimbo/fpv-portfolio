import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VideoCarousel />
      <VideoCarousel />
      <ContactForm />
      <Footer />
    </>
  );
}
