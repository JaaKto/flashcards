import React, { useState, useEffect, FC } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "common/utils"
import * as S from "./AddFlashcard.styles"
import { NewFlashcard } from "./NewFlashcard"

export const AddFlashcard = () => {
  const [state, setState] = useState<any>([])
  const {
    location: { search, pathname },
  } = useHistory()

  useEffect(() => {
    fetchData(pathname.slice(1) + search, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then((response: any) => {
        setState(response[0][0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(state)
  return (
    <S.FlashcardsContainer>
      <p dangerouslySetInnerHTML={{ __html: state.header }} />
      {state.translations &&
        state.translations.map((card: any) => (
          <NewFlashcard key={card.target} {...{ ...card }} />
        ))}
    </S.FlashcardsContainer>
  )
}
