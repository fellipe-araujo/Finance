import { useState, useEffect } from "react";
import { ObjectivesContainer, ObjectivesList } from "./styles";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import ProgressCard from "../../components/ProgressCard";
import { UserObjective } from "../../utils/types";
import { formatPrice } from "../../utils/formatPrice";
import { useAuth } from "../../context/auth";
import objectiveService from "../../services/objectiveService";

const Objectives = () => {
  const [objectives, setObjectives] = useState<UserObjective[]>([]);
  const [objectivesAmount, setObjectivesAmount] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    const fetchAllObjectives = async () => {
      const response = await objectiveService.objectiveAll(user?._id!);
      setObjectives(response.reverse());

      setObjectivesAmount(Object.keys(response).length);
    };

    fetchAllObjectives();
  }, [user?._id]);

  return (
    <ObjectivesContainer>
      <PrimaryHeader title="Meus Objetivos" goTo="/objectives/create" />

      <ToastContainer />

      <ArtifactData
        title="Objetivos"
        subTitle="em processo"
        value={objectivesAmount.toString()}
        artifactType="Objetivos"
      />

      <ObjectivesList>
        {objectives.map((objective) => (
          <Link
            key={objective._id}
            className="objectives-link"
            to={`/objectives/${objective._id}`}
          >
            <ProgressCard
              progress={objective.progress!}
              name={objective.name!}
              goal={formatPrice(objective.goal!)}
            />
          </Link>
        ))}
      </ObjectivesList>
    </ObjectivesContainer>
  );
};

export default Objectives;
