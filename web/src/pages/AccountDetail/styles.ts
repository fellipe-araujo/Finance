import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 13rem;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 85%;
  height: 20rem;
  background: ${({ theme }) => theme.colors.grayMedium};
  border-radius: 0.8rem;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.2);
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.white};
`;

const Separator = styled.div`
  width: 90%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  margin: 1.5rem 0;
`;

const ValueBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.h2`
  color: ${(props) => props.color};
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Content, Card, Title, Separator, ValueBox, Value, Options };
