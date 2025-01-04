import { useState } from "react"
import { useListVocancies } from "../../Contexts/CompanyContext"
import { ContainerDashboard, ContentDashboard } from "./styled"
import { MenuDashboard, SectionExercises, SectionMyExercises,  } from "./components"


export const DashboardPatient = () => {

  const { dataUserLogin } = useListVocancies()
  const [menuSelected, setMenuSelected] = useState<string>('')

  const renderContent = () => {
    switch (menuSelected) {
      case 'UserPatiente':
        return <div>heloo</div>
      case 'MyExercises':
        return <SectionMyExercises />
      case 'ListExercises':
        return <SectionExercises />
      default:
        return <SectionExercises />
    }
  }

  return (
    <ContainerDashboard>
        <MenuDashboard setMenuSelected={setMenuSelected}/>
        <ContentDashboard>{renderContent()}</ContentDashboard>
    </ContainerDashboard>
  )
}


