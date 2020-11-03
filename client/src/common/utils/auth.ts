interface Response {
  [key: string]: string
}

export const setToken = (response: Response) => {
  response &&
    Object.entries(response).forEach(([key, value]) =>
      localStorage.setItem(key, value),
    )
  return response
}

export const logOut = () => localStorage.clear()

export const isAuthenticated = () => {
  const expiryDate = localStorage.getItem("expiryDate")
  return !!expiryDate && new Date() < new Date(expiryDate)
}
