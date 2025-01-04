import {
  CaretRight,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Logo from '../../../../assets/logo.png'

import {
  ContainerFooter,
  ContentContact,
  ContentLinkContact,
  ContentLinkIcons,
  ContentLinkLogo,
  ContentLinkSite,
  ContentLogo,
  IconsContent,
  ImgLogo,
  LinkSite,
  TitleLinks,
} from './styled'
import { TextRegular, TitleText } from '../../../../Components'

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLogo>
        <ImgLogo src={Logo} />

        <ContentLinkLogo>
          <TextRegular color="text" size="s">
            Corpo & Mente Fisioterapia © 2024 - Todos os direitos reservados.
          </TextRegular>

          <TextRegular color="text" size="sm" weight={600}>
            Desenvolvido por
            <a href="https://www.wesleifranca.com.br/" target="_blank">
              Weslei Possidônio
            </a>
          </TextRegular>
        </ContentLinkLogo>

        <ContentLinkIcons>
          <IconsContent>
            <InstagramLogo size={32} weight="regular" color='#fff'/>
          </IconsContent>

          <IconsContent>
            <FacebookLogo size={32} weight="regular" color='#fff'/>
          </IconsContent>
        </ContentLinkIcons>
      </ContentLogo>

      <ContentLinkSite>
        <TitleText color="bg">Links Rápidos</TitleText>
        <LinkSite>
          <TextRegular color="bg" weight={600}>
            <a href="#home">Home</a>
          </TextRegular>
          <TextRegular color="bg" weight={600}>
            <a href="#about"> Sobre Nós</a>
          </TextRegular>
          <TextRegular color="bg" weight={600}>
            <a href="#services">Serviços</a>
          </TextRegular>
          <TextRegular color="bg" weight={600}>
            <a href="#contact">Contatos</a>
          </TextRegular>
          <TextRegular color="bg" weight={600}>
            <a href="#">Política de Privacidade</a>
          </TextRegular>
        </LinkSite>
      </ContentLinkSite>

      <ContentContact>
        <TitleText color="bg">Contatos</TitleText>

        <TitleLinks>
          <ContentLinkContact>
            <TextRegular weight={600}>
              <WhatsappLogo size={28} color="#000" />
              Whatsapp:
            </TextRegular>
            <a href="https://api.whatsapp.com/send/?phone=5522992128520&text&type=phone_number&app_absent=0" target="_blank">
              <CaretRight size={20} weight="bold" />
              (22) 992128520
            </a>
            {/* <a href="https://wa.me/552299951-5222?text=" target="_blank">
              <CaretRight size={20} weight="bold" />
              (22) 99951-5222
            </a> */}
          </ContentLinkContact>
        </TitleLinks>

        <TitleLinks>
          <ContentLinkContact>
            <TextRegular weight={600}>
              <Envelope size={28} color="#000" />
              Email:
            </TextRegular>
            <TextRegular size="sm" color="text">
              <CaretRight size={20} weight="bold" />
              <a href="mailto:mail@gmail.com">
                mail@gmail.com
              </a>
            </TextRegular>
          </ContentLinkContact>
        </TitleLinks>

        <TitleLinks>
          <ContentLinkContact>
            <TextRegular weight={600}>
              <MapPin size={28} color="#000" />
              Mapa:
            </TextRegular>
            <TextRegular size="sm" color="text">
              <CaretRight size={20} weight="bold" />
              Av. Rui Barbosa, 688, bloco A, sala 103 <br /> 
              Galeria Carapebus - Centro, Macaé 27910-362
            </TextRegular>
          </ContentLinkContact>
        </TitleLinks>
      </ContentContact>
    </ContainerFooter>
  )
}
