import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import { X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextRegular, TitleText } from '../typografy'
import { Input } from '../Input'
import { Button } from '../Button'
import {
  CloseButton,
  ContainerForm,
  ContainerHeader,
  ContentModal,
  Overlay
} from './styled'

import { Selected } from '../../Pages/Dashboard/components/CreateExercise/styled'
import { useListVocancies } from '../../Contexts/CompanyContext'

const updateClientQuerySchema = zod.object({
  doctor_name: zod.string().min(1, 'Por gentileza, Insira o nome do Doutor'),
  consultation_hours: zod.string().min(1, "Por gentileza, Selecione um Horário"),
  consultation_date: zod.string().min(1, "Por gentileza, Selecione uma Data"),
  patients_name: zod.string().min(1, "Por gentileza, Digite o Nome do Paciente"),
  email_client: zod.string().email('Por gentileza, digite o email corretamente'),
  patients_cpf: zod.string().min(11, 'Por gentileza, digite o CPF corretamente').max(11, 'Por gentileza, digite o CPF corretamente'),
  service_type: zod.string().min(1, 'Por gentileza, digite o tipo de Consulta')
})

type updateClientQueryFormInputs = zod.infer<typeof updateClientQuerySchema>

interface ModalUpdatePatientProps {
  id?: string
}

export const ModalUpdatePatient = ({ id }: ModalUpdatePatientProps) => {
  const { dataListDoctors, dataListScheduledAppointments } = useListVocancies();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control // usado para o useWatch
  } = useForm<updateClientQueryFormInputs>({
    resolver: zodResolver(updateClientQuerySchema),
  });

  const patienteselected = dataListScheduledAppointments.find(data => data.id === id)

  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <ContainerHeader>
          <div>
            <TitleText size='s'>
              Atualizar Consulta
            </TitleText>
            <TextRegular size='sm' color='bg' weight={500}>
              Atualize os dados do Paciente
            </TextRegular>
          </div>

          <Button colors='bg'> Cancelar Consulta</Button>
        </ContainerHeader>

        <ContainerForm>
          <Input
            placeholder="Nome completo"
            type="text"
            {...register('patients_name')}
            error={errors.patients_name?.message}
            defaultValue={patienteselected?.patients_name}
          />

          <Input
            placeholder="Email"
            type="text"
            {...register('email_client')}
            error={errors.email_client?.message}
            defaultValue={patienteselected?.email_client}
          />

          <Input
            placeholder="Cpf do Paciente"
            type="text"
            {...register('patients_cpf')}
            error={errors.patients_cpf?.message}
            defaultValue={patienteselected?.patients_cpf}
          />

          <TextRegular size="sm" weight={500} color="secundary-bg">Dados do Doutor</TextRegular>
          <Input
            list='doctor'
            placeholder="Nome do Doutor"
            {...register('doctor_name')}
            error={errors.doctor_name?.message}
            defaultValue={patienteselected?.doctor.name}
          />

          <datalist id="doctor">
            {dataListDoctors.map(doctor => (
              <option key={doctor.id} value={doctor.name} />
            ))}
          </datalist>

          <Input
            placeholder="Especialização"
            type="text"
            {...register('service_type')}
            error={errors.service_type?.message}
            defaultValue={patienteselected?.doctor.position}
          />

          <Selected {...register('consultation_date')}>
            <option value={patienteselected?.consultation_date} disabled selected>
              {patienteselected?.consultation_date}
            </option>
            {/* {
              doctorSchedules.map(date => {
                return <option value={date.date}>{date.date}</option>
              })
            } */}

          </Selected>

          <Selected {...register('consultation_hours')}>
          <option value={patienteselected?.consultation_hours} disabled selected>
              {patienteselected?.consultation_hours}
            </option>
            {/* {
              doctorSchedules.map(hours => {
                return <option value={hours.hours}>{hours.hours}</option>
              })
            } */}

          </Selected>
          <Button colors='bg'>Atualizar Consulta</Button>
        </ContainerForm>
      </ContentModal>
    </Dialog.Portal>
  )
}

