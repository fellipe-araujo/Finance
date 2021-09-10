import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.purpleMedium};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;
`;

const IconContainer = styled.button`
  width: 20%;
  margin: 0 .5rem;
  border: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.color};
`;

export { Container, IconContainer, Title };
