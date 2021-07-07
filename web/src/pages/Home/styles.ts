import styled from 'styled-components';
import { colors } from '../../styles/colors';

const HomeContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .home-welcome {
    color: ${colors.grayMedium};
    margin: 2rem 2rem 0 0;
    font-size: 2.4rem;
    font-weight: 400;
    text-align: end;
    align-self: flex-end;
  }
`;

const BalancesRow = styled.div`
  width: 90%;
  min-height: 10rem;
  margin: 2rem 0;
  overflow: scroll;

  display: flex;
  flex-direction: row;
`;

const HomeContent = styled.div`
  flex: 1;

  width: 100%;
  height: 40rem;
  background-color: ${colors.white};
  margin-top: 2rem;
  padding: 0 2rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.1);
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  .home-resume {
    margin-top: 2rem;
    color: ${colors.grayMedium};
  }

  .home-resume-artifact-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { HomeContainer, BalancesRow, HomeContent };
