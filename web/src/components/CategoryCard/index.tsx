import { Link } from 'react-router-dom';
import { Container } from './styles';

interface CategoryCardProps {
  name: string;
  color: string;
}

const CategoryCard = ({ name, color }: CategoryCardProps) => {
  return (
    <Container color={color}>
      <Link className="category-card-link" to={`categories/${1}`}>
        <h1 className="category-card-title">{name}</h1>
      </Link>
    </Container>
  );
};

export default CategoryCard;
