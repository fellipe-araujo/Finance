import styled, { css } from 'styled-components';

interface Props {
  totalAccounts?: boolean;
}

const Container = styled.div<Props>`
  min-width: 27rem;
  padding: 1.8rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.totalAccounts
      ? css`
        linear-gradient(
          135deg,
          ${({ theme }) => theme.colors.artifactDark} 0%,
          ${({ theme }) => theme.colors.artifactLight} 100%
        );`
      : css`
          ${({ theme }) => theme.colors.grayMedium};
        `};
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

const SubTitle = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${(props) =>
    props.totalAccounts
      ? css`
        ${({ theme }) => theme.colors.financeBlue};`
      : css`
          ${({ theme }) => theme.colors.grayLight};
        `};
`;

const Amount = styled.h1`
  font-size: 3rem;
  margin-top: 2.3rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

export { Container, Header, Box, Title, SubTitle, Amount };
