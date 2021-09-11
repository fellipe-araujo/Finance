import styled from 'styled-components';

const Container = styled.div`
  width: 27rem;
  padding: 1.8rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
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
  font-size:  ${({ theme }) => theme.fonts.size.title};
  color: ${({ theme }) => theme.colors.white};
  font-weight:  ${({ theme }) => theme.fonts.weight.light};
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight:  ${({ theme }) => theme.fonts.weight.light};
`;

const Amount = styled.h1`
  font-size: 3rem;
  margin-top: 2.3rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight:  ${({ theme }) => theme.fonts.weight.light};
`;


export { Container, Header, Box, Title, SubTitle, Amount };
