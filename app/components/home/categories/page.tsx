import React from 'react';
import Image from 'next/image';
import ProdImage from '../../../assets/rockwood-charcoal.webp';
import Premium from '../../../assets/Charcoal-2.png';
import Lump from '../../../assets/hardwood-lump-charcoal-jpg.jpg';
import BBQ from '../../../assets/bbq.jpg';
const categories = [
  { name: 'Premium', image: Premium },
  { name: 'Lumb', image: Lump },
  { name: 'Briquettis', image: BBQ },
  { name: 'Smoker Pellets', image: ProdImage },
];

const ShopByCategories = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Shop by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
            <Image
              src={category.image}
              alt={category.name}
              // layout="fill"
              // objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;