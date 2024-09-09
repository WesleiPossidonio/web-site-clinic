import styled from "styled-components";

export const ContainerContact = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 100vh;

  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 6rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["base-white"]};

  @media (max-width: 667px) {
    height: max-content;
    padding: 1.5rem;
    text-align: center;
  }
`;

export const ContentContact = styled.div`
  width: 100%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3rem;

  border: none;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors["base-bg"]};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  #Maps {
    width: 100%;
    height: 16rem;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
  }

  @media (max-width: 680px) {
    height: max-content;
    padding: 2rem;

    #Maps {
    margin-bottom: 2rem;
  }
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 667px) {
    height: max-content;
    flex-wrap: wrap;
  }
`;

export const ContainerEmailAndWhatsapp = styled.div`
 width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 1rem;

  @media (max-width: 680px) {
    width: 100%;
    align-items: center;
  }
`;

export const ContentEmailAndWhatsapp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: ${({ theme }) => theme.FontSizes["text-regular-sm"]};
    color: ${({ theme }) => theme.colors["base-white"]};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const ContentForm = styled.form`
  width: 50%;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: none;
  border-radius: 8px;

  button {
    align-self: flex-start;
    margin-top: 1rem;
  }

  #reCaptcha {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 680px) {
    width: 100%;

    #reCaptcha {
      transform: scale(0.7); /* Reduz o tamanho para 80% */
      transform-origin: 0 0; /* Ajusta o ponto de origem da escala */
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`;

interface TextAreaProps {
  error?: string;
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({ theme, error }) =>
      error !== undefined
        ? theme.colors["base-red"]
        : theme.colors["base-white"]};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({ theme }) => theme.colors["base-white"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors["base-bg"]};
    border-radius: 8px;
  }
`;

export const Span = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 99999px;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors["base-bg"]};

  svg {
    color: ${({ theme }) => theme.colors["base-white"]};
  }
`;
