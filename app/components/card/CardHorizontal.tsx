"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ICard } from './Card';

const CardHorizontal = ({
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  const router = useRouter()

  return (
    <div className='py-8 grid grid-cols-3 gap-8'>
      <div className="w-full h-full">
        <Image className="w-full rounded" src={image && image?.imageUrl || ""} alt={image && image?.imageAlt || ""} width={32} height={32} />
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div className='flex flex-col gap-2'>
          {
            description?.length && description?.map((item, index: number) =>
              <p key={item + index}>{item}</p>
            )
          }
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start col-span-3">
          {tags?.length && tags?.map((item, index: number) =>
            <button
              key={JSON.stringify(item?.link + index)}
              onClick={() => { router.push(item.link || "") }}
              className='bg-[#4aa6b3] hover:bg-[#67e8f9] transition px-3 py-1 rounded-3xl'>{item.text || ""}
            </button>
          )}
        </div>
    </div>
  )
}

export default CardHorizontal