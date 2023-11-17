import React from 'react'

const Ordering = () => {
  return (
    <section className='mt-48'>
      <div className='fix-container flex flex-col items-end'>
        <div className='w-full lg:w-max'>
          <h2 className='text-2xl font-bold sm:text-5xl'>
            Easier ordering. <br />
            Happier guests.
          </h2>
          <p className='text-base font-normal sm:text-lg mt-6'>
            NoTab makes it simple for patrons to easily
          </p>
        </div>
        <div className='w-full flex justify-center relative mt-8'>
          <div className='max-sm:mt-20 w-max relative'>
            <img src="/iphone.png" alt="img" className='sm:w-[660px]' />
            
            <div className='p-3 sm:p-5 rounded-[8px] border border-[#FFFFFF80] text-sm sm:text-xl font-medium bg-black h-max
            absolute -top-[15%] max-sm:left-[15%] sm:top-[20%] sm:right-[8%]'>
              No more lost or <br />
              forgotten credit cards
            </div>
            <div className='p-3 sm:p-5 rounded-[8px] border border-[#FFFFFF80] text-sm sm:text-xl font-medium bg-black h-max
            absolute top-[10%] max-sm:right-0 sm:top-[36%] sm:-left-[7%]'>
              No more lost or <br />
              forgotten credit cards
            </div>
            <div className='p-3 sm:p-5 rounded-[8px] border border-[#FFFFFF80] text-sm sm:text-xl font-medium bg-black h-max
            absolute bottom-0 right-0 sm:bottom-[25%] lg:-right-[5%]'>
              No more split <br />
              your tab
            </div>
             <div className='p-3 sm:p-5 rounded-[8px] border border-[#FFFFFF80] text-sm sm:text-xl font-medium bg-black h-max
            absolute bottom-[20%] sm:bottom-[20%] sm:left-[20%]'>
              Skip the line
            </div>


           
          </div>
           <div className='gradient-ordering-1 absolute  right-0 top-0 w-[280px] h-[280px] -z-10'/>
        </div>
      </div>
      
    </section>
  )
}

export default Ordering