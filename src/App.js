import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/HeroSection";
import ChatSection from "./components/ChatSection";
import BuildRelationship from "./components/BuildRelationship";
import Testimonial from "./components/Testimonial";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth fade duration
      easing: "ease-in-out",
      once: true, // Runs only once
      offset: 100, // Start animation slightly before section is visible
    });
  }, []);

  return (
    <main className="pt-24 space-y-40">
      <section data-aos="fade-up" data-aos-delay="100">
        <HeroSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <ChatSection />
      </section>

      <section data-aos="zoom-in-up" data-aos-delay="400">
        <BuildRelationship />
      </section>

      <section data-aos="fade-up" data-aos-delay="500">
        <Testimonial />
      </section>
    </main>
  );
}

export default App;
