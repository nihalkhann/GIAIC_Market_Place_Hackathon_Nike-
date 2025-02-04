// "use client"
// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import Image from 'next/image';

// const products = [
//   {
//     id: 1,
//     image: '/j1.png',
//     title: 'Nike Dri-FIT ADV TechKnit Ultra',
//     price: 39.95,
//     gender: 'Men\'s Running',
//   },
//   {
//     id: 2,
//     image: '/Rectangle (5).png',
//     title: 'Nike Dri-FIT Challenger',
//     price: 24.95,
//     gender: 'Men\'s Running',
//   },
//   {
//     id: 3,
//     image: '/Rectangle (7).png',
//     title: 'Nike Dri-FIT ADV Run Division',
//     price: 52.95,
//     gender: 'Women\'s Running',
//   },
//   {
//     id: 4,
//     image: '/Rectangle (10).png',
//     title: 'Nike Fast',
//     price: 37.95,
//     gender: 'Women\'s Running',
//   },
//   {
//     id: 5,
//     image: '/Rectangle (11).png',
//     title: 'Nike Dri-FIT ADV TechKnit Ultra',
//     price: 39.95,
//     gender: 'Men\'s Running',
//   },
//   {
//     id: 6,
//     image: '/Rectangle (15).png',
//     title: 'Nike Dri-FIT Challenger',
//     price: 24.95,
//     gender: 'Men\'s Running',
//   },
//   {
//     id: 7,
//     image: '/Rectangle (19).png',
//     title: 'Nike Dri-FIT ADV Run Division',
//     price: 52.95,
//     gender: 'Women\'s Running',
//   },
//   {
//     id: 8,
//     image: '/Rectangle.png',
//     title: 'Nike Fast',
//     price: 37.95,
//     gender: 'Women\'s Running',
//   },  {
//     id: 9,
//     image: '/Rectangle (20).png',
//     title: ' Fast',
//     price: 38.95,
//     gender: 'Women\'s Running',
//   },
// ];

// const JordanSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 3 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= products.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative mt-10 px-10">
//       <div className="overflow-hidden">
//         <h1 className='text-lg px-4 font-semibold mb-4'>Best of Air Max</h1>
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
//             >
//               <div className="bg-white shadow-md rounded-lg">
//                 <div className="relative w-full pt-[120%]">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                     className="absolute inset-0 object-cover"
//                   />
//                 </div>
//                 <div className="flex justify-between mx-2 mt-2 p-2">
//                   <h3 className="text-sm md:text-lg font-medium text-gray-800">
//                     {item.title}
//                     <p className=' font-semibold text-sm text-gray-600'>{item.gender}</p>
//                   </h3>
//                   <p className="text-[12px] md:text-sm font-semibold ">{item.price.toFixed(2)}€</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronLeft className="h-6 w-6 text-gray-800" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none mr-20"
//         >
//           <FaChevronRight className="h-6 w-6 text-gray-800" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JordanSlider;

// "use client"

// import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../sanity/lib/client";
// import { urlFor } from "../sanity/lib/image";
// import { Product } from "../types/types";

// const JordanSlider: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = `
//           *[_type == "product"] {
//             _id,
//             productName,
//             price,
//             category,
//             description,
//             "image": image.asset->
//           }
//         `;
//         const data = await client.fetch(query);
//         setProducts(data);
//       } catch (err) {
//         setError("Failed to load products");
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">{error}</div>;
//   if (products.length === 0) return <div className="p-4">No products found</div>;

//   return (
//     <div className="relative mt-10">
//       <div className="flex justify-between items-center mb-6 px-8">
//         <h1 className="text-2xl font-bold">You Might Also Like</h1>
//         <div className="flex gap-2">
//           <button
//             onClick={handlePrevious}
//             className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft className="h-5 w-5" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
//             aria-label="Next slide"
//           >
//             <FaChevronRight className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       <div className="overflow-hidden px-8">
//         <div
//           className="flex transition-transform duration-500 ease-out gap-4"
//           style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
//         >
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex-shrink-0 w-full md:w-1/3 min-w-[33.333%]"
//             >
//               <Link href={`/product/${product._id}`}>
//                 <div className="bg-[#f5f5f5] rounded-lg p-4">
//                   <Image
//                     src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
//                     alt={product.productName}
//                     width={400}
//                     height={400}
//                     className="w-full aspect-square object-contain"
//                     priority
//                   />

//                 <div className="flex justify-between mx-2 mt-2 p-4">
//                      <div>
//                        <h3 className="text-sm md:text-base font-medium">
//                          {product.productName}
//                        </h3>
//                        <p className="font-semibold text-gray-600 text-sm">{product.category}</p>
//                      </div>
//                      <p className="font-semibold text-sm">
//                        €{product.price.toFixed(2)}
//                      </p>
//                    </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JordanSlider;
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: SanityImage;
}

interface ProductCardProps {
  product: Product;
}



// Adjust items per slide based on screen size
const getItemsPerSlide = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 4; // Desktop
  }
  return 4;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link href={`/product/${product._id}`} className="block group">
    <div className="bg-[#f5f5f5] rounded-lg p-3 sm:p-4 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full pt-[100%] sm:pt-[80%] overflow-hidden">
        <Image
          src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
          alt={product.productName}
          fill
          className="absolute inset-0 object-contain transform transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
        />
      </div>

      <div className="mt-3 sm:mt-4 px-1 sm:px-2 space-y-1 sm:space-y-2">
        <h3 className="text-sm sm:text-base font-medium truncate">
          {product.productName}
        </h3>
        <p className="font-semibold text-gray-600 text-xs sm:text-sm">
          {product.category}
        </p>
        <p className="font-semibold text-sm sm:text-base">
          €{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </Link>
);

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px] sm:min-h-[300px]">
    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex justify-center items-center min-h-[200px] sm:min-h-[300px] px-4">
    <div className="text-red-500 text-center">
      <p className="text-lg sm:text-xl font-semibold mb-2">Oops!</p>
      <p className="text-sm sm:text-base">{message}</p>
    </div>
  </div>
);

const JordanSlider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          productName,
          price,
          category,
          description,
          "image": image.asset->
        }
      `;
      const data = await client.fetch<Product[]>(query);
      setProducts(data);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Group products into slides based on itemsPerSlide
  const slides = products.reduce<Product[][]>((acc, product, i) => {
    const slideIndex = Math.floor(i / itemsPerSlide);
    if (!acc[slideIndex]) acc[slideIndex] = [];
    acc[slideIndex].push(product);
    return acc;
  }, []);

  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide((totalSlides + index) % totalSlides);
    },
    [totalSlides],
  );

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    goToSlide(currentSlide - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    goToSlide(currentSlide + 1);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, goToSlide]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (products.length === 0)
    return <ErrorMessage message="No products found" />;

  return (
    <div className="relative mt-6 sm:mt-10">
      {/* Header & Navigation */}
      <div className="flex justify-between items-center mb-4 sm:mb-6 px-4 sm:px-8">
        <h1 className="text-lg sm:text-2xl font-bold">You Might Also Like</h1>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div
        className="overflow-hidden px-4 sm:px-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {slide.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gray-800 w-4 sm:w-6"
                : "bg-gray-300 w-2 sm:w-3 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default JordanSlider;