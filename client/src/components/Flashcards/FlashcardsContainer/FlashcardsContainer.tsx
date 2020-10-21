import React, { FC } from "react"
import { Card, CardList } from "../Card"
import * as S from "./FlashcardsContainer.styles"
import { Flashcard } from "./Flashcard"

export const FlashcardsContainer: FC<CardList> = ({ flashcards }) => (
  <S.FlashcardsContainer>
    {flashcards.map((card: Card) => (
      <Flashcard key={card._id} {...{ ...card }} />
    ))}
  </S.FlashcardsContainer>
)
