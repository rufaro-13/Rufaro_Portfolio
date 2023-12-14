import React from 'react'
import ortu from '../images/ortu.png'
import veemu from '../images/veemu.png'
import veemu1 from '../images/vee.jpg'
import continued from '../images/cont.png'
import cont from '../images/contin.jpg'
import gg from '../images/gg.png'
import stain from '../images/stain.png'
import stain1 from '../images/masters.jpg'
/* import kosiwa from '../images/new kosiwalogo.jpeg' */
function work() {
  return (
    <div>
        <section className="bg-cover bg-center bg-no-repeat   bg-blend-multiply pt-12">

            <div class="mx-2 md:mx-8 w-fit">
                <p className='text-bluetheme text-2xl font-bold mx-1'>Welcome to my work page</p>

                <p className='text-bluetheme text-base  mx-1'>From time to time, I have been creating websites and in each project 
                I have learnt a new language or skill. I believe with time I will get better and better. Below are some of my works.
                </p>

            </div>
            <section className=" pt-12">
                <div className='pt-8 px-5 items-center justify-center'>
                    <p className='text-bluetheme text-xl md:text-2xl font-bold mx-1'>
                        <a href="https://ortuspecialisedhome.com" target='blank' rel="noreferrer"className='font-bold underline'>Ortu Specialised Home</a> <span className='text-bluetheme font-normal text-base mx-1'> a website for health care services.  
                        <a href="https://ortuspecialisedhome.com" target='blank' rel="noreferrer" className='font-bold underline'>visit</a></span>

                    </p>
                </div>
                <div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-12 md:px-8 pl-3">

                    <div className='web items-center justify-center'>
                        <img src={ortu}className="workimage rounded-3xl border-solid md:border-8 border-4 border-black md:mx-5 mx-2"alt="Ortu Logo" />
                    </div>
                    <div className='phone'>
                        <img src={veemu1}className="workimage1 rounded-3xl border-solid md:border-8 border-4 border-black ml-2 md:mx-5" alt="Ortu Logo" />
                    </div>

                </div>
            </section>
            <section className=" pt-12">
                <div className='pt-20 px-5 items-center justify-center'>
                        <p className='text-bluetheme text-xl md:text-2xl font-bold mx-1'>
                            <a href="https://www.stainmasterslimited.com/" target='blank' rel="noreferrer"className='font-bold underline'>StainMasters Limited</a> <span className='text-bluetheme font-normal text-base mx-1'> a website for cleaning services.  
                            <a href="https://www.stainmasterslimited.com/" target='blank' rel="noreferrer" className='font-bold underline whitespace-normal'> visit</a></span>

                        </p>
                </div>

                <div className="md:flex grid lg:grid-col-1 sm:items-center sm:justify-between pt-12 md:px-8 pl-2">

                    <div className='web items-center justify-center'>
                        <img src={stain}className="workimage rounded-3xl border-solid md:border-8 border-4 border-black md:mx-5 mx-2"alt="Ortu Logo" />
                    </div>
                    <div className='phone'>
                        <img src={stain1}className="workimage1 rounded-3xl border-solid md:border-8 border-4 border-black ml-2 md:mx-5" alt="Ortu Logo" />
                    </div>

                </div>
            </section>
            <section className=" pt-12">
                <div className='pt-20 px-5 items-center justify-center'>
                        <p className='text-bluetheme text-xl md:text-2xl font-bold mx-1'>
                            <a href="https://veemuhealthcare.co.uk/" target='blank' rel="noreferrer"className='font-bold underline'>VEEMUHealthCare</a> <span className='text-bluetheme font-normal text-base mx-1'> a website for health care services.  
                            <a href="https://veemuhealthcare.co.uk/" target='blank' rel="noreferrer" className='font-bold underline whitespace-normal'> visit</a></span>

                        </p>
                </div>

                <div className="md:flex grid lg:grid-col-1 sm:items-center sm:justify-between pt-12 md:px-8 pl-2">

                    <div className='web items-center justify-center'>
                        <img src={veemu}className="workimage rounded-3xl border-solid md:border-8 border-4 border-black md:mx-5 mx-2"alt="Ortu Logo" />
                    </div>
                    <div className='phone'>
                        <img src={veemu1}className="workimage1 rounded-3xl border-solid md:border-8 border-4 border-black ml-2 md:mx-5" alt="Ortu Logo" />
                    </div>

                </div>
            </section>
            <section className=" pt-12">
                <div className='pt-20 px-5 items-center justify-center'>
                        <p className='text-bluetheme text-xl md:text-2xl font-bold mx-1'>
                            <a href="https://continuedhealthcare.com" target='blank' rel="noreferrer"className='font-bold underline '>ContinuedHealthCare </a> <span className='text-bluetheme font-normal text-base mx-1'> a website for health care services.   
                            <a href="https://continuedhealthcare.com" target='blank' rel="noreferrer" className='font-bold underline whitespace-normal'> visit</a></span>

                        </p>
                </div>

                <div className="md:flex grid lg:grid-col-1 sm:items-center sm:justify-between pt-12 md:px-8 pl-2">

                    <div className='web items-center justify-center'>
                        <img src={continued}className="workimage rounded-3xl border-solid md:border-8 border-4 border-black  md:mx-5 mx-2" alt="Ortu Logo" />
                    </div>
                    <div className='phone'>
                        <img src={cont}className="workimage1 rounded-3xl border-solid md:border-8 border-4 border-black ml-2 md:mx-5" alt="Ortu Logo" />
                    </div>

                </div>
            </section>
            <section className=" pt-12">
                <div className='pt-20 px-5 items-center justify-center'>
                        <p className='text-bluetheme  text-xl md:text-2xl font-bold mx-1'>
                            <a href="https://www.gghealthsolutions01.com/" target='blank' rel="noreferrer"className='font-bold underline'>GGHealthSolutions</a> <span className='text-bluetheme font-normal text-base mx-1'> a website for health care services.  
                            <a href="https://www.gghealthsolutions01.com/" target='blank' rel="noreferrer" className='whitespace-normal font-bold underline'> visit</a></span>

                        </p>
                    </div>
                <div className="md:flex grid lg:grid-col-1 sm:items-center sm:justify-between pt-12 md:px-8 pl-2">

                    <div className='web items-center justify-center'>
                        <img src={gg}className="workimage rounded-3xl border-solid md:border-8 border-4 border-black md:mx-5 mx-2" alt="Ortu Logo" />
                    </div>
                    <div className='phone'>
                        <img src={cont}className="workimage1 rounded-3xl border-solid md:border-8 border-4 border-black ml-2 md:mx-5" alt="Ortu Logo" />
                    </div>

                </div>
            </section>

        </section>
    </div>
  )
}

export default work