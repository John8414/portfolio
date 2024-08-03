"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ICard } from './Card';

const CardHorizontal = ({
  link,
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  const router = useRouter()

  return (
    <div className='grid xl:grid-cols-3 gap-8 w-fit'>
      <div className="w-full h-full hover:cursor-pointer col-span-3 xl:col-span-1"
        onClick={() => { router.push(link || "/") }}
      >
        <Image className="w-full h-full rounded-2xl object-cover" src={image && image?.imageUrl || ""} alt={image && image?.imageAlt || ""} width={32} height={32} />
      </div>
      <div className="xl:col-span-2 col-span-3 flex flex-col gap-4 items-start">
        <h3 className='text-blue-regular xl:text-2xl text-xl'>{title}</h3>
        <h4 className='text-base'>{subtitle}</h4>
        <div className='flex flex-col gap-2'>
          {
            description?.length && description?.map((item, index: number) =>
              <p key={item + index}>{item}</p>
            )
          }
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start col-span-3 h-fit">
        {tags?.length && tags?.map((item, index: number) =>
          <button
            key={JSON.stringify(item?.link + index)}
            onClick={() => { router.push(item.link || "") }}
            className='bg-blue-regular hover:bg-[#67e8f9] transition px-3 py-1 rounded-2xl'>{item.text || ""}
          </button>
        )}
      </div>
    </div>
  )
}

export default CardHorizontal