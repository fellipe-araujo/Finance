import styled from 'styled-components';

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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .new-category-image {
    width: 30rem;
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Content, Options };
