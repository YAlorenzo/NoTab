import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-lg:mt-20'>
        <div className='fix-container overflow-hidden'>
            <div className='flex justify-between'>
                <div className='mt-8'>
                    <h1 className='text-4xl leading-10 min-w-[200px] font-bold sm:text-6xl sm:leading-[70px] lg:mt-28'>
                    A platform <br  className='max-lg:hidden'/> that works smarter
                    </h1>
                    <div className='flex items-center sm:mt-7 lg:mt-14'>
                        <div className='max-md:hidden relative w-max ml-16 '>
                          <div className='hero_gradient__line ralative'></div>
                          <img src="/line.svg" alt="line" className='z-10 absolute centered-line '/>
                        </div>      
                        <p className='text-base sm:text-xl font-normal md:ml-8 mt-4 max-w-[300px]'>
                           NoTab allows bars & nightclubs to manage, understand, and grow their business from a single dashboard
                        </p> 
                    </div>
                </div>
                <div>
                    <img src="/heroPhone.png" alt="phone" className='min-w-[160px] w-[290px]' />
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero