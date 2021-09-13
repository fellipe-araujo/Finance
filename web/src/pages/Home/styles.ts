import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 24rem;
  padding: 3rem 2rem 0;
  background-color: ${({ theme }) => theme.colors.purpleDark};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Welcome = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin: 2rem 2rem 0 0;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-align: start;
`;

const ButtonLogOut = styled.button`
  height: 3rem;
  margin-top: 2rem;
  background: transparent;
  text-decoration: none;
  border: 0;
`;

const MoneySvg = styled.img``;

const BalancesRow = styled.div`
  width: 90%;
  min-height: 10rem;
  margin: -6rem 0 2rem;
  overflow: scroll;

  display: flex;
  flex-direction: row;
`;

const HomeContent = styled.div`
  flex: 1;

  width: 100%;
  height: 40rem;
  margin-top: 2rem;
  padding: 0 2rem;
  border-radius: 2rem 2rem 0 0;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-left: 2rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

export {
  Header,
  Welcome,
  ButtonLogOut,
  MoneySvg,
  BalancesRow,
  HomeContent,
  Title,
};
