import React, { useState, FC, FormEvent, ChangeEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData, setToken } from "common/utils"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./SignUp.styles"

interface state {
  email: string
  password: string
  [key: string]: string
}

export const SignUp: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [state, setState] = useState<state>({
    email: "",
    password: "",
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = state
    e.preventDefault()
    fetchData("signup", {
      method: "PUT",
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
    <S.SignUp>
      <form onSubmit={handleSubmit}>
        <p>Sign up</p>
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
        <button type="submit">Sign up</button>
      </form>
    </S.SignUp>
  )
}
