import styled from "styled-components";

interface ContainerProps {
  isFeatured: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1rem;
  width: ${({ isFeatured }) => isFeatured ? 41 : 20}rem;
  height: ${({ isFeatured }) => isFeatured ? 25 : 12}rem;
  background-image: url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt178268259f8a7c6f/60ff4881bf34702dbca366b5/Yoru_Killjoy_1920x1080.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;
  position: relative;
  grid-column: ${({ isFeatured }) => isFeatured ? 'span 2' : 'span 1'};
  grid-row: ${({ isFeatured }) => isFeatured ? 'span 2' : 'span 1'};

  box-shadow: inset 0 -8rem 10rem 0 #0b0b20;
  
  > div  {
    display: flex;

    .imageContent {
      width: ${({ isFeatured }) => isFeatured ? 120 : 60}px;
      height: ${({ isFeatured }) => isFeatured ? 160 : 80}px;
    }

    .details {
      max-width: ${({ isFeatured }) => isFeatured ? 27 : 14}rem;
    }

    div + div {
      margin-left: 1.25rem;
    }
  }

  h1 {
    line-clamp: 2; 
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`;

export const BrandContent = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.25rem;
  }
`;

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1.15rem 1.15rem 1.15rem 0.2rem;
  background: #08253f;
`;

export const BrandTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const ArticleRelease = styled.span`
  font-size: 0.875rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  line-clamp: 3; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};

  line-clamp: 2; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

export const ImageContent = styled.div`
  img {
    border-radius: 0 1rem 0 1rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
