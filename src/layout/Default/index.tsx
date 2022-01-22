import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";

interface LayoutDefaultProps {
  children: ReactNode;
}

export function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  )
}