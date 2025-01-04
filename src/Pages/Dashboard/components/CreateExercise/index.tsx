import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Barbell } from "@phosphor-icons/react"

import { Button, Input, TitleText } from "../../../../Components"
import { ContainerCreateExercise, ContentForm, Selected } from "./styled"
import { TextArea } from "../../../Home/components/Contact/styled"
import { useListVocancies } from '../../../../Contexts/CompanyContext'

const MAX_FILE_SIZE = 1200 * 1024 * 1024;
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/avi']; // Tipos aceitos

const addExerciseFormSchema = zod.object({
  category_id: zod.string().min(1, 'Por Gentileza, Seleione a Categoria do Exercicio'),
  name_exercicies: zod.string().min(4, 'Adicione o nome do Exercicio'),
  description_exercicies: zod.string(),
  url_video:  zod
  .any()
  .refine((files) => files && files.length > 0, "Video is required.") // Verifica se algum arquivo foi selecionado
  .refine((files) => files[0]?.size <= MAX_FILE_SIZE, "Max file size is 1200MB.") // Verifica o tamanho do primeiro arquivo
  .refine((files) => ACCEPTED_VIDEO_TYPES.includes(files[0]?.type), ".mp4 and .avi files are accepted.") // Verifica o tipo do arquivo
})

type createExerciseFormInputs = zod.infer<typeof addExerciseFormSchema>

export const CreateExercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createExerciseFormInputs>({
    resolver: zodResolver(addExerciseFormSchema),
  })

  const { dataCategory, handleAddExercises } = useListVocancies()

  const handleCreateExercise = (data: createExerciseFormInputs) => {
    const {
      description_exercicies,
      name_exercicies,
      url_video,
      category_id
    } = data

    const listExercise = {
      description_exercicies,
      name_exercicies,
      url_video,
      category_id: parseInt(category_id)
    }

    handleAddExercises(listExercise)
    reset()
  }
  return (
    <ContainerCreateExercise>
      <TitleText size="s" color="bg">
        <Barbell size={32} />
        Adicionar Exercicios
      </TitleText>

      <ContentForm onSubmit={handleSubmit(handleCreateExercise)}>
        <Input
          placeholder="Nome do Exercicio"
          type="text"
          {...register('name_exercicies')}
          error={errors.name_exercicies?.message}
        />
        <Selected {...register('category_id')}>
          {
            dataCategory.map(category => {
              return <option value={category.id}>{category.name_category}</option>
            })
          }
        </Selected>
        <p>{errors.category_id?.message}</p>
        <Input
          placeholder="Video"
          type="file"
          {...register('url_video')}
          error={errors.url_video?.message || ''}
        />
        <TextArea
          placeholder="Descrição do Exercicio"
          {...register('description_exercicies')}
          error={errors.description_exercicies?.message}
        />
        <Button colors="bg" type='submit'>Adicionar</Button>
      </ContentForm>
    </ContainerCreateExercise>
  )
}