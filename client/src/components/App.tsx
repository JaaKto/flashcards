import React, { useEffect, useContext } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { HomePage } from "./HomePage"
import { Flashcards } from "./Flashcards"
import { AddFlashcard } from "./AddFlashcard"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"
import { isAuthenticated, fetchData } from "common/utils"
import {
  FlashcardContext,
  getFlashcard,
  setError,
  AppProvider,
} from "common/services"

const RequireAuth = ({ children }: any) => {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: "/login" }} />
  }
  return children
}

const App = () => {
  const { dispatch } = useContext(FlashcardContext)
  useEffect(() => {
    if (isAuthenticated()) {
      fetchData(`/flashcards`, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      })
        .then((response: any) => {
          dispatch(getFlashcard(response.flashcards))
        })
        .catch((err) => {
          dispatch(setError(err))
        })
    }
  }, [])
  return (
    <BrowserRouter>
      <AppProvider>
        <S.App>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup" component={() => <SignUp />} />
            <RequireAuth>
              <Route
                exact
                path="/flashcards"
                component={() => <Flashcards />}
              />
              <Route path="/translation" component={() => <AddFlashcard />} />
            </RequireAuth>
          </Switch>
        </S.App>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
