import React, { FC, createContext, useReducer, Dispatch } from "react"
import { flashcardReducer, InitialState } from "."

const initialState = {
  flashcards: [],
  status: "idle",
  error: null,
}

export const AppContext = createContext<{
  state: InitialState
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
