import styled from 'styled-components'

export const ContainerCompany = styled.section`
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;
  margin: 0 auto;
  position: relative;

  background-color: ${({ theme }) => theme.colors['base-white-100']};
`

export const BgColor = styled.span`
  width: min(80rem, 70vw);
  height: 38rem;
  position: absolute;
  top: 11%;
  left: 11.5%;

  border: none;
  border-radius: 38px;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 425px) {
    height: 26rem;
  }
`

export const ContainerVideo = styled.div`
  width: min(80rem, 70vw);
  height: 38rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: mone;
  border-radius: 50px;

  background-image: url('https://plus.unsplash.com/premium_photo-1661963007537-88f809e37091?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 2;

  @media (max-width: 425px) {
    height: 26rem;
  }
`
