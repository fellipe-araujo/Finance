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

  > img {
    width: 30rem;
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Content, Options };
