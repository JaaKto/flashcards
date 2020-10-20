import React, { useState, useEffect } from "react"
import * as S from "./Flashcards.styles"
import { Search } from "components/Search"
import { fetchData } from "common/utils"
import { Flashcard } from "./Flashcard"
import { FlashcardsContainer } from "./FlashcardsContainer/FlashcardsContainer"

export default () => {
  const [flashcards, setFlashcards] = useState<Flashcard[] | []>([])
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

  return (
    <S.Flashcards>
      <p>{`You have ${flashcards.length} Flashcards`}</p>
      <FlashcardsContainer {...{ flashcards }} />
      <Search />
    </S.Flashcards>
  )
}
