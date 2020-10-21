export interface Card {
  _id: string
  creator: string
  to: [string]
  from: { __html: string }
  fromLang: string
  toLang: string
  createdAt: string
  updatedAt: string
}
export interface CardList {
  flashcards: Card[]
}
