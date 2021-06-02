import styled, { css } from "styled-components";

interface TypeProps {
  add?: boolean;
  remove?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem 0;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-transaction-image {
    width: 25rem;
    margin-bottom: 3rem;
  }

  .transaction-option-container {
    width: 100%;
    height: 4rem;
    background-color: #fff;
    margin: 1rem 0;
    border-radius: 0.8rem;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-transaction-value-title {
    font-size: 1.8rem;
    color: #202020;
    margin: 1.5rem 0;

    align-self: flex-start;
  }

  .new-transaction-input-currency {
    width: 100%;
    height: 4rem;
    color: #39393a;
    border-radius: 0.8rem;
    padding: 0 1rem;
    border: 0.2rem solid #AAF5C8;
  }

  .new-transaction-data-title {
    align-self: flex-start;
    font-size: 1.8rem;
    color: #202020;
    margin-top: 1rem;
  }

  .new-transaction-select-artifacts {
    width: 27rem;
    height: 4.8rem;
    margin: 1rem 0 2rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-transaction-select-artifacts select {
    background-color: #fff;
    width: 25rem;
    height: 4.8rem;
    font-size: 1.8rem;

    color: #39393a;
    border: 0;
    border-radius: 0.5rem;
  }

  .new-transaction-calendar-container {
    width: 100%;
    margin: 1rem 0 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .new-transaction-calendar-button {
    background: transparent;
    border: 0;
    align-self: flex-start;
  }

  .new-transaction-calendar-date {
    font-size: 1.8rem;
    margin-left: 1.5rem;
    color: #39393a;
  }
`;

const Type = styled.button<TypeProps>`
  width: 50%;
  height: 100%;
  text-decoration: none;
  background-color: #fff;
  border: 0.3rem solid #fff;
  transition: 0.1s;

  .option-title {
    font-size: 2rem;
    color: #39393a;
  }

  ${(props) =>
    props.add &&
    css`
      border-bottom-left-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
      border-color: #40923f;

      .option-title {
        color: #40923f;
        font-weight: 700;
      }
    `};

  ${(props) =>
    props.remove &&
    css`
      border-bottom-right-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      border-color: #bb4e4e;

      .option-title {
        color: #bb4e4e;
        font-weight: 700;
      }
    `};
`;

export { Container, Content, Options, Type };
