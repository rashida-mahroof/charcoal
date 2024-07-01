import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import NavBar from '@/app/components/navbar/page';
import Menubar from '@/app/components/menubar/page';
import Banner from '@/app/components/banner/page';
function HomePage() {
  return (
    <div>
        <NavBar/>
        <Menubar/>
        <Banner/>
        {/* <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Charcoal E-commerce | Home</title>
        <meta name="description" content="Premium charcoal products for your grilling needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Charcoal E-commerce</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Premium Charcoal for Perfect Grilling</h2>
          <p className="text-xl">Discover our high-quality charcoal products for your outdoor cooking adventures.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/placeholder-product-1.jpg" alt="Lump Charcoal" width={300} height={300} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Premium Lump Charcoal</h3>
            <p className="mb-4">Our best-selling lump charcoal for intense heat and flavor.</p>
            <Link href="/products/lump-charcoal" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Shop Now
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/placeholder-product-2.jpg" alt="Briquettes" width={300} height={300} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Classic Briquettes</h3>
            <p className="mb-4">Consistent heat for longer cooking sessions.</p>
            <Link href="/products/briquettes" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Shop Now
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/placeholder-product-3.jpg" alt="Smoker Pellets" width={300} height={300} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Smoker Pellets</h3>
            <p className="mb-4">Add rich, smoky flavors to your grilled dishes.</p>
            <Link href="/products/smoker-pellets" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Shop Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Charcoal E-commerce. All rights reserved.</p>
        </div>
      </footer>
    </div> */}
    </div>

   
  )
}

export default HomePage