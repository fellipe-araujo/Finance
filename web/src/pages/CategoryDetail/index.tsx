import { useState, useEffect } from 'react';
import { Content, Options } from './styles';

import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import SecondaryHeader from '../../components/SecondaryHeader';
import GenerateCategory from '../../components/GenerateCategory';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import PageContainer from '../../components/PageContainer';

import { useAuth } from '../../context/auth';
import { UserCategory } from '../../utils/types';
import { toastConfig } from '../../utils/toastConfig';
import categoryService from '../../services/categoryService';

interface CategoryParams {
  id: string;
}

const CategoryDetail = () => {
  const [category, setCategory] = useState<UserCategory>();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();

  const params = useParams<CategoryParams>();
  const history = useHistory();

  const newCategory: UserCategory = {
    name: newCategoryName ? newCategoryName : category?.name,
    color: newCategoryColor ? newCategoryColor : category?.color,
  };

  const modalUpdateDescription = `Você deseja atualizar a categoria ${category?.name}?`;
  const modalDeleteDescription = `Você deseja excluir a categoria ${category?.name}?`;

  const toggleModalUpdate = async () => {
    try {
      await categoryService.categoryUpdate(
        user?._id!,
        category?._id!,
        newCategory
      );
      setIsModalVisible(!isModalVisible);

      toast.info(`Categoria ${category?.name} atualizada!`, toastConfig);

      history.push('/categories');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(
        `Não foi possível atualizar a categoria desejada!`,
        toastConfig
      );

      history.push('/categories');
    }
  };

  const toggleModalDelete = async () => {
    try {
      await categoryService.categoryDelete(user?._id!, category?._id!);
      setIsModalVisible(!isModalVisible);

      toast.success(`Categoria ${category?.name} deletada!`, toastConfig);

      history.push('/categories');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(
        `Não foi possível excluir a categoria desejada!`,
        toastConfig
      );

      history.push('/categories');
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await categoryService.categoryOne(
        user?._id!,
        params?.id!
      );
      setCategory(response);
    };

    fetchCategory();

    setNewCategoryName(category?.name!);
    setNewCategoryColor(category?.color!);
  }, [category?.color, category?.name, params?.id, user?._id]);

  return (
    <PageContainer>
      <SecondaryHeader title="Detalhes" goBack="/categories" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={
          modalAction === 'Update'
            ? modalUpdateDescription
            : modalDeleteDescription
        }
        toggleModalConfirm={
          modalAction === 'Update' ? toggleModalUpdate : toggleModalDelete
        }
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Content>
        <GenerateCategory
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : category?.name!}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor ? newCategoryColor : category?.color!}
          newColorSet={setNewCategoryColor}
        />

        <Options>
          <Button
            title="Atualizar categoria"
            isCreate
            onClick={() => {
              setModalAction('Update');
              setIsModalVisible(true);
            }}
          />

          <Button
            title="Excluir categoria"
            isCreate={false}
            onClick={() => {
              setModalAction('Delete');
              setIsModalVisible(true);
            }}
          />
        </Options>
      </Content>
    </PageContainer>
  );
};

export default CategoryDetail;
