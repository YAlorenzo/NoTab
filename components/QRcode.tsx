import React from 'react'

const QRcode = () => {
  
  return (
    <section>
      <div className='flex max-lg:flex-col  justify-center items-center  gradient'>
        <img src="/QRcodeImgL.png" alt="img" className='hidden lg:block w-1/2' />
        <img src="/QRcodeImgR.png" alt="img" className='hidden lg:block w-1/2' />
          
        <div className='h-[450px] w-full background-QRcode1 lg:hidden flex items-end'>
          <div className='fix-container'>
             <h2 className='text-2xl font-bold sm:text-5xl'>
              QR code
            </h2>
            <p className='text-base font-normal sm:text-lg mt-6'>
              No more conflict situations due to wrong order.
              The guest selects the positions,
              and after that an individual QR code of his order is generated
          </p>
          </div> 
        </div>


        <div className='h-[450px] w-full background-QRcode2 lg:hidden relative'>
          <div className='flex gap-8 flex-wrap items-end justify-center fix-container w-full absolute top-[380px] sm:top-[200px]'>
              <img src="/QRcodePhoneF.png" alt="phone" className='w-[280px] lg:hidden'/>
              <img src="/QRcodePhoneS.png" alt="phone" className='w-[280px] lg:hidden' />
          </div>
        </div>

        <div className='fix-container w-full h-full lg:absolute lg:top-[10%]'>
          <div className='hidden lg:flex items-end h-full'>
             <div className='max-w-[350px]'>
            <h2 className='text-2xl font-bold sm:text-5xl'>
              QR code
            </h2>
            <p className='text-base font-normal sm:text-lg mt-6'>
              No more conflict situations due to wrong order.
              The guest selects the positions,
              and after that an individual QR code of his order is generated
          </p>
            </div>
          </div>
          <img src="/QRcodePhoneF.png" alt="phone" className='absolute bottom-0 centered-phone w-1/4 max-lg:hidden'/>
          <img src="/QRcodePhoneS.png" alt="phone" className='absolute right-0 top-[70%]  w-1/4 max-lg:hidden' />
      </div>
      </div>
      
    </section>
  )
}

export default QRcode