import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.div`
  width: 90%;
  background-color: ${colors.white};
  border-radius: 0.8rem;
  margin-top: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  .objective-title {
    font-size: 2.2rem;
    color: ${colors.grayDark};
  }

  .objective-card-line {
    width: 95%;
    height: 0.1rem;
    background-color: ${colors.line};
    margin: 1rem 0;

    align-self: center;
  }

  .objective-value-group {
    width: 100%;
  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .objetive-description {
    margin-left: 2rem;
    font-size: 1.6rem;
    color: ${colors.grayLight};
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  color: ${colors.grayMedium};
`;

const Value = styled(Title)`
  font-size: 1.6rem;
  color: ${props => props.color};
`;

export { Container, Title, Value };
