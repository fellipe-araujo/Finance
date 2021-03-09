import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import ArtifactResume from '../../components/ArtifactResume';
import CategoryCard from '../../components/CategoryCard';
import PrimaryHeader from '../../components/PrimaryHeader';
import { useAuth } from '../../context/auth';
import categoryService from '../../services/categoryService';
import { UserCategory } from '../../utils/types';
import styles from './styles';

const Category = () => {
  const [categories, setCategories] = useState<UserCategory[]>([]);

  const { user } = useAuth();

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await categoryService.categoryAll(user?._id!);

      setCategories(response);
    };

    fetchAllCategories();
  }, [isFocused]);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <PrimaryHeader route="NewCategory" title="Minhas Categorias" />

      <ArtifactResume
        title="Categorias"
        subTitle="Totais"
        value={categories.length.toString()}
        color1="#F5EC97"
        color2="#F5F2DA"
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            categoryId={category._id!}
            categoryName={category.name!}
            categoryColor={category.color!}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Category;
