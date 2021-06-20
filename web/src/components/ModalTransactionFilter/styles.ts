import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-filter-logo {
    width: 5rem;
  }

  .modal-filter-button {
    width: 100%;
    background: transparent;
    border: 0;
    color: ${colors.grayMedium};
    margin: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-filter-title {
    margin: 2rem 0 1rem;
    font-size: 1.8rem;
    text-align: center;
  }

  .modal-filter-option {
    font-size: 2rem;
  }

  .modal-filter-line {
    width: 80%;
    height: 0.1rem;
    background-color: ${colors.grayMedium};
    opacity: 0.2;
  }
`;

export { Container };
