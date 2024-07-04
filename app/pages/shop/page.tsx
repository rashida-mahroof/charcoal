"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import ProductCard from '@/app/components/product/itemCard/page';
import MainLayout from '@/app/layout/page';
import CatFilter from '@/app/components/shop/categoryFilter/page';
import ItemList from '@/app/components/product/itemList/page';

const categories = {
  name: 'Category',
  items: ['Premium', 'Lump', 'BBQ', 'Rockwood']
};

const brands = {
  name: 'Brands',
  items: ['Premium', 'Lump', 'BBQ', 'Rockwood']
};

const Shop = () => {
  const [view, gridView] = useState(true);

  return (
    <MainLayout>
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            <button onClick={() => gridView(true)} className="p-2 border rounded-md">
              <FontAwesomeIcon icon={faTh} />
            </button>
            <button onClick={() => gridView(false)} className="p-2 border rounded-md">
              <FontAwesomeIcon icon={faThList} />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
            <CatFilter category={categories} />
            <CatFilter category={brands} />
          </aside>
          <main className="w-full md:w-3/4">
            <div className={`grid gap-4 ${view ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map(product => (
                view ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <div className='bg-white p-2'>
                    <ItemList key={product.id} product={product} />
                  </div>
                )
              ))}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
