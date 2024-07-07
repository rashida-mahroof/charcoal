import React from 'react';
import Link from 'next/link';

type Category = {
  name: string;
  items: string[];
};

type CatFilterProps = {
  category: Category;
};

const CatFilter= ({ category }:any) => {
  return (
    <div className="mb-8 bg-white">
      <h2 className="font-semibold mb-4 text-lg bg-[var(--color-ember)] text-[var(--on-primary)] px-1">
        {category.name}
      </h2>
      <ul className="space-y-2">
        {category.items.map((item:any, index:any) => (
          <li key={index}>
            <Link href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatFilter;