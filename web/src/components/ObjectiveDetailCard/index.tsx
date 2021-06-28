import { colors } from "../../styles/colors";
import { Container, Title, Value } from "./styles";

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
      <h1 className="objective-title">{name}</h1>

      <div className="objective-card-line" />

      <div className="objective-value-group">
        <Title>Valor a ser alcançado:</Title>
        <Value color={colors.greenDark}>{goal}</Value>
      </div>

      <div className="objective-value-group">
        <Title>Valor atual:</Title>
        <Value color={colors.yellowDark}>{actual}</Value>
      </div>

      <div className="objective-value-group">
        <Title>Valor restante:</Title>
        <Value color={colors.redDark}>{remaining}</Value>
      </div>

      <div className="objective-card-line" />

      <Title>Descrição:</Title>
      <h1 className="objetive-description">{description}</h1>
    </Container>
  );
};

export default ObjectiveDetailCard;
