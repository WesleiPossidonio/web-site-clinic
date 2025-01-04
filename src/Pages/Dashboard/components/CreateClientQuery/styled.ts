import styled from 'styled-components'

export const ContainerCreateClientQuery = styled.section`
  width: 100%;
  height: 88vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  margin: 0 auto;

  border: none;
  border-radius: 12px;
  padding: 2rem;
  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({theme}) => theme.colors['base-white']};

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
