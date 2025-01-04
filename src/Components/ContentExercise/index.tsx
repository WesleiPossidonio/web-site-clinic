import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ExercisesProps, useListVocancies } from '../../Contexts/CompanyContext'
import { TitleExercises } from '../../Pages/DashboardPatient/components/SectionMyExercises/styled'
import { TextArea } from '../../Pages/Home/components/Contact/styled'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextRegular, TitleText } from '../typografy'
import {
  ContentExercises,
  ContentForm,
  FormExerciseInformation,
} from './styled'

interface SectionMyExercisesProps {
  exercise?: ExercisesProps
  patinent_id: string
}

const createExerciseInformationSchema = zod.object({
  number_of_repetitions: zod.string().min(1, "Por gentileza, Digite o Nome do Paciente"),
  resume_exercise: zod.string().min(3, 'Por gentileza, digite o tipo de Consulta')
})

type createExerciseInformationFormInputs = zod.infer<typeof createExerciseInformationSchema>

export const ExercisesContent = ({ exercise, patinent_id }: SectionMyExercisesProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createExerciseInformationFormInputs>({
    resolver: zodResolver(createExerciseInformationSchema),
  });

  const {handleAddExerciseInformation} = useListVocancies()

  const handleCreateExerciseInformation = (data: createExerciseInformationFormInputs) => {
    const {number_of_repetitions, resume_exercise} = data

    if(exercise){
      const listExerciseInformation = {
        number_of_repetitions,
        resume_exercise,
        name_exercise: exercise.name_exercicies,
        patinent_id: patinent_id
      }
  
      handleAddExerciseInformation(listExerciseInformation)
    }
   
    reset()
  }

  return (
    <ContentExercises>
      <video controls>
        <source src={exercise?.url_video} />
      </video>

      <TitleExercises>
        <TitleText color="bg"></TitleText>
        <TextRegular weight={500}>{exercise?.description_exercicies}</TextRegular>
      </TitleExercises>

      <ContentForm>
        <TextRegular color="secundary-bg" size="sm" weight={600}>
          Perguntas Sobre o Exercício{' '}
        </TextRegular>

        <FormExerciseInformation onSubmit={handleSubmit(handleCreateExerciseInformation)}>
          <label htmlFor="repetions">
            1ª Quantas Repetições foram feitas?
            <Input
              type="text"
              id="repetions"
              {...register('number_of_repetitions')}
              placeholder="Digite repetições"
              error={errors.number_of_repetitions?.message}
            />
          </label>

          <label htmlFor="resumeExercises">
            2ª Houve alguma dificuldade no exercício? Resume o andamento.
            <TextArea
              id="resumeExercises"
              placeholder="Descreva como foi o andamento exercicio"
              {...register('resume_exercise')}
              error={errors.resume_exercise?.message}
            />
          </label>

          <Button colors="bg">Enviar</Button>
        </FormExerciseInformation>
      </ContentForm>
    </ContentExercises>
  )
}
