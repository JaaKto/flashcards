import React, { useContext } from "react"
import * as S from "./Flashcards.styles"
import { Flashcard } from "./Flashcard/Flashcard"
import { FlashcardContext } from "common/services"

export default () => {
  const { state } = useContext(FlashcardContext)
  return (
    <S.Flashcards>
      <S.FlashcardsContainer>
        {state.flashcards.map((card) => (
          <Flashcard key={card._id} {...{ ...card }} />
        ))}
      </S.FlashcardsContainer>
    </S.Flashcards>
  )
}
