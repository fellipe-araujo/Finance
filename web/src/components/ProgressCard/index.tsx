import { useState, useEffect } from "react";
import {
  ProgressContainer,
  Progress,
  ProgressTextGroup,
  ProgressTitle,
  ProgressValue,
} from "./styles";

interface ProgressCardProps {
  name: string;
  goal: string;
  progress: number;
}

const ProgressCard = ({ name, goal, progress }: ProgressCardProps) => {
  const [progressColor, setProgressColor] = useState("#FFF");
  const [titleColor, setTitleColor] = useState("#39393A");

  useEffect(() => {
    const setObjectiveColor = () => {
      if (progress < 50) {
        setProgressColor("#FF8888");
        setTitleColor("#BB4E4E");
      } else if (progress >= 50 && progress < 70) {
        setProgressColor("#FFF973");
        setTitleColor("#BCAF35");
      } else if (progress >= 70 && progress <= 100) {
        setProgressColor("#89FF87");
        setTitleColor("#40923F");
      }
    };

    setObjectiveColor();
  }, [progress]);

  return (
    <ProgressContainer>
      <ProgressTextGroup>
        <ProgressTitle color={titleColor}>{name}</ProgressTitle>
        <ProgressValue color={titleColor}>{goal}</ProgressValue>
      </ProgressTextGroup>
      <Progress width={`${progress}%`} color={progressColor} />
    </ProgressContainer>
  );
};

export default ProgressCard;
