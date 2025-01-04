import styled from 'styled-components'

export const ContainerSectionMyExercises = styled.section`
  width: 100%;
  height: 100svh;

  min-height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`

export const TitleExercises = styled.div`
width: 100%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

export const MenuExercicies = styled.nav`
  width: 35%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1rem 0.5rem;

  border: 0;
  border-radius: 12px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({ theme }) => theme.colors['base-white-100']};
`

export const ListExercises = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;
`

export const ButtonExercises = styled.li`
  width: 100%;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  list-style-type: none;
  color: #292d32;

  border: 0;
  /* border-top: 3px solid ${({ theme }) => theme.colors['base-gray']}; */
  border-bottom: 3px solid ${({ theme }) => theme.colors['base-gray']};
  padding: 1rem;

  &:hover {
    /* border-top: 3px solid ${({ theme }) => theme.colors['base-bg']}; */
   border-bottom: 3px solid ${({ theme }) => theme.colors['base-bg']};
  }
`
