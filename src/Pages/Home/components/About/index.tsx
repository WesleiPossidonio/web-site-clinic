import { TextRegular, TitleText } from "../../../../Components";
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
        <TitleText size="l" weight={500}>
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </TitleText>
        <TextRegular size="s" weight={500}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo,
          alias, minus porro laborum voluptates quos dolor, iure est unde
          necessitatibus tempora facere nesciunt quia. Cum impedit repudiandae
          aliquam laudantium Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptas quo dolores
        </TextRegular>
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
