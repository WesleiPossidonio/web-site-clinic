import { Badge, TextField } from '@radix-ui/themes'
import { Pagination } from '@mui/material'
import { FormEvent, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { ModalUpdatePatient, TextRegular, TitleText } from '../../../../Components'
import {
  ContainerScheduledAppointment,
  ContainerTable,
  ContentTable,
  HeaderContainer,
  HeaderTable,
} from './styled'

import { useListVocancies } from '../../../../Contexts/CompanyContext'


const ITEMS_PER_PAGE = 9
export const ScheduledAppointment = () => {
  const { dataListScheduledAppointments } = useListVocancies()

  const [searchListPatient, setSearchListPatient] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // const filteredPatientList = dataListScheduledAppointments.filter(
  //   (patient) =>
  //     patient.patients_cpf === searchListPatient ||
  //     patient.patients_name === searchListPatient,
  // )

  const filteredPatientList = dataListScheduledAppointments.filter(
    (patient) =>
      patient.patients_cpf.includes(searchListPatient) || // Verifica se o CPF contém o termo de pesquisa
      patient.patients_name.toLowerCase().includes(searchListPatient.toLowerCase()) // Verifica se o nome contém o termo de pesquisa (ignorando maiúsculas/minúsculas)
  );

  const totalPages =
    filteredPatientList.length < 1
      ? Math.ceil(dataListScheduledAppointments.length / ITEMS_PER_PAGE)
      : Math.ceil(filteredPatientList.length / ITEMS_PER_PAGE)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value)
  }

  // Calcular os índices de início e fim
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentAppointments = filteredPatientList.length < 1 ? dataListScheduledAppointments.slice(
    startIndex,
    endIndex,
  ) : filteredPatientList.slice(
    startIndex,
    endIndex,
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchListPatient(searchListPatient);
  };


  return (
    <ContainerScheduledAppointment>
      <HeaderContainer>
        <div>
          <TitleText size="s">Consultas Marcadas</TitleText>
          <TextRegular size="sm" color="bg" weight={600}>
            Lista de Consultas
          </TextRegular>
        </div>

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
      </HeaderContainer>

      <ContainerTable>
        <HeaderTable>
          <th>Nome do Paciente</th>
          <th>Data da Consulta</th>
          <th>Horário da Consulta</th>
          <th>Node do Doutor(a)</th>
          <th>Consulta</th>
          <th>Status</th>
        </HeaderTable>

        {currentAppointments.map((list) => {
          return (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ContentTable key={list.id}>
                  <td>{list.patients_name}</td>
                  <td>{list.consultation_date}</td>
                  <td>{list.consultation_hours}</td>
                  <td>{list.doctor.name}</td>
                  <td>{list.service_type}</td>
                  <td>
                    <Badge color="green">Atendendo</Badge>
                  </td>
                </ContentTable>
              </Dialog.Trigger>
              <ModalUpdatePatient id={list.id} />
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
    </ContainerScheduledAppointment>
  )
}
