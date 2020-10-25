import React from "react"
import { Link } from "react-router-dom"
import * as S from "./SuggestionList.styles"

type Suggestion = {
  label: string
  value: string
  lang: string
  [key: string]: string
}

type SuggestionProps = {
  suggestionList: Suggestion[]
}

export const SuggestionList = ({ suggestionList }: SuggestionProps) => {
  console.log(suggestionList)
  return (
    <S.SuggestionList>
      {suggestionList.map(({ label, value, lang }: Suggestion) => (
        <S.SuggestionItem key={label}>
          <Link to={`translation/${value}?from=${lang}&to=de`}>{label}</Link>
        </S.SuggestionItem>
      ))}
    </S.SuggestionList>
  )
}
