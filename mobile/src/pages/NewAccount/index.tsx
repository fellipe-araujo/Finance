import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SecondaryHeader from '../../components/SecondaryHeader';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';

const NewAccount = () => {
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useAuth();

  const navigation = useNavigation();

  const modalCreateDescription = `Você deseja criar a conta ${name}?`;

  const toggleModalCreate = async () => {
    try {
      await accountService.accountCreate(user?._id!, { name });
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Account');
      Alert.alert(error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader route="Account" title="Nova Conta" />

      <ModalConfirm
        isModalVisible={isModalVisible}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        description={modalCreateDescription}
      />

      <View style={styles.content}>
        <Image
          source={require('../../../assets/account/account-logo.png')}
          style={styles.accountLogo}
        />

        <View>
          <Text style={styles.title}>Nome da Conta:</Text>
          <Input value={name} onChangeText={setName} borderColor="#A9DEF9" />

          <Button
            color="#505050"
            title="Criar Conta"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default NewAccount;
