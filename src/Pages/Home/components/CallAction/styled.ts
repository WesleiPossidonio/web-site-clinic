import styled from "styled-components";

export const ContainerCallAction = styled.section`
width: 100%;
height: 42rem;
padding: 2rem 4rem;

display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme}) => theme.colors["base-white-100"]};
`

export const ContentCallAction = styled.div`
width: 100%;
height: 30rem;

display: flex;
justify-content: center;
align-items: center;

border-radius: 16px;

position: relative;
padding: 2rem;
text-align: center;

background-color: ${({theme}) => theme.colors["base-bg"]};
`
export const ContainerText = styled.div`
width: 90%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;

position: absolute;
top: 7rem;
z-index: 3;

button {
  margin-top: 1rem;
}
`


export const ImgCallAction = styled.img`
  width: min(22rem, 25vw);
  position: absolute;
  top: 35%;
  right: 3%;
  z-index: 2;
`

export const ImgCallActionTwo = styled(ImgCallAction)`
top: 45%;
left: 2%;
`