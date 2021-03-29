import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactResume from '../../components/ArtifactResume';
import ObjectiveCard from '../../components/ObjectiveCard';
import styles from './styles';
import { UserObjective } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import { useAuth } from '../../context/auth';
import objectiveService from '../../services/objectiveService';

const Objective = () => {
  const [objectives, setObjectives] = useState<UserObjective[]>([]);
  const [objectivesAmount, setObjectivesAmount] = useState(0);

  const { user } = useAuth();

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchAllObjectives = async () => {
      const response = await objectiveService.objectiveAll(user?._id!);
      setObjectives(response);

      setObjectivesAmount(Object.keys(response).length);
    };

    fetchAllObjectives();
  }, [isFocused]);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <PrimaryHeader route="NewObjective" title="Meus Objetivos" />

      <ArtifactResume
        title="Objetivos"
        subTitle="em Processo"
        value={`${objectivesAmount}`}
        color1="#E4C1F9"
        color2="#EEE2F4"
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {objectives.map((objective) => (
          <ObjectiveCard
            key={objective._id}
            id={objective._id!}
            name={objective.name!}
            progressActual={objective.progress!}
            progressRemaining={100 - objective.progress!}
            goal={formatPrice(objective.goal!)}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Objective;
