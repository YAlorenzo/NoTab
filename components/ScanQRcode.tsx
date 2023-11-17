import React from 'react'

const ScanQRcode = () => {
  return (
    <section className='mt-[1100px] sm:mt-[500px] lg:mt-80'>
      <div className='max-sm:flex max-sm:flex-col-reverse'>
        <div className='relative flex justify-center'>
          <div className='flex'>
            <img src="/QRcode.png" alt="img" className='w-[180px] sm:w-[280px] lg:w-[320px]' />
            <div className='absolute left-[70%] -bottom-[60px] sm:top-[50%] sm:left-[70%] sm:centred'>
              <img src="/arrow.svg" alt="img"  className='max-sm:rotate-45'/>
              <p className='lg:text-2xl font-bold mt-6 sm:mt-2'>
                Scan QR-code
              </p>
            </div>
          </div>
          
          <div className='absolute circle top-[50%] left-[50%] w-full h-full lg:w-[1000px] lg:h-[900px] -z-20 rounded-full' />
          <img src="/QRcodeBg.png" alt="img" className='w-full absolute -z-10 top-[50%] left-[50%] centred'/>
        </div>
        <div className='fix-container w-full sm:flex sm:justify-between sm:items-center mt-20 mb-16'>
          <h2 className='text-2xl sm:text-5xl font-bold'>
            Generate your <br className='hidden sm:block'/> QR-code
          </h2>
          <p className='text-base sm:text-lg font-normal max-sm:mt-6'>
            The guest QR code is scanned <br className='hidden sm:block'/>
            by the staff and automatically sent
          </p>
        </div>
      </div>
    </section>
  )
}

export default ScanQRcode