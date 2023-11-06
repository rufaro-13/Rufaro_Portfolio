import React from 'react'

import ortu from '../images/ortu_png.png'
import veemu from '../images/veemu_png.png'
import continued from '../images/CHC_png.png'
import gg from '../images/gg_png.png'
import stain from '../images/StainMasters_png.png'
function Works() {
  return (
    <div>
      <section class="bg-cover bg-center bg-no-repeat  bg-gray-400 bg-blend-multiply pt-12">
      <div className=' grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

<div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

    <img class="rounded-t-lg" src={continued} alt=""height={'80px'} width={'300px'} />
    <h5 className="md:text-2xl  text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
        <p className='text-center'>
        Continued HealthCare website
        </p>
    </h5>

  
</div>

<div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

    <img class="rounded-t-lg" src={gg} alt="" height={'200px'} width={'300px'} />
    <h5 className="md:text-2xl  text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
        <p className='text-center'>
        GGHealthSolutions website
        </p>
    </h5>

    
</div>

<div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

    <img class="rounded-t-lg" src={ortu} alt="" height={'200px'} width={'300px'}/>
    <h5 className="md:text-2xl  text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-6">
        <p className='text-center'>
        Ortu Specialised Home website
        </p>
    </h5>

</div>

<div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

    <img class="rounded-t-lg" src={stain} alt="" height={'200px'} width={'300px'}/>
    <h5 className="md:text-2xl  text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
        <p className='text-center'>
        StainMasters Limited website
        </p>
    </h5>

</div>

<div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

   <img class="rounded-t-lg" src={veemu} alt=""height={'200px'} width={'200px'} />
    <h5 className="md:text-2xl  text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-6">
        <p className='text-center'>
        VEEMU HealthCare website
        </p>
    </h5>

    
</div>

</div>
      </section>
    </div>
  )
}

export default Works