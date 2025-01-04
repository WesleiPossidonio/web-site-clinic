import { Contact,  Faq,  Footer,  HeaderLinks, HeaderMenu, MainSection, SectionAbout, SectionServices } from "./components"
import { CallAction } from "./components/CallAction"
import { SectionCompany } from "./components/SectionCompany"
import { ContainerHome, Header } from "./styled"


export const Home = () => {
  return (
    <ContainerHome>
      <Header>
        <HeaderLinks />
        <HeaderMenu />
      </Header>
      <MainSection />
      <SectionAbout />
      <SectionCompany />
      <SectionServices />
      <CallAction />
      <Faq />
      <Contact />
      <Footer />
    </ContainerHome>
  )
}


