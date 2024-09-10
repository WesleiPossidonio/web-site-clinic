import { MapPinArea, Phone, Envelope } from "@phosphor-icons/react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import * as zod from 'zod'
import AOS from 'aos'
import {
  ContainerContact,
  ContainerEmailAndWhatsapp,
  ContentContact,
  ContentEmailAndWhatsapp,
  ContentForm,
  ContentInfo,
  ContentTitle,
  TextArea
} from "./styled"

import 'aos/dist/aos.css';
import ReCAPTCHA from "react-google-recaptcha"
import api from "../../../../Services/api"
import { TextRegular, TitleText } from "../../../../Components"
import { Input } from "../../../../Components/Input"
import { Button } from "../../../../Components/Button"

const sendEmailFormSchema = zod.object({
  name: zod.string().min(3, 'Por gentileza, digite o seu nome'),
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  phone: zod
    .string()
    .min(11, 'Por gentileza, digite o numero de telefone corretamente')
    .max(11, 'Por gentileza, digite o numero sem caractere'),
  subject_text: zod.string().min(3, 'Digite sua dúvida'),
  subject_title: zod.string().min(3, 'Digite sua dúvida'),
})

type createSendEmailFormInputs = zod.infer<typeof sendEmailFormSchema>

export const Contact = () => {
  const [captcha, setCaptcha] = useState<string | null>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendEmailFormInputs>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  useEffect(() => {
    AOS.init()
  }, [])

  const handleSendEmail = async (data: createSendEmailFormInputs) => {
    const { email, name, phone, subject_text, subject_title } = data

    if (!captcha) {
      toast.error("Captcha pendente!", {
        position: "top-right"
      })
      return;
    }

    const dataSendEmail = {
      email,
      name,
      phone,
      subject_text,
      subject_title,
      captcha, // Incluindo o token reCAPTCHA
    }
    
    try {
      await toast.promise(api.post('sendMail', dataSendEmail), {
        pending: 'Verificando seus dados',
        success: 'Dúvida enviada com sucesso!',
        error: 'Verifique seus dado e faça novamente! 🤯',
      })
      reset()
      setCaptcha(null) // Resetando o captcha após o envio
    } catch (error) {
      console.log(error)
    }
  }

  const handleCapcha = (token: string | null) => {
    setCaptcha(token)
  }

  return (
    <ContainerContact id="contact">
      <ContentContact data-aos="zoom-in" data-aos-duration="1000">
        <ContentTitle>
          <TitleText size="s" color="white">
            CONTATO
          </TitleText>
          <TitleText size="l" color="white">
            Entre em contato conosco.
          </TitleText>
        </ContentTitle>

        <ContentInfo>
          <ContainerEmailAndWhatsapp>
            <ContentEmailAndWhatsapp>
              <Phone size={45} color="#fff" />
              <div>
                <TitleText size="s" color="white">Telefones:</TitleText>
                <TextRegular color="white">
                <strong>Macaé:</strong>{' '} 
                <a href="tel:+55222762-2717">(22) 2762-2717</a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

            <ContentEmailAndWhatsapp>
              <Envelope size={45} color="#fff" />
              <div>
                <TitleText size="s" color="white">E-mail</TitleText>
                <TextRegular color="white"><strong>Macaé:</strong>{' '}
                  <a href="mailto:vendas@centraldeacos.com.br">
                    vendas@centraldeacos.com.br
                  </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

            <ContentEmailAndWhatsapp>
              <MapPinArea size={45} color="#fff" />
              <div>
                <TitleText size="s" color="white">Endereços</TitleText>
                <TextRegular color="white" weight={500}>
                  <a href="#"> R. Evaldo Costa, 1103 - Sol Y Mar, Macaé - RJ </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

          </ContainerEmailAndWhatsapp>

          <ContentForm onSubmit={handleSubmit(handleSendEmail)}>
            <Input
              type="text"
              placeholder="Nome"
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              type="text"
              placeholder="Email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              type="tel"
              placeholder="Telefone"
              {...register('phone')}
              error={errors.phone?.message}
            />
            <Input
              type="text"
              placeholder="Assunto"
              {...register('subject_title')}
              error={errors.subject_title?.message}
            />
            <TextArea
              placeholder="Digite sua dúvida...."
              {...register('subject_text')}
              error={errors.subject_text?.message}
            />
            <div id='reCaptcha'>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                onChange={handleCapcha}
              />
            </div>
            <Button colors="white">Enviar</Button>
          </ContentForm>
        </ContentInfo>
      </ContentContact>
    </ContainerContact>
  )
}
