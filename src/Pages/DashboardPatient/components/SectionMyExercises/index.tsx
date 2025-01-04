import { useState } from 'react'
import { ExercisesContent } from '../../../../Components'
import { useListVocancies } from '../../../../Contexts/CompanyContext'
import {
  ButtonExercises,
  ContainerSectionMyExercises,
  ListExercises,
  MenuExercicies,
} from './styled'

export const SectionMyExercises = () => {
  const { dataUserLogin, dataPatient } = useListVocancies()
  const [exerciseId, setExerciseId] = useState('')

  const listExercise = dataPatient.find((list) => list.id === dataUserLogin.id)
  const exerciseSelected = listExercise?.list_execicies.exercicies.find(exercise => exercise.id === exerciseId)

  return (
    <ContainerSectionMyExercises>
      <ExercisesContent exercise={exerciseSelected} patinent_id={dataUserLogin.id} />

      <MenuExercicies>
        <ListExercises>
          {listExercise?.list_execicies.exercicies.map((exercise, index) => {
            return (
              <ButtonExercises key={exercise.id} onClick={() => setExerciseId(exercise.id !== undefined ? exercise.id : '')}>
                <strong>Exercicio {index + 1}:</strong> {exercise.name_exercicies}
              </ButtonExercises>
            )
          })}
        </ListExercises>

      </MenuExercicies>
    </ContainerSectionMyExercises>
  )
}
