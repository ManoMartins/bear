import { Button } from "../components/Button";
import { LayoutDefault } from "../layout/Default";
import { Container } from "../styles/home.styles";
import { BsArrowRight } from "react-icons/bs";
import { ListGames } from "../components/ListGames";

export default function Home() {
  return (
    <LayoutDefault>

      <Container>
        <span>Discover Games You Will Love</span>

        <p>Read About Games That You Enjoy</p>

        <Button label="Start Exploring" iconRight={BsArrowRight} />

        <ListGames />
      </Container>

    </LayoutDefault>
  )
}
