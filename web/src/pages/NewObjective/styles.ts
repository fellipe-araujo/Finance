import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem 0;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-objective-image {
    width: 25rem;
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-objective-value-title {
    font-size: 1.8rem;
    color: ${colors.grayMedium};
    margin: 1.5rem 0;

    align-self: flex-start;
  }

  .new-objective-input-currency {
    width: 100%;
    height: 4rem;
    color: ${colors.grayMedium};
    border-radius: 0.8rem;
    padding: 0 1rem;
    border: 0.2rem solid ${colors.objectiveDark};
  }
`;

export { Container, Content, Options };
