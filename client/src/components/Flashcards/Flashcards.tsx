import React, { useState, useEffect, useContext } from "react"
import * as S from "./Flashcards.styles"
import { Search } from "./Search"
import { fetchData } from "common/utils"
import { Card } from "./Flashcard.types"
import { FlashcardsContainer } from "./FlashcardsContainer/FlashcardsContainer"
import { AppContext, setError } from "common/services"

export default () => {
  const { state, dispatch } = useContext(AppContext)
  const [flashcards, setFlashcards] = useState<Card[] | []>([])
  useEffect(() => {
    fetchData(`/flashcards`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then((response: any) => {
        setFlashcards(response.flashcards)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(flashcards)

  return (
    <S.Flashcards>
      <Search />
      <button
        onClick={() => {
          dispatch(setError("test err"))
          console.log(state.status)
        }}
      >
        Click
      </button>
      <p>{`You have ${flashcards.length} Flashcards`}</p>
      <FlashcardsContainer {...{ flashcards }} />
    </S.Flashcards>
  )
}
