import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SecondaryHeader from '../../components/SecondaryHeader';
import styles from './styles';

const Account = () => (
  <LinearGradient
    style={styles.container}
    start={{ x: 0.3, y: 0.3 }}
    end={{ x: 1, y: 1 }}
    colors={['#B9C0FF', '#42A1DC']}
  >
    <SecondaryHeader route="Account" title="Nova Conta" />
  </LinearGradient>
);

export default Account;
