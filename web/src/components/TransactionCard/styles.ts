import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  box-shadow: 0 0 3rem rgb(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
`;

const TransactionDataBox = styled.div`
  margin: 0.3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.white};
`;

const TrashButton = styled.button`
  border: 0;
  text-decoration: none;
  background: transparent;
`;

const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  opacity: 0.1;
  margin: 0.7rem 0;
  align-self: center;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.grayLight};
`;

const Value = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${(props) => props.color};
`;

const Text = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.white};
`;

const CategoryCard = styled.div<ContainerProps>`
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayDark};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    width: 0.4rem;
    height: 100%;
    background-color: ${(props) => props.backgroundColor};
  }

  > h2 {
    margin: 0 1rem;
    font-size: ${({ theme }) => theme.fonts.size.subTitle};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    color: ${({ theme }) => theme.colors.grayLight};
  }
`;

export {
  Container,
  TransactionDataBox,
  Title,
  TrashButton,
  Separator,
  SubTitle,
  Value,
  Text,
  CategoryCard,
};
