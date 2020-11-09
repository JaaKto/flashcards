import React from "react"
import * as S from "./HomePage.styles"
import { isAuthenticated } from "common/utils"

export default () => (
  <S.HomePage>
    <h2>The best flashcards app</h2>
    {isAuthenticated() ? (
      <h3>now you can create flashcards</h3>
    ) : (
      <h3>please login to create one</h3>
    )}
  </S.HomePage>
)
