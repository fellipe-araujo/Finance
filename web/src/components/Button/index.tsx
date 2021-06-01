import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  isCreate: boolean;
  onClick(): void;
}

const Button = ({ title, isCreate, onClick }: ButtonProps) => {
  return (
    <ButtonContainer create={isCreate} onClick={onClick}>
      <h1 className="button-title">{title}</h1>
    </ButtonContainer>
  );
};

export default Button;
