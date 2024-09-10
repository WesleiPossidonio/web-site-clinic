import { TextRegular, TitleText } from "../../../../Components";
import { Button } from "../../../../Components/Button";
import {
  ContainerAbout,
  ContainerImages,
  ContainerText,
  ImageAbout,
  ImageAboutTwo,
  YearsExperience,
} from "./styled";

export const SectionAbout = () => {
  return (
    <ContainerAbout>
      <ContainerText>
        <TitleText size="s" color="secundary-bg">
          Sobre Nós
        </TitleText>
        <TitleText size="l" weight={600}>
          Cuidado e Excelência em Cada Detalhe
        </TitleText>
        <TextRegular size="sm" weight={500}>
          Somos uma clínica dedicada a oferecer <strong>atendimento de qualidade</strong>,
          com profissionais <strong>experientes e tecnologia avançada</strong>. 
        </TextRegular>
        <TextRegular size="sm" weight={500}>
           Nosso foco é proporcionar tratamentos <strong>eficientes e personalizados</strong>, 
          garantindo o seu <strong>bem-estar em cada etapa do processo</strong>. Aqui, 
          você encontra cuidado, respeito e resultados.
        </TextRegular>
        <Button colors="bg">Saiba Mais!</Button>
      </ContainerText>

      <ContainerImages>
        <ImageAbout src="https://img.freepik.com/fotos-gratis/mulheres-seniores-em-aula-de-reforma-de-pilates_23-2150778119.jpg?t=st=1722567233~exp=1722570833~hmac=fbbf6c0e94564c09d2d7f67814cd876ff46a1cd3ac56cb78d9138ae68cac9bb6&w=740" />

        <div>
          <YearsExperience>
            <span>+500</span>
            <TextRegular size="sm" weight={600}>Clientes Satisfeitos</TextRegular>
          </YearsExperience>
          <ImageAboutTwo src="https://img.freepik.com/fotos-gratis/mulheres-seniores-em-aula-de-reforma-de-pilates_23-2150778119.jpg?t=st=1722567233~exp=1722570833~hmac=fbbf6c0e94564c09d2d7f67814cd876ff46a1cd3ac56cb78d9138ae68cac9bb6&w=740" />
        </div>
      </ContainerImages>
    </ContainerAbout>
  );
};
