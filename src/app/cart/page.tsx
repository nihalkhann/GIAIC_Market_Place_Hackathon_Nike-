

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Heart, Trash2, Minus, Plus, ChevronDown } from "lucide-react";
import {
  getCartItems,
  removeFromCart,
  updateCartQty,
  getCartTotal,
} from "@/app/CartFunction/function";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/types";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    setIsLoading(false);
  }, []);



  const handleRemove = (id: string) => {
    removeFromCart(id);
    const updatedItems = getCartItems();
    setCartItems(updatedItems);
    toast.error("Item removed from bag");
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartQty(id, quantity);
      setCartItems(getCartItems());
    } else {
      handleRemove(id);
    }
    toast.success("Quantity updated");
  };

  const getDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 20);
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const router = useRouter();
  const totalPrice = getCartTotal();
  const TAX_RATE = 0;
  const FREE_SHIPPING_THRESHOLD = 50;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Bag</h1>
          <span className="text-gray-500">{cartItems.length} items</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl mb-4">Your bag is empty</h3>
                <Link
                  href="/products"
                  className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Shop New Arrivals
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item._id} className="border-b pb-6">
                    <div className="flex gap-6">
                      <div className="w-28 h-28 relative flex-shrink-0">
                        <Image
                          src={
                            item.image
                              ? urlFor(item.image).url()
                              : "/placeholder.png"
                          }
                          alt={item.productName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{item.productName}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.category}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.colors.join("/")}
                            </p>
                          </div>
                          <span className="font-medium">
                            €{item.price.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border rounded-full">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item._id,
                                    item.inventory - 1,
                                  )
                                }
                                className="p-2"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center">
                                {item.inventory}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item._id,
                                    item.inventory + 1,
                                  )
                                }
                                className="p-2"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => handleRemove(item._id)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              <Heart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h3 className="font-medium mb-4">Shipping</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Arrives by {getDeliveryDate()}</p>
                <Link href="#" className="text-gray-900 underline">
                  Edit Location
                </Link>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-gray-900 underline">
                  Find a Store
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Summary</h2>

              <button
                onClick={() => setIsPromoOpen(!isPromoOpen)}
                className="w-full flex items-center justify-between py-4 border-b"
              >
                <span>Do you have a Promo Code?</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${isPromoOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div className="space-y-4 py-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping & Handling</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>—</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-6">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">
                    €{(totalPrice * (1 + TAX_RATE)).toFixed(2)}
                  </span>
                </div>

                {totalPrice > FREE_SHIPPING_THRESHOLD && (
                  <div className="mb-6">
                    <p className="text-green-600 text-sm">
                      You qualify for free shipping!
                    </p>
                    <div className="w-full bg-green-100 rounded-full h-2 mt-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-right text-sm mt-1">
                      €{FREE_SHIPPING_THRESHOLD}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
