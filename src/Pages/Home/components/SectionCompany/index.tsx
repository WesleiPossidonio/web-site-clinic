import { PlayCircle } from "@phosphor-icons/react"
import * as Dialog from '@radix-ui/react-dialog'
import AOS from 'aos'

import { BgColor, ContainerCompany, ContainerTitle, ContainerVideo } from "./styled"
import { ModalVideo, TitleText } from "../../../../Components"
import { useEffect } from "react"

export const SectionCompany = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerCompany>
      <ContainerTitle>
        <TitleText color="bg" size="s">Conheça Nossa Clinica!</TitleText>
        <TitleText color="text" size="l">Nosso Cunsutório Clinico!</TitleText>
      </ContainerTitle>

      <BgColor />
      <ContainerVideo data-aos="zoom-in-down" data-aos-duration="1000">
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <PlayCircle size={102} color="#fff" />
          </Dialog.Trigger>
          <ModalVideo />
        </Dialog.Root>

      </ContainerVideo>
    </ContainerCompany>
  )
}


