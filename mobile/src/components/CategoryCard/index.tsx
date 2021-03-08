import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  categoryId?: string;
  categoryName: string;
  categoryColor: string;
}

const CategoryCard = ({ categoryId, categoryName, categoryColor }: Props) => {
  const navigation = useNavigation();

  const goToCategoryDetails = (_id?: string) => {
    if (_id) {
      navigation.navigate('CategoryDetail', { _id });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: categoryColor }]}
      onPress={() => goToCategoryDetails(categoryId)}
    >
      <Text style={styles.title}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
