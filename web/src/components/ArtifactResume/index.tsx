import { Container } from './styles';
import { setBackground } from '../../utils/setBackground';

interface ArtifactProps {
  name?: string;
  total?: number;
}

const ArtifactResume = ({ name, total }: ArtifactProps) => {
  return (
    <Container
      artifact={setBackground(name!).artifact}
      title={setBackground(name!).title}
    >
      <h1 className="artifact-title">{name}</h1>

      <div className="artifact-resume-line" />

      <div className="artifact-resume-quantity">
        <h2 className="artifact-resume-total">Total:</h2>
        <h2 className="artifact-resume-total">{total}</h2>
      </div>
    </Container>
  );
};

export default ArtifactResume;
