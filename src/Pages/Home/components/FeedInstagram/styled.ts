import styled from "styled-components";

export const ContainerFeedInstagram = styled.section`
  width: 100%;
  max-width: 120rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  margin: 0 auto;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  // Estilização Title
  span {
    font-size: 1.5rem;
  }

  .title {
    display: none;
  }
`;

export const ContentFeedInstagram = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 7vw));
  gap: 1.5rem;

  margin: 0 auto;
  padding: 3rem;

  @media (max-width: 433px) {
    max-width: 100%;
    grid-template-columns: repeat(2, minmax(11.625rem, 3vw));
    padding: 0;
  }
`;

export const LinkPost = styled.a`
  position: relative;
  border-radius: 13px;
  p {
    display: none;
    position: absolute;
    bottom: 3rem;
    left: 1rem;
    right: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   
  }

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  &:hover {
    p {
      display: flex;
    }
  }
`;
