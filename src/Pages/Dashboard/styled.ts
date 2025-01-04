import styled from "styled-components";

export const ContainerDashboard = styled.main`
width: 100%;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;


strong {
  color: ${({theme}) => theme.colors["base-bg"]};
}
`

export const ContentDashboard = styled.section`
width: 80%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 2rem;

padding: 3rem;

background-color: ${({theme}) => theme.colors["base-white-100"]};
`