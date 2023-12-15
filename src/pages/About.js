import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import { FaEnvelopeOpenText, FaLinkedinIn } from 'react-icons/fa6';
import cv from '../images/Rufaro_Chiuta_CV (1).pdf'
function About() {
  return (
    <div>
        <section className="bg-cover bg-center bg-no-repeat   bg-blend-multiply pt-12 pb-8">
    <div class="md:flex pt-4 pb-4">

                     

        <div class="md:w-full  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-2 ">
            <h5 class="mx-auto mb-4 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
            About me <br/><br/>
            </h5>
            <div class="  grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
        
                <div class='flex col-span-1'>
                    
                

                    <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                    
                    <b>My name is Rufaro Chiuta </b> and I am a software developer who loves developing user friendly software.
                    During my free time, I like to learn new programming languages and skills. I am also interested in database 
                    management and machine learning.

                    <br/><br/>
                    </p>

                </div>

                <div class="col-span-1 flex lg:ml-8 mt-2 lg:px-8 px-2 items-start">
                        <IconContext.Provider value={{ color: 'red', size: '25px', padding:'2px 2px' }}>
                            
                            <FaFilePdf class=" mx-1 my-1"/>
                        
                        </IconContext.Provider>
                        <p class="md:text-1xl text-sm">
                        
                        <a href={cv} class="text-blue-700 hover:underline" download="Rufaro_Chiuta_CV">My Resume</a>
                        </p>
                        
                    </div>
            </div>


            <h5 class="mx-auto mb-4 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
            Contact <br/><br/>
            </h5>

            <div className='lg:flex'>
                <div className=' '> 
                    <div class="lg:flex grid lg:grid-col-1 lg:gap-12  md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-4 pt-3 items-center sm:items-center sm:justify-center mx-4  lg:mx-2 mt-1">

                      <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                              <a href="mailto:rufarochiuta@gmail.com"target="blank"><div class="  sm:items-center sm:justify-center  mx-2 mt-5 mb-5">
                              
                              <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center  mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-2xl font-bold"><a href="mailto:rufarochiuta@gmail.com"target="blank" className="block py-2 pl-3 pr-4 underline text-navcolour rounded 
                              hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email </a></span></div>
                              

                              </p>
                            </div>
                      </div>

                     {/*  <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                            <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                              <a href="tel:07427494551"target="blank"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                                <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center   mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-black text-2xl font-bold "><a href="tel:07507913398" target="blank"
                              className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                              md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                              dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call us</a></span></div>
                              Mobile: 07507913398
                              </p>
                            </div>

                            

                      </div> */}

                      <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-center sm:justify-center">

                        <IconContext.Provider value={{ color: 'blue', size: '50px', padding:'5px 2px' }}>
                        <a href="https://www.linkedin.com/in/rufaro-chiuta"target="blank"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                            <FaLinkedinIn class="sm:items-center sm:justify-center  my-6"/>
                        </div></a>
                        </IconContext.Provider>


                        <div class="  sm:items-center sm:justify-center   mt-1">
                        <p class=" text-1xl font-normal">
                        <div><span class="text-black text-2xl font-bold"><a href="https://www.linkedin.com/in/rufaro-chiuta"target="blank" 
                        className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LinkedIn</a></span></div>
                       
                        </p>
                        </div>

                       </div> 

                    </div>
                </div>
            </div>
       </div>
    </div>   
        </section>
    </div>
  )
}

export default About