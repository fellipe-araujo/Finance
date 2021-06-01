import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 90%;
  height: 65%;
  margin-top: 15rem;
  overflow-y: scroll;
`;

export { Container, List };
