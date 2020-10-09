import styled from "styled-components"

export const NavBar = styled.nav`
  background-color: #24292e;
  height: 80px;
  display: flex;
  justify-content: space-between;
`

export const List = styled.ul`
  margin: 0 20px;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  font-size: 22px;
  padding: 10px 15px;
  a {
    text-decoration: none;
    color: ${(props: { isActive: boolean }) =>
      props.isActive ? "#ffffffb3" : "white"};
    &:hover {
      color: #ffffffb3;
    }
  }
`
