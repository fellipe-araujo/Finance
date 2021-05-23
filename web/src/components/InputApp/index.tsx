import { Container, Input } from './styles';
import { setBorder } from '../../utils/setBorder';

interface InputAppProps {
  title: string;
  name: string;
}

const InputApp = ({ title, name }: InputAppProps) => {
  return (
    <Container>
      <h1 className="input-app-title">{title}</h1>
      <Input border={setBorder(name)} />
    </Container>
  );
};

export default InputApp;
