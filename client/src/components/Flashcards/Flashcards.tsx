import React, { useState, useEffect } from "react"
import * as S from "./Flashcards.styles"
import { Search } from "./Search"
import { fetchData } from "common/utils"
import { Card } from "./Flashcard.types"
import { FlashcardsContainer } from "./FlashcardsContainer/FlashcardsContainer"

export default () => {
  const [flashcards, setFlashcards] = useState<Card[] | []>([])
  useEffect(() => {
    fetchData(`/flashcards/all`, {
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
      <p>{`You have ${flashcards.length} Flashcards`}</p>
      <FlashcardsContainer {...{ flashcards }} />
    </S.Flashcards>
  )
}
