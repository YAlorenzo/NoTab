import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header>
          <div className='fix-container'>
              <div className='lg:max-w-[400px] flex justify-between items-center pt-12 '>
                  <div className='flex justify-between'>
                      <Image src="/logo.svg" alt='logo' width={50} height={50} className='sm:w-[100px] sm:h-[100px]'/>
                      <Image src="/NoTabLogo.svg" alt='NoTab' width={50} height={24} className='sm:w-[100px]' />
                  </div>
                  <div className='flex justify-between gap-[14px]'>
                      <Image src="user.svg" alt='user' className='hidden sm:block' width={25} height={25}/>
                      <Link href="/" className='underline text-sm font-medium sm:text-lg'>
                        Login
                      </Link>
                  </div>
                  
              </div>
              
          </div>
          
      </header>
  )
}

export default Header