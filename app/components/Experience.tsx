import React from 'react'
import { Card } from '.'

const content = [
  {
    title: "Title",
    subtitle: "Subtitle",
    description: ["Description112", "Description23", "Description1234", "Description53"],
    image: {
      imageUrl: "https://via.placeholder.com/150",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "ReactJS", link: "https://react.dev/" },
      { text: "NextJS", link: "https://react.dev/" },
      { text: "Redux", link: "https://react.dev/" },
      { text: "TailWind", link: "https://react.dev/" },
      { text: "Antd", link: "https://react.dev/" }
    ]
  },
  {
    title: "Title1",
    subtitle: "Subtitle1",
    description: ["Description11", "Description12", "Description3", "Description4"],
    image: {
      imageUrl: "https://via.placeholder.com/150",
      imageAlt: "Image alt"
    },
    tags: [
      { text: "ReactJS", link: "https://react.dev/" },
      { text: "NextJS", link: "https://react.dev/" },
      { text: "Redux", link: "https://react.dev/" },
      { text: "TailWind", link: "https://react.dev/" },
      { text: "Antd", link: "https://react.dev/" }
    ]
  },
]

const Experience = () => {
  return (
    <div>
      {content?.length && content?.map((card, index: number) =>
        <Card
          key={card.title + index}
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