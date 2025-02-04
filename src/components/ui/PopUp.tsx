"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-[#777777] shadow-lg w-screen ">
      <div className="px-4 py-3 flex items-center gap-4">
        {/* Nike Logo - Centered */}
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <svg
            className="swoosh-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="22"
            viewBox="0 0 64 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7277 12.1511C15.999 12.598 14.4241 12.8196 13.0469 12.8196C11.3396 12.8196 9.94617 12.4728 8.97074 11.7793C4.02962 8.28845 8.54956 0.885548 9.06118 0.0629324C6.88551 2.37923 4.65235 4.80341 2.89851 7.44593C-0.0575023 11.9597 -0.812655 16.2475 0.910825 18.906C2.23896 20.9642 4.40042 22 7.37517 22C10.0146 22 13.2975 21.1832 17.1928 19.5559L64 0.0173385L63.9981 0L17.7277 12.1511Z"
              fill="#111111"
            />
          </svg>
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
        <Link href="/https://apps.apple.com/us/app/nike-shoes-apparel-stories/id1095459556">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-serif hover:bg-gray-100 transition-colors whitespace-nowrap">
            OPEN
          </button>
        </Link>

        {/* Close Button */}
        <button onClick={() => setIsVisible(false)} className="text-black ml-2">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
