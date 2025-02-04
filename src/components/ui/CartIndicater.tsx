// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// const CartIndicator = () => {
//   const [cartItemCount, setCartItemCount] = useState<number>(0);

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const totalCount = cart.reduce(
//         (total: number, item: any) => total + (item.inventory || 0),
//         0,
//       );
//       setCartItemCount(totalCount);
//     };

//     // Initial count
//     updateCartCount();

//     // Custom function to modify localStorage and trigger update
//     const originalSetItem = localStorage.setItem;
//     localStorage.setItem = function (key, value) {
//       const event = new Event("localStorageChanged");
//       originalSetItem.apply(this, arguments as any);
//       window.dispatchEvent(event);
//     };

//     // Listen for localStorage changes
//     const handleStorageChange = () => {
//       updateCartCount();
//     };

//     window.addEventListener("localStorageChanged", handleStorageChange);

//     return () => {
//       window.removeEventListener("localStorageChanged", handleStorageChange);
//       localStorage.setItem = originalSetItem;
//     };
//   }, []);

//   return (
//     <div className="relative flex items-center group">
//       <Link
//         href="/cart"
//         className="relative inline-block"
//         aria-label="Shopping Cart"
//       >
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           // className="text-gray-800 w-6 h-6 font-bold transition-transform group-hover:scale-110"
//           >
//           {cartItemCount > 0 && (
//             <span className="absolute -top-3 -right-2 bg-transparent text-black text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
//               {cartItemCount}
//             </span>
//           )}
//           <path
//             d="M5.25 5.25V3C5.25 2.40326 5.48705 1.83097 5.90901 1.40901C6.33097 0.987053 6.90326 0.75 7.5 0.75H10.5C11.0967 0.75 11.669 0.987053 12.091 1.40901C12.5129 1.83097 12.75 2.40326 12.75 3C12.75 3.59674 12.5129 4.16903 12.091 4.59099C11.669 5.01295 11.0967 5.25 10.5 5.25H0.75V13.5C0.75 14.4946 1.14509 15.4484 1.84835 16.1517C2.55161 16.8549 3.50544 17.25 4.5 17.25H13.5C14.4946 17.25 15.4484 16.8549 16.1517 16.1517C16.8549 15.4484 17.25 14.4946 17.25 13.5V5.25H14.5"
//             stroke="#111111"
//             strokeWidth="1.5" // Corrected from stroke-width to strokeWidth
//           />
//         </svg>
//       </Link>
//     </div>
//   );
// };

// export default CartIndicator;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const revalidate = 30;
const CartIndicator = () => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalCount = cart.reduce(
        (total: number, item: any) => total + (item.inventory || 0),
        0,
      );
      setCartItemCount(totalCount);
    };

    // Initial count
    updateCartCount();

    // Custom function to modify localStorage and trigger update
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      const event = new Event("localStorageChanged");
      originalSetItem.apply(this, arguments as any);
      window.dispatchEvent(event);
    };

    // Listen for localStorage changes
    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("localStorageChanged", handleStorageChange);

    return () => {
      window.removeEventListener("localStorageChanged", handleStorageChange);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <Link href="/cart" className="relative" aria-label="Shopping Cart">
        <div className="relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-800"
          >
            <path
              d="M5.25 5.25V3C5.25 2.40326 5.48705 1.83097 5.90901 1.40901C6.33097 0.987053 6.90326 0.75 7.5 0.75H10.5C11.0967 0.75 11.669 0.987053 12.091 1.40901C12.5129 1.83097 12.75 2.40326 12.75 3C12.75 3.59674 12.5129 4.16903 12.091 4.59099C11.669 5.01295 11.0967 5.25 10.5 5.25H0.75V13.5C0.75 14.4946 1.14509 15.4484 1.84835 16.1517C2.55161 16.8549 3.50544 17.25 4.5 17.25H13.5C14.4946 17.25 15.4484 16.8549 16.1517 16.1517C16.8549 15.4484 17.25 14.4946 17.25 13.5V5.25H14.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          {cartItemCount > 0 && (
            <span className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium text-gray-800 py-[2px] px-[2px]">
              {cartItemCount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartIndicator;