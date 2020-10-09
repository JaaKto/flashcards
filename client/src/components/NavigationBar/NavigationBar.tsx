import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationList, userPanelList } from "./utils"
import * as S from "./NavigationBar.styles"

export const NavigationBar = () => {
  const { pathname } = useLocation()
  return (
    <header>
      <S.NavBar>
        <S.List>
          {navigationList.map(({ path, name }) => (
            <S.ListItem isActive={path === pathname} key={name}>
              <Link to={path}>{name}</Link>
            </S.ListItem>
          ))}
        </S.List>
        <S.List>
          {userPanelList.map(({ path, name, authorized }) =>
            !authorized ? (
              <S.ListItem isActive={path === pathname} key={name}>
                <Link to={path}>{name}</Link>
              </S.ListItem>
            ) : (
              <S.ListItem isActive={false} key={name}>
                <Link to={path}>{name}</Link>
              </S.ListItem>
            ),
          )}
        </S.List>
      </S.NavBar>
    </header>
  )
}
