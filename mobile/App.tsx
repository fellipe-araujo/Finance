import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({ Nunito_700Bold, Nunito_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
