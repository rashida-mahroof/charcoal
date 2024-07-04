"use client";
import React from 'react';
import Image from 'next/image';
import Img from '../../../assets/coal.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [1, 2, 3, 4];

const FeaturedItems = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Featured Products</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product} className="bg-white p-6 rounded-lg shadow-md mx-2">
              <Image src={Img} height={0} width={0} alt={`Product ${product}`} className="h-48 mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Charcoal Product {product}</h3>
              <p className="text-[var(--color-charcoal)] mb-4">High-quality charcoal for your grilling needs.</p>
              <button className="btn-primary w-full">Add to Cart</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedItems;
