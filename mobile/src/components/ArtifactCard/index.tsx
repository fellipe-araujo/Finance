import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface Props {
  colorLinearX: string;
  colorLinearY: string;
  borderTopColor: string;
  colorTotal: string;
  artifactName: string;
  quantity: number;
}

const ArtifactCard: React.FC<Props> = ({
  colorLinearX,
  colorLinearY,
  borderTopColor,
  colorTotal,
  artifactName,
  quantity,
}) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={[colorLinearX, colorLinearY]}
    >
      <Text style={styles.title}>{artifactName}</Text>
      <View
        style={[styles.quantityContainer, { borderTopColor: borderTopColor }]}
      >
        <Text style={[styles.total, { color: colorTotal }]}>Total:</Text>
        <Text style={[styles.total, { color: colorTotal }]}>{quantity}</Text>
      </View>
    </LinearGradient>
  );
};

export default ArtifactCard;
