import { Swiper, SwiperSlide } from 'swiper/react';

import { TextRegular, TitleText } from '../../../../Components';
import { ContainerSextionExercise, HeaderSection } from "./styled"

import ImageOne from '../../../../assets/ImageExerciseOne.svg'
import ImageTwo from '../../../../assets/ImageExerciseTwo.svg'
import ImageThree from '../../../../assets/ImageExerciseThree.svg'
import ImageFour from '../../../../assets/ImageExerciseFour.svg'

import 'swiper/css';
import 'swiper/css/pagination';

export const SectionExercises = () => {
  return (
    <ContainerSextionExercise>
      <HeaderSection>
        <TitleText size='m'>Exercicios</TitleText>
        <TextRegular weight={500} color='bg'>Veja os Nossos Exercicios Disponíveis</TextRegular>
      </HeaderSection>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className='ContentSlide'>
          <img src={ImageOne} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Um</TitleText>
        </SwiperSlide>

        <SwiperSlide className='ContentSlide'>
          <img src={ImageTwo} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Dois</TitleText>
        </SwiperSlide>

        <SwiperSlide className='ContentSlide'>
          <img src={ImageThree} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Três</TitleText>
        </SwiperSlide>

        <SwiperSlide className='ContentSlide'>
          <img src={ImageFour} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Quatro</TitleText>
        </SwiperSlide>

        <SwiperSlide className='ContentSlide'>
          <img src={ImageOne} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Cinco</TitleText>
        </SwiperSlide>

        <SwiperSlide className='ContentSlide'>
          <img src={ImageThree} alt="" />
          <TitleText size='s' color='white'>Exercicio <br /> Seis</TitleText>
        </SwiperSlide>
      </Swiper>
    </ContainerSextionExercise>
  )
}


