import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationList, userPanelList } from "./utils"
import { isAuthenticated, logOut } from "common/utils"
import * as S from "./NavigationBar.styles"

export const NavigationBar = () => {
  const isLogged = isAuthenticated()
  const { pathname } = useLocation()
  return (
    <header>
      <S.NavBar>
        <S.List>
          {navigationList
            .filter(({ authorized }) => isLogged === authorized || !authorized)
            .map(({ path, name }) => (
              <S.ListItem isActive={path === pathname} key={name}>
                <Link to={path}>{name}</Link>
              </S.ListItem>
            ))}
        </S.List>
        <S.List>
          {userPanelList
            .filter(({ authorized }) => isLogged === authorized)
            .map(({ path, name, authorized }) =>
              !authorized ? (
                <S.ListItem isActive={path === pathname} key={name}>
                  <Link to={path}>{name}</Link>
                </S.ListItem>
              ) : (
                <S.ListItem isActive={false} key={name}>
                  <Link onClick={() => logOut()} to={path}>
                    {name}
                  </Link>
                </S.ListItem>
              ),
            )}
        </S.List>
      </S.NavBar>
    </header>
  )
}
