
import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarWithCTAButton from './NaviBar'

function Layout() {
  return (
    <>
    <NavbarWithCTAButton/>
    <Outlet/>
    </>
  )
}

export default Layout