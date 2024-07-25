import Image from 'next/image';
import React from 'react'
import { CardHorizontal, CardVertical } from '.';

export interface ICard {
  type?: string;
  title: string;
  subtitle?: string;
  description?: string[]
  image?: {
    imageUrl?: string;
    imageAlt?: string;
  }
  tags?: {
    text: string,
    link: string,
  }[];
}

export enum CardType {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

const Card = ({
  type,
  title,
  subtitle,
  description,
  image,
  tags, }: ICard) => {

  let card
  switch (type) {
    case CardType.VERTICAL: card = <CardVertical
      title={title || ""}
      subtitle={subtitle || ""}
      description={description || []}
      image={image}
      tags={tags}
    />
      break;
    case CardType.HORIZONTAL: card = <CardHorizontal
      title={title || ""}
      subtitle={subtitle || ""}
      description={description || []}
      image={image}
      tags={tags}
    />
    default: card = <CardHorizontal
      title={title || ""}
      subtitle={subtitle || ""}
      description={description || []}
      image={image}
      tags={tags}
    />
      break;
  }

  return (
    card
  )
}

export default Card