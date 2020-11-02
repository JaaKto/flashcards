import React, { useContext } from "react"
import * as S from "./Flashcards.styles"
import { Search } from "./Search"
import { Flashcard } from "./Flashcard/Flashcard"
import { FlashcardContext } from "common/services"

export default () => {
  const { state } = useContext(FlashcardContext)
  return (
    <S.Flashcards>
      <Search />
      <S.FlashcardsContainer>
        {state.flashcards.map((card) => (
          <Flashcard key={card._id} {...{ ...card }} />
        ))}
      </S.FlashcardsContainer>
    </S.Flashcards>
  )
}
