import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.purpleMedium};
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  > div {
    width: 3rem;
  }
`;

const LinkGoBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
`;

export { Container, LinkGoBack, Title };
