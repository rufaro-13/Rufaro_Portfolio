'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
//import logo from '../logo.svg'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-darkpurple"
    >
      <Navbar.Brand >
       {/*  <img
          alt=" "
          className="mr-3 h-12 sm:h-20"
          src={logo}
        /> */}
        <span className="self-center whitespace-nowrap text-yello text-xl font-bold dark:text-yello">
          Rufaro Chiuta
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-yello">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-yello font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/works" className='text-yello font-bold md:text-lg'>
          Works
        </Link>
        <Link to="/about" className='text-yello font-bold md:text-lg'>
          About
        </Link>
        
        <Link to="/resume" className='text-yello font-bold md:text-lg'>
          Resume
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


