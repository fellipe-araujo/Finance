import styled from 'styled-components';

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

  .artifact-data-title,
  .artifact-data-value {
    color: #39393a;
  }

  .artifact-data-value {
    margin-top: 2rem;
    font-weight: 700;
  }
`;

export { Container };
