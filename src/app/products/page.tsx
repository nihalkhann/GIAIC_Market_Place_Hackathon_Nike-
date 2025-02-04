// import React from 'react';
// import Image from 'next/image';
// import { BiCategory } from 'react-icons/bi';
// import More from '@/components/More';

// // Product data
// const products = [
//   {
//     id: 1,
//     name: 'Nike Dri-FIT UV Hyverse',
//     image: '/Image (6).png',
//     price: 107 ,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 2,
//     name: 'Nike Court Vision Low Next Nature',
//     image: '/Image (7).png',
//     price: 499,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 3,
//     name: 'Nike Air Force 1 PLAT-FORM',
//     image: '/Image (8).png',
//     price: 685,
//     gender: 'Women\'s Wear',

//   },
//   {
//     id: 4,
//     name: 'Nike Air Force 1 Shadow',
//     image: '/Image (9).png',
//     price: 905,
//     gender: 'Men\'s Wear',

//   },
//   {
//     id: 5,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (1).png',
//     price: 225,
//     gender: 'Men\'s Wear',

//   },
//   {
//    id: 6,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (2).png',
//     price: 495,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 7,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (3).png',
//     price: 275,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 8,
//     name: 'Nike Dri-FIT UV Hyverse',
//     image: '/Rectangle (6).png',
//     price: 1107 ,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 9,
//     name: 'Nike Court Vision Low Next Nature',
//     image: '/Rectangle (7).png',
//     price: 489,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 10,
//     name: 'Nike Air Force 1 PLAT-FORM',
//     image: '/Rectangle (8).png',
//     price: 685,
//     gender: 'Women\'s Wear',

//   },
//   {
//     id: 9,
//     name: 'Nike Air Force 1 Shadow',
//     image: '/Rectangle (9).png',
//     price: 905,
//     gender: 'Men\'s Wear',

//   },
//   {
//     id: 10,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (10).png',
//     price: 225,
//     gender: 'Women\'s Wear',

//   },
//   {
//    id: 11,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (11).png',
//     price: 395,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 12,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (12).png',
//     price: 275,
//     gender: 'Men\'s Wear',
//   },

//   {
//     id: 13,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (13).png',
//     price: 255,
//     gender: 'Men\'s Wear',

//   },
//   {
//    id: 14,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (14).png',
//     price: 475,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 15,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (15).png',
//     price: 277,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 16,
//     name: 'Nike Dri-FIT UV Hyverse',
//     image: '/Rectangle (16).png',
//     price: 1107 ,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 17,
//     name: 'Nike Court Vision Low Next Nature',
//     image: '/Rectangle (17).png',
//     price: 499,
//     gender: 'Men\'s Wear',
//   },
//   {
//     id: 18,
//     name: 'Nike Air Force 1 PLAT-FORM',
//     image: '/Rectangle (18).png',
//     price: 699,
//     gender: 'Men\'s Wear',

//   },
//   {
//     id: 19,
//     name: 'Nike Air Force 1 Shadow',
//     image: '/Rectangle (19).png',
//     price: 905,
//     gender: 'Men\'s Wear',

//   },
//   {
//     id: 20,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (20).png',
//     price: 225,
//     gender: 'Women\'s Wear',

//   },
//   {
//    id: 21,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (21).png',
//     price: 365,
//     gender: 'Men\'s Wear',
//   },
//   {
//    id: 22,
//     name: 'Nike Sportswear Tank',
//     image: '/Rectangle (22).png',
//     price: 754,
//     gender: 'Men\'s Wear',
//   },
// ];

// const men: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white rounded-lg shadow-md overflow-hidden"
//         >
//           <div className="relative h-[553]">
//             <Image
//               src={product.image}
//               alt={product.name}

//               objectFit="cover"
//               width={348}
//               height={348}
//             />
//           </div>
//           <div className="p-4">
//             <h2 className='text-[#9E3500]'>Just In</h2>
//             <h3 className="text-lg font-medium">{product.name}</h3>
//             <h2 className='text-gray-500' >{product.gender}</h2>
//             <p className="text-gray-700 font-bold">€{product.price.toFixed(2)}</p>
//           </div>
//         </div>
//       ))}
//       <More/>
//     </div>
//   );
// };

// export default men;

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
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import { Product } from "../../lib/types";

// const men: React.FC = () => {
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

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">{error}</div>;
//   if (products.length === 0) return <div className="p-4">No products found</div>;

//   return (
//     <div className="relative mt-10 px-10">
//       <h1 className="text-lg px-4 font-semibold mb-4">Best of Air Max</h1>

//       <div className="overflow-hidden">

//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex  w-full md:w-1/2 lg:w-1/3 px-4"
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

//       <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronLeft className="h-6 w-6 text-gray-800" />
//         </button>
//         <button
//           className="bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none"
//         >
//           <FaChevronRight className="h-6 w-6 text-gray-800" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default men;

// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import { Product } from "../../types/types";
// import { FiX, FiChevronDown } from "react-icons/fi";
// import Head from "next/head";

// // export const revalidate = 30;

// const colorMap: { [key: string]: string } = {
//   red: "#FF0000",
//   blue: "#0000FF",
//   black: "#000000",
//   white: "#FFFFFF",
//   green: "#008000",
//   yellow: "#FFFF00",
// };

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
//   const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
//   const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
//   const [isDesktopFiltersOpen, setIsDesktopFiltersOpen] = useState(true);
//   const [sortBy, setSortBy] = useState("price-asc");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "product"] {
//           _id,
//           productName,
//           price,
//           category,
//           status,
//           colors,
//           description,
//           image
//         }
//       `;
//       const data = await client.fetch(query);
//       setProducts(data);

//       if (data.length > 0) {
//         const prices = data.map((p: Product) => p.price);
//         setPriceRange([Math.min(...prices), Math.max(...prices)]);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const { categories, colors, statuses } = useMemo(
//     () => ({
//       categories: Array.from(new Set(products.map((p) => p.category))),
//       colors: Array.from(new Set(products.flatMap((p) => p.colors || []))),
//       statuses: Array.from(
//         new Set(products.map((p) => p.status).filter(Boolean)),
//       ) as string[],
//     }),
//     [products],
//   );

//   const filteredProducts = useMemo(() => {
//     let filtered = products.filter((product) => {
//       const matchesCategory =
//         selectedCategories.length === 0 ||
//         selectedCategories.includes(product.category);
//       const matchesColor =
//         selectedColors.length === 0 ||
//         product.colors?.some((c) => selectedColors.includes(c));
//       const matchesPrice =
//         product.price >= priceRange[0] && product.price <= priceRange[1];
//       const matchesStatus =
//         selectedStatus.length === 0 ||
//         selectedStatus.includes(product.status || "");

//       return matchesCategory && matchesColor && matchesPrice && matchesStatus;
//     });

//     switch (sortBy) {
//       case "price-asc":
//         return filtered.sort((a, b) => a.price - b.price);
//       case "price-desc":
//         return filtered.sort((a, b) => b.price - a.price);
//       case "name-asc":
//         return filtered.sort((a, b) =>
//           a.productName.localeCompare(b.productName),
//         );
//       case "name-desc":
//         return filtered.sort((a, b) =>
//           b.productName.localeCompare(a.productName),
//         );
//       default:
//         return filtered;
//     }
//   }, [
//     products,
//     selectedCategories,
//     selectedColors,
//     priceRange,
//     selectedStatus,
//     sortBy,
//   ]);

//   const toggleFilter = (
//     value: string,
//     selected: string[],
//     setSelected: React.Dispatch<React.SetStateAction<string[]>>,
//   ) => {
//     setSelected((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value],
//     );
//   };

//   const FilterContent = () => (
  
//     <div className="space-y-8">
//       {/* Category Filter */}
//       <div>
//         <h3 className="font-semibold mb-4">Category</h3>
//         <div className="space-y-2">
//           {categories.map((category) => (
//             <label key={category} className="flex items-center gap-3">
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(category)}
//                 onChange={() =>
//                   toggleFilter(
//                     category,
//                     selectedCategories,
//                     setSelectedCategories,
//                   )
//                 }
//                 className="w-5 h-5 accent-black"
//               />
//               <span>{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Color Filter */}
//       <div>
//         <h3 className="font-semibold mb-4">Color</h3>
//         <div className="flex flex-wrap gap-3">
//           {colors.map((color) => (
//             <button
//               key={color}
//               onClick={() =>
//                 toggleFilter(color, selectedColors, setSelectedColors)
//               }
//               className={`w-10 h-10 rounded-full border-2 transition-all ${
//                 selectedColors.includes(color)
//                   ? "border-black scale-110"
//                   : "border-gray-200"
//               }`}
//               style={{
//                 backgroundColor: colorMap[color.toLowerCase()] || color,
//               }}
//               title={color}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Price Filter */}
//       <div>
//         <h3 className="font-semibold mb-4">Price Range</h3>
//         <div className="space-y-4">
//           <div className="flex justify-between text-sm">
//             <span>€{priceRange[0].toFixed(2)}</span>
//             <span>€{priceRange[1].toFixed(2)}</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="range"
//               min={Math.min(...products.map((p) => p.price))}
//               max={Math.max(...products.map((p) => p.price))}
//               value={priceRange[0]}
//               onChange={(e) =>
//                 setPriceRange([Number(e.target.value), priceRange[1]])
//               }
//               className="w-full"
//             />
//             <input
//               type="range"
//               min={Math.min(...products.map((p) => p.price))}
//               max={Math.max(...products.map((p) => p.price))}
//               value={priceRange[1]}
//               onChange={(e) =>
//                 setPriceRange([priceRange[0], Number(e.target.value)])
//               }
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Status Filter */}
//       <div>
//         <h3 className="font-semibold mb-4">Status</h3>
//         <div className="space-y-2">
//           {statuses.map((status) => (
//             <label key={status} className="flex items-center gap-3">
//               <input
//                 type="checkbox"
//                 checked={selectedStatus.includes(status)}
//                 onChange={() =>
//                   toggleFilter(status, selectedStatus, setSelectedStatus)
//                 }
//                 className="w-5 h-5 accent-black"
//               />
//               <span>{status}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="relative mt-10 px-4 lg:px-10">
//         {/* Mobile Filters Overlay */}
//         <div
//           className={`fixed inset-0 bg-white z-50 p-6 transform transition-transform duration-300 lg:hidden
//           ${isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">Filters</h2>
//             <button onClick={() => setIsMobileFiltersOpen(false)}>
//               <FiX size={24} />
//             </button>
//           </div>
//           <FilterContent />
//         </div>

//         {/* Main Content */}
//         <div className="flex gap-8">
//           {/* Desktop Filters Sidebar */}
//           <div
//             className={`hidden lg:block transition-all duration-300 ${
//               isDesktopFiltersOpen
//                 ? "w-72 opacity-100"
//                 : "w-0 opacity-0 overflow-hidden"
//             }`}
//           >
//             <h2 className="text-2xl font-bold mb-6">Filters</h2>
//             <FilterContent />
//           </div>

//           {/* Products Grid */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className=" text-xs md:text-2xl font-bold ">
//                 Best of Air Max
//               </h1>

//               <div className="flex items-center gap-4">
//                 {/* Mobile Filter Button */}
//                 {/* <button
//                   className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
//                   onClick={() => setIsMobileFiltersOpen(true)}
//                 ></button> */}

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                   className="icon-filter-ds"
//                   focusable="false"
//                   viewBox="0 0 24 24"
//                   role="img"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   onClick={() => setIsMobileFiltersOpen(true)}
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     d="M21 8.25H10m-5.25 0H3"
//                   />
//                   <path
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
//                     clipRule="evenodd"
//                   />
//                   <path
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     d="M3 15.75h10.75m5 0H21"
//                   />
//                   <path
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
//                     clipRule="evenodd"
//                   />
//                 </svg>

//                 <button
//                   className="hidden lg:flex items-center gap-2 px-4 py-2"
//                   onClick={() => {
//                     setIsDesktopFiltersOpen(!isDesktopFiltersOpen);
//                   }}
//                 >
//                   {isDesktopFiltersOpen ? "Hide Filters" : "Show Filters"}
//                   <FiChevronDown
//                     className={`transform transition-transform ${
//                       isDesktopFiltersOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div className="relative">
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="appearance-no pl-4 pr-8 py-2 text-sm"
//                   >
//                     <option value="price-asc">Price: Low to High</option>
//                     <option value="price-desc">Price: High to Low</option>
//                     <option value="name-asc">Name: A-Z</option>
//                     <option value="name-desc">Name: Z-A</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div
//               className={`grid grid-cols-2 gap-4 ${
//                 isDesktopFiltersOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
//               }`}
//             >
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
//                 >
//                   <Link href={`/product/${product._id}`}>
//                     <div className="relative aspect-square">
//                       <Image
//                         src={
//                           product.image
//                             ? urlFor(product.image).url()
//                             : "/placeholder.png"
//                         }
//                         alt={product.productName}
//                         fill
//                         className="object-cover rounded-t-lg"
//                         sizes="(max-width: 768px) 50vw, 33vw"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <span className="text-xs font-semibold text-red-600">
//                         {product.status}
//                       </span>
//                       <div className="justify-between mt-2">
//                         <div>
//                           <h3 className=" text-xs font-bold text-gray-800">
//                             {product.productName}
//                           </h3>
//                           <p className="text-sm text-gray-500">
//                             {product.category}
//                           </p>
//                         </div>
//                         <p className="font-semibold">
//                           €{product.price.toFixed(2)}
//                         </p>
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         {product.colors?.map((color) => (
//                           <div
//                             key={color}
//                             className="w-4 h-4 rounded-full border border-gray-200"
//                             style={{
//                               backgroundColor:
//                                 colorMap[color.toLowerCase()] || color,
//                             }}
//                             title={color}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;




"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { Product } from "../../types/types";
import { FiX, FiChevronDown } from "react-icons/fi";

const colorMap: { [key: string]: string } = {
  red: "#FF0000",
  blue: "#0000FF",
  black: "#000000",
  white: "#FFFFFF",
  green: "#008000",
  yellow: "#FFFF00",
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isDesktopFiltersOpen, setIsDesktopFiltersOpen] = useState(true);
  const [sortBy, setSortBy] = useState("price-asc");

  // Prevent body scroll when mobile filters are open
  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"] {
          _id,
          productName,
          price,
          category,
          status,
          colors,
          description,
          image
        }
      `;
      const data = await client.fetch(query);
      setProducts(data);

      if (data.length > 0) {
        const prices = data.map((p: Product) => p.price);
        setPriceRange([Math.min(...prices), Math.max(...prices)]);
      }
    };

    fetchProducts();
  }, []);

  const { categories, colors, statuses } = useMemo(
    () => ({
      categories: Array.from(new Set(products.map((p) => p.category))),
      colors: Array.from(new Set(products.flatMap((p) => p.colors || []))),
      statuses: Array.from(
        new Set(products.map((p) => p.status).filter(Boolean)),
      ) as string[],
    }),
    [products],
  );

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRange([
      Math.min(...products.map((p) => p.price)),
      Math.max(...products.map((p) => p.price)),
    ]);
    setSelectedStatus([]);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesColor =
        selectedColors.length === 0 ||
        product.colors?.some((c) => selectedColors.includes(c));
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesStatus =
        selectedStatus.length === 0 ||
        selectedStatus.includes(product.status || "");

      return matchesCategory && matchesColor && matchesPrice && matchesStatus;
    });

    switch (sortBy) {
      case "price-asc":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.sort((a, b) => b.price - a.price);
      case "name-asc":
        return filtered.sort((a, b) =>
          a.productName.localeCompare(b.productName),
        );
      case "name-desc":
        return filtered.sort((a, b) =>
          b.productName.localeCompare(a.productName),
        );
      default:
        return filtered;
    }
  }, [
    products,
    selectedCategories,
    selectedColors,
    priceRange,
    selectedStatus,
    sortBy,
  ]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Clear Filters Button */}
      <button
        onClick={clearAllFilters}
        className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Clear All Filters
      </button>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  toggleFilter(
                    category,
                    selectedCategories,
                    setSelectedCategories,
                  )
                }
                className="w-5 h-5 accent-black"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                toggleFilter(color, selectedColors, setSelectedColors)
              }
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColors.includes(color)
                  ? "border-black scale-110"
                  : "border-gray-200"
              }`}
              style={{
                backgroundColor: colorMap[color.toLowerCase()] || color,
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>€{priceRange[0].toFixed(2)}</span>
            <span>€{priceRange[1].toFixed(2)}</span>
          </div>
          <div className="flex gap-4">
            <input
              type="range"
              min={Math.min(...products.map((p) => p.price))}
              max={Math.max(...products.map((p) => p.price))}
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="w-full accent-black"
            />
            <input
              type="range"
              min={Math.min(...products.map((p) => p.price))}
              max={Math.max(...products.map((p) => p.price))}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full accent-black"
            />
          </div>
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <h3 className="font-semibold mb-4">Status</h3>
        <div className="space-y-2">
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedStatus.includes(status)}
                onChange={() =>
                  toggleFilter(status, selectedStatus, setSelectedStatus)
                }
                className="w-5 h-5 accent-black"
              />
              <span>{status}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative mt-10 px-4 lg:px-10">
      {/* Mobile Filters Overlay */}
      {isMobileFiltersOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileFiltersOpen(false)}
        />
      )}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 lg:hidden overflow-y-auto
        ${isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="sticky top-0 bg-white z-10 p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <FilterContent />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        <div
          className={`hidden lg:block transition-all duration-300 ${
            isDesktopFiltersOpen
              ? "w-72 opacity-100"
              : "w-0 opacity-0 overflow-hidden"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Filters</h2>
          <FilterContent />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xs md:text-2xl font-bold">
              Best of Air Max ({filteredProducts.length} Products)
            </h1>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileFiltersOpen(true)}
                aria-label="Open filters"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 8.25H10m-5.25 0H3" />
                  <path d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                  <path d="M3 15.75h10.75m5 0H21" />
                  <path d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                </svg>
              </button>

              <button
                className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsDesktopFiltersOpen(!isDesktopFiltersOpen)}
              >
                {isDesktopFiltersOpen ? "Hide Filters" : "Show Filters"}
                <FiChevronDown
                  className={`transform transition-transform ${
                    isDesktopFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg appearance-none bg-white hover:bg-gray-50 cursor-pointer"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 ${
              isDesktopFiltersOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {filteredProducts.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product._id}`}
                className="bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={
                      product.image
                        ? urlFor(product.image).url()
                        : "/placeholder.png"
                    }
                    alt={product.productName}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  {product.status && (
                    <span className="text-xs font-semibold text-red-600">
                      {product.status}
                    </span>
                  )}
                  <div className="mt-2">
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2">
                      {product.productName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.category}
                    </p>
                    <p className="font-semibold mt-2">
                      €{product.price.toFixed(2)}
                    </p>
                  </div>
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-gray-200"
                          style={{
                            backgroundColor:
                              colorMap[color.toLowerCase()] || color,
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900">
                No products found
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;