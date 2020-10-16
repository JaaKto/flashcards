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

export const logout = () => {
  localStorage.removeItem("token")
}

export const isAuthenticated = () => {
  return !!localStorage.getItem("token")
}
