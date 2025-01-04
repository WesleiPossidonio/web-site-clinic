import { ContainerCallAction, ContainerText, ContentCallAction,} from "./styled"
import { TitleText } from "../../../../Components"
import { Button } from "../../../../Components/Button"
import { useEffect } from "react"
import AOS from 'aos'

// link icon svg https://delesign.com/free-designs/graphics/illustration/task

export const CallAction = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <ContainerCallAction>
      <ContentCallAction data-aos="zoom-in-down" data-aos-duration="1500">
        <ContainerText>
            <TitleText color="white" id="title" size="s">Seu bem-estar começa aqui!</TitleText>
            <TitleText size="xl" weight={600}>Marque sua consulta e transforme <br /> sua saúde hoje mesmo!</TitleText>
            <Button colors="white">Saiba Mais!</Button>
         </ContainerText>
      </ContentCallAction>
    </ContainerCallAction>
  )
}

