import React, { useState, useEffect, ChangeEvent } from "react"
import { useHistory } from "react-router-dom"
import { Input } from "common/UI"
import { fetchData } from "common/utils"
import { SuggestionList } from "./SuggestionList"
import { searchState } from "./Search.types"
import { useDebounce } from "common/utils"
import * as S from "./Search.styles"

export default () => {
  const { location } = useHistory()
  const urlSearchParams = new URLSearchParams(location.search)
  const wordParam = urlSearchParams.get("word")
  const [state, setState] = useState<searchState>({
    word: wordParam ? wordParam : "",
    wordSearch: wordParam ? wordParam : "",
    from: urlSearchParams.get("from") || "pl",
    to: urlSearchParams.get("to") || "de",
    suggestionList: wordParam ? [wordParam] : [],
  })

  const searchingWord = useDebounce(state.word, 500)

  useEffect(() => {
    setState({ ...state, wordSearch: searchingWord })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchingWord])

  useEffect(() => {
    if (state.wordSearch) {
      fetchData(state.wordSearch, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      })
        .then((response: any) => {
          setState({ ...state, suggestionList: response })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.wordSearch])
  return (
    <S.Search>
      <Input
        name="search"
        placeholder=""
        type="search"
        key="search"
        value={state.word}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          setState({ ...state, word: e.target.value })
        }}
      />
      <SuggestionList {...{ state, setState }} />
    </S.Search>
  )
}
