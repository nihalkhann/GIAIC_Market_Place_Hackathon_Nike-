// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Product } from "@/types/types";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQty,
// } from "../CartFunction/function";
// import { toast } from "sonner";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";

// export default function Cart() {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // const [quantity, setQuantity] = useState(0);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     removeFromCart(id);
//     setCartItems(getCartItems());
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQty(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1)
//       handleQuantityChange(id, product.inventory - 1);
//   };

//   const totalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.inventory,
//       0,
//     );
//   };

//   const handleProceed = () => {
//     setCartItems([]);
//     toast("Proceeding to checkout!");
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="max-w-5xl w-full bg-white p-6">
//         {/* Free Delivery Section */}
//         <div className="mt-6 text-sm bg-[#F5F5F5] text-gray-800 p-8">
//           Free Delivery applies to orders of € 1000 or more{" "}
//           <Link href="#" className="text-blue-500 hover:underline">
//             View details
//           </Link>
//         </div>
//         {/* Bag Section */}
//         <div className="grid grid-cols-3 gap-6">
//           {/* Bag Items */}
//           <div className="col-span-2">
//             <h2 className="text-lg font-bold mb-4">Bag</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex items-center justify-between border-b pb-4 mb-4"
//                 >
//                   <Image
//                     src={
//                       item.image ? urlFor(item.image).url() : "/placeholder.png"
//                     }
//                     alt={item.productName}
//                     width={96}
//                     height={96}
//                     className="w-24 h-24 rounded-md border"
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="font-medium text-gray-800">
//                       {item.productName}
//                     </h3>
//                     <p className="text-sm text-gray-600">{item.category}</p>
//                     <p className="text-sm text-gray-600">{item.inventory}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         className="px-2 py-1 border rounded-lg"
//                         onClick={() => handleDecrement(item._id)}
//                         // disabled={quantity >= (item.inventory || 1)}
//                       >
//                         -
//                       </button>
//                       <span>{item.inventory}</span>
//                       <button
//                         className="px-2 py-1 border rounded-lg"
//                         onClick={() => handleIncrement(item._id)}
//                         // disabled={quantity >= (item.inventory || 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium">
//                       € {item.price * item.inventory}
//                     </p>
//                     <div className="text-sm text-gray-600">
//                       Color:
//                       <span
//                         className="inline-block w-6 h-6 rounded-full items-center"
//                         style={{ backgroundColor: item.colors[0] }}
//                       />
//                     </div>
//                     <button
//                       className="text-sm text-red-500 hover:underline mt-2"
//                       onClick={() => handleRemove(item._id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-600">Your bag is empty.</p>
//             )}
//           </div>

//           {/* Summary Section */}
//           <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
//             <h2 className="text-lg font-bold mb-4">Summary</h2>
//             {cartItems.length > 0 ? (
//               <>
//                 <div className="flex justify-between mb-2">
//                   <p className="text-gray-600">Subtotal</p>
//                   <p className="font-medium">€ {totalPrice()}</p>
//                 </div>
//                 <div className="flex justify-between mb-4">
//                   <p className="text-gray-600">
//                     Estimated Delivery and Handling
//                   </p>
//                   <p className="font-medium">Free</p>
//                 </div>
//                 <div className="flex justify-between text-lg font-bold border-t pt-4">
//                   <p>Total</p>
//                   <p>€ {totalPrice()}</p>
//                 </div>
//                 <button
//                   className="w-full bg-black text-white font-medium py-3 rounded-lg mt-4"
//                   onClick={handleProceed}
//                 >
//                   Member Checkout
//                 </button>
//               </>
//             ) : (
//               <p className="text-gray-600">No items to summarize.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


                        // FINal code

  "use client";

  import React, { useState, useEffect } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { toast } from "sonner";
  import { GoTrash } from "react-icons/go";

  import {
    getCartItems,
    removeFromCart,
    updateCartQty,
    getCartTotal,
  } from "@/app/CartFunction/function";
  import { urlFor } from "@/sanity/lib/image";
  import { Product } from "@/types/types";
  import { useRouter } from "next/navigation";


  export default function Cart() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      const items = getCartItems();
      setCartItems(items);
      setIsLoading(false);
    }, []);
    
    const handleRemove = (id: string) => {
      removeFromCart(id);
      const updatedItems = getCartItems();
      setCartItems(updatedItems);
      toast.error("Item removed from cart");
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
    
    const router = useRouter()
    // const handleProceed = () => {
      //   if (cartItems.length === 0) {
    //     toast.error("Your cart is empty");
    //   } else {
    //     localStorage.removeItem("cartItems");
    //   }
        
    //   router.push("/checkout")
    //   toast.success("Proceeding to checkout!");
    //   setCartItems([])
    // };

    const handleProceed = () => {
      if (cartItems.length === 0) {
        toast.error("Your cart is empty");
        return;
      }
      
      // Clear cart items from local storage
      localStorage.setItem("cartItems", JSON.stringify([]));
      
      // Navigate to checkout
      router.push("/checkout");
      
      // Show success toast
      toast.success("Proceeding to checkout!");

      // Clear local cart state
      setCartItems([]);
    };
    const totalPrice = getCartTotal();
    
    if (isLoading) {
      return <div className="text-center py-10">Loading cart...</div>;
    }
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Your Shopping Bag</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 mb-4">
                There are no items in your bag.
              </p>
              <Link
                href="/"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center border-b pb-4 space-x-4"
                  >
                    <Image
                      src={
                        item.image ? urlFor(item.image).url() : "/placeholder.png"
                      }
                      alt={item.productName}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-grow">
                      <h3 className="font-semibold text-sm md:text-lg">{item.productName}</h3>
                      <p className="text-gray-600">
                        <span className="inline-block w-4 h-4 ml-2 rounded-full">
                          {item.colors.join("/")}
                        </span>
                      </p>
                      <p className="text-gray-600  ml-2 text-sm md:text-lg">
                        {item.category}
                      </p>

                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.inventory - 1)
                          }
                          className="bg-gray-200 px-2 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4 bg-gray-100">{item.inventory}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.inventory + 1)
                          }
                          className="bg-gray-200 px-2 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-sm md:text-lg">
                        €{item.price.toFixed(2)} x {item.inventory}
                      </p>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-white bg-red-600 p-1 rounded-md text-md mt-7"
                      >
                        <GoTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-100 p-6 rounded-lg h-fit">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={handleProceed}
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }



