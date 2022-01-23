import Image from "next/image";
import { 
  ArticleRelease, 
  BrandContent, 
  BrandLogo, 
  BrandTitle, 
  Container, 
  Description, 
  Details, 
  ImageContent, 
  Title 
} from "./styles";

interface ItemArticleProps {
  isFeatured?: boolean;
}

export function ItemArticle({ isFeatured }: ItemArticleProps) {
  return (
    <Container isFeatured={isFeatured}>
      <BrandContent>
        <BrandLogo>
          <Image 
            width={24} 
            height={24} 
            alt="Logo da marca" 
            src="/assets/Steam_icon_logo.png" 
          />
        </BrandLogo>

        <div>
          <BrandTitle>Steam</BrandTitle>

          <ArticleRelease>22.01.2022</ArticleRelease>
        </div>
      </BrandContent>

      <div>
        <ImageContent className="imageContent">
          <Image 
            width={isFeatured ? 120 : 60} 
            height={isFeatured ? 160 : 80} 
            alt="teste" 
            src="https://static-cdn.jtvnw.net/ttv-boxart/516575-120x192.jpg" 
          />
        </ImageContent>

        <Details className="details">
          <Title>Lorem velit adipisci hic labore perspiciatis dolores totam fuga molestiae? Distinctio consectetur laborum ullam incidunt itaque porro?</Title>

          {isFeatured && <Description>Cum nesciunt sed, animi recusandae perferendis illum incidunt modi est facere dolorem quae dolore laudantium possimus at pariatur voluptatibus, hic iusto quaerat.</Description>}
        </Details>
      </div>
    </Container>
  )
}