import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: #FFF;
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
    background-color: #D7D7D7;
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
    color: #39393A;
  }

  .transaction-card-subtitle,
  .transaction-card-text {
    font-size: 1.6rem;
    color: #39393A;
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
