import React from "react";
import { FaMicrophone } from "react-icons/fa";

const BuildRelationship = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-6 md:px-12 py-10 bg-[#f9faff] rounded-[2rem] shadow-[0_4px_15px_rgba(0,0,0,0.04)] mx-6 md:mx-12 my-8">
      <div className="max-w-md text-left">
        <h2 className="font-extrabold text-[#1b1c48] text-[2.3rem] md:text-[2.4rem] leading-tight font-['Poppins',sans-serif]">
          Build a relationship with your tutor
        </h2>

        <p className="text-gray-600 leading-relaxed text-[0.95rem] md:text-[1rem] font-['Inter',sans-serif] mt-3">
          Speak Tutor designs a personalized curriculum as unique as you are by
          getting to know you on a surprisingly deep level.
        </p>
      </div>

      <div className="relative">
        <div className="bg-[#f3f5fb] aspect-square p-4 rounded-[1.6rem] shadow-[0_8px_20px_rgba(0,0,0,0.06)] w-[240px] md:w-[280px] flex items-center justify-center">
          <div className="bg-white rounded-[1.2rem] p-4 shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] w-full h-full flex flex-col justify-between">
            <div className="flex justify-between text-gray-400 text-[10px] mb-1 px-1">
              <span>9:41</span>
              <span>now</span>
            </div>

            <div className="bg-[#f5f7ff] rounded-xl p-2 flex items-start gap-2 shadow-sm">
              <FaMicrophone className="text-[#1a58f5] mt-[3px] text-[12px]" />
              <p className="text-[11px] text-gray-700 leading-snug">
                <strong className="text-[#1b1c48]">Speak</strong> <br />
                Hey Audrey, your trip to Mexico is in 6 days! Let’s practice
                some vocabulary for your trip!
              </p>
            </div>

            <div className="bg-[#1a58f5] text-white text-[11px] py-1.5 px-3 rounded-xl text-center font-medium shadow-[0_3px_8px_rgba(26,88,245,0.25)] mt-3">
              Phrases to go through customs and air travel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildRelationship;
