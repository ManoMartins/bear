import { Button } from "../Button";
import { ItemArticle } from "../ItemArticle";
import { Container, ListArticles, Title } from "./styles";

export function RecommendedArticles() {
  return (
    <Container>
      <header>
        <Title>
          Recommended Articles
        </Title>

        <Button variant="secondary" label="See All" />
      </header>

      <ListArticles style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateRows: "repeat(2, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        <ItemArticle isFeatured />

        <ItemArticle />
      
        <ItemArticle />
      </ListArticles>

    </Container>
  )
}