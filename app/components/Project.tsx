"use client"
import React from 'react'
import { Card } from '.'
const content = [
  {
    title: "Dision Tech",
    link: "https://dision.tech/",
    subtitle: "Team member",
    description: ["Working closely with designer team via Figma", "Using Strapi as a headless CMS and support SEO."],
    image: {
      imageUrl: "/images/project-2.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "NextJS", link: "https://nextjs.org/" },
      { text: "Redux", link: "https://redux.js.org/" },
      { text: "Strapi", link: "https://strapi.io/" },
      { text: "TailWind", link: "https://tailwindcss.com/" },
      { text: "Antd", link: "https://ant.design/" }
    ]
  },
  {
    title: "Orion",
    link: "",
    subtitle: "Team member",
    description: ["A client platform for customer looking and booking hotel.", "Property management hotel-specific system."],
    image: {
      imageUrl: "/images/project-1.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "NextJS", link: "https://nextjs.org/" },
      { text: "Redux", link: "https://redux.js.org/" },
      { text: "Axios", link: "https://axios-http.com/docs/intro" },
      { text: "TailWind", link: "https://tailwindcss.com/" },
      { text: "Strapi", link: "https://strapi.io/" },
      { text: "Antd", link: "https://ant.design/" }
    ]
  },
  {
    title: "Dynexo",
    link: "https://www.dynexo.de/",
    subtitle: "Team member",
    description: ["Working closely with designer team via Figma", "Using Strapi as a headless CMS and support SEO."],
    image: {
      imageUrl: "/images/project-3.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "NextJS", link: "https://nextjs.org/" },
      { text: "Redux", link: "https://redux.js.org/" },
      { text: "Strapi", link: "https://strapi.io/" },
      { text: "TailWind", link: "https://tailwindcss.com/" },
      { text: "Antd", link: "https://ant.design/" }
    ]
  },
  {
    title: "Taimi",
    link: "",
    subtitle: "Team member",
    description: ["Managing system that can be adapted to processes.", "Tracking projects and tasks based on agile, kanban"],
    image: {
      imageUrl: "/images/project-4.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "ReactJS", link: "https://react.dev/" },
      { text: "Redux", link: "https://redux.js.org/" },
      { text: "Strapi", link: "https://strapi.io/" },
      { text: "TailWind", link: "https://tailwindcss.com/" },
      { text: "Antd", link: "https://ant.design/" }
    ]
  }
]
const Project = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {content?.length && content?.map((card, index: number) =>
        <Card
          key={card?.title + index}
          link={card?.link}
          type="vertical"
          title={card.title || ""}
          subtitle={card.subtitle || ""}
          description={card.description || ""}
          image={card.image}
          tags={card.tags}
        />
      )}
    </div>
  )
}

export default Project