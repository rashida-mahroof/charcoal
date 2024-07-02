import React from 'react';
import image from '../../../assets/firee.jpg';

function CallToAction() {
  return (
    <section className="relative text-white py-16 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Grilling Game?</h2>
        <p className="text-xl mb-8">Shop our premium charcoal products and experience the difference today!</p>
        <button className="bg-white text-[var(--color-flame)] font-bold py-2 px-6 rounded-full hover:bg-[var(--color-smoke)] transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
