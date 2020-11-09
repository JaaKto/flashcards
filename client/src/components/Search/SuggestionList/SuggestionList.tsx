import React from "react"
import { Link } from "react-router-dom"
import * as S from "./SuggestionList.styles"
import { searchState } from "../Search.types"

type Suggestion = {
  label: string
  value: string
  lang: string
  [key: string]: string
}

type SuggestionProps = {
  state: searchState
  setState: React.Dispatch<React.SetStateAction<searchState>>
}

export const SuggestionList = ({ state, setState }: SuggestionProps) => {
  return (
    <S.SuggestionList>
      {state.suggestionList.map(({ label, value, lang }: Suggestion) => (
        <S.SuggestionItem key={label}>
          <Link
            to={`/translation/${value}?from=${lang}&to=de`}
            onClick={() => {
              setState({ ...state, suggestionList: [] })
            }}
          >
            {label}
          </Link>
        </S.SuggestionItem>
      ))}
    </S.SuggestionList>
  )
}
