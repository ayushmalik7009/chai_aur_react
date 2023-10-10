import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header />
     <Outlet/>   
     {/* jha outlet denege bss vha change hoga upar niche same rhega */}
     <Footer />
    </>
  )
}

export default Layout