import styled from "styled-components";

export const Container = styled.main`
  margin-top: 16rem;

  > span {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  > p {
    margin-top: 1rem;
    margin-bottom: 5rem;
    width: 16ch;
    font-size: 4rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Content = styled.main``;