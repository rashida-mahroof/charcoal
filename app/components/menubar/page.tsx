"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import Image from 'next/image';
const menus = [
  { name: "Shop", subMenus: ["Premium Charcoal", "Lumb Charcoal", "Briquettes", "Smoker Pellletes"] },
  { name: "All", subMenus: [] },
  { name: "About Us", subMenus: [] },
  { name: "Contact Us" }
];

const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: any) => {
    setOpenSubmenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCartPanel = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className={`bg-[var(--color-flame)] text-white transition-all duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto flex justify-between items-center py-3.5 px-4 md:px-0">
          <div className='flex flex-row items-center justify-between'>
            <div className="text-2xl font-bold mr-5">Logo</div>
            <div className="hidden md:flex justify-center space-x-4">
              {menus.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-gray-400">{menu.name}</button>
                  {menu.name !== "Contact Us" && openSubmenu === menu.name && (
                    <div className="absolute left-0 w-48 bg-white text-black shadow-lg z-10 mt-2">
                      {menu.subMenus?.map((subMenu, subIndex) => (
                        <a href="#" key={subIndex} className="block px-4 py-2 hover:bg-gray-200">
                          {subMenu}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center" href={''}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link href={''} className="text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <button className="text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center" onClick={toggleCartPanel}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-4 py-4">
            <Link href='/pages/dashboard/home'>
              <div className='flex flex-row'>
                <i className="fa fa-users mx-1" aria-hidden="true"></i>
                <span>Client Login</span>
              </div>
            </Link>
            {menus.map((menu, index) => (
              <div key={index} className="py-2">
                <button className="w-full text-left hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>{menu.name}</button>
                {menu.name !== "Contact Us" && (
                  <div className="pl-4">
                    {menu.subMenus?.map((subMenu, subIndex) => (
                      <a href="#" key={subIndex} className="block px-4 py-2 hover:bg-gray-200">
                        {subMenu}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`fixed shadow overflow-y-auto top-0 right-0 w-1/4 h-screen z-50  bg-white transition-transform transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className='flex flex-row items-center justify-between'>
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <button className="text-red-500" onClick={toggleCartPanel}>Close</button>
          </div>

          {/* Cart content goes here */}
          <div className='flex  flex-col'>
            {products.map(product => (
              <div key={product.id} className="flex p-2 bg-[var(--color-smoke)] items-center mb-4">
                <div className="w-1/3">
                  <Image src={product.image} alt={product.name} width={100} height={100} className="object-cover " />
                </div>
                <div className="w-2/3 pl-4">
                  <h5 className="font-bold">{product.name}</h5>
                  <p className="text-gray-700">{product.price}</p>
                  <p className="text-gray-700">{1}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{"★".repeat(product.rating)}</span>
                    <span className="text-gray-400">{"★".repeat(5 - product.rating)}</span>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <button className='w-full bg-[var(--color-flame)] text-[var(--on-primary)] p-2'>View All</button>
        </div>
      </div>
    </>
  );
};

export default Menubar;
