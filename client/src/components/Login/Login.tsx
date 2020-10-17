import React, { useState, FC, FormEvent, ChangeEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData, setToken } from "common/utils"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./Login.styles"

interface state {
  email: string
  password: string
  [key: string]: string
}

export const Login: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [state, setState] = useState<state>({
    email: "",
    password: "",
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = state
    e.preventDefault()
    fetchData("login", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }),
      body: { email, password },
    })
      .then((response: any) => setToken(response))
      .then(() => {
        push("/")
      })
      .catch(({ message }: Error) => {
        setError(message)
      })
  }
  return (
    <S.LogIn>
      <form onSubmit={handleSubmit}>
        <p>Log In</p>
        {inputList.map((field) => (
          <Input
            key={field.id}
            value={state[field.name]}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, [field.name]: e.target.value })
            }
            {...{ ...field }}
          />
        ))}
        {error && <p>invalid data, try again</p>}
        <button type="submit">Submit</button>
      </form>
    </S.LogIn>
  )
}
