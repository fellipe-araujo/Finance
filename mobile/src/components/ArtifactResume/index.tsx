import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface Props {
  title: string;
  subTitle: string;
  value: string;
  color1: string;
  color2: string;
}

const ArtifactResume = ({ title, subTitle, value, color1, color2 }: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={[`${color1}`, `${color2}`]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.value}>{value}</Text>
    </LinearGradient>
  );
};

export default ArtifactResume;
