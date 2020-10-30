import { InitialState, types } from "./types"

export const flashcardReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case types.ADD_FLASHCARD:
      return { ...state, flashcards: [...state.flashcards, action.payload] }
    case types.DELETE_FLASHCARD:
      return {
        ...state,
        flashcards: state.flashcards.filter(
          (item) => item._id !== action.payload._id,
        ),
      }
    case types.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    case types.DELETE_FLASHCARD:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
