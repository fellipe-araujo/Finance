import { InputHTMLAttributes } from 'react';
import { Container, Label, Input } from './styles';

interface InputAppProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const InputApp = ({ title, ...rest }: InputAppProps) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input {...rest} />
    </Container>
  );
};

export default InputApp;
