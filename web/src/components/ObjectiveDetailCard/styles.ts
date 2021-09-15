import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border-radius: 0.8rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Separator = styled.div`
  width: 95%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  margin: 1rem 0;

  align-self: center;
`;

const ValuesBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.white};
`;

const Value = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.color};
`;

const Description = styled.h2`
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Title, Separator, ValuesBox, SubTitle, Value, Description };
