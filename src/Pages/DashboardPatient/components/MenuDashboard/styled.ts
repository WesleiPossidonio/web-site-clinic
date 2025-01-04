import styled from 'styled-components'

export const ContainerMenu = styled.nav`
  width: 20%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;

  padding: 2.25rem 1.75rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({ theme }) => theme.colors['base-white']};
`

export const ImgLogo = styled.img`
width: 7rem;
`

export const ContentLinkMenu = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5625rem;
`

export const NavLink = styled.div`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors['base-white']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }

  p, svg {
    letter-spacing: -0.14px;
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-bg']};

    p, svg {
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`
