import styled from 'styled-components'

export const ContainerCreateExercise = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  margin: 0 auto;

  border: none;
  border-radius: 12px;
  padding: 2rem;

  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({ theme }) => theme.colors['base-white']};

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const ContentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  overflow-y: auto;
`
export const Selected = styled.select`
  width: 100%;
  height: 2.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  border: 2px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 8.07781px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background: ${({ theme }) => theme.colors['base-white']};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-bg']};
    border-radius: 8px;
  }
`
