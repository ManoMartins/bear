import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  label: string
  variant?: 'primary' | 'secondary'
  iconRight?: IconType
}

export function Button({ label, iconRight: IconRight, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {label}

      {IconRight && <IconRight style={{ marginLeft: '12px' }} />}
    </Container>
  )
}