import {
  Container,
  Label,
  CategoryBox,
  GenerateCategoryBox,
  Input,
  ButtonGenerate,
} from './styles';

import { FiRefreshCw } from 'react-icons/fi';

import CategoryCard from '../../components/CategoryCard';

import { randomColor } from '../../utils/generateColor';
import theme from '../../styles/theme';

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
      <Label className="generate-category-title">Pré-visualização:</Label>

      <CategoryBox className="category-card-container">
        <CategoryCard name={oldName} color={newColor} />
      </CategoryBox>

      <GenerateCategoryBox className="generate-category-input-group">
        <Input value={newName} onChange={(e) => newNameSet(e.target.value)} />

        <ButtonGenerate onClick={handleGenerateColor}>
          <FiRefreshCw size={16} color={theme.colors.grayLight} />
        </ButtonGenerate>
      </GenerateCategoryBox>
    </Container>
  );
};

export default GenerateCategory;
