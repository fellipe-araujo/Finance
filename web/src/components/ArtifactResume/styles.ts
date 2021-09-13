import styled from 'styled-components';

const Container = styled.div`
  width: 30rem;
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.2);
  background: linear-gradient(
    95.32deg,
    ${({ theme }) => theme.colors.artifactDark} 0%,
    ${({ theme }) => theme.colors.artifactLight} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.white};
`;

const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.artifactMedium};
  align-self: center;
  opacity: 0.3;
`;

const ResumeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.artifactMedium};
`;

const Quantity = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Title, Separator, ResumeBox, SubTitle, Quantity };
