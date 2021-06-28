import { useState, useEffect } from "react";
import { colors } from "../../styles/colors";
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
  const [progressColor, setProgressColor] = useState(colors.white);
  const [titleColor, setTitleColor] = useState(colors.grayMedium);

  useEffect(() => {
    const setObjectiveColor = () => {
      if (progress < 50) {
        setProgressColor(colors.redLight);
        setTitleColor(colors.redDark);
      } else if (progress >= 50 && progress < 70) {
        setProgressColor(colors.yellowLight);
        setTitleColor(colors.yellowDark);
      } else if (progress >= 70 && progress <= 100) {
        setProgressColor(colors.greenLight);
        setTitleColor(colors.greenDark);
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
