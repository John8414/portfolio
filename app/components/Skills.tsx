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
    }
  ]
}
const Skills = () => {
  return (
    <div className='flex flex-col gap-8'>
      {content?.sections?.map((items: any, index: number) =>
      (<div className='flex flex-col gap-2' key={items.title + index}>
        <h2 className='text-highligh xl:text-2xl pb-4 uppercase'>{items.title}</h2>
        {items?.list?.map((li: string, index: number) => <p key={li + index}>{li}</p>)}
      </div>)
      )}
    </div>
  )
}

export default Skills