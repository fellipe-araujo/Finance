import { ButtonContainer, Title } from "./styles";

interface ButtonProps {
  title: string;
  isCreate: boolean;
  onClick(): void;
}

const Button = ({ title, isCreate, onClick }: ButtonProps) => {
  return (
    <ButtonContainer create={isCreate} onClick={onClick}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
