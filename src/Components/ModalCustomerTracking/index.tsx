import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import { Password, X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextRegular, TitleText } from '../typografy'
import { Input } from '../Input'
import { Button } from '../Button'
import { Selected } from '../../Pages/Dashboard/components/CreateExercise/styled'
import { useListVocancies } from '../../Contexts/CompanyContext'
import {
  CloseButton,
  ContainerForm,
  ContainerHeader,
  ContentModal,
  Overlay,
} from './styled'

const addPatientSchema = zod.object({
  list_of_exercises_id: zod
    .string()
    .min(1, 'slecione a categoria do exercicio'),
  name_patient: zod.string().min(1, 'Por gentileza, Digite o Nome do Paciente'),
  email_patient: zod
    .string()
    .email('Por gentileza, digite o email corretamente'),
  // patients_cpf: zod.string().min(11, 'Por gentileza, digite o CPF corretamente').max(11, 'Por gentileza, digite o CPF corretamente'),
})

type addPatientFormInputs = zod.infer<typeof addPatientSchema>

interface ModalUpdatePatientProps {
  id?: string
}

export const ModalCustomerTracking = ({ id }: ModalUpdatePatientProps) => {
  const { dataListScheduledAppointments, dataCategory, handleAddPatients } = useListVocancies()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addPatientFormInputs>({
    resolver: zodResolver(addPatientSchema),
  })

  const patienteselected = dataListScheduledAppointments.find(
    (data) => data.id === id,
  )

  const handleAddPatientForm = (data: addPatientFormInputs) => {
    const {
      email_patient, 
      list_of_exercises_id,
       name_patient
    } = data

    const doctorId = patienteselected?.doctor_id
    if(doctorId){
      const patientData = {
        list_of_exercises_id: Number(list_of_exercises_id),
        name_patient,
        email_patient,
        type_user: 'Paciente',
        doctor_id: doctorId,
        password: 'Não declarado'
      }
  
      handleAddPatients(patientData)
    }
    
    reset()
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <ContainerHeader>
          <div>
            <TitleText size="s">Adicionar Paciente</TitleText>
            <TextRegular size="sm" color="bg" weight={500}>
              De acesso aos Exercicios aos seus Pacientes
            </TextRegular>
          </div>
        </ContainerHeader>

        <ContainerForm onSubmit={handleSubmit(handleAddPatientForm)}>
          <Input
            placeholder="Nome do Paciente"
            type="text"
            {...register('name_patient')}
            error={errors.name_patient?.message}
            defaultValue={patienteselected?.patients_name}
          />

          <Input
            placeholder="Email do Paciente"
            type="text"
            {...register('email_patient')}
            error={errors.email_patient?.message}
            defaultValue={patienteselected?.email_client}
          />

          <Selected {...register('list_of_exercises_id')}>
            <option value={0} disabled selected>
              Selecione a Categoria 
            </option>
            {
              dataCategory.map(date => {
                return <option value={date.id}>{date.name_category}</option>
              })
            }
          </Selected>
          <p>{errors.list_of_exercises_id?.message}</p>

          <Button colors="bg">Cadastrar Paciente</Button>
        </ContainerForm>
      </ContentModal>
    </Dialog.Portal>
  )
}
