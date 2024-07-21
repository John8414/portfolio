import Image from 'next/image'
import React from 'react'

const ColLeft = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='w-full h-full' >
        <Image className='w-full rounded-t-3xl' width={150} height={150} src={"/avatar.jpg"} alt='image' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>About Me</h2>
        <p> A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>Contact Me</h2>
        <p><span className='text-highligh'>Phone:</span> (+84) 7777 08 457</p>
        <p><span className='text-highligh'>Email:</span> jmnguyen276@gmail.com</p>
        <p><span className='text-highligh'>Location:</span> Ho Chi Minh city</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>Language</h2>
        <p><span className='text-highligh'>English</span> Upper-Intermediate</p>
        <p><span className='text-highligh'>Vietnamese</span> Native</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>EDUCATION</h2>
        <p>Bachelor's Degree in
          Business Management
          at Hanoi Open University</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>CERTIFICATE</h2>
        <p>Professional Frontend Developer at Cybersoft Acadamy</p>
        <p>Business analyst at Fpt Acadamy</p>
      </div>
    </div>
  )
}

export default ColLeft