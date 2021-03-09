import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import GenerateCategory from '../../components/GenerateCategory';
import { modalConfirm } from '../../components/ModalConfirm';
import SecondaryHeader from '../../components/SecondaryHeader';
import { useAuth } from '../../context/auth';
import categoryService from '../../services/categoryService';
import { UserCategory } from '../../utils/types';
import styles from './styles';

const CategoryDetail = () => {
  const [category, setCategory] = useState<UserCategory>();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');

  const { user } = useAuth();
  const route = useRoute();

  const params = route.params as UserCategory;

  const navigation = useNavigation();

  const newCategory: UserCategory = {
    name: newCategoryName ? newCategoryName : category?.name,
    color: newCategoryColor ? newCategoryColor: category?.color,
  };

  const handleUpdateCategory = async () => {
    try {
      modalConfirm(
        'Atualizar Categoria',
        'Você deseja atualizar a categoria',
        `${category?.name}`,
        async () => {
          await categoryService.categoryUpdate(user?._id!, category?._id!, newCategory);
          navigation.navigate('Category');
        }
      );
    } catch (error) {
      navigation.navigate('Category');
      Alert.alert(error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      modalConfirm(
        'Excluir Conta',
        'Você deseja excluir a conta',
        `${category?.name}`,
        async () => {
          await categoryService.categoryDelete(user?._id!, category?._id!);
          navigation.navigate('Category');
        }
      );
    } catch (error) {
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
            onPress={handleUpdateCategory}
          />
          <Button
            title="Excluir Categoria"
            color="#FF8888"
            onPress={handleDeleteCategory}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default CategoryDetail;
