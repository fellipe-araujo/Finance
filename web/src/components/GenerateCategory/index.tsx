import { Container, Input, ButtonGenerate } from './styles';
import CategoryCard from '../../components/CategoryCard';
import { FiRefreshCw } from 'react-icons/fi';

const GenerateCategory = () => {
  return (
    <Container>
      <h1 className="generate-category-title">Pré-visualização:</h1>
      <CategoryCard name="Salário" color="#FFF" />

      <div className="generate-category-input-group">
        <Input />
        <ButtonGenerate>
          <FiRefreshCw size={16} color="#39393A" />
        </ButtonGenerate>
      </div>
    </Container>
  );
};

export default GenerateCategory;
