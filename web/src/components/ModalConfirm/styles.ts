import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-confirm-logo {
    width: 5rem;
  }

  .modal-confirm-description {
    margin: 2rem 0 1rem;
    font-size: 1.8rem;
    text-align: center;
  }

  .modal-confirm-buttons-group {
    width: 100%;
    margin-top: 3rem;

    display: flex;
    flex-direction: row;
  }

  .modal-confirm-cancel {
    width: 50%;
    background: transparent;
    border: 0;
    color: ${colors.redLight};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-confirm-confirm {
    width: 50%;
    background: transparent;
    border: 0;
    color: ${colors.grayMedium};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-confirm-title {
    font-size: 2rem;
  }
`;

export { Container };
