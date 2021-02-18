import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface Props {
  accountId: string;
  accountName: string;
  accountValue: string;
}

const AccountCard = ({ accountId, accountName, accountValue }: Props) => {
  const navigation = useNavigation();

  const goToAccountDetails = (_id: string) => {
    navigation.navigate('AccountDetail', { _id });
  };

  return (
    <TouchableOpacity onPress={() => goToAccountDetails(accountId)}>
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
    </TouchableOpacity>
  );
};

export default AccountCard;
