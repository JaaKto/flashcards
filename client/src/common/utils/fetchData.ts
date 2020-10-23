import { BASE_URL, LOGINURL, SINGUPURL, FLASHCARDS, SearchUrl } from "."

type ObjectMap = { [key: string]: unknown }
interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Headers
  body?: ObjectMap
}

const handleError = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

const getUrl = (endpoint: string) => {
  switch (endpoint) {
    case "login":
      return LOGINURL
    case "signup":
      return SINGUPURL
    case "/flashcards":
      return FLASHCARDS
    default:
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

export const fetchSuggestions = (phrase: string) =>
  phrase &&
  fetchData(phrase, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  }).then((res) => console.log(res))
