import React, { createContext, useReducer, Dispatch } from "react"
import { flashcardReducer, FlashcardActions } from "./reducer"

type FlashcardType = {
  _id: string
  creator: string
  to: [string]
  from: { __html: string }
  fromLang: string
  toLang: string
  createdAt: string
  updatedAt: string
}

type InitialStateType = {
  flashcards: FlashcardType[]
  status: string
  error: string | null
}

const initialState = {
  flashcards: [],
  status: "idle",
  error: null,
}

export const AppContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<FlashcardActions>
}>({
  state: initialState,
  dispatch: () => null,
})

const Reducer = (state: InitialStateType, action: FlashcardActions) => ({
  flashcards: flashcardReducer(state, action as FlashcardActions),
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
