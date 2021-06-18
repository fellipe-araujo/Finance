import styled from 'styled-components';
import { colors } from '../../styles/colors';

const HomeContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .home-balance {
    color: ${colors.grayMedium};
    margin-top: 2rem;
    font-weight: 700;
  }
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  margin-top: 6rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  .home-resume {
    margin-top: 2rem;
    color: ${colors.grayMedium};
  }
`;

export { HomeContainer, HomeContent };
