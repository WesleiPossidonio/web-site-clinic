import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled as muiStyled } from "@mui/material/styles";

export const ContainerFaq = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3.5rem;
  margin-bottom: 5rem;

  @media (max-width: 726px) {
    height: max-content;
    padding: 4rem 1.5rem;
    gap: 3rem;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const ContentFaq = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 5rem;
  }
`;

export const ImgFaq = styled.img`
  width: min(35rem, 45vw);

  @media (max-width: 726px) {
    width: min(35rem, 75vw);
    order: 2;
  }
`;

export const ContentAcordion = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;


  @media (max-width: 768px) {
   width: 100%;
  }
`;

export const AccordionContent = muiStyled(AccordionSummary)({
  borderRadius: "8px",

  "&:focus": {
    backgroundColor: "#1CAAA1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  },
});
