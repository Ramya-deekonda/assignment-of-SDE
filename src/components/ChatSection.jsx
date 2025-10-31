import React from "react";
import { FaUser, FaRobot, FaCamera } from "react-icons/fa";

const ChatSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 bg-[#f9faff] rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.06)] mx-4 md:mx-10 my-10 gap-6 md:gap-10">
      <div className="max-w-md text-left md:mr-6">
        <h2 className="font-extrabold text-[#1b1c48] text-[2.6rem] md:text-[2.8rem] leading-tight font-['Poppins',sans-serif]">
          Talk about anything,
        </h2>
        <h2 className="font-extrabold text-[#1b1c48] text-[2.6rem] md:text-[2.8rem] leading-tight font-['Poppins',sans-serif] mt-[6px]">
          anytime, anywhere
        </h2>

        <p className="text-gray-600 leading-relaxed text-[1rem] md:text-[1.05rem] font-['Inter',sans-serif] mt-4">
          Speak Tutor is your on-the-go conversational partner. Practice
          speaking on any topic, anytime, no matter how niche.
        </p>
      </div>

      <div className="relative mt-10 md:mt-0">
        <div className="bg-[#f3f5fb] p-5 md:p-6 rounded-[2rem] shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-[300px] md:w-[340px]">
          <div className="bg-white rounded-[1.6rem] p-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]">
            <p className="text-gray-800 mb-5 text-center font-semibold text-[15px]">
              Create your own
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-800 text-[14px] font-medium">
                <FaUser className="text-[#1a58f5]" /> Tourist
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-[14px] font-medium">
                <FaRobot className="text-[#1a58f5]" /> New friend
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-[14px] font-medium leading-snug">
                <FaCamera className="text-[#1a58f5]" /> Talking about the best
                places to grab dinner in San Francisco.
              </li>
            </ul>

            <button className="bg-[#1a58f5] text-white w-full py-3 mt-6 rounded-2xl font-semibold shadow-[0_6px_15px_rgba(26,88,245,0.3)] hover:bg-[#174de0] transition-all">
              Start chatting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
