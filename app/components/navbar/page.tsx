import React from 'react'
function NavBar() {
  return (
    <div style={{ backgroundColor: 'var(--secondary-color)' }} className=" text-white p-1 flex flex-wrap items-center lg:justify-between justify-end max-w-full container mx-auto">
    <div className=" items-center space-x-4 text-xs hidden lg:flex">
      <div className="flex items-center space-x-2 flex-row">
        <span className="fa fa-at  text-3xl font-light"></span>
        <div className='flex-col' >
            <p>MAIL US</p>
            <a href="mailto:info@charc.ae" className="hover:underline">info@charc.ae</a>
        </div>
        
      </div>
      <div className="flex items-center space-x-2  flex-row ">
        <span className="fa fa-headphones-alt text-3xl font-light"></span>
        <div className='flex-col'><p className='uppercase'>Toll Free</p>
        <a href="tel:800724249" className="hover:underline">800 724249</a></div>
        
      </div>
      <div className="flex items-center space-x-2 flex-row ">
        <span className="fa fa-mobile-alt text-3xl font-light"></span>
        <div className='flex-col'> <p className='uppercase'>Call Support</p>
        <a href="tel:+971586046586" className="hover:underline">+971 586 046 586</a>
      </div>
       </div>
    </div>
    <div className="flex items-center space-x-4">
        <button>
            <i className="fa fa-search" ></i>
        </button>
      <button className=" text-white px-4 py-2 hover:bg-white hover:text-blue-900 translate-x-0 transition-all">Get Started</button>
      <div className="flex space-x-2">
        <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook text-xs sm:text-3xl md:text-xl"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram text-xs sm:text-3xl md:text-xl"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin text-xs sm:text-3xl md:text-xl"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube text-xs sm:text-3xl md:text-xl"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-whatsapp text-xs sm:text-3xl md:text-xl"></i></a>
      </div>
    </div>
  </div>
  
  )
}

export default NavBar