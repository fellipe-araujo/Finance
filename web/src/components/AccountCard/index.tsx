import { Container, TitleBox, ValueBox } from './styles';

interface AccountCardProps {
  title: string;
  value: string;
}

const AccountCard = ({ title, value }: AccountCardProps) => {
  return (
    <Container>
      <TitleBox>
        <h1 className="account-card-title">{title}</h1>
      </TitleBox>
      <ValueBox>
        <h1 className="account-card-value">{value}</h1>
      </ValueBox>
    </Container>
  );
};

export default AccountCard;
