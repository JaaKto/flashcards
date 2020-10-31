import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./components/App"
import * as S from "./index.styles"
import * as serviceWorker from "./serviceWorker"
import { AppProvider } from "common/services"

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <S.GlobalStyle />
      <Switch>
        <Route path="/" component={App} />
      </Switch>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
