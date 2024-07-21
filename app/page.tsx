import React from 'react'
import { ColLeft, ColRight, Footer, Header } from './components'

const page = () => {
  return (
    <div className='container max-w-[1200px] mx-auto px-16'>
      <Header />
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-2'>
          <ColLeft />
        </div>
        <div className='col-span-3'>
          <ColRight />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page