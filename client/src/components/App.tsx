import React, { useEffect, useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { HomePage } from "./HomePage"
import { Flashcards } from "./Flashcards"
import { AddFlashcard } from "./AddFlashcard"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"
import { isAuthenticated, fetchData } from "common/utils"
import { FlashcardContext, getFlashcard, setError } from "common/services"

const App = () => {
  const { dispatch } = useContext(FlashcardContext)
  useEffect(() => {
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
  }, [])
  return (
    <S.App>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/signup" component={() => <SignUp />} />
        {isAuthenticated() ? (
          <>
            <Route exact path="/flashcards" component={() => <Flashcards />} />
            <Route path="/translation" component={() => <AddFlashcard />} />
          </>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
      </Switch>
    </S.App>
  )
}

export default App
