import { Container, BoxColor, Title } from './styles';

interface CategoryCardProps {
  name: string;
  color: string;
}

const CategoryCard = ({ name, color }: CategoryCardProps) => {
  return (
    <Container>
      <BoxColor color={color} />
      <Title>{name}</Title>
    </Container>
  );
};

export default CategoryCard;
