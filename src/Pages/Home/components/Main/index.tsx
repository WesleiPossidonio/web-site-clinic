import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { ContainerMain, ContentText, ImgBanner } from './styled'
import { Button, TextRegular, TitleText } from '../../../../Components'

export const MainSection = () => {
  return (
    <ContainerMain>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="ContentSlide">
          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="l">
                Recupere Sua Qualidade de Vida!
            </TitleText>
            <TextRegular color="white">
                Tratamentos personalizados para restaurar sua mobilidade e aliviar a dor. Cuide do seu corpo com profissionais especializados.
            </TextRegular>
            <Button colors='bg'>
              <a
                href="https://api.whatsapp.com/send/?phone=5522992128520&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Fazer Pedido
              </a>
            </Button>
          </ContentText>

          <ImgBanner
            src="https://plus.unsplash.com/premium_photo-1661963007537-88f809e37091?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>


        <SwiperSlide className="ContentSlide">
        <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="l">
              Fisioterapia que Transforma!
            </TitleText>
            
            <TextRegular color="white">
               Acelere sua recuperação com técnicas modernas e terapias avançadas. Sua saúde em boas mãos.
            </TextRegular>

            <Button colors='bg'>
              <a
                href="https://api.whatsapp.com/send/?phone=5522992128520&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Fazer Pedido
              </a>
            </Button>
          </ContentText>

          <ImgBanner
            src="https://plus.unsplash.com/premium_photo-1661689824265-2e0219c90a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </ContainerMain>
  )
}
