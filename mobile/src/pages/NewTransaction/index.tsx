import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import SecondaryHeader from '../../components/SecondaryHeader';
import SelectOption from '../../components/SelectOption';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import styles from './styles';
import { UserAccount, UserCategory, UserTransaction } from '../../utils/types';
import categoryService from '../../services/categoryService';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import transactionService from '../../services/transactionService';

const NewTransaction = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [optionAdd, setOptionAdd] = useState(true);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState<UserCategory[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [accountSelected, setAccountSelected] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useAuth();

  const navigation = useNavigation();

  const modalCreateDescription = `Você deseja criar a transação ${name}?`;

  const toggleModalCreate = async () => {
    try {
      const priceFormat = parseFloat(price);
      const newTransaction: UserTransaction = {
        name,
        price: priceFormat,
        expense: !optionAdd,
        date,
        category: categorySelected,
      };
      await transactionService.transactionCreate(
        user?._id!,
        accountSelected,
        newTransaction
      );
      console.log(newTransaction)
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Transaction');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Transaction');
      Alert.alert(error);
    }
  };

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await categoryService.categoryAll(user?._id!);
      setCategories(response);
    };

    const fetchAllAccounts = async () => {
      const response = await accountService.accountAll(user?._id!);
      setAccounts(response);
    };

    fetchAllCategories();
    fetchAllAccounts();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader title="Nova Transação" route="Transaction" />

      <ModalConfirm
        isModalVisible={isModalVisible}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        description={modalCreateDescription}
      />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <Image
          source={require('../../../assets/transaction/transaction-logo.png')}
          style={styles.transactionLogo}
        />

        <Text style={styles.title}>Nome:</Text>
        <Input
          value={name}
          onChangeText={setName}
          borderColor="#AAF5C8"
          keyboardType="default"
        />

        <Text style={styles.title}>Valor (ponto somente para centavos):</Text>
        <Input
          value={price}
          onChangeText={setPrice}
          borderColor="#AAF5C8"
          keyboardType="decimal-pad"
          placeholder="2203.50"
        />
        <SelectOption
          optionAdd={optionAdd}
          setOptionAdd={setOptionAdd}
          optionAddText="Entrada"
          optionRemoveText="Saída"
        />

        <Text style={styles.title}>Data:</Text>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Icon name="event" size={30} color="#000" />
          </TouchableOpacity>

          <Text style={styles.dateText}>
            {date.toLocaleDateString('pt-BR')}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <Text style={styles.title}>Conta:</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={accountSelected}
            onValueChange={(itemValue, itemIndex) =>
              setAccountSelected(itemValue.toString())
            }
            mode="dialog"
          >
            <Picker.Item label="Selecione uma conta" value="" />
            {accounts.map((account) => (
              <Picker.Item
                key={account._id}
                label={account.name}
                value={account._id!}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.title}>Categoria:</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={categorySelected}
            onValueChange={(itemValue, itemIndex) =>
              setCategorySelected(itemValue.toString())
            }
            mode="dialog"
          >
            <Picker.Item label="Selecione uma categoria" value="" />
            {categories.map((category) => (
              <Picker.Item
                key={category._id}
                label={category.name}
                value={category._id!}
              />
            ))}
          </Picker>
        </View>

        <Button
          title="Criar Transação"
          color="#505050"
          onPress={() => setIsModalVisible(true)}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default NewTransaction;
