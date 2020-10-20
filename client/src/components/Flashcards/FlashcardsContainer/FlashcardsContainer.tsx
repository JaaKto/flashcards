import React, { useEffect, FC } from "react"
import { Flashcard, FlashcardList } from "../Flashcard"
import * as S from "./FlashcardsContainer.styles"

export const FlashcardsContainer: FC<FlashcardList> = ({ flashcards }) => {
  useEffect(() => {}, [flashcards])
  return (
    <S.FlashcardsContainer>
      {flashcards.map(({ _id, from }: Flashcard) => (
        <div key={_id}>{from}</div>
      ))}
    </S.FlashcardsContainer>
  )
}
