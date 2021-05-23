import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 0.8rem;
  margin-top: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  .objective-title {
    font-size: 2.4rem;
    color: #39393A;
  }

  .objective-card-line {
    width: 90%;
    height: 0.1rem;
    background-color: #D7D7D7;
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
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #39393A;
`;

const Value = styled(Title)`
  font-size: 2rem;
  color: ${props => props.color};
`;

export { Container, Title, Value };
