"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import ProductCard from '@/app/components/product/itemCard/page';
import MainLayout from '@/app/layout/page';
import CatFilter from '@/app/components/shop/categoryFilter/page';

const categories = {
  name: 'Category',
  items: ['Premium', 'Lump', 'BBQ', 'Rockwood']
};

const brands = {
  name: 'Brands',
  items: ['Premium', 'Lump', 'BBQ', 'Rockwood']
};

const Shop = () => {
  const [view, setView] = useState('grid');

  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setView('grid')}>
              <FontAwesomeIcon icon={faTh} />
            </button>
            <button onClick={() => setView('list')}>
              <FontAwesomeIcon icon={faThList} />
            </button>
          </div>
        </div>
        <div className="flex">
          <aside className="w-1/4 pr-4">
            <CatFilter category={categories} />
            <CatFilter category={brands} />
          </aside>
          <main className="w-3/4">
            <div className={`grid gap-4 ${view === 'grid' ? 'grid-cols-3' : 'grid-cols-1'}`}>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
