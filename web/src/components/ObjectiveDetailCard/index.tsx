import {
  Container,
  Title,
  Separator,
  ValuesBox,
  SubTitle,
  Value,
  Description,
} from './styles';
import theme from '../../styles/theme';

interface ObjectiveDetailCardProps {
  name: string;
  goal: string;
  actual: string;
  remaining: string;
  description: string;
}

const ObjectiveDetailCard = ({
  name,
  goal,
  actual,
  remaining,
  description,
}: ObjectiveDetailCardProps) => {
  return (
    <Container>
      <Title className="objective-title">{name}</Title>

      <Separator className="objective-card-line" />

      <ValuesBox className="objective-value-group">
        <SubTitle>Valor a ser alcançado:</SubTitle>
        <Value color={theme.colors.greenDark}>{goal}</Value>
      </ValuesBox>

      <ValuesBox className="objective-value-group">
        <SubTitle>Valor atual:</SubTitle>
        <Value color={theme.colors.yellowDark}>{actual}</Value>
      </ValuesBox>

      <ValuesBox className="objective-value-group">
        <SubTitle>Valor restante:</SubTitle>
        <Value color={theme.colors.redDark}>{remaining}</Value>
      </ValuesBox>

      <Separator className="objective-card-line" />

      <SubTitle>Descrição:</SubTitle>
      <Description className="objetive-description">{description}</Description>
    </Container>
  );
};

export default ObjectiveDetailCard;
