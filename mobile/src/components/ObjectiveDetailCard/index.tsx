import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  name: string;
  goal: string;
  valueActual: string;
  valueRemaining: string;
  description: string;
}

const ObjectiveDetailCard = ({
  name,
  goal,
  valueActual,
  valueRemaining,
  description,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, styles.globalText]}>{name}</Text>

      <View style={styles.valuesContainer}>
        <View style={styles.valueGroup}>
          <Text style={styles.globalText}>Valor a ser alcançado:</Text>
          <Text style={[styles.globalText, { color: '#40923F' }]}>{goal}</Text>
        </View>

        <View style={styles.valueGroup}>
          <Text style={styles.globalText}>Valor atual:</Text>
          <Text style={[styles.globalText, { color: '#BCAF35' }]}>
            {valueActual}
          </Text>
        </View>

        <View style={styles.valueGroup}>
          <Text style={styles.globalText}>Valor restante:</Text>
          <Text style={[styles.globalText, { color: '#BB4E4E' }]}>
            {valueRemaining}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.globalText}>Descrição:</Text>
        <Text style={[styles.descriptionText, styles.globalText]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ObjectiveDetailCard;
