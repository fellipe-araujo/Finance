import { Container } from "./styles";

interface CategoryCardProps {
  name: string;
  color: string;
}

const CategoryCard = ({ name, color }: CategoryCardProps) => {
  return (
    <Container color={color}>
      <h1 className="category-card-title">{name}</h1>
    </Container>
  );
};

export default CategoryCard;
