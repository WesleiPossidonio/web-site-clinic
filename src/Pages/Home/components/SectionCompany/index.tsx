import { PlayCircle } from "@phosphor-icons/react"
import * as Dialog from '@radix-ui/react-dialog'

import { BgColor, ContainerCompany, ContainerTitle, ContainerVideo } from "./styled"
import { ModalVideo, TitleText } from "../../../../Components"

export const SectionCompany = () => {
  return (
    <ContainerCompany>
      <ContainerTitle>
        <TitleText color="bg" size="s">Conheça Nossa Clinica!</TitleText>
        <TitleText color="text" size="l">Nosso Cunsutório Clinico!</TitleText>
      </ContainerTitle>

      <BgColor />
      <ContainerVideo>
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


