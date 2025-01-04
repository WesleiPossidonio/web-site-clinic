import styled from "styled-components"

export const ContentExercises = styled.div`
width: 65%;
height: max-content;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 1rem;

video {
    width:100%;
    border-radius: 12px;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`

export const ContentForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

margin-top: 1rem;
`

export const FormExerciseInformation = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;

margin-top: 1rem;

label {
  font-size: ${({theme}) => theme.FontSizes['text-regular-sm']};
  font-weight: 500;
  margin-bottom: 0.2rem;
}

`