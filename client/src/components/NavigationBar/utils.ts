export const navigationList = [
  {
    path: "/",
    name: "Home",
    authorized: false,
  },
  {
    path: "/flashcards",
    name: "Flashcards",
    authorized: true,
  },
]

export const userPanelList = [
  {
    path: "/login",
    name: "Log in",
    authorized: false,
  },
  {
    path: "/signup",
    name: "Sign up",
    authorized: false,
  },
  {
    path: "/",
    name: "Log out",
    authorized: true,
  },
]
