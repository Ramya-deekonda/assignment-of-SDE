import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-8 md:px-14 py-20 bg-[#f9faff] rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.06)] mx-6 md:mx-14 my-12">
      <div className="max-w-md text-left -ml-4 md:-ml-8">
        <h1 className="font-extrabold text-[#1b1c48] text-[2.8rem] md:text-[3.3rem] leading-[1.1] font-['Poppins',sans-serif]">
          Stay motivated
        </h1>
        <h1 className="font-extrabold text-[#1b1c48] text-[2.8rem] md:text-[3.3rem] leading-[1.1] font-['Poppins',sans-serif] mt-1">
          and reach your goals
        </h1>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg font-['Inter',sans-serif] mt-5">
          Speak Tutor keeps you motivated and accountable to achieve your goals.
          Learning a language is better with someone by your side.
        </p>
      </div>

      <div className="relative">
        <div className="bg-[#f3f5fb] p-5 md:p-6 rounded-[2rem] shadow-[0_12px_25px_rgba(0,0,0,0.08)] w-[320px] md:w-[380px]">
          <div className="bg-white rounded-[1.6rem] p-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)] relative">
            <div className="absolute -top-5 left-6">
              <div className="bg-blue-100 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                  alt="bot"
                  className="w-6 h-6"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8 space-x-3">
              <div className="bg-[#f64b7d] text-white p-4 rounded-2xl w-1/2 shadow-[0_6px_15px_rgba(246,75,125,0.3)] flex flex-col space-y-2">
                <FaHeart className="text-lg opacity-90" />
                <p className="text-[13px] leading-snug font-medium">
                  You’re interested in traveling, and exploring new cultures.
                </p>
              </div>

              <div className="bg-[#1a58f5] text-white p-4 rounded-2xl w-1/2 shadow-[0_6px_15px_rgba(26,88,245,0.3)] flex flex-col space-y-2">
                <BsListUl className="text-lg opacity-90" />
                <p className="text-[13px] leading-snug font-medium">
                  We’ve created unique lessons and conversations based on those
                  goals.
                </p>
              </div>
            </div>
            <button className="bg-[#1a58f5] text-white w-full py-3 mt-5 rounded-2xl font-semibold shadow-[0_6px_15px_rgba(26,88,245,0.4)] hover:bg-[#174de0] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
