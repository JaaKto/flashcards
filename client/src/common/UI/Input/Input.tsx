import React, { FC, ChangeEvent } from "react"
import * as S from "./Input.styles"

interface Input {
  name: string
  type: string
  placeholder: string
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Input> = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
}) => (
  <S.InputContainer>
    <S.Label htmlFor={name}>{name}</S.Label>
    <S.Input
      id={name}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
    />
  </S.InputContainer>
)
