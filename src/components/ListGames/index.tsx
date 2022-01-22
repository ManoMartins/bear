import { Button } from "../Button";
import { ItemGame } from "../ItemGame";
import { Container, List, Title } from "./styles";

export function ListGames() {
  return (
    <Container>
      <header>
        <Title>
          Currently Trending Games
        </Title>

        <Button variant="secondary" label="See All" />
      </header>

      <List>
        <ItemGame />
        <ItemGame />
        <ItemGame />
        <ItemGame />
        <ItemGame />
        <ItemGame />
      </List>
    </Container>
  )
}