import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { UserAccount } from '../../utils/types';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import SecondaryHeader from '../../components/SecondaryHeader';
import AccountDetailCard from '../../components/AccountDetailCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { modalConfirm } from '../../components/ModalConfirm';

const AccountDetail = () => {
  const [account, setAccount] = useState<UserAccount>();
  const [newAccountName, setNewAccountName] = useState('');

  const { user } = useAuth();
  const route = useRoute();

  const params = route.params as UserAccount;

  const navigation = useNavigation();

  const handleUpdateAccount = async () => {
    try {
      modalConfirm(
        'Atualizar Conta',
        'Você deseja atualizar a conta',
        `${account?.name}`,
        async () => {
          await accountService.accountUpdate(
            user?._id!,
            account?._id!,
            newAccountName
          );
          navigation.navigate('Account');
        }
      );
    } catch (error) {
      navigation.navigate('Account');
      Alert.alert(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      modalConfirm(
        'Excluir Conta',
        'Você deseja excluir a conta',
        `${account?.name}`,
        async () => {
          await accountService.accountDelete(user?._id!, account?._id!);
          navigation.navigate('Account');
        }
      );
    } catch (error) {
      navigation.navigate('Account');
      Alert.alert(error);
    }
  };

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(price!);
  };

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await accountService.accountOne(user?._id!, params._id!);
      setAccount(response);
    };

    fetchAccount();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader title={`${account?.name}`} route="Account" />

      <View style={styles.content}>
        <AccountDetailCard
          value={account?.balance ? formatPrice(account?.balance!) : 'R$0,00'}
          color={account?.balance! > 0 ? '#40923F' : '#BB4E4E'}
        />

        <View>
          <Text style={styles.inputTitle}>Nome da Conta:</Text>
          <Input
            value={newAccountName}
            onChangeText={setNewAccountName}
            borderColor="#A9DEF9"
          />

          <Button
            title="Atualizar Conta"
            color="#39393A"
            onPress={handleUpdateAccount}
          />
          <Button
            title="Excluir Conta"
            color="#FF8888"
            onPress={handleDeleteAccount}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AccountDetail;
