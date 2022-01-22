import styled from "styled-components";

interface ContainerProps {
  variant?: 'primary' | 'secondary';
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  border-radius: 0.75rem;
  padding: 0.25rem 1.25rem;
  border: none;
  height: 3rem;
  font-size: 1rem;
  background: ${({ theme, variant }) => theme.colors[variant || 'primary']};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
  }
`;
