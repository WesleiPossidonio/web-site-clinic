import styled from "styled-components";

export const ContainerAbout = styled.section`
width: 100%;
height: 45rem;
max-width: 120rem;

display: flex;
align-items: center;
justify-content: space-around;

margin: 0 auto;
padding: 3rem;


@media(max-width: 768px){
  height: max-content;
  flex-wrap: wrap;
  padding: 2rem;
}
`

export const ContainerText = styled.div`
max-width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;

@media(max-width: 768px){
  width: 100%;
}
`

export const ContainerImages = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;

div {
  position: relative;
}


`

export const ImageAbout = styled.img`
width: min(15.2rem, 40vw);
border-radius: 3px;

`

export const ImageAboutTwo = styled(ImageAbout)`
margin-top: 3rem;
z-index: 1;
`

export const YearsExperience = styled.div`
width: min(10rem, 25vw);
height: 6.5rem;
padding: 1.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

position: absolute;
top: 7rem;
left: 7rem;

z-index: 2;
background-color: ${({theme}) => theme.colors["base-white"]};
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

text-align: center;

span {
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.colors["base-bg"]};
}

@media(max-width: 425px){
  height: 4.3rem;
  top: 5.5em;
  left: 6rem;

  span {
  font-size: 1.8rem;
}

p {
  font-size: 0.675rem;
}
}
`