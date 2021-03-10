import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { UserCategory } from '../../utils/types';
import styles from './styles';

const CategoryCard = ({ _id, name, color }: UserCategory) => {
  const navigation = useNavigation();

  const goToCategoryDetails = (_id?: string) => {
    if (_id) {
      navigation.navigate('CategoryDetail', { _id });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => goToCategoryDetails(_id)}
    >
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
