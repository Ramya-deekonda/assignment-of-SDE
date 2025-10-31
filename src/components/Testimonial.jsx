import React from "react";

const Testimonial = () => {
  return (
    <div className="text-center px-8 md:px-20 py-16 bg-white">
      <div className="inline-flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
          <img
            src="/jesica park.png"
            alt="Jessica Park"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-[#1b1c48]">
            Jessica Park
          </span>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#1b1c48] leading-relaxed max-w-3xl mx-auto">
        “The first time I used Speak Tutor, I couldn’t believe it wasn’t a real
        person. It feels like it understands my motivations at a deep.”
      </h2>
    </div>
  );
};

export default Testimonial;
