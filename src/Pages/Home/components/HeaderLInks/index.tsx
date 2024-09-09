
import { Envelope, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { ContainerHeaderLinks, ContainerLinks, ContentLinkContact, Link } from "./styled"

export const HeaderLinks = () => {
  return (
    <ContainerHeaderLinks>
      <ContentLinkContact>
        <Envelope size={25} />
        <Link href="mailto:example@gmail.com">example@gmail.com</Link>
      </ContentLinkContact>

      <ContainerLinks>
        <Link href="#" target="_blank">
          <InstagramLogo size={25} />
        </Link>
        
        <Link href="#" target="_blank">  
          <FacebookLogo size={25}  />
        </Link>
      </ContainerLinks>
     
    </ContainerHeaderLinks>
  )
}