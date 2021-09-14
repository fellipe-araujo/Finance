import { Container, TitleBox, Title, ValueBox, Value } from "./styles";

interface AccountCardProps {
  title: string;
  value: string;
}

const AccountCard = ({ title, value }: AccountCardProps) => {
  return (
    <Container>
      <TitleBox>
        <Title className="account-card-title">{title}</Title>
      </TitleBox>
      <ValueBox>
        <Value className="account-card-value">{value}</Value>
      </ValueBox>
    </Container>
  );
};

export default AccountCard;
