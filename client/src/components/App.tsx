import React, { createContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { HomePage } from "./HomePage"
import { Flashcards } from "./Flashcards"
import { AddFlashcard } from "./AddFlashcard"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"
import { isAuthenticated } from "common/utils"
import { AppProvider } from "common/services"

const App = () => (
  <AppProvider>
    <S.App>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/login" component={() => <Login />} />
        {isAuthenticated() ? (
          <>
            <Route exact path="/flashcards" component={() => <Flashcards />} />
            <Route path="/translation" component={() => <AddFlashcard />} />
          </>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
        <Route exact path="/signup" component={() => <SignUp />} />
      </Switch>
    </S.App>
  </AppProvider>
)

export default App
