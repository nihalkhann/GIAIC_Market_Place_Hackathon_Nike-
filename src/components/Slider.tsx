// "use client"
// import React, { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import Image from 'next/image';

// const items = [
//   {
//     id: 1,
//     image: '/Rectangle (1).png',
//     title: 'Nike Air Max Pulse',
//     gender: 'Men s shoes',
//     price: 13.99,

//   },
//   {
//     id: 2,
//     image: '/Rectangle (12).png',
//       title: 'Nike Air Max Pulse',
//     gender: 'Men s shoes',
//     price: 13.99,
//   },
//   {
//     id: 3,
//     image: '/Rectangle (6).png',
//       title: 'Nike Air Max 97 SE',
//     gender: 'Men s shoes',
//     price: 16.99,
//   },{
//     id: 4,
//     image: '/Rectangle (5).png',
//       title: 'Nike Air Max Pulse',
//     gender: 'Men s shoes',
//     price: 13.99,
//   },
//   {
//     id: 5,
//     image: '/Rectangle (3).png',
//     title: 'Nike Air Max Pulse',
//     gender: 'Men s shoes',
//     price: 13.99,
//   },
//   {
//     id: 6,
//     image: '/Rectangle (19).png',
//     title: 'Nike Air Max 97 SE',
//     gender: 'Men s shoes',
//     price: 16.99,
//   },{
//     id: 7,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (20).png',
//     price: 225,
//     gender: 'Women\'s Wear',

//   },
//   {
//    id:  8,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (21).png',
//     price: 365,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 9,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (22).png',
//     price: 754,
//     gender: 'Men\'s Wear',
//     },
//     {
//     id: 10,
//     title: 'Nike Dri-FIT UV Hyverse',
//     image: '/Image (6).png',
//     price: 107 ,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 11,
//     title: 'Nike Court Vision Low Next Nature',
//     image: '/Image (7).png',
//     price: 499,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 12,
//     title: 'Nike Air Force 1 PLAT-FORM',
//     image: '/Image (8).png',
//     price: 685,
//     gender: 'Women\'s Wear',

//   },
//   {
//     id: 13,
//     title: 'Nike Air Force 1 Shadow',
//     image: '/Image (9).png',
//     price: 905,
//     gender: 'Men\'s Wear',

//   },
//   {
//     id: 14,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (1).png',
//     price: 225,
//     gender: 'Men\'s Wear',

//   },
//   {
//    id: 16,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (2).png',
//     price: 495,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 17,
//     title: 'Nike Sportswear Tank',
//     image: '/Rectangle (3).png',
//     price: 275,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 18,
//     title: 'Nike Dri-FIT UV Hyverse',
//     image: '/Rectangle (6).png',
//     price: 1107 ,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 19,
//     title: 'Nike Court Vision Low Next Nature',
//     image: '/Rectangle (7).png',
//     price: 489,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 20,
//     title: 'Nike Air Force 1 PLAT-FORM',
//     image: '/Rectangle (8).png',
//     price: 685,
//     gender: 'Women\'s Wear',

//   },
// ];
// const Slider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative mt-10 px-10">
//           <div className="overflow-hidden">
//               <h1 className='text-lg px-4 font-semibold mb-4'>Best of Air Max</h1>
//         <div
//           className="flex transition-transform duration-500 "
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
//             >
//               <div className="bg-white shadow-md rounded-lg">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   height={256}
//                   width={100}

//                   className="w-full h-64 object-cover"
//                 />
//                 <div className=" flex justify-between mx-2 mt-2">
//                   <h3 className="text-sm md:text-lg font-medium text-gray-800">
//                     {item.title}
//                     <p className='font-semibold text-sm'>{item.gender}</p>

//                           </h3>

//                   <p className="font-semibold text-sm">{item.price.toFixed(2)} €</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-white rounded-full   hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronLeft className="h-6 w-6 text-gray-800" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white rounded-full  mr-20 hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronRight className="h-6 w-6 text-gray-800 " />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// "use client";

// import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../sanity/lib/client";
// import { urlFor } from "../sanity/lib/image";
// import { Product } from "../lib/types";

// const Slider: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "product"] {
//           _id,
//           productName,
//           price,
//           category,
//           description,
//           "image": image.asset->url
//         }
//       `;
//       const data: Product[] = await client.fetch(query);
//       setProducts(data);
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

//   if (products.length === 0) return <p>Loading...</p>;

//   return (
//     <div className="relative mt-10 px-10">
//       <h1 className="text-lg px-4 font-semibold mb-4">Best of Air Max</h1>

//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
//             >
//               <div className="bg-white shadow-md rounded-lg">
//                 <Link href={`/product/${product._id}`}>
//                   {/* Checking if the image URL exists before rendering */}
//                   <Image
//                     src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
//                     alt={product.productName}
//                     height={256}
//                     width={256}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="flex justify-between mx-2 mt-2">
//                     <h3 className="text-sm md:text-lg font-medium text-gray-800">
//                       {product.productName}
//                       <p className="font-semibold text-sm">{product.category}</p>
//                     </h3>
//                     <p className="font-semibold text-sm">
//                       {product.price.toFixed(2)} €
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-white rounded-full hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronLeft className="h-6 w-6 text-gray-800" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white rounded-full hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronRight className="h-6 w-6 text-gray-800" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// "use client";

// import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../sanity/lib/client";
// import { urlFor } from "../sanity/lib/image";
// import { Product } from "../lib/types";

// const Slider: React.FC = () => {
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
//     <div className="relative mt-10 px-10">
//       <h1 className="text-lg px-4 font-semibold mb-4">Best of Air Max</h1>

//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
//             >
//               <div className="bg-white shadow-md rounded-lg">
//                 <Link href={`/product/${product._id}`}>
//                   <Image
//                     src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
//                     alt={product.productName}
//                     height={256}
//                     width={256}
//                     className="w-full h-64 object-cover"
//                     priority
//                   />
//                   <div className="flex justify-between mx-2 mt-2 p-4">
//                     <div>
//                       <h3 className="text-sm md:text-lg font-medium text-gray-800">
//                         {product.productName}
//                       </h3>
//                       <p className="font-semibold text-sm">{product.category}</p>
//                     </div>
//                     <p className="font-semibold text-sm">
//                       {product.price.toFixed(2)} €
//                     </p>
//                   </div>
//                 </Link>
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
//           className="bg-white rounded-full mr-5 p-2 hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronRight className="h-6 w-6 text-gray-800" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

"use client"

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import { Product } from "../types/types";

const Slider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (products.length === 0) return <div className="p-4">No products found</div>;

  return (
    <div className="relative mt-10">
      <div className="flex justify-between items-center mb-6 px-8">
        <h1 className="text-2xl font-bold">Best of Air Max</h1>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            aria-label="Next slide"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-8">
        <div
          className="flex transition-transform duration-500 ease-out gap-4"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="flex-shrink-0 w-full md:w-1/3 min-w-[33.333%]"
            >
              <Link href={`/product/${product._id}`}>
                <div className="bg-[#f5f5f5] rounded-lg p-4">
                  <Image
                    src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                    alt={product.productName}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-contain"
                    priority
                  />

                <div className="flex justify-between mx-2 mt-2 p-4">
                     <div>
                       <h3 className="text-sm md:text-base font-medium">
                         {product.productName}
                       </h3>
                       <p className="font-semibold text-gray-600 text-sm">{product.category}</p>
                     </div>
                     <p className="font-semibold text-sm">
                       €{product.price.toFixed(2)}
                     </p>
                   </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

