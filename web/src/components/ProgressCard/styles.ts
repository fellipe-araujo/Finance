import styled from "styled-components";

interface ProgressProps {
  width: string;
}

const ProgressContainer = styled.div`
  width: 30rem;
  height: 10rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  box-shadow: 0 0 1rem rgba(14, 9, 9, 0.2);
  margin: 1rem 0;
  overflow: hidden;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.width || "auto"};
  height: 100%;
  background-color: ${(props) => props.color};

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
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${(props) => props.color || props.theme.colors.grayLight};
`;

const ProgressValue = styled.h1`
  font-size: 2.4rem;
  color: ${(props) => props.color || props.theme.colors.grayLight};
`;

export {
  ProgressContainer,
  Progress,
  ProgressTextGroup,
  ProgressTitle,
  ProgressValue,
};
