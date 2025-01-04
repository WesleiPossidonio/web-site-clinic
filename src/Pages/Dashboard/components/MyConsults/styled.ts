import styled from 'styled-components'

export const ContainerMyConsults = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  margin: 0 auto;

  border: none;
  border-radius: 12px;
  padding: 2rem;

  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${({ theme }) => theme.colors['base-white']};

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .pagination {
    margin-left: 85%;
  }
`

export const HeaderContainerConsults = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0.2rem;

    p {
      cursor: pointer;
    }
  }
`

export const ContainerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const HeaderTable = styled.tr`
  height: 21px;
  background-color: transparent;

  th {
    font-size: ${({ theme }) => theme.FontSizes['text-regular-sm']};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.14px;
    color: ${({ theme }) => theme.colors['base-bg']};
    padding: 0.875rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors['base-gray']};
  }
`

export const ContentTable = styled.tr`
  height: 29px;
  cursor: pointer;
  td {
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
    color: #292d32;
    border-bottom: 1px solid ${({ theme }) => theme.colors['base-gray']};
    padding: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-gray']};
  }
`
