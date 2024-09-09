
import { PersonSimpleHike, PersonSimpleTaiChi, Wheelchair, WheelchairMotion } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../../../../Components"
import { BoxServices, ContainerBoxServices, ContainerServices } from "./styled"

export const SectionServices = () => {
  return (
    <ContainerServices>
      <TitleText size="s"color="secundary-bg" >O que Fazemos de Melhor!</TitleText>
      <TitleText size="l">Nossas Especialidades</TitleText>

      <ContainerBoxServices>
         <BoxServices >
            <Wheelchair size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices >
            <PersonSimpleTaiChi size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices >
            <WheelchairMotion size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices>
             <PersonSimpleHike size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices>
             <PersonSimpleHike size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices>
             <PersonSimpleHike size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices>
             <PersonSimpleHike size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>

         <BoxServices>
             <PersonSimpleHike size={65} />
            <TitleText size="m" weight={500} color="text">Serviço</TitleText>
            <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid consequatur</TextRegular>
         </BoxServices>
      </ContainerBoxServices>
    </ContainerServices>
  )
}


