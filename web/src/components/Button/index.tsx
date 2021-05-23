import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string;
  isCreate: boolean;
}

const Button = ({ title, isCreate }: ButtonProps) => {
  return (
    <ButtonContainer create={isCreate}>
      <h1 className="button-title">{title}</h1>
    </ButtonContainer>
  );
};

export default Button;
