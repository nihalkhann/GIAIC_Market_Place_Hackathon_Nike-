import Link from 'next/link';
import React from 'react';

interface PromoItem {
  id: number;
  title: string;
  subtitle: string;
  smallText?: string;
  buttonText: string;
  imageUrl: string;
}

const promoItems: PromoItem[] = [
  {
    id: 1,
    title: "It Doesn't Happen Overnight. Until It Does.",
    subtitle: "Congratulations Madison Keys",
    smallText: "CHAMPION IN MELBOURNE",
    buttonText: "Shop",
    imageUrl: "/hero1.jpg",
  },
  {
    id: 2,
    title: "Run Ready",
    subtitle: "Essentials for Your Every Mile",
    buttonText: "Shop",
    imageUrl: "/hero2.jpg",
  },
  {
    id: 3,
    title: "New in Nike Soccer",
    subtitle: "Mad Energy Can't Be Stopped",
    buttonText: "Shop",
    imageUrl: "/hero3.jpg",
  },
  {
    id: 4,
    title: "LeBron 'LimeLight'",
    subtitle: "New in Basketball",
    buttonText: "Shop",
    imageUrl: "/hero4.jpg",
  },
];

const HeroTwo = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {promoItems.map((item) => (
          <div key={item.id} className="relative overflow-hidden aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
              <div className="absolute bottom-8 left-6 text-white">
                {item.smallText && (
                  <span className="text-xs font-medium uppercase tracking-wider mb-1 block">
                    {item.smallText}
                  </span>
                )}
                <p className="text-sm font-medium mb-1">{item.subtitle}</p>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <Link href="/products">
                  <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    {item.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTwo;






