
import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarWithCTAButton from './NaviBar'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <NavbarWithCTAButton/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout