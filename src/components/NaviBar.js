'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-bluetheme"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-12 sm:h-20"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-white text-xl font-bold dark:text-white">
          Rufaro Chiuta
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/works" className='text-white font-bold md:text-lg'>
          Works
        </Link>
        <Link to="/about" className='text-white font-bold md:text-lg'>
          About
        </Link>
        
       
      </Navbar.Collapse>
    </Navbar>
  )
}


