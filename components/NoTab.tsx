import React from 'react'

const NoTab = () => {
  return (
    <section className='hidden sm:block'>
      <div className='h-[1000px] w-full no-tab_bg flex justify-center items-center'>
         <img src="/notab.png" alt="img" className='rounded-3xl'/>
      </div>
    </section>
  )
}

export default NoTab