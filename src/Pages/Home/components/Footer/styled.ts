import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 24rem;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors["base-white-100"]};

  @media (max-width: 696px) {
    height: max-content;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
  }

  a {
    font-weight: 700;
    cursor: pointer;
    color: #000;
  }

  #company-img {
    width: 5.5rem;
  }

  a {
    &:hover {
      color: ${({ theme }) => theme.colors["base-bg"]};
    }
  }

  @media (max-width: 696px) {
    order: 1;
    margin-top: 1.5rem;
  }
`;

export const ContentLinkLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentLinkIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`

export const IconsContent = styled.span`
width: 2.3rem;
height: 2.3rem;

display: flex;
align-items: center;
justify-content: center;

border: 0;
border-radius: 50%;

padding: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
background-color: ${({theme}) => theme.colors["base-bg"]};

cursor: pointer;

&:hover {
  background-color: ${({theme}) => theme.colors["base-secundary-bg"]};

  svg {
    color: #fff;
  }
}
`

export const ContentContact = styled(ContentLogo)`
  @media (max-width: 696px) {
    order: 3;
    margin-top: 0;
    div {
      width: 100%;
    }
  }
`;

export const ContentLinkSite = styled(ContentLogo)`
  @media (max-width: 696px) {
    margin: 0;
    order: 2;
    div {
      margin: 0;
    }
  }
`;

export const LinkSite = styled(ContentLogo)`
  gap: 0.6rem;
`;

export const TitleLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  p {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors["base-bg"]};
    }
  }
`;

export const ImgLogo = styled.img`
  width: 10rem;
`;

export const ContentLinkContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    gap: 0.3rem;
    font-size: ${({theme}) => theme.FontSizes["text-regular-sm"]};
    color: ${({theme}) => theme.colors["base-text"]};
    font-weight: 500;
  }

  &:hover {
    color: ${({theme}) => theme.colors["base-secundary-bg"]};
  }
`;