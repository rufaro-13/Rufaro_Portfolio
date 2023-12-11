import React from 'react'
import ortu from '../images/ortu.png'
import veemu from '../images/veemu.png'
import continued from '../images/cont.png'
import gg from '../images/gg.png'
import stain from '../images/stain.png'
/* import kosiwa from '../images/new kosiwalogo.jpeg' */
function work() {
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

<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4 px-5">

    <div>
        <img src={ortu}className="rounded-lg border-solid border-4 border-black  mx-5"style={{width:"889px",height:"488px"}} alt="Ortu Logo" />
    </div>

</div>

<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4 px-5">

    <div>
        <img src={stain}className="rounded-lg border-solid border-4 border-black  mx-5"style={{width:"889px",height:"488px"}} alt="Ortu Logo" />
    </div>

</div>

<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4 px-5">

    <div>
        <img src={veemu}className="rounded-lg border-solid border-4 border-black  mx-5"style={{width:"889px",height:"488px"}} alt="Ortu Logo" />
    </div>

</div>

<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4 px-5">

    <div>
        <img src={continued}className="rounded-lg border-solid border-4 border-black  mx-5"style={{width:"889px",height:"488px"}} alt="Ortu Logo" />
    </div>

</div>

<div className="md:flex grid lg:grid-cols-6 sm:items-center sm:justify-between pt-4 px-5">

    <div>
        <img src={gg}className="rounded-lg border-solid border-4 border-black  mx-5"style={{width:"889px",height:"488px"}} alt="Ortu Logo" />
    </div>

</div>


</section>
    </div>
  )
}

export default work