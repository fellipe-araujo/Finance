import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface Props {
  borderColor: string;
  value: string;
  onChangeText(text: string): void;
}

const Input = ({ borderColor, value, onChangeText }: Props) => {
  return (
    <TextInput
      style={[styles.container, { borderColor: borderColor }]}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
