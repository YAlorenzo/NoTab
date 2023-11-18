'use client'

import React from 'react';
import { missionItems } from '../constants/index'
import {useState} from 'react'


const Mission = () => {

  return (
    <section className='mt-20'>
      <div className='fix-container'>
        <div className='flex justify-around gap-11 flex-wrap'>
          {missionItems.map((elem) => (
            <div key={elem.id} className='flex flex-col cursor-pointer w-full 
            sm:w-1/2 lg:w-1/3 py-8 px-6 sm:py-16 sm:px-12 justify-center 
            rounded-3xl border-gray-500 border-[2px] hover-shadow'>
              <div>
                 <h2 className='text-2xl font-bold sm:text-3xl max-w-[375px] mb-7'>{elem.title}</h2>
                 <a href='/' className='text-base font-normal sm:text-2xl underline text-white'>{elem.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <div className='fix-container flex max-sm:flex-col sm:justify-around gap-20 sm:gap-48 sm:items-center'>
          <img src="/heroPhone.png" alt="phone" className='w-1/3 rotate-90 hidden sm:block' />
        <div className='relative mt-10'>
           <h2 className='text-2xl sm:text-5xl font-bold'>Our mission <br className='hidden sm:block' /> and vision</h2>
        <p className='text-base sm:text-lg font-normal max-w-[450px] pt-6'>
          While technology is our sweet spot, we’ve developed our vision alongside
          our customers to ensure your everyday problems are solved through simplistic tools.
          And as your business grows, we’ll grow right alongside with you.
          </p>
          <div className='absolute mission_gradient__line top-0 sm:left-20 -z-10'></div>
        </div>
         <img src="/heroPhone.png" alt="phone" className='w-[170px] block sm:hidden mx-auto' />
       
      </div>
     
    </section>
  )
  
}
export default Mission