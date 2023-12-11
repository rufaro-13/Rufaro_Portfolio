'use client';

import { Carousel } from 'flowbite-react';
import React from 'react'

import ortu from '../images/ortu_png.png'
import veemu from '../images/veemu_png.png'
import continued from '../images/CHC_png.png'
import gg from '../images/gg_png.png'
import stain from '../images/StainMasters_png.png'
import kosiwa from '../images/new kosiwalogo.jpeg'
import login from '../images/login.jpg'
import logout from '../images/logout.jpg'
import signup from '../images/signup.jpg'
import track from '../images/track.jpg'
import general from '../images/general prod.jpg'
import view from '../images/viewarticle.jpg'
import profile from '../images/profile.jpg'
import payment from '../images/payment.jpg'
import changep from '../images/change password.jpg'
import checkout from '../images/checkout.jpg'
import drawer from '../images/drawer.jpg'
function Works() {
  return (
    <div>

<section className="bg-cover bg-center bg-no-repeat  bg-gray-400 bg-blend-multiply pt-12">

<div class="mx-2 md:mx-8 w-fit">
    <p className='text-bluetheme text-2xl font-bold mx-1'>Welcome to my work page</p>

    <p className='text-bluetheme text-base  mx-1'>From time to time, I have been creating websites and in each project 
    I have learnt a new language or skill. I believe with time i will get better and better. Below are the logos and links to 
    some of the websites that I have developed
    </p>

</div>


<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4">
          <div className='col-span-1'><a href="https://ortuspecialisedhome.com"target='blank' rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100  items-center mb-4 sm:mb-0">
              <div><img src={ortu}className="h-16 lg:h-28 md:h-24 mr-3" alt="Ortu Logo" /></div>
              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div>

          </a></div>

          <a href="https://veemuhealthcare.co.uk/"target='blank' rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100  items-center mb-4 sm:mb-0">
              <img src={veemu}className="md:h-12 lg:h-32 h-9 mr-3" alt="Veemu Logo" /> 

              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div>    
          </a>

          <a href="https://continuedhealthcare.com" target='blank' rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100  items-center mb-4 sm:mb-0">
              <img src={continued}className="md:h-12 lg:h-32 h-9 mr-3" alt="Continued Health Care Logo" />

              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div>   
          </a>

          <a href="https://www.gghealthsolutions01.com/" target='blank'rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100 items-center mb-4 sm:mb-0">
              <img src={gg}className="md:h-12 lg:h-32 h-9 mr-3" alt="GG Healt Solutions Logo" /> 

              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div>   
          </a>

          <a href="https://www.stainmasterslimited.com/"target='blank' rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100  items-center mb-4 sm:mb-0">
              <img src={stain}className="h-12 lg:h-32 mr-3" alt="Stain Masters Limited Logo" />  

              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div> 
          </a>

          <a href="https://kossiwa-store.000webhostapp.com/
          "target='blank' rel="noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-fuchsia-100  items-center mb-4 sm:mb-0">
              <img src={kosiwa}className="h-12 lg:h-32 mr-3" alt="Kosiwa Store Logo" />

              <div class="bg-blue-700 rounded-lg ml-4 w-fit">
                <p className='text-white font-bold mx-1'>Visit</p>
              </div>   
          </a>

      </div>

</section>

      <section className="bg-cover bg-center bg-no-repeat  bg-gray-400 bg-blend-multiply pt-10">

     
      <div className=" relative flex h-screen  mx-10 ">
      <div className=" w-1/5  object-none h-screen w-96 ">
      <Carousel slideInterval={5000}>
        <img src={signup} className='object-cover h-fit w-fit'alt="..." />
        <img src={login} className='object-cover h-fit w-fit ' alt="..." />
        <img src={general}className='object-cover h-fit w-fit ' alt="..." />
        <img src={view} className= 'object-cover h-fit w-fit ' alt="..." />
        <img src={checkout} className=' object-cover h-fit w-fit' alt="..." />
        <img src={payment} className=' object-cover h-fit w-fit' alt="..." />
        <img src={track} className=' object-cover h-fit w-fit' alt="..." />
        <img src={drawer} className=' object-cover h-fit w-fit' alt="..." />
        <img src={profile} className=' object-cover h-fit w-fit' alt="..." />
        <img src={changep} className=' object-cover h-fit w-fit' alt="..." />
        <img src={logout} className=' object-cover h-fit w-fit' alt="..." />
        
      </Carousel>
    </div>

    <div className="w-3/5 pl-4">

        <p className="pl-2">
            The pictures are of an <b>android application</b> that I developed with my friend as part of our bachelors thesis in 2021.
            Our theme was <b>"Developemnt of an android mobile application for online shopping"</b>. We developed it using <b>java on Android Studio</b>. The
            interfaces allows the user to create an account, sign up, sign in, explore different categories of products, view the details of each product
            , add products to favourites or wishlist, add products to cart, checkout the cart, selct methood of payment, track the
            products during delivery, return orders and etc. We used <b>NoSQL database</b> ,<b>Firebase Realtime Database</b> for registering accounts and <b>CloudStore</b>
            to store the product details, carts and favourites for each account. For those that added products to favourites
             or cart without signing up or signing in, we used the <b>local database</b> based on <b>SQL, SQLite</b>, until they login or signed up.<br/><br/>

            For the application, we came up with the visual design of the application using <b>Unified Modelling Language (UML).</b> We modeled the Use Case Diagram, Textual Description, 
            Class Diagram and Sequence Diagrams. From this project, I acquired the following skills:
            <ul className="list-disc pl-5">
                <li>Team work and collaboration</li>
                <li>Dedication and determination</li>
                <li>Thriving under presure and meeting deadlines</li>
                <li>Good communication and problem solving</li>
                <li>How to use Android Studio, how to use UML software and how NoSql database works </li>
            

            </ul>

        </p>
    </div>

      </div>

    
    </section>


   
    </div>
  )
}

export default Works