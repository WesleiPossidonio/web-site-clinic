import { Barbell } from "@phosphor-icons/react"
import { Button, Input, TitleText } from "../../../../Components"
import { ContainerCreateCategory, ContentForm } from "./styled"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from "react-hook-form"
import { useListVocancies } from "../../../../Contexts/CompanyContext"

const addCategoryFormSchema = zod.object({
  name_category: zod.string().min(5, 'Descreva a Categoria')
})

type createCategoryFormInputs = zod.infer<typeof addCategoryFormSchema>
export const CreateCategory = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createCategoryFormInputs>({
    resolver: zodResolver(addCategoryFormSchema),
  })

  const { handleAddCategory } = useListVocancies()

 const handleCreateCategory = (data: createCategoryFormInputs) => {
  handleAddCategory(data)
  reset()
 }

  return (
    <ContainerCreateCategory>
      <TitleText size="s" color="bg">
        <Barbell size={32} />
        Adicionar Categoria
      </TitleText>
      <ContentForm onSubmit={handleSubmit(handleCreateCategory)}>
        <Input 
          placeholder="Nome da Categoria" 
          type="text" 
          {...register('name_category')}
          error={errors.name_category?.message}
        />
        <Button colors="bg">Adicionar Categoria</Button>
      </ContentForm>
    </ContainerCreateCategory>
  )
}


