import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { UserAccount } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import SecondaryHeader from '../../components/SecondaryHeader';
import AccountDetailCard from '../../components/AccountDetailCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';

const AccountDetail = () => {
  const [account, setAccount] = useState<UserAccount>();
  const [newAccountName, setNewAccountName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();
  const route = useRoute();

  const params = route.params as UserAccount;

  const navigation = useNavigation();

  const modalUpdateDescription = `Você deseja atualizar a conta ${account?.name}?`;
  const modalDeleteDescription = `Você deseja excluir a conta ${account?.name}?`;

  const toggleModalUpdate = async () => {
    try {
      await accountService.accountUpdate(
        user?._id!,
        account?._id!,
        newAccountName
      );
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
      Alert.alert(error);
    }
  };

  const toggleModalDelete = async () => {
    try {
      await accountService.accountDelete(user?._id!, account?._id!);
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
      Alert.alert(error);
    }
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

      <ModalConfirm
        isModalVisible={isModalVisible}
        toggleModalConfirm={
          modalAction === 'Update' ? toggleModalUpdate : toggleModalDelete
        }
        toggleModalCancel={() => setIsModalVisible(false)}
        description={
          modalAction === 'Update'
            ? modalUpdateDescription
            : modalDeleteDescription
        }
      />

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
            onPress={() => {
              setModalAction('Update');
              setIsModalVisible(true);
            }}
          />
          <Button
            title="Excluir Conta"
            color="#FF8888"
            onPress={() => {
              setModalAction('Delete');
              setIsModalVisible(true);
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AccountDetail;
