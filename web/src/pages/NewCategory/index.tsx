import { useState } from 'react';
import { Container, Content, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import GenerateCategory from '../../components/GenerateCategory';
import Button from '../../components/Button';
import CategoryLogo from '../../assets/category-logo.svg';

const NewCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');

  return (
    <Container>
      <SecondaryHeader title="Nova Categoria" goBack="/categories" />

      <Content>
        <img
          className="new-category-image"
          src={CategoryLogo}
          alt="Category Logo"
        />

        <GenerateCategory
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : ''}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor}
          newColorSet={setNewCategoryColor}
        />

        <Options>
          <Button isCreate title="Criar categoria" />
        </Options>
      </Content>

    </Container>
  );
};

export default NewCategory;
