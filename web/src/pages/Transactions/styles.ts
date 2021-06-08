import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons-container {
    width: 90%;
    margin: 16rem 0 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .button-icon-container {
    width: 20%;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-title-container {
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-title {
    font-size: 1.6rem;
    color: #39393A;
  }
`;

const ButtonOption = styled.button`
  width: 13rem;
  background-color: #fff;
  border: 0;
  text-decoration: none;
  border-radius: 0.5rem;
  padding: 0.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.div`
  width: 90%;
  height: 65%;
  overflow-y: scroll;
`;

export { Container, List, ButtonOption };
