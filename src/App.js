import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./aos-push.css"; 

import HeroSection from "./components/HeroSection";
import ChatSection from "./components/ChatSection";
import BuildRelationship from "./components/BuildRelationship";
import Testimonial from "./components/Testimonial";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: "ease-out-cubic",
      once: false, 
      offset: 120,
    });
  }, []);

  return (
    <main className="pt-24 space-y-40">
      <section data-aos="push-up" data-aos-delay="100">
        <HeroSection />
      </section>

      <section data-aos="push-up" data-aos-delay="200">
        <ChatSection />
      </section>

      <section data-aos="push-up" data-aos-delay="300">
        <BuildRelationship />
      </section>

      <section data-aos="push-up" data-aos-delay="400">
        <Testimonial />
      </section>
    </main>
  );
}

export default App;
