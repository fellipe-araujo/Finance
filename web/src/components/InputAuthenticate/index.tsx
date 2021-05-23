import { Container, Input } from './styles';

interface InputProps {
  title: string;
  type: string;
}

const InputAuthenticate = ({ title, type }: InputProps) => {
  return (
    <Container>
      <h2 className="input-authenticate-title">{title}</h2>
      <Input required type={type} />
    </Container>
  );
};

export default InputAuthenticate;
