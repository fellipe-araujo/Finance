import React from "react";
import { Container, Title, Input } from "./styles";

interface InputProps {
  title: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAuthenticate = ({ title, type, value, onChange }: InputProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input required type={type} value={value} onChange={onChange} />
    </Container>
  );
};

export default InputAuthenticate;
