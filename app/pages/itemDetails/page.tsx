// pages/details.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import MainLayout from '@/app/layout/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../assets/rockwood-charcoal.webp';
import image1 from '../../assets/coal.webp';
import image2 from '../../assets/premium.webp';
import image3 from '../../assets/bbq.jpg';
import WhyChose from '@/app/components/home/whychose/page';
import CartButton from '@/app/components/product/cartButton/page';
import WishListButton from '@/app/components/product/wishlistButton/page';

const product = {
  name: 'Product Name',
  price: '₹99.00',
  description: 'This is a great product that you will love!',
  desc1:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit illum quia exercitationem alias impedit illo, labore sapiente quasi architecto quod officia iste fugiat nihil nobis at adipisci inventore! Alias!',
  images: [
    image,
    image1,
    image2,
    image3,
    image,
  ],
  discount: '10%', // Example discount
  sku: 'PROD123', // Example SKU
};

const Details = () => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current:any, next:any) => setMainImage(product.images[next]),
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <MainLayout>
        
      <div className="container mx-auto py-6 flex flex-col lg:flex-row">
        {/* Right side: product images */}
        <div className="w-full lg:w-2/3 p-4">
          <div className="mb-4">
            <Image src={mainImage} alt="Product Image" width={600} height={600} className="rounded-lg w-full" />
          </div>
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index} className="p-2">
                <Image src={image} alt={`Product Image ${index + 1}`} width={100} height={100} className="cursor-pointer rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
        {/* Left side: product details */}
        <div className="w-full lg:w-1/3 p-4">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>

          <p className="text-xl text-[var(--color-ember)] text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-2">SKU: {product.sku}</p>
          {product.discount && (
            <p className=" mb-2">Discount: {product.discount}</p>
          )}
          <p className="text-gray-800 mb-4">{product.description}</p>
          <p className="text-gray-800 mb-4">{product.desc1}</p>
         
          <div className="flex items-center mb-4">
            <button onClick={decrementQuantity} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg mr-2">-</button>
            <span className="text-xl">{quantity}</span>
            <button onClick={incrementQuantity} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg ml-2">+</button>
          </div>
          <CartButton>Add To Cart</CartButton>
          <WishListButton>Wish List</WishListButton>
        </div>
      </div>
      <WhyChose/>
    </MainLayout>
  );
}

export default Details;
