import styled from 'styled-components'

export const ContainerServices = styled.section`
  width: 100%;
  max-width: 120rem;
  height: max-content;

  padding: 6rem 3rem;
  margin: 0 auto;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-align: center;
`

export const ContainerBoxServices = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2.5rem;
  justify-content: center;

  margin-top: 6rem;
`

export const BoxServices = styled.div`
  width: 100%;
  height: 18rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  text-align: start;

  padding: 1rem;
  border: 0;
  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${({ theme }) => theme.colors['base-white']};
  cursor: pointer;

  p {
    margin-top: 0.5rem;
  }

  > svg {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  img {
    width: 100%;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-bg']};
    box-shadow: rgba(28, 170, 161, 0) 0px 4px 12px;
    transform: scale(1.1);
    transition: all 0.5s;

    > svg {
      color: ${({ theme }) => theme.colors['base-bg']};
    }
  }
`
