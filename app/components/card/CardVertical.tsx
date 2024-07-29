"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ICard } from './Card';

const CardVertical = ({
  link,
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  const router = useRouter()

  return (
    <div className='flex flex-col gap-4 items-start bg-gray-bg p-6 rounded-2xl hover:shadow-card-shadow'>
      <div
        onClick={() => { router.push(link || "/") }}
        className="relative w-full h-1/2 rounded-lg hover:cursor-pointer">
        <Image className="w-full h-full rounded-lg object-cover" src={image && image?.imageUrl || ""} alt={image && image?.imageAlt || ""} width={32} height={32} />
        <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-background rounded-lg h-1/3 flex flex-col items-center justify-center">
          <h3 className='text-xl'>{title}</h3>
          <h4 className='text-xs'>{subtitle}</h4>
        </div>
      </div>

      <div className='flex flex-col gap-2 pl-4'>
        {
          description?.length && description?.map((item, index: number) =>
            <p className='text-gray-regular' key={item + index}>{item}</p>
          )
        }
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start mt-auto">
        {tags?.length && tags?.map((item, index: number) =>
          <button
            key={JSON.stringify(item?.link + index)}
            onClick={() => { router.push(item.link || "") }}
            className='text-gray-regular text-xs hover:bg-blue-regular border-blue-regular border-[1px] transition px-3 py-1 rounded-3xl'
          >
            {item.text || ""}
          </button>
        )}
      </div>
    </div>
  )
}

export default CardVertical