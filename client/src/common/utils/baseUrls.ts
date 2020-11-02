const PROTOCOL: string = "http"
const HOST: string = "localhost"
const PORT: number = 4000

export const BASE_URL = `${PROTOCOL}://${HOST}:${PORT}/`

export const LOGINURL = `${PROTOCOL}://${HOST}:${PORT}/auth/login`

export const SINGUPURL = `${PROTOCOL}://${HOST}:${PORT}/auth/signup`

export const FLASHCARDS = `${PROTOCOL}://${HOST}:${PORT}/flashcard/all`

export const FLASHCARD = `${PROTOCOL}://${HOST}:${PORT}/flashcard`

export const SearchUrl = (phrase: string) =>
  `${BASE_URL}translation/suggestion/${phrase}?from=pl&to=de`
