import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactResume from '../../components/ArtifactResume';
import styles from './styles';

const Account = () => {
  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <PrimaryHeader route="NewAccount" title="Minhas Contas" />
      <ArtifactResume
        title="Total"
        subTitle="acumulado"
        value={formatPrice(5)}
      />
    </LinearGradient>
  );
};

export default Account;
