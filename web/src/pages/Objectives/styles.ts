import styled from "styled-components";

export const ObjectivesContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ObjectivesList = styled.div`
  width: 90%;
  height: 65%;
  margin-top: 15rem;
  overflow-y: scroll;

  .objectives-link {
    text-decoration: none;
  }
`;
