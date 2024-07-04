"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import ItemList from '../product/itemList/page';
import Panel from '../common/sidePanel/page';
import Popup from '../account/login/page';

const menus = [
  { name: "Shop", subMenus: ["Premium Charcoal", "Lumb Charcoal", "Briquettes", "Smoker Pellletes"] },
  { name: "All", subMenus: [] ,link:'/pages/shop' },
  { name: "About Us", subMenus: [] ,link:'/pages/about'},
  { name: "Contact Us" ,link:'/pages/contact'}
];

const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
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

  const toggleWishlistPanel = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className={`bg-[var(--color-ember)] text-white transition-all duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto flex justify-between items-center py-3.5 px-4 md:px-0">
          <div className='flex flex-row items-center justify-between'>
            <Link href='/'><div className="text-2xl font-bold mr-5">Logo</div></Link>
            <div className="hidden md:flex justify-center space-x-4">
              {menus.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={menu.link ?? '/'} className="hover:text-gray-400">{menu.name}</Link>
                  {menu.name !== "Contact Us" && openSubmenu === menu.name && (
                    <div className="absolute left-0 w-48 bg-white text-black shadow-lg z-10 mt-2">
                      {menu.subMenus?.map((subMenu, subIndex) => (
                        <Link href="#" key={subIndex} className="block px-4 py-2 hover:bg-gray-200">
                          {subMenu}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <div className="flex justify-center">
            <button className="text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center" onClick={togglePopup}>
                <FontAwesomeIcon icon={faUser} />
              </button>
              <button className="text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center" onClick={toggleWishlistPanel}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
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
                      <Link href="#" key={subIndex} className="block px-4 py-2 hover:bg-gray-200">
                        {subMenu}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Panel
        isOpen={isCartOpen}
        togglePanel={toggleCartPanel}
        title="Cart"
        items={products.map(product => <ItemList key={product.id} product={product} />)}
      />
      <Panel
        isOpen={isWishlistOpen}
        togglePanel={toggleWishlistPanel}
        title="Wishlist"
        items={products.map(product => <ItemList key={product.id} product={product} />)}
      />
      <Popup
        isOpen={isPopupOpen}
        togglePopup={togglePopup}
      />
    </>
  );
};

export default Menubar;
