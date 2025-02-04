import React from 'react';
import Image from 'next/image';
import More from '@/components/More';

// Product data
const products = [
  {
    id: 1,
    name: 'Nike Dri-FIT UV Hyverse',
    image: '/Image (6).png',
    price: 107 ,
    gender: 'Men\'s Wear',
  },
  {
    id: 2,
    name: 'Nike Court Vision Low Next Nature',
    image: '/Image (7).png',
    price: 499,
    gender: 'Men\'s Wear',
  },
  {
    id: 3,
    name: 'Nike Air Force 1 PLAT-FORM',
    image: '/Image (8).png',
    price: 685,
    gender: 'Women\'s Wear',
    
  },
  {
    id: 4,
    name: 'Nike Air Force 1 Shadow',
    image: '/Image (9).png',
    price: 905,
    gender: 'Men\'s Wear',
    

  },
  {
    id: 5,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (1).png',
    price: 225,
    gender: 'Men\'s Wear',
    
  },
  {
   id: 6,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (2).png',
    price: 495,
    gender: 'Men\'s Wear',
  },
  {
   id: 7,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (3).png',
    price: 275,
    gender: 'Men\'s Wear',
  },
  {
    id: 8,
    name: 'Nike Dri-FIT UV Hyverse',
    image: '/Rectangle (6).png',
    price: 1107 ,
    gender: 'Men\'s Wear',
  },
  {
    id: 9,
    name: 'Nike Court Vision Low Next Nature',
    image: '/Rectangle (7).png',
    price: 489,
    gender: 'Men\'s Wear',
  },
  {
    id: 10,
    name: 'Nike Air Force 1 PLAT-FORM',
    image: '/Rectangle (8).png',
    price: 685,
    gender: 'Women\'s Wear',
    
  },
  {
    id: 9,
    name: 'Nike Air Force 1 Shadow',
    image: '/Rectangle (9).png',
    price: 905,
    gender: 'Men\'s Wear',
    

  },
  {
    id: 10,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (10).png',
    price: 225,
    gender: 'Women\'s Wear',
    
  },
  {
   id: 11,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (11).png',
    price: 395,
    gender: 'Men\'s Wear',
  },
  {
   id: 12,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (12).png',
    price: 275,
    gender: 'Men\'s Wear',
  },
  
  {
    id: 13,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (13).png',
    price: 255,
    gender: 'Men\'s Wear',
    
  },
  {
   id: 14,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (14).png',
    price: 475,
    gender: 'Men\'s Wear',
  },
  {
   id: 15,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (15).png',
    price: 277,
    gender: 'Men\'s Wear',
  },
  {
    id: 16,
    name: 'Nike Dri-FIT UV Hyverse',
    image: '/Rectangle (16).png',
    price: 1107 ,
    gender: 'Men\'s Wear',
  },
  {
    id: 17,
    name: 'Nike Court Vision Low Next Nature',
    image: '/Rectangle (17).png',
    price: 499,
    gender: 'Men\'s Wear',
  },
  {
    id: 18,
    name: 'Nike Air Force 1 PLAT-FORM',
    image: '/Rectangle (18).png',
    price: 699,
    gender: 'Men\'s Wear',
    
  },
  {
    id: 19,
    name: 'Nike Air Force 1 Shadow',
    image: '/Rectangle (19).png',
    price: 905,
    gender: 'Men\'s Wear',
    

  },
  {
    id: 20,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (20).png',
    price: 225,
    gender: 'Women\'s Wear',
    
  },
  {
   id: 21,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (21).png',
    price: 365,
    gender: 'Men\'s Wear',
  },
  {
   id: 22,
    name: 'Nike Sportswear Tank',
    image: '/Rectangle (22).png',
    price: 754,
    gender: 'Men\'s Wear',
  },
];

const sale: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-[553]">
            <Image
              src={product.image}
              alt={product.name}
              
              objectFit="cover"
              width={348}
              height={348}
            />
          </div>
          <div className="p-4">
            <h2 className='text-[#9E3500]'>Just In</h2>
            <h3 className="text-lg font-medium">{product.name}</h3>
            <h2 className='text-gray-500' >{product.gender}</h2>
            <p className="text-gray-700 font-bold">€{product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <More/>
    </div>
  );
};

export default sale;