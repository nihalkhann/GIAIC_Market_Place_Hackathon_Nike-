"use client"
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Product } from "../types/types";
import { searchProducts } from "@/sanity/lib/search";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const popularSearchTerms = [
    "Air Force 1",
    "air max",
    "Metcon 8",
    "basketball",
    "jordan",
    "Zoom Fly 5",
    "Dunk Low",
    "Pegasus",
    "run",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length >= 1) {
      setLoading(true);
      const products = await searchProducts(searchTerm);
      setResults(products);
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  const handleTermClick = (term: string) => {
    setQuery(term);
    handleSearch({
      target: { value: term },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleProductClick = (productId: string) => {
    onClose();
    router.push(`/product/${productId}`);
  };

  const containerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const resultsAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const productAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full bg-white max-h-[80vh] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Header */}
              <div className="py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center bg-gray-100 rounded-full max-w-3xl mx-auto">
                    {/* <CgSearch  /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      role="img"
                      width="24px"
                      height="24px"
                      fill="none"
                      className="text-gray-500 w-5 h-5 ml-4"
                    >
                      <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                      ></path>
                    </svg>

                    <input
                      type="text"
                      placeholder="Search"
                      value={query}
                      onChange={handleSearch}
                      className="w-full bg-transparent px-3 py-2 focus:outline-none text-base"
                      autoFocus
                    />
                    {query && (
                      <button
                        onClick={() => setQuery("")}
                        className="p-2 hover:text-gray-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <button onClick={onClose} className="text-sm font-medium">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Results Area */}
              <motion.div
                variants={resultsAnimation}
                className="overflow-y-auto"
                style={{ maxHeight: "calc(80vh - 80px)" }}
              >
                {!query && (
                  <div className="max-w-3xl mx-auto pb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-4">
                      Popular Search Terms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularSearchTerms.map((term) => (
                        <button
                          key={term}
                          onClick={() => handleTermClick(term)}
                          className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {query && !loading && (
                  <div className="pb-6">
                    {results.length > 0 ? (
                      <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-4">
                          Products
                        </h3>
                        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                          {results.map((product) => (
                            <motion.div
                              key={product._id}
                              variants={productAnimation}
                              onClick={() => handleProductClick(product._id)}
                              className="flex-none w-[200px] cursor-pointer group"
                            >
                              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                  <Image
                                    src={
                                      product.image
                                        ? urlFor(product.image).url()
                                        : "/placeholder.png"
                                    }
                                    alt={product.productName}
                                    width={200} // Specify the width
                                    height={200} // Specify the height
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              <div className="mt-3">
                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                  {product.productName}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {product.category}
                                </p>
                                <p className="text-sm text-gray-700">
                                  €{product.price}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">
                          No results found for &quot;{query}&quot;
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {loading && (
                  <div className="py-8 text-center">
                    <p className="text-gray-500">Searching...</p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;