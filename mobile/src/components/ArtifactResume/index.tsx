import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface Props {
  title: string;
  subTitle: string;
  value: string;
}

const ArtifactResume = ({ title, subTitle, value }: Props) => {
  return (
    <LinearGradient
    style={styles.container}
    start={{ x: 0.3, y: 0.3 }}
    end={{ x: 1, y: 1 }}
    colors={['#A9DEF9', '#E4F2FA']}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    <Text style={styles.value}>{value}</Text>
  </LinearGradient>
  );
};

export default ArtifactResume;
