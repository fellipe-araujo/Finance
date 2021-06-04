import { Container, Input } from "./styles";
import { setBorder } from "../../utils/setBorder";

interface InputAppProps {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputApp = ({
  title,
  name,
  value,
  onChange,
  required,
}: InputAppProps) => {
  return (
    <Container>
      <h1 className="input-app-title">{title}</h1>
      <Input
        border={setBorder(name)}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Container>
  );
};

export default InputApp;
