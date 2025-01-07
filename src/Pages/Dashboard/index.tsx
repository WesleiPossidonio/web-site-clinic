import { useState } from 'react'
import { TextRegular } from '../../Components'
import { useListVocancies } from '../../Contexts/CompanyContext'
import { ContainerDashboard, ContentDashboard } from './styled'
import {
  CreateCategory,
  CreateClientQuery,
  CreateExercise,
  CreateSchedules,
  CreateUser,
  MenuDashboard,
  MyConsults,
  MyPatients,
  ScheduledAppointment,
  SectionDataUser,
} from './components'


export const Dashboard = () => {
  const { dataUserLogin } = useListVocancies()
  const [menuSelected, setMenuSelected] = useState<string>('')

  const renderContent = () => {
    switch (menuSelected) {
      case 'UserData':
        return <SectionDataUser />
      case 'MyConsults':
        return <MyConsults />
      case 'Patients':
        return <MyPatients />
      case 'AddCategory':
        return <CreateCategory />
      case 'AddExercise':
        return <CreateExercise />
      case 'AddDoctorSchedules':
        return <CreateSchedules />
      case 'AddQuery':
        return <CreateClientQuery />
      case 'AddUser':
        return <CreateUser />
      default:
        return <ScheduledAppointment />
    }
  }

  return (
    <ContainerDashboard>
      <MenuDashboard setMenuSelected={setMenuSelected} />
      <ContentDashboard>
        <TextRegular size="s" weight={500}>
          Olá <strong>{dataUserLogin.name}</strong>
        </TextRegular>
        {renderContent()}
      </ContentDashboard>
    </ContainerDashboard>
  )
}
