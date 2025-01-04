import { ButtonHTMLAttributes, ReactNode } from "react"
import { ContainerButton } from "./styled"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  colors: 'bg' | 'white';
};

export const Button = ({ children, colors, ...rest}: ButtonProps) => {
  return (
    <ContainerButton colors={colors} {...rest}>
      {children}
    </ContainerButton>
  )
}
