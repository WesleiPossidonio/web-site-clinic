import { FormEvent, useState } from 'react'
import { useListVocancies } from '../../../../Contexts/CompanyContext'
import {
  ContainerMyConsults,
  ContainerTable,
  ContentTable,
  HeaderContainerConsults,
  HeaderContentTitle,
  HeaderTable,
} from './styled'
import { ModalCustomerTracking, ModalExerciseInformation, TextRegular, TitleText } from '../../../../Components'
import { Badge, TextField } from '@radix-ui/themes'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Pagination } from '@mui/material'
import * as Dialog from '@radix-ui/react-dialog'

const ITEMS_PER_PAGE = 9

export const MyPatients = () => {
  const { dataListDoctors, dataUserLogin } = useListVocancies()

  const [searchListPatient, setSearchListPatient] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const dataDoctorfiltered = dataListDoctors
    .find((list) => list.id === dataUserLogin.id)

  const listPatients = dataDoctorfiltered?.patients.filter(list => list.doctor_id === dataUserLogin.id)
  
  const searchPatients = listPatients !== undefined && listPatients.filter(
    (patient) =>
     patient.name_patient
        .toLowerCase()
        .includes(searchListPatient.toLowerCase()), // Verifica se o nome contém o termo de pesquisa (ignorando maiúsculas/minúsculas)
  )

  const totalPages =
  searchPatients ? searchPatients.length < 1
      ? Math.ceil(listPatients.length / ITEMS_PER_PAGE)
      : searchPatients && Math.ceil(searchPatients.length / ITEMS_PER_PAGE) : 0

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value)
  }

  // Calcular os índices de início e fim
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentAppointments =
  searchPatients && searchPatients.length < 1
      ? listPatients?.slice(startIndex, endIndex)
      : searchPatients && searchPatients.slice(startIndex, endIndex)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchListPatient(searchListPatient)
  }

  return (
    <ContainerMyConsults>
      <HeaderContainerConsults>
        <HeaderContentTitle>
          <TitleText size="s">Meus Pacientes</TitleText>
          <TextRegular size="sm" color="bg" weight={600}>
            Acompanhe o andamento dos exercícios dos seus pacientes
          </TextRegular>
        </HeaderContentTitle>

        <form onSubmit={handleSubmit}>
          <TextField.Root
            placeholder="Pesquise um Paciente..."
            size={'3'}
            value={searchListPatient}
            onChange={(e) => setSearchListPatient(e.target.value)}
          >
            <TextField.Slot>
              <MagnifyingGlass size={20} />
            </TextField.Slot>
          </TextField.Root>
        </form>
      </HeaderContainerConsults>

      <ContainerTable>
        <HeaderTable>
          <th>Nome do Paciente</th>
          <th>Email do Paciente</th>
          <th>Status</th>
        </HeaderTable>

        {currentAppointments && currentAppointments.map((list) => {
          return (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ContentTable key={list.id}>
                  <td>{list.name_patient}</td>
                  <td>{list.email_patient}</td>
                  <td>
                    <Badge color="green">Atendido</Badge>
                  </td>
                </ContentTable>
              </Dialog.Trigger>
              <ModalExerciseInformation exerciseInformation={list.exercise_information} />
            </Dialog.Root>
          )
        })}
      </ContainerTable>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="standard"
        className="pagination"
      />
    </ContainerMyConsults>
  )
}
