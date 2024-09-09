import { ContainerCallAction, ContainerText, ContentCallAction,} from "./styled"
import { TitleText } from "../../../../Components"

// link icon svg https://delesign.com/free-designs/graphics/illustration/task

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentCallAction>
        <ContainerText>
            <TitleText color="white" id="title" size="s">Muito Mais que uma Clinica!</TitleText>
            <TitleText size="xl" weight={600}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quas aliquid reprehenderit</TitleText>
            <button>Saiba Mais!</button>
         </ContainerText>
      </ContentCallAction>
    </ContainerCallAction>
  )
}

