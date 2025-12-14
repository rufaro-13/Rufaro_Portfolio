import React from 'react'
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <div>
        
<section className="bg-cover bg-center bg-no-repeat bg-hero_pattern bg-gray-400 bg-blend-multiply pt-8">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-44 text-3xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-5xl">
            Hi, welcome to Rufaro's Portfolio</h1>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link to='/works' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yello hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Works
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to='/about' className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black  bg-yello rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                About me
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>  
             <Link to='/resume' className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black  bg-yello rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
               Resume
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
</section>

    </div>
  )
}

export default Hero