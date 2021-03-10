import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  color: string;
  onPress(): void;
}

const Button = ({ title, color, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
