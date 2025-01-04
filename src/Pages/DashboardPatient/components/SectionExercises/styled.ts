import styled from "styled-components";

export const ContainerSextionExercise = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  margin: 0 auto;

  border: none;
  border-radius: 12px;
  padding: 2rem;

  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({ theme }) => theme.colors['base-white']};

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .mySwiper {
  width: 100%;
}

.ContentSlide {
  width: 100%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 12px;
  background-color: ${({theme}) => theme.colors["base-bg"]};

  img {
    width: 90%;
  }
}
`

export const HeaderSection = styled.header`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`