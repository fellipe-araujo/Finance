import React from 'react';
import { KeyboardType, TextInput } from 'react-native';
import styles from './styles';

interface Props {
  borderColor: string;
  value: string;
  onChangeText(text: string): void;
  keyboardType: KeyboardType;
  placeholder?: string;
}

const Input = ({
  borderColor,
  value,
  onChangeText,
  keyboardType,
  placeholder,
}: Props) => {
  return (
    <TextInput
      style={[styles.container, { borderColor: borderColor }]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
    />
  );
};

export default Input;
