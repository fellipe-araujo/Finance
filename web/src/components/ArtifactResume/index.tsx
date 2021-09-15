import {
  Container,
  Title,
  Separator,
  ResumeBox,
  SubTitle,
  Quantity,
} from './styles';

interface ArtifactProps {
  name?: string;
  total?: number;
}

const ArtifactResume = ({ name, total }: ArtifactProps) => {
  return (
    <Container>
      <Title className="artifact-title">{name}</Title>

      <Separator className="artifact-resume-line" />

      <ResumeBox className="artifact-resume-quantity">
        <SubTitle className="artifact-resume-total">Total:</SubTitle>
        <Quantity className="artifact-resume-total">{total}</Quantity>
      </ResumeBox>
    </Container>
  );
};

export default ArtifactResume;
