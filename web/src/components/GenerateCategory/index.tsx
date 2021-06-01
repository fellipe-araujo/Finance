import { Container, Input, ButtonGenerate } from './styles';
import { FiRefreshCw } from 'react-icons/fi';
import CategoryCard from '../../components/CategoryCard';
import { randomColor } from '../../utils/generateColor';

interface GenerateCategoryProps {
  newName: string;
  oldName: string;
  newNameSet: (name: string) => void;
  newColor: string;
  newColorSet: (color: string) => void;
}

const GenerateCategory = ({
  newName,
  oldName,
  newNameSet,
  newColor,
  newColorSet,
}: GenerateCategoryProps) => {
  const handleGenerateColor = () => {
    const color = randomColor();
    newColorSet(color);
  };

  return (
    <Container>
      <h1 className="generate-category-title">Pré-visualização:</h1>
      <div className="category-card-container">
        <CategoryCard name={oldName} color={newColor} />
      </div>

      <div className="generate-category-input-group">
        <Input value={newName} onChange={(e) => newNameSet(e.target.value)} />
        <ButtonGenerate onClick={handleGenerateColor}>
          <FiRefreshCw size={16} color="#39393A" />
        </ButtonGenerate>
      </div>
    </Container>
  );
};

export default GenerateCategory;
