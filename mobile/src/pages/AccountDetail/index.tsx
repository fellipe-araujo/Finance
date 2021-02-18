import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { UserAccount } from '../../utils/types';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import SecondaryHeader from '../../components/SecondaryHeader';

const AccountDetail = () => {
  const [account, setAccount] = useState<UserAccount>();

  const { user } = useAuth();
  const route = useRoute();
  
  const params = route.params as UserAccount;

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
    </LinearGradient>
  );
};

export default AccountDetail;
