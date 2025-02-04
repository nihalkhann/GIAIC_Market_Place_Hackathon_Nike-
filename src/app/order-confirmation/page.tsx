"use client"; // Ensure client-side rendering

import { CheckCircle } from "lucide-react";
import Link from "next/link"; // Correct import for Next.js Link
import { useSearchParams } from "next/navigation"; // Correct import for search params in client-side components

const OrderConfirmation = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl font-medium mb-2">Your Order is Confirmed</p>
          <p className="text-gray-600 mb-4">
            We'll send you a shipping confirmation email when your order ships.
          </p>
        </div>

        <div className="space-y-4">
          {" "}
          {/* Fixed class typo from `space--4` to `space-y-4` */}
          <Link
            href="/"
            className="block w-full border border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need Help?{" "}
            <Link href="/help" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
