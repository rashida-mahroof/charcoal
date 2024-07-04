import React from 'react'
import Image from 'next/image';
import Img from '../../../assets/coal.webp';
function FeaturedItems() {
  return (
     
     <section className="py-16">
     <div className="container mx-auto px-4">
       <h2 className="section-title">Our Featured Products</h2>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         {/* Replace with actual product data */}
         {[1, 2, 3,4].map((product) => (
           <div key={product} className="bg-white p-6 rounded-lg shadow-md">
             <Image src={Img} height={0} width={0} alt='${product}' className=" h-48 mb-4 rounded"/>
             <h3 className="text-xl font-semibold mb-2">Charcoal Product {product}</h3>
             <p className="text-[var(--color-charcoal)] mb-4">High-quality charcoal for your grilling needs.</p>
             <button className="btn-primary w-full">Add to Cart</button>
           </div>
         ))}
       </div>
     </div>
   </section>
  )
}

export default FeaturedItems