import styled from 'styled-components';

const Container = styled.div`
  min-width: 20rem;
  min-height: 20rem;
  border-radius: 20rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.artifactMedium};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.artifactDark} 0%,
    ${({ theme }) => theme.colors.artifactLight} 100%
  );
  margin: 8rem 0 1rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitlesBox = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 70%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.artifactMedium};
    opacity: 0.2;
    margin: 0.7rem 0;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

const Amount = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export { Container, TitlesBox, Title, SubTitle, Amount };
