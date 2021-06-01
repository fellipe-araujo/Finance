import { Container, Input } from "./styles";
import { setBorder } from "../../utils/setBorder";

interface InputAppProps {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputApp = ({ title, name, value, onChange }: InputAppProps) => {
  return (
    <Container>
      <h1 className="input-app-title">{title}</h1>
      <Input border={setBorder(name)} value={value} onChange={onChange} />
    </Container>
  );
};

export default InputApp;
