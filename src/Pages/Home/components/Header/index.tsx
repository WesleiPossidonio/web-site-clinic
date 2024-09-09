import { useEffect, useState } from "react"
import { ContainerHeaderMenu, ImgLogo, NavDesktop, NavLink } from "./styled"
import Logo from '../../../../assets/logo.png'

export const HeaderMenu = () => {
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <ImgLogo src={Logo} />

       <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#home"
        
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#about"
        
        >
          Sobre Nós
        </NavLink>
    

        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#companies"
        
        >
          Serviços
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#contato"
        
        >
          Contatos
        </NavLink>

        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#contato"
        
        >
          Login 
        </NavLink>
      </NavDesktop>
    </ContainerHeaderMenu>
  )
}

