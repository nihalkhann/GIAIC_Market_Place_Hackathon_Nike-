"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getWishlistItems,
  removeFromWishlist,
} from "@/app/CartFunction/wishlist";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "sonner";
import { Product } from "@/types/types";



export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    const updateWishlist = () => {
      const items = getWishlistItems();
      setWishlistItems(items);
    };

    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
    };
  }, []);

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
    toast.error("Item removed from wishlist");
  };

  const handleAddToCart = (product: Product) => {
    
    removeFromWishlist(product._id);
    toast.success("Item moved to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-4">Your wishlist is empty</p>
            <Link
              href="/"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 flex flex-col"
              >
                <Image
                  src={
                    item.image ? urlFor(item.image).url() : "/placeholder.png"
                  }
                  alt={item.productName}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="flex-grow">
                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-lg font-bold mt-2">
                    €{item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-full hover:bg-gray-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
