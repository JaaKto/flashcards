import {
  LOGINURL,
  SINGUPURL,
  FLASHCARDS,
  FLASHCARD,
  SearchUrl,
  BASE_URL,
} from "."

interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Headers
  body?: any
}

const handleError = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

const getUrl = (endpoint: string) => {
  if (endpoint.includes("login")) {
    return LOGINURL
  } else if (endpoint.includes("signup")) {
    return SINGUPURL
  } else if (endpoint.includes("flashcards")) {
    return FLASHCARDS
  } else if (endpoint.includes("flashcard/")) {
    return BASE_URL + endpoint
  } else if (endpoint.includes("flashcard")) {
    return FLASHCARD
  } else if (endpoint.includes("translation")) {
    return BASE_URL + endpoint
  } else {
    return SearchUrl(endpoint)
  }
}

export const fetchData = <T>(
  endpoint: string,
  options = {} as Options,
): Promise<T> =>
  fetch(getUrl(endpoint), {
    method: options.method || "GET",
    headers: options.headers,
    body: JSON.stringify(options.body),
  })
    .then(handleError)
    .then((res) => res.json())
