import Image from 'next/image'
import React from 'react'
const content = {
  highlightText: "huỳnh",
  title: "đại nguyên",
  subtitle: "Frontend Developer",
  sections: [
    {
      title: "Technical skills",
      list: [
        "Programming Languages: Typescript, Javascript.",
        "Frameworks / Platforms: ReactJS, Next.js, Antd, Tailwinds, Bootstrap,...",
        "Markup: HTML5, CSS3, SCSS, MD,...",
        "IDEs: Visual Studio Code, Visual Studio.",
        "Operating Systems: Window, Mac OS, Linux.",
        "Manage Source Code: Gitea, Github, Gitlab.",
        "Data Fetching Libraries: Axios.",
        "Soft Skills: Time Management, Teamwork, Communication.",
      ]
    },
    {
      title: "Personal skills",
      list: [
        "Soft Skills: Time Management, Teamwork, Communication.",
      ]
    },
    {
      title: "Work experience",
      list: [
        "DISION Tech LLC: Frontend Developer 2022 - 2024",
        "3ForCom: IT Business Analyst 2021 - 2022",
        "The Coca-Cola Vietnam: Salesman 2022-2019"
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
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='uppercase text-5xl flex flex-col gap-8'>
        <span>{content?.highlightText}</span>
        <span className='pl-12'>
          {content?.title}
        </span>
      </h1>
      <p>{content?.subtitle}</p>
      {content?.sections?.map((items: any) =>
      (<div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'>{items.title}</h2>
        {items?.list?.map((li: string) => <p>{li}</p>)}
      </div>)
      )}
      <div className='flex flex-col gap-2'>
        <h2 className='pb-4 uppercase'></h2>
      </div>
    </div>)
}

export default ColRight