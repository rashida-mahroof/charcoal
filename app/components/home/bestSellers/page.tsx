"use client";
import React from 'react';
import ProdImage from '../../../assets/Charcoal-2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../product/itemCard/page';

const products = [
  { id: 1, name: 'Product 1', price: '$9.00 - $60.00', rating: 5, image: ProdImage },
  { id: 2, name: 'Product 2', price: '$99.00', rating: 4, image: ProdImage },
  { id: 3, name: 'Product 3', price: '$24.00 - $44.00', rating: 5, image: ProdImage },
  { id: 4, name: 'Product 4', price: '$44.00', rating: 5, image: ProdImage },
  { id: 5, name: 'Product 5', price: '$44.00', rating: 5, image: ProdImage },
  { id: 6, name: 'Product 6', price: '$44.00', rating: 5, image: ProdImage },
];



const OurBestsellers = () => {
  const settings = {
    dots: false,
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
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-4">Our Bestsellers</h2>
      <p className="text-center text-gray-600 mb-8">Looking for something specific? Shop by category to find your perfect piece of jewelry.</p>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurBestsellers;
