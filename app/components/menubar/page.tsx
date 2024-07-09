"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart, faMapMarkerAlt, faChevronDown, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import ItemList from '../product/itemList/page';
import Panel from '../common/sidePanel/page';
import Popup from '../account/login/page';

const menus = [
  { name: "ALL CATEGORIES", icon: faChevronDown, dropdown: true },
  { name: "CLEANING PRODUCTS" },
  { name: "BARBECUE CHARCOAL" },
  { name: "BOX CHARCOAL" },
  { name: "CAMPING PRODUCTS" },
  { name: "AIR FRESHENER" },
  { name: "FOOD PRODUCTS" },
  { name: "OTHER ACCESSORIES" },
];

const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCartPanel = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleWishlistPanel = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      <div className={`bg-white text-gray-800 shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center py-3 px-4">
            <Link href='/'>
              <img src="/logo.png" alt="logo" className="h-8" />
            </Link>
            <div className="flex-grow mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for 'chicken'"
                  className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center text-sm" onClick={togglePopup}>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <span>Login & Register</span>
              </button>
              <button className="relative" onClick={toggleWishlistPanel}>
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </button>
              <button className="relative" onClick={toggleCartPanel}>
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">5</span>
              </button>
            </div>
            <button className="md:hidden" onClick={toggleMobileSidebar}>
              <FontAwesomeIcon icon={isMobileSidebarOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
          
          {/* Menu bar */}
          <nav className="hidden md:flex justify-between items-center py-2 px-4  relative">
            {menus.map((menu, index) => (
              <div key={index} className="relative">
                {menu.dropdown ? (
      <button
        onClick={toggleDropdown}
        className="text-xs font-medium hover:text-[var(--color-ember)] flex items-center capitalize"
      >
        {menu.name}
        {menu.icon && (
          <FontAwesomeIcon
            icon={menu.icon}
            className={`ml-1 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
          />
        )}
      </button>
    ) : (
      <Link href={'/pages/shop'} passHref className="text-xs font-medium hover:text-[var(--color-ember)] flex items-center capitalize">
       
          {menu.name}
          {menu.icon && (
            <FontAwesomeIcon icon={menu.icon} className="ml-1" />
          )}
        
      </Link>)}
                {menu.dropdown && isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    {menus.map((category, catIndex) => (
                      <Link href="/pages/shop" key={catIndex} className="capitalize block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileSidebar}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search for 'chicken'"
            className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {menus.map((menu, index) => (
            <div key={index} className="py-2">
              <button
                onClick={menu.dropdown ? toggleDropdown : undefined}
                className="text-sm font-medium hover:text-[var(--color-ember)] flex items-center capitalize w-full text-left"
              >
                {menu.name}
                {menu.icon && <FontAwesomeIcon icon={menu.icon} className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />}
              </button>
              {menu.dropdown && isDropdownOpen && (
                <div className="mt-2 pl-4">
                  {menus.map((category, catIndex) => (
                    <Link href="#" key={catIndex} className="capitalize block py-2 text-sm text-gray-700 hover:text-[var(--color-ember)]">
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button className="flex items-center text-sm mb-4 w-full" onClick={togglePopup}>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>Login & Register</span>
          </button>
          <div className="flex justify-around">
            <button className="relative" onClick={toggleWishlistPanel}>
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </button>
            <button className="relative" onClick={toggleCartPanel}>
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">5</span>
            </button>
          </div>
        </div>
      </div>

      <Panel
        isOpen={isCartOpen}
        togglePanel={toggleCartPanel}
        title="Cart"
        route='/pages/cart'
        items={products.map(product => <ItemList key={product.id} product={product} />)}
      />
      <Panel
        isOpen={isWishlistOpen}
        togglePanel={toggleWishlistPanel}
        title="Wishlist"
        route='/pages/wishlist'
        items={products.map(product => <ItemList key={product.id} product={product} />)}
      />
      <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
    </>
  );
};

export default Menubar;