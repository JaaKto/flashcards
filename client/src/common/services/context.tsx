import React, { createContext, useReducer, Dispatch } from "react"
import { flashcardReducer } from "./reducer"
import { InitialState } from "./types"

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

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
