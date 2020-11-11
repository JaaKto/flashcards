import React, { useContext, useEffect } from "react"
import * as S from "./Flashcards.styles"
import { Flashcard } from "./Flashcard/Flashcard"
import { FlashcardContext, getFlashcard, setError } from "common/services"
import { isAuthenticated, fetchData } from "common/utils"

export default () => {
  const { state, dispatch } = useContext(FlashcardContext)

  useEffect(() => {
    if (isAuthenticated()) {
      fetchData(`/flashcards`, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      })
        .then((response: any) => {
          dispatch(getFlashcard(response.flashcards))
        })
        .catch((err: any) => {
          dispatch(setError(err))
        })
    }
  }, [])
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
