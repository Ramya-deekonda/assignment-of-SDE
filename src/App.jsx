import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChatSection from "./components/ChatSection";
import BuildRelationship from "./components/BuildRelationship";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main className="pt-20 space-y-32">
        <section data-aos="fade-up">
          <HeroSection />
        </section>
        <section data-aos="fade-up">
          <ChatSection />
        </section>
        <section data-aos="fade-up">
          <BuildRelationship />
        </section>
        <section data-aos="fade-up">
          <Testimonial />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
