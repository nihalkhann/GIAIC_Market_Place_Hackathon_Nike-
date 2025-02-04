"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getWishlistItemCount } from "@/app/CartFunction/wishlist";

const WishlistIndicator = () => {
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  useEffect(() => {
    const updateWishlistCount = () => {
      const count = getWishlistItemCount();
      setWishlistCount(count);
    };

    updateWishlistCount();

    window.addEventListener("wishlistUpdated", updateWishlistCount);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
    };
  }, []);

  return (
    <div className="relative flex items-center group">
      <Link
        href="/wishlist"
        className="relative inline-block"
        aria-label="Wishlist"
      >
        {/* <Heart className="text-gray-800 w-6 h-6 transition-transform group-hover:scale-110" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
          />
        </svg>

        {wishlistCount > 0 && (
          <span className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium text-gray-800 py-[2px] px-[2px]">
            {wishlistCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default WishlistIndicator;
