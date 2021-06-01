import React from 'react';
import { Container, Input } from "./styles";

interface InputProps {
  title: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAuthenticate = ({ title, type, value, onChange }: InputProps) => {
  return (
    <Container>
      <h2 className="input-authenticate-title">{title}</h2>
      <Input required type={type} value={value} onChange={onChange} />
    </Container>
  );
};

export default InputAuthenticate;
