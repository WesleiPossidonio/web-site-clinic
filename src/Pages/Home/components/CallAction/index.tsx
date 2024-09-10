import { ContainerCallAction, ContainerText, ContentCallAction,} from "./styled"
import { TitleText } from "../../../../Components"
import { Button } from "../../../../Components/Button"

// link icon svg https://delesign.com/free-designs/graphics/illustration/task

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentCallAction>
        <ContainerText>
            <TitleText color="white" id="title" size="s">Seu bem-estar começa aqui!</TitleText>
            <TitleText size="xl" weight={600}>Marque sua consulta e transforme <br /> sua saúde hoje mesmo!</TitleText>
            <Button colors="white">Saiba Mais!</Button>
         </ContainerText>
      </ContentCallAction>
    </ContainerCallAction>
  )
}

