import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SecondaryHeader from '../../components/SecondaryHeader';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';

const NewAccount = () => {
  const [name, setName] = useState('');

  const { user } = useAuth();

  const navigation = useNavigation();

  const handleCreateAccount = async () => {
    try {
      Alert.alert(
        'Criação de Conta',
        `Deseja criar a conta ${name}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: async () => {
              await accountService.accountCreate(user!._id, { name });
              navigation.navigate('Account');
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
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
            onPress={handleCreateAccount}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default NewAccount;
