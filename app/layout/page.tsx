import React from 'react'
import NavBar from '../components/navbar/page'
import Menubar from '../components/menubar/page'
import Footer from '../components/footer/page'

function MainLayout({children}:any) {
  return (
    <main>
        <NavBar/>
        <Menubar/>
        {children}
        <Footer/>
    </main>
  )
}

export default MainLayout