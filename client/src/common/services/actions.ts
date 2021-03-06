import {
  SetError,
  SetStatus,
  GetFlashcards,
  AddFlashcard,
  DeleteFlashcard,
  Flashcard,
} from "./types"

export const GET_FLASHCARDS = "GET_FLASHCARDS"
export const ADD_FLASHCARD = "ADD_FLASHCARD"
export const DELETE_FLASHCARD = "DELETE_FLASHCARD"
export const SET_STATUS = "SET_STATUS"
export const SET_ERROR = "SET_ERROR"

export const getFlashcard = (payload: Flashcard[]): GetFlashcards => ({
  type: GET_FLASHCARDS,
  payload,
})

export const addFlashcard = (payload: Flashcard): AddFlashcard => ({
  type: ADD_FLASHCARD,
  payload,
})

export const deleteFlashcard = (payload: string): DeleteFlashcard => ({
  type: DELETE_FLASHCARD,
  payload,
})

export const setStatus = (payload: string): SetStatus => ({
  type: SET_STATUS,
  payload,
})

export const setError = (payload: string): SetError => ({
  type: SET_ERROR,
  payload,
})
