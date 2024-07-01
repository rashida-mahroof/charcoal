import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <a>MyShop</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <div className="relative group">
            <button
              onClick={toggleShopMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              Shop
            </button>
            {isShopMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                <Link href="/shop/category1">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 1</a>
                </Link>
                <Link href="/shop/category2">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 2</a>
                </Link>
                <Link href="/shop/category3">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 3</a>
                </Link>
              </div>
            )}
          </div>
          <Link href="/about">
            <a className="text-gray-800 hover:text-gray-600">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-800 hover:text-gray-600">Contact</a>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="text-gray-800 hover:text-gray-600 cursor-pointer" />
          <FaShoppingCart className="text-gray-800 hover:text-gray-600 cursor-pointer" />
          <FaUser className="text-gray-800 hover:text-gray-600 cursor-pointer" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={toggleShopMenu}
              className="block text-gray-800 hover:text-gray-600 focus:outline-none w-full text-left"
            >
              Shop
            </button>
            {isShopMenuOpen && (
              <div className="mt-2">
                <Link href="/shop/category1">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 1</a>
                </Link>
                <Link href="/shop/category2">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 2</a>
                </Link>
                <Link href="/shop/category3">
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Category 3</a>
                </Link>
              </div>
            )}
            <Link href="/about">
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</a>
            </Link>
            <Link href="/contact">
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 flex justify-between items-center">
            <div className="flex space-x-4">
              <FaSearch className="text-gray-800 hover:text-gray-600 cursor-pointer" />
              <FaShoppingCart className="text-gray-800 hover:text-gray-600 cursor-pointer" />
              <FaUser className="text-gray-800 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
