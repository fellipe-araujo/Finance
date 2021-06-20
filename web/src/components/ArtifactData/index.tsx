import { Container } from "./styles";
import { setBackground } from "../../utils/setBackground";

interface ArtifactDataProps {
  title: string;
  subTitle: string;
  value: string;
  artifactType: string;
}

const ArtifactData = ({
  title,
  subTitle,
  value,
  artifactType,
}: ArtifactDataProps) => {
  return (
    <Container artifact={setBackground(artifactType).artifact}>
      <h2 className="artifact-data-title">{title}</h2>

      <div className="artifact-data-line" />

      <h2 className="artifact-data-title">{subTitle}</h2>
      <h2 className="artifact-data-value">{value}</h2>
    </Container>
  );
};

export default ArtifactData;
