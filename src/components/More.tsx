import React from 'react';
import Link from 'next/link'
const More: React.FC = () => {
  const categories = [
    'Best Selling Products',
    'Best Shoes',
    'Basketball Shoes',
    'New Football Shoes',
    'New Men\'s Shoes',
    'Best Women\'s Shoes',,
  ];

  return (
    <div>
      <h2 className="text-lg font-medium mb-4 mt-5 px-10">Related Categories</h2>
      <div className="flex">
        {categories.map((category, index) => (
          <div key={index} className="px-7  mb-2 ">
            <Link href="#" className="flex items-center text-center w-[165px]  h-[34px] top-[24px] bg-[#F5F5F5]  rounded-lg text-gray-800">
              {category}
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default More;