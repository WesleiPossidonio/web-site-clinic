import * as zod from 'zod'

import { TextRegular, TitleText } from "../../Components"
import {
  ButtonLogin,
  ContainerLogin,
  ContentForm,
  ContentLogin,
  ContentTextForm,
  Form,
  ImgLogin,
  InputLogin
} from "./styled"

import ImageLogin from '../../assets/ImgLogin.svg'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useListVocancies } from '../../Contexts/CompanyContext'

const sendLoginFormSchema = zod.object({
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  password: zod.string().min(6, 'Limite Minimo de caractere é 6')
})

type createSendLoginFormInputs = zod.infer<typeof sendLoginFormSchema>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendLoginFormInputs>({
    resolver: zodResolver(sendLoginFormSchema),
  })

  const { HandleLoginCompanies } = useListVocancies()

  const handleLogin = (data: createSendLoginFormInputs) => {
    console.log(data)
    HandleLoginCompanies(data)
    reset()
  }
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContentForm>
          <TitleText color="bg" size="l">Login</TitleText>
          <TextRegular weight={500}>Insira os detalhes da sua conta</TextRegular>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <InputLogin
              placeholder="E-mail"
              type="text"
              {...register('email')}
              onError={
                errors.email?.message !== undefined
                && errors.email?.message !== ''
              }
            />
            {errors !== undefined && (
              <TextRegular size="sm" color="red">
                {errors.email?.message}
              </TextRegular>
            )}

            <InputLogin
              placeholder="Senha"
              type="password"
              {...register('password')}
              onError={
                errors.password?.message !== undefined
                && errors.password?.message !== ''
              }
            />
            {errors !== undefined && (
              <TextRegular size="sm" color="red">
                {errors.password?.message}
              </TextRegular>
            )}
            <TextRegular size="s" color="secundary-bg">Esqueceu Senha?</TextRegular>
            <ButtonLogin type='submit'>Login</ButtonLogin>
          </Form>

        </ContentForm>
        <ContentTextForm>
          <TitleText size="l" color="white" weight={500}>
            <strong>Bem-vindo ao</strong> <br /> portal Corpo e Mente
          </TitleText>
          <TextRegular size="s" color="white" weight={500}>Faça login para acessar sua conta</TextRegular>
          <ImgLogin src={ImageLogin} />
        </ContentTextForm>
      </ContentLogin>
    </ContainerLogin>
  )
}


