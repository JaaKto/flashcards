export interface Flashcard {
  _id: string
  to: [string]
  from: string
  fromLang: string
  toLang: string
  createdAt: string
  updatedAt: string
}
export interface FlashcardList {
  flashcards: Flashcard[]
}
