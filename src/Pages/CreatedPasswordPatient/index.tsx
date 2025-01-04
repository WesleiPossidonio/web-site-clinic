import * as zod from 'zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import { TextRegular, TitleText } from '../../Components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import ImagePassword from '../../assets/ImgPssword.svg'
import { useListVocancies } from '../../Contexts/CompanyContext'

import {
  ButtonLogin,
  ContainerLogin,
  ContentForm,
  ContentLogin,
  ContentTextForm,
  Form,
  ImgLogin,
  InputLogin,
} from './styled'

const sendLoginFormSchema = zod.object({
  update_number: zod
    .string()
    .min(6, 'Insira o Código Corretamente')
    .max(6, 'Insira o Código Corretamente'),
  password: zod.string().min(6, 'Limite Minimo de caractere é 6'),
})

type createSendLoginFormInputs = zod.infer<typeof sendLoginFormSchema>

export const CreatedPasswordPatient = () => {
  const [captcha, setCaptcha] = useState<string | null>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendLoginFormInputs>({
    resolver: zodResolver(sendLoginFormSchema),
  })

  const { handleAddNewPasswordPatient } = useListVocancies()

  const handleCapcha = (token: string | null) => {
    setCaptcha(token)
  }

  const handleLogin = (data: createSendLoginFormInputs) => {
    if (!captcha) {
      toast.error('Captcha pendente!', {
        position: 'top-right',
      })
      return
    }
    handleAddNewPasswordPatient(data)
    reset()
  }

  return (
    <ContainerLogin>
      <ContentLogin>
        <ContentForm>
          <TitleText color="bg" size="l">
            Criar Senha
          </TitleText>
          <TextRegular weight={500}>Crie sua Senah de Acesso!</TextRegular>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <InputLogin
              placeholder="Código de Verficação"
              type="text"
              {...register('update_number')}
              onError={
                errors.update_number?.message !== undefined &&
                errors.update_number?.message !== ''
              }
            />
            {errors !== undefined && (
              <TextRegular size="sm" color="red">
                {errors.update_number?.message}
              </TextRegular>
            )}

            <InputLogin
              placeholder="Senha"
              type="password"
              {...register('password')}
              onError={
                errors.password?.message !== undefined &&
                errors.password?.message !== ''
              }
            />
            {errors !== undefined && (
              <TextRegular size="sm" color="red">
                {errors.password?.message}
              </TextRegular>
            )}
            <TextRegular size="s" color="secundary-bg">
              Esqueceu Senha?
            </TextRegular>
            <div id="reCaptcha">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                onChange={handleCapcha}
              />
            </div>
            <ButtonLogin type="submit">Cadastrar</ButtonLogin>
          </Form>
        </ContentForm>
        <ContentTextForm>
          <TitleText size="l" color="white" weight={500}>
            <strong>Bem-vindo ao</strong> <br /> portal Corpo e Mente
          </TitleText>
          <TextRegular size="s" color="white" weight={500}>
           Cadastre sua senha para acessar sua conta
          </TextRegular>
          <ImgLogin src={ImagePassword} />
        </ContentTextForm>
      </ContentLogin>
    </ContainerLogin>
  )
}
