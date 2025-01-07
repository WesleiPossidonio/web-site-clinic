import * as zod from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'

import { CalendarDots } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../../../../Components"
import { Input } from "../../../../Components/Input"
import { ContainerCreateClientQuery, ContentForm } from "./styled"
import { Button } from "../../../../Components/Button"
import { SchedulesProps, useListVocancies } from '../../../../Contexts/CompanyContext'
import { Selected } from '../CreateExercise/styled'

const createClientQuerySchema = zod.object({
  doctor_name: zod.string().min(1, 'Por gentileza, Insira o nome do Doutor'),
  schedules_id: zod.string().uuid(),
  patients_name: zod.string().min(1, "Por gentileza, Digite o Nome do Paciente"),
  email_client: zod.string().email('Por gentileza, digite o email corretamente'),
  patients_cpf: zod.string().min(11, 'Por gentileza, digite o CPF corretamente').max(11, 'Por gentileza, digite o CPF corretamente'),
  service_type: zod.string().min(1, 'Por gentileza, digite o tipo de Consulta')
})

type createClientQueryFormInputs = zod.infer<typeof createClientQuerySchema>

export const CreateClientQuery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control // usado para o useWatch
  } = useForm<createClientQueryFormInputs>({
    resolver: zodResolver(createClientQuerySchema),
  });
  const [doctorSchedules, setDoctorSchedules] = useState<SchedulesProps[]>([])
  const [doctorId, setDoctorId] = useState('')
  const { dataListDoctors, handleAddClientQuery } = useListVocancies();
  const doctorName = useWatch({ control, name: 'doctor_name' });

  useEffect(() => {
    if (doctorName) {
      // Busca o doutor selecionado com base no nome
      const selectedDoctor = dataListDoctors.find(doctor => doctor.name === doctorName);
      if (selectedDoctor) {
        // Preenche outros campos com as informações do doutor
        setValue('service_type', selectedDoctor.position);
        setDoctorSchedules(selectedDoctor.doctor_schedules)
        if(selectedDoctor.id){
          setDoctorId(selectedDoctor.id)
        }
     
      }
    }
  }, [doctorName, dataListDoctors, setValue]);

  const handleCreateClientQuery = (data: createClientQueryFormInputs) => {
    const clientQuery = {...data, doctor_id: doctorId }
    handleAddClientQuery(clientQuery);
    reset();
  };

  return (
    <ContainerCreateClientQuery>
      <TitleText size="s" color="bg">
        <CalendarDots size={32} />
        Marcar Consulta
      </TitleText>

      <ContentForm onSubmit={handleSubmit(handleCreateClientQuery)}>
        <TextRegular size="sm" weight={500} color="secundary-bg">Dados do Paciente</TextRegular>
        <Input
          placeholder="Nome completo"
          type="text"
          {...register('patients_name')}
          error={errors.patients_name?.message}
        />

        <Input
          placeholder="Email"
          type="text"
          {...register('email_client')}
          error={errors.email_client?.message}
        />

        <Input
          placeholder="Cpf do Paciente"
          type="text"
          {...register('patients_cpf')}
          error={errors.patients_cpf?.message}
        />

        <TextRegular size="sm" weight={500} color="secundary-bg">Dados do Doutor</TextRegular>
        <Input
          list='doctor'
          placeholder="Nome do Doutor"
          {...register('doctor_name')}
          error={errors.doctor_name?.message}
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
        />

        <Selected {...register('schedules_id')}>
          <option value='' disabled selected>Adicionar Data e Horário</option>
          {
            doctorSchedules.map(date => {
              return <option value={date.id}>{date.date} | {date.startTime}</option>
            })
          }

        </Selected>
        <Button colors="bg" type='submit'>Marcar Consulta</Button>
      </ContentForm>
    </ContainerCreateClientQuery>
  )
}
