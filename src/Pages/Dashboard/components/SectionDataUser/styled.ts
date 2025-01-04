import styled from "styled-components";

export const ContainerSectionUserData = styled.section`
width: 45%;
height: 30rem;

align-self: center;

border: none;
border-radius: 12px;

padding: 2rem;

background-color: ${({theme}) => theme.colors["base-white"]};

box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

export const ContentHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 3rem;
`

export const ContentDataUser = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
gap: 0.5rem;

text-align: center;

margin-top: 1.5rem;
`