import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/auth';
import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn(email, password);
  }

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <Image
        source={require('../../../assets/logo/Logo.png')}
        style={styles.image}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RectButton style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonLogin}>Entrar</Text>
        </RectButton>
        <RectButton>
          <Text style={styles.buttonSignin}>Criar uma conta</Text>
        </RectButton>
      </View>
    </LinearGradient>
  );
};

export default Login;
