import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div>{children}</div>
  )
}
