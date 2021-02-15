import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface Props {
  accountName: string;
  accountValue: string;
}

const AccountCard = ({ accountName, accountValue }: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.accountName}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        colors={['#A9DEF9', '#E4F2FA']}
      >
        <Text style={styles.title}>Conta {accountName}</Text>
      </LinearGradient>

      <View style={styles.accountValue}>
        <Text style={styles.value}>{accountValue}</Text>
      </View>
    </View>
  );
};

export default AccountCard;
