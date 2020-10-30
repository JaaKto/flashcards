export const types = {
  ADD_FLASHCARD: "ADD_FLASHCARD",
  DELETE_FLASHCARD: "DELETE_FLASHCARD",
  SET_STATUS: "SET_STATUS",
  SET_ERRORS: "SET_ERRORS",
}

export interface AddFlashcard {
  type: typeof types.ADD_FLASHCARD
  payload: Flashcard
}
export interface DeleteFlashcard {
  type: typeof types.DELETE_FLASHCARD
  payload: string
}
export interface SetStatus {
  type: typeof types.SET_STATUS
  payload: string
}
export interface SetErrors {
  type: typeof types.SET_ERRORS
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

export interface Errors {
  [key: string]: string
}

export interface SubmitError {
  message: string
}

export type Action = AddFlashcard | DeleteFlashcard | SetStatus | SetErrors
