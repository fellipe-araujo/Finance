import React, { useState } from 'react';
import { View, Text, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/auth';
import SecondaryHeader from '../../components/SecondaryHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import styles from './styles';
import objectiveService from '../../services/objectiveService';

const NewObjective = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useAuth();

  const navigation = useNavigation();

  const modalCreateDescription = `Você deseja criar o objetivo ${name}?`;

  const toggleModalCreate = async () => {
    try {
      const goalFormat = parseInt(goal);
      await objectiveService.objectiveCreate(user?._id!, {
        name,
        goal: goalFormat,
        description,
      });
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      navigation.navigate('Objective');
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
      <SecondaryHeader route="Objective" title="Novo Objetivo" />

      <ModalConfirm
        isModalVisible={isModalVisible}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        description={modalCreateDescription}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../assets/objective/objective-logo.png')}
          style={styles.objectiveLogo}
        />

        <View style={styles.inputGroup}>
          <Text style={styles.title}>Nome do Objetivo:</Text>
          <Input
            value={name}
            onChangeText={setName}
            borderColor="#E4C1F9"
            keyboardType="default"
          />

          <Text style={styles.title}>Descrição:</Text>
          <Input
            value={description}
            onChangeText={setDescription}
            borderColor="#E4C1F9"
            keyboardType="default"
          />

          <Text style={styles.title}>Valor (sem vírgula ou ponto):</Text>
          <Input
            value={goal}
            onChangeText={setGoal}
            borderColor="#E4C1F9"
            keyboardType="number-pad"
            placeholder="Ex: 1000"
          />

          <Button
            color="#505050"
            title="Criar Objetivo"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NewObjective;
