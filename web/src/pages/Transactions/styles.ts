import styled from 'styled-components';
import { colors } from '../../styles/colors';

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
    justify-content: space-between;
  }
`;

const ModalAppContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-app-logo {
    width: 5rem;
  }

  .modal-app-title {
    font-size: 2.2rem;
    margin: 2rem 0;
    color: ${colors.grayMedium};
  }

  .modal-app-select-period {
    height: 4.8rem;
    margin: 1rem 0 2rem;
    border: 0;
    background-color: transparent;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-app-select-period select {
    background-color: ${colors.white};
    width: 25rem;
    height: 4.8rem;
    font-size: 1.8rem;

    color: ${colors.grayLight};
    border: 0;
    border-radius: 0.5rem;
  }
`;

const ButtonOption = styled.button`
  background-color: transparent;
  border: 0;
  text-decoration: none;
  border-bottom: 0.1rem solid ${colors.grayLight};
  padding: 0.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  .button-title {
    margin-left: 1rem;
    font-size: 1.6rem;
    color: ${colors.grayMedium};
  }
`;

const List = styled.div`
  width: 90%;
  height: 65%;
  overflow-y: scroll;

  .report-logo {
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

export { Container, ModalAppContainer, List, ButtonOption };
