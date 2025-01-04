import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CalendarDots } from "@phosphor-icons/react"
import { TitleText } from "../../../../Components"
import { Input } from "../../../../Components/Input"
import { ContainerCreateClientQuery, ContentForm } from "./styled"
import { Button } from "../../../../Components/Button"
import { useForm } from 'react-hook-form'
import { useListVocancies } from '../../../../Contexts/CompanyContext'

const createSchedulesFormSchema = zod.object({
  date: zod.string(),
  hours: zod.string(),
})

type createSchedulesFormFormInputs = zod.infer<typeof createSchedulesFormSchema>

export const CreateSchedules = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSchedulesFormFormInputs>({
    resolver: zodResolver(createSchedulesFormSchema),
  })

  const { handleAddSchedules, dataUserLogin } = useListVocancies()

  const handleCreateSchedules = (data: createSchedulesFormFormInputs) => {
    const {
      date,
      hours,
    } = data

    const { id } = dataUserLogin

    const schedules = {
      doctor_id: id,
      date,
      hours,
      state_schedules: 'Disponivel'
    }

    handleAddSchedules(schedules)
    reset()
  }

  return (
    <ContainerCreateClientQuery>
      <TitleText size="s" color="bg">
        <CalendarDots size={32} />
        Adicionar Horário
      </TitleText>

      <ContentForm onSubmit={handleSubmit(handleCreateSchedules)}>
        <Input
          placeholder="Data da Consulta"
          type="date"
          {...register('date')}
          error={errors.date?.message}
        />
        <Input
          placeholder="12:30"
          type="text"
          {...register('hours')}
          error={errors.hours?.message}
        />
        <Button colors="bg" type="submit">Adicionar Horário</Button>
      </ContentForm>
    </ContainerCreateClientQuery>
  )
}

