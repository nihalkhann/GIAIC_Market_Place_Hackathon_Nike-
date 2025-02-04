import React from "react";
import Link from "next/link";
import JordanSlider from "@/components/JordanSlider";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 ">
          We can't find the page you are looking for. Sorry for the
          inconvenience.
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back Home
              </Link>
              <JordanSlider/>
      </div>
    </div>
  );
};

export default page;
