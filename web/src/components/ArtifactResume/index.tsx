import { useState, useEffect } from 'react';
import { Container } from './styles';

interface ArtifactProps {
  name?: string;
  total?: number;
}

const ArtifactResume = ({ name, total }: ArtifactProps) => {
  const [artifact, setArtifact] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const setColor = () => {
      if (name === 'Contas') {
        setArtifact('linear-gradient(95.32deg, #a9def9 0%, #e4f2fa 100%)');
        setTitle('#3A7B9C');
      } else if (name === 'Objetivos') {
        setArtifact('linear-gradient(95.32deg, #e4c1f9 0%, #eee2f4 100%)');
        setTitle('#AE84C8');
      } else if (name === 'Transações') {
        setArtifact('linear-gradient(95.32deg, #aaf5c8 0%, #e5f9ed 100%)');
        setTitle('#57B77D');
      } else if (name === 'Categorias') {
        setArtifact('linear-gradient(95.32deg, #f5ec97 0%, #f5f2da 100%)');
        setTitle('#BDB354');
      }
    };

    setColor();
  }, [name]);

  return (
    <Container artifact={artifact} title={title}>
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
