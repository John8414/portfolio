import Image from 'next/image'
import React from 'react'

const ColLeft = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='xl:w-2/5 h-full' >
        <Image className='w-full rounded-2xl' width={150} height={150} src={"/avatar.jpg"} alt='image' />
      </div>
      <div className='block xl:hidden'>
        <h1 className='text-highligh uppercase xl:text-6xl text-4xl font-bold flex flex-col gap-2'>
          <span>huỳnh</span>
          <span className='xl:pl-48'>
            đại nguyên
          </span>
        </h1>
        <p className='xl:text-2xl'>Frontend Developer</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>About Me</h2>
        <p> A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>Contact Me</h2>
        <p><span>Phone:</span> (+84) 7777 08 457</p>
        <p><span>Email:</span> jmnguyen276@gmail.com</p>
        <p><span>Location:</span> Ho Chi Minh city</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>Language</h2>
        <p><span>English</span> Upper-Intermediate</p>
        <p><span>Vietnamese</span> Native</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>EDUCATION</h2>
        <p>Bachelor&apos;s Degree in
          Business Management
          at Hanoi Open University</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>CERTIFICATE</h2>
        <p>Professional Frontend Developer at Cybersoft Acadamy</p>
        <p>Business analyst at Fpt Acadamy</p>
      </div>
    </div>
  )
}

export default ColLeft