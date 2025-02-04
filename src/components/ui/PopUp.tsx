"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-[#777777] shadow-lg w-screen ">
      <div className="px-4 py-3 flex items-center gap-4">
        {/* Nike Logo - Centered */}
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <Image
            src="/nike.png"
            alt="nike"
            height={32}
            width={32}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-white">
          <p className="text-xs md:text-lg font-bold font-serif">
            Only in the Nike App
          </p>
          <p className="text-[9px] ">
            Get exclusive access, member rewards, and more.
          </p>
        </div>

        {/* Open Button */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-serif hover:bg-gray-100 transition-colors whitespace-nowrap">
          OPEN
        </button>

        {/* Close Button */}
        <button onClick={() => setIsVisible(false)} className="text-black ml-2">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
