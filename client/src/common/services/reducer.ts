import {
  ADD_FLASHCARD,
  DELETE_FLASHCARD,
  SET_STATUS,
  SET_ERROR,
  InitialState,
  Action,
} from "."

export const flashcardReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ADD_FLASHCARD:
      return { ...state, flashcards: [...state.flashcards, action.payload] }
    case DELETE_FLASHCARD:
      return {
        ...state,
        flashcards: state.flashcards.filter(
          (item) => item._id !== action.payload,
        ),
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
