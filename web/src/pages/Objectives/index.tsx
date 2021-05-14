import { ObjectivesContainer, ObjectivesList } from './styles';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import ProgressCard from '../../components/ProgressCard';

const Objectives = () => {
  return (
    <ObjectivesContainer>
      <PrimaryHeader title="Meus Objetivos" goTo="/" />
      <ArtifactData
        title="Objetivos"
        subTitle="em Processo"
        value="4"
        artifactType="Objectives"
      />

      <ObjectivesList>
        <ProgressCard progress={0} title="Objetivo 1" value="R$ 600,00" />

      </ObjectivesList>
    </ObjectivesContainer>
  );
};

export default Objectives;
