import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useAuth } from '../context/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <LinearGradient
        style={styles.container}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        colors={['#B9C0FF', '#42A1DC']}
      >
        <ActivityIndicator size="large" color="#666" />
      </LinearGradient>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
