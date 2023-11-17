import { getInLinks } from '@/constants'
import React from 'react'

const GetInTouch = () => {
  return (
    <section className='max-sm:mt-20'>
      <div className='fix-container relative'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold sm:text-5xl'>
            Get In Touch
          </h2>
          <p className='text-base font-normal sm:text-lg mt-6'>
            Have questions about Noble or just want to say hello? <br />
            Drop us a line and a member of our team will getback to you shortly.
          </p>
        </div>

        <form className='w-full lg:w-[800px] flex flex-col gap-7 mx-auto mt-10 sm:mt-20 '>
        <input type="text" placeholder='Name' className='input-get'/>
        <input type="text" placeholder='Venue Name' className='input-get'/>
        <div className='flex gap-6 max-sm:flex-wrap'>
         <input type="text" placeholder='Venue City' className='input-get2' />
         <input type="text" placeholder='State City' className='input-get2' />
        </div>
        <input type="text" placeholder='Email' className='input-get'/>
        <input type="text" placeholder='Subject' className='input-get'/>
        <textarea name="messege" placeholder='Message' id="messege" className='input-get'></textarea>

        <button type="submit" className='flex justify-center bg-black border mx-auto border-[#FFFFFF80]
         w-full sm:w-[400px] py-6 rounded-xl text-2xl text-white font-bold'>
          Send
        </button>
        </form>
        
        <div className='absolute gradient-ordering-1 top-0 sm:top-[10%] w-[280px] h-[280px] -z-10' />
        <div className='absolute gradient-ordering-1 bottom-0 sm:bottom-[10%] right-0 w-[280px] h-[280px] -z-10' />

        <div className='flex flex-col items-center mt-20'>
          <h2 className='text-2xl font-bold'>
            DOWNLOAD OUR APP
          </h2>
          <div className='flex flex-wrap gap-5 sm:gap-16 mt-8 justify-center items-center'>
            {getInLinks.map((elem) => (
              <a href={elem.link}>
                 <img src={elem.icon} alt={elem.title} className='w-[200px]'/>
              </a>
            )) }
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default GetInTouch