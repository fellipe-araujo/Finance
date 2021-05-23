import styled from 'styled-components';

interface ProgressProps {
  width: string;
}

const ProgressContainer = styled.div`
  height: 10rem;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(14, 9, 9, 0.2);
  overflow: hidden;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.width || 'auto'};
  height: 100%;
  background-color: ${(props) => props.color || '#FFF'};

  align-self: flex-start;
`;

const ProgressTextGroup = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProgressTitle = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.color || '#39393A'};
`;

const ProgressValue = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.color || '#39393A'};
`;

export {
  ProgressContainer,
  Progress,
  ProgressTextGroup,
  ProgressTitle,
  ProgressValue,
};
