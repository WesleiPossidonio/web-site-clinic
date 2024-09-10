import styled from "styled-components";

interface ContainerButtonProps {
  colors: 'bg' | "white"
}
export const ContainerButton = styled.button<ContainerButtonProps>`
width: 8rem;
height: 2.8rem;

font-size:  0.9375rem;
font-weight: 600;

border: none;
border-radius: 8px;
color: ${({theme}) => theme.colors["base-text"]};
background-color: ${({theme, colors}) => theme.colors[`base-${colors}`]};

cursor: pointer;
`