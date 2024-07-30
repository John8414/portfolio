import React from 'react'
import { Card } from '.'

const content = [
  {
    title: "DISION Tech LLC",
    subtitle: "Frontend Developer 2022 - 2024",
    link: "https://dision.tech/",
    description: ["Developing websites using Strapi for CMS", "Collaborated closely with backend developers to integrate frontend components with server-side logic through RESTful APIs", "Developed and maintained frontend components with NextJS, TypeScript, JavaScript, HTML, CSS, and Antd."],
    image: {
      imageUrl: "/images/company-2.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "Frontend", link: "" },
      { text: "Website", link: "" },
      { text: "Web-app", link: "" },
      { text: "TailWind", link: "" },
      { text: "Antd", link: "" }
    ]
  },
  {
    title: "3ForCom",
    link: "",
    subtitle: "IT Business Analyst 2021 - 2022",
    description: ["Working closely with clients, technicians, and manager staff.", "Serving as a liaison between stakeholders and users.", "Ensuring solutions meet business needs and requirements.", "Working with engineers, product managers, designers, and stakeholders across the company to bring new features to the product."],
    image: {
      imageUrl: "/images/company-1.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "BA", link: "" },
      { text: "Team-work", link: "" },
      { text: "Project-management", link: "" }
    ]
  },
  {
    title: "The Coca-Cola Vietnam",
    link: "",
    subtitle: "Salesman 2019 - 2021",
    description: ["Working directly with clients to clarify requirements.", "Building professional relationships with clients.", "Reported daily, weekly, and monthly about issues, risks, and performance."],
    image: {
      imageUrl: "/images/company-3.jpg",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "Sales", link: "" },
      { text: "Salesman", link: "" },
      { text: "Coca-Cola", link: "" }
    ]
  }
]

const Experience = () => {
  return (
    <div>
      {content?.length && content?.map((card, index: number) =>
        <Card
          key={card.title + index}
          link={card?.link === "" ? "/" : card?.link}
          type="horizontal"
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

export default Experience