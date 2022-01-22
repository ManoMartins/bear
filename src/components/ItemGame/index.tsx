import Image from "next/image";
import { Container, Title } from "./styles";

export function ItemGame() {
  return (
    <Container>
      <Image src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="LOL" width={188} height={250} />

      <Title>League of Legend</Title>
    </Container>
  )
}