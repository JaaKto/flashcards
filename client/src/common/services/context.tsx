import React, { FC, createContext, useReducer, Dispatch } from "react"
import { flashcardReducer, InitialState } from "."

export const initialState = {
  flashcards: [],
  status: "idle",
  error: null,
}

export const FlashcardContext = createContext<{
  state: InitialState
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialState)
  return (
    <FlashcardContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashcardContext.Provider>
  )
}
