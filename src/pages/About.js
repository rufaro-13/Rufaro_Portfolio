import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import { FaEnvelopeOpenText, FaLinkedinIn } from 'react-icons/fa6';
import cv from '../images/Rufaro_Chiuta_CV (1).pdf'
function About() {
  return (
    <div>
        <section className="bg-cover bg-center bg-no-repeat   bg-blend-multiply pt-12 pb-8">
    <div class=" pt-4 pb-4">

                     

        <div class="md:w-full  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-2 ">
            <h5 class="mx-auto mb-4 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
            About me <br/><br/>
            </h5>
            <div class="  grid  lg:grid-col-1 lg:gap-x-3 m-auto md:grid-col-1 md:gap-x-2 grid-col-1 px-12 justify-center item-stretch ">
        
                <div class='mx-auto col-span-1'>
                    
                

                    <p class="pl-4 font-normal text-darkbluetheme text-sm md:text-lg">
                    
                    <b>My name is Rufaro Chiuta </b> and I am a software developer. I recently graduated with a Master's degree in Software 
                    Engineering and Information Processing from Algeria after having completed a bachelor's degree in Information Systems and 
                    Software Engineering in the same country. I am driven by the desire to be one of the people who bring automation and new sustainable
                    solutions to our problems.<br/><br/>
                    With this, I am thrilled to start and build my career using the skills that I have acquired and will acquire in the future.
                    I have experience in: <br/>
                    <div class="  grid  lg:grid-cols-3 lg:gap-x-3 m-auto md:grid-col-1 md:gap-x-2 grid-col-1">

                        <div class=' col-span-1'>

                                <p>
                                    <b>Programming languages</b>
                                    <ul class="list-disc ml-4">
                                       <li>Java</li>
                                       <li>Python</li> 
                                       <li>JavaScript</li>
                                       <li>C++</li>
                                       <li>C</li>
                                       <li>MATLAB</li>
                                       <li>R</li>
                                       <li>SQL for databases</li>
                                       <li>OCaml</li>
                                    </ul>
                                </p>
                        </div>

                        <div class=' col-span-1'>

                                <p>
                                    <b>Markup languages</b>
                                    <ul class="list-disc ml-4">
                                       <li>HTML</li>
                                       <li>XML</li> 
                                       <li>LaTeX</li>
                                       
                                    </ul>
                                </p>
                        </div>

                        <div class=' col-span-1'>

                                <p>
                                    <b> Libraries and CSS Frameworks</b>
                                    <ul class="list-disc ml-4">
                                       <li>React</li>
                                       <li>JQuery</li> 
                                       <li>Bootsrap</li>
                                       <li>Tailwind</li>
                                       
                                    </ul>
                                </p>
                        </div>
                    </div><br/>
                    I am also skilled in UML for the documentation of the software products. I have used the above 
                    mentioned skills in some projects that I did individually and some as a team. From my studies, I 
                    acquired knowledge in Machine Learning, Datamining and Computer Security as well. 
                    I have good analytical skills such as communication, problem solving and many more. I am a hard working person who 
                    is goal-oriented and eager to explore and learn new things.<br/> 

                    Below is my resume if you would like to check it out and my contacts. Thank you for visiting my portfolio.
                     

                    <br/><br/>
                    </p>

                </div>

                <div class="col-span-1 lg:ml-8 mt-2 lg:px-12 px-2 items-center">
                        <IconContext.Provider value={{ color: 'red', size: '40px', padding:'2px 2px' }}>
                            
                            <FaFilePdf class="  my-1"/>
                        
                        </IconContext.Provider>
                        <p class="md:text-2xl text-sm">
                        
                        <a href={cv} class="text-blue-700 hover:underline" download="Rufaro_Chiuta_CV">My Resume</a>
                        </p>
                        
                    </div>
            </div>


            <h5 class="mx-auto mb-4 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-4xl pt-2">
            Contact <br/><br/>
            </h5>

            <div className=''>
                <div className=' '> 
                    <div class="   grid  lg:grid-cols-3 lg:gap-x-3 m-auto md:grid-col-1 md:gap-x-2 grid-col-1 ">

                      <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-center sm:justify-center">

                          <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                              <a href="mailto:rufarochiuta@gmail.com"target="blank"><div class="  sm:items-center sm:justify-center  mx-2 mt-5 mb-5">
                              
                              <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center  mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-2xl font-bold"><a href="mailto:rufarochiuta@gmail.com"target="blank" className="block py-2 pl-3 pr-4 underline text-navcolour rounded 
                              hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-5 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email </a></span></div>
                              

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

                      <div class="lg:px-1 px-12 mx-auto col-span-1 max-w-max  md:w-1/2 sm:items-center sm:justify-center">

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