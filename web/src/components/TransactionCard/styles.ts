import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${colors.white};
  box-shadow: 0 0 3rem rgb(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;

  .transaction-card-button {
    border: 0;
    text-decoration: none;
    background: transparent;
  }

  .transaction-card-line {
    width: 95%;
    height: 0.1rem;
    background-color: ${colors.line};
    margin: 0.7rem 0;
    align-self: center;
  }

  .transaction-card-info {
    margin: 0.3rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .transaction-card-title {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.grayDark};
  }

  .transaction-card-subtitle {
    font-size: 1.6rem;
    color: ${colors.grayMedium};
  }

  .transaction-card-text {
    font-size: 1.6rem;
    color: ${colors.grayLight};
  }

  .transaction-card-value {
    font-size: 1.6rem;
    color: ${(props) => props.color};
  }

  .transaction-card-category {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.backgroundColor};
  }
`;

export { Container };
