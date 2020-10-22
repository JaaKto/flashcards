import React, { useState, ChangeEvent } from "react"
import { useHistory } from "react-router-dom"
import { Input } from "common/UI"
import * as S from "./Search.styles"

interface state {
  word: string
  wordSearch: string
  from: string
  to: string
  suggestionList: Array<string>
  [key: string]: string | Array<string>
}

export default () => {
  const { location } = useHistory()
  const urlSearchParams = new URLSearchParams(location.search)
  const wordParam = urlSearchParams.get("word")
  const [state, setState] = useState<state>({
    word: wordParam ? wordParam : "",
    wordSearch: wordParam ? wordParam : "",
    from: urlSearchParams.get("from") || "pl",
    to: urlSearchParams.get("to") || "de",
    suggestionList: wordParam ? [wordParam] : [],
  })
  return (
    <S.Search>
      <Input
        name="search"
        placeholder="type to look for a new flashcard"
        type="search"
        key="search"
        value={state.word}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setState({ ...state, word: e.target.value })
        }
      />
      <button onClick={() => console.log(state)}>Click</button>
    </S.Search>
  )
}
