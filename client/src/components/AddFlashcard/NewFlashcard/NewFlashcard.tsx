import React, { FC, useState } from "react"
import * as S from "./NewFlashcard.styles"
import { fetchData } from "common/utils"

export const NewFlashcard: FC<any> = ({ target, source }) => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
  const saveFlashcard = () =>
    fetchData("/flashcard", {
      method: "POST",
      headers: myHeaders,
      body: {
        from: '<strong class="headword">test</strong>',
        fromLang: "pl",
        to:
          'Hund <span class="genus"><acronym title="masculine">m</acronym></span>',
        toLang: "de",
        userId: "5f87724d7f0a666b3d8ff088",
      },
    })

  const getHTML = (from: { __html: string }) => {
    return {
      __html: `${from}`,
    }
  }
  return (
    <S.Flashcard>
      <p dangerouslySetInnerHTML={getHTML(target)} />
      <button onClick={() => saveFlashcard()}>save flashcard</button>
    </S.Flashcard>
  )
}
