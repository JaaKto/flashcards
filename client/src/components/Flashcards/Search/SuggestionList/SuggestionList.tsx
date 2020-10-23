import React, { FC } from "react"
import * as S from "./SuggestionList.styles"

interface Suggestion {
  Object: { label: string; value: string; lang: string; [key: string]: string }
}

const arr = [
  { label: "samochód", value: "samochód", lang: "pl" },
  { label: "samochodowy", value: "samochodowy", lang: "pl" },
  { label: "samochodzik", value: "samochodzik", lang: "pl" },
  { label: "samochwała", value: "samochwała", lang: "pl" },
  { label: "samochwalczy", value: "samochwalczy", lang: "pl" },
  { label: "samochwalstwo", value: "samochwalstwo", lang: "pl" },
]

export const SuggestionList = (suggestionList: Suggestion[] | any[]) => (
  // export const SuggestionList = (suggestionList: any) => (
  <S.SuggestionList>
    {arr.length && <S.Suggestion>Suggestions</S.Suggestion>}
    {/* {suggestionList && arr.map((item: Suggestion) => )} */}
  </S.SuggestionList>
)
