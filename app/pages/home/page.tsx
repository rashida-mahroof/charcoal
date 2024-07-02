import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import NavBar from '@/app/components/navbar/page';
import Menubar from '@/app/components/menubar/page';
import Banner from '@/app/components/home/banner/page';
import ShopByCategories from '@/app/components/home/categories/page';
import OurBestsellers from '@/app/components/home/bestSellers/page';
import ServiceHighlights from '@/app/components/home/highlights/page';
import MainLayout from '@/app/layout/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
import { faRecycle } from '@fortawesome/free-solid-svg-icons/faRecycle';
import WhyChose from '@/app/components/home/whychose/page';
import Hero from '@/app/components/home/hero/page';
import FeaturedItems from '@/app/components/home/featured/page';
import CallToAction from '@/app/components/home/calltoaction/page';
function HomePage() {
  return (
    <div>
      <MainLayout>
        {/* <Banner/> */}
        <Hero/>
       <ServiceHighlights/>
        <ShopByCategories/>
        <OurBestsellers/>
        <WhyChose/>
        <CallToAction/>
        <FeaturedItems/>
       </MainLayout>
    </div>

   
  )
}

export default HomePage