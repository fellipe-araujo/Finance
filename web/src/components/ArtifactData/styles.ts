import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ArtifactDataProps {
  artifact: string;
}

const Container = styled.div<ArtifactDataProps>`
  width: 20rem;
  height: 20rem;
  border-radius: 20rem;
  background: ${(props) => props.artifact};

  position: absolute;
  top: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .artifact-data-line {
    width: 70%;
    height: 0.1rem;
    background-color: ${colors.accountTitle};
    opacity: 0.2;
    margin: 0.7rem 0;
  }

  .artifact-data-title {
    color: ${colors.grayMedium};
  }

  .artifact-data-value {
    margin-top: 2rem;
    font-weight: 700;
    color: ${colors.grayLight};
  }
`;

export { Container };
