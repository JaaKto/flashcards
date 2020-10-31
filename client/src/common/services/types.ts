import { ADD_FLASHCARD, DELETE_FLASHCARD, SET_STATUS, SET_ERROR } from "."

export interface AddFlashcard {
  type: typeof ADD_FLASHCARD
  payload: Flashcard
}
export interface DeleteFlashcard {
  type: typeof DELETE_FLASHCARD
  payload: string
}
export interface SetStatus {
  type: typeof SET_STATUS
  payload: string
}
export interface SetError {
  type: typeof SET_ERROR
  payload: string
}

export interface Flashcard {
  _id: string
  creator: string
  to: [string]
  from: { __html: string }
  fromLang: string
  toLang: string
  createdAt: string
  updatedAt: string
}

export interface InitialState {
  flashcards: Flashcard[]
  status: string
  error: string | null
}

export type Action = AddFlashcard | DeleteFlashcard | SetStatus | SetError
