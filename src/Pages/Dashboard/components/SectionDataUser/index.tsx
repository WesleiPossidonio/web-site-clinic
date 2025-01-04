import { UserCircle } from "@phosphor-icons/react"
import { TextRegular } from "../../../../Components"
import { useListVocancies } from "../../../../Contexts/CompanyContext"
import { ContainerSectionUserData, ContentDataUser, ContentHeader } from "./styled"

export const SectionDataUser = () => {
  const { dataUserLogin } = useListVocancies()
  return (
    <ContainerSectionUserData>

      <ContentHeader>
        <UserCircle size={54} />
          <TextRegular size="s" weight={600}>Meus Dados</TextRegular>
          <TextRegular size="sm" color="bg" weight={500}>Atualize os seus dados</TextRegular>
      </ContentHeader>


      <ContentDataUser>
        <TextRegular size="sm"> <strong>Nome:</strong> {dataUserLogin.name}</TextRegular>
        <TextRegular size="sm"> <strong>Nº de Registro:</strong> {dataUserLogin.number_register}</TextRegular>
        <TextRegular size="sm"> <strong>Email:</strong> {dataUserLogin.email}</TextRegular>
        <TextRegular size="sm"> <strong>Cargo / Profissão:</strong> {dataUserLogin.position}</TextRegular>
      </ContentDataUser>
    </ContainerSectionUserData>
  )
}


