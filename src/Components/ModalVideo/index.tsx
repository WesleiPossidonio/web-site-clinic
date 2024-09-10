import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, ContentModal, Overlay } from './styled'
import { X } from '@phosphor-icons/react'

export const ModalVideo = () => {
  return (
    <Dialog.Portal>
       <Overlay />
       <ContentModal>
       <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>
             <video controls >
              <source src='https://videos.pexels.com/video-files/6111110/6111110-uhd_2560_1440_25fps.mp4' type='video/mp4' />
             </video>
       </ContentModal>
    </Dialog.Portal>
  )
}

