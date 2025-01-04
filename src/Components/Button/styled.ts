import styled from "styled-components";

interface ContainerButtonProps {
  colors: 'bg' | "white"
}
export const ContainerButton = styled.button<ContainerButtonProps>`
width: max-content;
min-width: 8rem;
height: 2.8rem;

display: flex;
align-items: center;
justify-content: center;

font-size:  0.9375rem;
font-weight: 600;
padding: 1rem;

border: none;
border-radius: 8px;
color: ${({theme, colors}) => colors === 'bg' ? theme.colors["base-white"] : theme.colors["base-text"]};
background-color: ${({theme, colors}) => theme.colors[`base-${colors}`]};

cursor: pointer;

a {
  color: #fff;
}
`