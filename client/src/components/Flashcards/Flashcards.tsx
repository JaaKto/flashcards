import React, { useEffect, useContext } from "react"
import * as S from "./Flashcards.styles"
import { Search } from "./Search"
import { fetchData } from "common/utils"
import { Flashcard } from "./Flashcard/Flashcard"
import { FlashcardContext, getFlashcard, setError } from "common/services"

export default () => {
  const { state, dispatch } = useContext(FlashcardContext)
  useEffect(() => {
    fetchData(`/flashcards`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then((response: any) => {
        dispatch(getFlashcard(response.flashcards))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
  }, [])

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
