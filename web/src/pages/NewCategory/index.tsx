import { Container, Content, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import GenerateCategory from '../../components/GenerateCategory';
import CategoryLogo from '../../assets/category-logo.svg';

const NewCategory = () => {
  return (
    <Container>
      <SecondaryHeader title="Nova Categoria" goBack="/categories" />

      <Content>
        <img
          className="new-category-image"
          src={CategoryLogo}
          alt="Category Logo"
        />

        <GenerateCategory />

        {/* <Options>

        </Options> */}
      </Content>

    </Container>
  );
};

export default NewCategory;
