import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ContainerMain, ImgBanner } from './styled';

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
          <ImgBanner src="https://plus.unsplash.com/premium_photo-1661963007537-88f809e37091?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide className="ContentSlide">
          <ImgBanner src="https://plus.unsplash.com/premium_photo-1661689824265-2e0219c90a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
      </Swiper>
    </ContainerMain>
  )
}


