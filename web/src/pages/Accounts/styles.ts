import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 90%;
  margin-top: 15rem;

  .accounts-link {
    text-decoration: none;
  }
`;

export { Container, List };
