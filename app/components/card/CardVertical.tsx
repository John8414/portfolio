"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ICard } from './Card';

const CardVertical = ({
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  const router = useRouter()

  return (
    <div className='flex flex-col gap-4'>
      <div className="relative w-full">
        <Image className="w-full rounded-lg" src={image && image?.imageUrl || ""} alt={image && image?.imageAlt || ""} width={32} height={32} />
        <div className="absolute bottom-0 w-full text-center">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
      </div>

      <div className='flex flex-col gap-2 pl-4'>
        {
          description?.length && description?.map((item, index: number) =>
            <p key={item + index}>{item}</p>
          )
        }
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start">
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

export default CardVertical