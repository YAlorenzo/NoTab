"use client"

import { useEffect } from 'react';
import React from 'react'

const Scanner = () => {

 useEffect(() => {
    function updateMarginTop() {
      const paragraph = document.getElementById('dynamic-paragraph') as HTMLDivElement;
      const nextSection = document.querySelector('.next-section') as HTMLElement;
      if (paragraph && nextSection) {
        const paragraphHeight = paragraph.clientHeight;
        nextSection.style.marginTop = paragraphHeight + 'px';
      }
    }

    updateMarginTop();
    window.addEventListener('resize', updateMarginTop);

    return () => {
      window.removeEventListener('resize', updateMarginTop);
    };
  }, []);

  return (
    <section>
      <div className='flex h-[450px] sm:h-[900px] max-sm:relative items-end background-with-gradient'>
          <div className='fix-container flex max-lg:flex-col-reverse max-sm:absolute max-sm:top-[75%] items-end'>
        <div className='max-sm:hidden flex max-sm:flex-col mx-auto gap-12'>
        <img src="/scannerPhoneF.png" alt="phone" className='w-full max-w-[280px] sm:w-1/2 lg:w-[330px] mx-auto max-sm:mt-16' />
        <img src="/scannerPhoneS.png" alt="phone" className='w-full max-w-[280px] sm:w-1/2 lg:w-[330px] mx-auto' />
        </div>   
        <div className='sm:mb-20 lg:ml-32'>
          <h2 className='text-2xl font-bold sm:text-5xl'>ID Scanner</h2>
          <p id='dynamic-paragraph' className='text-base font-base sm:text-lg mt-6'>
            Scan, verify, and collect
            data on each person that walks through your door
            to humanize your data. You also get
            a digital 86 list as well as a citywide ban
            list to keep your venue safe.
          </p>
        </div>
      </div>
      </div>
      <div className='sm:hidden next-section flex max-sm:flex-col mx-auto gap-12 fix-container'>
        <img src="/scannerPhoneF.png" alt="phone" className='w-full max-w-[280px] sm:w-1/2 lg:w-[330px] mx-auto max-sm:mt-16' />
        <img src="/scannerPhoneS.png" alt="phone" className='w-full max-w-[280px] sm:w-1/2 lg:w-[330px] mx-auto' />
        </div> 
    </section>
  )
}

export default Scanner