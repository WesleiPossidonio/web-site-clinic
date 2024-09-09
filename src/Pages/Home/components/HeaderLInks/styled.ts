import styled from "styled-components";


export const ContainerHeaderLinks = styled.div`
width: 100%;
height: 2rem;
padding: 0 3rem;

display: flex;
justify-content: space-between;
align-items: center;

background-color: ${({theme}) => theme.colors["base-bg"]};
`

export const ContentLinkContact = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;

color: ${({theme}) => theme.colors["base-white"]};
`

export const Link = styled.a`
font-size: 0.865rem;
color: ${({theme}) => theme.colors["base-white"]};
`

export const ContainerLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.2rem;

`