import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  margin: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: 700;
`;

const BoxColor = styled.div`
  width: 0.7rem;
  height: 100%;
  background-color: ${(props) => props.color};

  position: absolute;
  left: 0;
`;

export { Container, BoxColor, Title };
