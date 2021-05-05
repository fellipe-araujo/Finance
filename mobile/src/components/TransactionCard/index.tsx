import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';
import { formatPrice } from '../../utils/formatPrice';

interface Props {
  name: string;
  expense: boolean;
  price: number;
  date: string;
  accountName: string;
  categoryName: string;
  categoryColor: string;
  onDelete(): void;
}

const TransactionCard = ({
  name,
  expense,
  price,
  date,
  accountName,
  categoryName,
  categoryColor,
  onDelete,
}: Props) => {
  const formatDate = (dateToFormat: string) => {
    const day = dateToFormat!.slice(8, 10);
    const month = dateToFormat!.slice(5, 7);
    const year = dateToFormat!.slice(0, 4);

    const dateFormated = `${day}/${month}/${year}`;

    return dateFormated;
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.transactionName}>{name}</Text>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="delete" size={24} color="#39393A" />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <View style={styles.infoContainer}>
        <Text style={styles.text}>Valor:</Text>
        <Text style={[styles.text, { color: expense ? '#BB4E4E' : '#40923F' }]}>
          {formatPrice(price!)}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.text}>Data:</Text>
        <Text style={styles.text}>{formatDate(date!)}</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.infoContainer}>
        <Text style={styles.text}>Conta:</Text>
        <Text style={styles.text}>{accountName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.text}>Categoria:</Text>
        <View
          style={[styles.categoryContainer, { backgroundColor: categoryColor }]}
        >
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;
