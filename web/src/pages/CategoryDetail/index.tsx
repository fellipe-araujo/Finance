import { useState } from 'react';
import { Container, Content, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import GenerateCategory from '../../components/GenerateCategory';
import Button from '../../components/Button';

const CategoryDetail = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');

  return (
    <Container>
      <SecondaryHeader title="Detalhes" goBack="/categories" />

      <Content>
        <GenerateCategory
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : 'Nome antigo'}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor ? newCategoryColor : '#F00'}
          newColorSet={setNewCategoryColor}
        />

        <Options>
          <Button title="Atualizar categoria" isCreate />
          <Button title="Excluir categoria" isCreate={false} />
        </Options>
      </Content>
    </Container>
  );
};

export default CategoryDetail;
