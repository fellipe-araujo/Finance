import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArtifactCard from '../../components/ArtifactCard';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <View style={styles.containerWelcome}>
        <Text style={styles.textWelcome}>Bem-vindo(a)</Text>
        <Text style={styles.textName}>Julie Bell</Text>
      </View>

      <View style={styles.containerAccount}>
        <Text style={styles.value}>R$ 14.567,32</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Resumo</Text>
        <ArtifactCard
          artifactName="Conta"
          colorLinearX="#A9DEF9"
          colorLinearY="#E4F2FA"
          borderTopColor="#6FAFCF"
          colorTotal="#3A7B9C"
        />

        <ArtifactCard
          artifactName="Objetivos"
          colorLinearX="#E4C1F9"
          colorLinearY="#EEE2F4"
          borderTopColor="#CBA2E3"
          colorTotal="#AE84C8"
        />

        <ArtifactCard
          artifactName="Transações"
          colorLinearX="#AAF5C8"
          colorLinearY="#E5F9ED"
          borderTopColor="#7DD19F"
          colorTotal="#57B77D"
        />

        <ArtifactCard
          artifactName="Categorias"
          colorLinearX="#F5EC97"
          colorLinearY="#F5F2DA"
          borderTopColor="#CFC45B"
          colorTotal="#BDB354"
        />
      </View>
    </LinearGradient>
  );
};

export default Home;
