import React, { useState } from 'react';
import { View, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SecondaryHeader from '../../components/SecondaryHeader';
import Button from '../../components/Button';
import GenerateCategory from '../../components/GenerateCategory';
import { modalConfirm } from '../../components/ModalConfirm';
import categoryService from '../../services/categoryService';
import { useAuth } from '../../context/auth';
import styles from './styles';

const NewCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('');

  const { user } = useAuth();

  const navigation = useNavigation();

  const handleCreateCategory = async () => {
    try {
      modalConfirm(
        'Criar Categoria',
        'Você deseja criar a categoria',
        `${newCategoryName}`,
        async () => {
          await categoryService.categoryCreate(user?._id!, {
            name: newCategoryName,
            color: newCategoryColor,
          });
          navigation.navigate('Category');
        }
      );
    } catch (error) {
      navigation.navigate('Category');
      Alert.alert(error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader title="Nova Categoria" route="Category" />

      <ScrollView style={styles.content}>
        <Image
          source={require('../../../assets/category/category-logo.png')}
          style={styles.accountLogo}
        />

        <View style={styles.break} />

        <GenerateCategory
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : ''}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor}
          newColorSet={setNewCategoryColor}
        />

        <View style={styles.break} />

        <Button
          color="#505050"
          title="Criar Conta"
          onPress={handleCreateCategory}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default NewCategory;
