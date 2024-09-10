import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerLogin = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem;

  background-color: ${({ theme }) => theme.colors['base-white']};
`

export const ContentLogin = styled.div`
  width: 90%;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors['base-white-100']};
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`

export const ContentForm = styled.div`
  width: 39.375rem;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  padding: 5.25rem;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  margin-top: 3rem;
`
 
interface InputLoginProps {
  onError: boolean
}

export const InputLogin = styled.input<InputLoginProps>`
width: 100%;

border: none;
border-bottom: 2px solid ${({theme}) => theme.colors['base-bg']};

padding: 0.2rem;

font-size: ${({theme}) => theme.FontSizes['text-regular-s']};
font-style: normal;
font-weight: 400;
line-height: normal;

${({ onError }) =>
    onError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-red']};
    `}
`

export const ButtonLogin = styled.button`
width: 100%;
padding: 0.75rem 0;

display: flex;
justify-content: center;
align-items: center;

border: none;
border-radius: 10px;

font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${({theme}) => theme.colors['base-white']};

background-color: ${({theme}) => theme.colors['base-bg']};
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`

export const ContentTextForm = styled.div`
  width: 52.3333125rem;
  height: 90vh;

  padding: 6.25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  border-radius: 0 12px 12px 0;
  background-color: ${({ theme }) => theme.colors['base-bg']};
`

export const ImgLogin = styled.img`
  width: 100%;
`
