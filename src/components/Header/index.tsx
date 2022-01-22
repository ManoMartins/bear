import { Button } from "../Button";
import { 
  Nav, 
  Logo, 
  Divider, 
  NavItem, 
  Container, 
  SearchIcon, 
  SearchInput,
  SearchContainer,
  ButtonGroup,
} from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <Logo>Bear</Logo>

        <Divider />

        <Nav>
          <NavItem href="/">
            <a>Explore</a>
          </NavItem>

          <NavItem href="/">
            <a>Releases</a>
          </NavItem>
        </Nav>

        <SearchContainer>
          <SearchIcon />
          
          <SearchInput placeholder="Discover new games" />
        </SearchContainer>
      </div>

      <ButtonGroup>
        <Button variant="secondary" label="Login In" />

        <Button label="Sign Up" />
      </ButtonGroup>
    </Container>
  )
}