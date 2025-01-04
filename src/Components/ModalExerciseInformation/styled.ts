import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  z-index: 99;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const ContentModal = styled(Dialog.Content)`
  z-index: 99;
  min-width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  border-radius: 6px;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: ${({theme}) => theme.colors['base-white-100']};
  overflow-y: auto;

  @media (max-width: 720px) {
    padding: 1rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 0.7rem;
  right: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-bg']};
`

export const ContainerHeader = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`