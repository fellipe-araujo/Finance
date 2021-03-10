import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactResume from '../../components/ArtifactResume';
import AccountCard from '../../components/AccountCard';
import styles from './styles';
import { UserAccount } from '../../utils/types';
import { useAuth } from '../../context/auth';
import accountService from '../../services/accountService';

const Account = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [accountsAmount, setAccountsAmout] = useState(0);

  const { user } = useAuth();

  const isFocused = useIsFocused();

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(price!);
  };

  useEffect(() => {
    const fetchAllAccounts = async () => {
      const response = await accountService.accountAll(user!._id);
      setAccounts(response);

      var values = 0;

      Object.keys(response).forEach((item) => {
        values += response[item].balance;
      });

      setAccountsAmout(values);
    };

    fetchAllAccounts();
  }, [isFocused]);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <PrimaryHeader route="NewAccount" title="Minhas Contas" />

      <ArtifactResume
        title="Total"
        subTitle="acumulado"
        value={formatPrice(accountsAmount)}
        color1="#A9DEF9"
        color2="#E4F2FA"
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {accounts.map((account) => (
          <AccountCard
            key={account._id}
            accountId={account._id!}
            accountName={account.name}
            accountValue={formatPrice(account.balance!)}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Account;
