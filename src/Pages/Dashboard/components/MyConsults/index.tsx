import { FormEvent, useState } from 'react'
import { useListVocancies } from '../../../../Contexts/CompanyContext'
import {
  ContainerMyConsults,
  ContainerTable,
  ContentTable,
  HeaderContainerConsults,
  HeaderTable,
} from './styled'
import { ModalCustomerTracking, TextRegular, TitleText } from '../../../../Components'
import { Badge, TextField } from '@radix-ui/themes'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Pagination } from '@mui/material'
import * as Dialog from '@radix-ui/react-dialog'

const ITEMS_PER_PAGE = 9

export const MyConsults = () => {
  const { dataListScheduledAppointments, dataUserLogin } = useListVocancies()

  const [searchListPatient, setSearchListPatient] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredConsultList = dataListScheduledAppointments
    .filter((list) => list.doctor_id === dataUserLogin.id)
    .filter(
      (consult) =>
       consult.patients_cpf.includes(searchListPatient) || // Verifica se o CPF contém o termo de pesquisa
       consult.patients_name
          .toLowerCase()
          .includes(searchListPatient.toLowerCase()), // Verifica se o nome contém o termo de pesquisa (ignorando maiúsculas/minúsculas)
    )

  const totalPages =
    filteredConsultList.length < 1
      ? Math.ceil(dataListScheduledAppointments.length / ITEMS_PER_PAGE)
      : Math.ceil(filteredConsultList.length / ITEMS_PER_PAGE)

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
    filteredConsultList.length < 1
      ? dataListScheduledAppointments.slice(startIndex, endIndex)
      : filteredConsultList.slice(startIndex, endIndex)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchListPatient(searchListPatient)
  }

  return (
    <ContainerMyConsults>
      <HeaderContainerConsults>
        <div>
          <TitleText size="s">Minhas Consultas Marcadas</TitleText>
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
      </HeaderContainerConsults>

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
              <ModalCustomerTracking id={list.id} />
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
