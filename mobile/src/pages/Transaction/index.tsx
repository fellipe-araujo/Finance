import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';
import { useAuth } from '../../context/auth';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactResume from '../../components/ArtifactResume';
import TransactionCard from '../../components/TransactionCard';
import styles from './styles';
import { UserTransaction } from '../../utils/types';
import transactionService from '../../services/transactionService';

const Transaction = () => {
  const [transactions, setTransactions] = useState<UserTransaction[]>([]);

  const { user } = useAuth();

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchAllTransactions = async () => {
      const response = await transactionService.transactionAll(user?._id!);

      setTransactions(response);
    };

    fetchAllTransactions();
  }, [isFocused]);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <PrimaryHeader route="NewTransaction" title="Minhas Transações" />

      <ArtifactResume
        title="Transações"
        subTitle="este mês"
        value={transactions.length.toString()}
        // value={categories.length.toString()}
        color1="#AAF5C8"
        color2="#E5F9ED"
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction._id}
            name={transaction.name!}
            // name={transaction.name}
            expense={transaction.expense!}
            price={transaction.price!}
            date={transaction.date?.toString()!}
            accountName={transaction.account!.name}
            categoryName={transaction.category!.name!}
            categoryColor={transaction.category!.color!}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Transaction;
