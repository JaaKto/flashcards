import React, { FC, ReactElement } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { HomePage } from "./HomePage"
import { Flashcards } from "./Flashcards"
import { AddFlashcard } from "./AddFlashcard"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"
import { isAuthenticated } from "common/utils"
import { AppProvider } from "common/services"

type Props = { children: ReactElement<any, any> | null }

const RequireAuth = ({ children }: Props) => {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: "/login" }} />
  }
  return children
}

const App: FC = () => (
  <BrowserRouter>
    <AppProvider>
      <S.App>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/signup" component={() => <SignUp />} />
          <RequireAuth>
            <>
              <Route path="/translation" component={() => <AddFlashcard />} />
              <Route
                exact
                path="/flashcards"
                component={() => <Flashcards />}
              />
            </>
          </RequireAuth>
        </Switch>
      </S.App>
    </AppProvider>
  </BrowserRouter>
)

export default App
