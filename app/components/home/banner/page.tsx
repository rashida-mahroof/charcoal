"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ProdImage from '../../../assets/banner.jpg';
import ProdImage2 from '../../../assets/premium.webp';

// Dynamic import of Slick Slider
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Banner = () => {
  const images = [ProdImage, ProdImage, ProdImage];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nav:true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="container mx-auto m-4 flex flex-col md:flex-row h-[50vh]">
      <div className="md:w-4/6 w-full h-full relative m-1 bg-white overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-[50vh]">
              <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" className="hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" bg-white md:w-2/6 h-full relative overflow-hidden m-1">
        <Image src={ProdImage2} alt="Right Image" layout="fill" objectFit="cover" className="hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );
};

export default Banner;
