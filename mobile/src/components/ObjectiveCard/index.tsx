import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface Props {
  id: string;
  name: string;
  goal: string;
  progressActual: number;
  progressRemaining: number;
}

const ObjectiveCard = ({
  id,
  name,
  goal,
  progressActual,
  progressRemaining,
}: Props) => {
  const [progressColor, setProgressColor] = useState('#FFF');
  const [titleColor, setTitleColor] = useState('#39393A');

  const navigation = useNavigation();

  const goToObjectiveDetails = (_id: string) => {
    navigation.navigate('ObjectiveDetail', { _id });
  };

  const setObjectiveColor = () => {
    if (progressActual < 50) {
      setProgressColor('#FF8888');
      setTitleColor('#BB4E4E');
    } else if (progressActual >= 50 && progressActual < 70) {
      setProgressColor('#FFF973');
      setTitleColor('#BCAF35');
    } else if (progressActual >= 70 && progressActual <= 100) {
      setProgressColor('#89FF87');
      setTitleColor('#40923F');
    }
  }

  useEffect(() => {
    setObjectiveColor();
  }, [progressActual]);

  return (
    <TouchableOpacity onPress={() => goToObjectiveDetails(id)}>
      <View style={styles.container}>
        <View
          style={[
            styles.progressActual,
            { width: `${progressActual}%`, backgroundColor: progressColor },
          ]}
        />

        <View
          style={[styles.progressRemaining, { width: `${progressRemaining}%` }]}
        />

        <View style={styles.textGroup}>
          <Text style={[styles.titleText, { color: titleColor }]}>{name}</Text>
          <Text style={[styles.goalText, { color: titleColor }]}>{goal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ObjectiveCard;
