import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  label: string
  variant?: 'primary' | 'secondary'
}

export function Button({ label, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {label}
    </Container>
  )
}