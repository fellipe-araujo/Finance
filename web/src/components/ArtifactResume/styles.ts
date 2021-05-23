import styled from 'styled-components';

interface ArtifactProps {
  artifact: string;
}

const Container = styled.div<ArtifactProps>`
  width: 30rem;
  height: 9rem;
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.2);
  background: ${(props) => props.artifact || '#FFF'};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .artifact-title {
    font-size: 2.2rem;
    color: #39393a;
  }

  .artifact-resume-line {
    width: 100%;
    height: 0.1rem;
    background-color: ${(props) => props.title || '#505050'};
    align-self: center;
    opacity: 0.3;
  }

  .artifact-resume-quantity {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .artifact-resume-total {
    font-size: 1.8rem;
    color: ${(props) => props.title || '#39393A'};
  }
`;

export { Container };
