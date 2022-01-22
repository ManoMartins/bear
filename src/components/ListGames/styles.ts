import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12rem;


  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-bottom: 3rem;
  }

  div + div {
    margin-left: 0.75rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;

export const List = styled.ul`
  display: flex;
`;