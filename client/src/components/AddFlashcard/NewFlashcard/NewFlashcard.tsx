import React, { FC, useContext } from "react"
import * as S from "./NewFlashcard.styles"
import { fetchData } from "common/utils"
import {
  Flashcard,
  FlashcardContext,
  deleteFlashcard,
  addFlashcard,
} from "common/services"

export const NewFlashcard: FC<any> = ({ target, source }) => {
  const { state, dispatch } = useContext(FlashcardContext)
  const isPresent = state.flashcards
    .reduce((acc: string[], curr: Flashcard) => [...curr.to, ...acc], [])
    .includes(target)

  const getFlashcardId: any = state.flashcards.find(
    (item: Flashcard) => item.from === source && item.to.includes(target),
  )

  const saveFlashcard = () => {
    const body = {
      from: source,
      fromLang: "pl",
      to: target,
      toLang: "de",
      userId: localStorage.getItem("userId"),
    }
    fetchData("/flashcard", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=UTF-8",
      }),
      body: body,
    })
    // addFlashcard(body)
  }

  const removeFlashcard = () => {
    fetchData(`flashcard/${getFlashcardId._id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=UTF-8",
      }),
    })
    dispatch(deleteFlashcard(getFlashcardId._id))
  }

  const getHTML = (from: { __html: string }) => {
    return {
      __html: `${from}`,
    }
  }

  const handleClick = () =>
    isPresent
      ? (console.log("remove"), removeFlashcard())
      : (console.log("save"), saveFlashcard())

  console.log(isPresent)
  console.log(state.flashcards)
  return (
    <S.Flashcard {...isPresent}>
      <p dangerouslySetInnerHTML={getHTML(target)} />
      <button
        onClick={
          // console.log(getFlashcardId._id)
          // isPresent ? () => removeFlashcard() : saveFlashcard()
          () => handleClick()
          // () => removeFlashcard()
        }
      >{`${isPresent ? "delete" : "add"} flashcard`}</button>
    </S.Flashcard>
  )
}
