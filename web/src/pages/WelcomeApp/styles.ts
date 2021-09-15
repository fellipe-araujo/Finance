import styled, { keyframes } from 'styled-components';

const messageAnimation = keyframes`
 from { opacity: 0; }
  to { opacity: 1; }
`;

const LoadingContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    167.94deg,
    ${({ theme }) => theme.colors.purpleDark} 0%,
    ${({ theme }) => theme.colors.purpleLight} 100%
  );

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 10rem;
  }
`;

const Title = styled.div`
  margin-top: 1rem;
  letter-spacing: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.white};
`;

const LoaderBox = styled.div`
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextsBox = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: calc(100vh / 2.5);
`;

const Text = styled.div`
  text-align: center;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.white};
  animation: ${messageAnimation} 2s linear;
`;

export { LoadingContainer, Header, Title, LoaderBox, TextsBox, Text };
