"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export interface ICard {
  type?: string;
  title: string;
  subtitle?: string;
  description?: string[]
  image?: {
    imageUrl?: string;
    imageAlt?: string;
  }
  tags: {
    text?: string,
    link?: string,
  }[];
}

const Card = ({ type,
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  const router = useRouter()

  return (
    <div className='py-8'>
      <Image src={image && image?.imageUrl || ""} alt={image && image?.imageAlt || ""} width={32} height={32} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div className='flex flex-col gap-2'>
        {
          description?.length && description?.map((item, index: number) =>
            <p key={item + index}>{item}</p>
          )
        }
      </div>
      <div className="flex flex-row gap-2 items-center justify-start">
        {tags?.length && tags?.map((item, index: number) =>
          <button
            key={item.link || "" + index}
            onClick={() => { router.push(item.link || "") }}
            className='bg-[#4aa6b3] hover:bg-[#67e8f9] transition px-3 py-1 rounded-3xl'>{item.text || ""}
          </button>
        )}
      </div>
    </div>
  )
}

export default Card