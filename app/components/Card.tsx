import React from 'react'

export interface ICard {
  title:string;
  subtitle?:string;
  description?:string
  imageUrl?:string;
  url?:string;
  tags:string[]
}
const Card = () => {
  return (
    <div className='py-8'>
      <h3>title</h3>
      <button className='bg-[#4aa6b3] hover:bg-[#67e8f9] transition px-3 py-1 rounded-3xl'>hello</button>
    </div>
  )
}

export default Card