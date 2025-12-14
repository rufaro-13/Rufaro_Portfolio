import React from 'react'

import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div class=''>
  <section className="bg-cover bg-center bg-no-repeat   bg-blend-multiply ">      
    <footer class="bg-darkpurple   shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto py-5 md:py-5">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://enroutecare.co.uk/" class="flex items-center mb-4 sm:mb-0">
                {/*  <img src={logo} class="h-8 md:h-16 ml-2" alt="Enroute Logo" /> */}
                    <span class="self-center text-yellowtheme md:text-2xl text-1xl font-bold whitespace-nowrap dark:text-white">  </span>
                </a>
                <ul class="flex flex-wrap text-lg text-sm  pt-4 text-base font-medium text-yello sm:mb-0 dark:text-gray-400">
                    <p className='text-yellowtheme text-lg font-bold md:px-6 px-4'>
                    <Link to='/about'>  About</Link><br/>
                    
                    </p>
                    <p  className='text-yellowtheme text-lg font-bold md:px-8 px-4'>
                    <Link to='/works'> Projects</Link><br/>
                        
                    </p>
                    
                    <Link to="/home" className='text-yellowtheme text-lg font-bold md:px-8 px-4'>
                        Contact
                    </Link>
                </ul>
            </div>
            <hr class="my-6 border-yello sm:mx-auto dark:border-gray-700 lg:my-2" />
            <div class="sm:flex sm:items-center sm:justify-between ml-3">
        {/*  <span class="block text-sm text-yellowtheme sm:text-center dark:text-gray-400 col-span-1">© 2023 
                <a href="https://enroutecare.co.uk/" class="hover:underline text-yellowtheme">
                    Enroute Care™
                </a>. 
                All Rights Reserved.
            </span> */}

            <span class="md:mr-3 block text-xs text-white sm:text-center dark:text-gray-400 col-span-1 "> 
                <a href="mailto:rufarochiuta@gmail.com" class="hover:underline">
                    Developed by Rufaro Chiuta
                </a><br/>
                
            </span>

            </div>
        </div>
    </footer>
</section>

            
            
    </div>
  )
}

export default Footer