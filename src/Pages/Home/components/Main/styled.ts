import styled from "styled-components"

export const ContainerMain = styled.section`
width: 100%;
height: 57rem;

.mySwiper {
  width: 100%;
}

.ContentSlide {
  width: 100%;
  height: 57rem;
}
`
export const ImgBanner = styled.img`
width: 100%;
height: 57rem;
object-fit: cover;
z-index: 1;
filter: brightness(0.7);
`

export const ContentText = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 40%;
  left: 6%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 2rem;
    h1 {
      font-size: min(3.5rem, 9.5vw);
    }
  }
`;