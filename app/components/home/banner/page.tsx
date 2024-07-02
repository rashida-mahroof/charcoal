"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProdImage from '../../../assets/rockwood-charcoal.webp';
import Image from 'next/image';
// Dynamic import of OwlCarousel
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Banner = () => {
  const images = [
    ProdImage,
    ProdImage,
    ProdImage
  ];

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our E-commerce Store</h1>
          <p className="text-white mb-6">Discover our exclusive range of products and enjoy a seamless shopping experience.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">Shop Now</button>
        </div>
        <div className="w-full md:w-1/2">
          <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
            {images.map((image, index) => (
              <div key={index} className="item">
                <Image  src={image}  alt={`Slide ${index + 1}`} className="w-full h-auto" height={0} width={0}/>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
