import { Container, List } from './styles';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import CategoryCard from '../../components/CategoryCard';

const Categories = () => {
  return (
    <Container>
      <PrimaryHeader title="Categorias" goTo="/categories/create" />

      <ArtifactData
        title="Categorias"
        subTitle="Totais"
        value="5"
        artifactType="Categorias"
      />

      <List>
        <CategoryCard name="Salário" color="#FFF" />
      </List>
    </Container>
  );
};

export default Categories;
