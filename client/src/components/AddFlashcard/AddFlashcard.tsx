import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "common/utils"
import * as S from "./AddFlashcard.styles"
import { NewFlashcard } from "./NewFlashcard"

export default () => {
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
        console.log(response[0][0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
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
