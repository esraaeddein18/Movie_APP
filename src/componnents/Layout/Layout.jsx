import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Designs/Navbar/Navbar'
import Footer from '../Designs/Footer/Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
    <div className="container-fluid mb-5">
       <Outlet/>
    </div>
    <Footer/>
    </>

  )
}

export default Layout