type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Add = "ADD_FLASHCARD",
  Delete = "DELETE_FLASHCARD",
}

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

type FlashcardPayload = {
  [Types.Add]: FlashcardType
  [Types.Delete]: {
    _id: string
  }
}

export type FlashcardActions = ActionMap<FlashcardPayload>[keyof ActionMap<
  FlashcardPayload
>]

export const flashcardReducer = (
  state: InitialStateType,
  action: FlashcardActions,
) => {
  switch (action.type) {
    case Types.Add:
      return { ...state, flashcards: [...state.flashcards, action.payload] }
    case Types.Delete:
      return {
        ...state,
        flashcards: [...state.flashcards].filter(
          (item) => item._id !== action.payload._id,
        ),
      }
    default:
      return state
  }
}
