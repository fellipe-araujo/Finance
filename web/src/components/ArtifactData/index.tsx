import { Container, TitlesBox, Title, SubTitle, Amount } from './styles';

interface ArtifactDataProps {
  title: string;
  subTitle: string;
  value: string;
}

const ArtifactData = ({ title, subTitle, value }: ArtifactDataProps) => {
  return (
    <Container>
      <TitlesBox>
        <Title>{title}</Title>

        <div />

        <SubTitle>{subTitle}</SubTitle>
      </TitlesBox>

      <Amount>{value}</Amount>
    </Container>
  );
};

export default ArtifactData;
