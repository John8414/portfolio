import React from 'react'
import { ColLeft, ColRight, Footer, Header } from './components'

const page = () => {
  return (
    <div className='container max-w-[1200px] mx-auto xl:px-16 px-4'>
      <Header />
      <div className='grid grid-cols-5 xl:gap-16 gap-8'>
        <div className='xl:col-span-2 col-span-5'>
          <ColLeft />
        </div>
        <div className='xl:col-span-3 col-span-5'>
          <ColRight />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page