import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import GenerateCategory from '../../components/GenerateCategory';
import ModalConfirm from '../../components/ModalConfirm';
import SecondaryHeader from '../../components/SecondaryHeader';
import { useAuth } from '../../context/auth';
import categoryService from '../../services/categoryService';
import { UserCategory } from '../../utils/types';
import styles from './styles';

const CategoryDetail = () => {
  const [category, setCategory] = useState<UserCategory>();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();
  const route = useRoute();

  const params = route.params as UserCategory;

  const navigation = useNavigation();

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
      navigation.navigate('Category');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Category');
      Alert.alert(error);
    }
  };

  const toggleModalDelete = async () => {
    try {
      await categoryService.categoryDelete(user?._id!, category?._id!);
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Category');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Category');
      Alert.alert(error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await categoryService.categoryOne(
        user?._id!,
        params?._id!
      );
      setCategory(response);
    };

    fetchCategory();

    setNewCategoryName(category?.name!);
    setNewCategoryColor(category?.color!);
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader title={`${category?.name}`} route="Category" />

      <ModalConfirm
        isModalVisible={isModalVisible}
        toggleModalConfirm={
          modalAction === 'Update' ? toggleModalUpdate : toggleModalDelete
        }
        toggleModalCancel={() => setIsModalVisible(false)}
        description={
          modalAction === 'Update'
            ? modalUpdateDescription
            : modalDeleteDescription
        }
      />

      <View style={styles.content}>
        <GenerateCategory
          id={category?._id!}
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : category?.name!}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor ? newCategoryColor : category?.color!}
          newColorSet={setNewCategoryColor}
        />

        <View>
          <Button
            title="Atualizar Categoria"
            color="#39393A"
            onPress={() => {
              setModalAction('Update');
              setIsModalVisible(true);
            }}
          />
          <Button
            title="Excluir Categoria"
            color="#FF8888"
            onPress={() => {
              setModalAction('Delete');
              setIsModalVisible(true);
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default CategoryDetail;
