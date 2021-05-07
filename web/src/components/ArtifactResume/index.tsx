import './styles.css';

interface ArtifactProps {
  name?: string;
  total?: number;
}

const ArtifactResume = ({ name, total }: ArtifactProps) => {
  let artifact = '';

  if (name === 'Contas') {
    artifact = 'artifact-account';
  } else if (name === 'Objetivos') {
    artifact = 'artifact-objective';
  } else if (name === 'Transações') {
    artifact = 'artifact-transaction';
  } else if (name === 'Categorias') {
    artifact = 'artifact-category';
  }
  return (
    <div className={`artifact-resume-container ${artifact}`}>
      <h1 className="artifact-resume-title">{name}</h1>

      <div className="line" />

      <div className="artifact-resume-quantity">
        <h2 className="artifact-resume-total">Total:</h2>
        <h2 className="artifact-resume-total">{total}</h2>
      </div>
    </div>
  );
};

export default ArtifactResume;
