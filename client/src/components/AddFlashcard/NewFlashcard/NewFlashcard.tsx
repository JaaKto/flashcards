import React, { FC, useState } from "react"
import * as S from "./NewFlashcard.styles"
import { fetchData } from "common/utils"

export const NewFlashcard: FC<any> = ({ target, source }) => {
  const saveFlashcard = () =>
    fetchData("/flashcard", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      body: {
        from: '<strong class="headword">Kot</strong>',
        fromLang: "pl",
        to:
          'kał <span class="genus"><acronym title="masculine">m</acronym></span>',
        toLang: "de",
        userId: "5f87724d7f0a666b3d8ff088",
      },
    }).catch((err) => {
      console.log(err)
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
