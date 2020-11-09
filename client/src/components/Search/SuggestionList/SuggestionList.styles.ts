import styled from "styled-components"

export const SuggestionList = styled.ul`
  margin: 0 10px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 41px;
  width: 255px;
  background-color: #f2e8cf;
`

export const SuggestionItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 3px 3px;
  border-bottom: 1px solid #c5bfb0;
  a {
    text-decoration: none;
    color: #386641;
  }
  :hover {
    cursor: pointer;
    background-color: #ececec;
  }
`
