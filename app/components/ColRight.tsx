"use client"

import clsx from 'clsx';
import { useState } from 'react';
import { Experience, Project, Skills } from '.';
import { toSlug } from '../utils';

const content = {
  highlightText: "huỳnh",
  title: "đại nguyên",
  subtitle: "Frontend Developer",
  sections: [
    {
      title: "Technical skills",
    },
    {
      title: "Work experience",
      list: [
        "2022 - 2024 DISION Tech LLC: Frontend Developer",
        "2021 - 2022 3ForCom: IT Business Analyst",
        "2022 - 2019 The Coca-Cola Vietnam: Salesman"
      ]
    },
    {
      title: "Project",
      list: [
        "Soft Skills: Time Management, Teamwork, Communication.",
      ]
    }
  ]
}
const ColRight = () => {
  const [slide, setSlide] = useState("technical-skills")
  let block
  switch (slide) {
    case "technical-skills": block = <Skills />
      break;
    case "work-experience": block = <Experience />
      break;
    case "project": block = <Project />
      break;
    default: block = <Skills />
  }
  return (
    <div className='flex flex-col gap-8'>
      <div className='xl:block hidden'>
        <h1 className='text-highligh uppercase xl:text-6xl text-2xl font-bold flex flex-col gap-8'>
          {content?.highlightText} {content?.title}
        </h1>
        <p className='xl:text-2xl'>{content?.subtitle}</p>
      </div>
      <div className='flex gap-4'>
        {content?.sections?.map((items: any, index: number) => <p className={clsx(slide === toSlug(items.title) ? "!text-[#a5f3fc]" : "", 'cursor-pointer link border-red-100 border-r-2 pr-4 last-of-type:border-none')} key={items.title + index} onClick={() => { setSlide(toSlug(items.title)) }} >{items.title}</p>)}
      </div>
      {block}
    </div >)
}

export default ColRight