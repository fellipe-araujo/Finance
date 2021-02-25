import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  color: string;
}

const AccountDetailCard = ({ value, color }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor Total:</Text>
      <View style={styles.line} />

      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color: color }]}>{value}</Text>
      </View>
    </View>
  );
};

export default AccountDetailCard;
