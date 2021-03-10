import React from 'react';
import { View, Text, TextInput } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { randomColor } from '../../utils/generateColor';
import styles from './styles';

interface Props {
  id?: string;
  newName: string;
  oldName: string;
  newNameSet: (name: string) => void;
  newColor: string;
  newColorSet: (color: string) => void;
}

const GenerateCategory = ({
  id,
  newName,
  oldName,
  newNameSet,
  newColor,
  newColorSet,
}: Props) => {
  const handleGenerateColor = () => {
    const color = randomColor();
    newColorSet(color);
  };

  return (
    <View style={styles.visualizationContainer}>
      <Text style={styles.title}>Pré-visualização:</Text>
      <CategoryCard _id={id} name={oldName} color={newColor} />

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={newNameSet}
        />
        <RectButton
          style={styles.generateColorContainer}
          onPress={handleGenerateColor}
        >
          <View style={styles.generateColor}>
            <Icon name="loop" size={20} />
          </View>
        </RectButton>
      </View>
    </View>
  );
};

export default GenerateCategory;
