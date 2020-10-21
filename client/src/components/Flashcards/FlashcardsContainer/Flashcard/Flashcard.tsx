import React, { FC } from "react"
import * as S from "./Flashcard.styles"
import { Card } from "../../Card"

export const Flashcard: FC<Card> = ({
  to,
  from,
  fromLang,
  toLang,
  creator,
  createdAt,
  updatedAt,
}) => {
  const getHTML = (from: { __html: string }) => {
    return {
      __html: `${from}`,
    }
  }
  return <S.Flashcard dangerouslySetInnerHTML={getHTML(from)} />
}
