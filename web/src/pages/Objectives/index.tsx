import { Link } from 'react-router-dom';
import { ObjectivesContainer, ObjectivesList } from './styles';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import ProgressCard from '../../components/ProgressCard';

const Objectives = () => {
  return (
    <ObjectivesContainer>
      <PrimaryHeader title="Meus Objetivos" goTo="/objectives/create" />
      <ArtifactData
        title="Objetivos"
        subTitle="em Processo"
        value="4"
        artifactType="Objetivos"
      />

      <ObjectivesList>
        <Link className="objectives-link" to={`/objectives/${1}`}>
          <ProgressCard progress={0} title="Objetivo 1" value="R$ 600,00" />
        </Link>
      </ObjectivesList>
    </ObjectivesContainer>
  );
};

export default Objectives;
