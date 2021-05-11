import './styles.css';

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
  let artifact = '';

  if (artifactType === 'Accounts') {
    artifact = 'artifact-account';
  } else if (artifactType === 'Objectives') {
    artifact = 'artifact-objective';
  } else if (artifactType === 'Transactions') {
    artifact = 'artifact-transaction';
  } else if (artifactType === 'Categories') {
    artifact = 'artifact-category';
  }
  return (
    <div className={`artifact-data-container ${artifact}`}>
      <h2 className="artifact-data-title">{title}</h2>
      <h2 className="artifact-data-subtitle">{subTitle}</h2>
      <h2 className="artifact-data-value">{value}</h2>
    </div>
  );
};

export default ArtifactData;
