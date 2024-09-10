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
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #f2f3ee;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  video {
    width: 100%;
    height: 75vh;
  }

  @media (max-width: 720px) {
    padding: 1rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-bg']};
`
