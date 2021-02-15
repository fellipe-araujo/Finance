import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import ArtifactCard from '../../components/ArtifactCard';
import { useAuth } from '../../context/auth';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles';
import accountService from '../../services/accountService';
import userService from '../../services/userService';
import objectiveService from '../../services/objectiveService';
import transactionService from '../../services/transactionService';
import categoryService from '../../services/categoryService';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [accountTotalValue, setAccountTotalValue] = useState(0);
  const [accountsTotal, setAccountsTotal] = useState(0);
  const [objectivesTotal, setObjectivesTotal] = useState(0);
  const [transactionsTotal, setTransactionsTotal] = useState(0);
  const [categoriesTotal, setCategoriesTotal] = useState(0);

  const { user, signOut } = useAuth();

  const isFocused = useIsFocused();

  const handleLogOut = () => {
    signOut();
  }

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  };

  useEffect(() => {
    const fetchName = async () => {
      const response = await userService.userData(user!._id);
      setUsername(response.name);
    };

    const fetchAccounts = async () => {
      const response = await accountService.accountAll(user!._id);
      var quantityAccount = 0;
      var values = 0;

      Object.keys(response).forEach((item) => {
        values += response[item].balance;
        quantityAccount++;
      });

      setAccountsTotal(quantityAccount);
      setAccountTotalValue(values);
    };

    const fetchObjectives = async () => {
      const response = await objectiveService.objectiveAll(user!._id);
      setObjectivesTotal(Object.keys(response).length);
    };

    const fetchTransactions = async () => {
      const response = await transactionService.transactionAll(user!._id);
      setTransactionsTotal(Object.keys(response).length);
    };

    const fetchCategories = async () => {
      const response = await categoryService.categoryAll(user!._id);
      setCategoriesTotal(Object.keys(response).length);
    };

    fetchName();
    fetchAccounts();
    fetchObjectives();
    fetchTransactions();
    fetchCategories();
  }, [isFocused]);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <View style={styles.headerWelcome}>
        <View style={styles.userInfoContainer}>
          <Image source={require('../../../assets/profile.png')} />
          <Text style={styles.textName}>{username}</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => handleLogOut()}>
          <Icon name="log-out" size={30} color="#39393A" />
        </TouchableWithoutFeedback>        
      </View>

      <Text style={styles.value}>{formatPrice(accountTotalValue)}</Text>

      <View style={styles.content}>
        <Text style={styles.title}>Resumo</Text>
        <ArtifactCard
          artifactName="Conta"
          quantity={accountsTotal}
          colorLinearX="#A9DEF9"
          colorLinearY="#E4F2FA"
          borderTopColor="#6FAFCF"
          colorTotal="#3A7B9C"
        />

        <ArtifactCard
          artifactName="Objetivos"
          quantity={objectivesTotal}
          colorLinearX="#E4C1F9"
          colorLinearY="#EEE2F4"
          borderTopColor="#CBA2E3"
          colorTotal="#AE84C8"
        />

        <ArtifactCard
          artifactName="Transações"
          quantity={transactionsTotal}
          colorLinearX="#AAF5C8"
          colorLinearY="#E5F9ED"
          borderTopColor="#7DD19F"
          colorTotal="#57B77D"
        />

        <ArtifactCard
          artifactName="Categorias"
          quantity={categoriesTotal}
          colorLinearX="#F5EC97"
          colorLinearY="#F5F2DA"
          borderTopColor="#CFC45B"
          colorTotal="#BDB354"
        />
      </View>
    </LinearGradient>
  );
};

export default Home;
