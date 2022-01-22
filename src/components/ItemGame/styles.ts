import styled from "styled-components";

export const Container = styled.div`
  width: 188px;
  height: 250px;

  transition: all 0.2s ease-in-out;

  img {
    border-radius: 1.25rem;
  }

  &:hover {
    cursor: pointer;

    transform: translateX(0.3rem) translateY(-0.3rem);
  }
`;

export const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;