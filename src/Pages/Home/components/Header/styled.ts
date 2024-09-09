import styled from "styled-components";

interface HeaderProps {
  stateHeader?: boolean
}

export const ContainerHeaderMenu = styled.header<HeaderProps>`
width: 100%;
height: 3.5rem;
padding: 2.5rem;
position: fixed;

display: flex;
justify-content: space-between;
align-items: center;

background: ${({ theme, stateHeader }) =>
    stateHeader === true ? theme.colors['base-white'] : 'transparent'};
`

export const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 970px) {
    display: none;
  }
`

export const NavLink = styled.a<HeaderProps>`
  font-size: ${({ theme }) => theme.FontSizes['text-regular-s']};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-decoration: none;

  color: ${({ theme, stateHeader }) =>
    stateHeader === true
      ? theme.colors['base-secundary-bg']
      : theme.colors['base-white']};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors['base-bg']};
  }
`

export const ImgLogo = styled.img`
width: 8rem;

`



