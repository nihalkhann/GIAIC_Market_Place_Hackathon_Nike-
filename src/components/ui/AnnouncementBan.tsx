"use client";
import React, { useState, useEffect } from "react";

const announcements = [
  "Members: Free Shipping on Orders $50+",
  "New Arrivals: Shop the Latest Collection",
  "Limited Time: 20% Off Select Styles",
];

const AnnouncementBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<
    "entering" | "visible" | "exiting"
  >("entering");

  useEffect(() => {
    // Enter from right
    const enterTimer = setTimeout(() => {
      setAnimationState("visible");
    }, 500);

    // Stay visible
    const visibleTimer = setTimeout(() => {
      setAnimationState("exiting");
    }, 2500);

    // Exit to left and reset
    const exitTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
      setAnimationState("entering");
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(visibleTimer);
      clearTimeout(exitTimer);
    };
  }, [currentIndex]);

  const getAnimationClasses = () => {
    switch (animationState) {
      case "entering":
        return "translate-x-full opacity-0";
      case "visible":
        return "translate-x-0 opacity-100";
      case "exiting":
        return "-translate-x-full opacity-0";
      default:
        return "translate-x-0 opacity-100";
    }
  };

  return (
    <div className="relative bg-[#fffff] text-black underline w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 hover:opacity-75 transition-opacity"
          onClick={() => {
            setAnimationState("exiting");
            setTimeout(() => {
              setCurrentIndex((prev) =>
                prev === 0 ? announcements.length - 1 : prev - 1,
              );
              setAnimationState("entering");
            }, 500);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Announcement Text Container */}
        <div className="py-2 px-8 flex justify-center items-center min-h-[40px] overflow-hidden">
          <div className="relative w-full">
            <p
              className={`text-sm text-center absolute w-full transform transition-all duration-500 ease-in-out ${getAnimationClasses()}`}
            >
              {announcements[currentIndex]}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 hover:opacity-75 transition-opacity"
          onClick={() => {
            setAnimationState("exiting");
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % announcements.length);
              setAnimationState("entering");
            }, 500);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
