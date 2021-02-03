import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [paswword, setPassword] = useState('');

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      colors={['#B9C0FF', '#42A1DC']}
    >
      <Image
        source={require('../../../assets/Logo.png')}
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
          value={paswword}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RectButton style={styles.button}>
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
