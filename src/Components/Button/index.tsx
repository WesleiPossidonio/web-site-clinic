import { ReactNode } from "react"
import { ContainerButton } from "./styled"

type ButtonProps = {
  children: ReactNode
  colors: 'bg' | 'white'
}

export const Button = ({ children, colors }: ButtonProps) => {
  return (
    <ContainerButton colors={colors}>{children}</ContainerButton>
  )
}
