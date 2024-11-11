import React from 'react';
import Link from 'next/link';
import { menuData } from '@/app/constants/menus';

type CatFilterProps = {
  categoryName: string;
};

// Formats the name for use in URLs
const formatCategoryName = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const CatFilter: React.FC<CatFilterProps> = ({ categoryName }) => {
  // Find the matching category in menuData
  const category = menuData.categories.find((cat) => cat.name === categoryName);

  // If no category or items are found, display nothing
  if (!category || !category.subcategories) return null;

  return (
    <div className="mb-8 bg-white">
      <h2 className="font-semibold mb-4 text-lg bg-[var(--color-ember)] text-[var(--on-primary)] px-1">
        {category.name}
      </h2>
      <ul className="space-y-2">
        {category.subcategories.map((subcategory, index) => (
          <li key={index}>
            <Link 
              href={`/pages/shop/${formatCategoryName(category.name)}/${formatCategoryName(subcategory.name)}`} 
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatFilter;
