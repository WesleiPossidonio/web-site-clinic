import { PlayCircle } from "@phosphor-icons/react"
import { BgColor, ContainerCompany, ContainerVideo } from "./styled"

export const SectionCompany = () => {
  return (
    <ContainerCompany>
        <BgColor />
      <ContainerVideo>
          <PlayCircle size={102} color="#fff" />
      </ContainerVideo>
    </ContainerCompany>
  )
}


