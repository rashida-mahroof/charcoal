"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const menus = [ {name:"Shop", subMenus:[
    "Premium Charcoal",
    "Lumb Charcoal",
    "Briquettes",
    "Smoker Pellletes"
 
 ]},  {name:"All",subMenus:[
   
    
]},{name: "About Us",
    subMenus:[
        
    ]
}, {name:"Contact Us"}];
const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu:any) => {
    setOpenSubmenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ backgroundColor: 'var(--primary-color)' }} className={` text-white transition-all duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="text-2xl font-bold">Logo</div>
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
          {<Link href='/pages/dashboard/home'><div className='flex flex-row'>
                <i className="fa fa-users mx-1" aria-hidden="true"></i>
                <span>Client Login</span>
            </div></Link>}{
          
          menus.map((menu, index) => (
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
  );
}

export default Menubar;
