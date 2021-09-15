import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayDark};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { LoadingContainer };
