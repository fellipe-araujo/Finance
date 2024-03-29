import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/auth';
import SecondaryHeader from '../../components/SecondaryHeader';
import ObjectiveDetailCard from '../../components/ObjectiveDetailCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import styles from './styles';
import { UserObjective } from '../../utils/types';
import objectiveService from '../../services/objectiveService';
import { formatPrice } from '../../utils/formatPrice';

const NewObjective = () => {
  const [objective, setObjective] = useState<UserObjective>();
  const [newObjectiveName, setNewObjectiveName] = useState('');
  const [newObjectiveDescription, setNewObjectiveDescription] = useState('');
  const [newObjectiveValue, setNewObjectiveValue] = useState('');
  const [optionAdd, setOptionAdd] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();
  const route = useRoute();

  const params = route.params as UserObjective;

  const navigation = useNavigation();

  const modalUpdateDescription = `Você deseja atualizar o objetivo ${objective?.name}?`;
  const modalDeleteDescription = `Você deseja excluir o objetivo ${objective?.name}?`;

  const toggleModalUpdate = async () => {
    try {
      var value = 0;
      if (optionAdd) {
        value = objective?.amount! + parseInt(newObjectiveValue);
      } else {
        value = objective?.amount! - parseInt(newObjectiveValue);
      }

      const progress = (value / objective?.goal!) * 100;
      progress.toFixed(2);

      const newObjective: UserObjective = {
        name: newObjectiveName ? newObjectiveName : objective?.name,
        description: newObjectiveDescription
          ? newObjectiveDescription
          : objective?.description,
        amount: value,
        progress,
      };

      await objectiveService.objectiveUpdate(
        user?._id!,
        objective?._id!,
        newObjective
      );

      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
      Alert.alert(error);
    }
  };

  const toggleModalDelete = async () => {
    try {
      await objectiveService.objectiveDelete(user?._id!, objective?._id!);
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
      Alert.alert(error);
    }
  };

  useEffect(() => {
    const fetchObjective = async () => {
      const response = await objectiveService.objectiveOne(
        user?._id!,
        params._id!
      );

      setObjective(response);
    };

    fetchObjective();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <SecondaryHeader title="Detalhe" route="Objective" />

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

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <ObjectiveDetailCard
          name={objective?.name!}
          goal={formatPrice(objective?.goal!)}
          valueActual={formatPrice(objective?.amount!)}
          valueRemaining={formatPrice(objective?.goal! - objective?.amount!)}
          description={objective?.description!}
        />

        <View style={styles.inputsContainer}>
          <Text style={styles.inputTitle}>Nome do Objetivo:</Text>
          <Input
            value={newObjectiveName ? newObjectiveName : objective?.name!}
            onChangeText={setNewObjectiveName}
            borderColor="#E4C1F9"
            keyboardType="default"
          />

          <Text style={styles.inputTitle}>Descrição do Objetivo:</Text>
          <Input
            value={
              newObjectiveDescription
                ? newObjectiveDescription
                : objective?.description!
            }
            onChangeText={setNewObjectiveDescription}
            borderColor="#E4C1F9"
            keyboardType="default"
          />

          <Text style={styles.inputTitle}>Valor (sem vírgula ou ponto):</Text>
          <Input
            value={newObjectiveValue}
            onChangeText={setNewObjectiveValue}
            borderColor="#E4C1F9"
            keyboardType="number-pad"
            placeholder="Ex: 1000"
          />
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={optionAdd === true ? styles.optionAdd : styles.default}
              onPress={() => setOptionAdd(true)}
            >
              <Text
                style={[
                  styles.globalText,
                  { color: optionAdd === true ? '#40923F' : '#39393A' },
                ]}
              >
                Adicionar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={optionAdd === true ? styles.default : styles.optionRemove}
              onPress={() => setOptionAdd(false)}
            >
              <Text
                style={[
                  styles.globalText,
                  { color: optionAdd === false ? '#BB4E4E' : '#39393A' },
                ]}
              >
                Retirar
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Atualizar Objetivo"
            color="#505050"
            onPress={() => {
              setModalAction('Update');
              setIsModalVisible(true);
            }}
          />
          <Button
            title="Excluir Objetivo"
            color="#FF8888"
            onPress={() => {
              setModalAction('Delete');
              setIsModalVisible(true);
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NewObjective;
