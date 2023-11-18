import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-32 sm:mb-20'>
      <div className='relative'>
        <div className='fix-container flex max-sm:flex-col-reverse sm:justify-between'>
          <div className='max-sm:flex max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:mt-12'>
            <img src="/footerLogo.svg" alt="img"/>
            <p className='text-sm sm:text-lg font-normal mt-4'>
              Contact us: <br className='max-sm:hidden'/>
               <a href="mailto:support@notab.com" className='font-bold hover-color'>support@notab.com</a>
            </p>
            <p className='sm:text-sm text-lg font-bold mt-5'>
              © 2020 - NoTab®
            </p>
          </div>
          <div className='text-lg font-extrabold max-sm:text-center'>
            <p className='cursor-pointer hover-color'>Terms to use</p>
            <p className='cursor-pointer mt-4 hover-color'>Privacy policy</p>
          </div>
        </div>
        <div className='absolute gradient-ordering-1 max-sm:top-0 sm:-bottom-[50%] left-0 w-full h-full sm:w-[400px] sm:h-[400px] -z-10'/>
      </div>
    </footer>
  )
}

export default Footer