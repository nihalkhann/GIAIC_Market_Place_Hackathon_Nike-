import React from "react";
import Link from "next/link";

interface MenuItem {
  text: string;
  href: string;
}

interface Category {
  title: string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    title: "Featured",
    items: [
      { text: "Air Force 1", href: "/air-force-1" },
      { text: "Jordan 1", href: "/jordan-1" },
      { text: "Metcon", href: "/metcon" },
      { text: "Air Max 270", href: "/air-max-270" },
    ],
  },
  {
    title: "Shoes",
    items: [
      { text: "All Shoes", href: "/shoes" },
      { text: "Jordan Shoes", href: "/jordan-shoes" },
      { text: "Running Shoes", href: "/running-shoes" },
      { text: "Basketball Shoes", href: "/basketball-shoes" },
    ],
  },
  {
    title: "Clothing",
    items: [
      { text: "All Clothing", href: "/clothing" },
      { text: "Tops & T-Shirts", href: "/tops" },
      { text: "Shorts", href: "/shorts" },
      { text: "Hoodies & Pullovers", href: "/hoodies" },
    ],
  },
  {
    title: "Kids",
    items: [
      { text: "Infant & Toddler Shoes", href: "/kids/infant-toddler" },
      { text: "Kids Shoes", href: "/kids/shoes" },
      { text: "Kids Basketball Shoes", href: "/kids/basketball" },
      { text: "Kids Running Shoes", href: "/kids/running" },
    ],
  },
];

const Navigation: React.FC = () => {
  return (
    <div className="w-full bg-white mt-16 overflow-hidden">
      {/* Nike Logo */}
      <div className="flex justify-center py-3">
        <Link href="/#">
          <svg
            className="w-16 h-auto sm:w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7277 12.1511C15.999 12.598 14.4241 12.8196 13.0469 12.8196C11.3396 12.8196 9.94617 12.4728 8.97074 11.7793C4.02962 8.28845 8.54956 0.885548 9.06118 0.0629324C6.88551 2.37923 4.65235 4.80341 2.89851 7.44593C-0.0575023 11.9597 -0.812655 16.2475 0.910825 18.906C2.23896 20.9642 4.40042 22 7.37517 22C10.0146 22 13.2975 21.1832 17.1928 19.5559L64 0.0173385L63.9981 0L17.7277 12.1511Z"
              fill="#111111"
            />
          </svg>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center text-sm sm:text-base font-bold items-center space-x-4 sm:space-x-8 px-4 py-2 mt-5">
        <Link href="/findstore" className="hover:text-gray-800">
          Find a Store
        </Link>
        <Link href="/help" className="hover:text-gray-800">
          Help
        </Link>
        <Link href="/joinus" className="hover:text-gray-800">
          Join Us
        </Link>
        <Link href="/login" className="hover:text-gray-800">
          Sign In
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-lg sm:text-xl font-medium mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-black text-sm sm:text-base"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
