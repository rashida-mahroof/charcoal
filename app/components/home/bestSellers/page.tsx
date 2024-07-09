"use client";
import React from 'react';
import ProdImage from '../../../assets/hardwood-lump-charcoal-jpg.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../product/itemCard/page';
import TitleMain from '../../common/titleMain/page';

const products = [
  { id: 1, name: 'Product 1', price: 'QAR 9.00 ', rating: 5, image: ProdImage },
  { id: 2, name: 'Product 2', price: 'QAR 99.00', rating: 4, image: ProdImage },
  { id: 3, name: 'Product 3', price: 'QAR 24.00', rating: 5, image: ProdImage },
  { id: 4, name: 'Product 4', price: 'QAR 44.00', rating: 5, image: ProdImage },
  { id: 5, name: 'Product 5', price: 'QAR 44.00', rating: 5, image: ProdImage },
  { id: 6, name: 'Product 6', price: 'QAR 44.00', rating: 5, image: ProdImage },
];



const OurBestsellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto container">
        <TitleMain>Our Bestsellers</TitleMain>
      {/* <p className=" text-gray-600 mb-8">Looking for something specific? Shop by category to find your perfect piece of jewelry.</p> */}
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurBestsellers;
