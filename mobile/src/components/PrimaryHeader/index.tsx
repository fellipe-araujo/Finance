import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles';

interface Props {
  route: string;
  title: string;
}

const PrimaryHeader = ({ route, title }: Props) => {
  const navigation = useNavigation();

  const goToPage = () => {
    navigation.navigate(`${route}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ width: 30 }} />

        <Text style={styles.title}>{title}</Text>

        <TouchableWithoutFeedback onPress={() => goToPage()}>
          <Icon name="plus" size={30} color="#FFF" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default PrimaryHeader;
