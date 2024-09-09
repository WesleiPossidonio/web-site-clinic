import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputContaineStyle = styled.div<InputStyleContainerProps>`
  width: 100%;
  height: 3.155625rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.8835125rem;
  line-height: 1.3125rem;

  border-radius: 7px;

  background: ${({ theme }) => theme.colors['base-white']};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-text']};
    border-radius: 8px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-red']};
    `}
`

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors['base-white']};

  border: 2px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 8.07781px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  padding: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-white']};
    border-radius: 8px;
  }
`