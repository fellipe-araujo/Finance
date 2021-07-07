import styled from 'styled-components';
import { colors } from '../../styles/colors';

const LoadingContainer = styled.div`
  height: 100vh;

  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loading-logo {
    width: 10rem;

    position: absolute;
    top: 3rem;
  }

  .loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .loading-text {
    margin-top: 2rem;
    color: ${colors.grayMedium};
  }
`;

export { LoadingContainer };
